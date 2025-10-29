# dining-etiquette-site

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) 
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
# UA Dining Etiquette — static site

This repository contains a lightweight Vue 3 + Vite site that teaches professional dining etiquette for University of Arizona students. It's built for clarity and easy deployment to GitHub Pages.

## Quick links

- Live site: https://nhswg.github.io/dining-etiquette-site/
- Source: this repository

## What this repo includes

- A small Vue 3 app (single-page) with organized views in `src/views`
- Centralized CSS in `src/assets/main.css`
- GitHub Actions workflow at `.github/workflows/deploy.yml` that builds & deploys to GitHub Pages

## Local development (quick start)

1. Install dependencies

```bash
npm install
```

2. Start development server (hot reload)

```bash
npm run dev
```

3. Open http://localhost:5173

## Build & preview production

```bash
npm run build
npm run preview
```

## Deployment

- This repo uses a GitHub Actions workflow to build and deploy the `dist/` output to GitHub Pages whenever you push to `main`.
- You can force a redeploy without code changes using an empty commit:

```bash
git commit --allow-empty -m "Redeploy" && git push
```

## Vite `base` configuration

- The `base` value in `vite.config.js` controls the asset paths in the built site. Currently it's set for the repository path (`/dining-etiquette-site/`). If you change the repo name or use a custom domain, update `base` accordingly and rebuild.

## Contributing

- Open an issue or submit a PR for content, copy edits, or layout improvements.

## Troubleshooting

- If Actions fails, check the Actions tab and inspect the `Build` and `Deploy` steps logs.
- If pages show stale content, try a hard refresh (Shift+Reload) or clear cache; the browser can cache built assets.

## License & contact

- License: MIT (or pick your preferred license). Update `LICENSE` as needed.
- Contact: open an issue in this repo or email (update with your preferred contact method).

Enjoy! If you want, I can add a deployment status badge to this README or a short contributing guide.
