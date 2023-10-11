import { readFileSync } from "node:fs";
import fastify from "fastify";
import autoload from "@fastify/autoload";
import { join } from "desm";

export async function build(opts = {}) {
  const app = fastify({
    http2: true,
    https: {
      allowHTTP1: true,
      key: readFileSync("localhost+2-key.pem", "utf8"),
      cert: readFileSync("localhost+2.pem", "utf8"),
    },

    keepAliveTimeout: 60000,
  });

  app.register(autoload, {
    dir: join(import.meta.url, "modules"),
    encapsulate: false,
    maxDepth: 1,
  });

  return app;
}
