import autoload from "@fastify/autoload";
import { join } from "desm";
import { FastifyInstance } from "fastify";
import routes from "./connect.js";
import { fastifyConnectPlugin } from "@connectrpc/connect-fastify";

export default async function grpc(app: FastifyInstance, opts: any) {
  /**
   * REST
   */
  await app.register(autoload, {
    dir: join(import.meta.url, "routes"),
    options: {
      prefix: opts.prefix,
    },
  });

  /**
   * gRPC
   */
  await app.register(fastifyConnectPlugin, {
    routes,
    prefix: opts.prefix,
  });
}
