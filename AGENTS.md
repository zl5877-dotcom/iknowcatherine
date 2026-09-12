# Catherine Lu portfolio — Codex guide

## Stack and structure

Dependency-free static site: HTML, CSS, and browser JavaScript. Node.js 22+ validates and builds; there is no framework, API, database, or authentication.

- `index.html`: all content and five tab panels.
- `styles.css`: tokens, layout, responsive rules, water theme, gallery frames.
- `script.js`: tab/menu behavior, copy-email feedback, gallery corner ornaments.
- `assets/`: deployed paintings, water texture, resume, and project samples.
- `scripts/check.mjs`: checks routes, local asset references, PDFs, and Sites manifest.
- `build.mjs`: validates, clears `dist/`, copies the static site, and creates the Sites Worker entry.
- `.openai/hosting.json`: identity of the existing live Sites project; do not replace it.
- `.github/workflows/build.yml`: CI validation/build only.
- `.github/workflows/deploy-pages.yml`: builds and publishes `dist/client` to GitHub Pages from `main`.
- `dist/`, `outputs/`, `.local-archive/`, `work/`: ignored generated/local material. Never edit or deploy these as source.

## Pages and behavior

Navigation hashes: `#home`, `#about` (profile/projects), `#experience` (resume), `#paintings`, `#water`. Each needs matching `data-panel` and `data-tab-link`; update section counters if adding a page. Initial hashes work, but browser `hashchange`/Back handling is not implemented.

Email links copy `zl5877@nyu.edu` instead of opening a mail app. Phone: `(475) 439-4455`. LinkedIn: `https://www.linkedin.com/in/catherine-lu-2028go`. Resume and project samples are linked from `assets/`. Keep career copy factual and concise; never invent dates or metrics.

## Design constraints

Direction: flowing water/sand, streamlined elegance, calm strength—not a clinical/scientific interface. Preserve water texture, warm translucent surfaces, generous space, serif headings, reduced-motion support, and mobile breakpoints.

Core colors: ink `#343b3e`, muted `#747b7c`, paper `#f4f0e9`, sand `#a28e72`. Fonts: DM Sans, Newsreader, and Songti/STSong fallbacks for Chinese.

The gallery is a 12-column exhibition wall on desktop and two columns below 700px. Vintage frame colors are per-piece CSS variables; ornaments must remain outside artwork and `aria-hidden`. Approved display assets include `turtle-brighter.png`, `banana-ballet-vibrant.png`, and `calligraphy-full.jpg`. Preserve earlier `painting-06/07/08.webp` originals. Calligraphy must remain large and uncropped with `height:auto`, `aspect-ratio:auto`, and `object-fit:contain`.

Water quotes need attribution/source. Catherine excludes noncompetition (`不争`) themes; favor strength, persistence, and tranquility, and verify attributions.

## Edit, test, deploy

1. Check `git status`; preserve unrelated changes.
2. Run `npm run check` and `npm run build` (no install needed). Output: `dist/client`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
3. Preview with `python3 -m http.server 8000`; test all tabs, mobile menu, email copy, downloads/links, gallery, complete calligraphy, keyboard focus, and reduced motion.
4. Automated source checks are not visual QA. Report any unavailable browser check honestly.
5. For static hosting, publish `dist/client`. For the live Site, use the Sites hosting skill and existing manifest; never create a replacement Site. GitHub CI does not deploy.

Git remotes: `origin` is `https://github.com/zl5877-dotcom/iknowcatherine.git`; `sites` preserves the live Site source remote. Never persist credentials in files, URLs, or Git configuration. The repository contains Catherine's public-facing contact details, artwork, resume, and writing; no license is granted for reuse.
