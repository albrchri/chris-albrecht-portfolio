import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

/**
 * Paths whose pages contain placeholder content not ready for indexing.
 * The plugin injects `X-Robots-Tag: noindex` in HTTP responses for these
 * routes so crawlers receive the directive even without executing JavaScript.
 * Remove a path from this list once the page has real, indexable content.
 */
const NOINDEX_PATHS = [
  "/projects/legacy-cloud-transformation",
  "/projects/simcorp-dimension-integration",
  "/projects/major-trading-transformation",
  "/projects/agile-culture-shift",
];

function noindexHeadersPlugin(): Plugin {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addHeaders = (server: any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    server.middlewares.use((req: any, res: any, next: () => void) => {
      const rawUrl: string = req.url ?? "";
      // Strip query string for matching
      const pathname = rawUrl.split("?")[0];
      if (NOINDEX_PATHS.some((p) => pathname === p || pathname.endsWith(p))) {
        res.setHeader("X-Robots-Tag", "noindex");
      }
      next();
    });
  };
  return {
    name: "noindex-headers",
    configureServer: addHeaders,
    configurePreviewServer: addHeaders,
  };
}

const rawPort = process.env.PORT;

if (!rawPort) {
  throw new Error(
    "PORT environment variable is required but was not provided.",
  );
}

const port = Number(rawPort);

if (Number.isNaN(port) || port <= 0) {
  throw new Error(`Invalid PORT value: "${rawPort}"`);
}

const basePath = process.env.BASE_PATH;

if (!basePath) {
  throw new Error(
    "BASE_PATH environment variable is required but was not provided.",
  );
}

export default defineConfig({
  base: basePath,
  plugins: [
    react(),
    tailwindcss(),
    runtimeErrorOverlay(),
    noindexHeadersPlugin(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer({
              root: path.resolve(import.meta.dirname, ".."),
            }),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
