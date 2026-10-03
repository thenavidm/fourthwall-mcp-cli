#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Fourthwall MCP and shared CLI ${VERSION}
fourthwall-mcp                    Local stdio MCP
fourthwall-cli <command> --help    Actual shared arguments
fourthwall-cli schema <command>   Actual JSON schema
fourthwall-cli doctor [--network] Local settings / deliberate current-shop read
fourthwall-cli login              Private setup instructions only
FOURTHWALL_USERNAME / PASSWORD    Shop Basic credentials OR existing ACCESS_TOKEN
FOURTHWALL_CREDENTIALS_FILE       Absolute private JSON credential file, no fallback
FOURTHWALL_ACCOUNTS               Isolated private named profiles
FOURTHWALL_READ_ONLY=1            Hide/directly refuse effects and private file outputs
FOURTHWALL_ALLOW_DESTRUCTIVE=0     Refuse confirmed effects too
FOURTHWALL_REQUEST_TIMEOUT_MS      Default30000; no retries
FOURTHWALL_MIN_REQUEST_INTERVAL_MS Default1000; native tighter buckets also paced
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}
if(command==='login'){console.log('Use the intended Fourthwall shop admin Settings > For developers > Create API User; SUPER ADMIN is required, and shop Basic username/password grant full shop API access. Configure FOURTHWALL_USERNAME and FOURTHWALL_PASSWORD privately, OR an existing scoped FOURTHWALL_ACCESS_TOKEN, OR absolute owner-private FOURTHWALL_CREDENTIALS_FILE JSON containing username/password or access_token. Never mix credential sources. Named FOURTHWALL_ACCOUNTS use name plus username/password OR access_token OR credentials_file, without inherited global fallback. login prints setup instructions only: no OAuth token exchange, browser login or credential creation. See https://docs.fourthwall.com/guides/authentication and https://docs.fourthwall.com/guides/oauth.');return;}
if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}
if(basename(process.argv[1]??'').startsWith('fourthwall-cli')||command&&!command.startsWith('-')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());}
main().catch(e=>{console.error(JSON.stringify({error:(e as Error).message}));process.exitCode=exitCodeFor((e as Error).message);});
