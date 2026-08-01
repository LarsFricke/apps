# my-apps

Monorepo hosting multiple independent React SPAs behind a single shared domain on Cloudflare Workers.

## How it works

Each app in `apps/` is a standalone Vite + React + TypeScript single-page application that deploys as its **own Cloudflare Worker** with Static Assets. All apps share the hostname `apps.larsfricke.com` but are served under distinct path prefixes:

| App             | URL                                  |
| --------------- | ------------------------------------ |
| `app1`          | `apps.larsfricke.com/app1/`          |
| `app2`          | `apps.larsfricke.com/app2/`          |
| `bergabenteuer` | `apps.larsfricke.com/bergabenteuer/` |

### Per-app layout

Every app is self-contained:

```
apps/<name>/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts     # base: "/<name>/"
├── worker.js           # strips the path prefix, forwards to ASSETS binding
├── wrangler.jsonc      # Worker config + route patterns
└── src/
    ├── main.tsx        # React Router basename="/<name>"
    ├── App.tsx
    └── ...
```

### Request flow

1. A request hits `apps.larsfricke.com/<name>/...`
2. Cloudflare's route system (`routes` in `wrangler.jsonc`) directs it to that app's Worker.
3. `worker.js` strips the `/<name>` prefix from the path.
4. The request is forwarded to the `ASSETS` static-asset binding.
5. If no asset matches, `not_found_handling: "single-page-application"` serves `index.html` — enabling client-side routing.

Each app's Vite `base` and React Router `basename` ensure assets and links resolve under the correct subpath.

## Supported features

- **Independent deployments**: each app builds and deploys separately. Adding or changing one app never touches the others.
- **Client-side routing**: apps using React Router with `basename="/<name>"` support deep links and SPA fallback via Workers Static Assets.
- **Shared domain**: all apps live on one hostname under path prefixes — no per-app subdomains.
- **Arbitrary static assets**: place files in `apps/<name>/public/` and reference them as `/<name>/path/to/file`.
- **Local development**: `npm run dev` in any app starts Vite's dev server with the correct base path.

## Adding a new app

1. Copy an existing app (e.g. `apps/app1`) to `apps/<newname>/`.
2. In `vite.config.ts`, change `base: "/<newname>/"`.
3. In `src/main.tsx`, change the `<BrowserRouter basename="/<newname>">`.
4. In `package.json`, set `"name": "<newname>"`.
5. In `wrangler.jsonc`, change `"name"` and both `routes` patterns to `apps.larsfricke.com/<newname>` and `apps.larsfricke.com/<newname>/*`.
6. In `worker.js`, replace the prefix string (e.g. `"/app1"`) with `"/<newname>"`.
7. Create a new Cloudflare Workers Build project connected to this repo with **Root directory = `apps/<newname>`**, **Build command = `npm run build`**, **Deploy command = `npx wrangler deploy`**.
8. Ensure `apps.larsfricke.com` is a proxied DNS record on your Cloudflare zone — the route attaches automatically on deploy.

## Development

From the repo root (uses npm workspaces):

```bash
npm install
npm run dev      # starts all apps' dev servers
npm run build    # builds all apps
```

Or work on a single app:

```bash
cd apps/bergabenteuer
npm install
npm run dev
npm run build
```

## Deployment

Each app is deployed via Cloudflare's git integration (Workers Builds) or `npx wrangler deploy` from the app directory. The `routes` array in each `wrangler.jsonc` registers the app's path on `apps.larsfricke.com` automatically — no manual route setup beyond the initial DNS record.