import { FastifyInstance } from "fastify";

import { fetch } from "undici";
import { COMPLEX_DATA, PORT, SIMPLE_DATA } from "../../../constants/index.js";

export default async function (fastify: FastifyInstance, opts: any) {
  fastify.get("/bench/simple/:tries", async (request, reply) => {
    let tries = Number.parseInt((request.params as any).tries as string);

    if (tries === 0) {
      return { data: SIMPLE_DATA };
    }

    const response = await fetch(
      `https://localhost:${PORT}/http/bench/simple/${--tries}`,
      {
        method: "GET",
      }
    );

    return await response.json();
  });

  fastify.get("/bench/complex/:tries", async (request, reply) => {
    let tries = Number.parseInt((request.params as any).tries as string);

    if (tries === 0) {
      return { data: COMPLEX_DATA };
    }

    const response = await fetch(
      `https://localhost:${PORT}/http/bench/complex/${--tries}`,
      {
        method: "GET",
      }
    );

    return await response.json();
  });
}
