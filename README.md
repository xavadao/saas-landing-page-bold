# Vibed SaaS Bold

A bold, multi-page SaaS marketing example with cinematic imagery and interactive product storytelling.

Live demo: [https://vibed-saas-bold.xavainf.com](https://vibed-saas-bold.xavainf.com)

## Features

- Responsive marketing layouts and navigation
- Product, feature, pricing, and case study pages
- Original bundled photography, interactive sections, and scroll effects

## Run locally

Requires Node.js 22.13 or newer and pnpm 11.13.0.

```sh
pnpm install
pnpm dev
```

Use `pnpm dev` for fast UI development at http://localhost:3000. Use `pnpm preview` to build and run the production Cloudflare serving configuration locally at http://localhost:8787.

## Build and preview

```sh
pnpm build
pnpm start
```

`pnpm build` checks TypeScript and generates `out/`. `pnpm start` serves that existing build through Wrangler. `pnpm preview` combines both steps.

## Deploy

```sh
pnpm exec wrangler login
pnpm deploy
```

Deployment builds the site and uploads it to Cloudflare Workers. `wrangler.jsonc` sets the Worker name to `vibed-saas-bold` and the custom domain to `vibed-saas-bold.xavainf.com`. The deploying account needs access to the configured Cloudflare account and the `xavainf.com` zone. To host your own copy, update the account, Worker name, and domain first.

## Runtime

Next.js 16 and React 19 build the site into static HTML, CSS, and JavaScript in `out/`. Cloudflare Workers Static Assets serves those files; no Next.js server runs in production.

Source pages and components live in `src/`; bundled assets live in `public/`. Generated build output and local credentials are ignored by Git.

## Demo limitations

Forms, calls to action, product metrics, customer stories, and pricing illustrate a fictional product. No billing, account provisioning, or message delivery service is connected.
