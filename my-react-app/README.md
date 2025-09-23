# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Deployment: GitHub Pages

This project is configured to deploy automatically to **GitHub Pages** using GitHub Actions.

### 1. Repository Settings

Make sure your default branch is `main` (or adjust the workflow). The workflow file lives at `.github/workflows/deploy.yml`.

### 2. Base Path Configuration

`vite.config.js` sets:

```js
base: '/smu-software-engineering-project/'
```

This must match the repository name so that asset URLs resolve correctly on Pages. If you rename the repo or use a custom domain (CNAME), update this value.

### 3. Automatic Deployment

On every push to `main`, GitHub Actions will:

1. Install dependencies
2. Build the site (`npm run build`)
3. Publish the `dist` output to GitHub Pages

### 4. Enable GitHub Pages

After the first successful workflow run:

1. Go to: Settings → Pages
2. Set Source to: GitHub Actions (should be automatic once the workflow runs)
3. The site will be available at:
	<https://YOUR_GITHUB_USERNAME.github.io/smu-software-engineering-project/>

### 5. Local Build Preview

```bash
npm install
npm run build
npm run preview
```

### 6. Common Issues

- 404s / Missing CSS: Ensure the `base` path matches the repository name.
- Old assets showing: Hard refresh (Ctrl+F5) or clear cache; GitHub Pages can cache aggressively.
- Custom domain: Remove or adjust `base` (usually set to `/`) and add a `CNAME` file to `public/`.

### 7. Manual Local Artifact

You can build locally using:

```bash
npm run deploy:local
```

The static output will be in `dist/`.

---

If you need to support a different deployment target (e.g., Netlify, Vercel, Cloudflare Pages), you can remove the `base` option or make it conditional.
