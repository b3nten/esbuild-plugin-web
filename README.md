# esbuild-plugin-web

An Esbuild plugin that supports web features such as URL imports, import maps, and npm: specifiers.

## Scripts

### Dev
Run entry file (mod.ts).
```
deno task dev
```

### Test
Run test suite.
```
deno task test
```
### NPM
Ensure the NPM configuration is correct in `scripts/build.ts`.
```
deno task npm 0.0.1
```
### Build
Build mod.ts as a minified js file.
```
deno task build
```