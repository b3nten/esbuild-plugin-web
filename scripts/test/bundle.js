var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

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

// plugin-web:https://deno.land/std/path/win32.ts
var win32_exports = {};
__export(win32_exports, {
  basename: () => windowsBasename,
  delimiter: () => delimiter,
  dirname: () => windowsDirname,
  extname: () => windowsExtname,
  format: () => windowsFormat,
  fromFileUrl: () => windowsFromFileUrl,
  isAbsolute: () => windowsIsAbsolute,
  join: () => windowsJoin,
  normalize: () => windowsNormalize,
  parse: () => windowsParse,
  relative: () => windowsRelative,
  resolve: () => windowsResolve,
  sep: () => sep,
  toFileUrl: () => windowsToFileUrl,
  toNamespacedPath: () => windowsToNamespacedPath
});

// plugin-web:https://deno.land/std/path/_constants.ts
var CHAR_UPPERCASE_A = 65;
var CHAR_LOWERCASE_A = 97;
var CHAR_UPPERCASE_Z = 90;
var CHAR_LOWERCASE_Z = 122;
var CHAR_DOT = 46;
var CHAR_FORWARD_SLASH = 47;
var CHAR_BACKWARD_SLASH = 92;
var CHAR_COLON = 58;
var CHAR_QUESTION_MARK = 63;

