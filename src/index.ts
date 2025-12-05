import { serve, file } from "bun";
import { join } from "path";
import index from "./index.html";

const publicDir = join(import.meta.dir, "../public");

const server = serve({
  routes: {
    "/": index,
  },

  async fetch(req) {
    const url = new URL(req.url);
    const publicPath = join(publicDir, url.pathname);
    const publicFile = file(publicPath);

    if (await publicFile.exists()) {
      return new Response(publicFile);
    }

    return new Response(file(join(import.meta.dir, "index.html")), {
      headers: { "Content-Type": "text/html" },
    });
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`epic hacking going on at ${server.url}`);
