import { FastifyInstance } from "fastify";
import { COMPLEX_DATA, SIMPLE_DATA } from "../../../constants/index.js";

const simpleBenchRequest = (tries: number): { data: string } => {
  console.log(tries);
  if (tries === 0) {
    return { data: SIMPLE_DATA };
  }

  return simpleBenchRequest(--tries);
};

const complexBenchRequest = (tries: number): { data: any } => {
  console.log(tries);
  if (tries === 0) {
    return { data: COMPLEX_DATA };
  }

  return simpleBenchRequest(--tries);
};

export default async function (fastify: FastifyInstance, opts: any) {
  fastify.get("/bench/simple/:tries", async (request, reply) => {
    const tries = Number.parseInt((request.params as any).tries as string);

    return simpleBenchRequest(tries as number);
  });

  fastify.get("/bench/complex/:tries", async (request, reply) => {
    const tries = Number.parseInt((request.params as any).tries as string);

    return complexBenchRequest(tries as number);
  });
}
