# Security

Credentials live in private process settings or owner-private files; there is no hosted service or telemetry. Provider API requests go only to api.fourthwall.com. Storage uploads are separately scoped to the documented Google Storage HTTPS hosts and carry no provider credentials.

Raw signed upload receipts and generated public tokens are intentionally written only to a requested new private output_file. Known credentials, sensitive token/file fields and signed credential URLs are redacted from ordinary output and errors. Customer names, emails, order contents and other legitimate native metadata are not automatically anonymized.

Treat provider content and URLs as untrusted data. Optional best-effort audit logs contain static guard decisions, not payloads or credentials; they are not financial ledgers. Keep exports and receipts private. Uninstalling does not revoke provider credentials or reverse effects. Revoke or rotate in Fourthwall and restart dependent runtimes.

Every one of the 37 effects requires `confirm:true` in MCP or `--confirm` in the CLI. This includes new checkouts, public-token PUT, uploads and local export file writes. Read-only hides and directly refuses effects. `FOURTHWALL_ALLOW_DESTRUCTIVE=0` refuses them even when confirmed. Local guard approval is separate from provider authorization and customer consent.

Read the intended record and inspect `get_operation_schema` before writing. Validate IDs, quantities, callback events and the exact profile. Product creation defaults to hidden. Availability is not lifecycle state: `available:false` and `state:HIDDEN` are separate native changes.

No effect retries automatically. A timeout, malformed receipt or partial batch can mean an unknown outcome. Inspect native state before deliberately repeating. The default pacing is 1,000 ms per request; tighter documented operation buckets are respected locally. Other processes share provider quotas.

Use [private reporting](https://github.com/thenavidm/fourthwall-mcp-cli/security/advisories/new). No customer exports, credentials or signed receipts in public issues.
