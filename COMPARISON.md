# Fourthwall alternatives, reviewed 2026-10-04

Fourthwall's [official MCP](https://docs.fourthwall.com/ai/mcp) already exists. It provides hosted OAuth, broad shop tooling, confirmations and documented previews, with 123 documented tools at review. This package is a selected local companion, with 80 native operations and six workflows. Neither count proves greater coverage or efficiency.

| Requirement | This companion | Existing tooling |
| --- | --- | --- |
| Authentication | Private shop Basic pair or existing OAuth bearer/file | Official hosted OAuth with shop selection |
| Coverage | Selected reviewed Platform API routes | Official broader shop, brand, merch and analytics tools |
| Terminal | Dedicated task CLI over the exact same MCP handlers | Generic MCP terminal clients also exist |
| Local approvals | Mandatory per-call approval and direct read-only refusal on both surfaces | Official confirmations and previews already exist |
| Repeated work | Exact local ordered batch review and failure receipts | No claim of transaction or state locking |
| Export | Bounded private native metadata export with resume offset | Not an atomic backup or binary download |
| Upload | Private signed receipts and explicit bounded byte helper | Native upload services remain the authority |
| Cost | No measured task-token saving yet | Equivalent completed tasks must be measured |

The reviewed generic [wong2/mcp-cli](https://github.com/wong2/mcp-cli) source at 7d12b464 already supports remote interactive OAuth. Its noninteractive JSON call path in that snapshot uses stdio; HTTP noninteractive equivalence was not verified. A bounded GitHub community search found no additional dedicated Fourthwall MCP repository, which is not proof none exists. See [COMPARISON.md](COMPARISON.md) for review evidence and exclusions.

Use CLI for scripts, shell agents and selected tasks. Use MCP where your app discovers tools and calls them directly. Both surfaces reach the same 86 tasks and enforce the same approval policy.

| Surface | Context and task considerations |
| --- | --- |
| CLI | Command help and results enter context on demand; agent shell access is needed |
| MCP | Tool schemas may be loaded or deferred depending on the client; result content still costs context |
| Read-only MCP | Exposes 49 reads and excludes 37 effects locally |
| Official hosted MCP | Broad OAuth tooling with its own schemas, previews and confirmation flow |

README section 5 has this package's measured Claude Code and Codex costs against 2.0.1. No other offering was measured, so no comparison with one is claimed.

## Native coverage exclusions

cancel-external-order, create-cart, create-customization, create-design-pipeline-offer, create-design-pipeline-preview, create-external-order, create-sample-checkout, create-thank-you, exchange-token, get-cancellation-summary, get-cart, get-design-pipeline-status, get-external-order, list-external-orders, validate-external-order

The selected implementation does not claim cart, external-order creation, custom production/design pipelines, binary thank-you creation or OAuth exchange coverage. Review the checked provenance file for all 15 excluded operation IDs. The official MCP is broader.
