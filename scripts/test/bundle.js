var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// plugin-web:https://ga.jspm.io/npm:is-buffer@1.1.6/index.js
var f = {};
f = /* @__PURE__ */ __name(function(f4) {
  return null != f4 && (isBuffer(f4) || isSlowBuffer(f4) || !!f4._isBuffer);
}, "f");
function isBuffer(f4) {
  return !!f4.constructor && "function" === typeof f4.constructor.isBuffer && f4.constructor.isBuffer(f4);
}
__name(isBuffer, "isBuffer");
function isSlowBuffer(f4) {
  return "function" === typeof f4.readFloatLE && "function" === typeof f4.slice && isBuffer(f4.slice(0, 0));
}
__name(isSlowBuffer, "isSlowBuffer");
var r = f;
var npm_is_buffer_1_1_default = r;

// plugin-web:https://ga.jspm.io/npm:kind-of@3.2.2/index.js
var t = {};
var e = npm_is_buffer_1_1_default;
var a = Object.prototype.toString;
t = /* @__PURE__ */ __name(function kindOf(r4) {
  if ("undefined" === typeof r4)
    return "undefined";
  if (null === r4)
    return "null";
  if (true === r4 || false === r4 || r4 instanceof Boolean)
    return "boolean";
  if ("string" === typeof r4 || r4 instanceof String)
    return "string";
  if ("number" === typeof r4 || r4 instanceof Number)
    return "number";
  if ("function" === typeof r4 || r4 instanceof Function)
    return "function";
  if ("undefined" !== typeof Array.isArray && Array.isArray(r4))
    return "array";
  if (r4 instanceof RegExp)
    return "regexp";
  if (r4 instanceof Date)
    return "date";
  var t6 = a.call(r4);
  return "[object RegExp]" === t6 ? "regexp" : "[object Date]" === t6 ? "date" : "[object Arguments]" === t6 ? "arguments" : "[object Error]" === t6 ? "error" : e(r4) ? "buffer" : "[object Set]" === t6 ? "set" : "[object WeakSet]" === t6 ? "weakset" : "[object Map]" === t6 ? "map" : "[object WeakMap]" === t6 ? "weakmap" : "[object Symbol]" === t6 ? "symbol" : "[object Int8Array]" === t6 ? "int8array" : "[object Uint8Array]" === t6 ? "uint8array" : "[object Uint8ClampedArray]" === t6 ? "uint8clampedarray" : "[object Int16Array]" === t6 ? "int16array" : "[object Uint16Array]" === t6 ? "uint16array" : "[object Int32Array]" === t6 ? "int32array" : "[object Uint32Array]" === t6 ? "uint32array" : "[object Float32Array]" === t6 ? "float32array" : "[object Float64Array]" === t6 ? "float64array" : "object";
}, "kindOf");
var n = t;
var npm_kind_of_3_2_default = n;

// plugin-web:https://ga.jspm.io/npm:is-number@3.0.0/index.js
var e2 = {};
var f2 = npm_kind_of_3_2_default;
e2 = /* @__PURE__ */ __name(function isNumber(r4) {
  var e4 = f2(r4);
  if ("string" === e4) {
    if (!r4.trim())
      return false;
  } else if ("number" !== e4)
    return false;
  return r4 - r4 + 1 >= 0;
}, "isNumber");
var i = e2;
var npm_is_number_3_0_default = i;

// plugin-web:https://ga.jspm.io/npm:is-odd@0.1.2/index.js
var e3 = {};
var o = npm_is_number_3_0_default;
e3 = /* @__PURE__ */ __name(function isOdd(r4) {
  if (!o(r4))
    throw new TypeError("is-odd expects a number.");
  if (Number(r4) !== Math.floor(r4))
    throw new RangeError("is-odd expects an integer.");
  return !!(1 & ~~r4);
}, "isOdd");
var t2 = e3;
var npm_is_odd_0_1_default = t2;

// plugin-web:https://ga.jspm.io/npm:is-even@1.0.0/index.js
var o2 = {};
var t3 = npm_is_odd_0_1_default;
o2 = /* @__PURE__ */ __name(function isEven(r4) {
  return !t3(r4);
}, "isEven");
var a2 = o2;
var npm_is_even_1_0_default = a2;

