# Catherine Lu — Portfolio

Career portfolio and painting gallery with a flowing-water visual theme.

Live site: https://catherine-lu-portfolio.cathylzn.chatgpt.site

## Local development

Requires Node.js 22 or newer. No package installation, API keys, or runtime dependencies are needed.

```sh
npm run check
npm run build
python3 -m http.server 8000
```

Visit http://localhost:8000. Use localhost or HTTPS for email clipboard access. The Python server is optional and for local preview only.

## Deployment

`npm run build` validates source references, clears generated `dist/`, and produces:

- `dist/client/`: complete static site, including paintings, resume, and project samples.
- `dist/server/index.js`: Cloudflare Workers-compatible asset handler (requires an `ASSETS` binding).
- `dist/.openai/hosting.json`: existing Sites project identity.

For a generic static host, publish **dist/client**. For Sites, use the Sites hosting skill to package the Worker and assets, save the pushed revision, and publish only when requested. Do not publish the repository root.

GitHub stores the source; creating a GitHub repository does not automatically deploy a website. The validation workflow checks and builds the project, while the Pages workflow publishes it.

### Publish with GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`, which builds and publishes `dist/client` whenever the `main` branch is updated.

1. Create an empty GitHub repository, or use `https://github.com/zl5877-dotcom/iknowcatherine`.
2. Upload this complete project to the repository and make sure the files are on the `main` branch.
3. On GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Open the repository's **Actions** tab and select **Deploy to GitHub Pages**. If it has not already started after a push, choose **Run workflow**.
6. Wait for both the `build` and `deploy` jobs to finish. The site URL appears in the completed deployment and in **Settings → Pages**.

For the `iknowcatherine` repository, the default address will be `https://zl5877-dotcom.github.io/iknowcatherine/`. GitHub Pages serves this project over HTTPS, so the email copy-to-clipboard behavior is supported in modern browsers.

All current website features are GitHub Pages compatible. The site has no server-side code, database, authentication, API keys, or form-processing backend. The `.openai/hosting.json` file and generated `dist/server/index.js` are specific to the existing ChatGPT Site and are not used by GitHub Pages; the Pages workflow publishes only `dist/client`.

## Continuing development

See [AGENTS.md](AGENTS.md) for structure, design decisions, asset mappings, testing, and publishing guidance. Original artwork and old exports may be kept locally in ignored `.local-archive/`; this is not required to build or deploy. Current runtime assets and preserved earlier gallery versions are tracked in `assets/`.

No license is granted for reuse of Catherine's artwork, writing, or personal materials. Confirm permission before publishing source publicly.
