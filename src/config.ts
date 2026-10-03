export type Account = {
  name: string; username: string; password: string; accessToken: string; credentialsFile: string;
};
export type Config = {
  accounts: Account[]; defaultAccount: string; readOnly: boolean; allowDestructive: boolean;
  auditPath: string; timeoutMs: number; minIntervalMs: number;
};
function integer(value: string | undefined, fallback: number, min: number, max: number) {
  const n = value ? Number(value) : fallback;
  if (!Number.isInteger(n) || n < min || n > max) throw Error('Invalid timeout or request pacing setting.');
  return n;
}
export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  let entries: Record<string, unknown>[] = [];
  if (env.FOURTHWALL_ACCOUNTS) {
    try { entries = JSON.parse(env.FOURTHWALL_ACCOUNTS); if (!Array.isArray(entries)) throw Error(); }
    catch { throw Error('FOURTHWALL_ACCOUNTS must be a private JSON array of named profiles.'); }
  } else if (env.FOURTHWALL_USERNAME || env.FOURTHWALL_PASSWORD || env.FOURTHWALL_ACCESS_TOKEN || env.FOURTHWALL_CREDENTIALS_FILE) {
    entries = [{name:'default',username:env.FOURTHWALL_USERNAME,password:env.FOURTHWALL_PASSWORD,
      access_token:env.FOURTHWALL_ACCESS_TOKEN,credentials_file:env.FOURTHWALL_CREDENTIALS_FILE}];
  }
  const accounts = entries.map(x => {
    if (!x || typeof x !== 'object' || typeof x.name !== 'string' || !x.name.trim()) throw Error('Every profile requires a nonempty name.');
    if (Object.keys(x).some(k => !['name','username','password','access_token','credentials_file'].includes(k))) throw Error('Unsupported private profile setting.');
    for (const k of ['username','password','access_token','credentials_file'])
      if (x[k] !== undefined && (typeof x[k] !== 'string' || /[\r\n]/.test(x[k] as string))) throw Error('Private profile settings must be strings without line breaks.');
    if (x.credentials_file && (x.username || x.password || x.access_token) || x.access_token && (x.username || x.password)) throw Error('Choose one credential source per profile; no Basic/Bearer/file fallback.');
    return {name:x.name.trim(),username:String(x.username??''),password:String(x.password??''),accessToken:String(x.access_token??''),credentialsFile:String(x.credentials_file??'')};
  });
  if (new Set(accounts.map(a=>a.name)).size !== accounts.length) throw Error('Private profile names must be unique.');
  const defaultAccount = env.FOURTHWALL_DEFAULT_ACCOUNT ?? accounts[0]?.name ?? '';
  if (defaultAccount && !accounts.some(a=>a.name === defaultAccount)) throw Error('Unknown FOURTHWALL_DEFAULT_ACCOUNT.');
  return {accounts,defaultAccount,readOnly:/^(1|true)$/i.test(env.FOURTHWALL_READ_ONLY??''),
    allowDestructive:!/^(0|false)$/i.test(env.FOURTHWALL_ALLOW_DESTRUCTIVE??''),auditPath:env.FOURTHWALL_AUDIT_LOG??'',
    timeoutMs:integer(env.FOURTHWALL_REQUEST_TIMEOUT_MS,30000,100,300000),
    minIntervalMs:integer(env.FOURTHWALL_MIN_REQUEST_INTERVAL_MS,1000,0,10000)};
}
export function selectAccount(config: Config, hint?: string): Account {
  const account = config.accounts.find(a=>a.name === (hint??config.defaultAccount));
  if (!account) throw Error(config.accounts.length ? 'Unknown profile; use an exact list_accounts label.' : 'No credentials configured. Run fourthwall-cli login and configure one private shop profile.');
  return account;
}
