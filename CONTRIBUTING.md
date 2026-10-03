# Contributing

Read INSTALL.md, COMPARISON.md and SECURITY.md first. Preserve the shared handler/guard seam; CLI and MCP must discover the same schemas and execute the same operation. Prefer current official contracts and pin reviewed changes in provenance. Never introduce automatic effect retries, implicit publishing or secret output.

Run typecheck, build, tests, check:counts, check:discovery, sync:api -- --check and desktop packaging. Add tests for meaningful contract, profile, transport or effect-policy changes. Update README arguments, INSTALL, SKILL, CHANGELOG, package/lock/manifest version and the matching published CMS guide together. Keep all FAQ answers in accordions and preserve the exact author/footer house format.

The schema command checks the pinned selected snapshot; it does not fetch and silently regenerate newer upstream schemas. Native changes require review. Do not commit credentials, private payload files, customer exports, signed receipts or private legacy history.
