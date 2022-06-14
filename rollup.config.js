import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

const sharedOutputConfig = {
  sourcemap: true,
};

export default [
  {
    input: "src/index.ts",
    external: Object.keys(packageJson.peerDependencies),
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        ...sharedOutputConfig,
      },
      {
        file: packageJson.module,
        format: "esm",
        ...sharedOutputConfig,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: Object.keys(packageJson.peerDependencies),
  },
];
