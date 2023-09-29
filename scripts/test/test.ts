import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import plugin from "../../mod.ts";
import esbuild from "npm:esbuild";
import slash from "https://deno.land/x/slash@v0.3.0/mod.ts";

const importMap = {
  "imports": {
    "is-even": "https://ga.jspm.io/npm:is-even@1.0.0/index.js",
    "is-odd": "https://ga.jspm.io/npm:is-odd@3.0.1/index.js",
    "path": "https://deno.land/std/path/mod.ts",
    "local": "./scripts/test/local.ts",
  },
  "scopes": {
    "https://ga.jspm.io/": {
      "is-buffer": "https://ga.jspm.io/npm:is-buffer@1.1.6/index.js",
      "is-number": "https://ga.jspm.io/npm:is-number@6.0.0/index.js",
      "is-odd": "https://ga.jspm.io/npm:is-odd@0.1.2/index.js",
      "kind-of": "https://ga.jspm.io/npm:kind-of@3.2.2/index.js",
    },
    "https://ga.jspm.io/npm:is-odd@0.1.2/": {
      "is-number": "https://ga.jspm.io/npm:is-number@3.0.0/index.js",
    },
  },
};

await esbuild.build({
  entryPoints: ["./scripts/test/main.ts"],
  outfile: "./scripts/test/bundle.js",
  bundle: true,
  format: "esm",
  target: "esnext",
  keepNames: true,
  plugins: [
    plugin({ importMap }),
  ],
});

const imp = await import("./bundle.js");

assertEquals(imp.default.isEven(2), true)
assertEquals(imp.default.isEven(3), false)
assertEquals(imp.default.isOdd(2), false)
assertEquals(imp.default.isOdd(3), true)

assertEquals(slash(imp.default.join("a", "b")), "a/b")
assertEquals(imp.default.sum(1, 2), 3)

assertEquals(imp.default.snakecase("aCamelCasedVariable"), "a_camel_cased_variable")

