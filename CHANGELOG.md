# Changelog

## 3.0.0, 2026-10-05

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.20. The 86 tools keep their names and arguments, and every difference below was measured against 2.0.1, the last version on npm, before release.

- **A person approves each confirmed operation over MCP.** All 37 still need confirmation. Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, the model's `confirm: true` still counts, and `FOURTHWALL_CONFIRM=model` makes it enough everywhere. The refusal and the approval form both say what 2.0 said, that the call may change products, orders, giveaways or webhooks, upload bytes or save private files, and the audit log records who approved each one.
- **`FOURTHWALL_ALLOW_DESTRUCTIVE=0` still refuses all 37**, confirmed or not, and `FOURTHWALL_READ_ONLY=1` still leaves only the 49 reads.
- **Fourthwall's status picks the exit code.** A request Fourthwall rejects (400 or 422) exits 2 instead of 5, and a removed resource (410) 3 instead of 5. 401 and 403 still exit 4, 404 3, 429 7, a server error 5, and an unknown profile or nothing configured 10. 1 now means an unexpected error.
- **`which <words>` finds a command**, and `agent-context` describes every command, flag and setting as JSON. In Codex 0.159.3, finding the command that creates a promotion and its flags took a median of 108,648 input tokens over the CLI instead of 130,541 (five runs each): three 2.0.1 runs tried `schema` without a command, then read the command list, the command's help and its 31,553-character schema. Every 3.0.0 run asked `which` instead, whose answer carries the command's help, and the schema it read after is 15,829 characters, because its repeated parts are written once.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format, and **`fourthwall-mcp --http`** serves the same tools over Streamable HTTP, on 127.0.0.1:8787 unless told otherwise.
- **A smaller tool list.** Parts that several tools repeated, such as the webhook event types, are written once and referred to, so the list is 30,422 o200k tokens instead of 32,238. With every tool loaded, Claude Code 2.1.286 spends 39,922 tokens a message on the list instead of 43,696.
- **Less work to start.** Each input and body schema now compiles on its first use rather than at load, and the entry turns on Node's compile cache. The server spends 201 ms of CPU before its first answer where 2.0.1 spent 379, and answers in 146 ms of wall time instead of 230 (median of 21 runs, taking turns on one Mac). npx installs 10 dependencies instead of 94. A test still compiles every schema.
- **`doctor --network` reads the current shop**, as 2.0's did.
- **Docs.** README section 5 has the measured Claude Code and Codex costs, where 2.0 said none had been collected, a settings table lists every variable, and the exit codes include 1.

### Upgrading

Over MCP, expect an approval prompt or form before any confirmed operation; a headless agent that should run them with `confirm: true` alone needs `FOURTHWALL_CONFIRM=model`. A script that read exit 5 as a rejected request should read 2, and as a removed resource 3. An error is now one JSON object with `error`, Slipway's `code` (`usage`, `refused`, `auth`, `not_found`, `rate_limited`, `api`, `not_configured`) and a `hint`, plus Fourthwall's `status` when it answered; 2.0.1 printed the tool's JSON inside the `error` string. Over MCP, an argument that fails the schema comes back as the MCP SDK's own message, "Input validation error: …", instead of JSON. With `FOURTHWALL_READ_ONLY=1`, a client that calls a hidden tool gets "tool not found" instead of a refusal naming `FOURTHWALL_READ_ONLY`, and that call is not in the audit log; the CLI still names the setting. The audit log's lines gain `confirmed_by`, and each allowed call is followed by a `done` or `failed` line. A script that pipes JSON-RPC into the server must keep stdin open until it reads the answer: the server now stops when its input ends, as the MCP stdio binding asks. `--http` refuses a page from another site unless `FOURTHWALL_HTTP_ALLOWED_ORIGINS` lists it. Some terminal screens grew: the general help by 139 tokens, for `which`, `install`, what each setting is for and the exit codes; the command list by 16; and a missing argument's error by 16, for its code and a hint. Over MCP, Codex now prints `create_promotion`'s payload with every promotion type and its fields, where it printed 2.0.1's as `unknown`, so a discovery task read a median of 77,915 input tokens instead of 77,214. `SKILL.md` is 144 tokens longer in Claude Code, because it says how approval works over MCP, that `--agent` never confirms and how `which` finds a command, and lists every exit code.

## 2.0.1, 2026-10-04

- **`npx -y @thenavidm/fourthwall-mcp-cli` starts the MCP server whatever order npm keeps.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order. For this package that happened to be the server; for 23 others it was the CLI. A third binary named after the package, on its own file, now always starts the server, and npx picks it by name.

## 2.0.0 — 2026-10-04

- Fresh public AGPL-3.0 snapshot; intact private legacy history remains archived privately.
- 86 shared tools: 80 selected current Platform v1.0 operations, six local workflows, 49 reads and 37 explicitly confirmed effects.
- Dedicated CLI and MCP binaries, native discovered schemas/help, JSON/agent output and stable exit codes.
- Isolated Basic/Bearer/private-file shop profiles, direct read-only refusal, explicit per-call approval and conservative native-bucket pacing.
- Exact ordered batch reviews, stop-on-failure receipts, bounded native page/size metadata exports and private signed upload/token receipts.
- Bounded Google Storage byte upload without Fourthwall credentials, redirects or automatic registration/publication.
- Corrected legacy pagination, product state/availability, fulfillment, giveaway, webhook, promotion and streaming request shapes; hidden-by-default selected product creation.
- Node 22/24 macOS/Windows/Linux CI, desktop bundle, full client docs, migration reference, 20 accordion FAQs, topics/keywords and house terminal assets.
- Official hosted MCP and generic CLI alternatives documented; no invented coverage or token-saving claim.

### Breaking changes

All 39 actual legacy tool names remain, but native input arguments have changed. Replace cursor/limit with page/size. Effects now require confirm. Signed outputs require a new absolute private file. Consult each discovered schema before migrating scripts.

## 1.0.0 — private legacy

The previous private MCP contained 39 registered handlers and no dedicated task CLI. No date or success evidence is invented for that source. It is not published as public history or npm release by this refresh.
