// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const githubPagesBase = process.env.VITE_GITHUB_PAGES_BASE;
const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true" || Boolean(githubPagesBase);

function normalizeBase(base: string | undefined) {
  if (!base || base === ".") return "/";
  return `/${base.replace(/^\/+|\/+$/g, "")}/`.replace(/^\/\/$/, "/");
}

export default defineConfig({
  vite: {
    // GitHub Pages project sites are served from /<repo>/, while user/org sites
    // are served from /. The workflow sets VITE_GITHUB_PAGES_BASE automatically.
    base: isGitHubPagesBuild ? normalizeBase(githubPagesBase) : "/",
  },
  tanstackStart: {
    pages: [{ path: "/" }],
    prerender: {
      enabled: true,
      crawlLinks: false,
      failOnError: true,
    },
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
