# Install Fourthwall MCP Server & CLI

Node 22+; one package, two binaries and a bundled desktop extension.

A Fourthwall SUPER ADMIN can create shop API credentials in **Settings > For Developers**. Follow [Fourthwall authentication](https://docs.fourthwall.com/guides/authentication). Shop Basic credentials grant full shop access; never describe them as a read-only key.

Choose exactly one private source: `FOURTHWALL_USERNAME` and `FOURTHWALL_PASSWORD`, an existing `FOURTHWALL_ACCESS_TOKEN`, or `FOURTHWALL_CREDENTIALS_FILE`. OAuth permission comes from the provider. This package does not implement consent, exchange or refresh.

The credential file is a JSON object containing either username/password or access_token. It must be an absolute regular non-symlink file, at most 64 KiB, outside repositories. On POSIX the process user must own it and permissions must be owner-only, normally 0600; restrict Windows ACLs separately. Never paste credentials into chat, command transcripts, issues, payloads or project configuration.

```bash
fourthwall-cli login
fourthwall-cli list-accounts --agent
fourthwall-cli doctor
fourthwall-cli doctor --network
```

Login prints instructions. Doctor checks local profiles and policy; the deliberate network option reads the current shop and validates its id. One successful read does not prove every permission, every task or resource ownership. File credentials are cached for the process: restart clients after rotating or revoking them.

`FOURTHWALL_ACCOUNTS` is a private JSON array of unique name plus one username/password, access_token or credentials_file source. Named profiles never inherit globals. `FOURTHWALL_DEFAULT_ACCOUNT` selects an exact default; `--account` selects another label. Discovery reports labels and source availability only, never secret values or paths.


## CLI

```bash
npm install -g @thenavidm/fourthwall-mcp-cli@latest
fourthwall-cli --version
fourthwall-cli tools
fourthwall-cli login
```

Use npx -y --package @thenavidm/fourthwall-mcp-cli@latest fourthwall-cli tools without a global install. Make the shipped SKILL.md available in a supported private agent skill directory; npm does not automatically register it. On Windows, npm.cmd/npx.cmd or the documented cmd launcher can resolve shell execution-policy differences without weakening policy.

## Codex

Codex is the current validation priority. Private credential paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add fourthwall -- npx -y @thenavidm/fourthwall-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.fourthwall]
command = "npx"
args = ["-y", "@thenavidm/fourthwall-mcp-cli@latest"]
env_vars = ["FOURTHWALL_USERNAME", "FOURTHWALL_PASSWORD", "FOURTHWALL_ACCESS_TOKEN", "FOURTHWALL_CREDENTIALS_FILE", "FOURTHWALL_ACCOUNTS", "FOURTHWALL_DEFAULT_ACCOUNT", "FOURTHWALL_READ_ONLY", "FOURTHWALL_ALLOW_DESTRUCTIVE", "FOURTHWALL_AUDIT_LOG", "FOURTHWALL_REQUEST_TIMEOUT_MS", "FOURTHWALL_MIN_REQUEST_INTERVAL_MS"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user fourthwall -- npx -y @thenavidm/fourthwall-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for private credential settings if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

Download fourthwall-2.0.0.mcpb from [GitHub Releases](https://github.com/thenavidm/fourthwall-mcp-cli/releases/latest). In a supported Claude Desktop build, use Settings > Extensions > Advanced settings > Install Extension… . Choose one private username/password pair, existing access token or credential JSON file; leave other sources empty. Named profiles require private manual runtime settings. Read-only exposes only the 49 read operations. Reconnect after installation or credential rotation. The bundle includes production dependencies; Node 22+ compatibility and actual GUI installation are separate checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "fourthwall": {
      "command": "npx",
      "args": ["-y", "@thenavidm/fourthwall-mcp-cli@latest"],
      "env": {
        "FOURTHWALL_CREDENTIALS_FILE": "/absolute/private/fourthwall.json"
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/fourthwall-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "fourthwall": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/fourthwall-mcp-cli@latest"],
      "env": {
        "FOURTHWALL_CREDENTIALS_FILE": "${env:FOURTHWALL_CREDENTIALS_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type":"promptString","id":"fourthwall-private-file","description":"Absolute private credential JSON file path"}
  ],
  "servers": {
    "fourthwall": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/fourthwall-mcp-cli@latest"],
      "env": {
        "FOURTHWALL_CREDENTIALS_FILE": "${input:fourthwall-private-file}"
      }
    }
  }
}
~~~

Start Fourthwall through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Fourthwall in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "fourthwall": {
      "command": "npx",
      "args": ["-y", "@thenavidm/fourthwall-mcp-cli@latest"],
      "env": {
        "FOURTHWALL_CREDENTIALS_FILE": "/absolute/private/fourthwall.json"
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build the included Dockerfile, then pass private runtime settings through your secret manager. A credential-file path must exist inside the container through a restricted read-only mount; host paths are not automatically available. Use stdin/stdout transport with -i. The image does not expose a public HTTP MCP listener.

## Policy and limits

Every one of the 37 effects requires `confirm:true` in MCP or `--confirm` in the CLI. This includes new checkouts, public-token PUT, uploads and local export file writes. Read-only hides and directly refuses effects. `FOURTHWALL_ALLOW_DESTRUCTIVE=0` refuses them even when confirmed. Local guard approval is separate from provider authorization and customer consent.

Read the intended record and inspect `get_operation_schema` before writing. Validate IDs, quantities, callback events and the exact profile. Product creation defaults to hidden. Availability is not lifecycle state: `available:false` and `state:HIDDEN` are separate native changes.

No effect retries automatically. A timeout, malformed receipt or partial batch can mean an unknown outcome. Inspect native state before deliberately repeating. The default pacing is 1,000 ms per request; tighter documented operation buckets are respected locally. Other processes share provider quotas.

Full-access Basic credentials make careful profile and permission selection necessary. Local approval cannot prove ownership, customer consent, fulfillment delivery or storefront state. There are no automatic retries, rollbacks, refunds or cleanup workflows beyond the explicitly documented tools.

Fixed local bounds are 1 MiB request/body file, 5 MiB API response/export and 64 MiB byte upload. Timeout defaults to 30 seconds and local pacing to one second, with tighter native buckets. These are conservative process controls, not global quota guarantees. Sandbox verification uses fixtures and makes no real shop changes.