// plugin-web:https://ga.jspm.io/npm:is-number@6.0.0/index.js
var r2 = {};
r2 = /* @__PURE__ */ __name(function isNumber2(r4) {
  var t6 = +r4;
  return t6 - t6 === 0 && (t6 === r4 || "string" === typeof r4 && (0 !== t6 || "" !== r4.trim()));
}, "isNumber");
var t4 = r2;
var npm_is_number_6_0_default = t4;

// plugin-web:https://ga.jspm.io/npm:is-odd@3.0.1/index.js
var r3 = {};
var t5 = npm_is_number_6_0_default;
r3 = /* @__PURE__ */ __name(function isOdd2(e4) {
  const r4 = Math.abs(e4);
  if (!t5(r4))
    throw new TypeError("expected a number");
  if (!Number.isInteger(r4))
    throw new Error("expected an integer");
  if (!Number.isSafeInteger(r4))
    throw new Error("value exceeds maximum safe integer");
  return r4 % 2 === 1;
}, "isOdd");
var n2 = r3;
var npm_is_odd_3_0_default = n2;

// plugin-web:file:///C:/dev/esbuild-web/scripts/test/local.ts
function sum(a4, b) {
  return a4 + b;
}
__name(sum, "sum");

// plugin-web:https://deno.land/std/path/_os.ts
var osType = (() => {
  const { Deno } = globalThis;
  if (typeof Deno?.build?.os === "string") {
    return Deno.build.os;
  }
  const { navigator } = globalThis;
  if (navigator?.appVersion?.includes?.("Win")) {
    return "windows";
  }
  return "linux";
})();
var isWindows = osType === "windows";

