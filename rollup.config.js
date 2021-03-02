import sass from "rollup-plugin-sass";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "src/component/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      exports: "named",
      strict: false,
    },
  ],
  plugins: [
    sass({ insert: true }),
    typescript({ objectHashIgnoreUnknownHack: false }),
  ],
  external: ["react/jsx-runtime", "prop-types"],
};
