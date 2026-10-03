import operationData from './operations.json' with {type:'json'};
import provenance from './provenance.json' with {type:'json'};
import {Ajv,type ValidateFunction} from 'ajv';
import addFormats from 'ajv-formats';
import {open,lstat,unlink} from 'node:fs/promises';
import {constants} from 'node:fs';
import {isAbsolute} from 'node:path';
import {createHash} from 'node:crypto';
import {FourthwallClient,type Json,type QueryParam} from '../api/client.js';
import {FourthwallError,UsageError} from '../api/errors.js';
import {selectAccount,type Config} from '../config.js';
import type {Risk} from '../safety.js';
type Param={name:string;key:string;location:string;required:boolean;schema:Json;explode:boolean};
export type Operation={name:string;operationId:string;title:string;description:string;method:string;path:string;group:string;risk:Risk;params:Param[];bodySchema:Json|null;bodyRequired:boolean;privateOutput:boolean;pagination:boolean;scopes:unknown;source:string};
export type ToolSpec={name:string;title:string;description:string;group:string;inputSchema:Json;risk:Risk;handler:(args:Json,client:FourthwallClient)=>Promise<unknown>};
const operations=operationData as unknown as Operation[];
const ajv=new Ajv({allErrors:true,strict:false,formats:{int32:true,int64:true}});
(addFormats as unknown as (a:Ajv)=>void)(ajv);
const bodyValidators=new Map(operations.filter(o=>o.bodySchema).map(o=>[o.name,ajv.compile(o.bodySchema!)]));
function check(v:ValidateFunction,value:unknown){if(!v(value))throw new UsageError(ajv.errorsText(v.errors,{separator:'; '}));}
const account={type:'string',description:'Exact private shop profile label; not a provider identity or authorization proof.'};
const confirm={type:'boolean',description:'Explicit approval for this exact provider effect or local private-file operation.'};
function bodyProperties(op:Operation):Json{return op.bodySchema&&!op.bodySchema.oneOf?op.bodySchema.properties??{}:{};}
function fieldsFor(op:Operation){
  const properties:Json=Object.fromEntries(op.params.map(p=>[p.key,p.schema]));
  for(const [key,value] of Object.entries(bodyProperties(op)))if(!(key in properties))properties[key]=value;
  Object.assign(properties,{account});if(op.risk!=='read')properties.confirm=confirm;
  if(op.bodySchema){properties.payload={...op.bodySchema,description:'Complete current native JSON body; cannot mix with native body flags or payload_file.'};properties.payload_file={type:'string',minLength:1,description:'Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags.'};}
  if(op.privateOutput)properties.output_file={type:'string',minLength:1,description:'Absolute NEW owner-private receipt file; exclusive0600 creation, no overwrite. Upload/public-token URLs never enter ordinary output.'};
  return{type:'object',properties,required:[...op.params.filter(p=>p.required).map(p=>p.key),...(op.privateOutput?['output_file']:[])],additionalProperties:false};
}
async function readPrivateFile(path:string,maxBytes:number,ownerOnly=false){
  let f;try{
    if(!isAbsolute(path)||(await lstat(path)).isSymbolicLink())throw Error();
    f=await open(path,constants.O_RDONLY|(constants.O_NOFOLLOW??0));const stat=await f.stat();
    if(!stat.isFile()||stat.size>maxBytes||(ownerOnly&&process.platform!=='win32'&&((stat.mode&0o077)||stat.uid!==process.getuid?.())))throw Error();
    const bytes=await f.readFile();if(bytes.length>maxBytes||bytes.length!==stat.size)throw Error();return bytes;
  }catch{throw new UsageError('Input file must be an absolute regular non-symlink file within the stated size and privacy limits.');}finally{await f?.close();}
}
async function fileJSON(path:string,ownerOnly=false){try{return JSON.parse((await readPrivateFile(path,1048576,ownerOnly)).toString('utf8'));}catch{throw new UsageError('Input must be a valid bounded JSON file with required privacy settings.');}}
function credentialFields(value:unknown):boolean {
  if(Array.isArray(value))return value.some(credentialFields);
  if(value&&typeof value==='object')return Object.entries(value).some(([k,v])=>/^(password|username|access_token|refresh_token|authorization|client_secret|api_key)$/i.test(k)||credentialFields(v));
  return false;
}
async function prepare(op:Operation,args:Json){
  const paramKeys=new Set(op.params.map(p=>p.key));
  const flat=Object.fromEntries(Object.keys(bodyProperties(op)).filter(k=>!paramKeys.has(k)&&args[k]!==undefined).map(k=>[k,args[k]]));
  if((args.payload!==undefined||args.payload_file!==undefined)&&Object.keys(flat).length)throw new UsageError('Do not mix body flags with payload or payload_file.');
  if(args.payload!==undefined&&args.payload_file!==undefined)throw new UsageError('Use payload or payload_file, not both.');
  const hasBody=op.bodySchema&&(op.bodyRequired||args.payload!==undefined||args.payload_file!==undefined||Object.keys(flat).length);
  const body=hasBody?(args.payload_file?await fileJSON(args.payload_file):args.payload??flat):undefined;
  if(body!==undefined){check(bodyValidators.get(op.name)!,body);if(credentialFields(body))throw new UsageError('Credentials belong to private profile configuration, never native bodies.');}
  for(const key of ['url','defaultFileUrl'])if(body?.[key]){let u:URL;try{u=new URL(body[key]);}catch{throw new UsageError('Invalid native callback/file URL.');}if(u.protocol!=='https:'||u.username||u.password)throw new UsageError('Native callbacks/file URLs require HTTPS without embedded credentials.');}
  if(op.operationId==='create-product'){
    if(body.publishOnCreate===undefined)body.publishOnCreate=false;
    if(body.type==='digital'&&(!Number.isFinite(body.price)||body.price<0))throw new UsageError('Digital price must be a nonnegative USD amount.');
  }
  if(op.operationId.includes('upload-url')&&(!Number.isSafeInteger(body.size)||body.size<=0||body.size>64*1048576||typeof body.contentType!=='string'||/[\r\n]/.test(body.contentType)))throw new UsageError('Upload request size must be1–64MiB exact bytes with a valid MIME type; this is a local cap, not provider entitlement.');
  for(const field of ['created_at','updated_at'])if(args[field+'_gt']&&args[field+'_lt']&&Date.parse(args[field+'_gt'])>=Date.parse(args[field+'_lt']))throw new UsageError('Native time range lower bound must precede upper bound.');
  const path=op.params.filter(p=>p.location==='path').reduce((s,p)=>s.replace('{'+p.name+'}',encodeURIComponent(String(args[p.key]))),op.path);
  const query:QueryParam[]=op.params.filter(p=>p.location==='query'&&args[p.key]!==undefined).map(p=>({name:p.name,value:args[p.key],explode:p.explode}));
  return{method:op.method,path,query,body};
}
async function savePrivate(path:string,value:unknown){
  if(!isAbsolute(path))throw new UsageError('output_file must be absolute.');let f;
  try{f=await open(path,'wx',0o600);}catch{throw new UsageError('Cannot exclusively create output_file; never overwrites or follows a target symlink.');}
  try{const actual=typeof value==='function'?await(value as()=>Promise<unknown>)():value;const bytes=Buffer.from(JSON.stringify(actual)+'\n');if(bytes.length>5*1048576)throw new UsageError('Private output exceeds5MiB local cap.');await f.writeFile(bytes);return{saved:true,output_file:path,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')};}
  catch(e){await f.close();f=undefined;await unlink(path).catch(()=>{});throw e;}finally{await f?.close();}
}
function uploadURL(value:unknown){
  if(typeof value!=='string')throw new UsageError('Missing private signed upload URL.');let u:URL;try{u=new URL(value);}catch{throw new UsageError('Invalid signed upload URL.');}
  if(u.protocol!=='https:'||u.port&&u.port!=='443'||u.username||u.password||u.hash||!(u.hostname==='storage.googleapis.com'||u.hostname.endsWith('.storage.googleapis.com')))throw new UsageError('Upload requires an HTTPS Google Storage receipt without credentials/fragment or alternate host/port. No arbitrary network target.');
  return u;
}
async function execute(op:Operation,args:Json,c:FourthwallClient){
  const call=await prepare(op,args),run=()=>c.request(call.method,call.path,call.query,call.body,args.account);
  if(!op.privateOutput)return c.sanitize(await run());
  return savePrivate(args.output_file,async()=>{
    const receipt=await run();const profile=selectAccount(c.config,args.account).name;
    if(op.operationId==='get-public-token'){if(typeof receipt.token!=='string')throw new FourthwallError('Invalid native public token receipt.');return{receiptVersion:1,operation:op.name,profile,token:receipt.token};}
    uploadURL(receipt.uploadUrl);if(typeof receipt.fileUrl!=='string')throw new FourthwallError('Missing native file reference.');
    return{receiptVersion:1,operation:op.name,profile,request:call.body,product_id:args.product_id??null,uploadUrl:receipt.uploadUrl,fileUrl:receipt.fileUrl,...(receipt.expiresAt?{expiresAt:receipt.expiresAt}:{})};
  });
}
export const ALL_TOOLS:ToolSpec[]=operations.map(op=>({...op,inputSchema:fieldsFor(op),handler:(args,c)=>execute(op,args,c)}));
function helper(name:string,title:string,description:string,risk:Risk,properties:Json,required:string[],handler:ToolSpec['handler']){
  ALL_TOOLS.push({name,title,description,group:'local_workflows',risk,inputSchema:{type:'object',properties,required,additionalProperties:false},handler});
}
helper('list_accounts','List private shop profiles','Local labels/default/auth source availability only. No credential values, paths, provider identity or network.','read',{},[],async(_,c)=>({accounts:c.config.accounts.map(a=>({name:a.name,default:a.name===c.config.defaultAccount,authSource:a.credentialsFile?'private-json-file':a.accessToken?'existing-oauth-bearer':'shop-basic',configured:!!(a.credentialsFile||a.accessToken||a.username&&a.password)}))}));
helper('get_operation_schema','Inspect native contract','Local reviewed native method/path/query/body/scopes/rate limit and pinned schema provenance. No provider access or authority proof.','read',{operation:{type:'string',enum:operations.map(o=>o.name)}},['operation'],async a=>({operation:operations.find(o=>o.name===a.operation),source:provenance.source,checked:provenance.checked,snapshotSha256:provenance.sanitizedSnapshotSha256}));
const allowed=operations.filter(o=>o.risk!=='read'&&!o.privateOutput).map(o=>o.name);
const tasks={type:'array',minItems:1,maxItems:20,description:'One to twenty exact ordered native effects. No signed receipts or mutable payload files. Cannot override account/confirm/output settings.',items:{type:'object',properties:{tool:{type:'string',enum:allowed},arguments:{type:'object'}},required:['tool','arguments'],additionalProperties:false}};
function canonical(v:any):any{if(Array.isArray(v))return v.map(canonical);if(v&&typeof v==='object')return Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])]));return v;}
function hash(v:any){return createHash('sha256').update(JSON.stringify(canonical(v))).digest('hex');}
async function reviewed(a:Json,c:FourthwallClient){
  const profile=selectAccount(c.config,a.account).name,calls=[];
  for(const task of a.tasks){if(!allowed.includes(task.tool))throw new UsageError('Unsupported native batch tool.');if(['account','confirm','payload_file','output_file'].some(k=>task.arguments[k]!==undefined))throw new UsageError('Batch cannot override private profile/confirmation or use mutable/output files.');const tool=ALL_TOOLS.find(t=>t.name===task.tool)!,op=operations.find(o=>o.name===task.tool)!;validateArguments(tool,task.arguments);calls.push(await prepare(op,task.arguments));}
  return{version:1,profile,credentialBinding:'profile label only; private credentials not hashed',snapshotSha256:provenance.sanitizedSnapshotSha256,tasks:a.tasks,calls};
}
helper('preview_shop_batch','Review ordered shop effects','Validate every exact request and hash order/profile label/schema locally. No native request, credential loading, ownership check or provider preview.','read',{tasks,account},['tasks'],async(a,c)=>{const r=await reviewed(a,c);return{...c.sanitize(r)as Json,reviewSha256:hash(r),localOnly:true,providerValidated:false,notice:'Binds requests/order/profile label/schema. No expiry, single-use guarantee, credential/state lock, transaction or rollback. Re-review after private credential or native state changes.'};});
helper('submit_shop_batch','Execute reviewed shop effects','Confirmed ordered effects; all validated/hash checked before first request. Stop on first failure with known and unattempted receipts; no retry, rollback or implicit continuation.','destructive',{tasks,account,confirm,review_sha256:{type:'string',pattern:'^[a-f0-9]{64}$'}},['tasks','review_sha256'],async(a,c)=>{
  const r=await reviewed(a,c);if(hash(r)!==a.review_sha256)throw new UsageError('Review hash mismatch; preview identical ordered requests/profile/schema again.');const knownResults:Json[]=[];
  for(let i=0;i<r.calls.length;i++){const call=r.calls[i]!;try{knownResults.push({index:i,tool:a.tasks[i].tool,result:c.sanitize(await c.request(call.method,call.path,call.query,call.body,r.profile))});}
    catch(e){const err=e as FourthwallError;throw new FourthwallError(JSON.stringify(c.sanitize({notice:'Batch stopped. Failed request outcome may be unknown; inspect native state before repeating. No retries or rollback.',knownResults,failedIndex:i,unattemptedIndices:r.calls.slice(i+1).map((_,j)=>i+1+j),error:err.message})),err.status??0,err.code??'API_ERROR');}}
  return{requestsProcessed:true,knownResults,notice:'Native receipts are not independent delivery, settlement or storefront publication proof.'};
});
const lists=operations.filter(o=>o.pagination);
helper('export_resources','Export bounded private metadata','Confirmed native page/size/results export into a new exclusive0600 file with page/item/5MiB budgets and explicit page/offset continuation. No links followed, binary downloads or atomic-backup guarantee.','destructive',{operation:{type:'string',enum:lists.map(o=>o.name)},arguments:{type:'object',description:'Current list query/path arguments; cannot override profile/policy/output.'},account,confirm,start_offset:{type:'integer',minimum:0,maximum:99},max_pages:{type:'integer',minimum:1,maximum:100},max_items:{type:'integer',minimum:1,maximum:10000},output_file:{type:'string',minLength:1}},['operation','output_file'],async(a,c)=>{
  const op=lists.find(o=>o.name===a.operation)!,args=a.arguments??{};
  if(['account','confirm','payload_file','output_file'].some(k=>args[k]!==undefined))throw new UsageError('Export cannot override private profile/policy/output.');validateArguments(ALL_TOOLS.find(t=>t.name===op.name)!,args);
  let receipt:Json={};const saved=await savePrivate(a.output_file,async()=>{
    const size=args.size??100,maxPages=a.max_pages??10,maxItems=a.max_items??1000;let page=args.page??0,offset=a.start_offset??0,requests=0,complete=false;const data:Json[]=[];
    if(offset>=size)throw new UsageError('start_offset must be below native size.');
    while(requests<maxPages&&data.length<maxItems){const call=await prepare(op,{...args,page,size}),r=await c.request(call.method,call.path,call.query,call.body,a.account);requests++;
      if(!Array.isArray(r.results)||r.page!==page||r.size!==size||!Number.isInteger(r.totalPages)||r.totalPages<0||r.results.length>size||r.totalPages>0&&page>=r.totalPages||r.totalPages===0&&r.results.length)throw new FourthwallError('Invalid native page/size/results/totalPages receipt; completeness unproven.');
      if(offset>r.results.length)throw new UsageError('Resume page changed; start_offset no longer exists.');
      const take=Math.min(r.results.length-offset,maxItems-data.length);data.push(...r.results.slice(offset,offset+take));offset+=take;
      if(Buffer.byteLength(JSON.stringify(data))>5*1048576)throw new FourthwallError('Export exceeds5MiB local cap.');
      if(offset<r.results.length)break;if(r.totalPages===0||page+1>=r.totalPages){complete=true;break;}
      if(!r.results.length)throw new FourthwallError('Empty native page before totalPages; no completeness guarantee.');page++;offset=0;
    }
    receipt={requests,items:data.length,completeWithinRequestedFilters:complete,continuation:complete?null:{operation:op.name,arguments:{...args,page,size},start_offset:offset},atomicSnapshot:false,credentialsAndSignedURLsRedacted:true};return{data:c.sanitize(data),receipt};
  });return{...saved,...receipt};
});
helper('upload_file','Upload exact bytes from a private receipt','Explicitly confirmed Google Storage PUT using a selected private upload receipt and a bounded local regular file. Exact size/Content-Type and x-goog-content-length-range are preserved. No Fourthwall credentials or redirects, no automatic registration/publishing.','destructive',{account,confirm,receipt_file:{type:'string',minLength:1},input_file:{type:'string',minLength:1}},['receipt_file','input_file'],async(a,c)=>{
  const r=await fileJSON(a.receipt_file,true),profile=selectAccount(c.config,a.account).name;
  if(r.receiptVersion!==1||r.profile!==profile||!['request_media_upload_url','request_digital_file_upload_url'].includes(r.operation)||!Number.isSafeInteger(r.request?.size)||r.request.size<=0||r.request.size>64*1048576||typeof r.request.contentType!=='string'||/[\r\n]/.test(r.request.contentType))throw new UsageError('Private receipt does not match the selected shop/profile or upload contract.');
  if(r.expiresAt&&(!Number.isFinite(Date.parse(r.expiresAt))||Date.parse(r.expiresAt)<=Date.now()))throw new UsageError('Private signed receipt expired; request a new one deliberately.');
  const url=uploadURL(r.uploadUrl),bytes=await readPrivateFile(a.input_file,64*1048576);
  if(bytes.length!==r.request.size)throw new UsageError('Input byte length differs from exact signed size; nothing uploaded.');
  let response:Response;try{response=await fetch(url,{method:'PUT',redirect:'error',signal:AbortSignal.timeout(c.config.timeoutMs),headers:{'Content-Type':r.request.contentType,'x-goog-content-length-range':'0,'+bytes.length},body:bytes});}
  catch{throw new FourthwallError('Storage upload failed or timed out; outcome may be unknown. No automatic retry.',0,'NETWORK');}
  await response.body?.cancel();if(![200,201,204].includes(response.status))throw new FourthwallError('Storage upload returned HTTP'+response.status+'; no automatic retry.',response.status);
  return{uploaded:true,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex'),http_status:response.status,profile,registrationPerformed:false,publicationPerformed:false,notice:'Native upload acknowledgement only; register/link the file separately after review. Receipt binds labels/metadata, not provider ownership.'};
});
const validators=new Map(ALL_TOOLS.map(t=>[t.name,ajv.compile(t.inputSchema)]));
export function validateArguments(tool:ToolSpec,args:Json){check(validators.get(tool.name)!,args);}
export function visibleTools(config:Config){return ALL_TOOLS.filter(t=>!config.readOnly||t.risk==='read');}
