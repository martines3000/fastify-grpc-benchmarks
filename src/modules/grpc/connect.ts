import { ConnectRouter, createPromiseClient } from "@connectrpc/connect";

import { createGrpcTransport } from "@connectrpc/connect-node";
import { COMPLEX_DATA, PORT, SIMPLE_DATA } from "../../constants/index.js";
import {
  ComplexResponse,
  SimpleResponse,
} from "@buf/martines3000_example-test.bufbuild_es/martines3000/bench/v1/bench_pb.js";

import { BenchService } from "@buf/martines3000_example-test.connectrpc_es/martines3000/bench/v1/bench_connect.js";

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
        return new SimpleResponse({ data: SIMPLE_DATA });
      }

      return await client.simple({ tries: (--parsedTries).toString() });
    },
    complex: async ({ tries }) => {
      let parsedTries = Number.parseInt(tries);

      if (parsedTries === 0) {
        return new ComplexResponse(COMPLEX_DATA);
      }

      return await client.complex({ tries: (--parsedTries).toString() });
    },
  });
};
