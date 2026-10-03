<img src="https://cdn.navid.me/platforms/fourthwall.png" alt="Fourthwall" width="88">

# Fourthwall MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/fourthwall-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/fourthwall-mcp-cli)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Fourthwall MCP server and CLI for Codex and AI agents. 86 shared tasks for shop operations, isolated private profiles, reviewed batches, bounded metadata exports and private uploads.

One install, the same tools and guard on both surfaces. Fourthwall's official hosted OAuth MCP already provides broader coverage. This companion adds specific local workflows; read the comparison before choosing.

Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fourthwall-mcp-cli&utm_content=readme).

<img src="https://cdn.navid.me/repos/fourthwall-mcp-cli-retina.gif" alt="Codex illustrating Fourthwall native reads and an explicitly approved shop batch" width="520">

## Two ways to use it

### Command line

```bash
fourthwall-cli tools
fourthwall-cli list-products --page 0 --size 25 --agent
fourthwall-cli get-operation-schema --operation toggle_product_availability --agent
fourthwall-cli <command> --help
```

Use it directly or let your shell agent call it. Configure the intended private shop first. Every effect requires --confirm; output flags never grant approval.

### MCP server, for your AI app

```bash
codex mcp add fourthwall -- npx -y @thenavidm/fourthwall-mcp-cli@latest
```

An MCP client launches the local stdio server and discovers the same tasks. Forward private credential settings through your client runtime. The full client/OS setup is in [INSTALL.md](INSTALL.md).

### Which one

| Where you work | Surface |
| --- | --- |
| Codex or another agent with shell access | CLI, local MCP, or both |
| A supported local MCP app | Local MCP; desktop extension where supported |
| A script or CI task | CLI with private secrets supplied by the runtime |
| A URL-only hosted MCP client | Fourthwall's official hosted MCP is an alternative |

## Features

| Capability | CLI command | MCP tool |
| --- | --- | --- |
| Get a webhook | `fourthwall-cli get-webhook` | `get_webhook` |
| Update a webhook | `fourthwall-cli update-webhook` | `update_webhook` |
| Delete a webhook | `fourthwall-cli delete-webhook` | `delete_webhook` |
| Set streaming status to started | `fourthwall-cli start-streaming` | `start_streaming` |
| Set streaming status to ended | `fourthwall-cli end-streaming` | `end_streaming` |
| Get or create a public token | `fourthwall-cli get-public-token` | `get_public_token` |
| Get a promotion by id | `fourthwall-cli get-promotion` | `get_promotion` |
| Update a promotion | `fourthwall-cli update-promotion` | `update_promotion` |
| Update product (offer) lifecycle state | `fourthwall-cli update-product-state` | `update_product_state` |
| Update product (offer) availability by id | `fourthwall-cli toggle-product-availability` | `toggle_product_availability` |
| Mark digital download as downloaded | `fourthwall-cli mark-download-complete` | `mark_download_complete` |
| Finish giveaway | `fourthwall-cli finish-giveaway` | `finish_giveaway` |
| Create or update giveaway | `fourthwall-cli create-giveaway-checkout` | `create_giveaway_checkout` |
| Disable giveaway config | `fourthwall-cli disable-giveaway-checkout` | `disable_giveaway_checkout` |
| Finish draw | `fourthwall-cli finish-giveaway-draw` | `finish_giveaway_draw` |
| Get gifting config | `fourthwall-cli get-gifting-config` | `get_gifting_config` |
| Update gifting config | `fourthwall-cli update-gifting-config` | `update_gifting_config` |
| Update a collection | `fourthwall-cli update-collection` | `update_collection` |
| Get products in a collection | `fourthwall-cli get-collection-products` | `get_collection_products` |
| Set collection products | `fourthwall-cli update-collection-products` | `update_collection_products` |
| Update collection availability | `fourthwall-cli update-collection-availability` | `update_collection_availability` |
| Get webhooks | `fourthwall-cli list-webhooks` | `list_webhooks` |
| Create a webhook | `fourthwall-cli create-webhook` | `create_webhook` |
| Get all promotions | `fourthwall-cli list-promotions` | `list_promotions` |
| Create a promotion | `fourthwall-cli create-promotion` | `create_promotion` |
| Get all products (offers) | `fourthwall-cli list-products` | `list_products` |
| Create a product | `fourthwall-cli create-product` | `create_product` |
| Attach images to a product | `fourthwall-cli attach-product-images` | `attach_product_images` |
| Remove images from a product | `fourthwall-cli remove-product-images` | `remove_product_images` |
| Confirm and link an uploaded digital file | `fourthwall-cli confirm-digital-file-upload` | `confirm_digital_file_upload` |
| Remove a digital file from a product | `fourthwall-cli remove-digital-file` | `remove_digital_file` |
| Request a presigned upload URL for a digital file | `fourthwall-cli request-digital-file-upload-url` | `request_digital_file_upload_url` |
| Request a pre-signed upload URL | `fourthwall-cli request-media-upload-url` | `request_media_upload_url` |
| List media library images | `fourthwall-cli list-media-images` | `list_media_images` |
| Save an uploaded image to the media library | `fourthwall-cli save-media-image` | `save_media_image` |
| Create a new giveaway | `fourthwall-cli create-giveaway` | `create_giveaway` |
| Create giveaway links | `fourthwall-cli create-giveaway-links` | `create_giveaway_links` |
| Create a gifting checkout | `fourthwall-cli create-gifting-checkout` | `create_gifting_checkout` |
| Create a fulfillment for an order | `fourthwall-cli create-fulfillment` | `create_fulfillment` |
| Validate DNS records | `fourthwall-cli validate-dns` | `validate_dns` |
| Get all collections | `fourthwall-cli list-collections` | `list_collections` |
| Create a new collection | `fourthwall-cli create-collection` | `create_collection` |
| Get webhook events | `fourthwall-cli list-webhook-events` | `list_webhook_events` |
| Get a webhook event | `fourthwall-cli get-webhook-event` | `get_webhook_event` |
| Get Thank You by id | `fourthwall-cli get-thank-you` | `get_thank_you` |
| Get contributions awaiting thank you | `fourthwall-cli list-contributions` | `list_contributions` |
| Get streaming status | `fourthwall-cli get-streaming-status` | `get_streaming_status` |
| Get current shop | `fourthwall-cli get-shop` | `get_shop` |
| Get current shop contact info | `fourthwall-cli get-shop-contact` | `get_shop_contact` |
| Get sample credit balance | `fourthwall-cli get-sample-balance` | `get_sample_balance` |
| List available reports | `fourthwall-cli list-reports` | `list_reports` |
| Get a report | `fourthwall-cli get-report` | `get_report` |
| Get product (offer) by id | `fourthwall-cli get-product` | `get_product` |
| Archive a product (offer) | `fourthwall-cli archive-product` | `archive_product` |
| Get product (offer) inventory by id | `fourthwall-cli get-product-inventory` | `get_product_inventory` |
| List product templates | `fourthwall-cli list-product-templates` | `list_product_templates` |
| Get product template details | `fourthwall-cli get-product-template` | `get_product_template` |
| Search product templates | `fourthwall-cli search-product-templates` | `search_product_templates` |
| Search product templates by page | `fourthwall-cli search-product-templates-paged` | `search_product_templates_paged` |
| Search product templates grouped by product family | `fourthwall-cli search-product-templates-grouped` | `search_product_templates_grouped` |
| Search product templates grouped by product family by page | `fourthwall-cli search-product-templates-grouped-paged` | `search_product_templates_grouped_paged` |
| List product templates by page | `fourthwall-cli list-product-templates-paged` | `list_product_templates_paged` |
| Browse product templates by category | `fourthwall-cli list-product-templates-by-category` | `list_product_templates_by_category` |
| Browse product templates by category by page | `fourthwall-cli list-product-templates-by-category-paged` | `list_product_templates_by_category_paged` |
| Get Pro subscription status | `fourthwall-cli get-pro-subscription` | `get_pro_subscription` |
| Get all orders | `fourthwall-cli list-orders` | `list_orders` |
| Get order by id | `fourthwall-cli get-order` | `get_order` |
| Get order by friendly id | `fourthwall-cli get-order-by-friendly-id` | `get_order_by_friendly_id` |
| List membership tiers | `fourthwall-cli list-membership-tiers` | `list_membership_tiers` |
| List members | `fourthwall-cli list-members` | `list_members` |
| Get member | `fourthwall-cli get-member` | `get_member` |
| Get all mailing list entries | `fourthwall-cli list-mailing-list` | `list_mailing_list` |
| Get all giveaway packages | `fourthwall-cli list-giveaway-packages` | `list_giveaway_packages` |
| Get giveaway links | `fourthwall-cli get-giveaway-package` | `get_giveaway_package` |
| Get draw | `fourthwall-cli get-giveaway-draw` | `get_giveaway_draw` |
| Get gift purchase by id | `fourthwall-cli get-gift-purchase` | `get_gift_purchase` |
| Get all donations | `fourthwall-cli list-donations` | `list_donations` |
| Get donation by id | `fourthwall-cli get-donation` | `get_donation` |
| Get DNS configuration status | `fourthwall-cli get-dns-status` | `get_dns_status` |
| Get collection by ID or slug | `fourthwall-cli get-collection` | `get_collection` |
| List private shop profiles | `fourthwall-cli list-accounts` | `list_accounts` |
| Inspect native contract | `fourthwall-cli get-operation-schema` | `get_operation_schema` |
| Review ordered shop effects | `fourthwall-cli preview-shop-batch` | `preview_shop_batch` |
| Execute reviewed shop effects | `fourthwall-cli submit-shop-batch` | `submit_shop_batch` |
| Export bounded private metadata | `fourthwall-cli export-resources` | `export_resources` |
| Upload exact bytes from a private receipt | `fourthwall-cli upload-file` | `upload_file` |

## Contents

