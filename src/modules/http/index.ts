import autoload from "@fastify/autoload";
import { join } from "desm";
import { FastifyInstance } from "fastify";

export default async function http(app: FastifyInstance, opts: any) {
  await app.register(autoload, {
    dir: join(import.meta.url, "routes"),
    options: {
      prefix: opts.prefix,
    },
  });
}
