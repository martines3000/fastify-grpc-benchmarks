import { createPromiseClient } from "@connectrpc/connect";
import { createGrpcTransport } from "@connectrpc/connect-node";
import { FastifyInstance } from "fastify";
import { COMPLEX_DATA, PORT, SIMPLE_DATA } from "../../../constants/index.js";
import { BenchService } from "@buf/martines3000_example-test.connectrpc_es/martines3000/bench/v1/bench_connect.js";

export default async function (fastify: FastifyInstance, opts: any) {
  const transport = createGrpcTransport({
    baseUrl: `https://localhost:${PORT}/grpc`,
    httpVersion: "2",
  });

  const client = createPromiseClient(BenchService, transport);

  fastify.get("/bench/simple/:tries", async (request, reply) => {
    let tries = Number.parseInt((request.params as any).tries as string);

    if (tries === 0) {
      return { data: SIMPLE_DATA };
    }

    const grpcResponse = await client.simple({
      tries: (--tries).toString(),
    });

    return grpcResponse.toJson();
  });

  fastify.get("/bench/complex/:tries", async (request, reply) => {
    let tries = Number.parseInt((request.params as any).tries as string);

    if (tries === 0) {
      return { data: COMPLEX_DATA };
    }

    const grpcResponse = await client.complex({
      tries: (--tries).toString(),
    });

    return grpcResponse.toJson();
  });
}