- [1. What you can ask it](#1-what-you-can-ask-it)
- [2. Set up your account](#2-set-up-your-account)
- [3. Install](#3-install)
- [4. Output and exit codes](#4-output-and-exit-codes)
- [5. Which surface and what each costs](#5-which-surface-and-what-each-costs)
- [6. Tools](#6-tools)
- [7. Writing safely](#7-writing-safely)
- [8. Products media and fulfillment](#8-products-media-and-fulfillment)
- [9. Several accounts and reviewed batches](#9-several-accounts-and-reviewed-batches)
- [10. Pagination and private exports](#10-pagination-and-private-exports)
- [11. How it works](#11-how-it-works)
- [12. Your data](#12-your-data)
- [13. Official and community comparison](#13-official-and-community-comparison)
- [14. Versions and migration](#14-versions-and-migration)
- [15. Risks](#15-risks)
- [16. Troubleshooting](#16-troubleshooting)
- [17. FAQ](#17-faq)

## 1. What you can ask it

Ask for a bounded shop task, then review any change before execution:

- List the first 25 products in the intended shop and report their state and availability separately.
- Read this order and check the native fulfillment contract before preparing a tracking update.
- Review these exact product availability changes, then execute only the batch I approve.
- Export up to ten pages of order metadata into a new private file and report continuation.
- Prepare a hidden digital product from this reviewed native payload. Do not publish it implicitly.
- Upload this local image from a private receipt, then show the separate registration step.

These prompts name implemented operations. The terminal animation illustrates a reviewed workflow, rather than an authenticated shop recording.

## 2. Set up your account

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

## 3. Install

Install Node 22+ in the runtime that launches the server. Use the complete [INSTALL.md](INSTALL.md) for Codex, Claude Code, Claude Desktop, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Docker and all three desktop OSes.

```bash
npm install -g @thenavidm/fourthwall-mcp-cli@latest
fourthwall-cli --version
fourthwall-cli tools
fourthwall-cli schema list-products
```

After configuring credentials privately, register the local server in Codex:

```bash
codex mcp add fourthwall -- npx -y @thenavidm/fourthwall-mcp-cli@latest
codex mcp list
```

The MCP executable speaks stdio; it is not a hosted URL. The desktop extension is [fourthwall-2.0.0.mcpb](https://github.com/thenavidm/fourthwall-mcp-cli/releases/download/v2.0.0/fourthwall-2.0.0.mcpb). Manual installation and updates use the host's supported extension screen. Choose one auth source, leave unused inputs empty and reconnect. GUI installation and authenticated provider tasks require their own validation.

## 4. Output and exit codes

Both binaries use the same schemas, handlers, validation and confirmation guard. `--json` prints JSON, `--compact` prints a single line, and `--agent` gives compact output for an agent. `--select` projects requested output fields. Errors go to stderr. `--yes` suppresses interactive presentation; it never replaces `--confirm`.

| Exit | Meaning |
| --- | --- |
| 0 | Successful command |
| 2 | Usage, invalid arguments or refused effect |
| 3 | Not found |
| 4 | Provider authentication/permission failure |
| 5 | Other API/network failure |
| 7 | Provider quota/rate limit |
| 10 | Missing/invalid local configuration |

```bash
fourthwall-cli list-products --page 0 --size 25 --agent
fourthwall-cli get-shop --account intended-shop --json
fourthwall-cli schema create-promotion
```

Tool path/query snake_case arguments become dash flags. Native body fields retain their exact camelCase flags, such as `--fileName` and `--contentType`; inspect `--help` instead of guessing a spelling. Objects and arrays use JSON. Use a private `--payload-file` for larger native bodies. Do not mix payload, payload-file and flat body fields.

## 5. Which surface and what each costs

Use CLI for scripts, shell agents and selected tasks. Use MCP where your app discovers tools and calls them directly. Both surfaces reach the same 86 tasks and enforce the same approval policy.

| Surface | Context and task considerations |
| --- | --- |
| CLI | Command help and results enter context on demand; agent shell access is needed |
| MCP | Tool schemas may be loaded or deferred depending on the client; result content still costs context |
| Read-only MCP | Exposes 49 reads and excludes 37 effects locally |
| Official hosted MCP | Broad OAuth tooling with its own schemas, previews and confirmation flow |

No matched completed Codex task/token measurement has been collected for this integration. Counts, schema characters, discovery costs and another integration's benchmark are not task savings. A fair comparison must record equivalent inputs, current client/model, permissions, successful native outcomes, errors/retries and total tokens. Software is free under AGPL-3.0; provider fees and plans remain separate.

## 6. Tools

49 reads and 37 confirmed effects. All 86 tasks follow below; nested native JSON fields come from the selected reviewed schema.

### get_webhook

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Get a webhook

CLI: `fourthwall-cli get-webhook`. Policy: read.

Native: `GET /open-api/v1.0/webhooks/{webhookConfigurationId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/get-webhook).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `webhook_configuration_id` | string (minLength=1, maxLength=256) | Required | Native webhookConfigurationId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### update_webhook

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Update a webhook

CLI: `fourthwall-cli update-webhook`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/webhooks/{webhookConfigurationId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/update-webhook).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `webhook_configuration_id` | string (minLength=1, maxLength=256) | Required | Native webhookConfigurationId |
| `url` | string | Optional | Native field |
| `allowedTypes` | array | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| url | string | Required | Native field |
| allowedTypes | array | Required | Native field |

### delete_webhook

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Delete a webhook

CLI: `fourthwall-cli delete-webhook`. Policy: explicit confirmation.

Native: `DELETE /open-api/v1.0/webhooks/{webhookConfigurationId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/delete-webhook).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `webhook_configuration_id` | string (minLength=1, maxLength=256) | Required | Native webhookConfigurationId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### start_streaming

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Sets streaming status to started for specified services

CLI: `fourthwall-cli start-streaming`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/streaming/start`. [Current source](https://docs.fourthwall.com/api-reference/platform/streaming/start-streaming).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `services` | array | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| services | array | Required | Native field |
| services.[].variant 1 | value | Choose one | Native oneOf |
| services.[].variant1.type | string | Required | Native field |
| services.[].variant1.broadcasterId | string | Optional | Native field |
| services.[].variant1.broadcasterLogin | string | Optional | Native field |
| services.[].variant1.thumbnailUrl | string | Optional | Native field |

### end_streaming

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Sets streaming status to ended for specified services

CLI: `fourthwall-cli end-streaming`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/streaming/end`. [Current source](https://docs.fourthwall.com/api-reference/platform/streaming/end-streaming).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `services` | array | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| services | array | Required | Native field |

### get_public_token

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns an existing public token for the shop, or creates a new one if none exists

CLI: `fourthwall-cli get-public-token`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/public-token`. [Current source](https://docs.fourthwall.com/api-reference/platform/shop/get-public-token).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `output_file` | string (minLength=1) | Required | Absolute NEW owner-private receipt file; exclusive0600 creation, no overwrite. Upload/public-token URLs never enter ordinary output. |

### get_promotion

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns a promotion by id

CLI: `fourthwall-cli get-promotion`. Policy: read.

Native: `GET /open-api/v1.0/promotions/{promotionId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/promotions/get-promotion).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `promotion_id` | string (minLength=1, maxLength=256) | Required | Native promotionId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### update_promotion

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Updates an existing promotion's configuration. Only provided fields are updated; omitted fields remain unchanged. Status changes (activate/deactivate) are part of the same update call.

CLI: `fourthwall-cli update-promotion`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/promotions/{promotionId}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `promotion_id` | string (minLength=1, maxLength=256) | Required | Native promotionId |
| `limits` | object | Optional | Native field |
| `requirements` | object | Optional | Native field |
| `appliesTo` | union | Optional | Native field |
| `status` | LIVE, ENDED | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| limits | object | Optional | Native field |
| limits.maximumUse | integer (format=int32) | Optional | Native field |
| limits.oneUsePerCustomer | boolean | Required | Native field |
| requirements | object | Optional | Native field |
| requirements.minimumOrderValue | object | Optional | Native field |
| requirements.minimumOrderValue.value | number (minimum=0) | Required | Native field |
| requirements.minimumOrderValue.currency | string | Required | Native field |
| appliesTo | union | Optional | Native field |
| appliesTo.variant 1 | value | Choose one | Native oneOf |
| appliesTo.variant1.type | string | Optional | Native field |
| appliesTo.variant 2 | value | Choose one | Native oneOf |
| appliesTo.variant2.productIds | array | Optional | Native field |
| appliesTo.variant2.oncePerOrder | boolean | Optional | Native field |
| status | LIVE, ENDED | Optional | Native field |

### update_product_state

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Transitions the product between `PUBLIC` and `HIDDEN`. Use `DELETE /products/{productId}` to archive — `ARCHIVED` is not reachable here. The sold-out (`available`) flag is preserved; flip it via `PUT /products/{productId}/availability`. Idempotent: no-op if the product is already in the requested state.

CLI: `fourthwall-cli update-product-state`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/products/{productId}/state`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `state` | PUBLIC, HIDDEN | Optional | Target lifecycle state. `PUBLIC` makes the product visible on the storefront; `HIDDEN` keeps it unlisted. The sold-out (`available`) flag is preserved across the transition — use `PUT /products/{productId}/availability` to flip it. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| state | PUBLIC, HIDDEN | Required | Target lifecycle state. `PUBLIC` makes the product visible on the storefront; `HIDDEN` keeps it unlisted. The sold-out (`available`) flag is preserved across the transition — use `PUT /products/{productId}/availability` to flip it. |

### toggle_product_availability

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Updates a product (offer) availability

CLI: `fourthwall-cli toggle-product-availability`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/products/{productId}/availability`. [Current source](https://docs.fourthwall.com/api-reference/platform/products/update-product-availability).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `available` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| available | boolean | Required | Native field |

### mark_download_complete

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Marks digital download as downloaded. If no downloads exist for a digital order and defaultFileUrl is provided in the request body, creates a download with that URL and marks it as downloaded.

CLI: `fourthwall-cli mark-download-complete`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/order/{orderId}/downloaded`. [Current source](https://docs.fourthwall.com/api-reference/platform/orders/mark-download-complete).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `order_id` | string (minLength=1, maxLength=256) | Required | Native orderId |
| `defaultFileUrl` | string | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| defaultFileUrl | string | Optional | Native field |

### finish_giveaway

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Finish giveaway and select winners

CLI: `fourthwall-cli finish-giveaway`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/giveaways/giveaways/{id}/finish/twitch`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `id` | string (minLength=1, maxLength=256) | Required | Native id |
| `participants` | array | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| participants | array | Required | Native field |
| participants.[].userId | string | Required | Native field |
| participants.[].userName | string | Required | Native field |

### create_giveaway_checkout

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a new giveaway or updates existing one

CLI: `fourthwall-cli create-giveaway-checkout`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/giveaways/giveaway-checkout`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `heading` | string | Optional | Native field |
| `description` | string | Optional | Native field |
| `iconUrl` | string | Optional | Native field |
| `buttonText` | string | Optional | Native field |
| `disabled` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| heading | string | Required | Native field |
| description | string | Required | Native field |
| iconUrl | string | Required | Native field |
| buttonText | string | Required | Native field |
| disabled | boolean | Optional | Native field |

### disable_giveaway_checkout

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

disables a giveaway config

CLI: `fourthwall-cli disable-giveaway-checkout`. Policy: explicit confirmation.

Native: `DELETE /open-api/v1.0/giveaways/giveaway-checkout`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### finish_giveaway_draw

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Finish draw and select winners

CLI: `fourthwall-cli finish-giveaway-draw`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/gifting/draw/{id}/finish`. [Current source](https://docs.fourthwall.com/api-reference/platform/gifting/finish-draw).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `id` | string (minLength=1, maxLength=256) | Required | Native id |
| `participants` | array | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| participants | array | Required | Native field |
| participants.[].variant 1 | value | Choose one | Native oneOf |
| participants.[].variant1.service | string | Required | Native field |
| participants.[].variant1.userId | string | Optional | Native field |
| participants.[].variant1.userName | string | Optional | Native field |

### get_gifting_config

Returns the calling shop's saved gifting rules. Returns a default-shaped config when none is persisted yet.

CLI: `fourthwall-cli get-gifting-config`. Policy: read.

Native: `GET /open-api/v1.0/gifting/config`. [Current source](https://docs.fourthwall.com/api-reference/platform/gifting/get-gifting-config).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### update_gifting_config

Writes the four creator-controlled gifting rule fields. Validation (duration 20-180s, valid shipping/products) and the one-platform-per-shop mutex are enforced server-side. Upserts: a first-ever PUT materializes the config row.

CLI: `fourthwall-cli update-gifting-config`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/gifting/config`. [Current source](https://docs.fourthwall.com/api-reference/platform/gifting/update-gifting-config).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `enabled` | boolean | Optional | Master flag. Off pauses purchasability without losing the rest. |
| `entryTimeLimitSeconds` | integer (format=int32) | Optional | Entry time limit in seconds. Validated 20-180. |
| `shipping` | union | Optional | Native field |
| `products` | union | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| enabled | boolean | Required | Master flag. Off pauses purchasability without losing the rest. |
| entryTimeLimitSeconds | integer (format=int32) | Required | Entry time limit in seconds. Validated 20-180. |
| shipping | union | Required | Native field |
| shipping.variant 1 | value | Choose one | Native oneOf |
| shipping.variant1.type | string | Required | Native field |
| shipping.variant1.type | ALL_CREATOR | Optional | Native field |
| shipping.variant 2 | value | Choose one | Native oneOf |
| shipping.variant2.type | string | Required | Native field |
| shipping.variant2.type | ALL_WINNER | Optional | Native field |
| shipping.variant 3 | value | Choose one | Native oneOf |
| shipping.variant3.type | string | Required | Native field |
| shipping.variant3.max | number (format=double) | Optional | Native field |
| shipping.variant3.type | MAX_CREATOR | Optional | Native field |
| products | union | Required | Native field |
| products.variant 1 | value | Choose one | Native oneOf |
| products.variant1.type | string | Required | Native field |
| products.variant1.type | ALL | Optional | Native field |
| products.variant 2 | value | Choose one | Native oneOf |
| products.variant2.type | string | Required | Native field |
| products.variant2.offerIds | array | Optional | Native field |
| products.variant2.type | EXCLUDED | Optional | Native field |
| products.variant 3 | value | Choose one | Native oneOf |
| products.variant3.type | string | Required | Native field |
| products.variant3.offerIds | array | Optional | Native field |
| products.variant3.type | SELECTED | Optional | Native field |

### update_collection

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Updates collection name, description, and/or product list

CLI: `fourthwall-cli update-collection`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/collections/{collectionId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/collections/update-collection).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `collection_id` | string (minLength=1, maxLength=256) | Required | Native collectionId |
| `name` | string | Optional | Native field |
| `description` | string | Optional | Native field |
| `offerIds` | array | Optional | List of product IDs to set in the collection |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Optional | Native field |
| description | string | Optional | Native field |
| offerIds | array | Optional | List of product IDs to set in the collection |

### get_collection_products

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns paginated products in a collection with optional status filtering. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli get-collection-products`. Policy: read.

Native: `GET /open-api/v1.0/collections/{collectionId}/products`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `collection_id` | string (minLength=1, maxLength=256) | Required | Native collectionId |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `status` | PUBLIC, AVAILABLE, SOLD_OUT, HIDDEN, ARCHIVED | Optional | Filter by product status |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### update_collection_products

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Sets the full list of product IDs in the collection

CLI: `fourthwall-cli update-collection-products`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/collections/{collectionId}/products`. [Current source](https://docs.fourthwall.com/api-reference/platform/collections/update-collection-products).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `collection_id` | string (minLength=1, maxLength=256) | Required | Native collectionId |
| `offerIds` | array | Optional | Full list of product IDs to set in the collection |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| offerIds | array | Required | Full list of product IDs to set in the collection |

### update_collection_availability

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Toggle collection availability (available/unavailable)

CLI: `fourthwall-cli update-collection-availability`. Policy: explicit confirmation.

Native: `PUT /open-api/v1.0/collections/{collectionId}/availability`. [Current source](https://docs.fourthwall.com/api-reference/platform/collections/update-collection-availability).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `collection_id` | string (minLength=1, maxLength=256) | Required | Native collectionId |
| `available` | boolean | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| available | boolean | Required | Native field |

### list_webhooks

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Get webhooks

CLI: `fourthwall-cli list-webhooks`. Policy: read.

Native: `GET /open-api/v1.0/webhooks`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/list-webhooks).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### create_webhook

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Create a webhook

CLI: `fourthwall-cli create-webhook`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/webhooks`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/create-webhook).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `url` | string | Optional | Native field |
| `allowedTypes` | array | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| url | string | Required | Native field |
| allowedTypes | array | Required | Native field |

### list_promotions

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all promotions. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-promotions`. Policy: read.

Native: `GET /open-api/v1.0/promotions`. [Current source](https://docs.fourthwall.com/api-reference/platform/promotions/list-promotions).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `codes` | array | Optional | Filter by promotion code(s) |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### create_promotion

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a promotion

CLI: `fourthwall-cli create-promotion`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/promotions`. [Current source](https://docs.fourthwall.com/api-reference/platform/promotions/create-promotion).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | union | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| variant 1 | value | Choose one | Native oneOf |
| variant1.type | string | Required | Native field |
| variant1.codes | array | Optional | Native field |
| variant1.discount | union | Optional | Native field |
| variant1.discount.variant 1 | value | Choose one | Native oneOf |
| variant1.discount.variant1.type | string | Required | Native field |
| variant1.discount.variant1.percentage | number | Optional | Native field |
| variant1.discount.variant1.type | PERCENTAGE | Optional | Native field |
| variant1.requirements | object | Optional | Native field |
| variant1.requirements.newMembersOnly | boolean | Required | Native field |
| variant1.subscriptionType | union | Optional | Native field |
| variant1.subscriptionType.variant 1 | value | Choose one | Native oneOf |
| variant1.subscriptionType.variant1.type | string | Required | Native field |
| variant1.subscriptionType.variant1.type | ALL | Optional | Native field |
| variant1.subscriptionType.variant 2 | value | Choose one | Native oneOf |
| variant1.subscriptionType.variant2.type | string | Required | Native field |
| variant1.subscriptionType.variant2.type | ANNUAL | Optional | Native field |
| variant1.subscriptionType.variant 3 | value | Choose one | Native oneOf |
| variant1.subscriptionType.variant3.type | string | Required | Native field |
| variant1.subscriptionType.variant3.type | MONTHLY | Optional | Native field |
| variant1.tiers | union | Optional | Native field |
| variant1.tiers.variant 1 | value | Choose one | Native oneOf |
| variant1.tiers.variant1.type | string | Required | Native field |
| variant1.tiers.variant1.type | ALL | Optional | Native field |
| variant1.tiers.variant 2 | value | Choose one | Native oneOf |
| variant1.tiers.variant2.type | string | Required | Native field |
| variant1.tiers.variant2.ids | array | Optional | Native field |
| variant1.tiers.variant2.type | SELECTED | Optional | Native field |
| variant1.type | MEMBERSHIPS_MULTI | Optional | Native field |
| variant 2 | value | Choose one | Native oneOf |
| variant2.type | string | Required | Native field |
| variant2.code | string | Optional | Native field |
| variant2.discount | union | Optional | Native field |
| variant2.discount.variant 1 | value | Choose one | Native oneOf |
| variant2.discount.variant1.type | string | Required | Native field |
| variant2.discount.variant1.percentage | number | Optional | Native field |
| variant2.discount.variant1.type | PERCENTAGE | Optional | Native field |
| variant2.requirements | object | Optional | Native field |
| variant2.requirements.newMembersOnly | boolean | Required | Native field |
| variant2.subscriptionType | union | Optional | Native field |
| variant2.subscriptionType.variant 1 | value | Choose one | Native oneOf |
| variant2.subscriptionType.variant1.type | string | Required | Native field |
| variant2.subscriptionType.variant1.type | ALL | Optional | Native field |
| variant2.subscriptionType.variant 2 | value | Choose one | Native oneOf |
| variant2.subscriptionType.variant2.type | string | Required | Native field |
| variant2.subscriptionType.variant2.type | ANNUAL | Optional | Native field |
| variant2.subscriptionType.variant 3 | value | Choose one | Native oneOf |
| variant2.subscriptionType.variant3.type | string | Required | Native field |
| variant2.subscriptionType.variant3.type | MONTHLY | Optional | Native field |
| variant2.tiers | union | Optional | Native field |
| variant2.tiers.variant 1 | value | Choose one | Native oneOf |
| variant2.tiers.variant1.type | string | Required | Native field |
| variant2.tiers.variant1.type | ALL | Optional | Native field |
| variant2.tiers.variant 2 | value | Choose one | Native oneOf |
| variant2.tiers.variant2.type | string | Required | Native field |
| variant2.tiers.variant2.ids | array | Optional | Native field |
| variant2.tiers.variant2.type | SELECTED | Optional | Native field |
| variant2.type | MEMBERSHIPS_SINGLE | Optional | Native field |
| variant 3 | value | Choose one | Native oneOf |
| variant3.type | string | Required | Native field |
| variant3.codes | array | Optional | Native field |
| variant3.discount | union | Optional | Native field |
| variant3.discount.variant 1 | value | Choose one | Native oneOf |
| variant3.discount.variant1.type | string | Required | Native field |
| variant3.discount.variant1.money | object | Optional | Native field |
| variant3.discount.variant1.money.value | number (minimum=0) | Required | Native field |
| variant3.discount.variant1.money.currency | string | Required | Native field |
| variant3.discount.variant1.freeShipping | boolean | Optional | Native field |
| variant3.discount.variant1.type | FLAT_RATE | Optional | Native field |
| variant3.discount.variant 2 | value | Choose one | Native oneOf |
| variant3.discount.variant2.type | string | Required | Native field |
| variant3.discount.variant2.type | FREE_SHIPPING | Optional | Native field |
| variant3.discount.variant 3 | value | Choose one | Native oneOf |
| variant3.discount.variant3.type | string | Required | Native field |
| variant3.discount.variant3.percentage | number | Optional | Native field |
| variant3.discount.variant3.shipping | Excluded, Included, FreeLowestOnly, Free | Optional | Native field |
| variant3.discount.variant3.type | PERCENTAGE | Optional | Native field |
| variant3.requirements | object | Optional | Native field |
| variant3.requirements.minimumOrderValue | object | Optional | Native field |
| variant3.requirements.minimumOrderValue.value | number (minimum=0) | Required | Native field |
| variant3.requirements.minimumOrderValue.currency | string | Required | Native field |
| variant3.appliesToProducts | object | Optional | Native field |
| variant3.appliesToProducts.productIds | array | Required | Native field |
| variant3.appliesToProducts.oncePerOrder | boolean | Optional | Native field |
| variant3.limits | object | Optional | Native field |
| variant3.limits.maximumUse | integer (format=int32) | Optional | Native field |
| variant3.limits.oneUsePerCustomer | boolean | Required | Native field |
| variant3.type | SHOP_MULTI | Optional | Native field |
| variant 4 | value | Choose one | Native oneOf |
| variant4.type | string | Required | Native field |
| variant4.code | string | Optional | Native field |
| variant4.discount | union | Optional | Native field |
| variant4.discount.variant 1 | value | Choose one | Native oneOf |
| variant4.discount.variant1.type | string | Required | Native field |
| variant4.discount.variant1.money | object | Optional | Native field |
| variant4.discount.variant1.money.value | number (minimum=0) | Required | Native field |
| variant4.discount.variant1.money.currency | string | Required | Native field |
| variant4.discount.variant1.freeShipping | boolean | Optional | Native field |
| variant4.discount.variant1.type | FLAT_RATE | Optional | Native field |
| variant4.discount.variant 2 | value | Choose one | Native oneOf |
| variant4.discount.variant2.type | string | Required | Native field |
| variant4.discount.variant2.type | FREE_SHIPPING | Optional | Native field |
| variant4.discount.variant 3 | value | Choose one | Native oneOf |
| variant4.discount.variant3.type | string | Required | Native field |
| variant4.discount.variant3.percentage | number | Optional | Native field |
| variant4.discount.variant3.shipping | Excluded, Included, FreeLowestOnly, Free | Optional | Native field |
| variant4.discount.variant3.type | PERCENTAGE | Optional | Native field |
| variant4.requirements | object | Optional | Native field |
| variant4.requirements.minimumOrderValue | object | Optional | Native field |
| variant4.requirements.minimumOrderValue.value | number (minimum=0) | Required | Native field |
| variant4.requirements.minimumOrderValue.currency | string | Required | Native field |
| variant4.appliesToProducts | object | Optional | Native field |
| variant4.appliesToProducts.productIds | array | Required | Native field |
| variant4.appliesToProducts.oncePerOrder | boolean | Optional | Native field |
| variant4.limits | object | Optional | Native field |
| variant4.limits.maximumUse | integer (format=int32) | Optional | Native field |
| variant4.limits.oneUsePerCustomer | boolean | Required | Native field |
| variant4.type | SHOP_SINGLE | Optional | Native field |

### list_products

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all products with pagination. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-products`. Policy: read.

Native: `GET /open-api/v1.0/products`. [Current source](https://docs.fourthwall.com/api-reference/platform/products/list-products).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `search` | string | Optional | Native search |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### create_product

*Rate limit: 5 requests / minute per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a product from a design or a digital product.

CLI: `fourthwall-cli create-product`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/products`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| type | string | Required | Native field |
| variant 1 | value | Choose one | Native oneOf |
| variant1.type | string | Required | Native field |
| variant1.productTemplateId | string | Optional | Id of the product template to render the design onto, from `GET /open-api/v1.0/product-templates`. |
| variant1.regions | array | Optional | Design regions to place on the product. Each region references a registered media image by id (register it via `POST /open-api/v1.0/media/images` and pass the returned id as `imageId`). |
| variant1.regions.[].region | string | Required | Name of the product region to place the image on, e.g. `front` or `back`. |
| variant1.regions.[].imageId | string | Required | Id of a registered media-library image to render on the region. Register the image first via `POST /open-api/v1.0/media/images` and pass the returned id here. |
| variant1.regions.[].placementId | string | Optional | Placement to target when `placementStrategy` is `PLACEMENT_ID`. Required for that strategy and ignored by the others. |
| variant1.regions.[].placementStrategy | AUTO, FILL_ALL, FULL_REGION, PLACEMENT_ID | Optional | How the image is placed on the region. Defaults to `AUTO` when omitted, and takes precedence over `placementId`/`fillAllPlacements`. - `AUTO` — let the renderer decide using the product's automation defaults (its preferred placement, or fill-all for products like mugs/stickers). - `FILL_ALL` — apply the image to every placement in the region. - `FULL_REGION` — render the image across the full region, skipping the preferred placement. - `PLACEMENT_ID` — target the single placement named by `placementId` (required for this strategy). |
| variant1.colors | array | Optional | Colors to render. Defaults to all available product colors when omitted. Values not offered by the product are ignored; the request is rejected with 400 if none of the supplied colors are available. |
| variant1.sizes | array | Optional | Sizes to include. Defaults to all available product sizes when omitted. Values not offered by the product are ignored; the request is rejected with 400 if none of the supplied sizes are available. When both colors and sizes are supplied, the request is also rejected with 400 if no requested color/size combination is an available variant. |
| variant1.name | string | Optional | Product name |
| variant1.description | string | Optional | Product description |
| variant1.profitMargin | number | Optional | Profit margin in USD applied on top of the base cost. |
| variant1.publishOnCreate | boolean | Optional | Publish the product immediately on creation. Defaults to false (product stays hidden). |
| variant1.type | design | Optional | Native field |
| variant 2 | value | Choose one | Native oneOf |
| variant2.type | string | Required | Native field |
| variant2.name | string | Optional | Product name |
| variant2.description | string | Optional | Product description |
| variant2.price | number | Optional | Price set by the creator, in USD. |
| variant2.publishOnCreate | boolean | Optional | Publish the product immediately on creation. Defaults to false (product stays hidden). |
| variant2.type | digital | Optional | Native field |

### attach_product_images

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Attaches images to a product. Images should be uploaded first via the media upload endpoint.

CLI: `fourthwall-cli attach-product-images`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/products/{productId}/images`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `images` | array | Optional | List of images to attach |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| images | array | Required | List of images to attach |
| images.[].url | string | Required | Image URL |
| images.[].width | integer (format=int32) | Required | Image width in pixels |
| images.[].height | integer (format=int32) | Required | Image height in pixels |

### remove_product_images

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Removes specified images from a product by their URLs.

CLI: `fourthwall-cli remove-product-images`. Policy: explicit confirmation.

Native: `DELETE /open-api/v1.0/products/{productId}/images`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `imageUrls` | array | Optional | List of image URLs to remove |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| imageUrls | array | Required | List of image URLs to remove |

### confirm_digital_file_upload

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

After uploading a file to the presigned URL, call this endpoint to link the file to the product. The file must exist in storage before calling this endpoint.

CLI: `fourthwall-cli confirm-digital-file-upload`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/products/{productId}/digital-files`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `fileUrl` | string | Optional | The file URL returned from the upload-url endpoint |
| `fileName` | string | Optional | Display name for the file |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| fileUrl | string | Required | The file URL returned from the upload-url endpoint |
| fileName | string | Required | Display name for the file |

### remove_digital_file

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Removes a digital file from the product by its file URL.

CLI: `fourthwall-cli remove-digital-file`. Policy: explicit confirmation.

Native: `DELETE /open-api/v1.0/products/{productId}/digital-files`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `fileUrl` | string | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| fileUrl | string | Required | Native field |

### request_digital_file_upload_url

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns a presigned URL to upload a digital file to. After receiving the response, PUT the file bytes directly to the uploadUrl, then call the confirm endpoint to link the file to the product.

CLI: `fourthwall-cli request-digital-file-upload-url`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/products/{productId}/digital-files/upload-url`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `fileName` | string | Optional | Name of the file |
| `contentType` | string | Optional | MIME type of the file |
| `size` | integer (format=int64) | Optional | Size of the file in bytes. Must match the `x-goog-content-length-range` header sent when uploading the bytes to `uploadUrl`. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |
| `output_file` | string (minLength=1) | Required | Absolute NEW owner-private receipt file; exclusive0600 creation, no overwrite. Upload/public-token URLs never enter ordinary output. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| fileName | string | Required | Name of the file |
| contentType | string | Required | MIME type of the file |
| size | integer (format=int64) | Required | Size of the file in bytes. Must match the `x-goog-content-length-range` header sent when uploading the bytes to `uploadUrl`. |

### request_media_upload_url

*Rate limit: 20 requests / minute per shop. See [Rate limiting](/guides/rate-limiting).*

Returns a pre-signed upload URL for uploading a new image. After receiving the response, PUT the image bytes directly to the uploadUrl.

CLI: `fourthwall-cli request-media-upload-url`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/media/upload-url`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `fileName` | string | Optional | Name of the file |
| `contentType` | string | Optional | MIME type of the file |
| `size` | integer (format=int64) | Optional | Size of the file in bytes. Must match the `x-goog-content-length-range` header sent when uploading the bytes to `uploadUrl`. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |
| `output_file` | string (minLength=1) | Required | Absolute NEW owner-private receipt file; exclusive0600 creation, no overwrite. Upload/public-token URLs never enter ordinary output. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| fileName | string | Required | Name of the file |
| contentType | string | Required | MIME type of the file |
| size | integer (format=int64) | Required | Size of the file in bytes. Must match the `x-goog-content-length-range` header sent when uploading the bytes to `uploadUrl`. |

### list_media_images

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Retrieves all images from the shop's media library

CLI: `fourthwall-cli list-media-images`. Policy: read.

Native: `GET /open-api/v1.0/media/images`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### save_media_image

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Persists an uploaded image in the media library after the client has PUT it to the signed URL

CLI: `fourthwall-cli save-media-image`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/media/images`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `fileUrl` | string | Optional | Native field |
| `width` | integer (format=int32) | Optional | Native field |
| `height` | integer (format=int32) | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| fileUrl | string | Required | Native field |
| width | integer (format=int32) | Required | Native field |
| height | integer (format=int32) | Required | Native field |

### create_giveaway

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a new giveaway

CLI: `fourthwall-cli create-giveaway`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/giveaways/giveaways`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `offerId` | string (format=uuid) | Optional | Native field |
| `quantity` | integer (format=int32) | Optional | Native field |
| `username` | string | Optional | Native field |
| `message` | string | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| offerId | string (format=uuid) | Required | Native field |
| quantity | integer (format=int32) | Required | Native field |
| username | string | Optional | Native field |
| message | string | Optional | Native field |

### create_giveaway_links

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a new package with specified number of giveaway links

CLI: `fourthwall-cli create-giveaway-links`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/giveaway-links`. [Current source](https://docs.fourthwall.com/api-reference/platform/giveaway-links/create-giveaway-links).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `productId` | string (format=uuid) | Optional | Native field |
| `number` | integer (format=int32) | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| productId | string (format=uuid) | Required | Native field |
| number | integer (format=int32) | Required | Native field |

### create_gifting_checkout

Creates a paid checkout for gifting a product to live chat

CLI: `fourthwall-cli create-gifting-checkout`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/gifting/checkout`. [Current source](https://docs.fourthwall.com/api-reference/platform/gifting/create-gifting-checkout).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `offerId` | string | Optional | The product offer to gift to live chat. |
| `quantity` | integer (minimum=1, maximum=10000, format=int32) | Optional | How many gifts to purchase. |
| `currency` | USD, EUR, CAD, GBP, AUD, NZD, SEK, NOK, DKK, PLN, INR, JPY, MYR, SGD, MXN, BRL, CHF | Optional | Display currency for the checkout. Defaults to the shop's currency. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| offerId | string | Required | The product offer to gift to live chat. |
| quantity | integer (minimum=1, maximum=10000, format=int32) | Required | How many gifts to purchase. |
| currency | USD, EUR, CAD, GBP, AUD, NZD, SEK, NOK, DKK, PLN, INR, JPY, MYR, SGD, MXN, BRL, CHF | Optional | Display currency for the checkout. Defaults to the shop's currency. |

### create_fulfillment

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a fulfillment with a shipment tracker for provided order items. When trackers change their state, order.status will change to IN_PRODUCTION, PARTIALLY_IN_PRODUCTION, PARTIALLY_SHIPPED, SHIPPED depending on the shipping tracker info. Order updated webhooks will be triggered.

CLI: `fourthwall-cli create-fulfillment`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/fulfillments`. [Current source](https://docs.fourthwall.com/api-reference/platform/fulfillment/create-fulfillment).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `orderId` | string (format=uuid) | Optional | Native field |
| `items` | array (minItems=1) | Optional | Native field |
| `shippingLabel` | object | Optional | Native field |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| orderId | string (format=uuid) | Required | Native field |
| items | array (minItems=1) | Required | Native field |
| items.[].variantId | string (format=uuid) | Required | Native field |
| items.[].quantity | integer (minimum=1, format=int32) | Required | Native field |
| shippingLabel | object | Required | Native field |
| shippingLabel.trackingNumber | string (minLength=1) | Required | Native field |
| shippingLabel.trackingCompany | string (minLength=1) | Required | Native field |

### validate_dns

*Rate limit: 20 requests / minute per shop. See [Rate limiting](/guides/rate-limiting).*

Triggers a live DNS validation by checking all configured records against actual DNS servers and updates their verification status

CLI: `fourthwall-cli validate-dns`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/dns/validate`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### list_collections

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all collections with pagination. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-collections`. Policy: read.

Native: `GET /open-api/v1.0/collections`. [Current source](https://docs.fourthwall.com/api-reference/platform/collections/list-collections).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `search` | string | Optional | Native search |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### create_collection

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Creates a new collection with name, description, and optional product list

CLI: `fourthwall-cli create-collection`. Policy: explicit confirmation.

Native: `POST /open-api/v1.0/collections`. [Current source](https://docs.fourthwall.com/api-reference/platform/collections/create-collection).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `name` | string | Optional | Native field |
| `description` | string | Optional | Native field |
| `offerIds` | array | Optional | List of product IDs to include in the collection |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `payload` | object | Optional | Complete current native JSON body; cannot mix with native body flags or payload_file. |
| `payload_file` | string (minLength=1) | Optional | Absolute regular non-symlink native JSON body file, at most1MiB. Cannot mix with payload or body flags. |

Native body fields below must also satisfy their required fields/oneOf branch. Supply native flat fields, payload OR payload_file. The entire machine-readable schema is available through the CLI and get_operation_schema.

| Native JSON field | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| name | string | Required | Native field |
| description | string | Required | Native field |
| offerIds | array | Required | List of product IDs to include in the collection |

### list_webhook_events

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Get webhook events with pagination and optional filtering by one or more webhook types (repeat or comma-separate the `type` param). The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-webhook-events`. Policy: read.

Native: `GET /open-api/v1.0/webhook-events`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/list-webhook-events).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `type` | array | Optional | Native type |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=50) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_webhook_event

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Get a single webhook event by ID

CLI: `fourthwall-cli get-webhook-event`. Policy: read.

Native: `GET /open-api/v1.0/webhook-events/{webhookEventId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/webhooks/get-webhook-event).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `webhook_event_id` | string (minLength=1, maxLength=256) | Required | Native webhookEventId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_thank_you

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Get Thank You details

CLI: `fourthwall-cli get-thank-you`. Policy: read.

Native: `GET /open-api/v1.0/thank-yous/{thankYouId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/thank-yous/get-thank-you).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `thank_you_id` | string (minLength=1, maxLength=256) | Required | Native thankYouId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_contributions

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns paginated list of orders, donations, and other contributions that can be thanked. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-contributions`. Policy: read.

Native: `GET /open-api/v1.0/thank-you-contributions`. [Current source](https://docs.fourthwall.com/api-reference/platform/thank-yous/list-contributions).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=50) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `state` | array | Optional | Native state |
| `search` | string | Optional | Native search |
| `min_value` | number (format=double) | Optional | Native minValue |
| `contains_msg` | boolean | Optional | Native containsMsg |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_streaming_status

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns streaming status for all services

CLI: `fourthwall-cli get-streaming-status`. Policy: read.

Native: `GET /open-api/v1.0/streaming`. [Current source](https://docs.fourthwall.com/api-reference/platform/streaming/get-streaming-status).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_shop

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns the current shop

CLI: `fourthwall-cli get-shop`. Policy: read.

Native: `GET /open-api/v1.0/shops/current`. [Current source](https://docs.fourthwall.com/api-reference/platform/shop/get-current-shop).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_shop_contact

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns the current shop contact info

CLI: `fourthwall-cli get-shop-contact`. Policy: read.

Native: `GET /open-api/v1.0/shops/current/contact-info`. [Current source](https://docs.fourthwall.com/api-reference/platform/shop/get-shop-contact-info).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_sample_balance

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns the current sample credit balance for the shop

CLI: `fourthwall-cli get-sample-balance`. Policy: read.

Native: `GET /open-api/v1.0/samples/balance`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_reports

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns the list of available report IDs with metadata including name, columns, and supported precisions

CLI: `fourthwall-cli list-reports`. Policy: read.

Native: `GET /open-api/v1.0/reports`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_report

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Fetches a specific analytics report for a date range

CLI: `fourthwall-cli get-report`. Policy: read.

Native: `GET /open-api/v1.0/reports/{reportId}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `report_id` | string (minLength=1, maxLength=256) | Required | Native reportId |
| `from` | string (format=date-time) | Required | Native from |
| `to` | string (format=date-time) | Required | Native to |
| `aggregation_timezone` | string | Required | Timezone in ISO-8601 format (e.g., Europe/Warsaw for Warsaw) |
| `aggregation_precision` | hour, day, week, month, quarter, year | Required | Native aggregationPrecision |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_product

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns product by id

CLI: `fourthwall-cli get-product`. Policy: read.

Native: `GET /open-api/v1.0/products/{productId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/products/get-product).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### archive_product

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Soft-archives the product — sets it to `Archived`. Terminal at this surface: once archived, the product cannot be returned to `PUBLIC`/`HIDDEN` through the open-api (restoration stays admin-only). Idempotent: re-DELETE on an already-archived product also returns 204.

CLI: `fourthwall-cli archive-product`. Policy: explicit confirmation.

Native: `DELETE /open-api/v1.0/products/{productId}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |

### get_product_inventory

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns product (offer) inventory by id

CLI: `fourthwall-cli get-product-inventory`. Policy: read.

Native: `GET /open-api/v1.0/products/{productId}/inventory`. [Current source](https://docs.fourthwall.com/api-reference/platform/products/get-product-inventory).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Native productId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_product_templates

List available product templates. Returns 25 results. To paginate, use the /page/{N} variant of this endpoint (1-indexed). Use the total field in the response to calculate total pages. Pagination is path-based for HTTP cacheability.

CLI: `fourthwall-cli list-product-templates`. Policy: read.

Native: `GET /open-api/v1.0/product-templates`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_product_template


            Get detailed information about a specific product template.

            This endpoint is public and does not require authentication.
            Returns full product details including variants, customizable areas,
            size guide, and images.
        

CLI: `fourthwall-cli get-product-template`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/{productId}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `product_id` | string (minLength=1, maxLength=256) | Required | Product template ID |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### search_product_templates

Search product templates by name, brand, description, sizes, categories, colors, or production method. Returns 25 results. To paginate, use the /search/{query}/page/{N} variant of this endpoint (1-indexed). Use the total field in the response to calculate total pages. Pagination is path-based for HTTP cacheability.

CLI: `fourthwall-cli search-product-templates`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/search/{query}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `query` | string (minLength=1, maxLength=256) | Required | Search query (e.g., 'hoodie', 'black%20t-shirt') |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### search_product_templates_paged

Search product templates with pagination. This endpoint is public and does not require authentication.

CLI: `fourthwall-cli search-product-templates-paged`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/search/{query}/page/{page}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `query` | string (minLength=1, maxLength=256) | Required | Search query (e.g., 'hoodie', 'black%20t-shirt') |
| `page` | integer (minimum=1, format=int32) | Required | Page number (1-indexed) |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### search_product_templates_grouped

Search product templates and group results by product family (libraryId). Products sharing the same physical item but with different production methods (e.g. DTG, Embroidery, DTFX) are collapsed into a single result with a variants list. Returns 25 grouped results. To paginate, use the /search-grouped/{query}/page/{N} variant (1-indexed). Pagination is path-based for HTTP cacheability.

CLI: `fourthwall-cli search-product-templates-grouped`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/search-grouped/{query}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `query` | string (minLength=1, maxLength=256) | Required | Search query (e.g., 'hoodie', 'black%20t-shirt') |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### search_product_templates_grouped_paged

Search product templates grouped by product family with pagination. This endpoint is public and does not require authentication.

CLI: `fourthwall-cli search-product-templates-grouped-paged`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/search-grouped/{query}/page/{page}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `query` | string (minLength=1, maxLength=256) | Required | Search query (e.g., 'hoodie', 'black%20t-shirt') |
| `page` | integer (minimum=1, format=int32) | Required | Page number (1-indexed) |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_product_templates_paged

List available product templates with pagination. This endpoint is public and does not require authentication.

CLI: `fourthwall-cli list-product-templates-paged`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/page/{page}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=1, format=int32) | Required | Page number (1-indexed) |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_product_templates_by_category

Browse product templates filtered by category. Category matches by prefix (e.g., 'Apparel' matches 'Apparel/T-Shirts'). Returns 25 results. To paginate, use the /category/{category}/page/{N} variant of this endpoint (1-indexed). Use the total field in the response to calculate total pages. Pagination is path-based for HTTP cacheability.

CLI: `fourthwall-cli list-product-templates-by-category`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/category/{category}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `category` | Apparel, Accessories, Home & Living | Required | Category path. Top-level: Apparel, Accessories, Home & Living. Subcategory paths like 'Apparel/T-Shirts' are also valid. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_product_templates_by_category_paged

Browse product templates by category with pagination. This endpoint is public and does not require authentication.

CLI: `fourthwall-cli list-product-templates-by-category-paged`. Policy: read.

Native: `GET /open-api/v1.0/product-templates/category/{category}/page/{page}`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `category` | Apparel, Accessories, Home & Living | Required | Category path. Top-level: Apparel, Accessories, Home & Living. Subcategory paths like 'Apparel/T-Shirts' are also valid. |
| `page` | integer (minimum=1, format=int32) | Required | Page number (1-indexed) |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_pro_subscription

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns the current Fourthwall Pro platform subscription status, plan, and usage against plan limits

CLI: `fourthwall-cli get-pro-subscription`. Policy: read.

Native: `GET /open-api/v1.0/pro-subscription`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_orders

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all orders with pagination. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-orders`. Policy: read.

Native: `GET /open-api/v1.0/order`. [Current source](https://docs.fourthwall.com/api-reference/platform/orders/list-orders).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `email` | string | Optional | Native email |
| `created_at_gt` | string (format=date-time) | Optional | Native createdAt[gt] |
| `created_at_lt` | string (format=date-time) | Optional | Native createdAt[lt] |
| `updated_at_gt` | string (format=date-time) | Optional | Native updatedAt[gt] |
| `updated_at_lt` | string (format=date-time) | Optional | Native updatedAt[lt] |
| `status` | array | Optional | Native status |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_order

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns order by id

CLI: `fourthwall-cli get-order`. Policy: read.

Native: `GET /open-api/v1.0/order/{orderId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/orders/get-order).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `order_id` | string (minLength=1, maxLength=256) | Required | Native orderId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_order_by_friendly_id

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns order by friendly id

CLI: `fourthwall-cli get-order-by-friendly-id`. Policy: read.

Native: `GET /open-api/v1.0/order/by-friendly-id/{friendlyId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/orders/get-order-by-friendly-id).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `friendly_id` | string (minLength=1, maxLength=256) | Required | Native friendlyId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_membership_tiers

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Lists all tiers for the current shop

CLI: `fourthwall-cli list-membership-tiers`. Policy: read.

Native: `GET /open-api/v1.0/memberships/tiers`. [Current source](https://docs.fourthwall.com/api-reference/platform/memberships/list-tiers).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_members

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Lists all members for the current shop. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-members`. Policy: read.

Native: `GET /open-api/v1.0/memberships/members`. [Current source](https://docs.fourthwall.com/api-reference/platform/memberships/list-members).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_member

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Gets a member by id

CLI: `fourthwall-cli get-member`. Policy: read.

Native: `GET /open-api/v1.0/memberships/members/{id}`. [Current source](https://docs.fourthwall.com/api-reference/platform/memberships/get-member).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `id` | string (minLength=1, maxLength=256) | Required | Native id |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_mailing_list

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all mailing list entries. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-mailing-list`. Policy: read.

Native: `GET /open-api/v1.0/mailing-list-entries`. [Current source](https://docs.fourthwall.com/api-reference/platform/mailing-lists/list-entries).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_giveaway_packages

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all packages with giveaway links

CLI: `fourthwall-cli list-giveaway-packages`. Policy: read.

Native: `GET /open-api/v1.0/giveaway-links/packages`. [Current source](https://docs.fourthwall.com/api-reference/platform/giveaway-links/list-packages).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_giveaway_package

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all giveaway links for packageId

CLI: `fourthwall-cli get-giveaway-package`. Policy: read.

Native: `GET /open-api/v1.0/giveaway-links/packages/{packageId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/giveaway-links/get-package).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `package_id` | string (minLength=1, maxLength=256) | Required | Native packageId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_giveaway_draw

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Get draw details

CLI: `fourthwall-cli get-giveaway-draw`. Policy: read.

Native: `GET /open-api/v1.0/gifting/draw/{id}`. [Current source](https://docs.fourthwall.com/api-reference/platform/gifting/get-draw).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `id` | string (minLength=1, maxLength=256) | Required | Native id |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_gift_purchase

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns gift purchase details by id

CLI: `fourthwall-cli get-gift-purchase`. Policy: read.

Native: `GET /open-api/v1.0/gift-purchase/{giftPurchaseId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/gift-purchases/get-gift-purchase).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `gift_purchase_id` | string (minLength=1, maxLength=256) | Required | Native giftPurchaseId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_donations

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns all donations with pagination. The maximum page size is 100 - larger values are capped at 100.

CLI: `fourthwall-cli list-donations`. Policy: read.

Native: `GET /open-api/v1.0/donations`. [Current source](https://docs.fourthwall.com/api-reference/platform/donations/list-donations).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `page` | integer (minimum=0, format=int32, default=0) | Optional | Native page |
| `size` | integer (minimum=1, maximum=100, format=int32, default=20) | Optional | Number of elements per page. The maximum page size is 100 - larger values are capped at 100. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_donation

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns donation by id

CLI: `fourthwall-cli get-donation`. Policy: read.

Native: `GET /open-api/v1.0/donations/{donationId}`. [Current source](https://docs.fourthwall.com/api-reference/platform/donations/get-donation).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `donation_id` | string (minLength=1, maxLength=256) | Required | Native donationId |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_dns_status

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns the cached DNS configuration and record status for the shop's custom domain

CLI: `fourthwall-cli get-dns-status`. Policy: read.

Native: `GET /open-api/v1.0/dns`. [Current source](https://docs.fourthwall.com/openapi/platform.json).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### get_collection

*Rate limit: 100 requests / 10 seconds per shop. See [Rate limiting](/guides/rate-limiting).*

Returns a collection by its ID or slug

CLI: `fourthwall-cli get-collection`. Policy: read.

Native: `GET /open-api/v1.0/collections/{collectionIdOrSlug}`. [Current source](https://docs.fourthwall.com/api-reference/platform/collections/get-collection).

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `collection_id_or_slug` | string (minLength=1, maxLength=256) | Required | Native collectionIdOrSlug |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### list_accounts

Local labels/default/auth source availability only. No credential values, paths, provider identity or network.

CLI: `fourthwall-cli list-accounts`. Policy: read.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |

### get_operation_schema

Local reviewed native method/path/query/body/scopes/rate limit and pinned schema provenance. No provider access or authority proof.

CLI: `fourthwall-cli get-operation-schema`. Policy: read.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `operation` | get_webhook, update_webhook, delete_webhook, start_streaming, end_streaming, get_public_token, get_promotion, update_promotion, update_product_state, toggle_product_availability, mark_download_complete, finish_giveaway, create_giveaway_checkout, disable_giveaway_checkout, finish_giveaway_draw, get_gifting_config, update_gifting_config, update_collection, get_collection_products, update_collection_products, update_collection_availability, list_webhooks, create_webhook, list_promotions, create_promotion, list_products, create_product, attach_product_images, remove_product_images, confirm_digital_file_upload, remove_digital_file, request_digital_file_upload_url, request_media_upload_url, list_media_images, save_media_image, create_giveaway, create_giveaway_links, create_gifting_checkout, create_fulfillment, validate_dns, list_collections, create_collection, list_webhook_events, get_webhook_event, get_thank_you, list_contributions, get_streaming_status, get_shop, get_shop_contact, get_sample_balance, list_reports, get_report, get_product, archive_product, get_product_inventory, list_product_templates, get_product_template, search_product_templates, search_product_templates_paged, search_product_templates_grouped, search_product_templates_grouped_paged, list_product_templates_paged, list_product_templates_by_category, list_product_templates_by_category_paged, get_pro_subscription, list_orders, get_order, get_order_by_friendly_id, list_membership_tiers, list_members, get_member, list_mailing_list, list_giveaway_packages, get_giveaway_package, get_giveaway_draw, get_gift_purchase, list_donations, get_donation, get_dns_status, get_collection | Required | Native field |

### preview_shop_batch

Validate every exact request and hash order/profile label/schema locally. No native request, credential loading, ownership check or provider preview.

CLI: `fourthwall-cli preview-shop-batch`. Policy: read.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `tasks` | array (minItems=1, maxItems=20) | Required | One to twenty exact ordered native effects. No signed receipts or mutable payload files. Cannot override account/confirm/output settings. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |

### submit_shop_batch

Confirmed ordered effects; all validated/hash checked before first request. Stop on first failure with known and unattempted receipts; no retry, rollback or implicit continuation.

CLI: `fourthwall-cli submit-shop-batch`. Policy: explicit confirmation.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `tasks` | array (minItems=1, maxItems=20) | Required | One to twenty exact ordered native effects. No signed receipts or mutable payload files. Cannot override account/confirm/output settings. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `review_sha256` | string | Required | Native field |

### export_resources

Confirmed native page/size/results export into a new exclusive0600 file with page/item/5MiB budgets and explicit page/offset continuation. No links followed, binary downloads or atomic-backup guarantee.

CLI: `fourthwall-cli export-resources`. Policy: explicit confirmation.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `operation` | get_collection_products, list_promotions, list_products, list_collections, list_webhook_events, list_contributions, list_orders, list_members, list_mailing_list, list_donations | Required | Native field |
| `arguments` | object | Optional | Current list query/path arguments; cannot override profile/policy/output. |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `start_offset` | integer (minimum=0, maximum=99) | Optional | Native field |
| `max_pages` | integer (minimum=1, maximum=100) | Optional | Native field |
| `max_items` | integer (minimum=1, maximum=10000) | Optional | Native field |
| `output_file` | string (minLength=1) | Required | Native field |

### upload_file

Explicitly confirmed Google Storage PUT using a selected private upload receipt and a bounded local regular file. Exact size/Content-Type and x-goog-content-length-range are preserved. No Fourthwall credentials or redirects, no automatic registration/publishing.

CLI: `fourthwall-cli upload-file`. Policy: explicit confirmation.

| Argument | Type or constraint | Requirement | Meaning |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private shop profile label; not a provider identity or authorization proof. |
| `confirm` | boolean | Optional | Explicit approval for this exact provider effect or local private-file operation. |
| `receipt_file` | string (minLength=1) | Required | Native field |
| `input_file` | string (minLength=1) | Required | Native field |


## 7. Writing safely

Every one of the 37 effects requires `confirm:true` in MCP or `--confirm` in the CLI. This includes new checkouts, public-token PUT, uploads and local export file writes. Read-only hides and directly refuses effects. `FOURTHWALL_ALLOW_DESTRUCTIVE=0` refuses them even when confirmed. Local guard approval is separate from provider authorization and customer consent.

Read the intended record and inspect `get_operation_schema` before writing. Validate IDs, quantities, callback events and the exact profile. Product creation defaults to hidden. Availability is not lifecycle state: `available:false` and `state:HIDDEN` are separate native changes.

No effect retries automatically. A timeout, malformed receipt or partial batch can mean an unknown outcome. Inspect native state before deliberately repeating. The default pacing is 1,000 ms per request; tighter documented operation buckets are respected locally. Other processes share provider quotas.

## 8. Products media and fulfillment

The pinned contract uses `/open-api/v1.0` and current native typed bodies. Product creation supports selected design/digital variants, not every custom production workflow. Digital price is a nonnegative USD amount; `publishOnCreate` defaults false.

```bash
fourthwall-cli create-product --payload-file /absolute/private/digital-product.json --account intended-shop --confirm --agent
fourthwall-cli toggle-product-availability --product-id REVIEWED_PRODUCT_ID --available false --confirm --agent
fourthwall-cli update-product-state --product-id REVIEWED_PRODUCT_ID --state HIDDEN --confirm --agent
```

The digital tutorial describes admin publishing while the current state endpoint documents PUBLIC/HIDDEN. Check actual authorization and storefront visibility before claiming a live publication outcome. These examples are placeholders, not successful shop receipts.

Media workflow: request_media_upload_url saves a signed receipt to a NEW private file; upload_file sends exact local bytes; save_media_image registers the uploaded reference separately. Digital-file workflow uses request_digital_file_upload_url, upload_file and confirm_digital_file_upload. Use private payload files for fileUrl; never paste signed receipts into agent context.

```bash
fourthwall-cli request-media-upload-url --fileName reviewed.png --contentType image/png --size 4096 --output-file /absolute/private/upload-receipt.json --account intended-shop --confirm --agent
fourthwall-cli upload-file --receipt-file /absolute/private/upload-receipt.json --input-file /absolute/private/reviewed.png --account intended-shop --confirm --agent
fourthwall-cli save-media-image --payload-file /absolute/private/register-image.json --account intended-shop --confirm --agent
```

Replace 4096 with the exact file byte count. The helper's local cap is 64 MiB, not a Fourthwall plan entitlement. HTTPS Google Storage signed hosts only, no redirects, exact Content-Type and x-goog-content-length-range; no Fourthwall Authorization header reaches storage. Upload acknowledgement is not registration, storefront publication or access proof. Receipts bind a profile label and metadata, not cryptographic ownership.

Fulfillment requires native orderId, nonempty items with variantId/quantity, and shippingLabel with trackingCompany/trackingNumber. Giveaway links require productId and number, not the old quantity wrapper. Promotions retain four native variants and their nested discount shapes. Streaming services are native typed objects, not strings. Inspect schema before submitting any of these.

## 9. Several accounts and reviewed batches

`FOURTHWALL_ACCOUNTS` is a private JSON array of unique name plus one username/password, access_token or credentials_file source. Named profiles never inherit globals. `FOURTHWALL_DEFAULT_ACCOUNT` selects an exact default; `--account` selects another label. Discovery reports labels and source availability only, never secret values or paths.

Preview validates 1–20 ordered native effects locally before any provider call. Signed-output operations and mutable payload files are excluded. Every nested argument is validated; account/confirm/output overrides are forbidden. Preview returns reviewSha256 and providerValidated:false.

```bash
fourthwall-cli preview-shop-batch --tasks '{"tool":"toggle_product_availability","arguments":{"product_id":"REVIEWED_PRODUCT_ID","available":false}}' --account intended-shop --agent
fourthwall-cli submit-shop-batch --tasks '{"tool":"toggle_product_availability","arguments":{"product_id":"REVIEWED_PRODUCT_ID","available":false}}' --review-sha256 REVIEWED_64_CHARACTER_HASH --account intended-shop --confirm --agent
```

The repeatable JSON flag becomes the tasks array. Use the exact hash from your local preview. It binds prepared requests, task order, profile label and selected schema, not credentials, provider state, expiry or single-use execution. Re-review after credential/state changes. Execution stops on the first failure and reports known results and unattempted indices. No transaction or rollback is promised.

## 10. Pagination and private exports

Query pagination uses native zero-based page/size, with size capped locally at 100. Product-template path pagination is one-based. The old cursor/limit wrappers are obsolete. Native date filter names and repeated status values are preserved by the request encoder; inspect the actual list schema.

export_resources supports the ten selected lists whose current schema exposes results/page/size/totalPages. It validates counters, limits pages/items/bytes, and returns continuation with a page and start_offset when needed. Default budgets are ten pages and 1,000 items; maxima are 100 pages, 10,000 items and 5 MiB.

```bash
fourthwall-cli export-resources --operation list_orders --arguments '{"page":0,"size":100}' --max-pages 10 --max-items 1000 --output-file /absolute/private/orders.json --account intended-shop --confirm --agent
```

A new file is reserved exclusively before fetching; existing files and symlinks are not overwritten. POSIX output mode is 0600; Windows ACLs require separate restriction. Errors remove the partial new file. Exports redact known credentials/signed URLs, but other customer metadata remains private. This is bounded filtered metadata, not an atomic backup, binary download or stable snapshot while data changes.

## 11. How it works

The SDK stdio server and CLI in-memory transport call the same handlers. Ajv validates discovered input schemas and current native body variants. A shared guard applies confirmation and read-only policy before effects. Native method/path allowlists prevent arbitrary provider requests; query arrays and date names retain their native representation.

Six local helpers add private profile discovery, contract inspection, reviewed batches, bounded exports and exact byte uploads. No vendor or community runtime is copied. Official schema provenance and the 39-name migration mapping are checked by scripts.

```bash
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run check:discovery
npm run sync:api -- --check
npm run build:mcpb
```

CI runs macOS, Windows and Linux on Node 22/24 plus desktop packaging. These checks prove local contracts, policy, transports and artifacts; authenticated provider outcomes, desktop GUI installation and matched Codex tokens remain separate. See [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md).

## 12. Your data

Credentials live in private process settings or owner-private files; there is no hosted service or telemetry. Provider API requests go only to api.fourthwall.com. Storage uploads are separately scoped to the documented Google Storage HTTPS hosts and carry no provider credentials.

Raw signed upload receipts and generated public tokens are intentionally written only to a requested new private output_file. Known credentials, sensitive token/file fields and signed credential URLs are redacted from ordinary output and errors. Customer names, emails, order contents and other legitimate native metadata are not automatically anonymized.

Treat provider content and URLs as untrusted data. Optional best-effort audit logs contain static guard decisions, not payloads or credentials; they are not financial ledgers. Keep exports and receipts private. Uninstalling does not revoke provider credentials or reverse effects. Revoke or rotate in Fourthwall and restart dependent runtimes.

## 13. Official and community comparison

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

## 14. Versions and migration

| Component | Version or evidence |
| --- | --- |
| Package and desktop | 2.0.0 |
| Runtime | Node >=22 |
| Native API | Current Platform v1.0 schema checked 2026-10-04 |
| Selected operations | 80 of 95 native operations, 80 distinct method/path routes |
| Legacy | 39 actual tool names preserved; breaking argument refresh |
| Task/token, provider and GUI outcomes | Separate acceptance work; not inferred from local tests |

Old cursor/limit fields become page/size, availability uses available, fulfillment uses items/shippingLabel, giveaway uses productId/number, webhooks require url and allowedTypes, promotions use native oneOf variants, and streaming services use typed objects. Effects now require explicit approval. Token/upload receipts need new private output_file. Product creation stays hidden by default. Use schema/help before migrating scripts.

The current official source SHA-256 is 77de1061d5c9273927fd3cf4cac1375c4bb684bed4cc4c0f22252ea6b0e203fe. Provenance, excluded operations and sanitized snapshot checksum ship in src/tools/provenance.json. [CHANGELOG.md](CHANGELOG.md) records the full refresh; private legacy history remains separate.

## 15. Risks

Full-access Basic credentials make careful profile and permission selection necessary. Local approval cannot prove ownership, customer consent, fulfillment delivery or storefront state. There are no automatic retries, rollbacks, refunds or cleanup workflows beyond the explicitly documented tools.

Fixed local bounds are 1 MiB request/body file, 5 MiB API response/export and 64 MiB byte upload. Timeout defaults to 30 seconds and local pacing to one second, with tighter native buckets. These are conservative process controls, not global quota guarantees. Sandbox verification uses fixtures and makes no real shop changes.

## 16. Troubleshooting

| Symptom | Check |
| --- | --- |
| Missing configuration | Choose one complete private auth source; confirm the launching runtime inherits it |
| API 401/403 | Check revoked credentials, OAuth scopes, shop permissions and intended resource |
| Unknown profile | Use exact list_accounts labels; named profiles never inherit globals |
| 429 | Respect shared provider quotas; do not repeatedly retry a possibly completed effect |
| Invalid arguments | Run schema/--help; old wrappers and guessed body fields are rejected |
| Upload byte mismatch | Request a new receipt for the exact file size; preserve required headers |
| Existing output file | Pick a new private path; outputs never overwrite |
| Empty or malformed receipt | Inspect native state before deliberately repeating |
| GUI launcher cannot find npx | Check the client's PATH or use absolute node/package paths |
| Hidden write absent | Read-only intentionally removes it and refuses direct calls |

Report sanitized reproducible details through [GitHub issues](https://github.com/thenavidm/fourthwall-mcp-cli/issues), or use private security reporting. Never attach credentials, upload URLs or customer exports.

## 17. FAQ

<details>
<summary><b>What is the Fourthwall MCP server?</b></summary>

A local program that lets an MCP app call selected Fourthwall Platform API operations. It exposes 86 shared tasks, including six local workflows, through one implementation also used by the CLI.

</details>

<details>
<summary><b>What is the Fourthwall CLI?</b></summary>

The same tasks as terminal commands. Tool names use underscores in MCP and dashes in commands, such as list_products and fourthwall-cli list-products. Shell agents and scripts can use JSON output without configuring an MCP connection.

</details>

<details>
<summary><b>Does Fourthwall already have an official MCP?</b></summary>

Yes. Fourthwall offers a hosted OAuth MCP at https://mcp.fourthwall.com with broader shop, brand, merchandising and analytics coverage. Its documentation listed 123 tools when reviewed on October 4, 2026; that is a documentation count, not authenticated discovery.

</details>

<details>
<summary><b>When should I choose the official MCP?</b></summary>

Choose it for hosted OAuth, broad dashboard coverage and its own native previews and confirmations. Choose this companion when you need a dedicated shared task CLI, exact local request reviews, isolated profile selection or bounded private metadata exports.

</details>

<details>
<summary><b>Is having a CLI enough to make this better?</b></summary>

No. Generic MCP terminal clients also exist, and the official MCP already confirms changes. The useful additions here are specific local workflows and consistent per-call policy across CLI and MCP. There is no universal superiority or total-coverage claim.

</details>

<details>
<summary><b>Which clients can use it?</b></summary>

Codex, Claude Code, Claude Desktop, Cursor, VS Code/Copilot, Windsurf, Zed and Gemini CLI can launch a local stdio server where supported. Other stdio clients can use the same executable. URL-only hosted connectors cannot connect directly to this local package.

</details>

<details>
<summary><b>Do I need Node?</b></summary>

The npm package and manifest require Node 22 or newer. The desktop bundle includes production JavaScript dependencies; a compatible host must provide the required runtime. macOS, Windows and Linux are declared; CI and actual GUI installation are separate checks.

</details>

<details>
<summary><b>Where do I get Fourthwall credentials?</b></summary>

A Fourthwall SUPER ADMIN can create shop API credentials in Settings > For Developers. Configure the complete private username/password pair, an existing OAuth access token, or a private credential JSON file. Basic credentials grant full shop access.

</details>

<details>
<summary><b>Does login open OAuth?</b></summary>

No. fourthwall-cli login prints the private setup instructions. It does not create credentials, open browser consent, exchange tokens or refresh an existing OAuth token. Use the official provider flow separately if you need OAuth.

</details>

<details>
<summary><b>Can I connect several shops?</b></summary>

Yes. FOURTHWALL_ACCOUNTS contains independently configured named profiles, and --account selects one exact label. Named profiles never inherit global credentials. Labels and review hashes do not establish shop ownership or lock credential contents.

</details>

<details>
<summary><b>What does read-only do?</b></summary>

FOURTHWALL_READ_ONLY=1 exposes only the 49 read operations and directly refuses the 37 hidden effects, even if confirm is supplied. This is a local runtime policy; it does not reduce permissions on Fourthwall credentials or govern another client.

</details>

<details>
<summary><b>What needs confirmation?</b></summary>

All 37 provider and local effects need confirm:true in MCP or --confirm in the CLI. That includes product changes, checkout creation, token generation, upload URL requests, byte uploads, reviewed batches and exports. --yes and --agent do not grant permission.

</details>

<details>
<summary><b>Does creating a product publish it?</b></summary>

Creation defaults publishOnCreate to false, keeping the product hidden. Publishing is a separate deliberate choice. The current state endpoint documents PUBLIC/HIDDEN, while the digital-product tutorial also describes admin publishing; authorization and live visibility must be checked in the intended shop.

</details>

<details>
<summary><b>Are batches transactions?</b></summary>

No. Preview validates every request locally and hashes exact requests, order, profile label and pinned contract. Submit verifies that hash and stops on the first failure. There is no rollback, state lock, expiry or single-use promise; failed effect outcomes can be unknown.

</details>

<details>
<summary><b>Are exports complete backups?</b></summary>

No. Exports save selected native page/size/results metadata with explicit page, item and byte budgets and continuation. They are not atomic snapshots, binary downloads or a guarantee of completeness while shop data changes.

</details>

<details>
<summary><b>How do media and digital uploads work?</b></summary>

Request a signed upload receipt into a new private file, then explicitly upload matching local bytes to the documented Google Storage host. Registration or attachment is separate. The upload sends no Fourthwall Authorization header and never automatically publishes a product.

</details>

<details>
<summary><b>Where do my credentials and receipts go?</b></summary>

Credentials remain in private environment settings or owner-only regular files outside repositories. Signed upload URLs and public tokens are saved only to requested new private files. Ordinary output redacts known credentials and signed URLs; other shop/customer fields remain private data.

</details>

<details>
<summary><b>Can I install the desktop extension?</b></summary>

Download fourthwall-2.0.0.mcpb from GitHub Releases and install it through a supported Claude Desktop Extensions screen. Choose one credential source and leave others empty. The release includes production dependencies and no credentials. Archive/protocol checks do not prove GUI installation in every client build.

</details>

<details>
<summary><b>How much does it cost, and does CLI save tokens?</b></summary>

The software is free under AGPL-3.0. Fourthwall service fees, plans and usage still apply. CLI can avoid loading unused MCP schemas, but command help, results, retries and task completion also cost context. Matched completed Codex task/token measurements remain pending; no savings percentage is invented.

</details>

<details>
<summary><b>What changed from the old MCP?</b></summary>

All 39 actual legacy tool names remain, but native arguments and pagination were corrected. The new package adds a CLI, desktop bundle, 80 selected native operations, six local workflows, explicit effect approval and stronger private output handling. Version 2.0.0 is a breaking contract refresh; old private history is preserved separately.

</details>

## Questions

Use [issues](https://github.com/thenavidm/fourthwall-mcp-cli/issues) with sanitized reproduction steps. Security reports belong in the private advisory form.

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. He creates useful free tools, MCP servers and CLIs that creators and founders can use in their own workflows.

**Links**

- Personal website: [navid.me](https://navid.me)
- Link in bio: [navid.bio](https://navid.bio)
- Navid Media: [navid.media](https://navid.media)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

## Dependencies

MCP SDK, Ajv and ajv-formats power the shared runtime. TypeScript, Vitest and the desktop packer are build/test tools. Dependency licenses are retained in the bundle; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## License

AGPL-3.0. Preserve the license and applicable source obligations. Fourthwall is a separate provider; this community companion is not its official MCP.

© 2026 [Navid Media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=fourthwall-mcp-cli&utm_content=readme). Made with ❤️ by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fourthwall-mcp-cli&utm_content=readme).
