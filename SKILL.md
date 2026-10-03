---
name: fourthwall
description: Fourthwall shop operations through the shared CLI and local MCP.
---

# Fourthwall CLI

Use fourthwall-cli tools, schema <command> and <command> --help to inspect real schemas. Tool underscores become command dashes; exact native body camelCase fields retain their spelling. Use --agent for JSON output. CLI and MCP execute the same handlers and guard.

Confirm the intended profile with list-accounts and get-shop; no credentials in chat or commands. All effects require explicit --confirm. --yes never grants approval. Read-only exposes only the 49 read operations and refuses hidden effects directly. Provider/customer authorization remains separate.

Read current records and contracts before preparing effects. Preview exact batches before asking for approval; bind requests/order/profile/schema, then submit the unchanged hash only after approval. Do not promise transactions, state locks or rollback. Inspect native state after ambiguous failures; no automatic retry.

Products stay hidden by default. Media/digital uploads use private receipts and exact bounded bytes; registration and publishing are separate. Do not expose signed URLs. Exports are bounded metadata, not atomic backups. Follow INSTALL.md and README.md for all schemas and native workflow limits.

```bash
fourthwall-cli list-accounts --agent
fourthwall-cli list-products --page 0 --size 25 --account intended-shop --agent
fourthwall-cli get-operation-schema --operation toggle_product_availability --agent
```
