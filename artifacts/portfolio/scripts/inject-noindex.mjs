/**
 * Post-build script: inject <meta name="robots" content="noindex"> into
 * static HTML for routes that contain placeholder content not ready for
 * indexing. Run automatically after `vite build`.
 *
 * For each listed route the script creates
 *   dist/public/<route>/index.html
 * with the noindex tag embedded in <head>. Static servers that do a
 * directory-index lookup will serve this file for the route, delivering the
 * directive before any JavaScript executes.
 *
 * Remove a route from NOINDEX_ROUTES once its content is ready for indexing.
 */

import { readFileSync, mkdirSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const NOINDEX_ROUTES = [
  "projects/legacy-cloud-transformation",
  "projects/simcorp-dimension-integration",
  "projects/major-trading-transformation",
  "projects/agile-culture-shift",
];

const distDir = join(__dirname, "..", "dist", "public");
const indexHtml = readFileSync(join(distDir, "index.html"), "utf-8");

if (!indexHtml.includes("</head>")) {
  console.error("ERROR: Could not find </head> in dist/public/index.html");
  process.exit(1);
}

// Inject the noindex meta tag immediately before </head>
const noindexHtml = indexHtml.replace(
  "</head>",
  '  <meta name="robots" content="noindex">\n  </head>',
);

for (const route of NOINDEX_ROUTES) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, "index.html"), noindexHtml, "utf-8");
  console.log(`[noindex] Created dist/public/${route}/index.html`);
}

console.log("[noindex] Done.");
