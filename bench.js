import { execa } from "execa";

const examples = ["http", "grpc"];

const exampleTypes = ["simple"];

const internalCallCounts = [2];

const bench = async () => {
  for (const internalCallCount of internalCallCounts) {
    for (const example of examples) {
      for (const exampleType of exampleTypes) {
        console.log(
          `\n\nRunning ${example} ${exampleType} ${internalCallCount}`
        );

        const { stdout } = await execa(
          `bombardier -l -t 2s -r 200 --http2 -c 100 -d 20s https://localhost:3000/${example}/bench/${exampleType}/${internalCallCount}`,
          {
            shell: true,
          }
        );

        console.log(stdout);
      }
    }
  }
};

bench().catch((err) => {
  console.error(err);
  process.exit(1);
});
