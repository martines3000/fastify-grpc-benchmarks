import { ConnectRouter, createPromiseClient } from "@connectrpc/connect";

import { createConnectTransport } from "@connectrpc/connect-node";
import { BenchService } from "../../gen/bench_connect.js";
import { COMPLEX_DATA, SIMPLE_DATA } from "../../constants/index.js";
import { ComplexBenchResponse } from "../../gen/bench_pb.js";

export default (router: ConnectRouter) => {
  const transport = createConnectTransport({
    baseUrl: "https://localhost:3000/grpc",
    httpVersion: "1.1",
  });

  const client = createPromiseClient(BenchService, transport);

  router.service(BenchService, {
    simple: async ({ tries }) => {
      let parsedTries = Number.parseInt(tries);

      if (parsedTries === 0) {
        return { data: SIMPLE_DATA };
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
