import type {
  OnLoadArgs,
  OnLoadResult,
  OnResolveArgs,
  Plugin,
} from "npm:esbuild";
import {
  type ImportMap,
  resolveImportMap,
  resolveModuleSpecifier,
} from "https://deno.land/x/importmap/mod.ts";
import slash from "https://deno.land/x/slash/mod.ts";
import * as path from "https://deno.land/std/path/mod.ts";
import aLog from "https://deno.land/x/alog@0.1.1/mod.ts";

const NAME_SPACE = "plugin-web";

type Config = {
  importMap?: ImportMap | string;
  logLevel?: "debug" | "normal";
};

export default function webPlugin(config: Config = {}): Plugin {
  const log = config.logLevel === "debug"
    ? new aLog("ESBUILD-WEB", aLog.LevelDebug)
    : new aLog("ESBUILD-WEB");

  const base = path.toFileUrl(slash(Deno.cwd() + "/"));
  log.debug("base:", base);

  let importMap: ImportMap | undefined;
  if (typeof config.importMap === "string") {
    const raw = Deno.readTextFileSync(config.importMap);
    const { imports, scopes } = JSON.parse(raw);
    importMap = resolveImportMap({ imports, scopes }, new URL(Deno.cwd()));
  } else if (typeof config.importMap === "object") {
    importMap = resolveImportMap({
      imports: config.importMap.imports,
      scopes: config.importMap.scopes,
    }, base);
  }
  log.debug("importMap:", importMap);

  const cache = new Map<string, string>();

  return {
    name: NAME_SPACE,
    setup(build) {
      log.info("Starting build...");
      const t = performance.now();
      build.onEnd(() => {
        log.info(`Build finished in ${(performance.now() - t).toFixed(2)}ms`);
      });

      build.onResolve(
        { filter: /^npm:/ },
        ({ path }: OnResolveArgs) => {
          log.debug("npm:", path);
          return {
            path: `https://esm.sh/${path.replace("npm:", "")}`,
            namespace: NAME_SPACE,
          };
        },
      );
      importMap && build.onResolve(
        { filter: /.*/ },
        (args: OnResolveArgs) => {
          try {
            // base should either be working directory or the url of the importer.
            const b = args.importer.startsWith("http") ? new URL(args.importer) : new URL(path.join(path.dirname(args.importer), args.path));
            const potentialResolve = resolveModuleSpecifier(
              args.path,
              importMap!,
              b,
            );
            log.debug("import map used:", potentialResolve);
            return {
              path: potentialResolve,
              namespace: NAME_SPACE,
            };
          } catch {
            //
          }
        },
      );
      build.onResolve(
        { filter: /^https:\/\// },
        ({ path }: OnResolveArgs) => ({ path, namespace: NAME_SPACE }),
      );
      build.onResolve(
        { filter: /^http:\/\// },
        ({ path }: OnResolveArgs) => ({ path, namespace: NAME_SPACE }),
      );
      build.onResolve(
        { filter: /.*/, namespace: NAME_SPACE },
        ({ path, importer, namespace }: OnResolveArgs) => {
          console.log("PAAAATH", path)
          // Check if the path is not from the same namespace or if it's not a relative or absolute path
          if (namespace !== NAME_SPACE || (path[0] !== "/" && path[0] !== ".")) {
            if (importMap) {
              const potentialResolve = resolveModuleSpecifier(
                path,
                importMap!,
                new URL(Deno.cwd()),
              );
              if (potentialResolve) {
                log.debug("import map used:", potentialResolve);
                return {
                  path: potentialResolve,
                  namespace: NAME_SPACE,
                };
              }
            }
            return;
          }
      
          // Resolve the relative path
          const newPath = path[0] === '.' ? new URL(path, new URL(importer, 'file://')).pathname : path;
      
          log.debug("resolved path:", newPath);
      
          return {
            path: newPath,
            namespace: NAME_SPACE,
          };
        },
      );

      build.onLoad(
        { filter: /.*/, namespace: NAME_SPACE },
        async ({ path }: OnLoadArgs): Promise<OnLoadResult> => {
          if (cache.has(path)) {
            log.debug("cache hit:", path);
            return { contents: cache.get(path) };
          }
          log.debug("fetching:", path);
          const res = await fetch(path);
          log.debug("fetched:", path);
          const contents = await res.text();
          cache.set(path, contents);
          log.debug("cached:", path);
          log.info("loaded", path)
          return { contents, loader: "tsx" };
        },
      );
    },
  };
}
