import commonjs from "@rollup/plugin-commonjs";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

const packageJson = require("./package.json");

const buildDir = "lib";

export default [
  {
    input: "src/index.ts",
    // "output.dir": "dist",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        file: `${buildDir}/cjs/index.js`,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        file: `${buildDir}/esm/index.js`,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  //   {
  //     input: "dist/esm/types/index.d.ts",
  //     output: [
  //       { file: "dist/index.d.ts", format: "esm", file: "dist/types/index.d.ts" },
  //     ],
  //     plugins: [dts()],
  //   },
];
