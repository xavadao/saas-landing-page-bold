# Vibed SaaS Bold

A bold, multi-page SaaS marketing example with cinematic imagery and interactive product storytelling.

Live demo: [https://vibed-saas-bold.xavainf.com](https://vibed-saas-bold.xavainf.com)

Source: [View source on GitHub](https://github.com/xavadao/saas-landing-page-bold). This open-source website example is published for community review and development.

## Features

- Responsive marketing layouts and navigation
- Product, feature, pricing, and case study pages
- Original bundled photography, interactive sections, and scroll effects

## Search and accessibility

Every page includes a fixed bottom-right, keyboard-accessible “Made with XavaInf” badge linking to https://xavainf.com and a visible “View source on GitHub” footer link. The badge stays in place while scrolling, with safe-area spacing and footer clearance; demo disclosures remain in the page flow. Pages also include descriptive page metadata, a canonical URL, and social preview metadata. `robots.txt`, `sitemap.xml`, and `llms.txt` describe the published demo routes and limitations. Structured data identifies the site as a creative demonstration, without product ratings or customer claims. Mobile navigation supports Escape, focus handling, and reduced motion.

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

## License

Authored project source is available under the [MIT License](LICENSE). Third-party images, fonts, dependencies, and other materials retain their respective terms; see [Third-party notices](THIRD_PARTY_NOTICES.md).
