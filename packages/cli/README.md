# @supernova/cli

Command-line tools for the Supernova Site Platform.

## Commands

### `create-site`

Generate a deterministic client site skeleton for a supported vertical.

```bash
pnpm supernova create-site \
  --name "Blue Ridge Outdoor Living" \
  --slug blue-ridge-outdoor-living \
  --vertical landscaping
```

Options:

- `--output` — destination directory (default: `./generated/<slug>`)
- `--dry-run` — print planned files without writing

Safety guarantees:

- Slugs must be kebab-case
- Unknown verticals are rejected
- Nonempty destinations are never overwritten
- `.env.example` is created; `.env` and secrets are never generated

## Development

```bash
pnpm --filter @supernova/cli build
pnpm --filter @supernova/cli test
```
