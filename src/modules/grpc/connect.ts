import { ConnectRouter, createPromiseClient } from "@connectrpc/connect";

import { createGrpcTransport } from "@connectrpc/connect-node";
import { BenchService } from "../../gen/bench_connect.js";
import { COMPLEX_DATA, PORT, SIMPLE_DATA } from "../../constants/index.js";
import {
  ComplexBenchResponse,
  SimpleBenchResponse,
} from "../../gen/bench_pb.js";

export default (router: ConnectRouter) => {
  const transport = createGrpcTransport({
    baseUrl: `https://localhost:${PORT}/grpc`,
    httpVersion: "2",
  });

  const client = createPromiseClient(BenchService, transport);

  router.service(BenchService, {
    simple: async ({ tries }) => {
      let parsedTries = Number.parseInt(tries);

      if (parsedTries === 0) {
        return new SimpleBenchResponse({ data: SIMPLE_DATA });
      }

      return await client.simple({ tries: (--parsedTries).toString() });
    },
    complex: async ({ tries }) => {
      let parsedTries = Number.parseInt(tries);

      if (parsedTries === 0) {
        return new ComplexBenchResponse(COMPLEX_DATA);
      }

      return await client.complex({ tries: (--parsedTries).toString() });
    },
  });
};