// plugin-web:https://deno.land/std/path/_util.ts
function assertPath(path2) {
  if (typeof path2 !== "string") {
    throw new TypeError(
      `Path must be a string. Received ${JSON.stringify(path2)}`
    );
  }
}
__name(assertPath, "assertPath");
function isPosixPathSeparator(code) {
  return code === CHAR_FORWARD_SLASH;
}
__name(isPosixPathSeparator, "isPosixPathSeparator");
function isPathSeparator(code) {
  return isPosixPathSeparator(code) || code === CHAR_BACKWARD_SLASH;
}
__name(isPathSeparator, "isPathSeparator");
function isWindowsDeviceRoot(code) {
  return code >= CHAR_LOWERCASE_A && code <= CHAR_LOWERCASE_Z || code >= CHAR_UPPERCASE_A && code <= CHAR_UPPERCASE_Z;
}
__name(isWindowsDeviceRoot, "isWindowsDeviceRoot");
function normalizeString(path2, allowAboveRoot, separator, isPathSeparator2) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let code;
  for (let i3 = 0, len = path2.length; i3 <= len; ++i3) {
    if (i3 < len)
      code = path2.charCodeAt(i3);
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
          res += separator + path2.slice(lastSlash + 1, i3);
        else
          res = path2.slice(lastSlash + 1, i3);
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
function stripTrailingSeparators(segment, isSep) {
  if (segment.length <= 1) {
    return segment;
  }
  let end = segment.length;
  for (let i3 = segment.length - 1; i3 > 0; i3--) {
    if (isSep(segment.charCodeAt(i3))) {
      end = i3;
    } else {
      break;
    }
  }
  return segment.slice(0, end);
}
__name(stripTrailingSeparators, "stripTrailingSeparators");

// plugin-web:https://deno.land/std/path/_resolve.ts
function posixResolve(...pathSegments) {
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let i3 = pathSegments.length - 1; i3 >= -1 && !resolvedAbsolute; i3--) {
    let path2;
    if (i3 >= 0)
      path2 = pathSegments[i3];
    else {
      const { Deno } = globalThis;
      if (typeof Deno?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path2 = Deno.cwd();
    }
    assertPath(path2);
    if (path2.length === 0) {
      continue;
    }
    resolvedPath = `${path2}/${resolvedPath}`;
    resolvedAbsolute = isPosixPathSeparator(path2.charCodeAt(0));
  }
  resolvedPath = normalizeString(
    resolvedPath,
    !resolvedAbsolute,
    "/",
    isPosixPathSeparator
  );
  if (resolvedAbsolute) {
    if (resolvedPath.length > 0)
      return `/${resolvedPath}`;
    else
      return "/";
  } else if (resolvedPath.length > 0)
    return resolvedPath;
  else
    return ".";
}
__name(posixResolve, "posixResolve");
function windowsResolve(...pathSegments) {
  let resolvedDevice = "";
  let resolvedTail = "";
  let resolvedAbsolute = false;
  for (let i3 = pathSegments.length - 1; i3 >= -1; i3--) {
    let path2;
    const { Deno } = globalThis;
    if (i3 >= 0) {
      path2 = pathSegments[i3];
    } else if (!resolvedDevice) {
      if (typeof Deno?.cwd !== "function") {
        throw new TypeError("Resolved a drive-letter-less path without a CWD.");
      }
      path2 = Deno.cwd();
    } else {
      if (typeof Deno?.env?.get !== "function" || typeof Deno?.cwd !== "function") {
        throw new TypeError("Resolved a relative path without a CWD.");
      }
      path2 = Deno.cwd();
      if (path2 === void 0 || path2.slice(0, 3).toLowerCase() !== `${resolvedDevice.toLowerCase()}\\`) {
        path2 = `${resolvedDevice}\\`;
      }
    }
    assertPath(path2);
    const len = path2.length;
    if (len === 0)
      continue;
    let rootEnd = 0;
    let device = "";
    let isAbsolute = false;
    const code = path2.charCodeAt(0);
    if (len > 1) {
      if (isPathSeparator(code)) {
        isAbsolute = true;
        if (isPathSeparator(path2.charCodeAt(1))) {
          let j2 = 2;
          let last = j2;
          for (; j2 < len; ++j2) {
            if (isPathSeparator(path2.charCodeAt(j2)))
              break;
          }
          if (j2 < len && j2 !== last) {
            const firstPart = path2.slice(last, j2);
            last = j2;
            for (; j2 < len; ++j2) {
              if (!isPathSeparator(path2.charCodeAt(j2)))
                break;
            }
            if (j2 < len && j2 !== last) {
              last = j2;
              for (; j2 < len; ++j2) {
                if (isPathSeparator(path2.charCodeAt(j2)))
                  break;
              }
              if (j2 === len) {
                device = `\\\\${firstPart}\\${path2.slice(last)}`;
                rootEnd = j2;
              } else if (j2 !== last) {
                device = `\\\\${firstPart}\\${path2.slice(last, j2)}`;
                rootEnd = j2;
              }
            }
          }
        } else {
          rootEnd = 1;
        }
      } else if (isWindowsDeviceRoot(code)) {
        if (path2.charCodeAt(1) === CHAR_COLON) {
          device = path2.slice(0, 2);
          rootEnd = 2;
          if (len > 2) {
            if (isPathSeparator(path2.charCodeAt(2))) {
              isAbsolute = true;
              rootEnd = 3;
            }
          }
        }
      }
    } else if (isPathSeparator(code)) {
      rootEnd = 1;
      isAbsolute = true;
    }
    if (device.length > 0 && resolvedDevice.length > 0 && device.toLowerCase() !== resolvedDevice.toLowerCase()) {
      continue;
    }
    if (resolvedDevice.length === 0 && device.length > 0) {
      resolvedDevice = device;
    }
    if (!resolvedAbsolute) {
      resolvedTail = `${path2.slice(rootEnd)}\\${resolvedTail}`;
      resolvedAbsolute = isAbsolute;
    }
    if (resolvedAbsolute && resolvedDevice.length > 0)
      break;
  }
  resolvedTail = normalizeString(
    resolvedTail,
    !resolvedAbsolute,
    "\\",
    isPathSeparator
  );
  return resolvedDevice + (resolvedAbsolute ? "\\" : "") + resolvedTail || ".";
}
__name(windowsResolve, "windowsResolve");

// plugin-web:https://deno.land/std/path/_normalize.ts
function assertArg(path2) {
  assertPath(path2);
  if (path2.length === 0)
    return ".";
}
__name(assertArg, "assertArg");
function posixNormalize(path2) {
  assertArg(path2);
  const isAbsolute = isPosixPathSeparator(path2.charCodeAt(0));
  const trailingSeparator = isPosixPathSeparator(
    path2.charCodeAt(path2.length - 1)
  );
  path2 = normalizeString(path2, !isAbsolute, "/", isPosixPathSeparator);
  if (path2.length === 0 && !isAbsolute)
    path2 = ".";
  if (path2.length > 0 && trailingSeparator)
    path2 += "/";
  if (isAbsolute)
    return `/${path2}`;
  return path2;
}
__name(posixNormalize, "posixNormalize");
function windowsNormalize(path2) {
  assertArg(path2);
  const len = path2.length;
  let rootEnd = 0;
  let device;
  let isAbsolute = false;
  const code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      isAbsolute = true;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j2 = 2;
        let last = j2;
        for (; j2 < len; ++j2) {
          if (isPathSeparator(path2.charCodeAt(j2)))
            break;
        }
        if (j2 < len && j2 !== last) {
          const firstPart = path2.slice(last, j2);
          last = j2;
          for (; j2 < len; ++j2) {
            if (!isPathSeparator(path2.charCodeAt(j2)))
              break;
          }
          if (j2 < len && j2 !== last) {
            last = j2;
            for (; j2 < len; ++j2) {
              if (isPathSeparator(path2.charCodeAt(j2)))
                break;
            }
            if (j2 === len) {
              return `\\\\${firstPart}\\${path2.slice(last)}\\`;
            } else if (j2 !== last) {
              device = `\\\\${firstPart}\\${path2.slice(last, j2)}`;
              rootEnd = j2;
            }
          }
        }
      } else {
        rootEnd = 1;
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === CHAR_COLON) {
        device = path2.slice(0, 2);
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2))) {
            isAbsolute = true;
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
      path2.slice(rootEnd),
      !isAbsolute,
      "\\",
      isPathSeparator
    );
  } else {
    tail = "";
  }
  if (tail.length === 0 && !isAbsolute)
    tail = ".";
  if (tail.length > 0 && isPathSeparator(path2.charCodeAt(len - 1))) {
    tail += "\\";
  }
  if (device === void 0) {
    if (isAbsolute) {
      if (tail.length > 0)
        return `\\${tail}`;
      else
        return "\\";
    } else if (tail.length > 0) {
      return tail;
    } else {
      return "";
    }
  } else if (isAbsolute) {
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
__name(windowsNormalize, "windowsNormalize");

// plugin-web:https://deno.land/std/path/_is_absolute.ts
function windowsIsAbsolute(path2) {
  assertPath(path2);
  const len = path2.length;
  if (len === 0)
    return false;
  const code = path2.charCodeAt(0);
  if (isPathSeparator(code)) {
    return true;
  } else if (isWindowsDeviceRoot(code)) {
    if (len > 2 && path2.charCodeAt(1) === CHAR_COLON) {
      if (isPathSeparator(path2.charCodeAt(2)))
        return true;
    }
  }
  return false;
}
__name(windowsIsAbsolute, "windowsIsAbsolute");
function posixIsAbsolute(path2) {
  assertPath(path2);
  return path2.length > 0 && isPosixPathSeparator(path2.charCodeAt(0));
}
__name(posixIsAbsolute, "posixIsAbsolute");

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

// plugin-web:https://deno.land/std/path/_join.ts
function posixJoin(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  for (let i3 = 0, len = paths.length; i3 < len; ++i3) {
    const path2 = paths[i3];
    assertPath(path2);
    if (path2.length > 0) {
      if (!joined)
        joined = path2;
      else
        joined += `/${path2}`;
    }
  }
  if (!joined)
    return ".";
  return posixNormalize(joined);
}
__name(posixJoin, "posixJoin");
function windowsJoin(...paths) {
  if (paths.length === 0)
    return ".";
  let joined;
  let firstPart = null;
  for (let i3 = 0; i3 < paths.length; ++i3) {
    const path2 = paths[i3];
    assertPath(path2);
    if (path2.length > 0) {
      if (joined === void 0)
        joined = firstPart = path2;
      else
        joined += `\\${path2}`;
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
  return windowsNormalize(joined);
}
__name(windowsJoin, "windowsJoin");

// plugin-web:https://deno.land/std/path/_relative.ts
function assertArgs(from, to) {
  assertPath(from);
  assertPath(to);
  if (from === to)
    return "";
}
__name(assertArgs, "assertArgs");
function posixRelative(from, to) {
  assertArgs(from, to);
  from = posixResolve(from);
  to = posixResolve(to);
  if (from === to)
    return "";
  let fromStart = 1;
  const fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (!isPosixPathSeparator(from.charCodeAt(fromStart)))
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 1;
  const toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (!isPosixPathSeparator(to.charCodeAt(toStart)))
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i3 = 0;
  for (; i3 <= length; ++i3) {
    if (i3 === length) {
      if (toLen > length) {
        if (isPosixPathSeparator(to.charCodeAt(toStart + i3))) {
          return to.slice(toStart + i3 + 1);
        } else if (i3 === 0) {
          return to.slice(toStart + i3);
        }
      } else if (fromLen > length) {
        if (isPosixPathSeparator(from.charCodeAt(fromStart + i3))) {
          lastCommonSep = i3;
        } else if (i3 === 0) {
          lastCommonSep = 0;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i3);
    const toCode = to.charCodeAt(toStart + i3);
    if (fromCode !== toCode)
      break;
    else if (isPosixPathSeparator(fromCode))
      lastCommonSep = i3;
  }
  let out = "";
  for (i3 = fromStart + lastCommonSep + 1; i3 <= fromEnd; ++i3) {
    if (i3 === fromEnd || isPosixPathSeparator(from.charCodeAt(i3))) {
      if (out.length === 0)
        out += "..";
      else
        out += "/..";
    }
  }
  if (out.length > 0)
    return out + to.slice(toStart + lastCommonSep);
  else {
    toStart += lastCommonSep;
    if (isPosixPathSeparator(to.charCodeAt(toStart)))
      ++toStart;
    return to.slice(toStart);
  }
}
__name(posixRelative, "posixRelative");
function windowsRelative(from, to) {
  assertArgs(from, to);
  const fromOrig = windowsResolve(from);
  const toOrig = windowsResolve(to);
  if (fromOrig === toOrig)
    return "";
  from = fromOrig.toLowerCase();
  to = toOrig.toLowerCase();
  if (from === to)
    return "";
  let fromStart = 0;
  let fromEnd = from.length;
  for (; fromStart < fromEnd; ++fromStart) {
    if (from.charCodeAt(fromStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; fromEnd - 1 > fromStart; --fromEnd) {
    if (from.charCodeAt(fromEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const fromLen = fromEnd - fromStart;
  let toStart = 0;
  let toEnd = to.length;
  for (; toStart < toEnd; ++toStart) {
    if (to.charCodeAt(toStart) !== CHAR_BACKWARD_SLASH)
      break;
  }
  for (; toEnd - 1 > toStart; --toEnd) {
    if (to.charCodeAt(toEnd - 1) !== CHAR_BACKWARD_SLASH)
      break;
  }
  const toLen = toEnd - toStart;
  const length = fromLen < toLen ? fromLen : toLen;
  let lastCommonSep = -1;
  let i3 = 0;
  for (; i3 <= length; ++i3) {
    if (i3 === length) {
      if (toLen > length) {
        if (to.charCodeAt(toStart + i3) === CHAR_BACKWARD_SLASH) {
          return toOrig.slice(toStart + i3 + 1);
        } else if (i3 === 2) {
          return toOrig.slice(toStart + i3);
        }
      }
      if (fromLen > length) {
        if (from.charCodeAt(fromStart + i3) === CHAR_BACKWARD_SLASH) {
          lastCommonSep = i3;
        } else if (i3 === 2) {
          lastCommonSep = 3;
        }
      }
      break;
    }
    const fromCode = from.charCodeAt(fromStart + i3);
    const toCode = to.charCodeAt(toStart + i3);
    if (fromCode !== toCode)
      break;
    else if (fromCode === CHAR_BACKWARD_SLASH)
      lastCommonSep = i3;
  }
  if (i3 !== length && lastCommonSep === -1) {
    return toOrig;
  }
  let out = "";
  if (lastCommonSep === -1)
    lastCommonSep = 0;
  for (i3 = fromStart + lastCommonSep + 1; i3 <= fromEnd; ++i3) {
    if (i3 === fromEnd || from.charCodeAt(i3) === CHAR_BACKWARD_SLASH) {
      if (out.length === 0)
        out += "..";
      else
        out += "\\..";
    }
  }
  if (out.length > 0) {
    return out + toOrig.slice(toStart + lastCommonSep, toEnd);
  } else {
    toStart += lastCommonSep;
    if (toOrig.charCodeAt(toStart) === CHAR_BACKWARD_SLASH)
      ++toStart;
    return toOrig.slice(toStart, toEnd);
  }
}
__name(windowsRelative, "windowsRelative");

// plugin-web:https://deno.land/std/path/_to_namespaced_path.ts
function posixToNamespacedPath(path2) {
  return path2;
}
__name(posixToNamespacedPath, "posixToNamespacedPath");
function windowsToNamespacedPath(path2) {
  if (typeof path2 !== "string")
    return path2;
  if (path2.length === 0)
    return "";
  const resolvedPath = windowsResolve(path2);
  if (resolvedPath.length >= 3) {
    if (resolvedPath.charCodeAt(0) === CHAR_BACKWARD_SLASH) {
      if (resolvedPath.charCodeAt(1) === CHAR_BACKWARD_SLASH) {
        const code = resolvedPath.charCodeAt(2);
        if (code !== CHAR_QUESTION_MARK && code !== CHAR_DOT) {
          return `\\\\?\\UNC\\${resolvedPath.slice(2)}`;
        }
      }
    } else if (isWindowsDeviceRoot(resolvedPath.charCodeAt(0))) {
      if (resolvedPath.charCodeAt(1) === CHAR_COLON && resolvedPath.charCodeAt(2) === CHAR_BACKWARD_SLASH) {
        return `\\\\?\\${resolvedPath}`;
      }
    }
  }
  return path2;
}
__name(windowsToNamespacedPath, "windowsToNamespacedPath");

// plugin-web:https://deno.land/std/path/_dirname.ts
function assertArg2(path2) {
  assertPath(path2);
  if (path2.length === 0)
    return ".";
}
__name(assertArg2, "assertArg");
function posixDirname(path2) {
  assertArg2(path2);
  let end = -1;
  let matchedNonSeparator = false;
  for (let i3 = path2.length - 1; i3 >= 1; --i3) {
    if (isPosixPathSeparator(path2.charCodeAt(i3))) {
      if (matchedNonSeparator) {
        end = i3;
        break;
      }
    } else {
      matchedNonSeparator = true;
    }
  }
  if (end === -1) {
    return isPosixPathSeparator(path2.charCodeAt(0)) ? "/" : ".";
  }
  return stripTrailingSeparators(
    path2.slice(0, end),
    isPosixPathSeparator
  );
}
__name(posixDirname, "posixDirname");
function windowsDirname(path2) {
  assertArg2(path2);
  const len = path2.length;
  let rootEnd = -1;
  let end = -1;
  let matchedSlash = true;
  let offset = 0;
  const code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = offset = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j2 = 2;
        let last = j2;
        for (; j2 < len; ++j2) {
          if (isPathSeparator(path2.charCodeAt(j2)))
            break;
        }
        if (j2 < len && j2 !== last) {
          last = j2;
          for (; j2 < len; ++j2) {
            if (!isPathSeparator(path2.charCodeAt(j2)))
              break;
          }
          if (j2 < len && j2 !== last) {
            last = j2;
            for (; j2 < len; ++j2) {
              if (isPathSeparator(path2.charCodeAt(j2)))
                break;
            }
            if (j2 === len) {
              return path2;
            }
            if (j2 !== last) {
              rootEnd = offset = j2 + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === CHAR_COLON) {
        rootEnd = offset = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2)))
            rootEnd = offset = 3;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    return path2;
  }
  for (let i3 = len - 1; i3 >= offset; --i3) {
    if (isPathSeparator(path2.charCodeAt(i3))) {
      if (!matchedSlash) {
        end = i3;
        break;
      }
    } else {
      matchedSlash = false;
    }
  }
  if (end === -1) {
    if (rootEnd === -1)
      return ".";
    else
      end = rootEnd;
  }
  return stripTrailingSeparators(path2.slice(0, end), isPosixPathSeparator);
}
__name(windowsDirname, "windowsDirname");

// plugin-web:https://deno.land/std/path/_basename.ts
function stripSuffix(name, suffix) {
  if (suffix.length >= name.length) {
    return name;
  }
  const lenDiff = name.length - suffix.length;
  for (let i3 = suffix.length - 1; i3 >= 0; --i3) {
    if (name.charCodeAt(lenDiff + i3) !== suffix.charCodeAt(i3)) {
      return name;
    }
  }
  return name.slice(0, -suffix.length);
}
__name(stripSuffix, "stripSuffix");
function lastPathSegment(path2, isSep, start = 0) {
  let matchedNonSeparator = false;
  let end = path2.length;
  for (let i3 = path2.length - 1; i3 >= start; --i3) {
    if (isSep(path2.charCodeAt(i3))) {
      if (matchedNonSeparator) {
        start = i3 + 1;
        break;
      }
    } else if (!matchedNonSeparator) {
      matchedNonSeparator = true;
      end = i3 + 1;
    }
  }
  return path2.slice(start, end);
}
__name(lastPathSegment, "lastPathSegment");
function assertArgs2(path2, suffix) {
  assertPath(path2);
  if (path2.length === 0)
    return path2;
  if (typeof suffix !== "string") {
    throw new TypeError(
      `Suffix must be a string. Received ${JSON.stringify(suffix)}`
    );
  }
}
__name(assertArgs2, "assertArgs");
function posixBasename(path2, suffix = "") {
  assertArgs2(path2, suffix);
  const lastSegment = lastPathSegment(path2, isPosixPathSeparator);
  const strippedSegment = stripTrailingSeparators(
    lastSegment,
    isPosixPathSeparator
  );
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
__name(posixBasename, "posixBasename");
function windowsBasename(path2, suffix = "") {
  assertArgs2(path2, suffix);
  let start = 0;
  if (path2.length >= 2) {
    const drive = path2.charCodeAt(0);
    if (isWindowsDeviceRoot(drive)) {
      if (path2.charCodeAt(1) === CHAR_COLON)
        start = 2;
    }
  }
  const lastSegment = lastPathSegment(path2, isPathSeparator, start);
  const strippedSegment = stripTrailingSeparators(lastSegment, isPathSeparator);
  return suffix ? stripSuffix(strippedSegment, suffix) : strippedSegment;
}
__name(windowsBasename, "windowsBasename");

// plugin-web:https://deno.land/std/path/_extname.ts
function posixExtname(path2) {
  assertPath(path2);
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  for (let i3 = path2.length - 1; i3 >= 0; --i3) {
    const code = path2.charCodeAt(i3);
    if (isPosixPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i3 + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i3 + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i3;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
__name(posixExtname, "posixExtname");
function windowsExtname(path2) {
  assertPath(path2);
  let start = 0;
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let preDotState = 0;
  if (path2.length >= 2 && path2.charCodeAt(1) === CHAR_COLON && isWindowsDeviceRoot(path2.charCodeAt(0))) {
    start = startPart = 2;
  }
  for (let i3 = path2.length - 1; i3 >= start; --i3) {
    const code = path2.charCodeAt(i3);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i3 + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i3 + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i3;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return "";
  }
  return path2.slice(startDot, end);
}
__name(windowsExtname, "windowsExtname");

// plugin-web:https://deno.land/std/path/_format.ts
function _format(sep3, pathObject) {
  const dir = pathObject.dir || pathObject.root;
  const base = pathObject.base || (pathObject.name || "") + (pathObject.ext || "");
  if (!dir)
    return base;
  if (base === sep3)
    return dir;
  if (dir === pathObject.root)
    return dir + base;
  return dir + sep3 + base;
}
__name(_format, "_format");
function assertArg3(pathObject) {
  if (pathObject === null || typeof pathObject !== "object") {
    throw new TypeError(
      `The "pathObject" argument must be of type Object. Received type ${typeof pathObject}`
    );
  }
}
__name(assertArg3, "assertArg");
function posixFormat(pathObject) {
  assertArg3(pathObject);
  return _format("/", pathObject);
}
__name(posixFormat, "posixFormat");
function windowsFormat(pathObject) {
  assertArg3(pathObject);
  return _format("\\", pathObject);
}
__name(windowsFormat, "windowsFormat");

// plugin-web:https://deno.land/std/path/_parse.ts
function posixParse(path2) {
  assertPath(path2);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  if (path2.length === 0)
    return ret;
  const isAbsolute = isPosixPathSeparator(path2.charCodeAt(0));
  let start;
  if (isAbsolute) {
    ret.root = "/";
    start = 1;
  } else {
    start = 0;
  }
  let startDot = -1;
  let startPart = 0;
  let end = -1;
  let matchedSlash = true;
  let i3 = path2.length - 1;
  let preDotState = 0;
  for (; i3 >= start; --i3) {
    const code = path2.charCodeAt(i3);
    if (isPosixPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i3 + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i3 + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i3;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      if (startPart === 0 && isAbsolute) {
        ret.base = ret.name = path2.slice(1, end);
      } else {
        ret.base = ret.name = path2.slice(startPart, end);
      }
    }
    ret.base = ret.base || "/";
  } else {
    if (startPart === 0 && isAbsolute) {
      ret.name = path2.slice(1, startDot);
      ret.base = path2.slice(1, end);
    } else {
      ret.name = path2.slice(startPart, startDot);
      ret.base = path2.slice(startPart, end);
    }
    ret.ext = path2.slice(startDot, end);
  }
  if (startPart > 0) {
    ret.dir = stripTrailingSeparators(
      path2.slice(0, startPart - 1),
      isPosixPathSeparator
    );
  } else if (isAbsolute)
    ret.dir = "/";
  return ret;
}
__name(posixParse, "posixParse");
function windowsParse(path2) {
  assertPath(path2);
  const ret = { root: "", dir: "", base: "", ext: "", name: "" };
  const len = path2.length;
  if (len === 0)
    return ret;
  let rootEnd = 0;
  let code = path2.charCodeAt(0);
  if (len > 1) {
    if (isPathSeparator(code)) {
      rootEnd = 1;
      if (isPathSeparator(path2.charCodeAt(1))) {
        let j2 = 2;
        let last = j2;
        for (; j2 < len; ++j2) {
          if (isPathSeparator(path2.charCodeAt(j2)))
            break;
        }
        if (j2 < len && j2 !== last) {
          last = j2;
          for (; j2 < len; ++j2) {
            if (!isPathSeparator(path2.charCodeAt(j2)))
              break;
          }
          if (j2 < len && j2 !== last) {
            last = j2;
            for (; j2 < len; ++j2) {
              if (isPathSeparator(path2.charCodeAt(j2)))
                break;
            }
            if (j2 === len) {
              rootEnd = j2;
            } else if (j2 !== last) {
              rootEnd = j2 + 1;
            }
          }
        }
      }
    } else if (isWindowsDeviceRoot(code)) {
      if (path2.charCodeAt(1) === CHAR_COLON) {
        rootEnd = 2;
        if (len > 2) {
          if (isPathSeparator(path2.charCodeAt(2))) {
            if (len === 3) {
              ret.root = ret.dir = path2;
              ret.base = "\\";
              return ret;
            }
            rootEnd = 3;
          }
        } else {
          ret.root = ret.dir = path2;
          return ret;
        }
      }
    }
  } else if (isPathSeparator(code)) {
    ret.root = ret.dir = path2;
    ret.base = "\\";
    return ret;
  }
  if (rootEnd > 0)
    ret.root = path2.slice(0, rootEnd);
  let startDot = -1;
  let startPart = rootEnd;
  let end = -1;
  let matchedSlash = true;
  let i3 = path2.length - 1;
  let preDotState = 0;
  for (; i3 >= rootEnd; --i3) {
    code = path2.charCodeAt(i3);
    if (isPathSeparator(code)) {
      if (!matchedSlash) {
        startPart = i3 + 1;
        break;
      }
      continue;
    }
    if (end === -1) {
      matchedSlash = false;
      end = i3 + 1;
    }
    if (code === CHAR_DOT) {
      if (startDot === -1)
        startDot = i3;
      else if (preDotState !== 1)
        preDotState = 1;
    } else if (startDot !== -1) {
      preDotState = -1;
    }
  }
  if (startDot === -1 || end === -1 || // We saw a non-dot character immediately before the dot
  preDotState === 0 || // The (right-most) trimmed path component is exactly '..'
  preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    if (end !== -1) {
      ret.base = ret.name = path2.slice(startPart, end);
    }
  } else {
    ret.name = path2.slice(startPart, startDot);
    ret.base = path2.slice(startPart, end);
    ret.ext = path2.slice(startDot, end);
  }
  ret.base = ret.base || "\\";
  if (startPart > 0 && startPart !== rootEnd) {
    ret.dir = path2.slice(0, startPart - 1);
  } else
    ret.dir = ret.root;
  return ret;
}
__name(windowsParse, "windowsParse");

// plugin-web:https://deno.land/std/path/_from_file_url.ts
function assertArg4(url) {
  url = url instanceof URL ? url : new URL(url);
  if (url.protocol !== "file:") {
    throw new TypeError("Must be a file URL.");
  }
  return url;
}
__name(assertArg4, "assertArg");
function posixFromFileUrl(url) {
  url = assertArg4(url);
  return decodeURIComponent(
    url.pathname.replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  );
}
__name(posixFromFileUrl, "posixFromFileUrl");
function windowsFromFileUrl(url) {
  url = assertArg4(url);
  let path2 = decodeURIComponent(
    url.pathname.replace(/\//g, "\\").replace(/%(?![0-9A-Fa-f]{2})/g, "%25")
  ).replace(/^\\*([A-Za-z]:)(\\|$)/, "$1\\");
  if (url.hostname !== "") {
    path2 = `\\\\${url.hostname}${path2}`;
  }
  return path2;
}
__name(windowsFromFileUrl, "windowsFromFileUrl");

// plugin-web:https://deno.land/std/path/_to_file_url.ts
var WHITESPACE_ENCODINGS = {
  "	": "%09",
  "\n": "%0A",
  "\v": "%0B",
  "\f": "%0C",
  "\r": "%0D",
  " ": "%20"
};
function encodeWhitespace(string) {
  return string.replaceAll(/[\s]/g, (c) => {
    return WHITESPACE_ENCODINGS[c] ?? c;
  });
}
__name(encodeWhitespace, "encodeWhitespace");
function posixToFileUrl(path2) {
  if (!posixIsAbsolute(path2)) {
    throw new TypeError("Must be an absolute path.");
  }
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(
    path2.replace(/%/g, "%25").replace(/\\/g, "%5C")
  );
  return url;
}
__name(posixToFileUrl, "posixToFileUrl");
function windowsToFileUrl(path2) {
  if (!windowsIsAbsolute(path2)) {
    throw new TypeError("Must be an absolute path.");
  }
  const [, hostname, pathname] = path2.match(
    /^(?:[/\\]{2}([^/\\]+)(?=[/\\](?:[^/\\]|$)))?(.*)/
  );
  const url = new URL("file:///");
  url.pathname = encodeWhitespace(pathname.replace(/%/g, "%25"));
  if (hostname !== void 0 && hostname !== "localhost") {
    url.hostname = hostname;
    if (!url.hostname) {
      throw new TypeError("Invalid hostname.");
    }
  }
  return url;
}
__name(windowsToFileUrl, "windowsToFileUrl");

// plugin-web:https://deno.land/std/path/win32.ts
var sep = "\\";
var delimiter = ";";

// plugin-web:https://deno.land/std/path/posix.ts
var posix_exports = {};
__export(posix_exports, {
  basename: () => posixBasename,
  delimiter: () => delimiter2,
  dirname: () => posixDirname,
  extname: () => posixExtname,
  format: () => posixFormat,
  fromFileUrl: () => posixFromFileUrl,
  isAbsolute: () => posixIsAbsolute,
  join: () => posixJoin,
  normalize: () => posixNormalize,
  parse: () => posixParse,
  relative: () => posixRelative,
  resolve: () => posixResolve,
  sep: () => sep2,
  toFileUrl: () => posixToFileUrl,
  toNamespacedPath: () => posixToNamespacedPath
});
var sep2 = "/";
var delimiter2 = ":";

// plugin-web:https://deno.land/std/path/join.ts
function join(...paths) {
  return isWindows ? windowsJoin(...paths) : posixJoin(...paths);
}
__name(join, "join");

// plugin-web:https://deno.land/std/path/glob.ts
var path = isWindows ? win32_exports : posix_exports;
var { join: join2, normalize } = path;

// plugin-web:https://deno.land/std/path/mod.ts
var win32 = win32_exports;
var posix = posix_exports;
var delimiter3 = isWindows ? win32.delimiter : posix.delimiter;

// plugin-web:https://esm.sh/v132/snakecase@1.0.0/denonext/snakecase.mjs
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

// plugin-web:file:///C:/dev/esbuild-web/scripts/test/main.ts
var main_default = {
  isEven: npm_is_even_1_0_default,
  isOdd: npm_is_odd_3_0_default,
  sum,
  join,
  snakecase: j
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
