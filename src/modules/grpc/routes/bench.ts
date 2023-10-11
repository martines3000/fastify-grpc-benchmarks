import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";
import { FastifyInstance } from "fastify";
import { BenchService } from "../../../gen/bench_connect.js";

export default async function (fastify: FastifyInstance, opts: any) {
  const transport = createConnectTransport({
    baseUrl: "https://localhost:3000/grpc",
    httpVersion: "2",
  });

  const client = createPromiseClient(BenchService, transport);

  fastify.get("/bench/simple/:tries", async (request, reply) => {
    const grpcResponse = await client.simple({
      tries: (request.params as any).tries as string,
    });

    return grpcResponse.toJson();
  });

  fastify.get("/bench/complex/:tries", async (request, reply) => {
    const grpcResponse = await client.complex({
      tries: (request.params as any).tries as string,
    });

    return grpcResponse.toJson();
  });
}
