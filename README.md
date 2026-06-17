# natsuki.cloud

Personal site built with Astro and TypeScript, deployed as a Cloudflare Worker.

The current page copy is placeholder/demo content for layout and UX testing. Replace future production content from `src/data/siteContent.ts` first; the Astro components are intended to stay mostly structural.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Cloudflare Worker

```sh
npm run deploy
```

Worker settings live in `wrangler.jsonc`. The build output is generated in `dist`.