// plugin-web:https://deno.land/std/path/_common/assert_path.ts
function assertPath(path) {
  if (typeof path !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path)}`
    );
  }
}
__name(assertPath, "assertPath");

// plugin-web:https://deno.land/std/path/_common/constants.ts
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;

// plugin-web:https://deno.land/std/path/windows/_util.ts
function isPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
}
__name(isPathSeparator, "isPathSeparator");
function isWindowsDeviceRoot(code) {
  return code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z || code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z;
}
__name(isWindowsDeviceRoot, "isWindowsDeviceRoot");

// plugin-web:https://deno.land/std/assert/assertion_error.ts
var AssertionError = class extends Error {
  static {
    __name(this, "AssertionError");
  }
  name = "AssertionError";
  constructor(message) {
    super(message);
  }
};

// plugin-web:https://deno.land/std/assert/assert.ts
function assert(expr, msg = "") {
  if (!expr) {
    throw new AssertionError(msg);
  }
}
__name(assert, "assert");

// plugin-web:https://deno.land/std/path/_common/normalize.ts
function assertArg4(path) {
  assertPath(path);
  if (path.length === 0)
    return ".";
}
__name(assertArg4, "assertArg");

// plugin-web:https://deno.land/std/path/_common/normalize_string.ts
function normalizeString(path, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i3 = 0, len = path.length; i3 <= len; ++i3) {
    if (i3 < len)
      code = path.charCodeAt(i3);
    else if (isPathSeparator2(code))
      break;
    else
      code = CHAR_FORWARD_SLASH;
    if (isPathSeparator2(code)) {
      if (lastSlash === i3 - 1 || dots === 1) {
      } else if (lastSlash !== i3 - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== CHAR_DOT || res.charCodeAt(res.length - 2) !== CHAR_DOT) {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf(separator);
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf(separator);
            }
            lastSlash = i3;
            dots = 0;
            continue;
          } else if (res.length === 2 || res.length === 1) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = i3;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += `${separator}..`;
          else
            res = "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += separator + path.slice(lastSlash + 1, i3);
        else
          res = path.slice(lastSlash + 1, i3);
        lastSegmentLength = i3 - lastSlash - 1;
      }
      lastSlash = i3;
      dots = 0;
    } else if (code === CHAR_DOT && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
__name(normalizeString, "normalizeString");

// plugin-web:https://deno.land/std/path/windows/normalize.ts
function normalize(path) {
  assertArg4(path);
  const len = path.length;
  let rootEnd = 0;
  let device;
  let isAbsolute3 = false;
  const code = path.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute3 = true;
      if (isPathSeparator(path.charCodeAt(1))) {
        let j2 = 2;
        let last = j2;
        for (; j2 < len; ++j2) {
          if (isPathSeparator(path.charCodeAt(j2)))
            break;
        }
        if (j2 < len && j2 !== last) {
          const firstPart = path.slice(last, j2);
          last = j2;
          for (; j2 < len; ++j2) {
            if (!isPathSeparator(path.charCodeAt(j2)))
              break;
          }
          if (j2 < len && j2 !== last) {
            last = j2;
            for (; j2 < len; ++j2) {
              if (isPathSeparator(path.charCodeAt(j2)))
                break;
            }
            if (j2 === len) {
              return `\\\\${firstPart}\\${path.slice(last)}\\`;
            } else if (j2 !== last) {
              device = `\\\\${firstPart}\\${path.slice(last, j2)}`;
              rootEnd = j2;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path.charCodeAt(1) === CHAR_COLON) {
        device = path.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path.charCodeAt(2))) {
            isAbsolute3 = true;
            rootEnd = 3;
          }
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return "\\";
  }
  let tail;
  if (rootEnd < len) {
    tail = normalizeString(
      path.slice(rootEnd),
      !isAbsolute3,
      "\\",
      isPathSeparator
    );
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute3)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute3) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    } else if (tail.length > 0) {
      return tail;
    } else {
      return "";
    }
  } else if (isAbsolute3) {
    if (tail.length > 0)
      return `${device}\\${tail}`;
    else
      return `${device}\\`;
  } else if (tail.length > 0) {
    return device + tail;
  } else {
    return device;
  }
}
__name(normalize, "normalize");

// plugin-web:https://deno.land/std/path/windows/join.ts
function join(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i3 = 0; i3 < paths.length; ++i3) {
    const path = paths[i3];
    assertPath(path);
    if (path.length > 0) {
      if (joined === void 0)
        joined = firstPart = path;
      else
        joined += `\\${path}`;
    }
  }
  if (joined === void 0)
    return ".";
  let needsReplace = true;
  let slashCount = 0;
  assert(firstPart !== null);
  if (isPathSeparator(firstPart.charCodeAt(0))) {
    ++slashCount;
    const firstLen = firstPart.length;
    if (firstLen > 1) {
      if (isPathSeparator(firstPart.charCodeAt(1))) {
        ++slashCount;
        if (firstLen > 2) {
          if (isPathSeparator(firstPart.charCodeAt(2)))
            ++slashCount;
          else {
            needsReplace = false;
          }
        }
      }
    }
  }
  if (needsReplace) {
    for (; slashCount < joined.length; ++slashCount) {
      if (!isPathSeparator(joined.charCodeAt(slashCount)))
        break;
    }
    if (slashCount >= 2)
      joined = `\\${joined.slice(slashCount)}`;
  }
  return normalize(joined);
}
__name(join, "join");

// plugin-web:https://deno.land/std/path/posix/_util.ts
function isPosixPathSeparator2(code) {
  return code === CHAR_FORWARD_SLASH;
}
__name(isPosixPathSeparator2, "isPosixPathSeparator");

// plugin-web:https://deno.land/std/path/posix/normalize.ts
function normalize2(path) {
  assertArg4(path);
  const isAbsolute3 = isPosixPathSeparator2(path.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator2(
    path.charCodeAt(path.length - 1)
  );
  path = normalizeString(path, !isAbsolute3, "/", isPosixPathSeparator2);
  if (path.length === 0 && !isAbsolute3)
    path = ".";
  if (path.length > 0 && trailingSeparator)
    path += "/";
  if (isAbsolute3)
    return `/${path}`;
  return path;
}
__name(normalize2, "normalize");

// plugin-web:https://deno.land/std/path/posix/join.ts
function join2(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i3 = 0, len = paths.length; i3 < len; ++i3) {
    const path = paths[i3];
    assertPath(path);
    if (path.length > 0) {
      if (!joined)
        joined = path;
      else
        joined += `/${path}`;
    }
  }
  if (!joined)
    return ".";
  return normalize2(joined);
}
__name(join2, "join");

// plugin-web:https://deno.land/std/path/join.ts
function join3(...paths) {
  return isWindows ? join(...paths) : join2(...paths);
}
__name(join3, "join");

// plugin-web:https://esm.sh/v133/snakecase@1.0.0/denonext/snakecase.mjs
var m = Object.create;
var a3 = Object.defineProperty;
var d = Object.getOwnPropertyDescriptor;
var N = Object.getOwnPropertyNames;
var R = Object.getPrototypeOf;
var S = Object.prototype.hasOwnProperty;
var U = /* @__PURE__ */ __name((e4, r4) => () => (r4 || e4((r4 = { exports: {} }).exports, r4), r4.exports), "U");
var x = /* @__PURE__ */ __name((e4, r4) => {
  for (var t6 in r4)
    a3(e4, t6, { get: r4[t6], enumerable: true });
}, "x");
var p = /* @__PURE__ */ __name((e4, r4, t6, c) => {
  if (r4 && typeof r4 == "object" || typeof r4 == "function")
    for (let o3 of N(r4))
      !S.call(e4, o3) && o3 !== t6 && a3(e4, o3, { get: () => r4[o3], enumerable: !(c = d(r4, o3)) || c.enumerable });
  return e4;
}, "p");
var s = /* @__PURE__ */ __name((e4, r4, t6) => (p(e4, r4, "default"), t6 && p(t6, r4, "default")), "s");
var i2 = /* @__PURE__ */ __name((e4, r4, t6) => (t6 = e4 != null ? m(R(e4)) : {}, p(r4 || !e4 || !e4.__esModule ? a3(t6, "default", { value: e4, enumerable: true }) : t6, e4)), "i");
var f3 = U((T, u) => {
  "use strict";
  var A = /[^\p{L}\p{N}]+/ug, C = /([\p{Lu}]+[\p{Ll}\p{N}]*|[\p{Ll}\p{N}]+)/gu, P = /([\p{Lu}]{2,}(?![\p{Ll}\p{N}])|[\p{Lu}]+[\p{Ll}\p{N}]*|[\p{Ll}\p{N}]+)/gu, y = /([\p{Lu}]{2,}|[\p{Lu}][\p{Ll}]*|[\p{Ll}\p{N}]+)/gu, l = /* @__PURE__ */ __name((e4) => e4 == null ? "" : Array.isArray(e4) ? e4.map((r4) => l(r4)).filter((r4) => r4.length).join(" ") : typeof e4 == "function" ? e4.name || "" : typeof e4.toString != "function" ? "" : e4.toString().trim(), "l"), h = /* @__PURE__ */ __name((e4, r4 = {}) => {
    let t6 = r4.preserveConsecutiveUppercase ? y : r4.lazyUppercase !== false ? P : C, c = l(e4), L = (e4 ? (c.match(t6) || []).filter(Boolean) : []).filter(Boolean);
    return L.length === 0 && e4.length > 0 ? [e4.replace(A, "")] : L;
  }, "h"), w = /* @__PURE__ */ __name((e4, r4, t6 = "", c = (o3) => o3) => e4 ? h(l(e4), r4).map(c).join(t6) : "", "w"), k = /* @__PURE__ */ __name((e4 = "", r4) => e4.toLocaleLowerCase(r4?.locale), "k"), E = /* @__PURE__ */ __name((e4 = "", r4) => {
    let t6 = k(w(e4, r4, "_"), r4);
    return r4?.uppercase ? t6.toLocaleUpperCase(r4?.locale) : t6;
  }, "E");
  u.exports = E;
  u.exports.snakecase = E;
});
var n3 = {};
x(n3, { default: () => j, snakecase: () => G });
var _ = i2(f3());
s(n3, i2(f3()));
var { snakecase: G } = _;
var { default: g, ...X } = _;
var j = g !== void 0 ? g : X;

// scripts/test/folder/folder.ts
var folder = "folder";

// scripts/test/main.ts
var main_default = {
  isEven: npm_is_even_1_0_default,
  isOdd: npm_is_odd_3_0_default,
  sum,
  join: join3,
  snakecase: j,
  folder
};
export {
  main_default as default
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/*! Bundled license information:

snakecase/index.js:
  (*!
   * snakecase <https://github.com/jonschlinkert/snakecase>
   * Copyright (c) Jon Schlinkert
   * Released under the MIT License.
   *)
*/
