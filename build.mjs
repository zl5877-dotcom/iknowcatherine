import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

process.chdir(fileURLToPath(new URL('.', import.meta.url)));
await import('./scripts/check.mjs');
// dist is generated output only; remove stale artifacts before each build.
await rm('dist', { recursive: true, force: true });

await mkdir('dist/client', { recursive: true });
for (const file of ['index.html', 'styles.css', 'script.js', 'assets']) {
  await cp(file, `dist/client/${file}`, { recursive: true });
}
await mkdir('dist/.openai', { recursive: true });
await cp('.openai/hosting.json', 'dist/.openai/hosting.json');
await mkdir('dist/server', { recursive: true });
await writeFile('dist/server/index.js', `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let response = await env.ASSETS.fetch(request);
    if (response.status === 404 && !url.pathname.includes('.')) {
      const fallback = new Request(new URL('/index.html', url), request);
      response = await env.ASSETS.fetch(fallback);
    }
    return response;
  }
};\n`);
