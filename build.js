import { build } from "esbuild";

console.log("Building monolith...");

await build({
  entryPoints: ["src/**/*.ts"],
  outdir: "dist",
  bundle: false,
  platform: "node",
  format: "esm",
  target: "es2022",
  tsconfig: "tsconfig.json",
});

console.log("Finished building monolith...");
