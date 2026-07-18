import { copyFile, rename, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDir = join(process.cwd(), "dist", "client");
const entryHtml = join(outputDir, "github-pages.html");
const indexHtml = join(outputDir, "index.html");
const notFoundHtml = join(outputDir, "404.html");
const nojekyll = join(outputDir, ".nojekyll");

try {
  await stat(entryHtml);
} catch {
  console.error("GitHub Pages build failed: dist/client/github-pages.html was not generated.");
  process.exit(1);
}

await rename(entryHtml, indexHtml);
await copyFile(indexHtml, notFoundHtml);
await writeFile(nojekyll, "");

console.log("GitHub Pages files ready: dist/client/index.html, 404.html, .nojekyll");