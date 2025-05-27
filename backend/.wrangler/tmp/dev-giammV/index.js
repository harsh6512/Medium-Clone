var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// .wrangler/tmp/bundle-pux5GE/strip-cf-connecting-ip-header.js
function stripCfConnectingIPHeader(input, init) {
  const request = new Request(input, init);
  request.headers.delete("CF-Connecting-IP");
  return request;
}
var init_strip_cf_connecting_ip_header = __esm({
  ".wrangler/tmp/bundle-pux5GE/strip-cf-connecting-ip-header.js"() {
    "use strict";
    __name(stripCfConnectingIPHeader, "stripCfConnectingIPHeader");
    globalThis.fetch = new Proxy(globalThis.fetch, {
      apply(target, thisArg, argArray) {
        return Reflect.apply(target, thisArg, [
          stripCfConnectingIPHeader.apply(null, argArray)
        ]);
      }
    });
  }
});

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/@prisma/client/runtime/edge.js
var require_edge = __commonJS({
  "node_modules/@prisma/client/runtime/edge.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var ya = Object.create;
    var lr = Object.defineProperty;
    var wa = Object.getOwnPropertyDescriptor;
    var Ea = Object.getOwnPropertyNames;
    var ba = Object.getPrototypeOf;
    var xa = Object.prototype.hasOwnProperty;
    var fe = /* @__PURE__ */ __name((e, t) => () => (e && (t = e(e = 0)), t), "fe");
    var Fe = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "Fe");
    var Pt = /* @__PURE__ */ __name((e, t) => {
      for (var r in t) lr(e, r, { get: t[r], enumerable: true });
    }, "Pt");
    var si = /* @__PURE__ */ __name((e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function") for (let i of Ea(t)) !xa.call(e, i) && i !== r && lr(e, i, { get: /* @__PURE__ */ __name(() => t[i], "get"), enumerable: !(n = wa(t, i)) || n.enumerable });
      return e;
    }, "si");
    var Qe = /* @__PURE__ */ __name((e, t, r) => (r = e != null ? ya(ba(e)) : {}, si(t || !e || !e.__esModule ? lr(r, "default", { value: e, enumerable: true }) : r, e)), "Qe");
    var Pa = /* @__PURE__ */ __name((e) => si(lr({}, "__esModule", { value: true }), e), "Pa");
    var y2;
    var u = fe(() => {
      "use strict";
      y2 = { nextTick: /* @__PURE__ */ __name((e, ...t) => {
        setTimeout(() => {
          e(...t);
        }, 0);
      }, "nextTick"), env: {}, version: "", cwd: /* @__PURE__ */ __name(() => "/", "cwd"), stderr: {}, argv: ["/bin/node"] };
    });
    var b;
    var c = fe(() => {
      "use strict";
      b = globalThis.performance ?? (() => {
        let e = Date.now();
        return { now: /* @__PURE__ */ __name(() => Date.now() - e, "now") };
      })();
    });
    var E2;
    var p = fe(() => {
      "use strict";
      E2 = /* @__PURE__ */ __name(() => {
      }, "E");
      E2.prototype = E2;
    });
    var m2 = fe(() => {
      "use strict";
    });
    var Ci = Fe((Ke) => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      var pi = /* @__PURE__ */ __name((e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), "pi"), va = pi((e) => {
        "use strict";
        e.byteLength = l, e.toByteArray = g, e.fromByteArray = S;
        var t = [], r = [], n = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        for (o = 0, s = i.length; o < s; ++o) t[o] = i[o], r[i.charCodeAt(o)] = o;
        var o, s;
        r[45] = 62, r[95] = 63;
        function a(A2) {
          var R = A2.length;
          if (R % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
          var D = A2.indexOf("=");
          D === -1 && (D = R);
          var M = D === R ? 0 : 4 - D % 4;
          return [D, M];
        }
        __name(a, "a");
        function l(A2) {
          var R = a(A2), D = R[0], M = R[1];
          return (D + M) * 3 / 4 - M;
        }
        __name(l, "l");
        function d(A2, R, D) {
          return (R + D) * 3 / 4 - D;
        }
        __name(d, "d");
        function g(A2) {
          var R, D = a(A2), M = D[0], B = D[1], k = new n(d(A2, M, B)), F2 = 0, ae = B > 0 ? M - 4 : M, G;
          for (G = 0; G < ae; G += 4) R = r[A2.charCodeAt(G)] << 18 | r[A2.charCodeAt(G + 1)] << 12 | r[A2.charCodeAt(G + 2)] << 6 | r[A2.charCodeAt(G + 3)], k[F2++] = R >> 16 & 255, k[F2++] = R >> 8 & 255, k[F2++] = R & 255;
          return B === 2 && (R = r[A2.charCodeAt(G)] << 2 | r[A2.charCodeAt(G + 1)] >> 4, k[F2++] = R & 255), B === 1 && (R = r[A2.charCodeAt(G)] << 10 | r[A2.charCodeAt(G + 1)] << 4 | r[A2.charCodeAt(G + 2)] >> 2, k[F2++] = R >> 8 & 255, k[F2++] = R & 255), k;
        }
        __name(g, "g");
        function h(A2) {
          return t[A2 >> 18 & 63] + t[A2 >> 12 & 63] + t[A2 >> 6 & 63] + t[A2 & 63];
        }
        __name(h, "h");
        function v(A2, R, D) {
          for (var M, B = [], k = R; k < D; k += 3) M = (A2[k] << 16 & 16711680) + (A2[k + 1] << 8 & 65280) + (A2[k + 2] & 255), B.push(h(M));
          return B.join("");
        }
        __name(v, "v");
        function S(A2) {
          for (var R, D = A2.length, M = D % 3, B = [], k = 16383, F2 = 0, ae = D - M; F2 < ae; F2 += k) B.push(v(A2, F2, F2 + k > ae ? ae : F2 + k));
          return M === 1 ? (R = A2[D - 1], B.push(t[R >> 2] + t[R << 4 & 63] + "==")) : M === 2 && (R = (A2[D - 2] << 8) + A2[D - 1], B.push(t[R >> 10] + t[R >> 4 & 63] + t[R << 2 & 63] + "=")), B.join("");
        }
        __name(S, "S");
      }), Ta = pi((e) => {
        e.read = function(t, r, n, i, o) {
          var s, a, l = o * 8 - i - 1, d = (1 << l) - 1, g = d >> 1, h = -7, v = n ? o - 1 : 0, S = n ? -1 : 1, A2 = t[r + v];
          for (v += S, s = A2 & (1 << -h) - 1, A2 >>= -h, h += l; h > 0; s = s * 256 + t[r + v], v += S, h -= 8) ;
          for (a = s & (1 << -h) - 1, s >>= -h, h += i; h > 0; a = a * 256 + t[r + v], v += S, h -= 8) ;
          if (s === 0) s = 1 - g;
          else {
            if (s === d) return a ? NaN : (A2 ? -1 : 1) * (1 / 0);
            a = a + Math.pow(2, i), s = s - g;
          }
          return (A2 ? -1 : 1) * a * Math.pow(2, s - i);
        }, e.write = function(t, r, n, i, o, s) {
          var a, l, d, g = s * 8 - o - 1, h = (1 << g) - 1, v = h >> 1, S = o === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, A2 = i ? 0 : s - 1, R = i ? 1 : -1, D = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
          for (r = Math.abs(r), isNaN(r) || r === 1 / 0 ? (l = isNaN(r) ? 1 : 0, a = h) : (a = Math.floor(Math.log(r) / Math.LN2), r * (d = Math.pow(2, -a)) < 1 && (a--, d *= 2), a + v >= 1 ? r += S / d : r += S * Math.pow(2, 1 - v), r * d >= 2 && (a++, d /= 2), a + v >= h ? (l = 0, a = h) : a + v >= 1 ? (l = (r * d - 1) * Math.pow(2, o), a = a + v) : (l = r * Math.pow(2, v - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + A2] = l & 255, A2 += R, l /= 256, o -= 8) ;
          for (a = a << o | l, g += o; g > 0; t[n + A2] = a & 255, A2 += R, a /= 256, g -= 8) ;
          t[n + A2 - R] |= D * 128;
        };
      }), ln = va(), We = Ta(), ai = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
      Ke.Buffer = T2;
      Ke.SlowBuffer = Ia;
      Ke.INSPECT_MAX_BYTES = 50;
      var ur = 2147483647;
      Ke.kMaxLength = ur;
      T2.TYPED_ARRAY_SUPPORT = Ca();
      !T2.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
      function Ca() {
        try {
          let e = new Uint8Array(1), t = { foo: /* @__PURE__ */ __name(function() {
            return 42;
          }, "foo") };
          return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), e.foo() === 42;
        } catch {
          return false;
        }
      }
      __name(Ca, "Ca");
      Object.defineProperty(T2.prototype, "parent", { enumerable: true, get: /* @__PURE__ */ __name(function() {
        if (T2.isBuffer(this)) return this.buffer;
      }, "get") });
      Object.defineProperty(T2.prototype, "offset", { enumerable: true, get: /* @__PURE__ */ __name(function() {
        if (T2.isBuffer(this)) return this.byteOffset;
      }, "get") });
      function xe(e) {
        if (e > ur) throw new RangeError('The value "' + e + '" is invalid for option "size"');
        let t = new Uint8Array(e);
        return Object.setPrototypeOf(t, T2.prototype), t;
      }
      __name(xe, "xe");
      function T2(e, t, r) {
        if (typeof e == "number") {
          if (typeof t == "string") throw new TypeError('The "string" argument must be of type string. Received type number');
          return pn(e);
        }
        return mi(e, t, r);
      }
      __name(T2, "T");
      T2.poolSize = 8192;
      function mi(e, t, r) {
        if (typeof e == "string") return Ra(e, t);
        if (ArrayBuffer.isView(e)) return Sa(e);
        if (e == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
        if (de(e, ArrayBuffer) || e && de(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (de(e, SharedArrayBuffer) || e && de(e.buffer, SharedArrayBuffer))) return di(e, t, r);
        if (typeof e == "number") throw new TypeError('The "value" argument must not be of type number. Received type number');
        let n = e.valueOf && e.valueOf();
        if (n != null && n !== e) return T2.from(n, t, r);
        let i = ka(e);
        if (i) return i;
        if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] == "function") return T2.from(e[Symbol.toPrimitive]("string"), t, r);
        throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
      }
      __name(mi, "mi");
      T2.from = function(e, t, r) {
        return mi(e, t, r);
      };
      Object.setPrototypeOf(T2.prototype, Uint8Array.prototype);
      Object.setPrototypeOf(T2, Uint8Array);
      function fi(e) {
        if (typeof e != "number") throw new TypeError('"size" argument must be of type number');
        if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"');
      }
      __name(fi, "fi");
      function Aa(e, t, r) {
        return fi(e), e <= 0 ? xe(e) : t !== void 0 ? typeof r == "string" ? xe(e).fill(t, r) : xe(e).fill(t) : xe(e);
      }
      __name(Aa, "Aa");
      T2.alloc = function(e, t, r) {
        return Aa(e, t, r);
      };
      function pn(e) {
        return fi(e), xe(e < 0 ? 0 : mn(e) | 0);
      }
      __name(pn, "pn");
      T2.allocUnsafe = function(e) {
        return pn(e);
      };
      T2.allocUnsafeSlow = function(e) {
        return pn(e);
      };
      function Ra(e, t) {
        if ((typeof t != "string" || t === "") && (t = "utf8"), !T2.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
        let r = gi(e, t) | 0, n = xe(r), i = n.write(e, t);
        return i !== r && (n = n.slice(0, i)), n;
      }
      __name(Ra, "Ra");
      function un(e) {
        let t = e.length < 0 ? 0 : mn(e.length) | 0, r = xe(t);
        for (let n = 0; n < t; n += 1) r[n] = e[n] & 255;
        return r;
      }
      __name(un, "un");
      function Sa(e) {
        if (de(e, Uint8Array)) {
          let t = new Uint8Array(e);
          return di(t.buffer, t.byteOffset, t.byteLength);
        }
        return un(e);
      }
      __name(Sa, "Sa");
      function di(e, t, r) {
        if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
        if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
        let n;
        return t === void 0 && r === void 0 ? n = new Uint8Array(e) : r === void 0 ? n = new Uint8Array(e, t) : n = new Uint8Array(e, t, r), Object.setPrototypeOf(n, T2.prototype), n;
      }
      __name(di, "di");
      function ka(e) {
        if (T2.isBuffer(e)) {
          let t = mn(e.length) | 0, r = xe(t);
          return r.length === 0 || e.copy(r, 0, 0, t), r;
        }
        if (e.length !== void 0) return typeof e.length != "number" || dn(e.length) ? xe(0) : un(e);
        if (e.type === "Buffer" && Array.isArray(e.data)) return un(e.data);
      }
      __name(ka, "ka");
      function mn(e) {
        if (e >= ur) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + ur.toString(16) + " bytes");
        return e | 0;
      }
      __name(mn, "mn");
      function Ia(e) {
        return +e != e && (e = 0), T2.alloc(+e);
      }
      __name(Ia, "Ia");
      T2.isBuffer = function(e) {
        return e != null && e._isBuffer === true && e !== T2.prototype;
      };
      T2.compare = function(e, t) {
        if (de(e, Uint8Array) && (e = T2.from(e, e.offset, e.byteLength)), de(t, Uint8Array) && (t = T2.from(t, t.offset, t.byteLength)), !T2.isBuffer(e) || !T2.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        let r = e.length, n = t.length;
        for (let i = 0, o = Math.min(r, n); i < o; ++i) if (e[i] !== t[i]) {
          r = e[i], n = t[i];
          break;
        }
        return r < n ? -1 : n < r ? 1 : 0;
      };
      T2.isEncoding = function(e) {
        switch (String(e).toLowerCase()) {
          case "hex":
          case "utf8":
          case "utf-8":
          case "ascii":
          case "latin1":
          case "binary":
          case "base64":
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return true;
          default:
            return false;
        }
      };
      T2.concat = function(e, t) {
        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
        if (e.length === 0) return T2.alloc(0);
        let r;
        if (t === void 0) for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
        let n = T2.allocUnsafe(t), i = 0;
        for (r = 0; r < e.length; ++r) {
          let o = e[r];
          if (de(o, Uint8Array)) i + o.length > n.length ? (T2.isBuffer(o) || (o = T2.from(o)), o.copy(n, i)) : Uint8Array.prototype.set.call(n, o, i);
          else if (T2.isBuffer(o)) o.copy(n, i);
          else throw new TypeError('"list" argument must be an Array of Buffers');
          i += o.length;
        }
        return n;
      };
      function gi(e, t) {
        if (T2.isBuffer(e)) return e.length;
        if (ArrayBuffer.isView(e) || de(e, ArrayBuffer)) return e.byteLength;
        if (typeof e != "string") throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
        let r = e.length, n = arguments.length > 2 && arguments[2] === true;
        if (!n && r === 0) return 0;
        let i = false;
        for (; ; ) switch (t) {
          case "ascii":
          case "latin1":
          case "binary":
            return r;
          case "utf8":
          case "utf-8":
            return cn(e).length;
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return r * 2;
          case "hex":
            return r >>> 1;
          case "base64":
            return Ti(e).length;
          default:
            if (i) return n ? -1 : cn(e).length;
            t = ("" + t).toLowerCase(), i = true;
        }
      }
      __name(gi, "gi");
      T2.byteLength = gi;
      function Oa(e, t, r) {
        let n = false;
        if ((t === void 0 || t < 0) && (t = 0), t > this.length || ((r === void 0 || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0, t >>>= 0, r <= t)) return "";
        for (e || (e = "utf8"); ; ) switch (e) {
          case "hex":
            return $a(this, t, r);
          case "utf8":
          case "utf-8":
            return yi(this, t, r);
          case "ascii":
            return Ua(this, t, r);
          case "latin1":
          case "binary":
            return qa(this, t, r);
          case "base64":
            return La(this, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return ja(this, t, r);
          default:
            if (n) throw new TypeError("Unknown encoding: " + e);
            e = (e + "").toLowerCase(), n = true;
        }
      }
      __name(Oa, "Oa");
      T2.prototype._isBuffer = true;
      function Le(e, t, r) {
        let n = e[t];
        e[t] = e[r], e[r] = n;
      }
      __name(Le, "Le");
      T2.prototype.swap16 = function() {
        let e = this.length;
        if (e % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
        for (let t = 0; t < e; t += 2) Le(this, t, t + 1);
        return this;
      };
      T2.prototype.swap32 = function() {
        let e = this.length;
        if (e % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
        for (let t = 0; t < e; t += 4) Le(this, t, t + 3), Le(this, t + 1, t + 2);
        return this;
      };
      T2.prototype.swap64 = function() {
        let e = this.length;
        if (e % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
        for (let t = 0; t < e; t += 8) Le(this, t, t + 7), Le(this, t + 1, t + 6), Le(this, t + 2, t + 5), Le(this, t + 3, t + 4);
        return this;
      };
      T2.prototype.toString = function() {
        let e = this.length;
        return e === 0 ? "" : arguments.length === 0 ? yi(this, 0, e) : Oa.apply(this, arguments);
      };
      T2.prototype.toLocaleString = T2.prototype.toString;
      T2.prototype.equals = function(e) {
        if (!T2.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
        return this === e ? true : T2.compare(this, e) === 0;
      };
      T2.prototype.inspect = function() {
        let e = "", t = Ke.INSPECT_MAX_BYTES;
        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">";
      };
      ai && (T2.prototype[ai] = T2.prototype.inspect);
      T2.prototype.compare = function(e, t, r, n, i) {
        if (de(e, Uint8Array) && (e = T2.from(e, e.offset, e.byteLength)), !T2.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if (t === void 0 && (t = 0), r === void 0 && (r = e ? e.length : 0), n === void 0 && (n = 0), i === void 0 && (i = this.length), t < 0 || r > e.length || n < 0 || i > this.length) throw new RangeError("out of range index");
        if (n >= i && t >= r) return 0;
        if (n >= i) return -1;
        if (t >= r) return 1;
        if (t >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === e) return 0;
        let o = i - n, s = r - t, a = Math.min(o, s), l = this.slice(n, i), d = e.slice(t, r);
        for (let g = 0; g < a; ++g) if (l[g] !== d[g]) {
          o = l[g], s = d[g];
          break;
        }
        return o < s ? -1 : s < o ? 1 : 0;
      };
      function hi(e, t, r, n, i) {
        if (e.length === 0) return -1;
        if (typeof r == "string" ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, dn(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
          if (i) return -1;
          r = e.length - 1;
        } else if (r < 0) if (i) r = 0;
        else return -1;
        if (typeof t == "string" && (t = T2.from(t, n)), T2.isBuffer(t)) return t.length === 0 ? -1 : li(e, t, r, n, i);
        if (typeof t == "number") return t = t & 255, typeof Uint8Array.prototype.indexOf == "function" ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : li(e, [t], r, n, i);
        throw new TypeError("val must be string, number or Buffer");
      }
      __name(hi, "hi");
      function li(e, t, r, n, i) {
        let o = 1, s = e.length, a = t.length;
        if (n !== void 0 && (n = String(n).toLowerCase(), n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")) {
          if (e.length < 2 || t.length < 2) return -1;
          o = 2, s /= 2, a /= 2, r /= 2;
        }
        function l(g, h) {
          return o === 1 ? g[h] : g.readUInt16BE(h * o);
        }
        __name(l, "l");
        let d;
        if (i) {
          let g = -1;
          for (d = r; d < s; d++) if (l(e, d) === l(t, g === -1 ? 0 : d - g)) {
            if (g === -1 && (g = d), d - g + 1 === a) return g * o;
          } else g !== -1 && (d -= d - g), g = -1;
        } else for (r + a > s && (r = s - a), d = r; d >= 0; d--) {
          let g = true;
          for (let h = 0; h < a; h++) if (l(e, d + h) !== l(t, h)) {
            g = false;
            break;
          }
          if (g) return d;
        }
        return -1;
      }
      __name(li, "li");
      T2.prototype.includes = function(e, t, r) {
        return this.indexOf(e, t, r) !== -1;
      };
      T2.prototype.indexOf = function(e, t, r) {
        return hi(this, e, t, r, true);
      };
      T2.prototype.lastIndexOf = function(e, t, r) {
        return hi(this, e, t, r, false);
      };
      function Da(e, t, r, n) {
        r = Number(r) || 0;
        let i = e.length - r;
        n ? (n = Number(n), n > i && (n = i)) : n = i;
        let o = t.length;
        n > o / 2 && (n = o / 2);
        let s;
        for (s = 0; s < n; ++s) {
          let a = parseInt(t.substr(s * 2, 2), 16);
          if (dn(a)) return s;
          e[r + s] = a;
        }
        return s;
      }
      __name(Da, "Da");
      function Ma(e, t, r, n) {
        return cr(cn(t, e.length - r), e, r, n);
      }
      __name(Ma, "Ma");
      function _a(e, t, r, n) {
        return cr(Ja(t), e, r, n);
      }
      __name(_a, "_a");
      function Na(e, t, r, n) {
        return cr(Ti(t), e, r, n);
      }
      __name(Na, "Na");
      function Fa(e, t, r, n) {
        return cr(Wa(t, e.length - r), e, r, n);
      }
      __name(Fa, "Fa");
      T2.prototype.write = function(e, t, r, n) {
        if (t === void 0) n = "utf8", r = this.length, t = 0;
        else if (r === void 0 && typeof t == "string") n = t, r = this.length, t = 0;
        else if (isFinite(t)) t = t >>> 0, isFinite(r) ? (r = r >>> 0, n === void 0 && (n = "utf8")) : (n = r, r = void 0);
        else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        let i = this.length - t;
        if ((r === void 0 || r > i) && (r = i), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
        n || (n = "utf8");
        let o = false;
        for (; ; ) switch (n) {
          case "hex":
            return Da(this, e, t, r);
          case "utf8":
          case "utf-8":
            return Ma(this, e, t, r);
          case "ascii":
          case "latin1":
          case "binary":
            return _a(this, e, t, r);
          case "base64":
            return Na(this, e, t, r);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return Fa(this, e, t, r);
          default:
            if (o) throw new TypeError("Unknown encoding: " + n);
            n = ("" + n).toLowerCase(), o = true;
        }
      };
      T2.prototype.toJSON = function() {
        return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
      };
      function La(e, t, r) {
        return t === 0 && r === e.length ? ln.fromByteArray(e) : ln.fromByteArray(e.slice(t, r));
      }
      __name(La, "La");
      function yi(e, t, r) {
        r = Math.min(e.length, r);
        let n = [], i = t;
        for (; i < r; ) {
          let o = e[i], s = null, a = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
          if (i + a <= r) {
            let l, d, g, h;
            switch (a) {
              case 1:
                o < 128 && (s = o);
                break;
              case 2:
                l = e[i + 1], (l & 192) === 128 && (h = (o & 31) << 6 | l & 63, h > 127 && (s = h));
                break;
              case 3:
                l = e[i + 1], d = e[i + 2], (l & 192) === 128 && (d & 192) === 128 && (h = (o & 15) << 12 | (l & 63) << 6 | d & 63, h > 2047 && (h < 55296 || h > 57343) && (s = h));
                break;
              case 4:
                l = e[i + 1], d = e[i + 2], g = e[i + 3], (l & 192) === 128 && (d & 192) === 128 && (g & 192) === 128 && (h = (o & 15) << 18 | (l & 63) << 12 | (d & 63) << 6 | g & 63, h > 65535 && h < 1114112 && (s = h));
            }
          }
          s === null ? (s = 65533, a = 1) : s > 65535 && (s -= 65536, n.push(s >>> 10 & 1023 | 55296), s = 56320 | s & 1023), n.push(s), i += a;
        }
        return Ba(n);
      }
      __name(yi, "yi");
      var ui = 4096;
      function Ba(e) {
        let t = e.length;
        if (t <= ui) return String.fromCharCode.apply(String, e);
        let r = "", n = 0;
        for (; n < t; ) r += String.fromCharCode.apply(String, e.slice(n, n += ui));
        return r;
      }
      __name(Ba, "Ba");
      function Ua(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(e[i] & 127);
        return n;
      }
      __name(Ua, "Ua");
      function qa(e, t, r) {
        let n = "";
        r = Math.min(e.length, r);
        for (let i = t; i < r; ++i) n += String.fromCharCode(e[i]);
        return n;
      }
      __name(qa, "qa");
      function $a(e, t, r) {
        let n = e.length;
        (!t || t < 0) && (t = 0), (!r || r < 0 || r > n) && (r = n);
        let i = "";
        for (let o = t; o < r; ++o) i += Ha[e[o]];
        return i;
      }
      __name($a, "$a");
      function ja(e, t, r) {
        let n = e.slice(t, r), i = "";
        for (let o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + n[o + 1] * 256);
        return i;
      }
      __name(ja, "ja");
      T2.prototype.slice = function(e, t) {
        let r = this.length;
        e = ~~e, t = t === void 0 ? r : ~~t, e < 0 ? (e += r, e < 0 && (e = 0)) : e > r && (e = r), t < 0 ? (t += r, t < 0 && (t = 0)) : t > r && (t = r), t < e && (t = e);
        let n = this.subarray(e, t);
        return Object.setPrototypeOf(n, T2.prototype), n;
      };
      function W(e, t, r) {
        if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
        if (e + t > r) throw new RangeError("Trying to access beyond buffer length");
      }
      __name(W, "W");
      T2.prototype.readUintLE = T2.prototype.readUIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
        return n;
      };
      T2.prototype.readUintBE = T2.prototype.readUIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e + --t], i = 1;
        for (; t > 0 && (i *= 256); ) n += this[e + --t] * i;
        return n;
      };
      T2.prototype.readUint8 = T2.prototype.readUInt8 = function(e, t) {
        return e = e >>> 0, t || W(e, 1, this.length), this[e];
      };
      T2.prototype.readUint16LE = T2.prototype.readUInt16LE = function(e, t) {
        return e = e >>> 0, t || W(e, 2, this.length), this[e] | this[e + 1] << 8;
      };
      T2.prototype.readUint16BE = T2.prototype.readUInt16BE = function(e, t) {
        return e = e >>> 0, t || W(e, 2, this.length), this[e] << 8 | this[e + 1];
      };
      T2.prototype.readUint32LE = T2.prototype.readUInt32LE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
      };
      T2.prototype.readUint32BE = T2.prototype.readUInt32BE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
      };
      T2.prototype.readBigUInt64LE = Re(function(e) {
        e = e >>> 0, He(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24, i = this[++e] + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + r * 2 ** 24;
        return BigInt(n) + (BigInt(i) << BigInt(32));
      });
      T2.prototype.readBigUInt64BE = Re(function(e) {
        e = e >>> 0, He(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = t * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e], i = this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r;
        return (BigInt(n) << BigInt(32)) + BigInt(i);
      });
      T2.prototype.readIntLE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = this[e], i = 1, o = 0;
        for (; ++o < t && (i *= 256); ) n += this[e + o] * i;
        return i *= 128, n >= i && (n -= Math.pow(2, 8 * t)), n;
      };
      T2.prototype.readIntBE = function(e, t, r) {
        e = e >>> 0, t = t >>> 0, r || W(e, t, this.length);
        let n = t, i = 1, o = this[e + --n];
        for (; n > 0 && (i *= 256); ) o += this[e + --n] * i;
        return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o;
      };
      T2.prototype.readInt8 = function(e, t) {
        return e = e >>> 0, t || W(e, 1, this.length), this[e] & 128 ? (255 - this[e] + 1) * -1 : this[e];
      };
      T2.prototype.readInt16LE = function(e, t) {
        e = e >>> 0, t || W(e, 2, this.length);
        let r = this[e] | this[e + 1] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T2.prototype.readInt16BE = function(e, t) {
        e = e >>> 0, t || W(e, 2, this.length);
        let r = this[e + 1] | this[e] << 8;
        return r & 32768 ? r | 4294901760 : r;
      };
      T2.prototype.readInt32LE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
      };
      T2.prototype.readInt32BE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
      };
      T2.prototype.readBigInt64LE = Re(function(e) {
        e = e >>> 0, He(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = this[e + 4] + this[e + 5] * 2 ** 8 + this[e + 6] * 2 ** 16 + (r << 24);
        return (BigInt(n) << BigInt(32)) + BigInt(t + this[++e] * 2 ** 8 + this[++e] * 2 ** 16 + this[++e] * 2 ** 24);
      });
      T2.prototype.readBigInt64BE = Re(function(e) {
        e = e >>> 0, He(e, "offset");
        let t = this[e], r = this[e + 7];
        (t === void 0 || r === void 0) && vt(e, this.length - 8);
        let n = (t << 24) + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + this[++e];
        return (BigInt(n) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + this[++e] * 2 ** 16 + this[++e] * 2 ** 8 + r);
      });
      T2.prototype.readFloatLE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), We.read(this, e, true, 23, 4);
      };
      T2.prototype.readFloatBE = function(e, t) {
        return e = e >>> 0, t || W(e, 4, this.length), We.read(this, e, false, 23, 4);
      };
      T2.prototype.readDoubleLE = function(e, t) {
        return e = e >>> 0, t || W(e, 8, this.length), We.read(this, e, true, 52, 8);
      };
      T2.prototype.readDoubleBE = function(e, t) {
        return e = e >>> 0, t || W(e, 8, this.length), We.read(this, e, false, 52, 8);
      };
      function te(e, t, r, n, i, o) {
        if (!T2.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
        if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
        if (r + n > e.length) throw new RangeError("Index out of range");
      }
      __name(te, "te");
      T2.prototype.writeUintLE = T2.prototype.writeUIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          te(this, e, t, r, s, 0);
        }
        let i = 1, o = 0;
        for (this[t] = e & 255; ++o < r && (i *= 256); ) this[t + o] = e / i & 255;
        return t + r;
      };
      T2.prototype.writeUintBE = T2.prototype.writeUIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, r = r >>> 0, !n) {
          let s = Math.pow(2, 8 * r) - 1;
          te(this, e, t, r, s, 0);
        }
        let i = r - 1, o = 1;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); ) this[t + i] = e / o & 255;
        return t + r;
      };
      T2.prototype.writeUint8 = T2.prototype.writeUInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 1, 255, 0), this[t] = e & 255, t + 1;
      };
      T2.prototype.writeUint16LE = T2.prototype.writeUInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 65535, 0), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T2.prototype.writeUint16BE = T2.prototype.writeUInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T2.prototype.writeUint32LE = T2.prototype.writeUInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = e & 255, t + 4;
      };
      T2.prototype.writeUint32BE = T2.prototype.writeUInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      function wi(e, t, r, n, i) {
        vi(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o, o = o >> 8, e[r++] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, s = s >> 8, e[r++] = s, r;
      }
      __name(wi, "wi");
      function Ei(e, t, r, n, i) {
        vi(t, n, i, e, r, 7);
        let o = Number(t & BigInt(4294967295));
        e[r + 7] = o, o = o >> 8, e[r + 6] = o, o = o >> 8, e[r + 5] = o, o = o >> 8, e[r + 4] = o;
        let s = Number(t >> BigInt(32) & BigInt(4294967295));
        return e[r + 3] = s, s = s >> 8, e[r + 2] = s, s = s >> 8, e[r + 1] = s, s = s >> 8, e[r] = s, r + 8;
      }
      __name(Ei, "Ei");
      T2.prototype.writeBigUInt64LE = Re(function(e, t = 0) {
        return wi(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T2.prototype.writeBigUInt64BE = Re(function(e, t = 0) {
        return Ei(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"));
      });
      T2.prototype.writeIntLE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          te(this, e, t, r, a - 1, -a);
        }
        let i = 0, o = 1, s = 0;
        for (this[t] = e & 255; ++i < r && (o *= 256); ) e < 0 && s === 0 && this[t + i - 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T2.prototype.writeIntBE = function(e, t, r, n) {
        if (e = +e, t = t >>> 0, !n) {
          let a = Math.pow(2, 8 * r - 1);
          te(this, e, t, r, a - 1, -a);
        }
        let i = r - 1, o = 1, s = 0;
        for (this[t + i] = e & 255; --i >= 0 && (o *= 256); ) e < 0 && s === 0 && this[t + i + 1] !== 0 && (s = 1), this[t + i] = (e / o >> 0) - s & 255;
        return t + r;
      };
      T2.prototype.writeInt8 = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = e & 255, t + 1;
      };
      T2.prototype.writeInt16LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 32767, -32768), this[t] = e & 255, this[t + 1] = e >>> 8, t + 2;
      };
      T2.prototype.writeInt16BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = e & 255, t + 2;
      };
      T2.prototype.writeInt32LE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 2147483647, -2147483648), this[t] = e & 255, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4;
      };
      T2.prototype.writeInt32BE = function(e, t, r) {
        return e = +e, t = t >>> 0, r || te(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = e & 255, t + 4;
      };
      T2.prototype.writeBigInt64LE = Re(function(e, t = 0) {
        return wi(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      T2.prototype.writeBigInt64BE = Re(function(e, t = 0) {
        return Ei(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
      });
      function bi(e, t, r, n, i, o) {
        if (r + n > e.length) throw new RangeError("Index out of range");
        if (r < 0) throw new RangeError("Index out of range");
      }
      __name(bi, "bi");
      function xi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || bi(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), We.write(e, t, r, n, 23, 4), r + 4;
      }
      __name(xi, "xi");
      T2.prototype.writeFloatLE = function(e, t, r) {
        return xi(this, e, t, true, r);
      };
      T2.prototype.writeFloatBE = function(e, t, r) {
        return xi(this, e, t, false, r);
      };
      function Pi(e, t, r, n, i) {
        return t = +t, r = r >>> 0, i || bi(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), We.write(e, t, r, n, 52, 8), r + 8;
      }
      __name(Pi, "Pi");
      T2.prototype.writeDoubleLE = function(e, t, r) {
        return Pi(this, e, t, true, r);
      };
      T2.prototype.writeDoubleBE = function(e, t, r) {
        return Pi(this, e, t, false, r);
      };
      T2.prototype.copy = function(e, t, r, n) {
        if (!T2.isBuffer(e)) throw new TypeError("argument should be a Buffer");
        if (r || (r = 0), !n && n !== 0 && (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r || e.length === 0 || this.length === 0) return 0;
        if (t < 0) throw new RangeError("targetStart out of bounds");
        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
        if (n < 0) throw new RangeError("sourceEnd out of bounds");
        n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
        let i = n - r;
        return this === e && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(t, r, n) : Uint8Array.prototype.set.call(e, this.subarray(r, n), t), i;
      };
      T2.prototype.fill = function(e, t, r, n) {
        if (typeof e == "string") {
          if (typeof t == "string" ? (n = t, t = 0, r = this.length) : typeof r == "string" && (n = r, r = this.length), n !== void 0 && typeof n != "string") throw new TypeError("encoding must be a string");
          if (typeof n == "string" && !T2.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
          if (e.length === 1) {
            let o = e.charCodeAt(0);
            (n === "utf8" && o < 128 || n === "latin1") && (e = o);
          }
        } else typeof e == "number" ? e = e & 255 : typeof e == "boolean" && (e = Number(e));
        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
        if (r <= t) return this;
        t = t >>> 0, r = r === void 0 ? this.length : r >>> 0, e || (e = 0);
        let i;
        if (typeof e == "number") for (i = t; i < r; ++i) this[i] = e;
        else {
          let o = T2.isBuffer(e) ? e : T2.from(e, n), s = o.length;
          if (s === 0) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
          for (i = 0; i < r - t; ++i) this[i + t] = o[i % s];
        }
        return this;
      };
      var Je = {};
      function fn(e, t, r) {
        Je[e] = class extends r {
          constructor() {
            super(), Object.defineProperty(this, "message", { value: t.apply(this, arguments), writable: true, configurable: true }), this.name = `${this.name} [${e}]`, this.stack, delete this.name;
          }
          get code() {
            return e;
          }
          set code(n) {
            Object.defineProperty(this, "code", { configurable: true, enumerable: true, value: n, writable: true });
          }
          toString() {
            return `${this.name} [${e}]: ${this.message}`;
          }
        };
      }
      __name(fn, "fn");
      fn("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
        return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
      }, RangeError);
      fn("ERR_INVALID_ARG_TYPE", function(e, t) {
        return `The "${e}" argument must be of type number. Received type ${typeof t}`;
      }, TypeError);
      fn("ERR_OUT_OF_RANGE", function(e, t, r) {
        let n = `The value of "${e}" is out of range.`, i = r;
        return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = ci(String(r)) : typeof r == "bigint" && (i = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = ci(i)), i += "n"), n += ` It must be ${t}. Received ${i}`, n;
      }, RangeError);
      function ci(e) {
        let t = "", r = e.length, n = e[0] === "-" ? 1 : 0;
        for (; r >= n + 4; r -= 3) t = `_${e.slice(r - 3, r)}${t}`;
        return `${e.slice(0, r)}${t}`;
      }
      __name(ci, "ci");
      function Va(e, t, r) {
        He(t, "offset"), (e[t] === void 0 || e[t + r] === void 0) && vt(t, e.length - (r + 1));
      }
      __name(Va, "Va");
      function vi(e, t, r, n, i, o) {
        if (e > r || e < t) {
          let s = typeof t == "bigint" ? "n" : "", a;
          throw o > 3 ? t === 0 || t === BigInt(0) ? a = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}` : a = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${(o + 1) * 8 - 1}${s}` : a = `>= ${t}${s} and <= ${r}${s}`, new Je.ERR_OUT_OF_RANGE("value", a, e);
        }
        Va(n, i, o);
      }
      __name(vi, "vi");
      function He(e, t) {
        if (typeof e != "number") throw new Je.ERR_INVALID_ARG_TYPE(t, "number", e);
      }
      __name(He, "He");
      function vt(e, t, r) {
        throw Math.floor(e) !== e ? (He(e, r), new Je.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new Je.ERR_BUFFER_OUT_OF_BOUNDS() : new Je.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${t}`, e);
      }
      __name(vt, "vt");
      var Ga = /[^+/0-9A-Za-z-_]/g;
      function Qa(e) {
        if (e = e.split("=")[0], e = e.trim().replace(Ga, ""), e.length < 2) return "";
        for (; e.length % 4 !== 0; ) e = e + "=";
        return e;
      }
      __name(Qa, "Qa");
      function cn(e, t) {
        t = t || 1 / 0;
        let r, n = e.length, i = null, o = [];
        for (let s = 0; s < n; ++s) {
          if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
            if (!i) {
              if (r > 56319) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              } else if (s + 1 === n) {
                (t -= 3) > -1 && o.push(239, 191, 189);
                continue;
              }
              i = r;
              continue;
            }
            if (r < 56320) {
              (t -= 3) > -1 && o.push(239, 191, 189), i = r;
              continue;
            }
            r = (i - 55296 << 10 | r - 56320) + 65536;
          } else i && (t -= 3) > -1 && o.push(239, 191, 189);
          if (i = null, r < 128) {
            if ((t -= 1) < 0) break;
            o.push(r);
          } else if (r < 2048) {
            if ((t -= 2) < 0) break;
            o.push(r >> 6 | 192, r & 63 | 128);
          } else if (r < 65536) {
            if ((t -= 3) < 0) break;
            o.push(r >> 12 | 224, r >> 6 & 63 | 128, r & 63 | 128);
          } else if (r < 1114112) {
            if ((t -= 4) < 0) break;
            o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, r & 63 | 128);
          } else throw new Error("Invalid code point");
        }
        return o;
      }
      __name(cn, "cn");
      function Ja(e) {
        let t = [];
        for (let r = 0; r < e.length; ++r) t.push(e.charCodeAt(r) & 255);
        return t;
      }
      __name(Ja, "Ja");
      function Wa(e, t) {
        let r, n, i, o = [];
        for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), n = r >> 8, i = r % 256, o.push(i), o.push(n);
        return o;
      }
      __name(Wa, "Wa");
      function Ti(e) {
        return ln.toByteArray(Qa(e));
      }
      __name(Ti, "Ti");
      function cr(e, t, r, n) {
        let i;
        for (i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
        return i;
      }
      __name(cr, "cr");
      function de(e, t) {
        return e instanceof t || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === t.name;
      }
      __name(de, "de");
      function dn(e) {
        return e !== e;
      }
      __name(dn, "dn");
      var Ha = function() {
        let e = "0123456789abcdef", t = new Array(256);
        for (let r = 0; r < 16; ++r) {
          let n = r * 16;
          for (let i = 0; i < 16; ++i) t[n + i] = e[r] + e[i];
        }
        return t;
      }();
      function Re(e) {
        return typeof BigInt > "u" ? Ka : e;
      }
      __name(Re, "Re");
      function Ka() {
        throw new Error("BigInt not supported");
      }
      __name(Ka, "Ka");
    });
    var w2;
    var f = fe(() => {
      "use strict";
      w2 = Qe(Ci());
    });
    function tl() {
      return false;
    }
    __name(tl, "tl");
    function ji() {
      return { dev: 0, ino: 0, mode: 0, nlink: 0, uid: 0, gid: 0, rdev: 0, size: 0, blksize: 0, blocks: 0, atimeMs: 0, mtimeMs: 0, ctimeMs: 0, birthtimeMs: 0, atime: /* @__PURE__ */ new Date(), mtime: /* @__PURE__ */ new Date(), ctime: /* @__PURE__ */ new Date(), birthtime: /* @__PURE__ */ new Date() };
    }
    __name(ji, "ji");
    function rl() {
      return ji();
    }
    __name(rl, "rl");
    function nl() {
      return [];
    }
    __name(nl, "nl");
    function il(e) {
      e(null, []);
    }
    __name(il, "il");
    function ol() {
      return "";
    }
    __name(ol, "ol");
    function sl() {
      return "";
    }
    __name(sl, "sl");
    function al() {
    }
    __name(al, "al");
    function ll() {
    }
    __name(ll, "ll");
    function ul() {
    }
    __name(ul, "ul");
    function cl() {
    }
    __name(cl, "cl");
    function pl() {
    }
    __name(pl, "pl");
    function ml() {
    }
    __name(ml, "ml");
    var fl;
    var dl;
    var Vi;
    var Gi = fe(() => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      fl = {}, dl = { existsSync: tl, lstatSync: ji, statSync: rl, readdirSync: nl, readdir: il, readlinkSync: ol, realpathSync: sl, chmodSync: al, renameSync: ll, mkdirSync: ul, rmdirSync: cl, rmSync: pl, unlinkSync: ml, promises: fl }, Vi = dl;
    });
    function gl(...e) {
      return e.join("/");
    }
    __name(gl, "gl");
    function hl(...e) {
      return e.join("/");
    }
    __name(hl, "hl");
    function yl(e) {
      let t = Qi(e), r = Ji(e), [n, i] = t.split(".");
      return { root: "/", dir: r, base: t, ext: i, name: n };
    }
    __name(yl, "yl");
    function Qi(e) {
      let t = e.split("/");
      return t[t.length - 1];
    }
    __name(Qi, "Qi");
    function Ji(e) {
      return e.split("/").slice(0, -1).join("/");
    }
    __name(Ji, "Ji");
    var Wi;
    var wl;
    var El;
    var dr;
    var Hi = fe(() => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      Wi = "/", wl = { sep: Wi }, El = { basename: Qi, dirname: Ji, join: hl, parse: yl, posix: wl, resolve: gl, sep: Wi }, dr = El;
    });
    var Ki = Fe((cf, bl) => {
      bl.exports = { name: "@prisma/internals", version: "6.8.2", description: "This package is intended for Prisma's internal use", main: "dist/index.js", types: "dist/index.d.ts", repository: { type: "git", url: "https://github.com/prisma/prisma.git", directory: "packages/internals" }, homepage: "https://www.prisma.io", author: "Tim Suchanek <suchanek@prisma.io>", bugs: "https://github.com/prisma/prisma/issues", license: "Apache-2.0", scripts: { dev: "DEV=true tsx helpers/build.ts", build: "tsx helpers/build.ts", test: "dotenv -e ../../.db.env -- jest --silent", prepublishOnly: "pnpm run build" }, files: ["README.md", "dist", "!**/libquery_engine*", "!dist/get-generators/engines/*", "scripts"], devDependencies: { "@babel/helper-validator-identifier": "7.25.9", "@opentelemetry/api": "1.9.0", "@swc/core": "1.11.5", "@swc/jest": "0.2.37", "@types/babel__helper-validator-identifier": "7.15.2", "@types/jest": "29.5.14", "@types/node": "18.19.76", "@types/resolve": "1.20.6", archiver: "6.0.2", "checkpoint-client": "1.1.33", "cli-truncate": "4.0.0", dotenv: "16.5.0", esbuild: "0.25.1", "escape-string-regexp": "5.0.0", execa: "5.1.1", "fast-glob": "3.3.3", "find-up": "7.0.0", "fp-ts": "2.16.9", "fs-extra": "11.3.0", "fs-jetpack": "5.1.0", "global-dirs": "4.0.0", globby: "11.1.0", "identifier-regex": "1.0.0", "indent-string": "4.0.0", "is-windows": "1.0.2", "is-wsl": "3.1.0", jest: "29.7.0", "jest-junit": "16.0.0", kleur: "4.1.5", "mock-stdin": "1.0.0", "new-github-issue-url": "0.2.1", "node-fetch": "3.3.2", "npm-packlist": "5.1.3", open: "7.4.2", "p-map": "4.0.0", "read-package-up": "11.0.0", resolve: "1.22.10", "string-width": "7.2.0", "strip-ansi": "6.0.1", "strip-indent": "4.0.0", "temp-dir": "2.0.0", tempy: "1.0.1", "terminal-link": "4.0.0", tmp: "0.2.3", "ts-node": "10.9.2", "ts-pattern": "5.6.2", "ts-toolbelt": "9.6.0", typescript: "5.4.5", yarn: "1.22.22" }, dependencies: { "@prisma/config": "workspace:*", "@prisma/debug": "workspace:*", "@prisma/dmmf": "workspace:*", "@prisma/driver-adapter-utils": "workspace:*", "@prisma/engines": "workspace:*", "@prisma/fetch-engine": "workspace:*", "@prisma/generator": "workspace:*", "@prisma/generator-helper": "workspace:*", "@prisma/get-platform": "workspace:*", "@prisma/prisma-schema-wasm": "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", "@prisma/schema-engine-wasm": "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", "@prisma/schema-files-loader": "workspace:*", arg: "5.0.2", prompts: "2.4.2" }, peerDependencies: { typescript: ">=5.1.0" }, peerDependenciesMeta: { typescript: { optional: true } }, sideEffects: false };
    });
    var Zi = Fe((kf, Yi) => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      Yi.exports = (e, t = 1, r) => {
        if (r = { indent: " ", includeEmptyLines: false, ...r }, typeof e != "string") throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);
        if (typeof t != "number") throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof t}\``);
        if (typeof r.indent != "string") throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof r.indent}\``);
        if (t === 0) return e;
        let n = r.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return e.replace(n, r.indent.repeat(t));
      };
    });
    var to = Fe(($f, eo) => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      eo.exports = ({ onlyFirst: e = false } = {}) => {
        let t = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(t, e ? void 0 : "g");
      };
    });
    var no = Fe((Wf, ro) => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      var Sl = to();
      ro.exports = (e) => typeof e == "string" ? e.replace(Sl(), "") : e;
    });
    var In = Fe((Ny, vo) => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      vo.exports = /* @__PURE__ */ function() {
        function e(t, r, n, i, o) {
          return t < r || n < r ? t > n ? n + 1 : t + 1 : i === o ? r : r + 1;
        }
        __name(e, "e");
        return function(t, r) {
          if (t === r) return 0;
          if (t.length > r.length) {
            var n = t;
            t = r, r = n;
          }
          for (var i = t.length, o = r.length; i > 0 && t.charCodeAt(i - 1) === r.charCodeAt(o - 1); ) i--, o--;
          for (var s = 0; s < i && t.charCodeAt(s) === r.charCodeAt(s); ) s++;
          if (i -= s, o -= s, i === 0 || o < 3) return o;
          var a = 0, l, d, g, h, v, S, A2, R, D, M, B, k, F2 = [];
          for (l = 0; l < i; l++) F2.push(l + 1), F2.push(t.charCodeAt(s + l));
          for (var ae = F2.length - 1; a < o - 3; ) for (D = r.charCodeAt(s + (d = a)), M = r.charCodeAt(s + (g = a + 1)), B = r.charCodeAt(s + (h = a + 2)), k = r.charCodeAt(s + (v = a + 3)), S = a += 4, l = 0; l < ae; l += 2) A2 = F2[l], R = F2[l + 1], d = e(A2, d, g, D, R), g = e(d, g, h, M, R), h = e(g, h, v, B, R), S = e(h, v, S, k, R), F2[l] = S, v = h, h = g, g = d, d = A2;
          for (; a < o; ) for (D = r.charCodeAt(s + (d = a)), S = ++a, l = 0; l < ae; l += 2) A2 = F2[l], F2[l] = S = e(A2, d, S, D, F2[l + 1]), d = A2;
          return S;
        };
      }();
    });
    var So = fe(() => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
    });
    var ko = fe(() => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
    });
    var Xo = Fe((n1, dc) => {
      dc.exports = { name: "@prisma/engines-version", version: "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", main: "index.js", types: "index.d.ts", license: "Apache-2.0", author: "Tim Suchanek <suchanek@prisma.io>", prisma: { enginesVersion: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e" }, repository: { type: "git", url: "https://github.com/prisma/engines-wrapper.git", directory: "packages/engines-version" }, devDependencies: { "@types/node": "18.19.76", typescript: "4.9.5" }, files: ["index.js", "index.d.ts"], scripts: { build: "tsc -d" } };
    });
    var Vr;
    var es = fe(() => {
      "use strict";
      f();
      u();
      c();
      p();
      m2();
      Vr = class {
        static {
          __name(this, "Vr");
        }
        events = {};
        on(t, r) {
          return this.events[t] || (this.events[t] = []), this.events[t].push(r), this;
        }
        emit(t, ...r) {
          return this.events[t] ? (this.events[t].forEach((n) => {
            n(...r);
          }), true) : false;
        }
      };
    });
    var xp = {};
    Pt(xp, { DMMF: /* @__PURE__ */ __name(() => Ot, "DMMF"), Debug: /* @__PURE__ */ __name(() => K, "Debug"), Decimal: /* @__PURE__ */ __name(() => pe, "Decimal"), Extensions: /* @__PURE__ */ __name(() => gn, "Extensions"), MetricsClient: /* @__PURE__ */ __name(() => pt, "MetricsClient"), PrismaClientInitializationError: /* @__PURE__ */ __name(() => Q, "PrismaClientInitializationError"), PrismaClientKnownRequestError: /* @__PURE__ */ __name(() => re, "PrismaClientKnownRequestError"), PrismaClientRustPanicError: /* @__PURE__ */ __name(() => ve, "PrismaClientRustPanicError"), PrismaClientUnknownRequestError: /* @__PURE__ */ __name(() => ne, "PrismaClientUnknownRequestError"), PrismaClientValidationError: /* @__PURE__ */ __name(() => Z, "PrismaClientValidationError"), Public: /* @__PURE__ */ __name(() => hn, "Public"), Sql: /* @__PURE__ */ __name(() => oe, "Sql"), createParam: /* @__PURE__ */ __name(() => Qo, "createParam"), defineDmmfProperty: /* @__PURE__ */ __name(() => Yo, "defineDmmfProperty"), deserializeJsonResponse: /* @__PURE__ */ __name(() => tt, "deserializeJsonResponse"), deserializeRawResult: /* @__PURE__ */ __name(() => rn, "deserializeRawResult"), dmmfToRuntimeDataModel: /* @__PURE__ */ __name(() => Po, "dmmfToRuntimeDataModel"), empty: /* @__PURE__ */ __name(() => rs, "empty"), getPrismaClient: /* @__PURE__ */ __name(() => da, "getPrismaClient"), getRuntime: /* @__PURE__ */ __name(() => zr, "getRuntime"), join: /* @__PURE__ */ __name(() => ts, "join"), makeStrictEnum: /* @__PURE__ */ __name(() => ga, "makeStrictEnum"), makeTypedQueryFactory: /* @__PURE__ */ __name(() => Zo, "makeTypedQueryFactory"), objectEnumValues: /* @__PURE__ */ __name(() => Mr, "objectEnumValues"), raw: /* @__PURE__ */ __name(() => Un, "raw"), serializeJsonQuery: /* @__PURE__ */ __name(() => qr, "serializeJsonQuery"), skip: /* @__PURE__ */ __name(() => Ur, "skip"), sqltag: /* @__PURE__ */ __name(() => qn, "sqltag"), warnEnvConflicts: /* @__PURE__ */ __name(() => void 0, "warnEnvConflicts"), warnOnce: /* @__PURE__ */ __name(() => Rt, "warnOnce") });
    module.exports = Pa(xp);
    f();
    u();
    c();
    p();
    m2();
    var gn = {};
    Pt(gn, { defineExtension: /* @__PURE__ */ __name(() => Ai, "defineExtension"), getExtensionContext: /* @__PURE__ */ __name(() => Ri, "getExtensionContext") });
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function Ai(e) {
      return typeof e == "function" ? e : (t) => t.$extends(e);
    }
    __name(Ai, "Ai");
    f();
    u();
    c();
    p();
    m2();
    function Ri(e) {
      return e;
    }
    __name(Ri, "Ri");
    var hn = {};
    Pt(hn, { validator: /* @__PURE__ */ __name(() => Si, "validator") });
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function Si(...e) {
      return (t) => t;
    }
    __name(Si, "Si");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var yn;
    var ki;
    var Ii;
    var Oi;
    var Di = true;
    typeof y2 < "u" && ({ FORCE_COLOR: yn, NODE_DISABLE_COLORS: ki, NO_COLOR: Ii, TERM: Oi } = y2.env || {}, Di = y2.stdout && y2.stdout.isTTY);
    var za = { enabled: !ki && Ii == null && Oi !== "dumb" && (yn != null && yn !== "0" || Di) };
    function j(e, t) {
      let r = new RegExp(`\\x1b\\[${t}m`, "g"), n = `\x1B[${e}m`, i = `\x1B[${t}m`;
      return function(o) {
        return !za.enabled || o == null ? o : n + (~("" + o).indexOf(i) ? o.replace(r, i + n) : o) + i;
      };
    }
    __name(j, "j");
    var mm = j(0, 0);
    var pr = j(1, 22);
    var mr = j(2, 22);
    var fm = j(3, 23);
    var Mi = j(4, 24);
    var dm = j(7, 27);
    var gm = j(8, 28);
    var hm = j(9, 29);
    var ym = j(30, 39);
    var ze = j(31, 39);
    var _i = j(32, 39);
    var Ni = j(33, 39);
    var Fi = j(34, 39);
    var wm = j(35, 39);
    var Li = j(36, 39);
    var Em = j(37, 39);
    var Bi = j(90, 39);
    var bm = j(90, 39);
    var xm = j(40, 49);
    var Pm = j(41, 49);
    var vm = j(42, 49);
    var Tm = j(43, 49);
    var Cm = j(44, 49);
    var Am = j(45, 49);
    var Rm = j(46, 49);
    var Sm = j(47, 49);
    f();
    u();
    c();
    p();
    m2();
    var Ya = 100;
    var Ui = ["green", "yellow", "blue", "magenta", "cyan", "red"];
    var fr = [];
    var qi = Date.now();
    var Za = 0;
    var wn = typeof y2 < "u" ? y2.env : {};
    globalThis.DEBUG ??= wn.DEBUG ?? "";
    globalThis.DEBUG_COLORS ??= wn.DEBUG_COLORS ? wn.DEBUG_COLORS === "true" : true;
    var Tt = { enable(e) {
      typeof e == "string" && (globalThis.DEBUG = e);
    }, disable() {
      let e = globalThis.DEBUG;
      return globalThis.DEBUG = "", e;
    }, enabled(e) {
      let t = globalThis.DEBUG.split(",").map((i) => i.replace(/[.+?^${}()|[\]\\]/g, "\\$&")), r = t.some((i) => i === "" || i[0] === "-" ? false : e.match(RegExp(i.split("*").join(".*") + "$"))), n = t.some((i) => i === "" || i[0] !== "-" ? false : e.match(RegExp(i.slice(1).split("*").join(".*") + "$")));
      return r && !n;
    }, log: /* @__PURE__ */ __name((...e) => {
      let [t, r, ...n] = e;
      (console.warn ?? console.log)(`${t} ${r}`, ...n);
    }, "log"), formatters: {} };
    function Xa(e) {
      let t = { color: Ui[Za++ % Ui.length], enabled: Tt.enabled(e), namespace: e, log: Tt.log, extend: /* @__PURE__ */ __name(() => {
      }, "extend") }, r = /* @__PURE__ */ __name((...n) => {
        let { enabled: i, namespace: o, color: s, log: a } = t;
        if (n.length !== 0 && fr.push([o, ...n]), fr.length > Ya && fr.shift(), Tt.enabled(o) || i) {
          let l = n.map((g) => typeof g == "string" ? g : el(g)), d = `+${Date.now() - qi}ms`;
          qi = Date.now(), a(o, ...l, d);
        }
      }, "r");
      return new Proxy(r, { get: /* @__PURE__ */ __name((n, i) => t[i], "get"), set: /* @__PURE__ */ __name((n, i, o) => t[i] = o, "set") });
    }
    __name(Xa, "Xa");
    var K = new Proxy(Xa, { get: /* @__PURE__ */ __name((e, t) => Tt[t], "get"), set: /* @__PURE__ */ __name((e, t, r) => Tt[t] = r, "set") });
    function el(e, t = 2) {
      let r = /* @__PURE__ */ new Set();
      return JSON.stringify(e, (n, i) => {
        if (typeof i == "object" && i !== null) {
          if (r.has(i)) return "[Circular *]";
          r.add(i);
        } else if (typeof i == "bigint") return i.toString();
        return i;
      }, t);
    }
    __name(el, "el");
    function $i() {
      fr.length = 0;
    }
    __name($i, "$i");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var xl = Ki();
    var En = xl.version;
    f();
    u();
    c();
    p();
    m2();
    function Ye(e) {
      let t = Pl();
      return t || (e?.config.engineType === "library" ? "library" : e?.config.engineType === "binary" ? "binary" : e?.config.engineType === "client" ? "client" : vl(e));
    }
    __name(Ye, "Ye");
    function Pl() {
      let e = y2.env.PRISMA_CLIENT_ENGINE_TYPE;
      return e === "library" ? "library" : e === "binary" ? "binary" : e === "client" ? "client" : void 0;
    }
    __name(Pl, "Pl");
    function vl(e) {
      return e?.previewFeatures.includes("queryCompiler") ? "client" : "library";
    }
    __name(vl, "vl");
    f();
    u();
    c();
    p();
    m2();
    var zi = "prisma+postgres";
    var gr = `${zi}:`;
    function hr(e) {
      return e?.toString().startsWith(`${gr}//`) ?? false;
    }
    __name(hr, "hr");
    function bn(e) {
      if (!hr(e)) return false;
      let { host: t } = new URL(e);
      return t.includes("localhost") || t.includes("127.0.0.1");
    }
    __name(bn, "bn");
    var At = {};
    Pt(At, { error: /* @__PURE__ */ __name(() => Al, "error"), info: /* @__PURE__ */ __name(() => Cl, "info"), log: /* @__PURE__ */ __name(() => Tl, "log"), query: /* @__PURE__ */ __name(() => Rl, "query"), should: /* @__PURE__ */ __name(() => Xi, "should"), tags: /* @__PURE__ */ __name(() => Ct, "tags"), warn: /* @__PURE__ */ __name(() => xn, "warn") });
    f();
    u();
    c();
    p();
    m2();
    var Ct = { error: ze("prisma:error"), warn: Ni("prisma:warn"), info: Li("prisma:info"), query: Fi("prisma:query") };
    var Xi = { warn: /* @__PURE__ */ __name(() => !y2.env.PRISMA_DISABLE_WARNINGS, "warn") };
    function Tl(...e) {
      console.log(...e);
    }
    __name(Tl, "Tl");
    function xn(e, ...t) {
      Xi.warn() && console.warn(`${Ct.warn} ${e}`, ...t);
    }
    __name(xn, "xn");
    function Cl(e, ...t) {
      console.info(`${Ct.info} ${e}`, ...t);
    }
    __name(Cl, "Cl");
    function Al(e, ...t) {
      console.error(`${Ct.error} ${e}`, ...t);
    }
    __name(Al, "Al");
    function Rl(e, ...t) {
      console.log(`${Ct.query} ${e}`, ...t);
    }
    __name(Rl, "Rl");
    f();
    u();
    c();
    p();
    m2();
    function Pe(e, t) {
      throw new Error(t);
    }
    __name(Pe, "Pe");
    f();
    u();
    c();
    p();
    m2();
    function Pn(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
    __name(Pn, "Pn");
    f();
    u();
    c();
    p();
    m2();
    function Ze(e, t) {
      let r = {};
      for (let n of Object.keys(e)) r[n] = t(e[n], n);
      return r;
    }
    __name(Ze, "Ze");
    f();
    u();
    c();
    p();
    m2();
    function vn(e, t) {
      if (e.length === 0) return;
      let r = e[0];
      for (let n = 1; n < e.length; n++) t(r, e[n]) < 0 && (r = e[n]);
      return r;
    }
    __name(vn, "vn");
    f();
    u();
    c();
    p();
    m2();
    function N(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(N, "N");
    f();
    u();
    c();
    p();
    m2();
    var io = /* @__PURE__ */ new Set();
    var Rt = /* @__PURE__ */ __name((e, t, ...r) => {
      io.has(e) || (io.add(e), xn(t, ...r));
    }, "Rt");
    var Q = class e extends Error {
      static {
        __name(this, "e");
      }
      clientVersion;
      errorCode;
      retryable;
      constructor(t, r, n) {
        super(t), this.name = "PrismaClientInitializationError", this.clientVersion = r, this.errorCode = n, Error.captureStackTrace(e);
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientInitializationError";
      }
    };
    N(Q, "PrismaClientInitializationError");
    f();
    u();
    c();
    p();
    m2();
    var re = class extends Error {
      static {
        __name(this, "re");
      }
      code;
      meta;
      clientVersion;
      batchRequestIdx;
      constructor(t, { code: r, clientVersion: n, meta: i, batchRequestIdx: o }) {
        super(t), this.name = "PrismaClientKnownRequestError", this.code = r, this.clientVersion = n, this.meta = i, Object.defineProperty(this, "batchRequestIdx", { value: o, enumerable: false, writable: true });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientKnownRequestError";
      }
    };
    N(re, "PrismaClientKnownRequestError");
    f();
    u();
    c();
    p();
    m2();
    var ve = class extends Error {
      static {
        __name(this, "ve");
      }
      clientVersion;
      constructor(t, r) {
        super(t), this.name = "PrismaClientRustPanicError", this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientRustPanicError";
      }
    };
    N(ve, "PrismaClientRustPanicError");
    f();
    u();
    c();
    p();
    m2();
    var ne = class extends Error {
      static {
        __name(this, "ne");
      }
      clientVersion;
      batchRequestIdx;
      constructor(t, { clientVersion: r, batchRequestIdx: n }) {
        super(t), this.name = "PrismaClientUnknownRequestError", this.clientVersion = r, Object.defineProperty(this, "batchRequestIdx", { value: n, writable: true, enumerable: false });
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientUnknownRequestError";
      }
    };
    N(ne, "PrismaClientUnknownRequestError");
    f();
    u();
    c();
    p();
    m2();
    var Z = class extends Error {
      static {
        __name(this, "Z");
      }
      name = "PrismaClientValidationError";
      clientVersion;
      constructor(t, { clientVersion: r }) {
        super(t), this.clientVersion = r;
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientValidationError";
      }
    };
    N(Z, "PrismaClientValidationError");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Xe = 9e15;
    var Oe = 1e9;
    var Tn = "0123456789abcdef";
    var Er = "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058";
    var br = "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789";
    var Cn = { precision: 20, rounding: 4, modulo: 1, toExpNeg: -7, toExpPos: 21, minE: -Xe, maxE: Xe, crypto: false };
    var uo;
    var Te;
    var _ = true;
    var Pr = "[DecimalError] ";
    var Ie = Pr + "Invalid argument: ";
    var co = Pr + "Precision limit exceeded";
    var po = Pr + "crypto unavailable";
    var mo = "[object Decimal]";
    var X = Math.floor;
    var J = Math.pow;
    var kl = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i;
    var Il = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i;
    var Ol = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i;
    var fo = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
    var ce = 1e7;
    var O = 7;
    var Dl = 9007199254740991;
    var Ml = Er.length - 1;
    var An = br.length - 1;
    var C = { toStringTag: mo };
    C.absoluteValue = C.abs = function() {
      var e = new this.constructor(this);
      return e.s < 0 && (e.s = 1), I2(e);
    };
    C.ceil = function() {
      return I2(new this.constructor(this), this.e + 1, 2);
    };
    C.clampedTo = C.clamp = function(e, t) {
      var r, n = this, i = n.constructor;
      if (e = new i(e), t = new i(t), !e.s || !t.s) return new i(NaN);
      if (e.gt(t)) throw Error(Ie + t);
      return r = n.cmp(e), r < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
    };
    C.comparedTo = C.cmp = function(e) {
      var t, r, n, i, o = this, s = o.d, a = (e = new o.constructor(e)).d, l = o.s, d = e.s;
      if (!s || !a) return !l || !d ? NaN : l !== d ? l : s === a ? 0 : !s ^ l < 0 ? 1 : -1;
      if (!s[0] || !a[0]) return s[0] ? l : a[0] ? -d : 0;
      if (l !== d) return l;
      if (o.e !== e.e) return o.e > e.e ^ l < 0 ? 1 : -1;
      for (n = s.length, i = a.length, t = 0, r = n < i ? n : i; t < r; ++t) if (s[t] !== a[t]) return s[t] > a[t] ^ l < 0 ? 1 : -1;
      return n === i ? 0 : n > i ^ l < 0 ? 1 : -1;
    };
    C.cosine = C.cos = function() {
      var e, t, r = this, n = r.constructor;
      return r.d ? r.d[0] ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + O, n.rounding = 1, r = _l(n, Eo(n, r)), n.precision = e, n.rounding = t, I2(Te == 2 || Te == 3 ? r.neg() : r, e, t, true)) : new n(1) : new n(NaN);
    };
    C.cubeRoot = C.cbrt = function() {
      var e, t, r, n, i, o, s, a, l, d, g = this, h = g.constructor;
      if (!g.isFinite() || g.isZero()) return new h(g);
      for (_ = false, o = g.s * J(g.s * g, 1 / 3), !o || Math.abs(o) == 1 / 0 ? (r = z(g.d), e = g.e, (o = (e - r.length + 1) % 3) && (r += o == 1 || o == -2 ? "0" : "00"), o = J(r, 1 / 3), e = X((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2)), o == 1 / 0 ? r = "5e" + e : (r = o.toExponential(), r = r.slice(0, r.indexOf("e") + 1) + e), n = new h(r), n.s = g.s) : n = new h(o.toString()), s = (e = h.precision) + 3; ; ) if (a = n, l = a.times(a).times(a), d = l.plus(g), n = q(d.plus(g).times(a), d.plus(l), s + 2, 1), z(a.d).slice(0, s) === (r = z(n.d)).slice(0, s)) if (r = r.slice(s - 3, s + 1), r == "9999" || !i && r == "4999") {
        if (!i && (I2(a, e + 1, 0), a.times(a).times(a).eq(g))) {
          n = a;
          break;
        }
        s += 4, i = 1;
      } else {
        (!+r || !+r.slice(1) && r.charAt(0) == "5") && (I2(n, e + 1, 1), t = !n.times(n).times(n).eq(g));
        break;
      }
      return _ = true, I2(n, e, h.rounding, t);
    };
    C.decimalPlaces = C.dp = function() {
      var e, t = this.d, r = NaN;
      if (t) {
        if (e = t.length - 1, r = (e - X(this.e / O)) * O, e = t[e], e) for (; e % 10 == 0; e /= 10) r--;
        r < 0 && (r = 0);
      }
      return r;
    };
    C.dividedBy = C.div = function(e) {
      return q(this, new this.constructor(e));
    };
    C.dividedToIntegerBy = C.divToInt = function(e) {
      var t = this, r = t.constructor;
      return I2(q(t, new r(e), 0, 1, 1), r.precision, r.rounding);
    };
    C.equals = C.eq = function(e) {
      return this.cmp(e) === 0;
    };
    C.floor = function() {
      return I2(new this.constructor(this), this.e + 1, 3);
    };
    C.greaterThan = C.gt = function(e) {
      return this.cmp(e) > 0;
    };
    C.greaterThanOrEqualTo = C.gte = function(e) {
      var t = this.cmp(e);
      return t == 1 || t === 0;
    };
    C.hyperbolicCosine = C.cosh = function() {
      var e, t, r, n, i, o = this, s = o.constructor, a = new s(1);
      if (!o.isFinite()) return new s(o.s ? 1 / 0 : NaN);
      if (o.isZero()) return a;
      r = s.precision, n = s.rounding, s.precision = r + Math.max(o.e, o.sd()) + 4, s.rounding = 1, i = o.d.length, i < 32 ? (e = Math.ceil(i / 3), t = (1 / Tr(4, e)).toString()) : (e = 16, t = "2.3283064365386962890625e-10"), o = et(s, 1, o.times(t), new s(1), true);
      for (var l, d = e, g = new s(8); d--; ) l = o.times(o), o = a.minus(l.times(g.minus(l.times(g))));
      return I2(o, s.precision = r, s.rounding = n, true);
    };
    C.hyperbolicSine = C.sinh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      if (!i.isFinite() || i.isZero()) return new o(i);
      if (t = o.precision, r = o.rounding, o.precision = t + Math.max(i.e, i.sd()) + 4, o.rounding = 1, n = i.d.length, n < 3) i = et(o, 2, i, i, true);
      else {
        e = 1.4 * Math.sqrt(n), e = e > 16 ? 16 : e | 0, i = i.times(1 / Tr(5, e)), i = et(o, 2, i, i, true);
        for (var s, a = new o(5), l = new o(16), d = new o(20); e--; ) s = i.times(i), i = i.times(a.plus(s.times(l.times(s).plus(d))));
      }
      return o.precision = t, o.rounding = r, I2(i, t, r, true);
    };
    C.hyperbolicTangent = C.tanh = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 7, n.rounding = 1, q(r.sinh(), r.cosh(), n.precision = e, n.rounding = t)) : new n(r.s);
    };
    C.inverseCosine = C.acos = function() {
      var e = this, t = e.constructor, r = e.abs().cmp(1), n = t.precision, i = t.rounding;
      return r !== -1 ? r === 0 ? e.isNeg() ? ge(t, n, i) : new t(0) : new t(NaN) : e.isZero() ? ge(t, n + 4, i).times(0.5) : (t.precision = n + 6, t.rounding = 1, e = new t(1).minus(e).div(e.plus(1)).sqrt().atan(), t.precision = n, t.rounding = i, e.times(2));
    };
    C.inverseHyperbolicCosine = C.acosh = function() {
      var e, t, r = this, n = r.constructor;
      return r.lte(1) ? new n(r.eq(1) ? 0 : NaN) : r.isFinite() ? (e = n.precision, t = n.rounding, n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4, n.rounding = 1, _ = false, r = r.times(r).minus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln()) : new n(r);
    };
    C.inverseHyperbolicSine = C.asinh = function() {
      var e, t, r = this, n = r.constructor;
      return !r.isFinite() || r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6, n.rounding = 1, _ = false, r = r.times(r).plus(1).sqrt().plus(r), _ = true, n.precision = e, n.rounding = t, r.ln());
    };
    C.inverseHyperbolicTangent = C.atanh = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isFinite() ? i.e >= 0 ? new o(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN) : (e = o.precision, t = o.rounding, n = i.sd(), Math.max(n, e) < 2 * -i.e - 1 ? I2(new o(i), e, t, true) : (o.precision = r = n - i.e, i = q(i.plus(1), new o(1).minus(i), r + e, 1), o.precision = e + 4, o.rounding = 1, i = i.ln(), o.precision = e, o.rounding = t, i.times(0.5))) : new o(NaN);
    };
    C.inverseSine = C.asin = function() {
      var e, t, r, n, i = this, o = i.constructor;
      return i.isZero() ? new o(i) : (t = i.abs().cmp(1), r = o.precision, n = o.rounding, t !== -1 ? t === 0 ? (e = ge(o, r + 4, n).times(0.5), e.s = i.s, e) : new o(NaN) : (o.precision = r + 6, o.rounding = 1, i = i.div(new o(1).minus(i.times(i)).sqrt().plus(1)).atan(), o.precision = r, o.rounding = n, i.times(2)));
    };
    C.inverseTangent = C.atan = function() {
      var e, t, r, n, i, o, s, a, l, d = this, g = d.constructor, h = g.precision, v = g.rounding;
      if (d.isFinite()) {
        if (d.isZero()) return new g(d);
        if (d.abs().eq(1) && h + 4 <= An) return s = ge(g, h + 4, v).times(0.25), s.s = d.s, s;
      } else {
        if (!d.s) return new g(NaN);
        if (h + 4 <= An) return s = ge(g, h + 4, v).times(0.5), s.s = d.s, s;
      }
      for (g.precision = a = h + 10, g.rounding = 1, r = Math.min(28, a / O + 2 | 0), e = r; e; --e) d = d.div(d.times(d).plus(1).sqrt().plus(1));
      for (_ = false, t = Math.ceil(a / O), n = 1, l = d.times(d), s = new g(d), i = d; e !== -1; ) if (i = i.times(l), o = s.minus(i.div(n += 2)), i = i.times(l), s = o.plus(i.div(n += 2)), s.d[t] !== void 0) for (e = t; s.d[e] === o.d[e] && e--; ) ;
      return r && (s = s.times(2 << r - 1)), _ = true, I2(s, g.precision = h, g.rounding = v, true);
    };
    C.isFinite = function() {
      return !!this.d;
    };
    C.isInteger = C.isInt = function() {
      return !!this.d && X(this.e / O) > this.d.length - 2;
    };
    C.isNaN = function() {
      return !this.s;
    };
    C.isNegative = C.isNeg = function() {
      return this.s < 0;
    };
    C.isPositive = C.isPos = function() {
      return this.s > 0;
    };
    C.isZero = function() {
      return !!this.d && this.d[0] === 0;
    };
    C.lessThan = C.lt = function(e) {
      return this.cmp(e) < 0;
    };
    C.lessThanOrEqualTo = C.lte = function(e) {
      return this.cmp(e) < 1;
    };
    C.logarithm = C.log = function(e) {
      var t, r, n, i, o, s, a, l, d = this, g = d.constructor, h = g.precision, v = g.rounding, S = 5;
      if (e == null) e = new g(10), t = true;
      else {
        if (e = new g(e), r = e.d, e.s < 0 || !r || !r[0] || e.eq(1)) return new g(NaN);
        t = e.eq(10);
      }
      if (r = d.d, d.s < 0 || !r || !r[0] || d.eq(1)) return new g(r && !r[0] ? -1 / 0 : d.s != 1 ? NaN : r ? 0 : 1 / 0);
      if (t) if (r.length > 1) o = true;
      else {
        for (i = r[0]; i % 10 === 0; ) i /= 10;
        o = i !== 1;
      }
      if (_ = false, a = h + S, s = ke(d, a), n = t ? xr(g, a + 10) : ke(e, a), l = q(s, n, a, 1), St(l.d, i = h, v)) do
        if (a += 10, s = ke(d, a), n = t ? xr(g, a + 10) : ke(e, a), l = q(s, n, a, 1), !o) {
          +z(l.d).slice(i + 1, i + 15) + 1 == 1e14 && (l = I2(l, h + 1, 0));
          break;
        }
      while (St(l.d, i += 10, v));
      return _ = true, I2(l, h, v);
    };
    C.minus = C.sub = function(e) {
      var t, r, n, i, o, s, a, l, d, g, h, v, S = this, A2 = S.constructor;
      if (e = new A2(e), !S.d || !e.d) return !S.s || !e.s ? e = new A2(NaN) : S.d ? e.s = -e.s : e = new A2(e.d || S.s !== e.s ? S : NaN), e;
      if (S.s != e.s) return e.s = -e.s, S.plus(e);
      if (d = S.d, v = e.d, a = A2.precision, l = A2.rounding, !d[0] || !v[0]) {
        if (v[0]) e.s = -e.s;
        else if (d[0]) e = new A2(S);
        else return new A2(l === 3 ? -0 : 0);
        return _ ? I2(e, a, l) : e;
      }
      if (r = X(e.e / O), g = X(S.e / O), d = d.slice(), o = g - r, o) {
        for (h = o < 0, h ? (t = d, o = -o, s = v.length) : (t = v, r = g, s = d.length), n = Math.max(Math.ceil(a / O), s) + 2, o > n && (o = n, t.length = 1), t.reverse(), n = o; n--; ) t.push(0);
        t.reverse();
      } else {
        for (n = d.length, s = v.length, h = n < s, h && (s = n), n = 0; n < s; n++) if (d[n] != v[n]) {
          h = d[n] < v[n];
          break;
        }
        o = 0;
      }
      for (h && (t = d, d = v, v = t, e.s = -e.s), s = d.length, n = v.length - s; n > 0; --n) d[s++] = 0;
      for (n = v.length; n > o; ) {
        if (d[--n] < v[n]) {
          for (i = n; i && d[--i] === 0; ) d[i] = ce - 1;
          --d[i], d[n] += ce;
        }
        d[n] -= v[n];
      }
      for (; d[--s] === 0; ) d.pop();
      for (; d[0] === 0; d.shift()) --r;
      return d[0] ? (e.d = d, e.e = vr(d, r), _ ? I2(e, a, l) : e) : new A2(l === 3 ? -0 : 0);
    };
    C.modulo = C.mod = function(e) {
      var t, r = this, n = r.constructor;
      return e = new n(e), !r.d || !e.s || e.d && !e.d[0] ? new n(NaN) : !e.d || r.d && !r.d[0] ? I2(new n(r), n.precision, n.rounding) : (_ = false, n.modulo == 9 ? (t = q(r, e.abs(), 0, 3, 1), t.s *= e.s) : t = q(r, e, 0, n.modulo, 1), t = t.times(e), _ = true, r.minus(t));
    };
    C.naturalExponential = C.exp = function() {
      return Rn(this);
    };
    C.naturalLogarithm = C.ln = function() {
      return ke(this);
    };
    C.negated = C.neg = function() {
      var e = new this.constructor(this);
      return e.s = -e.s, I2(e);
    };
    C.plus = C.add = function(e) {
      var t, r, n, i, o, s, a, l, d, g, h = this, v = h.constructor;
      if (e = new v(e), !h.d || !e.d) return !h.s || !e.s ? e = new v(NaN) : h.d || (e = new v(e.d || h.s === e.s ? h : NaN)), e;
      if (h.s != e.s) return e.s = -e.s, h.minus(e);
      if (d = h.d, g = e.d, a = v.precision, l = v.rounding, !d[0] || !g[0]) return g[0] || (e = new v(h)), _ ? I2(e, a, l) : e;
      if (o = X(h.e / O), n = X(e.e / O), d = d.slice(), i = o - n, i) {
        for (i < 0 ? (r = d, i = -i, s = g.length) : (r = g, n = o, s = d.length), o = Math.ceil(a / O), s = o > s ? o + 1 : s + 1, i > s && (i = s, r.length = 1), r.reverse(); i--; ) r.push(0);
        r.reverse();
      }
      for (s = d.length, i = g.length, s - i < 0 && (i = s, r = g, g = d, d = r), t = 0; i; ) t = (d[--i] = d[i] + g[i] + t) / ce | 0, d[i] %= ce;
      for (t && (d.unshift(t), ++n), s = d.length; d[--s] == 0; ) d.pop();
      return e.d = d, e.e = vr(d, n), _ ? I2(e, a, l) : e;
    };
    C.precision = C.sd = function(e) {
      var t, r = this;
      if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(Ie + e);
      return r.d ? (t = go(r.d), e && r.e + 1 > t && (t = r.e + 1)) : t = NaN, t;
    };
    C.round = function() {
      var e = this, t = e.constructor;
      return I2(new t(e), e.e + 1, t.rounding);
    };
    C.sine = C.sin = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + Math.max(r.e, r.sd()) + O, n.rounding = 1, r = Fl(n, Eo(n, r)), n.precision = e, n.rounding = t, I2(Te > 2 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.squareRoot = C.sqrt = function() {
      var e, t, r, n, i, o, s = this, a = s.d, l = s.e, d = s.s, g = s.constructor;
      if (d !== 1 || !a || !a[0]) return new g(!d || d < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
      for (_ = false, d = Math.sqrt(+s), d == 0 || d == 1 / 0 ? (t = z(a), (t.length + l) % 2 == 0 && (t += "0"), d = Math.sqrt(t), l = X((l + 1) / 2) - (l < 0 || l % 2), d == 1 / 0 ? t = "5e" + l : (t = d.toExponential(), t = t.slice(0, t.indexOf("e") + 1) + l), n = new g(t)) : n = new g(d.toString()), r = (l = g.precision) + 3; ; ) if (o = n, n = o.plus(q(s, o, r + 2, 1)).times(0.5), z(o.d).slice(0, r) === (t = z(n.d)).slice(0, r)) if (t = t.slice(r - 3, r + 1), t == "9999" || !i && t == "4999") {
        if (!i && (I2(o, l + 1, 0), o.times(o).eq(s))) {
          n = o;
          break;
        }
        r += 4, i = 1;
      } else {
        (!+t || !+t.slice(1) && t.charAt(0) == "5") && (I2(n, l + 1, 1), e = !n.times(n).eq(s));
        break;
      }
      return _ = true, I2(n, l, g.rounding, e);
    };
    C.tangent = C.tan = function() {
      var e, t, r = this, n = r.constructor;
      return r.isFinite() ? r.isZero() ? new n(r) : (e = n.precision, t = n.rounding, n.precision = e + 10, n.rounding = 1, r = r.sin(), r.s = 1, r = q(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0), n.precision = e, n.rounding = t, I2(Te == 2 || Te == 4 ? r.neg() : r, e, t, true)) : new n(NaN);
    };
    C.times = C.mul = function(e) {
      var t, r, n, i, o, s, a, l, d, g = this, h = g.constructor, v = g.d, S = (e = new h(e)).d;
      if (e.s *= g.s, !v || !v[0] || !S || !S[0]) return new h(!e.s || v && !v[0] && !S || S && !S[0] && !v ? NaN : !v || !S ? e.s / 0 : e.s * 0);
      for (r = X(g.e / O) + X(e.e / O), l = v.length, d = S.length, l < d && (o = v, v = S, S = o, s = l, l = d, d = s), o = [], s = l + d, n = s; n--; ) o.push(0);
      for (n = d; --n >= 0; ) {
        for (t = 0, i = l + n; i > n; ) a = o[i] + S[n] * v[i - n - 1] + t, o[i--] = a % ce | 0, t = a / ce | 0;
        o[i] = (o[i] + t) % ce | 0;
      }
      for (; !o[--s]; ) o.pop();
      return t ? ++r : o.shift(), e.d = o, e.e = vr(o, r), _ ? I2(e, h.precision, h.rounding) : e;
    };
    C.toBinary = function(e, t) {
      return Sn(this, 2, e, t);
    };
    C.toDecimalPlaces = C.toDP = function(e, t) {
      var r = this, n = r.constructor;
      return r = new n(r), e === void 0 ? r : (ie(e, 0, Oe), t === void 0 ? t = n.rounding : ie(t, 0, 8), I2(r, e + r.e + 1, t));
    };
    C.toExponential = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = he(n, true) : (ie(e, 0, Oe), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = I2(new i(n), e + 1, t), r = he(n, true, e + 1)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toFixed = function(e, t) {
      var r, n, i = this, o = i.constructor;
      return e === void 0 ? r = he(i) : (ie(e, 0, Oe), t === void 0 ? t = o.rounding : ie(t, 0, 8), n = I2(new o(i), e + i.e + 1, t), r = he(n, false, e + n.e + 1)), i.isNeg() && !i.isZero() ? "-" + r : r;
    };
    C.toFraction = function(e) {
      var t, r, n, i, o, s, a, l, d, g, h, v, S = this, A2 = S.d, R = S.constructor;
      if (!A2) return new R(S);
      if (d = r = new R(1), n = l = new R(0), t = new R(n), o = t.e = go(A2) - S.e - 1, s = o % O, t.d[0] = J(10, s < 0 ? O + s : s), e == null) e = o > 0 ? t : d;
      else {
        if (a = new R(e), !a.isInt() || a.lt(d)) throw Error(Ie + a);
        e = a.gt(t) ? o > 0 ? t : d : a;
      }
      for (_ = false, a = new R(z(A2)), g = R.precision, R.precision = o = A2.length * O * 2; h = q(a, t, 0, 1, 1), i = r.plus(h.times(n)), i.cmp(e) != 1; ) r = n, n = i, i = d, d = l.plus(h.times(i)), l = i, i = t, t = a.minus(h.times(i)), a = i;
      return i = q(e.minus(r), n, 0, 1, 1), l = l.plus(i.times(d)), r = r.plus(i.times(n)), l.s = d.s = S.s, v = q(d, n, o, 1).minus(S).abs().cmp(q(l, r, o, 1).minus(S).abs()) < 1 ? [d, n] : [l, r], R.precision = g, _ = true, v;
    };
    C.toHexadecimal = C.toHex = function(e, t) {
      return Sn(this, 16, e, t);
    };
    C.toNearest = function(e, t) {
      var r = this, n = r.constructor;
      if (r = new n(r), e == null) {
        if (!r.d) return r;
        e = new n(1), t = n.rounding;
      } else {
        if (e = new n(e), t === void 0 ? t = n.rounding : ie(t, 0, 8), !r.d) return e.s ? r : e;
        if (!e.d) return e.s && (e.s = r.s), e;
      }
      return e.d[0] ? (_ = false, r = q(r, e, 0, t, 1).times(e), _ = true, I2(r)) : (e.s = r.s, r = e), r;
    };
    C.toNumber = function() {
      return +this;
    };
    C.toOctal = function(e, t) {
      return Sn(this, 8, e, t);
    };
    C.toPower = C.pow = function(e) {
      var t, r, n, i, o, s, a = this, l = a.constructor, d = +(e = new l(e));
      if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new l(J(+a, d));
      if (a = new l(a), a.eq(1)) return a;
      if (n = l.precision, o = l.rounding, e.eq(1)) return I2(a, n, o);
      if (t = X(e.e / O), t >= e.d.length - 1 && (r = d < 0 ? -d : d) <= Dl) return i = ho(l, a, r, n), e.s < 0 ? new l(1).div(i) : I2(i, n, o);
      if (s = a.s, s < 0) {
        if (t < e.d.length - 1) return new l(NaN);
        if ((e.d[t] & 1) == 0 && (s = 1), a.e == 0 && a.d[0] == 1 && a.d.length == 1) return a.s = s, a;
      }
      return r = J(+a, d), t = r == 0 || !isFinite(r) ? X(d * (Math.log("0." + z(a.d)) / Math.LN10 + a.e + 1)) : new l(r + "").e, t > l.maxE + 1 || t < l.minE - 1 ? new l(t > 0 ? s / 0 : 0) : (_ = false, l.rounding = a.s = 1, r = Math.min(12, (t + "").length), i = Rn(e.times(ke(a, n + r)), n), i.d && (i = I2(i, n + 5, 1), St(i.d, n, o) && (t = n + 10, i = I2(Rn(e.times(ke(a, t + r)), t), t + 5, 1), +z(i.d).slice(n + 1, n + 15) + 1 == 1e14 && (i = I2(i, n + 1, 0)))), i.s = s, _ = true, l.rounding = o, I2(i, n, o));
    };
    C.toPrecision = function(e, t) {
      var r, n = this, i = n.constructor;
      return e === void 0 ? r = he(n, n.e <= i.toExpNeg || n.e >= i.toExpPos) : (ie(e, 1, Oe), t === void 0 ? t = i.rounding : ie(t, 0, 8), n = I2(new i(n), e, t), r = he(n, e <= n.e || n.e <= i.toExpNeg, e)), n.isNeg() && !n.isZero() ? "-" + r : r;
    };
    C.toSignificantDigits = C.toSD = function(e, t) {
      var r = this, n = r.constructor;
      return e === void 0 ? (e = n.precision, t = n.rounding) : (ie(e, 1, Oe), t === void 0 ? t = n.rounding : ie(t, 0, 8)), I2(new n(r), e, t);
    };
    C.toString = function() {
      var e = this, t = e.constructor, r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() && !e.isZero() ? "-" + r : r;
    };
    C.truncated = C.trunc = function() {
      return I2(new this.constructor(this), this.e + 1, 1);
    };
    C.valueOf = C.toJSON = function() {
      var e = this, t = e.constructor, r = he(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
      return e.isNeg() ? "-" + r : r;
    };
    function z(e) {
      var t, r, n, i = e.length - 1, o = "", s = e[0];
      if (i > 0) {
        for (o += s, t = 1; t < i; t++) n = e[t] + "", r = O - n.length, r && (o += Se(r)), o += n;
        s = e[t], n = s + "", r = O - n.length, r && (o += Se(r));
      } else if (s === 0) return "0";
      for (; s % 10 === 0; ) s /= 10;
      return o + s;
    }
    __name(z, "z");
    function ie(e, t, r) {
      if (e !== ~~e || e < t || e > r) throw Error(Ie + e);
    }
    __name(ie, "ie");
    function St(e, t, r, n) {
      var i, o, s, a;
      for (o = e[0]; o >= 10; o /= 10) --t;
      return --t < 0 ? (t += O, i = 0) : (i = Math.ceil((t + 1) / O), t %= O), o = J(10, O - t), a = e[i] % o | 0, n == null ? t < 3 ? (t == 0 ? a = a / 100 | 0 : t == 1 && (a = a / 10 | 0), s = r < 4 && a == 99999 || r > 3 && a == 49999 || a == 5e4 || a == 0) : s = (r < 4 && a + 1 == o || r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 100 | 0) == J(10, t - 2) - 1 || (a == o / 2 || a == 0) && (e[i + 1] / o / 100 | 0) == 0 : t < 4 ? (t == 0 ? a = a / 1e3 | 0 : t == 1 ? a = a / 100 | 0 : t == 2 && (a = a / 10 | 0), s = (n || r < 4) && a == 9999 || !n && r > 3 && a == 4999) : s = ((n || r < 4) && a + 1 == o || !n && r > 3 && a + 1 == o / 2) && (e[i + 1] / o / 1e3 | 0) == J(10, t - 3) - 1, s;
    }
    __name(St, "St");
    function yr(e, t, r) {
      for (var n, i = [0], o, s = 0, a = e.length; s < a; ) {
        for (o = i.length; o--; ) i[o] *= t;
        for (i[0] += Tn.indexOf(e.charAt(s++)), n = 0; n < i.length; n++) i[n] > r - 1 && (i[n + 1] === void 0 && (i[n + 1] = 0), i[n + 1] += i[n] / r | 0, i[n] %= r);
      }
      return i.reverse();
    }
    __name(yr, "yr");
    function _l(e, t) {
      var r, n, i;
      if (t.isZero()) return t;
      n = t.d.length, n < 32 ? (r = Math.ceil(n / 3), i = (1 / Tr(4, r)).toString()) : (r = 16, i = "2.3283064365386962890625e-10"), e.precision += r, t = et(e, 1, t.times(i), new e(1));
      for (var o = r; o--; ) {
        var s = t.times(t);
        t = s.times(s).minus(s).times(8).plus(1);
      }
      return e.precision -= r, t;
    }
    __name(_l, "_l");
    var q = /* @__PURE__ */ function() {
      function e(n, i, o) {
        var s, a = 0, l = n.length;
        for (n = n.slice(); l--; ) s = n[l] * i + a, n[l] = s % o | 0, a = s / o | 0;
        return a && n.unshift(a), n;
      }
      __name(e, "e");
      function t(n, i, o, s) {
        var a, l;
        if (o != s) l = o > s ? 1 : -1;
        else for (a = l = 0; a < o; a++) if (n[a] != i[a]) {
          l = n[a] > i[a] ? 1 : -1;
          break;
        }
        return l;
      }
      __name(t, "t");
      function r(n, i, o, s) {
        for (var a = 0; o--; ) n[o] -= a, a = n[o] < i[o] ? 1 : 0, n[o] = a * s + n[o] - i[o];
        for (; !n[0] && n.length > 1; ) n.shift();
      }
      __name(r, "r");
      return function(n, i, o, s, a, l) {
        var d, g, h, v, S, A2, R, D, M, B, k, F2, ae, G, on, or, xt, sn, ue, sr, ar = n.constructor, an = n.s == i.s ? 1 : -1, Y = n.d, $2 = i.d;
        if (!Y || !Y[0] || !$2 || !$2[0]) return new ar(!n.s || !i.s || (Y ? $2 && Y[0] == $2[0] : !$2) ? NaN : Y && Y[0] == 0 || !$2 ? an * 0 : an / 0);
        for (l ? (S = 1, g = n.e - i.e) : (l = ce, S = O, g = X(n.e / S) - X(i.e / S)), ue = $2.length, xt = Y.length, M = new ar(an), B = M.d = [], h = 0; $2[h] == (Y[h] || 0); h++) ;
        if ($2[h] > (Y[h] || 0) && g--, o == null ? (G = o = ar.precision, s = ar.rounding) : a ? G = o + (n.e - i.e) + 1 : G = o, G < 0) B.push(1), A2 = true;
        else {
          if (G = G / S + 2 | 0, h = 0, ue == 1) {
            for (v = 0, $2 = $2[0], G++; (h < xt || v) && G--; h++) on = v * l + (Y[h] || 0), B[h] = on / $2 | 0, v = on % $2 | 0;
            A2 = v || h < xt;
          } else {
            for (v = l / ($2[0] + 1) | 0, v > 1 && ($2 = e($2, v, l), Y = e(Y, v, l), ue = $2.length, xt = Y.length), or = ue, k = Y.slice(0, ue), F2 = k.length; F2 < ue; ) k[F2++] = 0;
            sr = $2.slice(), sr.unshift(0), sn = $2[0], $2[1] >= l / 2 && ++sn;
            do
              v = 0, d = t($2, k, ue, F2), d < 0 ? (ae = k[0], ue != F2 && (ae = ae * l + (k[1] || 0)), v = ae / sn | 0, v > 1 ? (v >= l && (v = l - 1), R = e($2, v, l), D = R.length, F2 = k.length, d = t(R, k, D, F2), d == 1 && (v--, r(R, ue < D ? sr : $2, D, l))) : (v == 0 && (d = v = 1), R = $2.slice()), D = R.length, D < F2 && R.unshift(0), r(k, R, F2, l), d == -1 && (F2 = k.length, d = t($2, k, ue, F2), d < 1 && (v++, r(k, ue < F2 ? sr : $2, F2, l))), F2 = k.length) : d === 0 && (v++, k = [0]), B[h++] = v, d && k[0] ? k[F2++] = Y[or] || 0 : (k = [Y[or]], F2 = 1);
            while ((or++ < xt || k[0] !== void 0) && G--);
            A2 = k[0] !== void 0;
          }
          B[0] || B.shift();
        }
        if (S == 1) M.e = g, uo = A2;
        else {
          for (h = 1, v = B[0]; v >= 10; v /= 10) h++;
          M.e = h + g * S - 1, I2(M, a ? o + M.e + 1 : o, s, A2);
        }
        return M;
      };
    }();
    function I2(e, t, r, n) {
      var i, o, s, a, l, d, g, h, v, S = e.constructor;
      e: if (t != null) {
        if (h = e.d, !h) return e;
        for (i = 1, a = h[0]; a >= 10; a /= 10) i++;
        if (o = t - i, o < 0) o += O, s = t, g = h[v = 0], l = g / J(10, i - s - 1) % 10 | 0;
        else if (v = Math.ceil((o + 1) / O), a = h.length, v >= a) if (n) {
          for (; a++ <= v; ) h.push(0);
          g = l = 0, i = 1, o %= O, s = o - O + 1;
        } else break e;
        else {
          for (g = a = h[v], i = 1; a >= 10; a /= 10) i++;
          o %= O, s = o - O + i, l = s < 0 ? 0 : g / J(10, i - s - 1) % 10 | 0;
        }
        if (n = n || t < 0 || h[v + 1] !== void 0 || (s < 0 ? g : g % J(10, i - s - 1)), d = r < 4 ? (l || n) && (r == 0 || r == (e.s < 0 ? 3 : 2)) : l > 5 || l == 5 && (r == 4 || n || r == 6 && (o > 0 ? s > 0 ? g / J(10, i - s) : 0 : h[v - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), t < 1 || !h[0]) return h.length = 0, d ? (t -= e.e + 1, h[0] = J(10, (O - t % O) % O), e.e = -t || 0) : h[0] = e.e = 0, e;
        if (o == 0 ? (h.length = v, a = 1, v--) : (h.length = v + 1, a = J(10, O - o), h[v] = s > 0 ? (g / J(10, i - s) % J(10, s) | 0) * a : 0), d) for (; ; ) if (v == 0) {
          for (o = 1, s = h[0]; s >= 10; s /= 10) o++;
          for (s = h[0] += a, a = 1; s >= 10; s /= 10) a++;
          o != a && (e.e++, h[0] == ce && (h[0] = 1));
          break;
        } else {
          if (h[v] += a, h[v] != ce) break;
          h[v--] = 0, a = 1;
        }
        for (o = h.length; h[--o] === 0; ) h.pop();
      }
      return _ && (e.e > S.maxE ? (e.d = null, e.e = NaN) : e.e < S.minE && (e.e = 0, e.d = [0])), e;
    }
    __name(I2, "I");
    function he(e, t, r) {
      if (!e.isFinite()) return wo(e);
      var n, i = e.e, o = z(e.d), s = o.length;
      return t ? (r && (n = r - s) > 0 ? o = o.charAt(0) + "." + o.slice(1) + Se(n) : s > 1 && (o = o.charAt(0) + "." + o.slice(1)), o = o + (e.e < 0 ? "e" : "e+") + e.e) : i < 0 ? (o = "0." + Se(-i - 1) + o, r && (n = r - s) > 0 && (o += Se(n))) : i >= s ? (o += Se(i + 1 - s), r && (n = r - i - 1) > 0 && (o = o + "." + Se(n))) : ((n = i + 1) < s && (o = o.slice(0, n) + "." + o.slice(n)), r && (n = r - s) > 0 && (i + 1 === s && (o += "."), o += Se(n))), o;
    }
    __name(he, "he");
    function vr(e, t) {
      var r = e[0];
      for (t *= O; r >= 10; r /= 10) t++;
      return t;
    }
    __name(vr, "vr");
    function xr(e, t, r) {
      if (t > Ml) throw _ = true, r && (e.precision = r), Error(co);
      return I2(new e(Er), t, 1, true);
    }
    __name(xr, "xr");
    function ge(e, t, r) {
      if (t > An) throw Error(co);
      return I2(new e(br), t, r, true);
    }
    __name(ge, "ge");
    function go(e) {
      var t = e.length - 1, r = t * O + 1;
      if (t = e[t], t) {
        for (; t % 10 == 0; t /= 10) r--;
        for (t = e[0]; t >= 10; t /= 10) r++;
      }
      return r;
    }
    __name(go, "go");
    function Se(e) {
      for (var t = ""; e--; ) t += "0";
      return t;
    }
    __name(Se, "Se");
    function ho(e, t, r, n) {
      var i, o = new e(1), s = Math.ceil(n / O + 4);
      for (_ = false; ; ) {
        if (r % 2 && (o = o.times(t), ao(o.d, s) && (i = true)), r = X(r / 2), r === 0) {
          r = o.d.length - 1, i && o.d[r] === 0 && ++o.d[r];
          break;
        }
        t = t.times(t), ao(t.d, s);
      }
      return _ = true, o;
    }
    __name(ho, "ho");
    function so(e) {
      return e.d[e.d.length - 1] & 1;
    }
    __name(so, "so");
    function yo(e, t, r) {
      for (var n, i, o = new e(t[0]), s = 0; ++s < t.length; ) {
        if (i = new e(t[s]), !i.s) {
          o = i;
          break;
        }
        n = o.cmp(i), (n === r || n === 0 && o.s === r) && (o = i);
      }
      return o;
    }
    __name(yo, "yo");
    function Rn(e, t) {
      var r, n, i, o, s, a, l, d = 0, g = 0, h = 0, v = e.constructor, S = v.rounding, A2 = v.precision;
      if (!e.d || !e.d[0] || e.e > 17) return new v(e.d ? e.d[0] ? e.s < 0 ? 0 : 1 / 0 : 1 : e.s ? e.s < 0 ? 0 : e : NaN);
      for (t == null ? (_ = false, l = A2) : l = t, a = new v(0.03125); e.e > -2; ) e = e.times(a), h += 5;
      for (n = Math.log(J(2, h)) / Math.LN10 * 2 + 5 | 0, l += n, r = o = s = new v(1), v.precision = l; ; ) {
        if (o = I2(o.times(e), l, 1), r = r.times(++g), a = s.plus(q(o, r, l, 1)), z(a.d).slice(0, l) === z(s.d).slice(0, l)) {
          for (i = h; i--; ) s = I2(s.times(s), l, 1);
          if (t == null) if (d < 3 && St(s.d, l - n, S, d)) v.precision = l += 10, r = o = a = new v(1), g = 0, d++;
          else return I2(s, v.precision = A2, S, _ = true);
          else return v.precision = A2, s;
        }
        s = a;
      }
    }
    __name(Rn, "Rn");
    function ke(e, t) {
      var r, n, i, o, s, a, l, d, g, h, v, S = 1, A2 = 10, R = e, D = R.d, M = R.constructor, B = M.rounding, k = M.precision;
      if (R.s < 0 || !D || !D[0] || !R.e && D[0] == 1 && D.length == 1) return new M(D && !D[0] ? -1 / 0 : R.s != 1 ? NaN : D ? 0 : R);
      if (t == null ? (_ = false, g = k) : g = t, M.precision = g += A2, r = z(D), n = r.charAt(0), Math.abs(o = R.e) < 15e14) {
        for (; n < 7 && n != 1 || n == 1 && r.charAt(1) > 3; ) R = R.times(e), r = z(R.d), n = r.charAt(0), S++;
        o = R.e, n > 1 ? (R = new M("0." + r), o++) : R = new M(n + "." + r.slice(1));
      } else return d = xr(M, g + 2, k).times(o + ""), R = ke(new M(n + "." + r.slice(1)), g - A2).plus(d), M.precision = k, t == null ? I2(R, k, B, _ = true) : R;
      for (h = R, l = s = R = q(R.minus(1), R.plus(1), g, 1), v = I2(R.times(R), g, 1), i = 3; ; ) {
        if (s = I2(s.times(v), g, 1), d = l.plus(q(s, new M(i), g, 1)), z(d.d).slice(0, g) === z(l.d).slice(0, g)) if (l = l.times(2), o !== 0 && (l = l.plus(xr(M, g + 2, k).times(o + ""))), l = q(l, new M(S), g, 1), t == null) if (St(l.d, g - A2, B, a)) M.precision = g += A2, d = s = R = q(h.minus(1), h.plus(1), g, 1), v = I2(R.times(R), g, 1), i = a = 1;
        else return I2(l, M.precision = k, B, _ = true);
        else return M.precision = k, l;
        l = d, i += 2;
      }
    }
    __name(ke, "ke");
    function wo(e) {
      return String(e.s * e.s / 0);
    }
    __name(wo, "wo");
    function wr(e, t) {
      var r, n, i;
      for ((r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length), n = 0; t.charCodeAt(n) === 48; n++) ;
      for (i = t.length; t.charCodeAt(i - 1) === 48; --i) ;
      if (t = t.slice(n, i), t) {
        if (i -= n, e.e = r = r - n - 1, e.d = [], n = (r + 1) % O, r < 0 && (n += O), n < i) {
          for (n && e.d.push(+t.slice(0, n)), i -= O; n < i; ) e.d.push(+t.slice(n, n += O));
          t = t.slice(n), n = O - t.length;
        } else n -= i;
        for (; n--; ) t += "0";
        e.d.push(+t), _ && (e.e > e.constructor.maxE ? (e.d = null, e.e = NaN) : e.e < e.constructor.minE && (e.e = 0, e.d = [0]));
      } else e.e = 0, e.d = [0];
      return e;
    }
    __name(wr, "wr");
    function Nl(e, t) {
      var r, n, i, o, s, a, l, d, g;
      if (t.indexOf("_") > -1) {
        if (t = t.replace(/(\d)_(?=\d)/g, "$1"), fo.test(t)) return wr(e, t);
      } else if (t === "Infinity" || t === "NaN") return +t || (e.s = NaN), e.e = NaN, e.d = null, e;
      if (Il.test(t)) r = 16, t = t.toLowerCase();
      else if (kl.test(t)) r = 2;
      else if (Ol.test(t)) r = 8;
      else throw Error(Ie + t);
      for (o = t.search(/p/i), o > 0 ? (l = +t.slice(o + 1), t = t.substring(2, o)) : t = t.slice(2), o = t.indexOf("."), s = o >= 0, n = e.constructor, s && (t = t.replace(".", ""), a = t.length, o = a - o, i = ho(n, new n(r), o, o * 2)), d = yr(t, r, ce), g = d.length - 1, o = g; d[o] === 0; --o) d.pop();
      return o < 0 ? new n(e.s * 0) : (e.e = vr(d, g), e.d = d, _ = false, s && (e = q(e, i, a * 4)), l && (e = e.times(Math.abs(l) < 54 ? J(2, l) : Be.pow(2, l))), _ = true, e);
    }
    __name(Nl, "Nl");
    function Fl(e, t) {
      var r, n = t.d.length;
      if (n < 3) return t.isZero() ? t : et(e, 2, t, t);
      r = 1.4 * Math.sqrt(n), r = r > 16 ? 16 : r | 0, t = t.times(1 / Tr(5, r)), t = et(e, 2, t, t);
      for (var i, o = new e(5), s = new e(16), a = new e(20); r--; ) i = t.times(t), t = t.times(o.plus(i.times(s.times(i).minus(a))));
      return t;
    }
    __name(Fl, "Fl");
    function et(e, t, r, n, i) {
      var o, s, a, l, d = 1, g = e.precision, h = Math.ceil(g / O);
      for (_ = false, l = r.times(r), a = new e(n); ; ) {
        if (s = q(a.times(l), new e(t++ * t++), g, 1), a = i ? n.plus(s) : n.minus(s), n = q(s.times(l), new e(t++ * t++), g, 1), s = a.plus(n), s.d[h] !== void 0) {
          for (o = h; s.d[o] === a.d[o] && o--; ) ;
          if (o == -1) break;
        }
        o = a, a = n, n = s, s = o, d++;
      }
      return _ = true, s.d.length = h + 1, s;
    }
    __name(et, "et");
    function Tr(e, t) {
      for (var r = e; --t; ) r *= e;
      return r;
    }
    __name(Tr, "Tr");
    function Eo(e, t) {
      var r, n = t.s < 0, i = ge(e, e.precision, 1), o = i.times(0.5);
      if (t = t.abs(), t.lte(o)) return Te = n ? 4 : 1, t;
      if (r = t.divToInt(i), r.isZero()) Te = n ? 3 : 2;
      else {
        if (t = t.minus(r.times(i)), t.lte(o)) return Te = so(r) ? n ? 2 : 3 : n ? 4 : 1, t;
        Te = so(r) ? n ? 1 : 4 : n ? 3 : 2;
      }
      return t.minus(i).abs();
    }
    __name(Eo, "Eo");
    function Sn(e, t, r, n) {
      var i, o, s, a, l, d, g, h, v, S = e.constructor, A2 = r !== void 0;
      if (A2 ? (ie(r, 1, Oe), n === void 0 ? n = S.rounding : ie(n, 0, 8)) : (r = S.precision, n = S.rounding), !e.isFinite()) g = wo(e);
      else {
        for (g = he(e), s = g.indexOf("."), A2 ? (i = 2, t == 16 ? r = r * 4 - 3 : t == 8 && (r = r * 3 - 2)) : i = t, s >= 0 && (g = g.replace(".", ""), v = new S(1), v.e = g.length - s, v.d = yr(he(v), 10, i), v.e = v.d.length), h = yr(g, 10, i), o = l = h.length; h[--l] == 0; ) h.pop();
        if (!h[0]) g = A2 ? "0p+0" : "0";
        else {
          if (s < 0 ? o-- : (e = new S(e), e.d = h, e.e = o, e = q(e, v, r, n, 0, i), h = e.d, o = e.e, d = uo), s = h[r], a = i / 2, d = d || h[r + 1] !== void 0, d = n < 4 ? (s !== void 0 || d) && (n === 0 || n === (e.s < 0 ? 3 : 2)) : s > a || s === a && (n === 4 || d || n === 6 && h[r - 1] & 1 || n === (e.s < 0 ? 8 : 7)), h.length = r, d) for (; ++h[--r] > i - 1; ) h[r] = 0, r || (++o, h.unshift(1));
          for (l = h.length; !h[l - 1]; --l) ;
          for (s = 0, g = ""; s < l; s++) g += Tn.charAt(h[s]);
          if (A2) {
            if (l > 1) if (t == 16 || t == 8) {
              for (s = t == 16 ? 4 : 3, --l; l % s; l++) g += "0";
              for (h = yr(g, i, t), l = h.length; !h[l - 1]; --l) ;
              for (s = 1, g = "1."; s < l; s++) g += Tn.charAt(h[s]);
            } else g = g.charAt(0) + "." + g.slice(1);
            g = g + (o < 0 ? "p" : "p+") + o;
          } else if (o < 0) {
            for (; ++o; ) g = "0" + g;
            g = "0." + g;
          } else if (++o > l) for (o -= l; o--; ) g += "0";
          else o < l && (g = g.slice(0, o) + "." + g.slice(o));
        }
        g = (t == 16 ? "0x" : t == 2 ? "0b" : t == 8 ? "0o" : "") + g;
      }
      return e.s < 0 ? "-" + g : g;
    }
    __name(Sn, "Sn");
    function ao(e, t) {
      if (e.length > t) return e.length = t, true;
    }
    __name(ao, "ao");
    function Ll(e) {
      return new this(e).abs();
    }
    __name(Ll, "Ll");
    function Bl(e) {
      return new this(e).acos();
    }
    __name(Bl, "Bl");
    function Ul(e) {
      return new this(e).acosh();
    }
    __name(Ul, "Ul");
    function ql(e, t) {
      return new this(e).plus(t);
    }
    __name(ql, "ql");
    function $l(e) {
      return new this(e).asin();
    }
    __name($l, "$l");
    function jl(e) {
      return new this(e).asinh();
    }
    __name(jl, "jl");
    function Vl(e) {
      return new this(e).atan();
    }
    __name(Vl, "Vl");
    function Gl(e) {
      return new this(e).atanh();
    }
    __name(Gl, "Gl");
    function Ql(e, t) {
      e = new this(e), t = new this(t);
      var r, n = this.precision, i = this.rounding, o = n + 4;
      return !e.s || !t.s ? r = new this(NaN) : !e.d && !t.d ? (r = ge(this, o, 1).times(t.s > 0 ? 0.25 : 0.75), r.s = e.s) : !t.d || e.isZero() ? (r = t.s < 0 ? ge(this, n, i) : new this(0), r.s = e.s) : !e.d || t.isZero() ? (r = ge(this, o, 1).times(0.5), r.s = e.s) : t.s < 0 ? (this.precision = o, this.rounding = 1, r = this.atan(q(e, t, o, 1)), t = ge(this, o, 1), this.precision = n, this.rounding = i, r = e.s < 0 ? r.minus(t) : r.plus(t)) : r = this.atan(q(e, t, o, 1)), r;
    }
    __name(Ql, "Ql");
    function Jl(e) {
      return new this(e).cbrt();
    }
    __name(Jl, "Jl");
    function Wl(e) {
      return I2(e = new this(e), e.e + 1, 2);
    }
    __name(Wl, "Wl");
    function Hl(e, t, r) {
      return new this(e).clamp(t, r);
    }
    __name(Hl, "Hl");
    function Kl(e) {
      if (!e || typeof e != "object") throw Error(Pr + "Object expected");
      var t, r, n, i = e.defaults === true, o = ["precision", 1, Oe, "rounding", 0, 8, "toExpNeg", -Xe, 0, "toExpPos", 0, Xe, "maxE", 0, Xe, "minE", -Xe, 0, "modulo", 0, 9];
      for (t = 0; t < o.length; t += 3) if (r = o[t], i && (this[r] = Cn[r]), (n = e[r]) !== void 0) if (X(n) === n && n >= o[t + 1] && n <= o[t + 2]) this[r] = n;
      else throw Error(Ie + r + ": " + n);
      if (r = "crypto", i && (this[r] = Cn[r]), (n = e[r]) !== void 0) if (n === true || n === false || n === 0 || n === 1) if (n) if (typeof crypto < "u" && crypto && (crypto.getRandomValues || crypto.randomBytes)) this[r] = true;
      else throw Error(po);
      else this[r] = false;
      else throw Error(Ie + r + ": " + n);
      return this;
    }
    __name(Kl, "Kl");
    function zl(e) {
      return new this(e).cos();
    }
    __name(zl, "zl");
    function Yl(e) {
      return new this(e).cosh();
    }
    __name(Yl, "Yl");
    function bo(e) {
      var t, r, n;
      function i(o) {
        var s, a, l, d = this;
        if (!(d instanceof i)) return new i(o);
        if (d.constructor = i, lo(o)) {
          d.s = o.s, _ ? !o.d || o.e > i.maxE ? (d.e = NaN, d.d = null) : o.e < i.minE ? (d.e = 0, d.d = [0]) : (d.e = o.e, d.d = o.d.slice()) : (d.e = o.e, d.d = o.d ? o.d.slice() : o.d);
          return;
        }
        if (l = typeof o, l === "number") {
          if (o === 0) {
            d.s = 1 / o < 0 ? -1 : 1, d.e = 0, d.d = [0];
            return;
          }
          if (o < 0 ? (o = -o, d.s = -1) : d.s = 1, o === ~~o && o < 1e7) {
            for (s = 0, a = o; a >= 10; a /= 10) s++;
            _ ? s > i.maxE ? (d.e = NaN, d.d = null) : s < i.minE ? (d.e = 0, d.d = [0]) : (d.e = s, d.d = [o]) : (d.e = s, d.d = [o]);
            return;
          }
          if (o * 0 !== 0) {
            o || (d.s = NaN), d.e = NaN, d.d = null;
            return;
          }
          return wr(d, o.toString());
        }
        if (l === "string") return (a = o.charCodeAt(0)) === 45 ? (o = o.slice(1), d.s = -1) : (a === 43 && (o = o.slice(1)), d.s = 1), fo.test(o) ? wr(d, o) : Nl(d, o);
        if (l === "bigint") return o < 0 ? (o = -o, d.s = -1) : d.s = 1, wr(d, o.toString());
        throw Error(Ie + o);
      }
      __name(i, "i");
      if (i.prototype = C, i.ROUND_UP = 0, i.ROUND_DOWN = 1, i.ROUND_CEIL = 2, i.ROUND_FLOOR = 3, i.ROUND_HALF_UP = 4, i.ROUND_HALF_DOWN = 5, i.ROUND_HALF_EVEN = 6, i.ROUND_HALF_CEIL = 7, i.ROUND_HALF_FLOOR = 8, i.EUCLID = 9, i.config = i.set = Kl, i.clone = bo, i.isDecimal = lo, i.abs = Ll, i.acos = Bl, i.acosh = Ul, i.add = ql, i.asin = $l, i.asinh = jl, i.atan = Vl, i.atanh = Gl, i.atan2 = Ql, i.cbrt = Jl, i.ceil = Wl, i.clamp = Hl, i.cos = zl, i.cosh = Yl, i.div = Zl, i.exp = Xl, i.floor = eu, i.hypot = tu, i.ln = ru, i.log = nu, i.log10 = ou, i.log2 = iu, i.max = su, i.min = au, i.mod = lu, i.mul = uu, i.pow = cu, i.random = pu, i.round = mu, i.sign = fu, i.sin = du, i.sinh = gu, i.sqrt = hu, i.sub = yu, i.sum = wu, i.tan = Eu, i.tanh = bu, i.trunc = xu, e === void 0 && (e = {}), e && e.defaults !== true) for (n = ["precision", "rounding", "toExpNeg", "toExpPos", "maxE", "minE", "modulo", "crypto"], t = 0; t < n.length; ) e.hasOwnProperty(r = n[t++]) || (e[r] = this[r]);
      return i.config(e), i;
    }
    __name(bo, "bo");
    function Zl(e, t) {
      return new this(e).div(t);
    }
    __name(Zl, "Zl");
    function Xl(e) {
      return new this(e).exp();
    }
    __name(Xl, "Xl");
    function eu(e) {
      return I2(e = new this(e), e.e + 1, 3);
    }
    __name(eu, "eu");
    function tu() {
      var e, t, r = new this(0);
      for (_ = false, e = 0; e < arguments.length; ) if (t = new this(arguments[e++]), t.d) r.d && (r = r.plus(t.times(t)));
      else {
        if (t.s) return _ = true, new this(1 / 0);
        r = t;
      }
      return _ = true, r.sqrt();
    }
    __name(tu, "tu");
    function lo(e) {
      return e instanceof Be || e && e.toStringTag === mo || false;
    }
    __name(lo, "lo");
    function ru(e) {
      return new this(e).ln();
    }
    __name(ru, "ru");
    function nu(e, t) {
      return new this(e).log(t);
    }
    __name(nu, "nu");
    function iu(e) {
      return new this(e).log(2);
    }
    __name(iu, "iu");
    function ou(e) {
      return new this(e).log(10);
    }
    __name(ou, "ou");
    function su() {
      return yo(this, arguments, -1);
    }
    __name(su, "su");
    function au() {
      return yo(this, arguments, 1);
    }
    __name(au, "au");
    function lu(e, t) {
      return new this(e).mod(t);
    }
    __name(lu, "lu");
    function uu(e, t) {
      return new this(e).mul(t);
    }
    __name(uu, "uu");
    function cu(e, t) {
      return new this(e).pow(t);
    }
    __name(cu, "cu");
    function pu(e) {
      var t, r, n, i, o = 0, s = new this(1), a = [];
      if (e === void 0 ? e = this.precision : ie(e, 1, Oe), n = Math.ceil(e / O), this.crypto) if (crypto.getRandomValues) for (t = crypto.getRandomValues(new Uint32Array(n)); o < n; ) i = t[o], i >= 429e7 ? t[o] = crypto.getRandomValues(new Uint32Array(1))[0] : a[o++] = i % 1e7;
      else if (crypto.randomBytes) {
        for (t = crypto.randomBytes(n *= 4); o < n; ) i = t[o] + (t[o + 1] << 8) + (t[o + 2] << 16) + ((t[o + 3] & 127) << 24), i >= 214e7 ? crypto.randomBytes(4).copy(t, o) : (a.push(i % 1e7), o += 4);
        o = n / 4;
      } else throw Error(po);
      else for (; o < n; ) a[o++] = Math.random() * 1e7 | 0;
      for (n = a[--o], e %= O, n && e && (i = J(10, O - e), a[o] = (n / i | 0) * i); a[o] === 0; o--) a.pop();
      if (o < 0) r = 0, a = [0];
      else {
        for (r = -1; a[0] === 0; r -= O) a.shift();
        for (n = 1, i = a[0]; i >= 10; i /= 10) n++;
        n < O && (r -= O - n);
      }
      return s.e = r, s.d = a, s;
    }
    __name(pu, "pu");
    function mu(e) {
      return I2(e = new this(e), e.e + 1, this.rounding);
    }
    __name(mu, "mu");
    function fu(e) {
      return e = new this(e), e.d ? e.d[0] ? e.s : 0 * e.s : e.s || NaN;
    }
    __name(fu, "fu");
    function du(e) {
      return new this(e).sin();
    }
    __name(du, "du");
    function gu(e) {
      return new this(e).sinh();
    }
    __name(gu, "gu");
    function hu(e) {
      return new this(e).sqrt();
    }
    __name(hu, "hu");
    function yu(e, t) {
      return new this(e).sub(t);
    }
    __name(yu, "yu");
    function wu() {
      var e = 0, t = arguments, r = new this(t[e]);
      for (_ = false; r.s && ++e < t.length; ) r = r.plus(t[e]);
      return _ = true, I2(r, this.precision, this.rounding);
    }
    __name(wu, "wu");
    function Eu(e) {
      return new this(e).tan();
    }
    __name(Eu, "Eu");
    function bu(e) {
      return new this(e).tanh();
    }
    __name(bu, "bu");
    function xu(e) {
      return I2(e = new this(e), e.e + 1, 1);
    }
    __name(xu, "xu");
    C[Symbol.for("nodejs.util.inspect.custom")] = C.toString;
    C[Symbol.toStringTag] = "Decimal";
    var Be = C.constructor = bo(Cn);
    Er = new Be(Er);
    br = new Be(br);
    var pe = Be;
    function tt(e) {
      return e === null ? e : Array.isArray(e) ? e.map(tt) : typeof e == "object" ? Pu(e) ? vu(e) : typeof e == "bigint" || e instanceof Date || e instanceof Uint8Array || e instanceof pe ? e : Ze(e, tt) : e;
    }
    __name(tt, "tt");
    function Pu(e) {
      return e !== null && typeof e == "object" && typeof e.$type == "string";
    }
    __name(Pu, "Pu");
    function vu({ $type: e, value: t }) {
      switch (e) {
        case "BigInt":
          return BigInt(t);
        case "Bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = w2.Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "DateTime":
          return new Date(t);
        case "Decimal":
          return new pe(t);
        case "Json":
          return JSON.parse(t);
        default:
          Pe(t, "Unknown tagged value");
      }
    }
    __name(vu, "vu");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var ye = class {
      static {
        __name(this, "ye");
      }
      _map = /* @__PURE__ */ new Map();
      get(t) {
        return this._map.get(t)?.value;
      }
      set(t, r) {
        this._map.set(t, { value: r });
      }
      getOrCreate(t, r) {
        let n = this._map.get(t);
        if (n) return n.value;
        let i = r();
        return this.set(t, i), i;
      }
    };
    f();
    u();
    c();
    p();
    m2();
    function De(e) {
      return e.substring(0, 1).toLowerCase() + e.substring(1);
    }
    __name(De, "De");
    f();
    u();
    c();
    p();
    m2();
    function xo(e, t) {
      let r = {};
      for (let n of e) {
        let i = n[t];
        r[i] = n;
      }
      return r;
    }
    __name(xo, "xo");
    f();
    u();
    c();
    p();
    m2();
    function kt(e) {
      let t;
      return { get() {
        return t || (t = { value: e() }), t.value;
      } };
    }
    __name(kt, "kt");
    f();
    u();
    c();
    p();
    m2();
    function Po(e) {
      return { models: kn(e.models), enums: kn(e.enums), types: kn(e.types) };
    }
    __name(Po, "Po");
    function kn(e) {
      let t = {};
      for (let { name: r, ...n } of e) t[r] = n;
      return t;
    }
    __name(kn, "kn");
    f();
    u();
    c();
    p();
    m2();
    function rt(e) {
      return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
    }
    __name(rt, "rt");
    function Cr(e) {
      return e.toString() !== "Invalid Date";
    }
    __name(Cr, "Cr");
    f();
    u();
    c();
    p();
    m2();
    function nt(e) {
      return Be.isDecimal(e) ? true : e !== null && typeof e == "object" && typeof e.s == "number" && typeof e.e == "number" && typeof e.toFixed == "function" && Array.isArray(e.d);
    }
    __name(nt, "nt");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Ot = {};
    Pt(Ot, { ModelAction: /* @__PURE__ */ __name(() => It, "ModelAction"), datamodelEnumToSchemaEnum: /* @__PURE__ */ __name(() => Tu, "datamodelEnumToSchemaEnum") });
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function Tu(e) {
      return { name: e.name, values: e.values.map((t) => t.name) };
    }
    __name(Tu, "Tu");
    f();
    u();
    c();
    p();
    m2();
    var It = ((k) => (k.findUnique = "findUnique", k.findUniqueOrThrow = "findUniqueOrThrow", k.findFirst = "findFirst", k.findFirstOrThrow = "findFirstOrThrow", k.findMany = "findMany", k.create = "create", k.createMany = "createMany", k.createManyAndReturn = "createManyAndReturn", k.update = "update", k.updateMany = "updateMany", k.updateManyAndReturn = "updateManyAndReturn", k.upsert = "upsert", k.delete = "delete", k.deleteMany = "deleteMany", k.groupBy = "groupBy", k.count = "count", k.aggregate = "aggregate", k.findRaw = "findRaw", k.aggregateRaw = "aggregateRaw", k))(It || {});
    var Cu = Qe(Zi());
    var Au = { red: ze, gray: Bi, dim: mr, bold: pr, underline: Mi, highlightSource: /* @__PURE__ */ __name((e) => e.highlight(), "highlightSource") };
    var Ru = { red: /* @__PURE__ */ __name((e) => e, "red"), gray: /* @__PURE__ */ __name((e) => e, "gray"), dim: /* @__PURE__ */ __name((e) => e, "dim"), bold: /* @__PURE__ */ __name((e) => e, "bold"), underline: /* @__PURE__ */ __name((e) => e, "underline"), highlightSource: /* @__PURE__ */ __name((e) => e, "highlightSource") };
    function Su({ message: e, originalMethod: t, isPanic: r, callArguments: n }) {
      return { functionName: `prisma.${t}()`, message: e, isPanic: r ?? false, callArguments: n };
    }
    __name(Su, "Su");
    function ku({ functionName: e, location: t, message: r, isPanic: n, contextLines: i, callArguments: o }, s) {
      let a = [""], l = t ? " in" : ":";
      if (n ? (a.push(s.red(`Oops, an unknown error occurred! This is ${s.bold("on us")}, you did nothing wrong.`)), a.push(s.red(`It occurred in the ${s.bold(`\`${e}\``)} invocation${l}`))) : a.push(s.red(`Invalid ${s.bold(`\`${e}\``)} invocation${l}`)), t && a.push(s.underline(Iu(t))), i) {
        a.push("");
        let d = [i.toString()];
        o && (d.push(o), d.push(s.dim(")"))), a.push(d.join("")), o && a.push("");
      } else a.push(""), o && a.push(o), a.push("");
      return a.push(r), a.join(`
`);
    }
    __name(ku, "ku");
    function Iu(e) {
      let t = [e.fileName];
      return e.lineNumber && t.push(String(e.lineNumber)), e.columnNumber && t.push(String(e.columnNumber)), t.join(":");
    }
    __name(Iu, "Iu");
    function Ar(e) {
      let t = e.showColors ? Au : Ru, r;
      return typeof $getTemplateParameters < "u" ? r = $getTemplateParameters(e, t) : r = Su(e), ku(r, t);
    }
    __name(Ar, "Ar");
    f();
    u();
    c();
    p();
    m2();
    var Oo = Qe(In());
    f();
    u();
    c();
    p();
    m2();
    function Ao(e, t, r) {
      let n = Ro(e), i = Ou(n), o = Mu(i);
      o ? Rr(o, t, r) : t.addErrorMessage(() => "Unknown error");
    }
    __name(Ao, "Ao");
    function Ro(e) {
      return e.errors.flatMap((t) => t.kind === "Union" ? Ro(t) : [t]);
    }
    __name(Ro, "Ro");
    function Ou(e) {
      let t = /* @__PURE__ */ new Map(), r = [];
      for (let n of e) {
        if (n.kind !== "InvalidArgumentType") {
          r.push(n);
          continue;
        }
        let i = `${n.selectionPath.join(".")}:${n.argumentPath.join(".")}`, o = t.get(i);
        o ? t.set(i, { ...n, argument: { ...n.argument, typeNames: Du(o.argument.typeNames, n.argument.typeNames) } }) : t.set(i, n);
      }
      return r.push(...t.values()), r;
    }
    __name(Ou, "Ou");
    function Du(e, t) {
      return [...new Set(e.concat(t))];
    }
    __name(Du, "Du");
    function Mu(e) {
      return vn(e, (t, r) => {
        let n = To(t), i = To(r);
        return n !== i ? n - i : Co(t) - Co(r);
      });
    }
    __name(Mu, "Mu");
    function To(e) {
      let t = 0;
      return Array.isArray(e.selectionPath) && (t += e.selectionPath.length), Array.isArray(e.argumentPath) && (t += e.argumentPath.length), t;
    }
    __name(To, "To");
    function Co(e) {
      switch (e.kind) {
        case "InvalidArgumentValue":
        case "ValueTooLarge":
          return 20;
        case "InvalidArgumentType":
          return 10;
        case "RequiredArgumentMissing":
          return -10;
        default:
          return 0;
      }
    }
    __name(Co, "Co");
    f();
    u();
    c();
    p();
    m2();
    var le = class {
      static {
        __name(this, "le");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      isRequired = false;
      makeRequired() {
        return this.isRequired = true, this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.addMarginSymbol(r(this.isRequired ? "+" : "?")), t.write(r(this.name)), this.isRequired || t.write(r("?")), t.write(r(": ")), typeof this.value == "string" ? t.write(r(this.value)) : t.write(this.value);
      }
    };
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    ko();
    f();
    u();
    c();
    p();
    m2();
    var it = class {
      static {
        __name(this, "it");
      }
      constructor(t = 0, r) {
        this.context = r;
        this.currentIndent = t;
      }
      lines = [];
      currentLine = "";
      currentIndent = 0;
      marginSymbol;
      afterNextNewLineCallback;
      write(t) {
        return typeof t == "string" ? this.currentLine += t : t.write(this), this;
      }
      writeJoined(t, r, n = (i, o) => o.write(i)) {
        let i = r.length - 1;
        for (let o = 0; o < r.length; o++) n(r[o], this), o !== i && this.write(t);
        return this;
      }
      writeLine(t) {
        return this.write(t).newLine();
      }
      newLine() {
        this.lines.push(this.indentedCurrentLine()), this.currentLine = "", this.marginSymbol = void 0;
        let t = this.afterNextNewLineCallback;
        return this.afterNextNewLineCallback = void 0, t?.(), this;
      }
      withIndent(t) {
        return this.indent(), t(this), this.unindent(), this;
      }
      afterNextNewline(t) {
        return this.afterNextNewLineCallback = t, this;
      }
      indent() {
        return this.currentIndent++, this;
      }
      unindent() {
        return this.currentIndent > 0 && this.currentIndent--, this;
      }
      addMarginSymbol(t) {
        return this.marginSymbol = t, this;
      }
      toString() {
        return this.lines.concat(this.indentedCurrentLine()).join(`
`);
      }
      getCurrentLineLength() {
        return this.currentLine.length;
      }
      indentedCurrentLine() {
        let t = this.currentLine.padStart(this.currentLine.length + 2 * this.currentIndent);
        return this.marginSymbol ? this.marginSymbol + t.slice(1) : t;
      }
    };
    So();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Sr = class {
      static {
        __name(this, "Sr");
      }
      constructor(t) {
        this.value = t;
      }
      write(t) {
        t.write(this.value);
      }
      markAsError() {
        this.value.markAsError();
      }
    };
    f();
    u();
    c();
    p();
    m2();
    var kr = /* @__PURE__ */ __name((e) => e, "kr");
    var Ir = { bold: kr, red: kr, green: kr, dim: kr, enabled: false };
    var Io = { bold: pr, red: ze, green: _i, dim: mr, enabled: true };
    var ot = { write(e) {
      e.writeLine(",");
    } };
    f();
    u();
    c();
    p();
    m2();
    var we = class {
      static {
        __name(this, "we");
      }
      constructor(t) {
        this.contents = t;
      }
      isUnderlined = false;
      color = /* @__PURE__ */ __name((t) => t, "color");
      underline() {
        return this.isUnderlined = true, this;
      }
      setColor(t) {
        return this.color = t, this;
      }
      write(t) {
        let r = t.getCurrentLineLength();
        t.write(this.color(this.contents)), this.isUnderlined && t.afterNextNewline(() => {
          t.write(" ".repeat(r)).writeLine(this.color("~".repeat(this.contents.length)));
        });
      }
    };
    f();
    u();
    c();
    p();
    m2();
    var Me = class {
      static {
        __name(this, "Me");
      }
      hasError = false;
      markAsError() {
        return this.hasError = true, this;
      }
    };
    var st = class extends Me {
      static {
        __name(this, "st");
      }
      items = [];
      addItem(t) {
        return this.items.push(new Sr(t)), this;
      }
      getField(t) {
        return this.items[t];
      }
      getPrintWidth() {
        return this.items.length === 0 ? 2 : Math.max(...this.items.map((r) => r.value.getPrintWidth())) + 2;
      }
      write(t) {
        if (this.items.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithItems(t);
      }
      writeEmpty(t) {
        let r = new we("[]");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithItems(t) {
        let { colors: r } = t.context;
        t.writeLine("[").withIndent(() => t.writeJoined(ot, this.items).newLine()).write("]"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(r.red("~".repeat(this.getPrintWidth())));
        });
      }
      asObject() {
      }
    };
    var at = class e extends Me {
      static {
        __name(this, "e");
      }
      fields = {};
      suggestions = [];
      addField(t) {
        this.fields[t.name] = t;
      }
      addSuggestion(t) {
        this.suggestions.push(t);
      }
      getField(t) {
        return this.fields[t];
      }
      getDeepField(t) {
        let [r, ...n] = t, i = this.getField(r);
        if (!i) return;
        let o = i;
        for (let s of n) {
          let a;
          if (o.value instanceof e ? a = o.value.getField(s) : o.value instanceof st && (a = o.value.getField(Number(s))), !a) return;
          o = a;
        }
        return o;
      }
      getDeepFieldValue(t) {
        return t.length === 0 ? this : this.getDeepField(t)?.value;
      }
      hasField(t) {
        return !!this.getField(t);
      }
      removeAllFields() {
        this.fields = {};
      }
      removeField(t) {
        delete this.fields[t];
      }
      getFields() {
        return this.fields;
      }
      isEmpty() {
        return Object.keys(this.fields).length === 0;
      }
      getFieldValue(t) {
        return this.getField(t)?.value;
      }
      getDeepSubSelectionValue(t) {
        let r = this;
        for (let n of t) {
          if (!(r instanceof e)) return;
          let i = r.getSubSelectionValue(n);
          if (!i) return;
          r = i;
        }
        return r;
      }
      getDeepSelectionParent(t) {
        let r = this.getSelectionParent();
        if (!r) return;
        let n = r;
        for (let i of t) {
          let o = n.value.getFieldValue(i);
          if (!o || !(o instanceof e)) return;
          let s = o.getSelectionParent();
          if (!s) return;
          n = s;
        }
        return n;
      }
      getSelectionParent() {
        let t = this.getField("select")?.value.asObject();
        if (t) return { kind: "select", value: t };
        let r = this.getField("include")?.value.asObject();
        if (r) return { kind: "include", value: r };
      }
      getSubSelectionValue(t) {
        return this.getSelectionParent()?.value.fields[t].value;
      }
      getPrintWidth() {
        let t = Object.values(this.fields);
        return t.length == 0 ? 2 : Math.max(...t.map((n) => n.getPrintWidth())) + 2;
      }
      write(t) {
        let r = Object.values(this.fields);
        if (r.length === 0 && this.suggestions.length === 0) {
          this.writeEmpty(t);
          return;
        }
        this.writeWithContents(t, r);
      }
      asObject() {
        return this;
      }
      writeEmpty(t) {
        let r = new we("{}");
        this.hasError && r.setColor(t.context.colors.red).underline(), t.write(r);
      }
      writeWithContents(t, r) {
        t.writeLine("{").withIndent(() => {
          t.writeJoined(ot, [...r, ...this.suggestions]).newLine();
        }), t.write("}"), this.hasError && t.afterNextNewline(() => {
          t.writeLine(t.context.colors.red("~".repeat(this.getPrintWidth())));
        });
      }
    };
    f();
    u();
    c();
    p();
    m2();
    var H = class extends Me {
      static {
        __name(this, "H");
      }
      constructor(r) {
        super();
        this.text = r;
      }
      getPrintWidth() {
        return this.text.length;
      }
      write(r) {
        let n = new we(this.text);
        this.hasError && n.underline().setColor(r.context.colors.red), r.write(n);
      }
      asObject() {
      }
    };
    f();
    u();
    c();
    p();
    m2();
    var Dt = class {
      static {
        __name(this, "Dt");
      }
      fields = [];
      addField(t, r) {
        return this.fields.push({ write(n) {
          let { green: i, dim: o } = n.context.colors;
          n.write(i(o(`${t}: ${r}`))).addMarginSymbol(i(o("+")));
        } }), this;
      }
      write(t) {
        let { colors: { green: r } } = t.context;
        t.writeLine(r("{")).withIndent(() => {
          t.writeJoined(ot, this.fields).newLine();
        }).write(r("}")).addMarginSymbol(r("+"));
      }
    };
    function Rr(e, t, r) {
      switch (e.kind) {
        case "MutuallyExclusiveFields":
          _u(e, t);
          break;
        case "IncludeOnScalar":
          Nu(e, t);
          break;
        case "EmptySelection":
          Fu(e, t, r);
          break;
        case "UnknownSelectionField":
          qu(e, t);
          break;
        case "InvalidSelectionValue":
          $u(e, t);
          break;
        case "UnknownArgument":
          ju(e, t);
          break;
        case "UnknownInputField":
          Vu(e, t);
          break;
        case "RequiredArgumentMissing":
          Gu(e, t);
          break;
        case "InvalidArgumentType":
          Qu(e, t);
          break;
        case "InvalidArgumentValue":
          Ju(e, t);
          break;
        case "ValueTooLarge":
          Wu(e, t);
          break;
        case "SomeFieldsMissing":
          Hu(e, t);
          break;
        case "TooManyFieldsGiven":
          Ku(e, t);
          break;
        case "Union":
          Ao(e, t, r);
          break;
        default:
          throw new Error("not implemented: " + e.kind);
      }
    }
    __name(Rr, "Rr");
    function _u(e, t) {
      let r = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      r && (r.getField(e.firstField)?.markAsError(), r.getField(e.secondField)?.markAsError()), t.addErrorMessage((n) => `Please ${n.bold("either")} use ${n.green(`\`${e.firstField}\``)} or ${n.green(`\`${e.secondField}\``)}, but ${n.red("not both")} at the same time.`);
    }
    __name(_u, "_u");
    function Nu(e, t) {
      let [r, n] = Mt(e.selectionPath), i = e.outputType, o = t.arguments.getDeepSelectionParent(r)?.value;
      if (o && (o.getField(n)?.markAsError(), i)) for (let s of i.fields) s.isRelation && o.addSuggestion(new le(s.name, "true"));
      t.addErrorMessage((s) => {
        let a = `Invalid scalar field ${s.red(`\`${n}\``)} for ${s.bold("include")} statement`;
        return i ? a += ` on model ${s.bold(i.name)}. ${_t(s)}` : a += ".", a += `
Note that ${s.bold("include")} statements only accept relation fields.`, a;
      });
    }
    __name(Nu, "Nu");
    function Fu(e, t, r) {
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getField("omit")?.value.asObject();
        if (i) {
          Lu(e, t, i);
          return;
        }
        if (n.hasField("select")) {
          Bu(e, t);
          return;
        }
      }
      if (r?.[De(e.outputType.name)]) {
        Uu(e, t);
        return;
      }
      t.addErrorMessage(() => `Unknown field at "${e.selectionPath.join(".")} selection"`);
    }
    __name(Fu, "Fu");
    function Lu(e, t, r) {
      r.removeAllFields();
      for (let n of e.outputType.fields) r.addSuggestion(new le(n.name, "false"));
      t.addErrorMessage((n) => `The ${n.red("omit")} statement includes every field of the model ${n.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Lu, "Lu");
    function Bu(e, t) {
      let r = e.outputType, n = t.arguments.getDeepSelectionParent(e.selectionPath)?.value, i = n?.isEmpty() ?? false;
      n && (n.removeAllFields(), _o(n, r)), t.addErrorMessage((o) => i ? `The ${o.red("`select`")} statement for type ${o.bold(r.name)} must not be empty. ${_t(o)}` : `The ${o.red("`select`")} statement for type ${o.bold(r.name)} needs ${o.bold("at least one truthy value")}.`);
    }
    __name(Bu, "Bu");
    function Uu(e, t) {
      let r = new Dt();
      for (let i of e.outputType.fields) i.isRelation || r.addField(i.name, "false");
      let n = new le("omit", r).makeRequired();
      if (e.selectionPath.length === 0) t.arguments.addSuggestion(n);
      else {
        let [i, o] = Mt(e.selectionPath), a = t.arguments.getDeepSelectionParent(i)?.value.asObject()?.getField(o);
        if (a) {
          let l = a?.value.asObject() ?? new at();
          l.addSuggestion(n), a.value = l;
        }
      }
      t.addErrorMessage((i) => `The global ${i.red("omit")} configuration excludes every field of the model ${i.bold(e.outputType.name)}. At least one field must be included in the result`);
    }
    __name(Uu, "Uu");
    function qu(e, t) {
      let r = No(e.selectionPath, t);
      if (r.parentKind !== "unknown") {
        r.field.markAsError();
        let n = r.parent;
        switch (r.parentKind) {
          case "select":
            _o(n, e.outputType);
            break;
          case "include":
            zu(n, e.outputType);
            break;
          case "omit":
            Yu(n, e.outputType);
            break;
        }
      }
      t.addErrorMessage((n) => {
        let i = [`Unknown field ${n.red(`\`${r.fieldName}\``)}`];
        return r.parentKind !== "unknown" && i.push(`for ${n.bold(r.parentKind)} statement`), i.push(`on model ${n.bold(`\`${e.outputType.name}\``)}.`), i.push(_t(n)), i.join(" ");
      });
    }
    __name(qu, "qu");
    function $u(e, t) {
      let r = No(e.selectionPath, t);
      r.parentKind !== "unknown" && r.field.value.markAsError(), t.addErrorMessage((n) => `Invalid value for selection field \`${n.red(r.fieldName)}\`: ${e.underlyingError}`);
    }
    __name($u, "$u");
    function ju(e, t) {
      let r = e.argumentPath[0], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && (n.getField(r)?.markAsError(), Zu(n, e.arguments)), t.addErrorMessage((i) => Do(i, r, e.arguments.map((o) => o.name)));
    }
    __name(ju, "ju");
    function Vu(e, t) {
      let [r, n] = Mt(e.argumentPath), i = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (i) {
        i.getDeepField(e.argumentPath)?.markAsError();
        let o = i.getDeepFieldValue(r)?.asObject();
        o && Fo(o, e.inputType);
      }
      t.addErrorMessage((o) => Do(o, n, e.inputType.fields.map((s) => s.name)));
    }
    __name(Vu, "Vu");
    function Do(e, t, r) {
      let n = [`Unknown argument \`${e.red(t)}\`.`], i = ec(t, r);
      return i && n.push(`Did you mean \`${e.green(i)}\`?`), r.length > 0 && n.push(_t(e)), n.join(" ");
    }
    __name(Do, "Do");
    function Gu(e, t) {
      let r;
      t.addErrorMessage((l) => r?.value instanceof H && r.value.text === "null" ? `Argument \`${l.green(o)}\` must not be ${l.red("null")}.` : `Argument \`${l.green(o)}\` is missing.`);
      let n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (!n) return;
      let [i, o] = Mt(e.argumentPath), s = new Dt(), a = n.getDeepFieldValue(i)?.asObject();
      if (a) if (r = a.getField(o), r && a.removeField(o), e.inputTypes.length === 1 && e.inputTypes[0].kind === "object") {
        for (let l of e.inputTypes[0].fields) s.addField(l.name, l.typeNames.join(" | "));
        a.addSuggestion(new le(o, s).makeRequired());
      } else {
        let l = e.inputTypes.map(Mo).join(" | ");
        a.addSuggestion(new le(o, l).makeRequired());
      }
    }
    __name(Gu, "Gu");
    function Mo(e) {
      return e.kind === "list" ? `${Mo(e.elementType)}[]` : e.name;
    }
    __name(Mo, "Mo");
    function Qu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = Or("or", e.argument.typeNames.map((s) => i.green(s)));
        return `Argument \`${i.bold(r)}\`: Invalid value provided. Expected ${o}, provided ${i.red(e.inferredType)}.`;
      });
    }
    __name(Qu, "Qu");
    function Ju(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      n && n.getDeepFieldValue(e.argumentPath)?.markAsError(), t.addErrorMessage((i) => {
        let o = [`Invalid value for argument \`${i.bold(r)}\``];
        if (e.underlyingError && o.push(`: ${e.underlyingError}`), o.push("."), e.argument.typeNames.length > 0) {
          let s = Or("or", e.argument.typeNames.map((a) => i.green(a)));
          o.push(` Expected ${s}.`);
        }
        return o.join("");
      });
    }
    __name(Ju, "Ju");
    function Wu(e, t) {
      let r = e.argument.name, n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i;
      if (n) {
        let s = n.getDeepField(e.argumentPath)?.value;
        s?.markAsError(), s instanceof H && (i = s.text);
      }
      t.addErrorMessage((o) => {
        let s = ["Unable to fit value"];
        return i && s.push(o.red(i)), s.push(`into a 64-bit signed integer for field \`${o.bold(r)}\``), s.join(" ");
      });
    }
    __name(Wu, "Wu");
    function Hu(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject();
      if (n) {
        let i = n.getDeepFieldValue(e.argumentPath)?.asObject();
        i && Fo(i, e.inputType);
      }
      t.addErrorMessage((i) => {
        let o = [`Argument \`${i.bold(r)}\` of type ${i.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 ? e.constraints.requiredFields ? o.push(`${i.green("at least one of")} ${Or("or", e.constraints.requiredFields.map((s) => `\`${i.bold(s)}\``))} arguments.`) : o.push(`${i.green("at least one")} argument.`) : o.push(`${i.green(`at least ${e.constraints.minFieldCount}`)} arguments.`), o.push(_t(i)), o.join(" ");
      });
    }
    __name(Hu, "Hu");
    function Ku(e, t) {
      let r = e.argumentPath[e.argumentPath.length - 1], n = t.arguments.getDeepSubSelectionValue(e.selectionPath)?.asObject(), i = [];
      if (n) {
        let o = n.getDeepFieldValue(e.argumentPath)?.asObject();
        o && (o.markAsError(), i = Object.keys(o.getFields()));
      }
      t.addErrorMessage((o) => {
        let s = [`Argument \`${o.bold(r)}\` of type ${o.bold(e.inputType.name)} needs`];
        return e.constraints.minFieldCount === 1 && e.constraints.maxFieldCount == 1 ? s.push(`${o.green("exactly one")} argument,`) : e.constraints.maxFieldCount == 1 ? s.push(`${o.green("at most one")} argument,`) : s.push(`${o.green(`at most ${e.constraints.maxFieldCount}`)} arguments,`), s.push(`but you provided ${Or("and", i.map((a) => o.red(a)))}. Please choose`), e.constraints.maxFieldCount === 1 ? s.push("one.") : s.push(`${e.constraints.maxFieldCount}.`), s.join(" ");
      });
    }
    __name(Ku, "Ku");
    function _o(e, t) {
      for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new le(r.name, "true"));
    }
    __name(_o, "_o");
    function zu(e, t) {
      for (let r of t.fields) r.isRelation && !e.hasField(r.name) && e.addSuggestion(new le(r.name, "true"));
    }
    __name(zu, "zu");
    function Yu(e, t) {
      for (let r of t.fields) !e.hasField(r.name) && !r.isRelation && e.addSuggestion(new le(r.name, "true"));
    }
    __name(Yu, "Yu");
    function Zu(e, t) {
      for (let r of t) e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Zu, "Zu");
    function No(e, t) {
      let [r, n] = Mt(e), i = t.arguments.getDeepSubSelectionValue(r)?.asObject();
      if (!i) return { parentKind: "unknown", fieldName: n };
      let o = i.getFieldValue("select")?.asObject(), s = i.getFieldValue("include")?.asObject(), a = i.getFieldValue("omit")?.asObject(), l = o?.getField(n);
      return o && l ? { parentKind: "select", parent: o, field: l, fieldName: n } : (l = s?.getField(n), s && l ? { parentKind: "include", field: l, parent: s, fieldName: n } : (l = a?.getField(n), a && l ? { parentKind: "omit", field: l, parent: a, fieldName: n } : { parentKind: "unknown", fieldName: n }));
    }
    __name(No, "No");
    function Fo(e, t) {
      if (t.kind === "object") for (let r of t.fields) e.hasField(r.name) || e.addSuggestion(new le(r.name, r.typeNames.join(" | ")));
    }
    __name(Fo, "Fo");
    function Mt(e) {
      let t = [...e], r = t.pop();
      if (!r) throw new Error("unexpected empty path");
      return [t, r];
    }
    __name(Mt, "Mt");
    function _t({ green: e, enabled: t }) {
      return "Available options are " + (t ? `listed in ${e("green")}` : "marked with ?") + ".";
    }
    __name(_t, "_t");
    function Or(e, t) {
      if (t.length === 1) return t[0];
      let r = [...t], n = r.pop();
      return `${r.join(", ")} ${e} ${n}`;
    }
    __name(Or, "Or");
    var Xu = 3;
    function ec(e, t) {
      let r = 1 / 0, n;
      for (let i of t) {
        let o = (0, Oo.default)(e, i);
        o > Xu || o < r && (r = o, n = i);
      }
      return n;
    }
    __name(ec, "ec");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Nt = class {
      static {
        __name(this, "Nt");
      }
      modelName;
      name;
      typeName;
      isList;
      isEnum;
      constructor(t, r, n, i, o) {
        this.modelName = t, this.name = r, this.typeName = n, this.isList = i, this.isEnum = o;
      }
      _toGraphQLInputType() {
        let t = this.isList ? "List" : "", r = this.isEnum ? "Enum" : "";
        return `${t}${r}${this.typeName}FieldRefInput<${this.modelName}>`;
      }
    };
    function lt(e) {
      return e instanceof Nt;
    }
    __name(lt, "lt");
    f();
    u();
    c();
    p();
    m2();
    var Dr = Symbol();
    var Dn = /* @__PURE__ */ new WeakMap();
    var Ce = class {
      static {
        __name(this, "Ce");
      }
      constructor(t) {
        t === Dr ? Dn.set(this, `Prisma.${this._getName()}`) : Dn.set(this, `new Prisma.${this._getNamespace()}.${this._getName()}()`);
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return Dn.get(this);
      }
    };
    var Ft = class extends Ce {
      static {
        __name(this, "Ft");
      }
      _getNamespace() {
        return "NullTypes";
      }
    };
    var Lt = class extends Ft {
      static {
        __name(this, "Lt");
      }
      #e;
    };
    Mn(Lt, "DbNull");
    var Bt = class extends Ft {
      static {
        __name(this, "Bt");
      }
      #e;
    };
    Mn(Bt, "JsonNull");
    var Ut = class extends Ft {
      static {
        __name(this, "Ut");
      }
      #e;
    };
    Mn(Ut, "AnyNull");
    var Mr = { classes: { DbNull: Lt, JsonNull: Bt, AnyNull: Ut }, instances: { DbNull: new Lt(Dr), JsonNull: new Bt(Dr), AnyNull: new Ut(Dr) } };
    function Mn(e, t) {
      Object.defineProperty(e, "name", { value: t, configurable: true });
    }
    __name(Mn, "Mn");
    f();
    u();
    c();
    p();
    m2();
    var Lo = ": ";
    var _r = class {
      static {
        __name(this, "_r");
      }
      constructor(t, r) {
        this.name = t;
        this.value = r;
      }
      hasError = false;
      markAsError() {
        this.hasError = true;
      }
      getPrintWidth() {
        return this.name.length + this.value.getPrintWidth() + Lo.length;
      }
      write(t) {
        let r = new we(this.name);
        this.hasError && r.underline().setColor(t.context.colors.red), t.write(r).write(Lo).write(this.value);
      }
    };
    var _n = class {
      static {
        __name(this, "_n");
      }
      arguments;
      errorMessages = [];
      constructor(t) {
        this.arguments = t;
      }
      write(t) {
        t.write(this.arguments);
      }
      addErrorMessage(t) {
        this.errorMessages.push(t);
      }
      renderAllMessages(t) {
        return this.errorMessages.map((r) => r(t)).join(`
`);
      }
    };
    function ut(e) {
      return new _n(Bo(e));
    }
    __name(ut, "ut");
    function Bo(e) {
      let t = new at();
      for (let [r, n] of Object.entries(e)) {
        let i = new _r(r, Uo(n));
        t.addField(i);
      }
      return t;
    }
    __name(Bo, "Bo");
    function Uo(e) {
      if (typeof e == "string") return new H(JSON.stringify(e));
      if (typeof e == "number" || typeof e == "boolean") return new H(String(e));
      if (typeof e == "bigint") return new H(`${e}n`);
      if (e === null) return new H("null");
      if (e === void 0) return new H("undefined");
      if (nt(e)) return new H(`new Prisma.Decimal("${e.toFixed()}")`);
      if (e instanceof Uint8Array) return w2.Buffer.isBuffer(e) ? new H(`Buffer.alloc(${e.byteLength})`) : new H(`new Uint8Array(${e.byteLength})`);
      if (e instanceof Date) {
        let t = Cr(e) ? e.toISOString() : "Invalid Date";
        return new H(`new Date("${t}")`);
      }
      return e instanceof Ce ? new H(`Prisma.${e._getName()}`) : lt(e) ? new H(`prisma.${De(e.modelName)}.$fields.${e.name}`) : Array.isArray(e) ? tc(e) : typeof e == "object" ? Bo(e) : new H(Object.prototype.toString.call(e));
    }
    __name(Uo, "Uo");
    function tc(e) {
      let t = new st();
      for (let r of e) t.addItem(Uo(r));
      return t;
    }
    __name(tc, "tc");
    function Nr(e, t) {
      let r = t === "pretty" ? Io : Ir, n = e.renderAllMessages(r), i = new it(0, { colors: r }).write(e).toString();
      return { message: n, args: i };
    }
    __name(Nr, "Nr");
    function Fr({ args: e, errors: t, errorFormat: r, callsite: n, originalMethod: i, clientVersion: o, globalOmit: s }) {
      let a = ut(e);
      for (let h of t) Rr(h, a, s);
      let { message: l, args: d } = Nr(a, r), g = Ar({ message: l, callsite: n, originalMethod: i, showColors: r === "pretty", callArguments: d });
      throw new Z(g, { clientVersion: o });
    }
    __name(Fr, "Fr");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function Ee(e) {
      return e.replace(/^./, (t) => t.toLowerCase());
    }
    __name(Ee, "Ee");
    f();
    u();
    c();
    p();
    m2();
    function $o(e, t, r) {
      let n = Ee(r);
      return !t.result || !(t.result.$allModels || t.result[n]) ? e : rc({ ...e, ...qo(t.name, e, t.result.$allModels), ...qo(t.name, e, t.result[n]) });
    }
    __name($o, "$o");
    function rc(e) {
      let t = new ye(), r = /* @__PURE__ */ __name((n, i) => t.getOrCreate(n, () => i.has(n) ? [n] : (i.add(n), e[n] ? e[n].needs.flatMap((o) => r(o, i)) : [n])), "r");
      return Ze(e, (n) => ({ ...n, needs: r(n.name, /* @__PURE__ */ new Set()) }));
    }
    __name(rc, "rc");
    function qo(e, t, r) {
      return r ? Ze(r, ({ needs: n, compute: i }, o) => ({ name: o, needs: n ? Object.keys(n).filter((s) => n[s]) : [], compute: nc(t, o, i) })) : {};
    }
    __name(qo, "qo");
    function nc(e, t, r) {
      let n = e?.[t]?.compute;
      return n ? (i) => r({ ...i, [t]: n(i) }) : r;
    }
    __name(nc, "nc");
    function jo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (e[n.name]) for (let i of n.needs) r[i] = true;
      return r;
    }
    __name(jo, "jo");
    function Vo(e, t) {
      if (!t) return e;
      let r = { ...e };
      for (let n of Object.values(t)) if (!e[n.name]) for (let i of n.needs) delete r[i];
      return r;
    }
    __name(Vo, "Vo");
    var Lr = class {
      static {
        __name(this, "Lr");
      }
      constructor(t, r) {
        this.extension = t;
        this.previous = r;
      }
      computedFieldsCache = new ye();
      modelExtensionsCache = new ye();
      queryCallbacksCache = new ye();
      clientExtensions = kt(() => this.extension.client ? { ...this.previous?.getAllClientExtensions(), ...this.extension.client } : this.previous?.getAllClientExtensions());
      batchCallbacks = kt(() => {
        let t = this.previous?.getAllBatchQueryCallbacks() ?? [], r = this.extension.query?.$__internalBatch;
        return r ? t.concat(r) : t;
      });
      getAllComputedFields(t) {
        return this.computedFieldsCache.getOrCreate(t, () => $o(this.previous?.getAllComputedFields(t), this.extension, t));
      }
      getAllClientExtensions() {
        return this.clientExtensions.get();
      }
      getAllModelExtensions(t) {
        return this.modelExtensionsCache.getOrCreate(t, () => {
          let r = Ee(t);
          return !this.extension.model || !(this.extension.model[r] || this.extension.model.$allModels) ? this.previous?.getAllModelExtensions(t) : { ...this.previous?.getAllModelExtensions(t), ...this.extension.model.$allModels, ...this.extension.model[r] };
        });
      }
      getAllQueryCallbacks(t, r) {
        return this.queryCallbacksCache.getOrCreate(`${t}:${r}`, () => {
          let n = this.previous?.getAllQueryCallbacks(t, r) ?? [], i = [], o = this.extension.query;
          return !o || !(o[t] || o.$allModels || o[r] || o.$allOperations) ? n : (o[t] !== void 0 && (o[t][r] !== void 0 && i.push(o[t][r]), o[t].$allOperations !== void 0 && i.push(o[t].$allOperations)), t !== "$none" && o.$allModels !== void 0 && (o.$allModels[r] !== void 0 && i.push(o.$allModels[r]), o.$allModels.$allOperations !== void 0 && i.push(o.$allModels.$allOperations)), o[r] !== void 0 && i.push(o[r]), o.$allOperations !== void 0 && i.push(o.$allOperations), n.concat(i));
        });
      }
      getAllBatchQueryCallbacks() {
        return this.batchCallbacks.get();
      }
    };
    var ct = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.head = t;
      }
      static empty() {
        return new e();
      }
      static single(t) {
        return new e(new Lr(t));
      }
      isEmpty() {
        return this.head === void 0;
      }
      append(t) {
        return new e(new Lr(t, this.head));
      }
      getAllComputedFields(t) {
        return this.head?.getAllComputedFields(t);
      }
      getAllClientExtensions() {
        return this.head?.getAllClientExtensions();
      }
      getAllModelExtensions(t) {
        return this.head?.getAllModelExtensions(t);
      }
      getAllQueryCallbacks(t, r) {
        return this.head?.getAllQueryCallbacks(t, r) ?? [];
      }
      getAllBatchQueryCallbacks() {
        return this.head?.getAllBatchQueryCallbacks() ?? [];
      }
    };
    f();
    u();
    c();
    p();
    m2();
    var Br = class {
      static {
        __name(this, "Br");
      }
      constructor(t) {
        this.name = t;
      }
    };
    function Go(e) {
      return e instanceof Br;
    }
    __name(Go, "Go");
    function Qo(e) {
      return new Br(e);
    }
    __name(Qo, "Qo");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Jo = Symbol();
    var qt = class {
      static {
        __name(this, "qt");
      }
      constructor(t) {
        if (t !== Jo) throw new Error("Skip instance can not be constructed directly");
      }
      ifUndefined(t) {
        return t === void 0 ? Ur : t;
      }
    };
    var Ur = new qt(Jo);
    function be(e) {
      return e instanceof qt;
    }
    __name(be, "be");
    var ic = { findUnique: "findUnique", findUniqueOrThrow: "findUniqueOrThrow", findFirst: "findFirst", findFirstOrThrow: "findFirstOrThrow", findMany: "findMany", count: "aggregate", create: "createOne", createMany: "createMany", createManyAndReturn: "createManyAndReturn", update: "updateOne", updateMany: "updateMany", updateManyAndReturn: "updateManyAndReturn", upsert: "upsertOne", delete: "deleteOne", deleteMany: "deleteMany", executeRaw: "executeRaw", queryRaw: "queryRaw", aggregate: "aggregate", groupBy: "groupBy", runCommandRaw: "runCommandRaw", findRaw: "findRaw", aggregateRaw: "aggregateRaw" };
    var Wo = "explicitly `undefined` values are not allowed";
    function qr({ modelName: e, action: t, args: r, runtimeDataModel: n, extensions: i = ct.empty(), callsite: o, clientMethod: s, errorFormat: a, clientVersion: l, previewFeatures: d, globalOmit: g }) {
      let h = new Nn({ runtimeDataModel: n, modelName: e, action: t, rootArgs: r, callsite: o, extensions: i, selectionPath: [], argumentPath: [], originalMethod: s, errorFormat: a, clientVersion: l, previewFeatures: d, globalOmit: g });
      return { modelName: e, action: ic[t], query: $t(r, h) };
    }
    __name(qr, "qr");
    function $t({ select: e, include: t, ...r } = {}, n) {
      let i = r.omit;
      return delete r.omit, { arguments: Ko(r, n), selection: oc(e, t, i, n) };
    }
    __name($t, "$t");
    function oc(e, t, r, n) {
      return e ? (t ? n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "include", secondField: "select", selectionPath: n.getSelectionPath() }) : r && n.throwValidationError({ kind: "MutuallyExclusiveFields", firstField: "omit", secondField: "select", selectionPath: n.getSelectionPath() }), uc(e, n)) : sc(n, t, r);
    }
    __name(oc, "oc");
    function sc(e, t, r) {
      let n = {};
      return e.modelOrType && !e.isRawAction() && (n.$composites = true, n.$scalars = true), t && ac(n, t, e), lc(n, r, e), n;
    }
    __name(sc, "sc");
    function ac(e, t, r) {
      for (let [n, i] of Object.entries(t)) {
        if (be(i)) continue;
        let o = r.nestSelection(n);
        if (Fn(i, o), i === false || i === void 0) {
          e[n] = false;
          continue;
        }
        let s = r.findField(n);
        if (s && s.kind !== "object" && r.throwValidationError({ kind: "IncludeOnScalar", selectionPath: r.getSelectionPath().concat(n), outputType: r.getOutputTypeDescription() }), s) {
          e[n] = $t(i === true ? {} : i, o);
          continue;
        }
        if (i === true) {
          e[n] = true;
          continue;
        }
        e[n] = $t(i, o);
      }
    }
    __name(ac, "ac");
    function lc(e, t, r) {
      let n = r.getComputedFields(), i = { ...r.getGlobalOmit(), ...t }, o = Vo(i, n);
      for (let [s, a] of Object.entries(o)) {
        if (be(a)) continue;
        Fn(a, r.nestSelection(s));
        let l = r.findField(s);
        n?.[s] && !l || (e[s] = !a);
      }
    }
    __name(lc, "lc");
    function uc(e, t) {
      let r = {}, n = t.getComputedFields(), i = jo(e, n);
      for (let [o, s] of Object.entries(i)) {
        if (be(s)) continue;
        let a = t.nestSelection(o);
        Fn(s, a);
        let l = t.findField(o);
        if (!(n?.[o] && !l)) {
          if (s === false || s === void 0 || be(s)) {
            r[o] = false;
            continue;
          }
          if (s === true) {
            l?.kind === "object" ? r[o] = $t({}, a) : r[o] = true;
            continue;
          }
          r[o] = $t(s, a);
        }
      }
      return r;
    }
    __name(uc, "uc");
    function Ho(e, t) {
      if (e === null) return null;
      if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return e;
      if (typeof e == "bigint") return { $type: "BigInt", value: String(e) };
      if (rt(e)) {
        if (Cr(e)) return { $type: "DateTime", value: e.toISOString() };
        t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: ["Date"] }, underlyingError: "Provided Date object is invalid" });
      }
      if (Go(e)) return { $type: "Param", value: e.name };
      if (lt(e)) return { $type: "FieldRef", value: { _ref: e.name, _container: e.modelName } };
      if (Array.isArray(e)) return cc(e, t);
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { $type: "Bytes", value: w2.Buffer.from(r, n, i).toString("base64") };
      }
      if (pc(e)) return e.values;
      if (nt(e)) return { $type: "Decimal", value: e.toFixed() };
      if (e instanceof Ce) {
        if (e !== Mr.instances[e._getName()]) throw new Error("Invalid ObjectEnumValue");
        return { $type: "Enum", value: e._getName() };
      }
      if (mc(e)) return e.toJSON();
      if (typeof e == "object") return Ko(e, t);
      t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: t.getSelectionPath(), argumentPath: t.getArgumentPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: `We could not serialize ${Object.prototype.toString.call(e)} value. Serialize the object to JSON or implement a ".toJSON()" method on it` });
    }
    __name(Ho, "Ho");
    function Ko(e, t) {
      if (e.$type) return { $type: "Raw", value: e };
      let r = {};
      for (let n in e) {
        let i = e[n], o = t.nestArgument(n);
        be(i) || (i !== void 0 ? r[n] = Ho(i, o) : t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidArgumentValue", argumentPath: o.getArgumentPath(), selectionPath: t.getSelectionPath(), argument: { name: t.getArgumentName(), typeNames: [] }, underlyingError: Wo }));
      }
      return r;
    }
    __name(Ko, "Ko");
    function cc(e, t) {
      let r = [];
      for (let n = 0; n < e.length; n++) {
        let i = t.nestArgument(String(n)), o = e[n];
        if (o === void 0 || be(o)) {
          let s = o === void 0 ? "undefined" : "Prisma.skip";
          t.throwValidationError({ kind: "InvalidArgumentValue", selectionPath: i.getSelectionPath(), argumentPath: i.getArgumentPath(), argument: { name: `${t.getArgumentName()}[${n}]`, typeNames: [] }, underlyingError: `Can not use \`${s}\` value within array. Use \`null\` or filter out \`${s}\` values` });
        }
        r.push(Ho(o, i));
      }
      return r;
    }
    __name(cc, "cc");
    function pc(e) {
      return typeof e == "object" && e !== null && e.__prismaRawParameters__ === true;
    }
    __name(pc, "pc");
    function mc(e) {
      return typeof e == "object" && e !== null && typeof e.toJSON == "function";
    }
    __name(mc, "mc");
    function Fn(e, t) {
      e === void 0 && t.isPreviewFeatureOn("strictUndefinedChecks") && t.throwValidationError({ kind: "InvalidSelectionValue", selectionPath: t.getSelectionPath(), underlyingError: Wo });
    }
    __name(Fn, "Fn");
    var Nn = class e {
      static {
        __name(this, "e");
      }
      constructor(t) {
        this.params = t;
        this.params.modelName && (this.modelOrType = this.params.runtimeDataModel.models[this.params.modelName] ?? this.params.runtimeDataModel.types[this.params.modelName]);
      }
      modelOrType;
      throwValidationError(t) {
        Fr({ errors: [t], originalMethod: this.params.originalMethod, args: this.params.rootArgs ?? {}, callsite: this.params.callsite, errorFormat: this.params.errorFormat, clientVersion: this.params.clientVersion, globalOmit: this.params.globalOmit });
      }
      getSelectionPath() {
        return this.params.selectionPath;
      }
      getArgumentPath() {
        return this.params.argumentPath;
      }
      getArgumentName() {
        return this.params.argumentPath[this.params.argumentPath.length - 1];
      }
      getOutputTypeDescription() {
        if (!(!this.params.modelName || !this.modelOrType)) return { name: this.params.modelName, fields: this.modelOrType.fields.map((t) => ({ name: t.name, typeName: "boolean", isRelation: t.kind === "object" })) };
      }
      isRawAction() {
        return ["executeRaw", "queryRaw", "runCommandRaw", "findRaw", "aggregateRaw"].includes(this.params.action);
      }
      isPreviewFeatureOn(t) {
        return this.params.previewFeatures.includes(t);
      }
      getComputedFields() {
        if (this.params.modelName) return this.params.extensions.getAllComputedFields(this.params.modelName);
      }
      findField(t) {
        return this.modelOrType?.fields.find((r) => r.name === t);
      }
      nestSelection(t) {
        let r = this.findField(t), n = r?.kind === "object" ? r.type : void 0;
        return new e({ ...this.params, modelName: n, selectionPath: this.params.selectionPath.concat(t) });
      }
      getGlobalOmit() {
        return this.params.modelName && this.shouldApplyGlobalOmit() ? this.params.globalOmit?.[De(this.params.modelName)] ?? {} : {};
      }
      shouldApplyGlobalOmit() {
        switch (this.params.action) {
          case "findFirst":
          case "findFirstOrThrow":
          case "findUniqueOrThrow":
          case "findMany":
          case "upsert":
          case "findUnique":
          case "createManyAndReturn":
          case "create":
          case "update":
          case "updateManyAndReturn":
          case "delete":
            return true;
          case "executeRaw":
          case "aggregateRaw":
          case "runCommandRaw":
          case "findRaw":
          case "createMany":
          case "deleteMany":
          case "groupBy":
          case "updateMany":
          case "count":
          case "aggregate":
          case "queryRaw":
            return false;
          default:
            Pe(this.params.action, "Unknown action");
        }
      }
      nestArgument(t) {
        return new e({ ...this.params, argumentPath: this.params.argumentPath.concat(t) });
      }
    };
    f();
    u();
    c();
    p();
    m2();
    function zo(e) {
      if (!e._hasPreviewFlag("metrics")) throw new Z("`metrics` preview feature must be enabled in order to access metrics API", { clientVersion: e._clientVersion });
    }
    __name(zo, "zo");
    var pt = class {
      static {
        __name(this, "pt");
      }
      _client;
      constructor(t) {
        this._client = t;
      }
      prometheus(t) {
        return zo(this._client), this._client._engine.metrics({ format: "prometheus", ...t });
      }
      json(t) {
        return zo(this._client), this._client._engine.metrics({ format: "json", ...t });
      }
    };
    f();
    u();
    c();
    p();
    m2();
    function Yo(e, t) {
      let r = kt(() => fc(t));
      Object.defineProperty(e, "dmmf", { get: /* @__PURE__ */ __name(() => r.get(), "get") });
    }
    __name(Yo, "Yo");
    function fc(e) {
      return { datamodel: { models: Ln(e.models), enums: Ln(e.enums), types: Ln(e.types) } };
    }
    __name(fc, "fc");
    function Ln(e) {
      return Object.entries(e).map(([t, r]) => ({ name: t, ...r }));
    }
    __name(Ln, "Ln");
    f();
    u();
    c();
    p();
    m2();
    var Bn = /* @__PURE__ */ new WeakMap();
    var $r = "$$PrismaTypedSql";
    var jt = class {
      static {
        __name(this, "jt");
      }
      constructor(t, r) {
        Bn.set(this, { sql: t, values: r }), Object.defineProperty(this, $r, { value: $r });
      }
      get sql() {
        return Bn.get(this).sql;
      }
      get values() {
        return Bn.get(this).values;
      }
    };
    function Zo(e) {
      return (...t) => new jt(e, t);
    }
    __name(Zo, "Zo");
    function jr(e) {
      return e != null && e[$r] === $r;
    }
    __name(jr, "jr");
    f();
    u();
    c();
    p();
    m2();
    var fa = Qe(Xo());
    f();
    u();
    c();
    p();
    m2();
    es();
    Gi();
    Hi();
    f();
    u();
    c();
    p();
    m2();
    var oe = class e {
      static {
        __name(this, "e");
      }
      constructor(t, r) {
        if (t.length - 1 !== r.length) throw t.length === 0 ? new TypeError("Expected at least 1 string") : new TypeError(`Expected ${t.length} strings to have ${t.length - 1} values`);
        let n = r.reduce((s, a) => s + (a instanceof e ? a.values.length : 1), 0);
        this.values = new Array(n), this.strings = new Array(n + 1), this.strings[0] = t[0];
        let i = 0, o = 0;
        for (; i < r.length; ) {
          let s = r[i++], a = t[i];
          if (s instanceof e) {
            this.strings[o] += s.strings[0];
            let l = 0;
            for (; l < s.values.length; ) this.values[o++] = s.values[l++], this.strings[o] = s.strings[l];
            this.strings[o] += a;
          } else this.values[o++] = s, this.strings[o] = a;
        }
      }
      get sql() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `?${this.strings[r++]}`;
        return n;
      }
      get statement() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `:${r}${this.strings[r++]}`;
        return n;
      }
      get text() {
        let t = this.strings.length, r = 1, n = this.strings[0];
        for (; r < t; ) n += `$${r}${this.strings[r++]}`;
        return n;
      }
      inspect() {
        return { sql: this.sql, statement: this.statement, text: this.text, values: this.values };
      }
    };
    function ts(e, t = ",", r = "", n = "") {
      if (e.length === 0) throw new TypeError("Expected `join([])` to be called with an array of multiple elements, but got an empty array");
      return new oe([r, ...Array(e.length - 1).fill(t), n], e);
    }
    __name(ts, "ts");
    function Un(e) {
      return new oe([e], []);
    }
    __name(Un, "Un");
    var rs = Un("");
    function qn(e, ...t) {
      return new oe(e, t);
    }
    __name(qn, "qn");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function Vt(e) {
      return { getKeys() {
        return Object.keys(e);
      }, getPropertyValue(t) {
        return e[t];
      } };
    }
    __name(Vt, "Vt");
    f();
    u();
    c();
    p();
    m2();
    function ee(e, t) {
      return { getKeys() {
        return [e];
      }, getPropertyValue() {
        return t();
      } };
    }
    __name(ee, "ee");
    f();
    u();
    c();
    p();
    m2();
    function Ue(e) {
      let t = new ye();
      return { getKeys() {
        return e.getKeys();
      }, getPropertyValue(r) {
        return t.getOrCreate(r, () => e.getPropertyValue(r));
      }, getPropertyDescriptor(r) {
        return e.getPropertyDescriptor?.(r);
      } };
    }
    __name(Ue, "Ue");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Gr = { enumerable: true, configurable: true, writable: true };
    function Qr(e) {
      let t = new Set(e);
      return { getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf"), getOwnPropertyDescriptor: /* @__PURE__ */ __name(() => Gr, "getOwnPropertyDescriptor"), has: /* @__PURE__ */ __name((r, n) => t.has(n), "has"), set: /* @__PURE__ */ __name((r, n, i) => t.add(n) && Reflect.set(r, n, i), "set"), ownKeys: /* @__PURE__ */ __name(() => [...t], "ownKeys") };
    }
    __name(Qr, "Qr");
    var ns = Symbol.for("nodejs.util.inspect.custom");
    function me(e, t) {
      let r = gc(t), n = /* @__PURE__ */ new Set(), i = new Proxy(e, { get(o, s) {
        if (n.has(s)) return o[s];
        let a = r.get(s);
        return a ? a.getPropertyValue(s) : o[s];
      }, has(o, s) {
        if (n.has(s)) return true;
        let a = r.get(s);
        return a ? a.has?.(s) ?? true : Reflect.has(o, s);
      }, ownKeys(o) {
        let s = is(Reflect.ownKeys(o), r), a = is(Array.from(r.keys()), r);
        return [.../* @__PURE__ */ new Set([...s, ...a, ...n])];
      }, set(o, s, a) {
        return r.get(s)?.getPropertyDescriptor?.(s)?.writable === false ? false : (n.add(s), Reflect.set(o, s, a));
      }, getOwnPropertyDescriptor(o, s) {
        let a = Reflect.getOwnPropertyDescriptor(o, s);
        if (a && !a.configurable) return a;
        let l = r.get(s);
        return l ? l.getPropertyDescriptor ? { ...Gr, ...l?.getPropertyDescriptor(s) } : Gr : a;
      }, defineProperty(o, s, a) {
        return n.add(s), Reflect.defineProperty(o, s, a);
      }, getPrototypeOf: /* @__PURE__ */ __name(() => Object.prototype, "getPrototypeOf") });
      return i[ns] = function() {
        let o = { ...this };
        return delete o[ns], o;
      }, i;
    }
    __name(me, "me");
    function gc(e) {
      let t = /* @__PURE__ */ new Map();
      for (let r of e) {
        let n = r.getKeys();
        for (let i of n) t.set(i, r);
      }
      return t;
    }
    __name(gc, "gc");
    function is(e, t) {
      return e.filter((r) => t.get(r)?.has?.(r) ?? true);
    }
    __name(is, "is");
    f();
    u();
    c();
    p();
    m2();
    function mt(e) {
      return { getKeys() {
        return e;
      }, has() {
        return false;
      }, getPropertyValue() {
      } };
    }
    __name(mt, "mt");
    f();
    u();
    c();
    p();
    m2();
    function Jr(e, t) {
      return { batch: e, transaction: t?.kind === "batch" ? { isolationLevel: t.options.isolationLevel } : void 0 };
    }
    __name(Jr, "Jr");
    f();
    u();
    c();
    p();
    m2();
    function os(e) {
      if (e === void 0) return "";
      let t = ut(e);
      return new it(0, { colors: Ir }).write(t).toString();
    }
    __name(os, "os");
    f();
    u();
    c();
    p();
    m2();
    var hc = "P2037";
    function Wr({ error: e, user_facing_error: t }, r, n) {
      return t.error_code ? new re(yc(t, n), { code: t.error_code, clientVersion: r, meta: t.meta, batchRequestIdx: t.batch_request_idx }) : new ne(e, { clientVersion: r, batchRequestIdx: t.batch_request_idx });
    }
    __name(Wr, "Wr");
    function yc(e, t) {
      let r = e.message;
      return (t === "postgresql" || t === "postgres" || t === "mysql") && e.error_code === hc && (r += `
Prisma Accelerate has built-in connection pooling to prevent such errors: https://pris.ly/client/error-accelerate`), r;
    }
    __name(yc, "yc");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var $n = class {
      static {
        __name(this, "$n");
      }
      getLocation() {
        return null;
      }
    };
    function _e(e) {
      return typeof $EnabledCallSite == "function" && e !== "minimal" ? new $EnabledCallSite() : new $n();
    }
    __name(_e, "_e");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var ss = { _avg: true, _count: true, _sum: true, _min: true, _max: true };
    function ft(e = {}) {
      let t = Ec(e);
      return Object.entries(t).reduce((n, [i, o]) => (ss[i] !== void 0 ? n.select[i] = { select: o } : n[i] = o, n), { select: {} });
    }
    __name(ft, "ft");
    function Ec(e = {}) {
      return typeof e._count == "boolean" ? { ...e, _count: { _all: e._count } } : e;
    }
    __name(Ec, "Ec");
    function Hr(e = {}) {
      return (t) => (typeof e._count == "boolean" && (t._count = t._count._all), t);
    }
    __name(Hr, "Hr");
    function as(e, t) {
      let r = Hr(e);
      return t({ action: "aggregate", unpacker: r, argsMapper: ft })(e);
    }
    __name(as, "as");
    f();
    u();
    c();
    p();
    m2();
    function bc(e = {}) {
      let { select: t, ...r } = e;
      return typeof t == "object" ? ft({ ...r, _count: t }) : ft({ ...r, _count: { _all: true } });
    }
    __name(bc, "bc");
    function xc(e = {}) {
      return typeof e.select == "object" ? (t) => Hr(e)(t)._count : (t) => Hr(e)(t)._count._all;
    }
    __name(xc, "xc");
    function ls(e, t) {
      return t({ action: "count", unpacker: xc(e), argsMapper: bc })(e);
    }
    __name(ls, "ls");
    f();
    u();
    c();
    p();
    m2();
    function Pc(e = {}) {
      let t = ft(e);
      if (Array.isArray(t.by)) for (let r of t.by) typeof r == "string" && (t.select[r] = true);
      else typeof t.by == "string" && (t.select[t.by] = true);
      return t;
    }
    __name(Pc, "Pc");
    function vc(e = {}) {
      return (t) => (typeof e?._count == "boolean" && t.forEach((r) => {
        r._count = r._count._all;
      }), t);
    }
    __name(vc, "vc");
    function us(e, t) {
      return t({ action: "groupBy", unpacker: vc(e), argsMapper: Pc })(e);
    }
    __name(us, "us");
    function cs(e, t, r) {
      if (t === "aggregate") return (n) => as(n, r);
      if (t === "count") return (n) => ls(n, r);
      if (t === "groupBy") return (n) => us(n, r);
    }
    __name(cs, "cs");
    f();
    u();
    c();
    p();
    m2();
    function ps(e, t) {
      let r = t.fields.filter((i) => !i.relationName), n = xo(r, "name");
      return new Proxy({}, { get(i, o) {
        if (o in i || typeof o == "symbol") return i[o];
        let s = n[o];
        if (s) return new Nt(e, o, s.type, s.isList, s.kind === "enum");
      }, ...Qr(Object.keys(n)) });
    }
    __name(ps, "ps");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var ms = /* @__PURE__ */ __name((e) => Array.isArray(e) ? e : e.split("."), "ms");
    var jn = /* @__PURE__ */ __name((e, t) => ms(t).reduce((r, n) => r && r[n], e), "jn");
    var fs = /* @__PURE__ */ __name((e, t, r) => ms(t).reduceRight((n, i, o, s) => Object.assign({}, jn(e, s.slice(0, o)), { [i]: n }), r), "fs");
    function Tc(e, t) {
      return e === void 0 || t === void 0 ? [] : [...t, "select", e];
    }
    __name(Tc, "Tc");
    function Cc(e, t, r) {
      return t === void 0 ? e ?? {} : fs(t, r, e || true);
    }
    __name(Cc, "Cc");
    function Vn(e, t, r, n, i, o) {
      let a = e._runtimeDataModel.models[t].fields.reduce((l, d) => ({ ...l, [d.name]: d }), {});
      return (l) => {
        let d = _e(e._errorFormat), g = Tc(n, i), h = Cc(l, o, g), v = r({ dataPath: g, callsite: d })(h), S = Ac(e, t);
        return new Proxy(v, { get(A2, R) {
          if (!S.includes(R)) return A2[R];
          let M = [a[R].type, r, R], B = [g, h];
          return Vn(e, ...M, ...B);
        }, ...Qr([...S, ...Object.getOwnPropertyNames(v)]) });
      };
    }
    __name(Vn, "Vn");
    function Ac(e, t) {
      return e._runtimeDataModel.models[t].fields.filter((r) => r.kind === "object").map((r) => r.name);
    }
    __name(Ac, "Ac");
    var Rc = ["findUnique", "findUniqueOrThrow", "findFirst", "findFirstOrThrow", "create", "update", "upsert", "delete"];
    var Sc = ["aggregate", "count", "groupBy"];
    function Gn(e, t) {
      let r = e._extensions.getAllModelExtensions(t) ?? {}, n = [kc(e, t), Oc(e, t), Vt(r), ee("name", () => t), ee("$name", () => t), ee("$parent", () => e._appliedParent)];
      return me({}, n);
    }
    __name(Gn, "Gn");
    function kc(e, t) {
      let r = Ee(t), n = Object.keys(It).concat("count");
      return { getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = i, s = /* @__PURE__ */ __name((a) => (l) => {
          let d = _e(e._errorFormat);
          return e._createPrismaPromise((g) => {
            let h = { args: l, dataPath: [], action: o, model: t, clientMethod: `${r}.${i}`, jsModelName: r, transaction: g, callsite: d };
            return e._request({ ...h, ...a });
          }, { action: o, args: l, model: t });
        }, "s");
        return Rc.includes(o) ? Vn(e, t, s) : Ic(i) ? cs(e, i, s) : s({});
      } };
    }
    __name(kc, "kc");
    function Ic(e) {
      return Sc.includes(e);
    }
    __name(Ic, "Ic");
    function Oc(e, t) {
      return Ue(ee("fields", () => {
        let r = e._runtimeDataModel.models[t];
        return ps(t, r);
      }));
    }
    __name(Oc, "Oc");
    f();
    u();
    c();
    p();
    m2();
    function ds(e) {
      return e.replace(/^./, (t) => t.toUpperCase());
    }
    __name(ds, "ds");
    var Qn = Symbol();
    function Gt(e) {
      let t = [Dc(e), Mc(e), ee(Qn, () => e), ee("$parent", () => e._appliedParent)], r = e._extensions.getAllClientExtensions();
      return r && t.push(Vt(r)), me(e, t);
    }
    __name(Gt, "Gt");
    function Dc(e) {
      let t = Object.getPrototypeOf(e._originalClient), r = [...new Set(Object.getOwnPropertyNames(t))];
      return { getKeys() {
        return r;
      }, getPropertyValue(n) {
        return e[n];
      } };
    }
    __name(Dc, "Dc");
    function Mc(e) {
      let t = Object.keys(e._runtimeDataModel.models), r = t.map(Ee), n = [...new Set(t.concat(r))];
      return Ue({ getKeys() {
        return n;
      }, getPropertyValue(i) {
        let o = ds(i);
        if (e._runtimeDataModel.models[o] !== void 0) return Gn(e, o);
        if (e._runtimeDataModel.models[i] !== void 0) return Gn(e, i);
      }, getPropertyDescriptor(i) {
        if (!r.includes(i)) return { enumerable: false };
      } });
    }
    __name(Mc, "Mc");
    function gs(e) {
      return e[Qn] ? e[Qn] : e;
    }
    __name(gs, "gs");
    function hs(e) {
      if (typeof e == "function") return e(this);
      if (e.client?.__AccelerateEngine) {
        let r = e.client.__AccelerateEngine;
        this._originalClient._engine = new r(this._originalClient._accelerateEngineConfig);
      }
      let t = Object.create(this._originalClient, { _extensions: { value: this._extensions.append(e) }, _appliedParent: { value: this, configurable: true }, $use: { value: void 0 }, $on: { value: void 0 } });
      return Gt(t);
    }
    __name(hs, "hs");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function ys({ result: e, modelName: t, select: r, omit: n, extensions: i }) {
      let o = i.getAllComputedFields(t);
      if (!o) return e;
      let s = [], a = [];
      for (let l of Object.values(o)) {
        if (n) {
          if (n[l.name]) continue;
          let d = l.needs.filter((g) => n[g]);
          d.length > 0 && a.push(mt(d));
        } else if (r) {
          if (!r[l.name]) continue;
          let d = l.needs.filter((g) => !r[g]);
          d.length > 0 && a.push(mt(d));
        }
        _c(e, l.needs) && s.push(Nc(l, me(e, s)));
      }
      return s.length > 0 || a.length > 0 ? me(e, [...s, ...a]) : e;
    }
    __name(ys, "ys");
    function _c(e, t) {
      return t.every((r) => Pn(e, r));
    }
    __name(_c, "_c");
    function Nc(e, t) {
      return Ue(ee(e.name, () => e.compute(t)));
    }
    __name(Nc, "Nc");
    f();
    u();
    c();
    p();
    m2();
    function Kr({ visitor: e, result: t, args: r, runtimeDataModel: n, modelName: i }) {
      if (Array.isArray(t)) {
        for (let s = 0; s < t.length; s++) t[s] = Kr({ result: t[s], args: r, modelName: i, runtimeDataModel: n, visitor: e });
        return t;
      }
      let o = e(t, i, r) ?? t;
      return r.include && ws({ includeOrSelect: r.include, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), r.select && ws({ includeOrSelect: r.select, result: o, parentModelName: i, runtimeDataModel: n, visitor: e }), o;
    }
    __name(Kr, "Kr");
    function ws({ includeOrSelect: e, result: t, parentModelName: r, runtimeDataModel: n, visitor: i }) {
      for (let [o, s] of Object.entries(e)) {
        if (!s || t[o] == null || be(s)) continue;
        let l = n.models[r].fields.find((g) => g.name === o);
        if (!l || l.kind !== "object" || !l.relationName) continue;
        let d = typeof s == "object" ? s : {};
        t[o] = Kr({ visitor: i, result: t[o], args: d, modelName: l.type, runtimeDataModel: n });
      }
    }
    __name(ws, "ws");
    function Es({ result: e, modelName: t, args: r, extensions: n, runtimeDataModel: i, globalOmit: o }) {
      return n.isEmpty() || e == null || typeof e != "object" || !i.models[t] ? e : Kr({ result: e, args: r ?? {}, modelName: t, runtimeDataModel: i, visitor: /* @__PURE__ */ __name((a, l, d) => {
        let g = Ee(l);
        return ys({ result: a, modelName: g, select: d.select, omit: d.select ? void 0 : { ...o?.[g], ...d.omit }, extensions: n });
      }, "visitor") });
    }
    __name(Es, "Es");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Fc = ["$connect", "$disconnect", "$on", "$transaction", "$use", "$extends"];
    var bs = Fc;
    function xs(e) {
      if (e instanceof oe) return Lc(e);
      if (jr(e)) return Bc(e);
      if (Array.isArray(e)) {
        let r = [e[0]];
        for (let n = 1; n < e.length; n++) r[n] = Qt(e[n]);
        return r;
      }
      let t = {};
      for (let r in e) t[r] = Qt(e[r]);
      return t;
    }
    __name(xs, "xs");
    function Lc(e) {
      return new oe(e.strings, e.values);
    }
    __name(Lc, "Lc");
    function Bc(e) {
      return new jt(e.sql, e.values);
    }
    __name(Bc, "Bc");
    function Qt(e) {
      if (typeof e != "object" || e == null || e instanceof Ce || lt(e)) return e;
      if (nt(e)) return new pe(e.toFixed());
      if (rt(e)) return /* @__PURE__ */ new Date(+e);
      if (ArrayBuffer.isView(e)) return e.slice(0);
      if (Array.isArray(e)) {
        let t = e.length, r;
        for (r = Array(t); t--; ) r[t] = Qt(e[t]);
        return r;
      }
      if (typeof e == "object") {
        let t = {};
        for (let r in e) r === "__proto__" ? Object.defineProperty(t, r, { value: Qt(e[r]), configurable: true, enumerable: true, writable: true }) : t[r] = Qt(e[r]);
        return t;
      }
      Pe(e, "Unknown value");
    }
    __name(Qt, "Qt");
    function vs(e, t, r, n = 0) {
      return e._createPrismaPromise((i) => {
        let o = t.customDataProxyFetch;
        return "transaction" in t && i !== void 0 && (t.transaction?.kind === "batch" && t.transaction.lock.then(), t.transaction = i), n === r.length ? e._executeRequest(t) : r[n]({ model: t.model, operation: t.model ? t.action : t.clientMethod, args: xs(t.args ?? {}), __internalParams: t, query: /* @__PURE__ */ __name((s, a = t) => {
          let l = a.customDataProxyFetch;
          return a.customDataProxyFetch = Rs(o, l), a.args = s, vs(e, a, r, n + 1);
        }, "query") });
      });
    }
    __name(vs, "vs");
    function Ts(e, t) {
      let { jsModelName: r, action: n, clientMethod: i } = t, o = r ? n : i;
      if (e._extensions.isEmpty()) return e._executeRequest(t);
      let s = e._extensions.getAllQueryCallbacks(r ?? "$none", o);
      return vs(e, t, s);
    }
    __name(Ts, "Ts");
    function Cs(e) {
      return (t) => {
        let r = { requests: t }, n = t[0].extensions.getAllBatchQueryCallbacks();
        return n.length ? As(r, n, 0, e) : e(r);
      };
    }
    __name(Cs, "Cs");
    function As(e, t, r, n) {
      if (r === t.length) return n(e);
      let i = e.customDataProxyFetch, o = e.requests[0].transaction;
      return t[r]({ args: { queries: e.requests.map((s) => ({ model: s.modelName, operation: s.action, args: s.args })), transaction: o ? { isolationLevel: o.kind === "batch" ? o.isolationLevel : void 0 } : void 0 }, __internalParams: e, query(s, a = e) {
        let l = a.customDataProxyFetch;
        return a.customDataProxyFetch = Rs(i, l), As(a, t, r + 1, n);
      } });
    }
    __name(As, "As");
    var Ps = /* @__PURE__ */ __name((e) => e, "Ps");
    function Rs(e = Ps, t = Ps) {
      return (r) => e(t(r));
    }
    __name(Rs, "Rs");
    f();
    u();
    c();
    p();
    m2();
    var Ss = K("prisma:client");
    var ks = { Vercel: "vercel", "Netlify CI": "netlify" };
    function Is({ postinstall: e, ciName: t, clientVersion: r }) {
      if (Ss("checkPlatformCaching:postinstall", e), Ss("checkPlatformCaching:ciName", t), e === true && t && t in ks) {
        let n = `Prisma has detected that this project was built on ${t}, which caches dependencies. This leads to an outdated Prisma Client because Prisma's auto-generation isn't triggered. To fix this, make sure to run the \`prisma generate\` command during the build process.

Learn how: https://pris.ly/d/${ks[t]}-build`;
        throw console.error(n), new Q(n, r);
      }
    }
    __name(Is, "Is");
    f();
    u();
    c();
    p();
    m2();
    function Os(e, t) {
      return e ? e.datasources ? e.datasources : e.datasourceUrl ? { [t[0]]: { url: e.datasourceUrl } } : {} : {};
    }
    __name(Os, "Os");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Uc = /* @__PURE__ */ __name(() => globalThis.process?.release?.name === "node", "Uc");
    var qc = /* @__PURE__ */ __name(() => !!globalThis.Bun || !!globalThis.process?.versions?.bun, "qc");
    var $c = /* @__PURE__ */ __name(() => !!globalThis.Deno, "$c");
    var jc = /* @__PURE__ */ __name(() => typeof globalThis.Netlify == "object", "jc");
    var Vc = /* @__PURE__ */ __name(() => typeof globalThis.EdgeRuntime == "object", "Vc");
    var Gc = /* @__PURE__ */ __name(() => globalThis.navigator?.userAgent === "Cloudflare-Workers", "Gc");
    function Qc() {
      return [[jc, "netlify"], [Vc, "edge-light"], [Gc, "workerd"], [$c, "deno"], [qc, "bun"], [Uc, "node"]].flatMap((r) => r[0]() ? [r[1]] : []).at(0) ?? "";
    }
    __name(Qc, "Qc");
    var Jc = { node: "Node.js", workerd: "Cloudflare Workers", deno: "Deno and Deno Deploy", netlify: "Netlify Edge Functions", "edge-light": "Edge Runtime (Vercel Edge Functions, Vercel Edge Middleware, Next.js (Pages Router) Edge API Routes, Next.js (App Router) Edge Route Handlers or Next.js Middleware)" };
    function zr() {
      let e = Qc();
      return { id: e, prettyName: Jc[e] || e, isEdge: ["workerd", "deno", "netlify", "edge-light"].includes(e) };
    }
    __name(zr, "zr");
    f();
    u();
    c();
    p();
    m2();
    var Ds = "6.8.2";
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function dt({ inlineDatasources: e, overrideDatasources: t, env: r, clientVersion: n }) {
      let i, o = Object.keys(e)[0], s = e[o]?.url, a = t[o]?.url;
      if (o === void 0 ? i = void 0 : a ? i = a : s?.value ? i = s.value : s?.fromEnvVar && (i = r[s.fromEnvVar]), s?.fromEnvVar !== void 0 && i === void 0) throw zr().id === "workerd" ? new Q(`error: Environment variable not found: ${s.fromEnvVar}.

In Cloudflare module Workers, environment variables are available only in the Worker's \`env\` parameter of \`fetch\`.
To solve this, provide the connection string directly: https://pris.ly/d/cloudflare-datasource-url`, n) : new Q(`error: Environment variable not found: ${s.fromEnvVar}.`, n);
      if (i === void 0) throw new Q("error: Missing URL environment variable, value, or override.", n);
      return i;
    }
    __name(dt, "dt");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Yr = class extends Error {
      static {
        __name(this, "Yr");
      }
      clientVersion;
      cause;
      constructor(t, r) {
        super(t), this.clientVersion = r.clientVersion, this.cause = r.cause;
      }
      get [Symbol.toStringTag]() {
        return this.name;
      }
    };
    var se = class extends Yr {
      static {
        __name(this, "se");
      }
      isRetryable;
      constructor(t, r) {
        super(t, r), this.isRetryable = r.isRetryable ?? true;
      }
    };
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    function L(e, t) {
      return { ...e, isRetryable: t };
    }
    __name(L, "L");
    var gt = class extends se {
      static {
        __name(this, "gt");
      }
      name = "ForcedRetryError";
      code = "P5001";
      constructor(t) {
        super("This request must be retried", L(t, true));
      }
    };
    N(gt, "ForcedRetryError");
    f();
    u();
    c();
    p();
    m2();
    var qe = class extends se {
      static {
        __name(this, "qe");
      }
      name = "InvalidDatasourceError";
      code = "P6001";
      constructor(t, r) {
        super(t, L(r, false));
      }
    };
    N(qe, "InvalidDatasourceError");
    f();
    u();
    c();
    p();
    m2();
    var $e = class extends se {
      static {
        __name(this, "$e");
      }
      name = "NotImplementedYetError";
      code = "P5004";
      constructor(t, r) {
        super(t, L(r, false));
      }
    };
    N($e, "NotImplementedYetError");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var V = class extends se {
      static {
        __name(this, "V");
      }
      response;
      constructor(t, r) {
        super(t, r), this.response = r.response;
        let n = this.response.headers.get("prisma-request-id");
        if (n) {
          let i = `(The request id was: ${n})`;
          this.message = this.message + " " + i;
        }
      }
    };
    var je = class extends V {
      static {
        __name(this, "je");
      }
      name = "SchemaMissingError";
      code = "P5005";
      constructor(t) {
        super("Schema needs to be uploaded", L(t, true));
      }
    };
    N(je, "SchemaMissingError");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var Jn = "This request could not be understood by the server";
    var Jt = class extends V {
      static {
        __name(this, "Jt");
      }
      name = "BadRequestError";
      code = "P5000";
      constructor(t, r, n) {
        super(r || Jn, L(t, false)), n && (this.code = n);
      }
    };
    N(Jt, "BadRequestError");
    f();
    u();
    c();
    p();
    m2();
    var Wt = class extends V {
      static {
        __name(this, "Wt");
      }
      name = "HealthcheckTimeoutError";
      code = "P5013";
      logs;
      constructor(t, r) {
        super("Engine not started: healthcheck timeout", L(t, true)), this.logs = r;
      }
    };
    N(Wt, "HealthcheckTimeoutError");
    f();
    u();
    c();
    p();
    m2();
    var Ht = class extends V {
      static {
        __name(this, "Ht");
      }
      name = "EngineStartupError";
      code = "P5014";
      logs;
      constructor(t, r, n) {
        super(r, L(t, true)), this.logs = n;
      }
    };
    N(Ht, "EngineStartupError");
    f();
    u();
    c();
    p();
    m2();
    var Kt = class extends V {
      static {
        __name(this, "Kt");
      }
      name = "EngineVersionNotSupportedError";
      code = "P5012";
      constructor(t) {
        super("Engine version is not supported", L(t, false));
      }
    };
    N(Kt, "EngineVersionNotSupportedError");
    f();
    u();
    c();
    p();
    m2();
    var Wn = "Request timed out";
    var zt = class extends V {
      static {
        __name(this, "zt");
      }
      name = "GatewayTimeoutError";
      code = "P5009";
      constructor(t, r = Wn) {
        super(r, L(t, false));
      }
    };
    N(zt, "GatewayTimeoutError");
    f();
    u();
    c();
    p();
    m2();
    var Hc = "Interactive transaction error";
    var Yt = class extends V {
      static {
        __name(this, "Yt");
      }
      name = "InteractiveTransactionError";
      code = "P5015";
      constructor(t, r = Hc) {
        super(r, L(t, false));
      }
    };
    N(Yt, "InteractiveTransactionError");
    f();
    u();
    c();
    p();
    m2();
    var Kc = "Request parameters are invalid";
    var Zt = class extends V {
      static {
        __name(this, "Zt");
      }
      name = "InvalidRequestError";
      code = "P5011";
      constructor(t, r = Kc) {
        super(r, L(t, false));
      }
    };
    N(Zt, "InvalidRequestError");
    f();
    u();
    c();
    p();
    m2();
    var Hn = "Requested resource does not exist";
    var Xt = class extends V {
      static {
        __name(this, "Xt");
      }
      name = "NotFoundError";
      code = "P5003";
      constructor(t, r = Hn) {
        super(r, L(t, false));
      }
    };
    N(Xt, "NotFoundError");
    f();
    u();
    c();
    p();
    m2();
    var Kn = "Unknown server error";
    var ht = class extends V {
      static {
        __name(this, "ht");
      }
      name = "ServerError";
      code = "P5006";
      logs;
      constructor(t, r, n) {
        super(r || Kn, L(t, true)), this.logs = n;
      }
    };
    N(ht, "ServerError");
    f();
    u();
    c();
    p();
    m2();
    var zn = "Unauthorized, check your connection string";
    var er = class extends V {
      static {
        __name(this, "er");
      }
      name = "UnauthorizedError";
      code = "P5007";
      constructor(t, r = zn) {
        super(r, L(t, false));
      }
    };
    N(er, "UnauthorizedError");
    f();
    u();
    c();
    p();
    m2();
    var Yn = "Usage exceeded, retry again later";
    var tr = class extends V {
      static {
        __name(this, "tr");
      }
      name = "UsageExceededError";
      code = "P5008";
      constructor(t, r = Yn) {
        super(r, L(t, true));
      }
    };
    N(tr, "UsageExceededError");
    async function zc(e) {
      let t;
      try {
        t = await e.text();
      } catch {
        return { type: "EmptyError" };
      }
      try {
        let r = JSON.parse(t);
        if (typeof r == "string") switch (r) {
          case "InternalDataProxyError":
            return { type: "DataProxyError", body: r };
          default:
            return { type: "UnknownTextError", body: r };
        }
        if (typeof r == "object" && r !== null) {
          if ("is_panic" in r && "message" in r && "error_code" in r) return { type: "QueryEngineError", body: r };
          if ("EngineNotStarted" in r || "InteractiveTransactionMisrouted" in r || "InvalidRequestError" in r) {
            let n = Object.values(r)[0].reason;
            return typeof n == "string" && !["SchemaMissing", "EngineVersionNotSupported"].includes(n) ? { type: "UnknownJsonError", body: r } : { type: "DataProxyError", body: r };
          }
        }
        return { type: "UnknownJsonError", body: r };
      } catch {
        return t === "" ? { type: "EmptyError" } : { type: "UnknownTextError", body: t };
      }
    }
    __name(zc, "zc");
    async function rr(e, t) {
      if (e.ok) return;
      let r = { clientVersion: t, response: e }, n = await zc(e);
      if (n.type === "QueryEngineError") throw new re(n.body.message, { code: n.body.error_code, clientVersion: t });
      if (n.type === "DataProxyError") {
        if (n.body === "InternalDataProxyError") throw new ht(r, "Internal Data Proxy error");
        if ("EngineNotStarted" in n.body) {
          if (n.body.EngineNotStarted.reason === "SchemaMissing") return new je(r);
          if (n.body.EngineNotStarted.reason === "EngineVersionNotSupported") throw new Kt(r);
          if ("EngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, logs: o } = n.body.EngineNotStarted.reason.EngineStartupError;
            throw new Ht(r, i, o);
          }
          if ("KnownEngineStartupError" in n.body.EngineNotStarted.reason) {
            let { msg: i, error_code: o } = n.body.EngineNotStarted.reason.KnownEngineStartupError;
            throw new Q(i, t, o);
          }
          if ("HealthcheckTimeout" in n.body.EngineNotStarted.reason) {
            let { logs: i } = n.body.EngineNotStarted.reason.HealthcheckTimeout;
            throw new Wt(r, i);
          }
        }
        if ("InteractiveTransactionMisrouted" in n.body) {
          let i = { IDParseError: "Could not parse interactive transaction ID", NoQueryEngineFoundError: "Could not find Query Engine for the specified host and transaction ID", TransactionStartError: "Could not start interactive transaction" };
          throw new Yt(r, i[n.body.InteractiveTransactionMisrouted.reason]);
        }
        if ("InvalidRequestError" in n.body) throw new Zt(r, n.body.InvalidRequestError.reason);
      }
      if (e.status === 401 || e.status === 403) throw new er(r, yt(zn, n));
      if (e.status === 404) return new Xt(r, yt(Hn, n));
      if (e.status === 429) throw new tr(r, yt(Yn, n));
      if (e.status === 504) throw new zt(r, yt(Wn, n));
      if (e.status >= 500) throw new ht(r, yt(Kn, n));
      if (e.status >= 400) throw new Jt(r, yt(Jn, n));
    }
    __name(rr, "rr");
    function yt(e, t) {
      return t.type === "EmptyError" ? e : `${e}: ${JSON.stringify(t)}`;
    }
    __name(yt, "yt");
    f();
    u();
    c();
    p();
    m2();
    function Ms(e) {
      let t = Math.pow(2, e) * 50, r = Math.ceil(Math.random() * t) - Math.ceil(t / 2), n = t + r;
      return new Promise((i) => setTimeout(() => i(n), n));
    }
    __name(Ms, "Ms");
    f();
    u();
    c();
    p();
    m2();
    var Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function _s(e) {
      let t = new TextEncoder().encode(e), r = "", n = t.byteLength, i = n % 3, o = n - i, s, a, l, d, g;
      for (let h = 0; h < o; h = h + 3) g = t[h] << 16 | t[h + 1] << 8 | t[h + 2], s = (g & 16515072) >> 18, a = (g & 258048) >> 12, l = (g & 4032) >> 6, d = g & 63, r += Ae[s] + Ae[a] + Ae[l] + Ae[d];
      return i == 1 ? (g = t[o], s = (g & 252) >> 2, a = (g & 3) << 4, r += Ae[s] + Ae[a] + "==") : i == 2 && (g = t[o] << 8 | t[o + 1], s = (g & 64512) >> 10, a = (g & 1008) >> 4, l = (g & 15) << 2, r += Ae[s] + Ae[a] + Ae[l] + "="), r;
    }
    __name(_s, "_s");
    f();
    u();
    c();
    p();
    m2();
    function Ns(e) {
      if (!!e.generator?.previewFeatures.some((r) => r.toLowerCase().includes("metrics"))) throw new Q("The `metrics` preview feature is not yet available with Accelerate.\nPlease remove `metrics` from the `previewFeatures` in your schema.\n\nMore information about Accelerate: https://pris.ly/d/accelerate", e.clientVersion);
    }
    __name(Ns, "Ns");
    f();
    u();
    c();
    p();
    m2();
    function Yc(e) {
      return e[0] * 1e3 + e[1] / 1e6;
    }
    __name(Yc, "Yc");
    function Zn(e) {
      return new Date(Yc(e));
    }
    __name(Zn, "Zn");
    f();
    u();
    c();
    p();
    m2();
    var Fs = { "@prisma/debug": "workspace:*", "@prisma/engines-version": "6.8.0-43.2060c79ba17c6bb9f5823312b6f6b7f4a845738e", "@prisma/fetch-engine": "workspace:*", "@prisma/get-platform": "workspace:*" };
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var nr = class extends se {
      static {
        __name(this, "nr");
      }
      name = "RequestError";
      code = "P5010";
      constructor(t, r) {
        super(`Cannot fetch data from service:
${t}`, L(r, true));
      }
    };
    N(nr, "RequestError");
    async function Ve(e, t, r = (n) => n) {
      let { clientVersion: n, ...i } = t, o = r(fetch);
      try {
        return await o(e, i);
      } catch (s) {
        let a = s.message ?? "Unknown error";
        throw new nr(a, { clientVersion: n, cause: s });
      }
    }
    __name(Ve, "Ve");
    var Xc = /^[1-9][0-9]*\.[0-9]+\.[0-9]+$/;
    var Ls = K("prisma:client:dataproxyEngine");
    async function ep(e, t) {
      let r = Fs["@prisma/engines-version"], n = t.clientVersion ?? "unknown";
      if (y2.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION) return y2.env.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION || globalThis.PRISMA_CLIENT_DATA_PROXY_CLIENT_VERSION;
      if (e.includes("accelerate") && n !== "0.0.0" && n !== "in-memory") return n;
      let [i, o] = n?.split("-") ?? [];
      if (o === void 0 && Xc.test(i)) return i;
      if (o !== void 0 || n === "0.0.0" || n === "in-memory") {
        let [s] = r.split("-") ?? [], [a, l, d] = s.split("."), g = tp(`<=${a}.${l}.${d}`), h = await Ve(g, { clientVersion: n });
        if (!h.ok) throw new Error(`Failed to fetch stable Prisma version, unpkg.com status ${h.status} ${h.statusText}, response body: ${await h.text() || "<empty body>"}`);
        let v = await h.text();
        Ls("length of body fetched from unpkg.com", v.length);
        let S;
        try {
          S = JSON.parse(v);
        } catch (A2) {
          throw console.error("JSON.parse error: body fetched from unpkg.com: ", v), A2;
        }
        return S.version;
      }
      throw new $e("Only `major.minor.patch` versions are supported by Accelerate.", { clientVersion: n });
    }
    __name(ep, "ep");
    async function Bs(e, t) {
      let r = await ep(e, t);
      return Ls("version", r), r;
    }
    __name(Bs, "Bs");
    function tp(e) {
      return encodeURI(`https://unpkg.com/prisma@${e}/package.json`);
    }
    __name(tp, "tp");
    var Us = 3;
    var ir = K("prisma:client:dataproxyEngine");
    var Xn = class {
      static {
        __name(this, "Xn");
      }
      apiKey;
      tracingHelper;
      logLevel;
      logQueries;
      engineHash;
      constructor({ apiKey: t, tracingHelper: r, logLevel: n, logQueries: i, engineHash: o }) {
        this.apiKey = t, this.tracingHelper = r, this.logLevel = n, this.logQueries = i, this.engineHash = o;
      }
      build({ traceparent: t, interactiveTransaction: r } = {}) {
        let n = { Authorization: `Bearer ${this.apiKey}`, "Prisma-Engine-Hash": this.engineHash };
        this.tracingHelper.isEnabled() && (n.traceparent = t ?? this.tracingHelper.getTraceParent()), r && (n["X-transaction-id"] = r.id);
        let i = this.buildCaptureSettings();
        return i.length > 0 && (n["X-capture-telemetry"] = i.join(", ")), n;
      }
      buildCaptureSettings() {
        let t = [];
        return this.tracingHelper.isEnabled() && t.push("tracing"), this.logLevel && t.push(this.logLevel), this.logQueries && t.push("query"), t;
      }
    };
    var wt = class {
      static {
        __name(this, "wt");
      }
      name = "DataProxyEngine";
      inlineSchema;
      inlineSchemaHash;
      inlineDatasources;
      config;
      logEmitter;
      env;
      clientVersion;
      engineHash;
      tracingHelper;
      remoteClientVersion;
      host;
      headerBuilder;
      startPromise;
      protocol;
      constructor(t) {
        Ns(t), this.config = t, this.env = { ...t.env, ...typeof y2 < "u" ? y2.env : {} }, this.inlineSchema = _s(t.inlineSchema), this.inlineDatasources = t.inlineDatasources, this.inlineSchemaHash = t.inlineSchemaHash, this.clientVersion = t.clientVersion, this.engineHash = t.engineVersion, this.logEmitter = t.logEmitter, this.tracingHelper = t.tracingHelper;
      }
      apiKey() {
        return this.headerBuilder.apiKey;
      }
      version() {
        return this.engineHash;
      }
      async start() {
        this.startPromise !== void 0 && await this.startPromise, this.startPromise = (async () => {
          let { apiKey: t, url: r } = this.getURLAndAPIKey();
          this.host = r.host, this.headerBuilder = new Xn({ apiKey: t, tracingHelper: this.tracingHelper, logLevel: this.config.logLevel, logQueries: this.config.logQueries, engineHash: this.engineHash }), this.protocol = bn(r) ? "http" : "https", this.remoteClientVersion = await Bs(this.host, this.config), ir("host", this.host), ir("protocol", this.protocol);
        })(), await this.startPromise;
      }
      async stop() {
      }
      propagateResponseExtensions(t) {
        t?.logs?.length && t.logs.forEach((r) => {
          switch (r.level) {
            case "debug":
            case "trace":
              ir(r);
              break;
            case "error":
            case "warn":
            case "info": {
              this.logEmitter.emit(r.level, { timestamp: Zn(r.timestamp), message: r.attributes.message ?? "", target: r.target });
              break;
            }
            case "query": {
              this.logEmitter.emit("query", { query: r.attributes.query ?? "", timestamp: Zn(r.timestamp), duration: r.attributes.duration_ms ?? 0, params: r.attributes.params ?? "", target: r.target });
              break;
            }
            default:
              r.level;
          }
        }), t?.traces?.length && this.tracingHelper.dispatchEngineSpans(t.traces);
      }
      onBeforeExit() {
        throw new Error('"beforeExit" hook is not applicable to the remote query engine');
      }
      async url(t) {
        return await this.start(), `${this.protocol}://${this.host}/${this.remoteClientVersion}/${this.inlineSchemaHash}/${t}`;
      }
      async uploadSchema() {
        let t = { name: "schemaUpload", internal: true };
        return this.tracingHelper.runInChildSpan(t, async () => {
          let r = await Ve(await this.url("schema"), { method: "PUT", headers: this.headerBuilder.build(), body: this.inlineSchema, clientVersion: this.clientVersion });
          r.ok || ir("schema response status", r.status);
          let n = await rr(r, this.clientVersion);
          if (n) throw this.logEmitter.emit("warn", { message: `Error while uploading schema: ${n.message}`, timestamp: /* @__PURE__ */ new Date(), target: "" }), n;
          this.logEmitter.emit("info", { message: `Schema (re)uploaded (hash: ${this.inlineSchemaHash})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
        });
      }
      request(t, { traceparent: r, interactiveTransaction: n, customDataProxyFetch: i }) {
        return this.requestInternal({ body: t, traceparent: r, interactiveTransaction: n, customDataProxyFetch: i });
      }
      async requestBatch(t, { traceparent: r, transaction: n, customDataProxyFetch: i }) {
        let o = n?.kind === "itx" ? n.options : void 0, s = Jr(t, n);
        return (await this.requestInternal({ body: s, customDataProxyFetch: i, interactiveTransaction: o, traceparent: r })).map((l) => (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l ? this.convertProtocolErrorsToClientError(l.errors) : l));
      }
      requestInternal({ body: t, traceparent: r, customDataProxyFetch: n, interactiveTransaction: i }) {
        return this.withRetry({ actionGerund: "querying", callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          let s = i ? `${i.payload.endpoint}/graphql` : await this.url("graphql");
          o(s);
          let a = await Ve(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r, interactiveTransaction: i }), body: JSON.stringify(t), clientVersion: this.clientVersion }, n);
          a.ok || ir("graphql response status", a.status), await this.handleError(await rr(a, this.clientVersion));
          let l = await a.json();
          if (l.extensions && this.propagateResponseExtensions(l.extensions), "errors" in l) throw this.convertProtocolErrorsToClientError(l.errors);
          return "batchResult" in l ? l.batchResult : l;
        }, "callback") });
      }
      async transaction(t, r, n) {
        let i = { start: "starting", commit: "committing", rollback: "rolling back" };
        return this.withRetry({ actionGerund: `${i[t]} transaction`, callback: /* @__PURE__ */ __name(async ({ logHttpCall: o }) => {
          if (t === "start") {
            let s = JSON.stringify({ max_wait: n.maxWait, timeout: n.timeout, isolation_level: n.isolationLevel }), a = await this.url("transaction/start");
            o(a);
            let l = await Ve(a, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), body: s, clientVersion: this.clientVersion });
            await this.handleError(await rr(l, this.clientVersion));
            let d = await l.json(), { extensions: g } = d;
            g && this.propagateResponseExtensions(g);
            let h = d.id, v = d["data-proxy"].endpoint;
            return { id: h, payload: { endpoint: v } };
          } else {
            let s = `${n.payload.endpoint}/${t}`;
            o(s);
            let a = await Ve(s, { method: "POST", headers: this.headerBuilder.build({ traceparent: r.traceparent }), clientVersion: this.clientVersion });
            await this.handleError(await rr(a, this.clientVersion));
            let l = await a.json(), { extensions: d } = l;
            d && this.propagateResponseExtensions(d);
            return;
          }
        }, "callback") });
      }
      getURLAndAPIKey() {
        let t = { clientVersion: this.clientVersion }, r = Object.keys(this.inlineDatasources)[0], n = dt({ inlineDatasources: this.inlineDatasources, overrideDatasources: this.config.overrideDatasources, clientVersion: this.clientVersion, env: this.env }), i;
        try {
          i = new URL(n);
        } catch {
          throw new qe(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\``, t);
        }
        let { protocol: o, searchParams: s } = i;
        if (o !== "prisma:" && o !== gr) throw new qe(`Error validating datasource \`${r}\`: the URL must start with the protocol \`prisma://\` or \`prisma+postgres://\``, t);
        let a = s.get("api_key");
        if (a === null || a.length < 1) throw new qe(`Error validating datasource \`${r}\`: the URL must contain a valid API key`, t);
        return { apiKey: a, url: i };
      }
      metrics() {
        throw new $e("Metrics are not yet supported for Accelerate", { clientVersion: this.clientVersion });
      }
      async withRetry(t) {
        for (let r = 0; ; r++) {
          let n = /* @__PURE__ */ __name((i) => {
            this.logEmitter.emit("info", { message: `Calling ${i} (n=${r})`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }, "n");
          try {
            return await t.callback({ logHttpCall: n });
          } catch (i) {
            if (!(i instanceof se) || !i.isRetryable) throw i;
            if (r >= Us) throw i instanceof gt ? i.cause : i;
            this.logEmitter.emit("warn", { message: `Attempt ${r + 1}/${Us} failed for ${t.actionGerund}: ${i.message ?? "(unknown)"}`, timestamp: /* @__PURE__ */ new Date(), target: "" });
            let o = await Ms(r);
            this.logEmitter.emit("warn", { message: `Retrying after ${o}ms`, timestamp: /* @__PURE__ */ new Date(), target: "" });
          }
        }
      }
      async handleError(t) {
        if (t instanceof je) throw await this.uploadSchema(), new gt({ clientVersion: this.clientVersion, cause: t });
        if (t) throw t;
      }
      convertProtocolErrorsToClientError(t) {
        return t.length === 1 ? Wr(t[0], this.config.clientVersion, this.config.activeProvider) : new ne(JSON.stringify(t), { clientVersion: this.config.clientVersion });
      }
      applyPendingMigrations() {
        throw new Error("Method not implemented.");
      }
    };
    function qs({ copyEngine: e = true }, t) {
      let r;
      try {
        r = dt({ inlineDatasources: t.inlineDatasources, overrideDatasources: t.overrideDatasources, env: { ...t.env, ...y2.env }, clientVersion: t.clientVersion });
      } catch {
      }
      let n = !!(r?.startsWith("prisma://") || hr(r));
      e && n && Rt("recommend--no-engine", "In production, we recommend using `prisma generate --no-engine` (See: `prisma generate --help`)");
      let i = Ye(t.generator), o = n || !e, s = !!t.adapter, a = i === "library", l = i === "binary", d = i === "client";
      if (o && s || s) {
        let g;
        throw g = ["Prisma Client was configured to use the `adapter` option but it was imported via its `/edge` endpoint.", "Please either remove the `/edge` endpoint or remove the `adapter` from the Prisma Client constructor."], new Z(g.join(`
`), { clientVersion: t.clientVersion });
      }
      return o ? new wt(t) : new wt(t);
    }
    __name(qs, "qs");
    f();
    u();
    c();
    p();
    m2();
    function Zr({ generator: e }) {
      return e?.previewFeatures ?? [];
    }
    __name(Zr, "Zr");
    f();
    u();
    c();
    p();
    m2();
    var $s = /* @__PURE__ */ __name((e) => ({ command: e }), "$s");
    f();
    u();
    c();
    p();
    m2();
    f();
    u();
    c();
    p();
    m2();
    var js = /* @__PURE__ */ __name((e) => e.strings.reduce((t, r, n) => `${t}@P${n}${r}`), "js");
    f();
    u();
    c();
    p();
    m2();
    function Et(e) {
      try {
        return Vs(e, "fast");
      } catch {
        return Vs(e, "slow");
      }
    }
    __name(Et, "Et");
    function Vs(e, t) {
      return JSON.stringify(e.map((r) => Qs(r, t)));
    }
    __name(Vs, "Vs");
    function Qs(e, t) {
      if (Array.isArray(e)) return e.map((r) => Qs(r, t));
      if (typeof e == "bigint") return { prisma__type: "bigint", prisma__value: e.toString() };
      if (rt(e)) return { prisma__type: "date", prisma__value: e.toJSON() };
      if (pe.isDecimal(e)) return { prisma__type: "decimal", prisma__value: e.toJSON() };
      if (w2.Buffer.isBuffer(e)) return { prisma__type: "bytes", prisma__value: e.toString("base64") };
      if (rp(e)) return { prisma__type: "bytes", prisma__value: w2.Buffer.from(e).toString("base64") };
      if (ArrayBuffer.isView(e)) {
        let { buffer: r, byteOffset: n, byteLength: i } = e;
        return { prisma__type: "bytes", prisma__value: w2.Buffer.from(r, n, i).toString("base64") };
      }
      return typeof e == "object" && t === "slow" ? Js(e) : e;
    }
    __name(Qs, "Qs");
    function rp(e) {
      return e instanceof ArrayBuffer || e instanceof SharedArrayBuffer ? true : typeof e == "object" && e !== null ? e[Symbol.toStringTag] === "ArrayBuffer" || e[Symbol.toStringTag] === "SharedArrayBuffer" : false;
    }
    __name(rp, "rp");
    function Js(e) {
      if (typeof e != "object" || e === null) return e;
      if (typeof e.toJSON == "function") return e.toJSON();
      if (Array.isArray(e)) return e.map(Gs);
      let t = {};
      for (let r of Object.keys(e)) t[r] = Gs(e[r]);
      return t;
    }
    __name(Js, "Js");
    function Gs(e) {
      return typeof e == "bigint" ? e.toString() : Js(e);
    }
    __name(Gs, "Gs");
    var np = /^(\s*alter\s)/i;
    var Ws = K("prisma:client");
    function ei(e, t, r, n) {
      if (!(e !== "postgresql" && e !== "cockroachdb") && r.length > 0 && np.exec(t)) throw new Error(`Running ALTER using ${n} is not supported
Using the example below you can still execute your query with Prisma, but please note that it is vulnerable to SQL injection attacks and requires you to take care of input sanitization.

Example:
  await prisma.$executeRawUnsafe(\`ALTER USER prisma WITH PASSWORD '\${password}'\`)

More Information: https://pris.ly/d/execute-raw
`);
    }
    __name(ei, "ei");
    var ti = /* @__PURE__ */ __name(({ clientMethod: e, activeProvider: t }) => (r) => {
      let n = "", i;
      if (jr(r)) n = r.sql, i = { values: Et(r.values), __prismaRawParameters__: true };
      else if (Array.isArray(r)) {
        let [o, ...s] = r;
        n = o, i = { values: Et(s || []), __prismaRawParameters__: true };
      } else switch (t) {
        case "sqlite":
        case "mysql": {
          n = r.sql, i = { values: Et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "cockroachdb":
        case "postgresql":
        case "postgres": {
          n = r.text, i = { values: Et(r.values), __prismaRawParameters__: true };
          break;
        }
        case "sqlserver": {
          n = js(r), i = { values: Et(r.values), __prismaRawParameters__: true };
          break;
        }
        default:
          throw new Error(`The ${t} provider does not support ${e}`);
      }
      return i?.values ? Ws(`prisma.${e}(${n}, ${i.values})`) : Ws(`prisma.${e}(${n})`), { query: n, parameters: i };
    }, "ti");
    var Hs = { requestArgsToMiddlewareArgs(e) {
      return [e.strings, ...e.values];
    }, middlewareArgsToRequestArgs(e) {
      let [t, ...r] = e;
      return new oe(t, r);
    } };
    var Ks = { requestArgsToMiddlewareArgs(e) {
      return [e];
    }, middlewareArgsToRequestArgs(e) {
      return e[0];
    } };
    f();
    u();
    c();
    p();
    m2();
    function ri(e) {
      return function(r, n) {
        let i, o = /* @__PURE__ */ __name((s = e) => {
          try {
            return s === void 0 || s?.kind === "itx" ? i ??= zs(r(s)) : zs(r(s));
          } catch (a) {
            return Promise.reject(a);
          }
        }, "o");
        return { get spec() {
          return n;
        }, then(s, a) {
          return o().then(s, a);
        }, catch(s) {
          return o().catch(s);
        }, finally(s) {
          return o().finally(s);
        }, requestTransaction(s) {
          let a = o(s);
          return a.requestTransaction ? a.requestTransaction(s) : a;
        }, [Symbol.toStringTag]: "PrismaPromise" };
      };
    }
    __name(ri, "ri");
    function zs(e) {
      return typeof e.then == "function" ? e : Promise.resolve(e);
    }
    __name(zs, "zs");
    f();
    u();
    c();
    p();
    m2();
    var ip = En.split(".")[0];
    var op = { isEnabled() {
      return false;
    }, getTraceParent() {
      return "00-10-10-00";
    }, dispatchEngineSpans() {
    }, getActiveContext() {
    }, runInChildSpan(e, t) {
      return t();
    } };
    var ni = class {
      static {
        __name(this, "ni");
      }
      isEnabled() {
        return this.getGlobalTracingHelper().isEnabled();
      }
      getTraceParent(t) {
        return this.getGlobalTracingHelper().getTraceParent(t);
      }
      dispatchEngineSpans(t) {
        return this.getGlobalTracingHelper().dispatchEngineSpans(t);
      }
      getActiveContext() {
        return this.getGlobalTracingHelper().getActiveContext();
      }
      runInChildSpan(t, r) {
        return this.getGlobalTracingHelper().runInChildSpan(t, r);
      }
      getGlobalTracingHelper() {
        let t = globalThis[`V${ip}_PRISMA_INSTRUMENTATION`], r = globalThis.PRISMA_INSTRUMENTATION;
        return t?.helper ?? r?.helper ?? op;
      }
    };
    function Ys() {
      return new ni();
    }
    __name(Ys, "Ys");
    f();
    u();
    c();
    p();
    m2();
    function Zs(e, t = () => {
    }) {
      let r, n = new Promise((i) => r = i);
      return { then(i) {
        return --e === 0 && r(t()), i?.(n);
      } };
    }
    __name(Zs, "Zs");
    f();
    u();
    c();
    p();
    m2();
    function Xs(e) {
      return typeof e == "string" ? e : e.reduce((t, r) => {
        let n = typeof r == "string" ? r : r.level;
        return n === "query" ? t : t && (r === "info" || t === "info") ? "info" : n;
      }, void 0);
    }
    __name(Xs, "Xs");
    f();
    u();
    c();
    p();
    m2();
    var Xr = class {
      static {
        __name(this, "Xr");
      }
      _middlewares = [];
      use(t) {
        this._middlewares.push(t);
      }
      get(t) {
        return this._middlewares[t];
      }
      has(t) {
        return !!this._middlewares[t];
      }
      length() {
        return this._middlewares.length;
      }
    };
    f();
    u();
    c();
    p();
    m2();
    var ta = Qe(no());
    f();
    u();
    c();
    p();
    m2();
    function en(e) {
      return typeof e.batchRequestIdx == "number";
    }
    __name(en, "en");
    f();
    u();
    c();
    p();
    m2();
    function ea(e) {
      if (e.action !== "findUnique" && e.action !== "findUniqueOrThrow") return;
      let t = [];
      return e.modelName && t.push(e.modelName), e.query.arguments && t.push(ii(e.query.arguments)), t.push(ii(e.query.selection)), t.join("");
    }
    __name(ea, "ea");
    function ii(e) {
      return `(${Object.keys(e).sort().map((r) => {
        let n = e[r];
        return typeof n == "object" && n !== null ? `(${r} ${ii(n)})` : r;
      }).join(" ")})`;
    }
    __name(ii, "ii");
    f();
    u();
    c();
    p();
    m2();
    var sp = { aggregate: false, aggregateRaw: false, createMany: true, createManyAndReturn: true, createOne: true, deleteMany: true, deleteOne: true, executeRaw: true, findFirst: false, findFirstOrThrow: false, findMany: false, findRaw: false, findUnique: false, findUniqueOrThrow: false, groupBy: false, queryRaw: false, runCommandRaw: true, updateMany: true, updateManyAndReturn: true, updateOne: true, upsertOne: true };
    function oi(e) {
      return sp[e];
    }
    __name(oi, "oi");
    f();
    u();
    c();
    p();
    m2();
    var tn = class {
      static {
        __name(this, "tn");
      }
      constructor(t) {
        this.options = t;
        this.batches = {};
      }
      batches;
      tickActive = false;
      request(t) {
        let r = this.options.batchBy(t);
        return r ? (this.batches[r] || (this.batches[r] = [], this.tickActive || (this.tickActive = true, y2.nextTick(() => {
          this.dispatchBatches(), this.tickActive = false;
        }))), new Promise((n, i) => {
          this.batches[r].push({ request: t, resolve: n, reject: i });
        })) : this.options.singleLoader(t);
      }
      dispatchBatches() {
        for (let t in this.batches) {
          let r = this.batches[t];
          delete this.batches[t], r.length === 1 ? this.options.singleLoader(r[0].request).then((n) => {
            n instanceof Error ? r[0].reject(n) : r[0].resolve(n);
          }).catch((n) => {
            r[0].reject(n);
          }) : (r.sort((n, i) => this.options.batchOrder(n.request, i.request)), this.options.batchLoader(r.map((n) => n.request)).then((n) => {
            if (n instanceof Error) for (let i = 0; i < r.length; i++) r[i].reject(n);
            else for (let i = 0; i < r.length; i++) {
              let o = n[i];
              o instanceof Error ? r[i].reject(o) : r[i].resolve(o);
            }
          }).catch((n) => {
            for (let i = 0; i < r.length; i++) r[i].reject(n);
          }));
        }
      }
      get [Symbol.toStringTag]() {
        return "DataLoader";
      }
    };
    f();
    u();
    c();
    p();
    m2();
    function Ge(e, t) {
      if (t === null) return t;
      switch (e) {
        case "bigint":
          return BigInt(t);
        case "bytes": {
          let { buffer: r, byteOffset: n, byteLength: i } = w2.Buffer.from(t, "base64");
          return new Uint8Array(r, n, i);
        }
        case "decimal":
          return new pe(t);
        case "datetime":
        case "date":
          return new Date(t);
        case "time":
          return /* @__PURE__ */ new Date(`1970-01-01T${t}Z`);
        case "bigint-array":
          return t.map((r) => Ge("bigint", r));
        case "bytes-array":
          return t.map((r) => Ge("bytes", r));
        case "decimal-array":
          return t.map((r) => Ge("decimal", r));
        case "datetime-array":
          return t.map((r) => Ge("datetime", r));
        case "date-array":
          return t.map((r) => Ge("date", r));
        case "time-array":
          return t.map((r) => Ge("time", r));
        default:
          return t;
      }
    }
    __name(Ge, "Ge");
    function rn(e) {
      let t = [], r = ap(e);
      for (let n = 0; n < e.rows.length; n++) {
        let i = e.rows[n], o = { ...r };
        for (let s = 0; s < i.length; s++) o[e.columns[s]] = Ge(e.types[s], i[s]);
        t.push(o);
      }
      return t;
    }
    __name(rn, "rn");
    function ap(e) {
      let t = {};
      for (let r = 0; r < e.columns.length; r++) t[e.columns[r]] = null;
      return t;
    }
    __name(ap, "ap");
    var lp = K("prisma:client:request_handler");
    var nn = class {
      static {
        __name(this, "nn");
      }
      client;
      dataloader;
      logEmitter;
      constructor(t, r) {
        this.logEmitter = r, this.client = t, this.dataloader = new tn({ batchLoader: Cs(async ({ requests: n, customDataProxyFetch: i }) => {
          let { transaction: o, otelParentCtx: s } = n[0], a = n.map((h) => h.protocolQuery), l = this.client._tracingHelper.getTraceParent(s), d = n.some((h) => oi(h.protocolQuery.action));
          return (await this.client._engine.requestBatch(a, { traceparent: l, transaction: up(o), containsWrite: d, customDataProxyFetch: i })).map((h, v) => {
            if (h instanceof Error) return h;
            try {
              return this.mapQueryEngineResult(n[v], h);
            } catch (S) {
              return S;
            }
          });
        }), singleLoader: /* @__PURE__ */ __name(async (n) => {
          let i = n.transaction?.kind === "itx" ? ra(n.transaction) : void 0, o = await this.client._engine.request(n.protocolQuery, { traceparent: this.client._tracingHelper.getTraceParent(), interactiveTransaction: i, isWrite: oi(n.protocolQuery.action), customDataProxyFetch: n.customDataProxyFetch });
          return this.mapQueryEngineResult(n, o);
        }, "singleLoader"), batchBy: /* @__PURE__ */ __name((n) => n.transaction?.id ? `transaction-${n.transaction.id}` : ea(n.protocolQuery), "batchBy"), batchOrder(n, i) {
          return n.transaction?.kind === "batch" && i.transaction?.kind === "batch" ? n.transaction.index - i.transaction.index : 0;
        } });
      }
      async request(t) {
        try {
          return await this.dataloader.request(t);
        } catch (r) {
          let { clientMethod: n, callsite: i, transaction: o, args: s, modelName: a } = t;
          this.handleAndLogRequestError({ error: r, clientMethod: n, callsite: i, transaction: o, args: s, modelName: a, globalOmit: t.globalOmit });
        }
      }
      mapQueryEngineResult({ dataPath: t, unpacker: r }, n) {
        let i = n?.data, o = this.unpack(i, t, r);
        return y2.env.PRISMA_CLIENT_GET_TIME ? { data: o } : o;
      }
      handleAndLogRequestError(t) {
        try {
          this.handleRequestError(t);
        } catch (r) {
          throw this.logEmitter && this.logEmitter.emit("error", { message: r.message, target: t.clientMethod, timestamp: /* @__PURE__ */ new Date() }), r;
        }
      }
      handleRequestError({ error: t, clientMethod: r, callsite: n, transaction: i, args: o, modelName: s, globalOmit: a }) {
        if (lp(t), cp(t, i)) throw t;
        if (t instanceof re && pp(t)) {
          let d = na(t.meta);
          Fr({ args: o, errors: [d], callsite: n, errorFormat: this.client._errorFormat, originalMethod: r, clientVersion: this.client._clientVersion, globalOmit: a });
        }
        let l = t.message;
        if (n && (l = Ar({ callsite: n, originalMethod: r, isPanic: t.isPanic, showColors: this.client._errorFormat === "pretty", message: l })), l = this.sanitizeMessage(l), t.code) {
          let d = s ? { modelName: s, ...t.meta } : t.meta;
          throw new re(l, { code: t.code, clientVersion: this.client._clientVersion, meta: d, batchRequestIdx: t.batchRequestIdx });
        } else {
          if (t.isPanic) throw new ve(l, this.client._clientVersion);
          if (t instanceof ne) throw new ne(l, { clientVersion: this.client._clientVersion, batchRequestIdx: t.batchRequestIdx });
          if (t instanceof Q) throw new Q(l, this.client._clientVersion);
          if (t instanceof ve) throw new ve(l, this.client._clientVersion);
        }
        throw t.clientVersion = this.client._clientVersion, t;
      }
      sanitizeMessage(t) {
        return this.client._errorFormat && this.client._errorFormat !== "pretty" ? (0, ta.default)(t) : t;
      }
      unpack(t, r, n) {
        if (!t || (t.data && (t = t.data), !t)) return t;
        let i = Object.keys(t)[0], o = Object.values(t)[0], s = r.filter((d) => d !== "select" && d !== "include"), a = jn(o, s), l = i === "queryRaw" ? rn(a) : tt(a);
        return n ? n(l) : l;
      }
      get [Symbol.toStringTag]() {
        return "RequestHandler";
      }
    };
    function up(e) {
      if (e) {
        if (e.kind === "batch") return { kind: "batch", options: { isolationLevel: e.isolationLevel } };
        if (e.kind === "itx") return { kind: "itx", options: ra(e) };
        Pe(e, "Unknown transaction kind");
      }
    }
    __name(up, "up");
    function ra(e) {
      return { id: e.id, payload: e.payload };
    }
    __name(ra, "ra");
    function cp(e, t) {
      return en(e) && t?.kind === "batch" && e.batchRequestIdx !== t.index;
    }
    __name(cp, "cp");
    function pp(e) {
      return e.code === "P2009" || e.code === "P2012";
    }
    __name(pp, "pp");
    function na(e) {
      if (e.kind === "Union") return { kind: "Union", errors: e.errors.map(na) };
      if (Array.isArray(e.selectionPath)) {
        let [, ...t] = e.selectionPath;
        return { ...e, selectionPath: t };
      }
      return e;
    }
    __name(na, "na");
    f();
    u();
    c();
    p();
    m2();
    var ia = Ds;
    f();
    u();
    c();
    p();
    m2();
    var ua = Qe(In());
    f();
    u();
    c();
    p();
    m2();
    var U = class extends Error {
      static {
        __name(this, "U");
      }
      constructor(t) {
        super(t + `
Read more at https://pris.ly/d/client-constructor`), this.name = "PrismaClientConstructorValidationError";
      }
      get [Symbol.toStringTag]() {
        return "PrismaClientConstructorValidationError";
      }
    };
    N(U, "PrismaClientConstructorValidationError");
    var oa = ["datasources", "datasourceUrl", "errorFormat", "adapter", "log", "transactionOptions", "omit", "__internal"];
    var sa = ["pretty", "colorless", "minimal"];
    var aa = ["info", "query", "warn", "error"];
    var mp = { datasources: /* @__PURE__ */ __name((e, { datasourceNames: t }) => {
      if (e) {
        if (typeof e != "object" || Array.isArray(e)) throw new U(`Invalid value ${JSON.stringify(e)} for "datasources" provided to PrismaClient constructor`);
        for (let [r, n] of Object.entries(e)) {
          if (!t.includes(r)) {
            let i = bt(r, t) || ` Available datasources: ${t.join(", ")}`;
            throw new U(`Unknown datasource ${r} provided to PrismaClient constructor.${i}`);
          }
          if (typeof n != "object" || Array.isArray(n)) throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          if (n && typeof n == "object") for (let [i, o] of Object.entries(n)) {
            if (i !== "url") throw new U(`Invalid value ${JSON.stringify(e)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
            if (typeof o != "string") throw new U(`Invalid value ${JSON.stringify(o)} for datasource "${r}" provided to PrismaClient constructor.
It should have this form: { url: "CONNECTION_STRING" }`);
          }
        }
      }
    }, "datasources"), adapter: /* @__PURE__ */ __name((e, t) => {
      if (!e && Ye(t.generator) === "client") throw new U('Using engine type "client" requires a driver adapter to be provided to PrismaClient constructor.');
      if (e === null) return;
      if (e === void 0) throw new U('"adapter" property must not be undefined, use null to conditionally disable driver adapters.');
      if (!Zr(t).includes("driverAdapters")) throw new U('"adapter" property can only be provided to PrismaClient constructor when "driverAdapters" preview feature is enabled.');
      if (Ye(t.generator) === "binary") throw new U('Cannot use a driver adapter with the "binary" Query Engine. Please use the "library" Query Engine.');
    }, "adapter"), datasourceUrl: /* @__PURE__ */ __name((e) => {
      if (typeof e < "u" && typeof e != "string") throw new U(`Invalid value ${JSON.stringify(e)} for "datasourceUrl" provided to PrismaClient constructor.
Expected string or undefined.`);
    }, "datasourceUrl"), errorFormat: /* @__PURE__ */ __name((e) => {
      if (e) {
        if (typeof e != "string") throw new U(`Invalid value ${JSON.stringify(e)} for "errorFormat" provided to PrismaClient constructor.`);
        if (!sa.includes(e)) {
          let t = bt(e, sa);
          throw new U(`Invalid errorFormat ${e} provided to PrismaClient constructor.${t}`);
        }
      }
    }, "errorFormat"), log: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      if (!Array.isArray(e)) throw new U(`Invalid value ${JSON.stringify(e)} for "log" provided to PrismaClient constructor.`);
      function t(r) {
        if (typeof r == "string" && !aa.includes(r)) {
          let n = bt(r, aa);
          throw new U(`Invalid log level "${r}" provided to PrismaClient constructor.${n}`);
        }
      }
      __name(t, "t");
      for (let r of e) {
        t(r);
        let n = { level: t, emit: /* @__PURE__ */ __name((i) => {
          let o = ["stdout", "event"];
          if (!o.includes(i)) {
            let s = bt(i, o);
            throw new U(`Invalid value ${JSON.stringify(i)} for "emit" in logLevel provided to PrismaClient constructor.${s}`);
          }
        }, "emit") };
        if (r && typeof r == "object") for (let [i, o] of Object.entries(r)) if (n[i]) n[i](o);
        else throw new U(`Invalid property ${i} for "log" provided to PrismaClient constructor`);
      }
    }, "log"), transactionOptions: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = e.maxWait;
      if (t != null && t <= 0) throw new U(`Invalid value ${t} for maxWait in "transactionOptions" provided to PrismaClient constructor. maxWait needs to be greater than 0`);
      let r = e.timeout;
      if (r != null && r <= 0) throw new U(`Invalid value ${r} for timeout in "transactionOptions" provided to PrismaClient constructor. timeout needs to be greater than 0`);
    }, "transactionOptions"), omit: /* @__PURE__ */ __name((e, t) => {
      if (typeof e != "object") throw new U('"omit" option is expected to be an object.');
      if (e === null) throw new U('"omit" option can not be `null`');
      let r = [];
      for (let [n, i] of Object.entries(e)) {
        let o = dp(n, t.runtimeDataModel);
        if (!o) {
          r.push({ kind: "UnknownModel", modelKey: n });
          continue;
        }
        for (let [s, a] of Object.entries(i)) {
          let l = o.fields.find((d) => d.name === s);
          if (!l) {
            r.push({ kind: "UnknownField", modelKey: n, fieldName: s });
            continue;
          }
          if (l.relationName) {
            r.push({ kind: "RelationInOmit", modelKey: n, fieldName: s });
            continue;
          }
          typeof a != "boolean" && r.push({ kind: "InvalidFieldValue", modelKey: n, fieldName: s });
        }
      }
      if (r.length > 0) throw new U(gp(e, r));
    }, "omit"), __internal: /* @__PURE__ */ __name((e) => {
      if (!e) return;
      let t = ["debug", "engine", "configOverride"];
      if (typeof e != "object") throw new U(`Invalid value ${JSON.stringify(e)} for "__internal" to PrismaClient constructor`);
      for (let [r] of Object.entries(e)) if (!t.includes(r)) {
        let n = bt(r, t);
        throw new U(`Invalid property ${JSON.stringify(r)} for "__internal" provided to PrismaClient constructor.${n}`);
      }
    }, "__internal") };
    function ca(e, t) {
      for (let [r, n] of Object.entries(e)) {
        if (!oa.includes(r)) {
          let i = bt(r, oa);
          throw new U(`Unknown property ${r} provided to PrismaClient constructor.${i}`);
        }
        mp[r](n, t);
      }
      if (e.datasourceUrl && e.datasources) throw new U('Can not use "datasourceUrl" and "datasources" options at the same time. Pick one of them');
    }
    __name(ca, "ca");
    function bt(e, t) {
      if (t.length === 0 || typeof e != "string") return "";
      let r = fp(e, t);
      return r ? ` Did you mean "${r}"?` : "";
    }
    __name(bt, "bt");
    function fp(e, t) {
      if (t.length === 0) return null;
      let r = t.map((i) => ({ value: i, distance: (0, ua.default)(e, i) }));
      r.sort((i, o) => i.distance < o.distance ? -1 : 1);
      let n = r[0];
      return n.distance < 3 ? n.value : null;
    }
    __name(fp, "fp");
    function dp(e, t) {
      return la(t.models, e) ?? la(t.types, e);
    }
    __name(dp, "dp");
    function la(e, t) {
      let r = Object.keys(e).find((n) => De(n) === t);
      if (r) return e[r];
    }
    __name(la, "la");
    function gp(e, t) {
      let r = ut(e);
      for (let o of t) switch (o.kind) {
        case "UnknownModel":
          r.arguments.getField(o.modelKey)?.markAsError(), r.addErrorMessage(() => `Unknown model name: ${o.modelKey}.`);
          break;
        case "UnknownField":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => `Model "${o.modelKey}" does not have a field named "${o.fieldName}".`);
          break;
        case "RelationInOmit":
          r.arguments.getDeepField([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => 'Relations are already excluded by default and can not be specified in "omit".');
          break;
        case "InvalidFieldValue":
          r.arguments.getDeepFieldValue([o.modelKey, o.fieldName])?.markAsError(), r.addErrorMessage(() => "Omit field option value must be a boolean.");
          break;
      }
      let { message: n, args: i } = Nr(r, "colorless");
      return `Error validating "omit" option:

${i}

${n}`;
    }
    __name(gp, "gp");
    f();
    u();
    c();
    p();
    m2();
    function pa(e) {
      return e.length === 0 ? Promise.resolve([]) : new Promise((t, r) => {
        let n = new Array(e.length), i = null, o = false, s = 0, a = /* @__PURE__ */ __name(() => {
          o || (s++, s === e.length && (o = true, i ? r(i) : t(n)));
        }, "a"), l = /* @__PURE__ */ __name((d) => {
          o || (o = true, r(d));
        }, "l");
        for (let d = 0; d < e.length; d++) e[d].then((g) => {
          n[d] = g, a();
        }, (g) => {
          if (!en(g)) {
            l(g);
            return;
          }
          g.batchRequestIdx === d ? l(g) : (i || (i = g), a());
        });
      });
    }
    __name(pa, "pa");
    var Ne = K("prisma:client");
    typeof globalThis == "object" && (globalThis.NODE_CLIENT = true);
    var hp = { requestArgsToMiddlewareArgs: /* @__PURE__ */ __name((e) => e, "requestArgsToMiddlewareArgs"), middlewareArgsToRequestArgs: /* @__PURE__ */ __name((e) => e, "middlewareArgsToRequestArgs") };
    var yp = Symbol.for("prisma.client.transaction.id");
    var wp = { id: 0, nextId() {
      return ++this.id;
    } };
    function da(e) {
      class t {
        static {
          __name(this, "t");
        }
        _originalClient = this;
        _runtimeDataModel;
        _requestHandler;
        _connectionPromise;
        _disconnectionPromise;
        _engineConfig;
        _accelerateEngineConfig;
        _clientVersion;
        _errorFormat;
        _tracingHelper;
        _middlewares = new Xr();
        _previewFeatures;
        _activeProvider;
        _globalOmit;
        _extensions;
        _engine;
        _appliedParent;
        _createPrismaPromise = ri();
        constructor(n) {
          e = n?.__internal?.configOverride?.(e) ?? e, Is(e), n && ca(n, e);
          let i = new Vr().on("error", () => {
          });
          this._extensions = ct.empty(), this._previewFeatures = Zr(e), this._clientVersion = e.clientVersion ?? ia, this._activeProvider = e.activeProvider, this._globalOmit = n?.omit, this._tracingHelper = Ys();
          let o = e.relativeEnvPaths && { rootEnvPath: e.relativeEnvPaths.rootEnvPath && dr.resolve(e.dirname, e.relativeEnvPaths.rootEnvPath), schemaEnvPath: e.relativeEnvPaths.schemaEnvPath && dr.resolve(e.dirname, e.relativeEnvPaths.schemaEnvPath) }, s;
          if (n?.adapter) {
            s = n.adapter;
            let l = e.activeProvider === "postgresql" ? "postgres" : e.activeProvider;
            if (s.provider !== l) throw new Q(`The Driver Adapter \`${s.adapterName}\`, based on \`${s.provider}\`, is not compatible with the provider \`${l}\` specified in the Prisma schema.`, this._clientVersion);
            if (n.datasources || n.datasourceUrl !== void 0) throw new Q("Custom datasource configuration is not compatible with Prisma Driver Adapters. Please define the database connection string directly in the Driver Adapter configuration.", this._clientVersion);
          }
          let a = e.injectableEdgeEnv?.();
          try {
            let l = n ?? {}, d = l.__internal ?? {}, g = d.debug === true;
            g && K.enable("prisma:client");
            let h = dr.resolve(e.dirname, e.relativePath);
            Vi.existsSync(h) || (h = e.dirname), Ne("dirname", e.dirname), Ne("relativePath", e.relativePath), Ne("cwd", h);
            let v = d.engine || {};
            if (l.errorFormat ? this._errorFormat = l.errorFormat : y2.env.NODE_ENV === "production" ? this._errorFormat = "minimal" : y2.env.NO_COLOR ? this._errorFormat = "colorless" : this._errorFormat = "colorless", this._runtimeDataModel = e.runtimeDataModel, this._engineConfig = { cwd: h, dirname: e.dirname, enableDebugLogs: g, allowTriggerPanic: v.allowTriggerPanic, prismaPath: v.binaryPath ?? void 0, engineEndpoint: v.endpoint, generator: e.generator, showColors: this._errorFormat === "pretty", logLevel: l.log && Xs(l.log), logQueries: l.log && !!(typeof l.log == "string" ? l.log === "query" : l.log.find((S) => typeof S == "string" ? S === "query" : S.level === "query")), env: a?.parsed ?? {}, flags: [], engineWasm: e.engineWasm, compilerWasm: e.compilerWasm, clientVersion: e.clientVersion, engineVersion: e.engineVersion, previewFeatures: this._previewFeatures, activeProvider: e.activeProvider, inlineSchema: e.inlineSchema, overrideDatasources: Os(l, e.datasourceNames), inlineDatasources: e.inlineDatasources, inlineSchemaHash: e.inlineSchemaHash, tracingHelper: this._tracingHelper, transactionOptions: { maxWait: l.transactionOptions?.maxWait ?? 2e3, timeout: l.transactionOptions?.timeout ?? 5e3, isolationLevel: l.transactionOptions?.isolationLevel }, logEmitter: i, isBundled: e.isBundled, adapter: s }, this._accelerateEngineConfig = { ...this._engineConfig, accelerateUtils: { resolveDatasourceUrl: dt, getBatchRequestPayload: Jr, prismaGraphQLToJSError: Wr, PrismaClientUnknownRequestError: ne, PrismaClientInitializationError: Q, PrismaClientKnownRequestError: re, debug: K("prisma:client:accelerateEngine"), engineVersion: fa.version, clientVersion: e.clientVersion } }, Ne("clientVersion", e.clientVersion), this._engine = qs(e, this._engineConfig), this._requestHandler = new nn(this, i), l.log) for (let S of l.log) {
              let A2 = typeof S == "string" ? S : S.emit === "stdout" ? S.level : null;
              A2 && this.$on(A2, (R) => {
                At.log(`${At.tags[A2] ?? ""}`, R.message || R.query);
              });
            }
          } catch (l) {
            throw l.clientVersion = this._clientVersion, l;
          }
          return this._appliedParent = Gt(this);
        }
        get [Symbol.toStringTag]() {
          return "PrismaClient";
        }
        $use(n) {
          this._middlewares.use(n);
        }
        $on(n, i) {
          return n === "beforeExit" ? this._engine.onBeforeExit(i) : n && this._engineConfig.logEmitter.on(n, i), this;
        }
        $connect() {
          try {
            return this._engine.start();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          }
        }
        async $disconnect() {
          try {
            await this._engine.stop();
          } catch (n) {
            throw n.clientVersion = this._clientVersion, n;
          } finally {
            $i();
          }
        }
        $executeRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "executeRaw", args: o, transaction: n, clientMethod: i, argsMapper: ti({ clientMethod: i, activeProvider: a }), callsite: _e(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $executeRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) {
              let [s, a] = ma(n, i);
              return ei(this._activeProvider, s.text, s.values, Array.isArray(n) ? "prisma.$executeRaw`<SQL>`" : "prisma.$executeRaw(sql`<SQL>`)"), this.$executeRawInternal(o, "$executeRaw", s, a);
            }
            throw new Z("`$executeRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#executeraw\n", { clientVersion: this._clientVersion });
          });
        }
        $executeRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => (ei(this._activeProvider, n, i, "prisma.$executeRawUnsafe(<SQL>, [...values])"), this.$executeRawInternal(o, "$executeRawUnsafe", [n, ...i])));
        }
        $runCommandRaw(n) {
          if (e.activeProvider !== "mongodb") throw new Z(`The ${e.activeProvider} provider does not support $runCommandRaw. Use the mongodb provider.`, { clientVersion: this._clientVersion });
          return this._createPrismaPromise((i) => this._request({ args: n, clientMethod: "$runCommandRaw", dataPath: [], action: "runCommandRaw", argsMapper: $s, callsite: _e(this._errorFormat), transaction: i }));
        }
        async $queryRawInternal(n, i, o, s) {
          let a = this._activeProvider;
          return this._request({ action: "queryRaw", args: o, transaction: n, clientMethod: i, argsMapper: ti({ clientMethod: i, activeProvider: a }), callsite: _e(this._errorFormat), dataPath: [], middlewareArgsMapper: s });
        }
        $queryRaw(n, ...i) {
          return this._createPrismaPromise((o) => {
            if (n.raw !== void 0 || n.sql !== void 0) return this.$queryRawInternal(o, "$queryRaw", ...ma(n, i));
            throw new Z("`$queryRaw` is a tag function, please use it like the following:\n```\nconst result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`\n```\n\nOr read our docs at https://www.prisma.io/docs/concepts/components/prisma-client/raw-database-access#queryraw\n", { clientVersion: this._clientVersion });
          });
        }
        $queryRawTyped(n) {
          return this._createPrismaPromise((i) => {
            if (!this._hasPreviewFlag("typedSql")) throw new Z("`typedSql` preview feature must be enabled in order to access $queryRawTyped API", { clientVersion: this._clientVersion });
            return this.$queryRawInternal(i, "$queryRawTyped", n);
          });
        }
        $queryRawUnsafe(n, ...i) {
          return this._createPrismaPromise((o) => this.$queryRawInternal(o, "$queryRawUnsafe", [n, ...i]));
        }
        _transactionWithArray({ promises: n, options: i }) {
          let o = wp.nextId(), s = Zs(n.length), a = n.map((l, d) => {
            if (l?.[Symbol.toStringTag] !== "PrismaPromise") throw new Error("All elements of the array need to be Prisma Client promises. Hint: Please make sure you are not awaiting the Prisma client calls you intended to pass in the $transaction function.");
            let g = i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel, h = { kind: "batch", id: o, index: d, isolationLevel: g, lock: s };
            return l.requestTransaction?.(h) ?? l;
          });
          return pa(a);
        }
        async _transactionWithCallback({ callback: n, options: i }) {
          let o = { traceparent: this._tracingHelper.getTraceParent() }, s = { maxWait: i?.maxWait ?? this._engineConfig.transactionOptions.maxWait, timeout: i?.timeout ?? this._engineConfig.transactionOptions.timeout, isolationLevel: i?.isolationLevel ?? this._engineConfig.transactionOptions.isolationLevel }, a = await this._engine.transaction("start", o, s), l;
          try {
            let d = { kind: "itx", ...a };
            l = await n(this._createItxClient(d)), await this._engine.transaction("commit", o, a);
          } catch (d) {
            throw await this._engine.transaction("rollback", o, a).catch(() => {
            }), d;
          }
          return l;
        }
        _createItxClient(n) {
          return me(Gt(me(gs(this), [ee("_appliedParent", () => this._appliedParent._createItxClient(n)), ee("_createPrismaPromise", () => ri(n)), ee(yp, () => n.id)])), [mt(bs)]);
        }
        $transaction(n, i) {
          let o;
          typeof n == "function" ? this._engineConfig.adapter?.adapterName === "@prisma/adapter-d1" ? o = /* @__PURE__ */ __name(() => {
            throw new Error("Cloudflare D1 does not support interactive transactions. We recommend you to refactor your queries with that limitation in mind, and use batch transactions with `prisma.$transactions([])` where applicable.");
          }, "o") : o = /* @__PURE__ */ __name(() => this._transactionWithCallback({ callback: n, options: i }), "o") : o = /* @__PURE__ */ __name(() => this._transactionWithArray({ promises: n, options: i }), "o");
          let s = { name: "transaction", attributes: { method: "$transaction" } };
          return this._tracingHelper.runInChildSpan(s, o);
        }
        _request(n) {
          n.otelParentCtx = this._tracingHelper.getActiveContext();
          let i = n.middlewareArgsMapper ?? hp, o = { args: i.requestArgsToMiddlewareArgs(n.args), dataPath: n.dataPath, runInTransaction: !!n.transaction, action: n.action, model: n.model }, s = { middleware: { name: "middleware", middleware: true, attributes: { method: "$use" }, active: false }, operation: { name: "operation", attributes: { method: o.action, model: o.model, name: o.model ? `${o.model}.${o.action}` : o.action } } }, a = -1, l = /* @__PURE__ */ __name(async (d) => {
            let g = this._middlewares.get(++a);
            if (g) return this._tracingHelper.runInChildSpan(s.middleware, (D) => g(d, (M) => (D?.end(), l(M))));
            let { runInTransaction: h, args: v, ...S } = d, A2 = { ...n, ...S };
            v && (A2.args = i.middlewareArgsToRequestArgs(v)), n.transaction !== void 0 && h === false && delete A2.transaction;
            let R = await Ts(this, A2);
            return A2.model ? Es({ result: R, modelName: A2.model, args: A2.args, extensions: this._extensions, runtimeDataModel: this._runtimeDataModel, globalOmit: this._globalOmit }) : R;
          }, "l");
          return this._tracingHelper.runInChildSpan(s.operation, () => l(o));
        }
        async _executeRequest({ args: n, clientMethod: i, dataPath: o, callsite: s, action: a, model: l, argsMapper: d, transaction: g, unpacker: h, otelParentCtx: v, customDataProxyFetch: S }) {
          try {
            n = d ? d(n) : n;
            let A2 = { name: "serialize" }, R = this._tracingHelper.runInChildSpan(A2, () => qr({ modelName: l, runtimeDataModel: this._runtimeDataModel, action: a, args: n, clientMethod: i, callsite: s, extensions: this._extensions, errorFormat: this._errorFormat, clientVersion: this._clientVersion, previewFeatures: this._previewFeatures, globalOmit: this._globalOmit }));
            return K.enabled("prisma:client") && (Ne("Prisma Client call:"), Ne(`prisma.${i}(${os(n)})`), Ne("Generated request:"), Ne(JSON.stringify(R, null, 2) + `
`)), g?.kind === "batch" && await g.lock, this._requestHandler.request({ protocolQuery: R, modelName: l, action: a, clientMethod: i, dataPath: o, callsite: s, args: n, extensions: this._extensions, transaction: g, unpacker: h, otelParentCtx: v, otelChildCtx: this._tracingHelper.getActiveContext(), globalOmit: this._globalOmit, customDataProxyFetch: S });
          } catch (A2) {
            throw A2.clientVersion = this._clientVersion, A2;
          }
        }
        $metrics = new pt(this);
        _hasPreviewFlag(n) {
          return !!this._engineConfig.previewFeatures?.includes(n);
        }
        $applyPendingMigrations() {
          return this._engine.applyPendingMigrations();
        }
        $extends = hs;
      }
      return t;
    }
    __name(da, "da");
    function ma(e, t) {
      return Ep(e) ? [new oe(e, t), Hs] : [e, Ks];
    }
    __name(ma, "ma");
    function Ep(e) {
      return Array.isArray(e) && Array.isArray(e.raw);
    }
    __name(Ep, "Ep");
    f();
    u();
    c();
    p();
    m2();
    var bp = /* @__PURE__ */ new Set(["toJSON", "$$typeof", "asymmetricMatch", Symbol.iterator, Symbol.toStringTag, Symbol.isConcatSpreadable, Symbol.toPrimitive]);
    function ga(e) {
      return new Proxy(e, { get(t, r) {
        if (r in t) return t[r];
        if (!bp.has(r)) throw new TypeError(`Invalid enum value: ${String(r)}`);
      } });
    }
    __name(ga, "ga");
    f();
    u();
    c();
    p();
    m2();
  }
});

// node_modules/.prisma/client/edge.js
var require_edge2 = __commonJS({
  "node_modules/.prisma/client/edge.js"(exports) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var {
      PrismaClientKnownRequestError: PrismaClientKnownRequestError2,
      PrismaClientUnknownRequestError: PrismaClientUnknownRequestError2,
      PrismaClientRustPanicError: PrismaClientRustPanicError2,
      PrismaClientInitializationError: PrismaClientInitializationError2,
      PrismaClientValidationError: PrismaClientValidationError2,
      getPrismaClient: getPrismaClient2,
      sqltag: sqltag2,
      empty: empty2,
      join: join2,
      raw: raw3,
      skip: skip2,
      Decimal: Decimal2,
      Debug: Debug2,
      objectEnumValues: objectEnumValues2,
      makeStrictEnum: makeStrictEnum2,
      Extensions: Extensions2,
      warnOnce: warnOnce2,
      defineDmmfProperty: defineDmmfProperty2,
      Public: Public2,
      getRuntime: getRuntime2,
      createParam: createParam2
    } = require_edge();
    var Prisma = {};
    exports.Prisma = Prisma;
    exports.$Enums = {};
    Prisma.prismaVersion = {
      client: "6.8.2",
      engine: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
    };
    Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError2;
    Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError2;
    Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError2;
    Prisma.PrismaClientInitializationError = PrismaClientInitializationError2;
    Prisma.PrismaClientValidationError = PrismaClientValidationError2;
    Prisma.Decimal = Decimal2;
    Prisma.sql = sqltag2;
    Prisma.empty = empty2;
    Prisma.join = join2;
    Prisma.raw = raw3;
    Prisma.validator = Public2.validator;
    Prisma.getExtensionContext = Extensions2.getExtensionContext;
    Prisma.defineExtension = Extensions2.defineExtension;
    Prisma.DbNull = objectEnumValues2.instances.DbNull;
    Prisma.JsonNull = objectEnumValues2.instances.JsonNull;
    Prisma.AnyNull = objectEnumValues2.instances.AnyNull;
    Prisma.NullTypes = {
      DbNull: objectEnumValues2.classes.DbNull,
      JsonNull: objectEnumValues2.classes.JsonNull,
      AnyNull: objectEnumValues2.classes.AnyNull
    };
    exports.Prisma.TransactionIsolationLevel = makeStrictEnum2({
      ReadUncommitted: "ReadUncommitted",
      ReadCommitted: "ReadCommitted",
      RepeatableRead: "RepeatableRead",
      Serializable: "Serializable"
    });
    exports.Prisma.UserScalarFieldEnum = {
      id: "id",
      name: "name",
      username: "username",
      password: "password"
    };
    exports.Prisma.BlogScalarFieldEnum = {
      id: "id",
      authorId: "authorId",
      content: "content",
      title: "title",
      published: "published"
    };
    exports.Prisma.SortOrder = {
      asc: "asc",
      desc: "desc"
    };
    exports.Prisma.QueryMode = {
      default: "default",
      insensitive: "insensitive"
    };
    exports.Prisma.NullsOrder = {
      first: "first",
      last: "last"
    };
    exports.Prisma.ModelName = {
      User: "User",
      Blog: "Blog"
    };
    var config = {
      "generator": {
        "name": "client",
        "provider": {
          "fromEnvVar": null,
          "value": "prisma-client-js"
        },
        "output": {
          "value": "D:\\Coding\\Full stack\\Medium Clone\\backend\\node_modules\\@prisma\\client",
          "fromEnvVar": null
        },
        "config": {
          "engineType": "library"
        },
        "binaryTargets": [
          {
            "fromEnvVar": null,
            "value": "windows",
            "native": true
          }
        ],
        "previewFeatures": [],
        "sourceFilePath": "D:\\Coding\\Full stack\\Medium Clone\\backend\\prisma\\schema.prisma"
      },
      "relativeEnvPaths": {
        "rootEnvPath": null,
        "schemaEnvPath": "../../../.env"
      },
      "relativePath": "../../../prisma",
      "clientVersion": "6.8.2",
      "engineVersion": "2060c79ba17c6bb9f5823312b6f6b7f4a845738e",
      "datasourceNames": [
        "db"
      ],
      "activeProvider": "postgresql",
      "postinstall": false,
      "inlineDatasources": {
        "db": {
          "url": {
            "fromEnvVar": "DATABASE_URL",
            "value": null
          }
        }
      },
      "inlineSchema": 'generator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("DATABASE_URL")\n}\n\nmodel User {\n  id       Int     @id @default(autoincrement())\n  name     String?\n  username String  @unique\n  password String\n  blogs    Blog[]\n}\n\nmodel Blog {\n  id        Int     @id @default(autoincrement())\n  authorId  Int\n  content   String\n  title     String\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n}\n',
      "inlineSchemaHash": "2506be251c3461530a5b1ddc5b355961b6af7142635dd114028be0e58e4553ea",
      "copyEngine": true
    };
    config.dirname = "/";
    config.runtimeDataModel = JSON.parse('{"models":{"User":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"blogs","kind":"object","isList":true,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Blog","nativeType":null,"relationName":"BlogToUser","relationFromFields":[],"relationToFields":[],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"Blog":{"dbName":null,"schema":null,"fields":[{"name":"id","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"authorId","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":true,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"content","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"title","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"published","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":true,"type":"Boolean","nativeType":null,"default":false,"isGenerated":false,"isUpdatedAt":false},{"name":"author","kind":"object","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"User","nativeType":null,"relationName":"BlogToUser","relationFromFields":["authorId"],"relationToFields":["id"],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}');
    defineDmmfProperty2(exports.Prisma, config.runtimeDataModel);
    config.engineWasm = void 0;
    config.compilerWasm = void 0;
    config.injectableEdgeEnv = () => ({
      parsed: {
        DATABASE_URL: typeof globalThis !== "undefined" && globalThis["DATABASE_URL"] || typeof process !== "undefined" && process.env && process.env.DATABASE_URL || void 0
      }
    });
    if (typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0) {
      Debug2.enable(typeof globalThis !== "undefined" && globalThis["DEBUG"] || typeof process !== "undefined" && process.env && process.env.DEBUG || void 0);
    }
    var PrismaClient3 = getPrismaClient2(config);
    exports.PrismaClient = PrismaClient3;
    Object.assign(exports, Prisma);
  }
});

// node_modules/@prisma/client/edge.js
var require_edge3 = __commonJS({
  "node_modules/@prisma/client/edge.js"(exports, module) {
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    module.exports = {
      // https://github.com/prisma/prisma/pull/12907
      ...require_edge2()
    };
  }
});

// node_modules/@prisma/client/scripts/default-index.js
var require_default_index = __commonJS({
  "node_modules/@prisma/client/scripts/default-index.js"(exports, module) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: /* @__PURE__ */ __name(() => from[key], "get"), enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    }, "__copyProps");
    var __toCommonJS = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var default_index_exports = {};
    __export(default_index_exports, {
      Prisma: /* @__PURE__ */ __name(() => Prisma, "Prisma"),
      PrismaClient: /* @__PURE__ */ __name(() => PrismaClient3, "PrismaClient"),
      default: /* @__PURE__ */ __name(() => default_index_default, "default")
    });
    module.exports = __toCommonJS(default_index_exports);
    var prisma = {
      enginesVersion: "2060c79ba17c6bb9f5823312b6f6b7f4a845738e"
    };
    var version = "6.8.2";
    var clientVersion = version;
    var PrismaClient3 = class {
      static {
        __name(this, "PrismaClient");
      }
      constructor() {
        throw new Error('@prisma/client did not initialize yet. Please run "prisma generate" and try to import it again.');
      }
    };
    function defineExtension(ext) {
      if (typeof ext === "function") {
        return ext;
      }
      return (client) => client.$extends(ext);
    }
    __name(defineExtension, "defineExtension");
    function getExtensionContext(that) {
      return that;
    }
    __name(getExtensionContext, "getExtensionContext");
    var Prisma = {
      defineExtension,
      getExtensionContext,
      prismaVersion: { client: clientVersion, engine: prisma.enginesVersion }
    };
    var default_index_default = { Prisma };
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/util.js
var require_util = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/util.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getParsedType = exports.ZodParsedType = exports.objectUtil = exports.util = void 0;
    var util;
    (function(util2) {
      util2.assertEqual = (_) => {
      };
      function assertIs(_arg) {
      }
      __name(assertIs, "assertIs");
      util2.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      __name(assertNever, "assertNever");
      util2.assertNever = assertNever;
      util2.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util2.getValidEnumValues = (obj) => {
        const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util2.objectValues(filtered);
      };
      util2.objectValues = (obj) => {
        return util2.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util2.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      __name(joinValues, "joinValues");
      util2.joinValues = joinValues;
      util2.jsonStringifyReplacer = (_, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util || (exports.util = util = {}));
    var objectUtil;
    (function(objectUtil2) {
      objectUtil2.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil || (exports.objectUtil = objectUtil = {}));
    exports.ZodParsedType = util.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType = /* @__PURE__ */ __name((data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return exports.ZodParsedType.undefined;
        case "string":
          return exports.ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
        case "boolean":
          return exports.ZodParsedType.boolean;
        case "function":
          return exports.ZodParsedType.function;
        case "bigint":
          return exports.ZodParsedType.bigint;
        case "symbol":
          return exports.ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return exports.ZodParsedType.array;
          }
          if (data === null) {
            return exports.ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return exports.ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return exports.ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return exports.ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return exports.ZodParsedType.date;
          }
          return exports.ZodParsedType.object;
        default:
          return exports.ZodParsedType.unknown;
      }
    }, "getParsedType");
    exports.getParsedType = getParsedType;
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/ZodError.js
var require_ZodError = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/ZodError.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
    var util_js_1 = require_util();
    exports.ZodIssueCode = util_js_1.util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson = /* @__PURE__ */ __name((obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    }, "quotelessJson");
    exports.quotelessJson = quotelessJson;
    var ZodError = class _ZodError extends Error {
      static {
        __name(this, "ZodError");
      }
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = /* @__PURE__ */ __name((error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i = 0;
              while (i < issue.path.length) {
                const el = issue.path[i];
                const terminal = i === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i++;
              }
            }
          }
        }, "processError");
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util_js_1.util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
            fieldErrors[sub.path[0]].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    exports.ZodError = ZodError;
    ZodError.create = (issues) => {
      const error = new ZodError(issues);
      return error;
    };
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/locales/en.js
var require_en = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/locales/en.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ZodError_js_1 = require_ZodError();
    var util_js_1 = require_util();
    var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodError_js_1.ZodIssueCode.invalid_type:
          if (issue.received === util_js_1.ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodError_js_1.ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util_js_1.util.jsonStringifyReplacer)}`;
          break;
        case ZodError_js_1.ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util_js_1.util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util_js_1.util.joinValues(issue.options)}`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util_js_1.util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util_js_1.util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodError_js_1.ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodError_js_1.ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodError_js_1.ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodError_js_1.ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodError_js_1.ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util_js_1.util.assertNever(issue);
      }
      return { message };
    }, "errorMap");
    exports.default = errorMap;
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/errors.js
var require_errors = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/errors.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultErrorMap = void 0;
    exports.setErrorMap = setErrorMap;
    exports.getErrorMap = getErrorMap;
    var en_js_1 = __importDefault(require_en());
    exports.defaultErrorMap = en_js_1.default;
    var overrideErrorMap = en_js_1.default;
    function setErrorMap(map) {
      overrideErrorMap = map;
    }
    __name(setErrorMap, "setErrorMap");
    function getErrorMap() {
      return overrideErrorMap;
    }
    __name(getErrorMap, "getErrorMap");
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/parseUtil.js
var require_parseUtil = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/parseUtil.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.EMPTY_PATH = exports.makeIssue = void 0;
    exports.addIssueToContext = addIssueToContext;
    var errors_js_1 = require_errors();
    var en_js_1 = __importDefault(require_en());
    var makeIssue = /* @__PURE__ */ __name((params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    }, "makeIssue");
    exports.makeIssue = makeIssue;
    exports.EMPTY_PATH = [];
    function addIssueToContext(ctx, issueData) {
      const overrideMap = (0, errors_js_1.getErrorMap)();
      const issue = (0, exports.makeIssue)({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_js_1.default ? void 0 : en_js_1.default
          // then global default map
        ].filter((x2) => !!x2)
      });
      ctx.common.issues.push(issue);
    }
    __name(addIssueToContext, "addIssueToContext");
    var ParseStatus = class _ParseStatus {
      static {
        __name(this, "ParseStatus");
      }
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return exports.INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return exports.INVALID;
          if (value.status === "aborted")
            return exports.INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    exports.ParseStatus = ParseStatus;
    exports.INVALID = Object.freeze({
      status: "aborted"
    });
    var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
    exports.DIRTY = DIRTY;
    var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
    exports.OK = OK;
    var isAborted = /* @__PURE__ */ __name((x2) => x2.status === "aborted", "isAborted");
    exports.isAborted = isAborted;
    var isDirty = /* @__PURE__ */ __name((x2) => x2.status === "dirty", "isDirty");
    exports.isDirty = isDirty;
    var isValid = /* @__PURE__ */ __name((x2) => x2.status === "valid", "isValid");
    exports.isValid = isValid;
    var isAsync = /* @__PURE__ */ __name((x2) => typeof Promise !== "undefined" && x2 instanceof Promise, "isAsync");
    exports.isAsync = isAsync;
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/typeAliases.js
var require_typeAliases = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/typeAliases.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/errorUtil.js
var require_errorUtil = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/helpers/errorUtil.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorUtil = void 0;
    var errorUtil;
    (function(errorUtil2) {
      errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil || (exports.errorUtil = errorUtil = {}));
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/types.js
var require_types = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/types.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __classPrivateFieldGet = exports && exports.__classPrivateFieldGet || function(receiver, state, kind, f) {
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
    var __classPrivateFieldSet = exports && exports.__classPrivateFieldSet || function(receiver, state, value, kind, f) {
      if (kind === "m") throw new TypeError("Private method is not writable");
      if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    };
    var _ZodEnum_cache;
    var _ZodNativeEnum_cache;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.discriminatedUnion = exports.date = exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.ZodReadonly = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.ZodType = void 0;
    exports.NEVER = exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = exports.function = exports.enum = exports.effect = void 0;
    exports.datetimeRegex = datetimeRegex;
    exports.custom = custom;
    var ZodError_js_1 = require_ZodError();
    var errors_js_1 = require_errors();
    var errorUtil_js_1 = require_errorUtil();
    var parseUtil_js_1 = require_parseUtil();
    var util_js_1 = require_util();
    var ParseInputLazyPath = class {
      static {
        __name(this, "ParseInputLazyPath");
      }
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult = /* @__PURE__ */ __name((ctx, result) => {
      if ((0, parseUtil_js_1.isValid)(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError_js_1.ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    }, "handleResult");
    function processCreateParams(params) {
      if (!params)
        return {};
      const { errorMap, invalid_type_error, required_error, description } = params;
      if (errorMap && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap)
        return { errorMap, description };
      const customMap = /* @__PURE__ */ __name((iss, ctx) => {
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message ?? invalid_type_error ?? ctx.defaultError };
      }, "customMap");
      return { errorMap: customMap, description };
    }
    __name(processCreateParams, "processCreateParams");
    var ZodType = class {
      static {
        __name(this, "ZodType");
      }
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return (0, util_js_1.getParsedType)(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: (0, util_js_1.getParsedType)(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new parseUtil_js_1.ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, util_js_1.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if ((0, parseUtil_js_1.isAsync)(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return (0, parseUtil_js_1.isValid)(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => (0, parseUtil_js_1.isValid)(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await ((0, parseUtil_js_1.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = /* @__PURE__ */ __name((val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        }, "getIssueProperties");
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
            code: ZodError_js_1.ZodIssueCode.custom,
            ...getIssueProperties(val)
          }), "setError");
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects({
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: /* @__PURE__ */ __name((data) => this["~validate"](data), "validate")
        };
      }
      optional() {
        return ZodOptional.create(this, this._def);
      }
      nullable() {
        return ZodNullable.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray.create(this);
      }
      promise() {
        return ZodPromise.create(this, this._def);
      }
      or(option) {
        return ZodUnion.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects({
          ...processCreateParams(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault({
          ...processCreateParams(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodDefault
        });
      }
      brand() {
        return new ZodBranded({
          typeName: ZodFirstPartyTypeKind.ZodBranded,
          type: this,
          ...processCreateParams(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch({
          ...processCreateParams(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline.create(this, target);
      }
      readonly() {
        return ZodReadonly.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    exports.ZodType = ZodType;
    exports.Schema = ZodType;
    exports.ZodSchema = ZodType;
    var cuidRegex = /^c[^\s-]{8,}$/i;
    var cuid2Regex = /^[0-9a-z]+$/;
    var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex = /^[a-z0-9_-]{21}$/i;
    var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex;
    var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex = new RegExp(`^${dateRegexSource}$`);
    function timeRegexSource(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    __name(timeRegexSource, "timeRegexSource");
    function timeRegex(args) {
      return new RegExp(`^${timeRegexSource(args)}$`);
    }
    __name(timeRegex, "timeRegex");
    function datetimeRegex(args) {
      let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    __name(datetimeRegex, "datetimeRegex");
    function isValidIP(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
        return true;
      }
      return false;
    }
    __name(isValidIP, "isValidIP");
    function isValidJWT(jwt2, alg) {
      if (!jwtRegex.test(jwt2))
        return false;
      try {
        const [header] = jwt2.split(".");
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    __name(isValidJWT, "isValidJWT");
    function isValidCidr(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
        return true;
      }
      return false;
    }
    __name(isValidCidr, "isValidCidr");
    var ZodString = class _ZodString extends ZodType {
      static {
        __name(this, "ZodString");
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.string,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const status = new parseUtil_js_1.ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                (0, parseUtil_js_1.addIssueToContext)(ctx, {
                  code: ZodError_js_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                (0, parseUtil_js_1.addIssueToContext)(ctx, {
                  code: ZodError_js_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "email",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex) {
              emojiRegex = new RegExp(_emojiRegex, "u");
            }
            if (!emojiRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "emoji",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "uuid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "nanoid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cuid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cuid2",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "ulid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "url",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "regex",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "duration",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "ip",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "jwt",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cidr",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "base64",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "base64url",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodError_js_1.ZodIssueCode.invalid_string,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil_js_1.errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    exports.ZodString = ZodString;
    ZodString.create = (params) => {
      return new ZodString({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    function floatSafeRemainder(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    __name(floatSafeRemainder, "floatSafeRemainder");
    var ZodNumber = class _ZodNumber extends ZodType {
      static {
        __name(this, "ZodNumber");
      }
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.number,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        let ctx = void 0;
        const status = new parseUtil_js_1.ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util_js_1.util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_js_1.errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil_js_1.errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util_js_1.util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    exports.ZodNumber = ZodNumber;
    ZodNumber.create = (params) => {
      return new ZodNumber({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    var ZodBigInt = class _ZodBigInt extends ZodType {
      static {
        __name(this, "ZodBigInt");
      }
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new parseUtil_js_1.ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_js_1.addIssueToContext)(ctx, {
          code: ZodError_js_1.ZodIssueCode.invalid_type,
          expected: util_js_1.ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return parseUtil_js_1.INVALID;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_js_1.errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    exports.ZodBigInt = ZodBigInt;
    ZodBigInt.create = (params) => {
      return new ZodBigInt({
        checks: [],
        typeName: ZodFirstPartyTypeKind.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams(params)
      });
    };
    var ZodBoolean = class extends ZodType {
      static {
        __name(this, "ZodBoolean");
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodBoolean = ZodBoolean;
    ZodBoolean.create = (params) => {
      return new ZodBoolean({
        typeName: ZodFirstPartyTypeKind.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams(params)
      });
    };
    var ZodDate = class _ZodDate extends ZodType {
      static {
        __name(this, "ZodDate");
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.date,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_date
          });
          return parseUtil_js_1.INVALID;
        }
        const status = new parseUtil_js_1.ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    exports.ZodDate = ZodDate;
    ZodDate.create = (params) => {
      return new ZodDate({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind.ZodDate,
        ...processCreateParams(params)
      });
    };
    var ZodSymbol = class extends ZodType {
      static {
        __name(this, "ZodSymbol");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodSymbol = ZodSymbol;
    ZodSymbol.create = (params) => {
      return new ZodSymbol({
        typeName: ZodFirstPartyTypeKind.ZodSymbol,
        ...processCreateParams(params)
      });
    };
    var ZodUndefined = class extends ZodType {
      static {
        __name(this, "ZodUndefined");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodUndefined = ZodUndefined;
    ZodUndefined.create = (params) => {
      return new ZodUndefined({
        typeName: ZodFirstPartyTypeKind.ZodUndefined,
        ...processCreateParams(params)
      });
    };
    var ZodNull = class extends ZodType {
      static {
        __name(this, "ZodNull");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.null,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodNull = ZodNull;
    ZodNull.create = (params) => {
      return new ZodNull({
        typeName: ZodFirstPartyTypeKind.ZodNull,
        ...processCreateParams(params)
      });
    };
    var ZodAny = class extends ZodType {
      static {
        __name(this, "ZodAny");
      }
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodAny = ZodAny;
    ZodAny.create = (params) => {
      return new ZodAny({
        typeName: ZodFirstPartyTypeKind.ZodAny,
        ...processCreateParams(params)
      });
    };
    var ZodUnknown = class extends ZodType {
      static {
        __name(this, "ZodUnknown");
      }
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodUnknown = ZodUnknown;
    ZodUnknown.create = (params) => {
      return new ZodUnknown({
        typeName: ZodFirstPartyTypeKind.ZodUnknown,
        ...processCreateParams(params)
      });
    };
    var ZodNever = class extends ZodType {
      static {
        __name(this, "ZodNever");
      }
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_js_1.addIssueToContext)(ctx, {
          code: ZodError_js_1.ZodIssueCode.invalid_type,
          expected: util_js_1.ZodParsedType.never,
          received: ctx.parsedType
        });
        return parseUtil_js_1.INVALID;
      }
    };
    exports.ZodNever = ZodNever;
    ZodNever.create = (params) => {
      return new ZodNever({
        typeName: ZodFirstPartyTypeKind.ZodNever,
        ...processCreateParams(params)
      });
    };
    var ZodVoid = class extends ZodType {
      static {
        __name(this, "ZodVoid");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.void,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodVoid = ZodVoid;
    ZodVoid.create = (params) => {
      return new ZodVoid({
        typeName: ZodFirstPartyTypeKind.ZodVoid,
        ...processCreateParams(params)
      });
    };
    var ZodArray = class _ZodArray extends ZodType {
      static {
        __name(this, "ZodArray");
      }
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== util_js_1.ZodParsedType.array) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: tooBig ? ZodError_js_1.ZodIssueCode.too_big : ZodError_js_1.ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i) => {
            return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
          })).then((result2) => {
            return parseUtil_js_1.ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i) => {
          return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
        });
        return parseUtil_js_1.ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    exports.ZodArray = ZodArray;
    ZodArray.create = (schema, params) => {
      return new ZodArray({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind.ZodArray,
        ...processCreateParams(params)
      });
    };
    function deepPartialify(schema) {
      if (schema instanceof ZodObject) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
        }
        return new ZodObject({
          ...schema._def,
          shape: /* @__PURE__ */ __name(() => newShape, "shape")
        });
      } else if (schema instanceof ZodArray) {
        return new ZodArray({
          ...schema._def,
          type: deepPartialify(schema.element)
        });
      } else if (schema instanceof ZodOptional) {
        return ZodOptional.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodNullable) {
        return ZodNullable.create(deepPartialify(schema.unwrap()));
      } else if (schema instanceof ZodTuple) {
        return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
      } else {
        return schema;
      }
    }
    __name(deepPartialify, "deepPartialify");
    var ZodObject = class _ZodObject extends ZodType {
      static {
        __name(this, "ZodObject");
      }
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util_js_1.util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return parseUtil_js_1.ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return parseUtil_js_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil_js_1.errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: /* @__PURE__ */ __name((issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil_js_1.errorUtil.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }, "errorMap")
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => ({
            ...this._def.shape(),
            ...augmentation
          }), "shape")
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: /* @__PURE__ */ __name(() => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }), "shape"),
          typeName: ZodFirstPartyTypeKind.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util_js_1.util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => shape, "shape")
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => shape, "shape")
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => newShape, "shape")
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => newShape, "shape")
        });
      }
      keyof() {
        return createZodEnum(util_js_1.util.objectKeys(this.shape));
      }
    };
    exports.ZodObject = ZodObject;
    ZodObject.create = (shape, params) => {
      return new ZodObject({
        shape: /* @__PURE__ */ __name(() => shape, "shape"),
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.strictCreate = (shape, params) => {
      return new ZodObject({
        shape: /* @__PURE__ */ __name(() => shape, "shape"),
        unknownKeys: "strict",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    ZodObject.lazycreate = (shape, params) => {
      return new ZodObject({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever.create(),
        typeName: ZodFirstPartyTypeKind.ZodObject,
        ...processCreateParams(params)
      });
    };
    var ZodUnion = class extends ZodType {
      static {
        __name(this, "ZodUnion");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError_js_1.ZodError(result.ctx.common.issues));
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_js_1.INVALID;
        }
        __name(handleResults, "handleResults");
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError_js_1.ZodError(issues2));
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_js_1.INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    exports.ZodUnion = ZodUnion;
    ZodUnion.create = (types, params) => {
      return new ZodUnion({
        options: types,
        typeName: ZodFirstPartyTypeKind.ZodUnion,
        ...processCreateParams(params)
      });
    };
    var getDiscriminator = /* @__PURE__ */ __name((type) => {
      if (type instanceof ZodLazy) {
        return getDiscriminator(type.schema);
      } else if (type instanceof ZodEffects) {
        return getDiscriminator(type.innerType());
      } else if (type instanceof ZodLiteral) {
        return [type.value];
      } else if (type instanceof ZodEnum) {
        return type.options;
      } else if (type instanceof ZodNativeEnum) {
        return util_js_1.util.objectValues(type.enum);
      } else if (type instanceof ZodDefault) {
        return getDiscriminator(type._def.innerType);
      } else if (type instanceof ZodUndefined) {
        return [void 0];
      } else if (type instanceof ZodNull) {
        return [null];
      } else if (type instanceof ZodOptional) {
        return [void 0, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodNullable) {
        return [null, ...getDiscriminator(type.unwrap())];
      } else if (type instanceof ZodBranded) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodReadonly) {
        return getDiscriminator(type.unwrap());
      } else if (type instanceof ZodCatch) {
        return getDiscriminator(type._def.innerType);
      } else {
        return [];
      }
    }, "getDiscriminator");
    var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
      static {
        __name(this, "ZodDiscriminatedUnion");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.object) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams(params)
        });
      }
    };
    exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
    function mergeValues(a, b) {
      const aType = (0, util_js_1.getParsedType)(a);
      const bType = (0, util_js_1.getParsedType)(b);
      if (a === b) {
        return { valid: true, data: a };
      } else if (aType === util_js_1.ZodParsedType.object && bType === util_js_1.ZodParsedType.object) {
        const bKeys = util_js_1.util.objectKeys(b);
        const sharedKeys = util_js_1.util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a, ...b };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues(a[key], b[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === util_js_1.ZodParsedType.array && bType === util_js_1.ZodParsedType.array) {
        if (a.length !== b.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a.length; index++) {
          const itemA = a[index];
          const itemB = b[index];
          const sharedValue = mergeValues(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === util_js_1.ZodParsedType.date && bType === util_js_1.ZodParsedType.date && +a === +b) {
        return { valid: true, data: a };
      } else {
        return { valid: false };
      }
    }
    __name(mergeValues, "mergeValues");
    var ZodIntersection = class extends ZodType {
      static {
        __name(this, "ZodIntersection");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
          if ((0, parseUtil_js_1.isAborted)(parsedLeft) || (0, parseUtil_js_1.isAborted)(parsedRight)) {
            return parseUtil_js_1.INVALID;
          }
          const merged = mergeValues(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.invalid_intersection_types
            });
            return parseUtil_js_1.INVALID;
          }
          if ((0, parseUtil_js_1.isDirty)(parsedLeft) || (0, parseUtil_js_1.isDirty)(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        }, "handleParsed");
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    exports.ZodIntersection = ZodIntersection;
    ZodIntersection.create = (left, right, params) => {
      return new ZodIntersection({
        left,
        right,
        typeName: ZodFirstPartyTypeKind.ZodIntersection,
        ...processCreateParams(params)
      });
    };
    var ZodTuple = class _ZodTuple extends ZodType {
      static {
        __name(this, "ZodTuple");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.array) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return parseUtil_js_1.INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
        }).filter((x2) => !!x2);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return parseUtil_js_1.ParseStatus.mergeArray(status, results);
          });
        } else {
          return parseUtil_js_1.ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    exports.ZodTuple = ZodTuple;
    ZodTuple.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple({
        items: schemas,
        typeName: ZodFirstPartyTypeKind.ZodTuple,
        rest: null,
        ...processCreateParams(params)
      });
    };
    var ZodRecord = class _ZodRecord extends ZodType {
      static {
        __name(this, "ZodRecord");
      }
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.object) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return parseUtil_js_1.ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return parseUtil_js_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind.ZodRecord,
            ...processCreateParams(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind.ZodRecord,
          ...processCreateParams(second)
        });
      }
    };
    exports.ZodRecord = ZodRecord;
    var ZodMap = class extends ZodType {
      static {
        __name(this, "ZodMap");
      }
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.map) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.map,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return parseUtil_js_1.INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return parseUtil_js_1.INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    exports.ZodMap = ZodMap;
    ZodMap.create = (keyType, valueType, params) => {
      return new ZodMap({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind.ZodMap,
        ...processCreateParams(params)
      });
    };
    var ZodSet = class _ZodSet extends ZodType {
      static {
        __name(this, "ZodSet");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.set) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.set,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        __name(finalizeSet, "finalizeSet");
        const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    exports.ZodSet = ZodSet;
    ZodSet.create = (valueType, params) => {
      return new ZodSet({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind.ZodSet,
        ...processCreateParams(params)
      });
    };
    var ZodFunction = class _ZodFunction extends ZodType {
      static {
        __name(this, "ZodFunction");
      }
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.function) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.function,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        function makeArgsIssue(args, error) {
          return (0, parseUtil_js_1.makeIssue)({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, (0, errors_js_1.getErrorMap)(), errors_js_1.defaultErrorMap].filter((x2) => !!x2),
            issueData: {
              code: ZodError_js_1.ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        __name(makeArgsIssue, "makeArgsIssue");
        function makeReturnsIssue(returns, error) {
          return (0, parseUtil_js_1.makeIssue)({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, (0, errors_js_1.getErrorMap)(), errors_js_1.defaultErrorMap].filter((x2) => !!x2),
            issueData: {
              code: ZodError_js_1.ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        __name(makeReturnsIssue, "makeReturnsIssue");
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise) {
          const me = this;
          return (0, parseUtil_js_1.OK)(async function(...args) {
            const error = new ZodError_js_1.ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return (0, parseUtil_js_1.OK)(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError_js_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError_js_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple.create(items).rest(ZodUnknown.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
          returns: returns || ZodUnknown.create(),
          typeName: ZodFirstPartyTypeKind.ZodFunction,
          ...processCreateParams(params)
        });
      }
    };
    exports.ZodFunction = ZodFunction;
    var ZodLazy = class extends ZodType {
      static {
        __name(this, "ZodLazy");
      }
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    exports.ZodLazy = ZodLazy;
    ZodLazy.create = (getter, params) => {
      return new ZodLazy({
        getter,
        typeName: ZodFirstPartyTypeKind.ZodLazy,
        ...processCreateParams(params)
      });
    };
    var ZodLiteral = class extends ZodType {
      static {
        __name(this, "ZodLiteral");
      }
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return parseUtil_js_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    exports.ZodLiteral = ZodLiteral;
    ZodLiteral.create = (value, params) => {
      return new ZodLiteral({
        value,
        typeName: ZodFirstPartyTypeKind.ZodLiteral,
        ...processCreateParams(params)
      });
    };
    function createZodEnum(values, params) {
      return new ZodEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodEnum,
        ...processCreateParams(params)
      });
    }
    __name(createZodEnum, "createZodEnum");
    var ZodEnum = class _ZodEnum extends ZodType {
      static {
        __name(this, "ZodEnum");
      }
      constructor() {
        super(...arguments);
        _ZodEnum_cache.set(this, void 0);
      }
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            expected: util_js_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_js_1.ZodIssueCode.invalid_type
          });
          return parseUtil_js_1.INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f")) {
          __classPrivateFieldSet(this, _ZodEnum_cache, new Set(this._def.values), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodEnum_cache, "f").has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    exports.ZodEnum = ZodEnum;
    _ZodEnum_cache = /* @__PURE__ */ new WeakMap();
    ZodEnum.create = createZodEnum;
    var ZodNativeEnum = class extends ZodType {
      static {
        __name(this, "ZodNativeEnum");
      }
      constructor() {
        super(...arguments);
        _ZodNativeEnum_cache.set(this, void 0);
      }
      _parse(input) {
        const nativeEnumValues = util_js_1.util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.string && ctx.parsedType !== util_js_1.ZodParsedType.number) {
          const expectedValues = util_js_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            expected: util_js_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_js_1.ZodIssueCode.invalid_type
          });
          return parseUtil_js_1.INVALID;
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f")) {
          __classPrivateFieldSet(this, _ZodNativeEnum_cache, new Set(util_js_1.util.getValidEnumValues(this._def.values)), "f");
        }
        if (!__classPrivateFieldGet(this, _ZodNativeEnum_cache, "f").has(input.data)) {
          const expectedValues = util_js_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    exports.ZodNativeEnum = ZodNativeEnum;
    _ZodNativeEnum_cache = /* @__PURE__ */ new WeakMap();
    ZodNativeEnum.create = (values, params) => {
      return new ZodNativeEnum({
        values,
        typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
        ...processCreateParams(params)
      });
    };
    var ZodPromise = class extends ZodType {
      static {
        __name(this, "ZodPromise");
      }
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.promise && ctx.common.async === false) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.promise,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const promisified = ctx.parsedType === util_js_1.ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, parseUtil_js_1.OK)(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    exports.ZodPromise = ZodPromise;
    ZodPromise.create = (schema, params) => {
      return new ZodPromise({
        type: schema,
        typeName: ZodFirstPartyTypeKind.ZodPromise,
        ...processCreateParams(params)
      });
    };
    var ZodEffects = class extends ZodType {
      static {
        __name(this, "ZodEffects");
      }
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: /* @__PURE__ */ __name((arg) => {
            (0, parseUtil_js_1.addIssueToContext)(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          }, "addIssue"),
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return parseUtil_js_1.INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return parseUtil_js_1.INVALID;
              if (result.status === "dirty")
                return (0, parseUtil_js_1.DIRTY)(result.value);
              if (status.value === "dirty")
                return (0, parseUtil_js_1.DIRTY)(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return parseUtil_js_1.INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (result.status === "dirty")
              return (0, parseUtil_js_1.DIRTY)(result.value);
            if (status.value === "dirty")
              return (0, parseUtil_js_1.DIRTY)(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = /* @__PURE__ */ __name((acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          }, "executeRefinement");
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return parseUtil_js_1.INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!(0, parseUtil_js_1.isValid)(base))
              return base;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!(0, parseUtil_js_1.isValid)(base))
                return base;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util_js_1.util.assertNever(effect);
      }
    };
    exports.ZodEffects = ZodEffects;
    exports.ZodTransformer = ZodEffects;
    ZodEffects.create = (schema, effect, params) => {
      return new ZodEffects({
        schema,
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        effect,
        ...processCreateParams(params)
      });
    };
    ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind.ZodEffects,
        ...processCreateParams(params)
      });
    };
    var ZodOptional = class extends ZodType {
      static {
        __name(this, "ZodOptional");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_js_1.ZodParsedType.undefined) {
          return (0, parseUtil_js_1.OK)(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodOptional = ZodOptional;
    ZodOptional.create = (type, params) => {
      return new ZodOptional({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodOptional,
        ...processCreateParams(params)
      });
    };
    var ZodNullable = class extends ZodType {
      static {
        __name(this, "ZodNullable");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_js_1.ZodParsedType.null) {
          return (0, parseUtil_js_1.OK)(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodNullable = ZodNullable;
    ZodNullable.create = (type, params) => {
      return new ZodNullable({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodNullable,
        ...processCreateParams(params)
      });
    };
    var ZodDefault = class extends ZodType {
      static {
        __name(this, "ZodDefault");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === util_js_1.ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    exports.ZodDefault = ZodDefault;
    ZodDefault.create = (type, params) => {
      return new ZodDefault({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams(params)
      });
    };
    var ZodCatch = class extends ZodType {
      static {
        __name(this, "ZodCatch");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if ((0, parseUtil_js_1.isAsync)(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError_js_1.ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError_js_1.ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    exports.ZodCatch = ZodCatch;
    ZodCatch.create = (type, params) => {
      return new ZodCatch({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams(params)
      });
    };
    var ZodNaN = class extends ZodType {
      static {
        __name(this, "ZodNaN");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.nan,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    exports.ZodNaN = ZodNaN;
    ZodNaN.create = (params) => {
      return new ZodNaN({
        typeName: ZodFirstPartyTypeKind.ZodNaN,
        ...processCreateParams(params)
      });
    };
    exports.BRAND = Symbol("zod_brand");
    var ZodBranded = class extends ZodType {
      static {
        __name(this, "ZodBranded");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    exports.ZodBranded = ZodBranded;
    var ZodPipeline = class _ZodPipeline extends ZodType {
      static {
        __name(this, "ZodPipeline");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = /* @__PURE__ */ __name(async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return (0, parseUtil_js_1.DIRTY)(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          }, "handleAsync");
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return parseUtil_js_1.INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a, b) {
        return new _ZodPipeline({
          in: a,
          out: b,
          typeName: ZodFirstPartyTypeKind.ZodPipeline
        });
      }
    };
    exports.ZodPipeline = ZodPipeline;
    var ZodReadonly = class extends ZodType {
      static {
        __name(this, "ZodReadonly");
      }
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = /* @__PURE__ */ __name((data) => {
          if ((0, parseUtil_js_1.isValid)(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        }, "freeze");
        return (0, parseUtil_js_1.isAsync)(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodReadonly = ZodReadonly;
    ZodReadonly.create = (type, params) => {
      return new ZodReadonly({
        innerType: type,
        typeName: ZodFirstPartyTypeKind.ZodReadonly,
        ...processCreateParams(params)
      });
    };
    function cleanParams(params, data) {
      const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p2 = typeof p === "string" ? { message: p } : p;
      return p2;
    }
    __name(cleanParams, "cleanParams");
    function custom(check, _params = {}, fatal) {
      if (check)
        return ZodAny.create().superRefine((data, ctx) => {
          const r = check(data);
          if (r instanceof Promise) {
            return r.then((r2) => {
              if (!r2) {
                const params = cleanParams(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny.create();
    }
    __name(custom, "custom");
    exports.late = {
      object: ZodObject.lazycreate
    };
    var ZodFirstPartyTypeKind;
    (function(ZodFirstPartyTypeKind2) {
      ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind || (exports.ZodFirstPartyTypeKind = ZodFirstPartyTypeKind = {}));
    var instanceOfType = /* @__PURE__ */ __name((cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom((data) => data instanceof cls, params), "instanceOfType");
    exports.instanceof = instanceOfType;
    var stringType = ZodString.create;
    exports.string = stringType;
    var numberType = ZodNumber.create;
    exports.number = numberType;
    var nanType = ZodNaN.create;
    exports.nan = nanType;
    var bigIntType = ZodBigInt.create;
    exports.bigint = bigIntType;
    var booleanType = ZodBoolean.create;
    exports.boolean = booleanType;
    var dateType = ZodDate.create;
    exports.date = dateType;
    var symbolType = ZodSymbol.create;
    exports.symbol = symbolType;
    var undefinedType = ZodUndefined.create;
    exports.undefined = undefinedType;
    var nullType = ZodNull.create;
    exports.null = nullType;
    var anyType = ZodAny.create;
    exports.any = anyType;
    var unknownType = ZodUnknown.create;
    exports.unknown = unknownType;
    var neverType = ZodNever.create;
    exports.never = neverType;
    var voidType = ZodVoid.create;
    exports.void = voidType;
    var arrayType = ZodArray.create;
    exports.array = arrayType;
    var objectType = ZodObject.create;
    exports.object = objectType;
    var strictObjectType = ZodObject.strictCreate;
    exports.strictObject = strictObjectType;
    var unionType = ZodUnion.create;
    exports.union = unionType;
    var discriminatedUnionType = ZodDiscriminatedUnion.create;
    exports.discriminatedUnion = discriminatedUnionType;
    var intersectionType = ZodIntersection.create;
    exports.intersection = intersectionType;
    var tupleType = ZodTuple.create;
    exports.tuple = tupleType;
    var recordType = ZodRecord.create;
    exports.record = recordType;
    var mapType = ZodMap.create;
    exports.map = mapType;
    var setType = ZodSet.create;
    exports.set = setType;
    var functionType = ZodFunction.create;
    exports.function = functionType;
    var lazyType = ZodLazy.create;
    exports.lazy = lazyType;
    var literalType = ZodLiteral.create;
    exports.literal = literalType;
    var enumType = ZodEnum.create;
    exports.enum = enumType;
    var nativeEnumType = ZodNativeEnum.create;
    exports.nativeEnum = nativeEnumType;
    var promiseType = ZodPromise.create;
    exports.promise = promiseType;
    var effectsType = ZodEffects.create;
    exports.effect = effectsType;
    exports.transformer = effectsType;
    var optionalType = ZodOptional.create;
    exports.optional = optionalType;
    var nullableType = ZodNullable.create;
    exports.nullable = nullableType;
    var preprocessType = ZodEffects.createWithPreprocess;
    exports.preprocess = preprocessType;
    var pipelineType = ZodPipeline.create;
    exports.pipeline = pipelineType;
    var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
    exports.ostring = ostring;
    var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
    exports.onumber = onumber;
    var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
    exports.oboolean = oboolean;
    exports.coerce = {
      string: /* @__PURE__ */ __name((arg) => ZodString.create({ ...arg, coerce: true }), "string"),
      number: /* @__PURE__ */ __name((arg) => ZodNumber.create({ ...arg, coerce: true }), "number"),
      boolean: /* @__PURE__ */ __name((arg) => ZodBoolean.create({
        ...arg,
        coerce: true
      }), "boolean"),
      bigint: /* @__PURE__ */ __name((arg) => ZodBigInt.create({ ...arg, coerce: true }), "bigint"),
      date: /* @__PURE__ */ __name((arg) => ZodDate.create({ ...arg, coerce: true }), "date")
    };
    exports.NEVER = parseUtil_js_1.INVALID;
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/external.js
var require_external = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/external.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p in m2) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m2, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_errors(), exports);
    __exportStar(require_parseUtil(), exports);
    __exportStar(require_typeAliases(), exports);
    __exportStar(require_util(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_ZodError(), exports);
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/index.js
var require_v3 = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/v3/index.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m2[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p in m2) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m2, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    var z = __importStar(require_external());
    exports.z = z;
    __exportStar(require_external(), exports);
    exports.default = z;
  }
});

// node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@harsh6512/medium-clone/node_modules/zod/dist/cjs/index.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k];
        }, "get") };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p in m2) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p)) __createBinding(exports2, m2, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    var index_js_1 = __importDefault(require_v3());
    __exportStar(require_v3(), exports);
    exports.default = index_js_1.default;
  }
});

// node_modules/@harsh6512/medium-clone/dist/index.js
var require_dist = __commonJS({
  "node_modules/@harsh6512/medium-clone/dist/index.js"(exports) {
    "use strict";
    init_strip_cf_connecting_ip_header();
    init_modules_watch_stub();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.updateBlogInput = exports.createBlogInput = exports.signinInput = exports.signupInput = void 0;
    var zod_1 = __importDefault(require_cjs());
    exports.signupInput = zod_1.default.object({
      username: zod_1.default.string().email(),
      password: zod_1.default.string().min(6),
      name: zod_1.default.string().optional()
    });
    exports.signinInput = zod_1.default.object({
      username: zod_1.default.string().email(),
      password: zod_1.default.string().min(6)
    });
    exports.createBlogInput = zod_1.default.object({
      title: zod_1.default.string(),
      content: zod_1.default.string()
    });
    exports.updateBlogInput = zod_1.default.object({
      title: zod_1.default.string(),
      content: zod_1.default.string(),
      id: zod_1.default.number()
    });
  }
});

// .wrangler/tmp/bundle-pux5GE/middleware-loader.entry.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// .wrangler/tmp/bundle-pux5GE/middleware-insertion-facade.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// src/index.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/hono.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/hono-base.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/compose.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var compose = /* @__PURE__ */ __name((middleware, onError, onNotFound) => {
  return (context, next) => {
    let index = -1;
    return dispatch(0);
    async function dispatch(i) {
      if (i <= index) {
        throw new Error("next() called multiple times");
      }
      index = i;
      let res;
      let isError = false;
      let handler;
      if (middleware[i]) {
        handler = middleware[i][0][0];
        context.req.routeIndex = i;
      } else {
        handler = i === middleware.length && next || void 0;
      }
      if (handler) {
        try {
          res = await handler(context, () => dispatch(i + 1));
        } catch (err) {
          if (err instanceof Error && onError) {
            context.error = err;
            res = await onError(err, context);
            isError = true;
          } else {
            throw err;
          }
        }
      } else {
        if (context.finalized === false && onNotFound) {
          res = await onNotFound(context);
        }
      }
      if (res && (context.finalized === false || isError)) {
        context.res = res;
      }
      return context;
    }
    __name(dispatch, "dispatch");
  };
}, "compose");

// node_modules/hono/dist/context.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/request.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/utils/body.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var parseBody = /* @__PURE__ */ __name(async (request, options = /* @__PURE__ */ Object.create(null)) => {
  const { all = false, dot = false } = options;
  const headers = request instanceof HonoRequest ? request.raw.headers : request.headers;
  const contentType = headers.get("Content-Type");
  if (contentType?.startsWith("multipart/form-data") || contentType?.startsWith("application/x-www-form-urlencoded")) {
    return parseFormData(request, { all, dot });
  }
  return {};
}, "parseBody");
async function parseFormData(request, options) {
  const formData = await request.formData();
  if (formData) {
    return convertFormDataToBodyData(formData, options);
  }
  return {};
}
__name(parseFormData, "parseFormData");
function convertFormDataToBodyData(formData, options) {
  const form = /* @__PURE__ */ Object.create(null);
  formData.forEach((value, key) => {
    const shouldParseAllValues = options.all || key.endsWith("[]");
    if (!shouldParseAllValues) {
      form[key] = value;
    } else {
      handleParsingAllValues(form, key, value);
    }
  });
  if (options.dot) {
    Object.entries(form).forEach(([key, value]) => {
      const shouldParseDotValues = key.includes(".");
      if (shouldParseDotValues) {
        handleParsingNestedValues(form, key, value);
        delete form[key];
      }
    });
  }
  return form;
}
__name(convertFormDataToBodyData, "convertFormDataToBodyData");
var handleParsingAllValues = /* @__PURE__ */ __name((form, key, value) => {
  if (form[key] !== void 0) {
    if (Array.isArray(form[key])) {
      ;
      form[key].push(value);
    } else {
      form[key] = [form[key], value];
    }
  } else {
    form[key] = value;
  }
}, "handleParsingAllValues");
var handleParsingNestedValues = /* @__PURE__ */ __name((form, key, value) => {
  let nestedForm = form;
  const keys = key.split(".");
  keys.forEach((key2, index) => {
    if (index === keys.length - 1) {
      nestedForm[key2] = value;
    } else {
      if (!nestedForm[key2] || typeof nestedForm[key2] !== "object" || Array.isArray(nestedForm[key2]) || nestedForm[key2] instanceof File) {
        nestedForm[key2] = /* @__PURE__ */ Object.create(null);
      }
      nestedForm = nestedForm[key2];
    }
  });
}, "handleParsingNestedValues");

// node_modules/hono/dist/utils/url.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var splitPath = /* @__PURE__ */ __name((path) => {
  const paths = path.split("/");
  if (paths[0] === "") {
    paths.shift();
  }
  return paths;
}, "splitPath");
var splitRoutingPath = /* @__PURE__ */ __name((routePath) => {
  const { groups, path } = extractGroupsFromPath(routePath);
  const paths = splitPath(path);
  return replaceGroupMarks(paths, groups);
}, "splitRoutingPath");
var extractGroupsFromPath = /* @__PURE__ */ __name((path) => {
  const groups = [];
  path = path.replace(/\{[^}]+\}/g, (match, index) => {
    const mark = `@${index}`;
    groups.push([mark, match]);
    return mark;
  });
  return { groups, path };
}, "extractGroupsFromPath");
var replaceGroupMarks = /* @__PURE__ */ __name((paths, groups) => {
  for (let i = groups.length - 1; i >= 0; i--) {
    const [mark] = groups[i];
    for (let j = paths.length - 1; j >= 0; j--) {
      if (paths[j].includes(mark)) {
        paths[j] = paths[j].replace(mark, groups[i][1]);
        break;
      }
    }
  }
  return paths;
}, "replaceGroupMarks");
var patternCache = {};
var getPattern = /* @__PURE__ */ __name((label, next) => {
  if (label === "*") {
    return "*";
  }
  const match = label.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
  if (match) {
    const cacheKey = `${label}#${next}`;
    if (!patternCache[cacheKey]) {
      if (match[2]) {
        patternCache[cacheKey] = next && next[0] !== ":" && next[0] !== "*" ? [cacheKey, match[1], new RegExp(`^${match[2]}(?=/${next})`)] : [label, match[1], new RegExp(`^${match[2]}$`)];
      } else {
        patternCache[cacheKey] = [label, match[1], true];
      }
    }
    return patternCache[cacheKey];
  }
  return null;
}, "getPattern");
var tryDecode = /* @__PURE__ */ __name((str, decoder) => {
  try {
    return decoder(str);
  } catch {
    return str.replace(/(?:%[0-9A-Fa-f]{2})+/g, (match) => {
      try {
        return decoder(match);
      } catch {
        return match;
      }
    });
  }
}, "tryDecode");
var tryDecodeURI = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURI), "tryDecodeURI");
var getPath = /* @__PURE__ */ __name((request) => {
  const url = request.url;
  const start = url.indexOf("/", 8);
  let i = start;
  for (; i < url.length; i++) {
    const charCode = url.charCodeAt(i);
    if (charCode === 37) {
      const queryIndex = url.indexOf("?", i);
      const path = url.slice(start, queryIndex === -1 ? void 0 : queryIndex);
      return tryDecodeURI(path.includes("%25") ? path.replace(/%25/g, "%2525") : path);
    } else if (charCode === 63) {
      break;
    }
  }
  return url.slice(start, i);
}, "getPath");
var getPathNoStrict = /* @__PURE__ */ __name((request) => {
  const result = getPath(request);
  return result.length > 1 && result.at(-1) === "/" ? result.slice(0, -1) : result;
}, "getPathNoStrict");
var mergePath = /* @__PURE__ */ __name((base, sub, ...rest) => {
  if (rest.length) {
    sub = mergePath(sub, ...rest);
  }
  return `${base?.[0] === "/" ? "" : "/"}${base}${sub === "/" ? "" : `${base?.at(-1) === "/" ? "" : "/"}${sub?.[0] === "/" ? sub.slice(1) : sub}`}`;
}, "mergePath");
var checkOptionalParameter = /* @__PURE__ */ __name((path) => {
  if (path.charCodeAt(path.length - 1) !== 63 || !path.includes(":")) {
    return null;
  }
  const segments = path.split("/");
  const results = [];
  let basePath = "";
  segments.forEach((segment) => {
    if (segment !== "" && !/\:/.test(segment)) {
      basePath += "/" + segment;
    } else if (/\:/.test(segment)) {
      if (/\?/.test(segment)) {
        if (results.length === 0 && basePath === "") {
          results.push("/");
        } else {
          results.push(basePath);
        }
        const optionalSegment = segment.replace("?", "");
        basePath += "/" + optionalSegment;
        results.push(basePath);
      } else {
        basePath += "/" + segment;
      }
    }
  });
  return results.filter((v, i, a) => a.indexOf(v) === i);
}, "checkOptionalParameter");
var _decodeURI = /* @__PURE__ */ __name((value) => {
  if (!/[%+]/.test(value)) {
    return value;
  }
  if (value.indexOf("+") !== -1) {
    value = value.replace(/\+/g, " ");
  }
  return value.indexOf("%") !== -1 ? decodeURIComponent_(value) : value;
}, "_decodeURI");
var _getQueryParam = /* @__PURE__ */ __name((url, key, multiple) => {
  let encoded;
  if (!multiple && key && !/[%+]/.test(key)) {
    let keyIndex2 = url.indexOf(`?${key}`, 8);
    if (keyIndex2 === -1) {
      keyIndex2 = url.indexOf(`&${key}`, 8);
    }
    while (keyIndex2 !== -1) {
      const trailingKeyCode = url.charCodeAt(keyIndex2 + key.length + 1);
      if (trailingKeyCode === 61) {
        const valueIndex = keyIndex2 + key.length + 2;
        const endIndex = url.indexOf("&", valueIndex);
        return _decodeURI(url.slice(valueIndex, endIndex === -1 ? void 0 : endIndex));
      } else if (trailingKeyCode == 38 || isNaN(trailingKeyCode)) {
        return "";
      }
      keyIndex2 = url.indexOf(`&${key}`, keyIndex2 + 1);
    }
    encoded = /[%+]/.test(url);
    if (!encoded) {
      return void 0;
    }
  }
  const results = {};
  encoded ??= /[%+]/.test(url);
  let keyIndex = url.indexOf("?", 8);
  while (keyIndex !== -1) {
    const nextKeyIndex = url.indexOf("&", keyIndex + 1);
    let valueIndex = url.indexOf("=", keyIndex);
    if (valueIndex > nextKeyIndex && nextKeyIndex !== -1) {
      valueIndex = -1;
    }
    let name = url.slice(
      keyIndex + 1,
      valueIndex === -1 ? nextKeyIndex === -1 ? void 0 : nextKeyIndex : valueIndex
    );
    if (encoded) {
      name = _decodeURI(name);
    }
    keyIndex = nextKeyIndex;
    if (name === "") {
      continue;
    }
    let value;
    if (valueIndex === -1) {
      value = "";
    } else {
      value = url.slice(valueIndex + 1, nextKeyIndex === -1 ? void 0 : nextKeyIndex);
      if (encoded) {
        value = _decodeURI(value);
      }
    }
    if (multiple) {
      if (!(results[name] && Array.isArray(results[name]))) {
        results[name] = [];
      }
      ;
      results[name].push(value);
    } else {
      results[name] ??= value;
    }
  }
  return key ? results[key] : results;
}, "_getQueryParam");
var getQueryParam = _getQueryParam;
var getQueryParams = /* @__PURE__ */ __name((url, key) => {
  return _getQueryParam(url, key, true);
}, "getQueryParams");
var decodeURIComponent_ = decodeURIComponent;

// node_modules/hono/dist/request.js
var tryDecodeURIComponent = /* @__PURE__ */ __name((str) => tryDecode(str, decodeURIComponent_), "tryDecodeURIComponent");
var HonoRequest = class {
  static {
    __name(this, "HonoRequest");
  }
  raw;
  #validatedData;
  #matchResult;
  routeIndex = 0;
  path;
  bodyCache = {};
  constructor(request, path = "/", matchResult = [[]]) {
    this.raw = request;
    this.path = path;
    this.#matchResult = matchResult;
    this.#validatedData = {};
  }
  param(key) {
    return key ? this.#getDecodedParam(key) : this.#getAllDecodedParams();
  }
  #getDecodedParam(key) {
    const paramKey = this.#matchResult[0][this.routeIndex][1][key];
    const param = this.#getParamValue(paramKey);
    return param ? /\%/.test(param) ? tryDecodeURIComponent(param) : param : void 0;
  }
  #getAllDecodedParams() {
    const decoded = {};
    const keys = Object.keys(this.#matchResult[0][this.routeIndex][1]);
    for (const key of keys) {
      const value = this.#getParamValue(this.#matchResult[0][this.routeIndex][1][key]);
      if (value && typeof value === "string") {
        decoded[key] = /\%/.test(value) ? tryDecodeURIComponent(value) : value;
      }
    }
    return decoded;
  }
  #getParamValue(paramKey) {
    return this.#matchResult[1] ? this.#matchResult[1][paramKey] : paramKey;
  }
  query(key) {
    return getQueryParam(this.url, key);
  }
  queries(key) {
    return getQueryParams(this.url, key);
  }
  header(name) {
    if (name) {
      return this.raw.headers.get(name) ?? void 0;
    }
    const headerData = {};
    this.raw.headers.forEach((value, key) => {
      headerData[key] = value;
    });
    return headerData;
  }
  async parseBody(options) {
    return this.bodyCache.parsedBody ??= await parseBody(this, options);
  }
  #cachedBody = /* @__PURE__ */ __name((key) => {
    const { bodyCache, raw: raw3 } = this;
    const cachedBody = bodyCache[key];
    if (cachedBody) {
      return cachedBody;
    }
    const anyCachedKey = Object.keys(bodyCache)[0];
    if (anyCachedKey) {
      return bodyCache[anyCachedKey].then((body) => {
        if (anyCachedKey === "json") {
          body = JSON.stringify(body);
        }
        return new Response(body)[key]();
      });
    }
    return bodyCache[key] = raw3[key]();
  }, "#cachedBody");
  json() {
    return this.#cachedBody("json");
  }
  text() {
    return this.#cachedBody("text");
  }
  arrayBuffer() {
    return this.#cachedBody("arrayBuffer");
  }
  blob() {
    return this.#cachedBody("blob");
  }
  formData() {
    return this.#cachedBody("formData");
  }
  addValidatedData(target, data) {
    this.#validatedData[target] = data;
  }
  valid(target) {
    return this.#validatedData[target];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get matchedRoutes() {
    return this.#matchResult[0].map(([[, route]]) => route);
  }
  get routePath() {
    return this.#matchResult[0].map(([[, route]]) => route)[this.routeIndex].path;
  }
};

// node_modules/hono/dist/utils/html.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var HtmlEscapedCallbackPhase = {
  Stringify: 1,
  BeforeStream: 2,
  Stream: 3
};
var raw2 = /* @__PURE__ */ __name((value, callbacks) => {
  const escapedString = new String(value);
  escapedString.isEscaped = true;
  escapedString.callbacks = callbacks;
  return escapedString;
}, "raw");
var resolveCallback = /* @__PURE__ */ __name(async (str, phase, preserveCallbacks, context, buffer) => {
  if (typeof str === "object" && !(str instanceof String)) {
    if (!(str instanceof Promise)) {
      str = str.toString();
    }
    if (str instanceof Promise) {
      str = await str;
    }
  }
  const callbacks = str.callbacks;
  if (!callbacks?.length) {
    return Promise.resolve(str);
  }
  if (buffer) {
    buffer[0] += str;
  } else {
    buffer = [str];
  }
  const resStr = Promise.all(callbacks.map((c) => c({ phase, buffer, context }))).then(
    (res) => Promise.all(
      res.filter(Boolean).map((str2) => resolveCallback(str2, phase, false, context, buffer))
    ).then(() => buffer[0])
  );
  if (preserveCallbacks) {
    return raw2(await resStr, callbacks);
  } else {
    return resStr;
  }
}, "resolveCallback");

// node_modules/hono/dist/context.js
var TEXT_PLAIN = "text/plain; charset=UTF-8";
var setHeaders = /* @__PURE__ */ __name((headers, map = {}) => {
  for (const key of Object.keys(map)) {
    headers.set(key, map[key]);
  }
  return headers;
}, "setHeaders");
var Context = class {
  static {
    __name(this, "Context");
  }
  #rawRequest;
  #req;
  env = {};
  #var;
  finalized = false;
  error;
  #status = 200;
  #executionCtx;
  #headers;
  #preparedHeaders;
  #res;
  #isFresh = true;
  #layout;
  #renderer;
  #notFoundHandler;
  #matchResult;
  #path;
  constructor(req, options) {
    this.#rawRequest = req;
    if (options) {
      this.#executionCtx = options.executionCtx;
      this.env = options.env;
      this.#notFoundHandler = options.notFoundHandler;
      this.#path = options.path;
      this.#matchResult = options.matchResult;
    }
  }
  get req() {
    this.#req ??= new HonoRequest(this.#rawRequest, this.#path, this.#matchResult);
    return this.#req;
  }
  get event() {
    if (this.#executionCtx && "respondWith" in this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no FetchEvent");
    }
  }
  get executionCtx() {
    if (this.#executionCtx) {
      return this.#executionCtx;
    } else {
      throw Error("This context has no ExecutionContext");
    }
  }
  get res() {
    this.#isFresh = false;
    return this.#res ||= new Response("404 Not Found", { status: 404 });
  }
  set res(_res) {
    this.#isFresh = false;
    if (this.#res && _res) {
      _res = new Response(_res.body, _res);
      for (const [k, v] of this.#res.headers.entries()) {
        if (k === "content-type") {
          continue;
        }
        if (k === "set-cookie") {
          const cookies = this.#res.headers.getSetCookie();
          _res.headers.delete("set-cookie");
          for (const cookie of cookies) {
            _res.headers.append("set-cookie", cookie);
          }
        } else {
          _res.headers.set(k, v);
        }
      }
    }
    this.#res = _res;
    this.finalized = true;
  }
  render = /* @__PURE__ */ __name((...args) => {
    this.#renderer ??= (content) => this.html(content);
    return this.#renderer(...args);
  }, "render");
  setLayout = /* @__PURE__ */ __name((layout) => this.#layout = layout, "setLayout");
  getLayout = /* @__PURE__ */ __name(() => this.#layout, "getLayout");
  setRenderer = /* @__PURE__ */ __name((renderer) => {
    this.#renderer = renderer;
  }, "setRenderer");
  header = /* @__PURE__ */ __name((name, value, options) => {
    if (this.finalized) {
      this.#res = new Response(this.#res.body, this.#res);
    }
    if (value === void 0) {
      if (this.#headers) {
        this.#headers.delete(name);
      } else if (this.#preparedHeaders) {
        delete this.#preparedHeaders[name.toLocaleLowerCase()];
      }
      if (this.finalized) {
        this.res.headers.delete(name);
      }
      return;
    }
    if (options?.append) {
      if (!this.#headers) {
        this.#isFresh = false;
        this.#headers = new Headers(this.#preparedHeaders);
        this.#preparedHeaders = {};
      }
      this.#headers.append(name, value);
    } else {
      if (this.#headers) {
        this.#headers.set(name, value);
      } else {
        this.#preparedHeaders ??= {};
        this.#preparedHeaders[name.toLowerCase()] = value;
      }
    }
    if (this.finalized) {
      if (options?.append) {
        this.res.headers.append(name, value);
      } else {
        this.res.headers.set(name, value);
      }
    }
  }, "header");
  status = /* @__PURE__ */ __name((status) => {
    this.#isFresh = false;
    this.#status = status;
  }, "status");
  set = /* @__PURE__ */ __name((key, value) => {
    this.#var ??= /* @__PURE__ */ new Map();
    this.#var.set(key, value);
  }, "set");
  get = /* @__PURE__ */ __name((key) => {
    return this.#var ? this.#var.get(key) : void 0;
  }, "get");
  get var() {
    if (!this.#var) {
      return {};
    }
    return Object.fromEntries(this.#var);
  }
  #newResponse(data, arg, headers) {
    if (this.#isFresh && !headers && !arg && this.#status === 200) {
      return new Response(data, {
        headers: this.#preparedHeaders
      });
    }
    if (arg && typeof arg !== "number") {
      const header = new Headers(arg.headers);
      if (this.#headers) {
        this.#headers.forEach((v, k) => {
          if (k === "set-cookie") {
            header.append(k, v);
          } else {
            header.set(k, v);
          }
        });
      }
      const headers2 = setHeaders(header, this.#preparedHeaders);
      return new Response(data, {
        headers: headers2,
        status: arg.status ?? this.#status
      });
    }
    const status = typeof arg === "number" ? arg : this.#status;
    this.#preparedHeaders ??= {};
    this.#headers ??= new Headers();
    setHeaders(this.#headers, this.#preparedHeaders);
    if (this.#res) {
      this.#res.headers.forEach((v, k) => {
        if (k === "set-cookie") {
          this.#headers?.append(k, v);
        } else {
          this.#headers?.set(k, v);
        }
      });
      setHeaders(this.#headers, this.#preparedHeaders);
    }
    headers ??= {};
    for (const [k, v] of Object.entries(headers)) {
      if (typeof v === "string") {
        this.#headers.set(k, v);
      } else {
        this.#headers.delete(k);
        for (const v2 of v) {
          this.#headers.append(k, v2);
        }
      }
    }
    return new Response(data, {
      status,
      headers: this.#headers
    });
  }
  newResponse = /* @__PURE__ */ __name((...args) => this.#newResponse(...args), "newResponse");
  body = /* @__PURE__ */ __name((data, arg, headers) => {
    return typeof arg === "number" ? this.#newResponse(data, arg, headers) : this.#newResponse(data, arg);
  }, "body");
  text = /* @__PURE__ */ __name((text, arg, headers) => {
    if (!this.#preparedHeaders) {
      if (this.#isFresh && !headers && !arg) {
        return new Response(text);
      }
      this.#preparedHeaders = {};
    }
    this.#preparedHeaders["content-type"] = TEXT_PLAIN;
    if (typeof arg === "number") {
      return this.#newResponse(text, arg, headers);
    }
    return this.#newResponse(text, arg);
  }, "text");
  json = /* @__PURE__ */ __name((object, arg, headers) => {
    const body = JSON.stringify(object);
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "application/json";
    return typeof arg === "number" ? this.#newResponse(body, arg, headers) : this.#newResponse(body, arg);
  }, "json");
  html = /* @__PURE__ */ __name((html, arg, headers) => {
    this.#preparedHeaders ??= {};
    this.#preparedHeaders["content-type"] = "text/html; charset=UTF-8";
    if (typeof html === "object") {
      return resolveCallback(html, HtmlEscapedCallbackPhase.Stringify, false, {}).then((html2) => {
        return typeof arg === "number" ? this.#newResponse(html2, arg, headers) : this.#newResponse(html2, arg);
      });
    }
    return typeof arg === "number" ? this.#newResponse(html, arg, headers) : this.#newResponse(html, arg);
  }, "html");
  redirect = /* @__PURE__ */ __name((location, status) => {
    this.#headers ??= new Headers();
    this.#headers.set("Location", String(location));
    return this.newResponse(null, status ?? 302);
  }, "redirect");
  notFound = /* @__PURE__ */ __name(() => {
    this.#notFoundHandler ??= () => new Response();
    return this.#notFoundHandler(this);
  }, "notFound");
};

// node_modules/hono/dist/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var METHOD_NAME_ALL = "ALL";
var METHOD_NAME_ALL_LOWERCASE = "all";
var METHODS = ["get", "post", "put", "delete", "options", "patch"];
var MESSAGE_MATCHER_IS_ALREADY_BUILT = "Can not add a route since the matcher is already built.";
var UnsupportedPathError = class extends Error {
  static {
    __name(this, "UnsupportedPathError");
  }
};

// node_modules/hono/dist/utils/constants.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var COMPOSED_HANDLER = "__COMPOSED_HANDLER";

// node_modules/hono/dist/hono-base.js
var notFoundHandler = /* @__PURE__ */ __name((c) => {
  return c.text("404 Not Found", 404);
}, "notFoundHandler");
var errorHandler = /* @__PURE__ */ __name((err, c) => {
  if ("getResponse" in err) {
    return err.getResponse();
  }
  console.error(err);
  return c.text("Internal Server Error", 500);
}, "errorHandler");
var Hono = class {
  static {
    __name(this, "Hono");
  }
  get;
  post;
  put;
  delete;
  options;
  patch;
  all;
  on;
  use;
  router;
  getPath;
  _basePath = "/";
  #path = "/";
  routes = [];
  constructor(options = {}) {
    const allMethods = [...METHODS, METHOD_NAME_ALL_LOWERCASE];
    allMethods.forEach((method) => {
      this[method] = (args1, ...args) => {
        if (typeof args1 === "string") {
          this.#path = args1;
        } else {
          this.#addRoute(method, this.#path, args1);
        }
        args.forEach((handler) => {
          this.#addRoute(method, this.#path, handler);
        });
        return this;
      };
    });
    this.on = (method, path, ...handlers) => {
      for (const p of [path].flat()) {
        this.#path = p;
        for (const m2 of [method].flat()) {
          handlers.map((handler) => {
            this.#addRoute(m2.toUpperCase(), this.#path, handler);
          });
        }
      }
      return this;
    };
    this.use = (arg1, ...handlers) => {
      if (typeof arg1 === "string") {
        this.#path = arg1;
      } else {
        this.#path = "*";
        handlers.unshift(arg1);
      }
      handlers.forEach((handler) => {
        this.#addRoute(METHOD_NAME_ALL, this.#path, handler);
      });
      return this;
    };
    const { strict, ...optionsWithoutStrict } = options;
    Object.assign(this, optionsWithoutStrict);
    this.getPath = strict ?? true ? options.getPath ?? getPath : getPathNoStrict;
  }
  #clone() {
    const clone = new Hono({
      router: this.router,
      getPath: this.getPath
    });
    clone.errorHandler = this.errorHandler;
    clone.#notFoundHandler = this.#notFoundHandler;
    clone.routes = this.routes;
    return clone;
  }
  #notFoundHandler = notFoundHandler;
  errorHandler = errorHandler;
  route(path, app2) {
    const subApp = this.basePath(path);
    app2.routes.map((r) => {
      let handler;
      if (app2.errorHandler === errorHandler) {
        handler = r.handler;
      } else {
        handler = /* @__PURE__ */ __name(async (c, next) => (await compose([], app2.errorHandler)(c, () => r.handler(c, next))).res, "handler");
        handler[COMPOSED_HANDLER] = r.handler;
      }
      subApp.#addRoute(r.method, r.path, handler);
    });
    return this;
  }
  basePath(path) {
    const subApp = this.#clone();
    subApp._basePath = mergePath(this._basePath, path);
    return subApp;
  }
  onError = /* @__PURE__ */ __name((handler) => {
    this.errorHandler = handler;
    return this;
  }, "onError");
  notFound = /* @__PURE__ */ __name((handler) => {
    this.#notFoundHandler = handler;
    return this;
  }, "notFound");
  mount(path, applicationHandler, options) {
    let replaceRequest;
    let optionHandler;
    if (options) {
      if (typeof options === "function") {
        optionHandler = options;
      } else {
        optionHandler = options.optionHandler;
        if (options.replaceRequest === false) {
          replaceRequest = /* @__PURE__ */ __name((request) => request, "replaceRequest");
        } else {
          replaceRequest = options.replaceRequest;
        }
      }
    }
    const getOptions = optionHandler ? (c) => {
      const options2 = optionHandler(c);
      return Array.isArray(options2) ? options2 : [options2];
    } : (c) => {
      let executionContext = void 0;
      try {
        executionContext = c.executionCtx;
      } catch {
      }
      return [c.env, executionContext];
    };
    replaceRequest ||= (() => {
      const mergedPath = mergePath(this._basePath, path);
      const pathPrefixLength = mergedPath === "/" ? 0 : mergedPath.length;
      return (request) => {
        const url = new URL(request.url);
        url.pathname = url.pathname.slice(pathPrefixLength) || "/";
        return new Request(url, request);
      };
    })();
    const handler = /* @__PURE__ */ __name(async (c, next) => {
      const res = await applicationHandler(replaceRequest(c.req.raw), ...getOptions(c));
      if (res) {
        return res;
      }
      await next();
    }, "handler");
    this.#addRoute(METHOD_NAME_ALL, mergePath(path, "*"), handler);
    return this;
  }
  #addRoute(method, path, handler) {
    method = method.toUpperCase();
    path = mergePath(this._basePath, path);
    const r = { path, method, handler };
    this.router.add(method, path, [handler, r]);
    this.routes.push(r);
  }
  #handleError(err, c) {
    if (err instanceof Error) {
      return this.errorHandler(err, c);
    }
    throw err;
  }
  #dispatch(request, executionCtx, env, method) {
    if (method === "HEAD") {
      return (async () => new Response(null, await this.#dispatch(request, executionCtx, env, "GET")))();
    }
    const path = this.getPath(request, { env });
    const matchResult = this.router.match(method, path);
    const c = new Context(request, {
      path,
      matchResult,
      env,
      executionCtx,
      notFoundHandler: this.#notFoundHandler
    });
    if (matchResult[0].length === 1) {
      let res;
      try {
        res = matchResult[0][0][0][0](c, async () => {
          c.res = await this.#notFoundHandler(c);
        });
      } catch (err) {
        return this.#handleError(err, c);
      }
      return res instanceof Promise ? res.then(
        (resolved) => resolved || (c.finalized ? c.res : this.#notFoundHandler(c))
      ).catch((err) => this.#handleError(err, c)) : res ?? this.#notFoundHandler(c);
    }
    const composed = compose(matchResult[0], this.errorHandler, this.#notFoundHandler);
    return (async () => {
      try {
        const context = await composed(c);
        if (!context.finalized) {
          throw new Error(
            "Context is not finalized. Did you forget to return a Response object or `await next()`?"
          );
        }
        return context.res;
      } catch (err) {
        return this.#handleError(err, c);
      }
    })();
  }
  fetch = /* @__PURE__ */ __name((request, ...rest) => {
    return this.#dispatch(request, rest[1], rest[0], request.method);
  }, "fetch");
  request = /* @__PURE__ */ __name((input, requestInit, Env, executionCtx) => {
    if (input instanceof Request) {
      return this.fetch(requestInit ? new Request(input, requestInit) : input, Env, executionCtx);
    }
    input = input.toString();
    return this.fetch(
      new Request(
        /^https?:\/\//.test(input) ? input : `http://localhost${mergePath("/", input)}`,
        requestInit
      ),
      Env,
      executionCtx
    );
  }, "request");
  fire = /* @__PURE__ */ __name(() => {
    addEventListener("fetch", (event) => {
      event.respondWith(this.#dispatch(event.request, event, void 0, event.request.method));
    });
  }, "fire");
};

// node_modules/hono/dist/router/reg-exp-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/reg-exp-router/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var LABEL_REG_EXP_STR = "[^/]+";
var ONLY_WILDCARD_REG_EXP_STR = ".*";
var TAIL_WILDCARD_REG_EXP_STR = "(?:|/.*)";
var PATH_ERROR = Symbol();
var regExpMetaChars = new Set(".\\+*[^]$()");
function compareKey(a, b) {
  if (a.length === 1) {
    return b.length === 1 ? a < b ? -1 : 1 : -1;
  }
  if (b.length === 1) {
    return 1;
  }
  if (a === ONLY_WILDCARD_REG_EXP_STR || a === TAIL_WILDCARD_REG_EXP_STR) {
    return 1;
  } else if (b === ONLY_WILDCARD_REG_EXP_STR || b === TAIL_WILDCARD_REG_EXP_STR) {
    return -1;
  }
  if (a === LABEL_REG_EXP_STR) {
    return 1;
  } else if (b === LABEL_REG_EXP_STR) {
    return -1;
  }
  return a.length === b.length ? a < b ? -1 : 1 : b.length - a.length;
}
__name(compareKey, "compareKey");
var Node = class {
  static {
    __name(this, "Node");
  }
  #index;
  #varIndex;
  #children = /* @__PURE__ */ Object.create(null);
  insert(tokens, index, paramMap, context, pathErrorCheckOnly) {
    if (tokens.length === 0) {
      if (this.#index !== void 0) {
        throw PATH_ERROR;
      }
      if (pathErrorCheckOnly) {
        return;
      }
      this.#index = index;
      return;
    }
    const [token, ...restTokens] = tokens;
    const pattern = token === "*" ? restTokens.length === 0 ? ["", "", ONLY_WILDCARD_REG_EXP_STR] : ["", "", LABEL_REG_EXP_STR] : token === "/*" ? ["", "", TAIL_WILDCARD_REG_EXP_STR] : token.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    let node;
    if (pattern) {
      const name = pattern[1];
      let regexpStr = pattern[2] || LABEL_REG_EXP_STR;
      if (name && pattern[2]) {
        regexpStr = regexpStr.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:");
        if (/\((?!\?:)/.test(regexpStr)) {
          throw PATH_ERROR;
        }
      }
      node = this.#children[regexpStr];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[regexpStr] = new Node();
        if (name !== "") {
          node.#varIndex = context.varIndex++;
        }
      }
      if (!pathErrorCheckOnly && name !== "") {
        paramMap.push([name, node.#varIndex]);
      }
    } else {
      node = this.#children[token];
      if (!node) {
        if (Object.keys(this.#children).some(
          (k) => k.length > 1 && k !== ONLY_WILDCARD_REG_EXP_STR && k !== TAIL_WILDCARD_REG_EXP_STR
        )) {
          throw PATH_ERROR;
        }
        if (pathErrorCheckOnly) {
          return;
        }
        node = this.#children[token] = new Node();
      }
    }
    node.insert(restTokens, index, paramMap, context, pathErrorCheckOnly);
  }
  buildRegExpStr() {
    const childKeys = Object.keys(this.#children).sort(compareKey);
    const strList = childKeys.map((k) => {
      const c = this.#children[k];
      return (typeof c.#varIndex === "number" ? `(${k})@${c.#varIndex}` : regExpMetaChars.has(k) ? `\\${k}` : k) + c.buildRegExpStr();
    });
    if (typeof this.#index === "number") {
      strList.unshift(`#${this.#index}`);
    }
    if (strList.length === 0) {
      return "";
    }
    if (strList.length === 1) {
      return strList[0];
    }
    return "(?:" + strList.join("|") + ")";
  }
};

// node_modules/hono/dist/router/reg-exp-router/trie.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var Trie = class {
  static {
    __name(this, "Trie");
  }
  #context = { varIndex: 0 };
  #root = new Node();
  insert(path, index, pathErrorCheckOnly) {
    const paramAssoc = [];
    const groups = [];
    for (let i = 0; ; ) {
      let replaced = false;
      path = path.replace(/\{[^}]+\}/g, (m2) => {
        const mark = `@\\${i}`;
        groups[i] = [mark, m2];
        i++;
        replaced = true;
        return mark;
      });
      if (!replaced) {
        break;
      }
    }
    const tokens = path.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let i = groups.length - 1; i >= 0; i--) {
      const [mark] = groups[i];
      for (let j = tokens.length - 1; j >= 0; j--) {
        if (tokens[j].indexOf(mark) !== -1) {
          tokens[j] = tokens[j].replace(mark, groups[i][1]);
          break;
        }
      }
    }
    this.#root.insert(tokens, index, paramAssoc, this.#context, pathErrorCheckOnly);
    return paramAssoc;
  }
  buildRegExp() {
    let regexp = this.#root.buildRegExpStr();
    if (regexp === "") {
      return [/^$/, [], []];
    }
    let captureIndex = 0;
    const indexReplacementMap = [];
    const paramReplacementMap = [];
    regexp = regexp.replace(/#(\d+)|@(\d+)|\.\*\$/g, (_, handlerIndex, paramIndex) => {
      if (handlerIndex !== void 0) {
        indexReplacementMap[++captureIndex] = Number(handlerIndex);
        return "$()";
      }
      if (paramIndex !== void 0) {
        paramReplacementMap[Number(paramIndex)] = ++captureIndex;
        return "";
      }
      return "";
    });
    return [new RegExp(`^${regexp}`), indexReplacementMap, paramReplacementMap];
  }
};

// node_modules/hono/dist/router/reg-exp-router/router.js
var emptyParam = [];
var nullMatcher = [/^$/, [], /* @__PURE__ */ Object.create(null)];
var wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
function buildWildcardRegExp(path) {
  return wildcardRegExpCache[path] ??= new RegExp(
    path === "*" ? "" : `^${path.replace(
      /\/\*$|([.\\+*[^\]$()])/g,
      (_, metaChar) => metaChar ? `\\${metaChar}` : "(?:|/.*)"
    )}$`
  );
}
__name(buildWildcardRegExp, "buildWildcardRegExp");
function clearWildcardRegExpCache() {
  wildcardRegExpCache = /* @__PURE__ */ Object.create(null);
}
__name(clearWildcardRegExpCache, "clearWildcardRegExpCache");
function buildMatcherFromPreprocessedRoutes(routes) {
  const trie = new Trie();
  const handlerData = [];
  if (routes.length === 0) {
    return nullMatcher;
  }
  const routesWithStaticPathFlag = routes.map(
    (route) => [!/\*|\/:/.test(route[0]), ...route]
  ).sort(
    ([isStaticA, pathA], [isStaticB, pathB]) => isStaticA ? 1 : isStaticB ? -1 : pathA.length - pathB.length
  );
  const staticMap = /* @__PURE__ */ Object.create(null);
  for (let i = 0, j = -1, len = routesWithStaticPathFlag.length; i < len; i++) {
    const [pathErrorCheckOnly, path, handlers] = routesWithStaticPathFlag[i];
    if (pathErrorCheckOnly) {
      staticMap[path] = [handlers.map(([h]) => [h, /* @__PURE__ */ Object.create(null)]), emptyParam];
    } else {
      j++;
    }
    let paramAssoc;
    try {
      paramAssoc = trie.insert(path, j, pathErrorCheckOnly);
    } catch (e) {
      throw e === PATH_ERROR ? new UnsupportedPathError(path) : e;
    }
    if (pathErrorCheckOnly) {
      continue;
    }
    handlerData[j] = handlers.map(([h, paramCount]) => {
      const paramIndexMap = /* @__PURE__ */ Object.create(null);
      paramCount -= 1;
      for (; paramCount >= 0; paramCount--) {
        const [key, value] = paramAssoc[paramCount];
        paramIndexMap[key] = value;
      }
      return [h, paramIndexMap];
    });
  }
  const [regexp, indexReplacementMap, paramReplacementMap] = trie.buildRegExp();
  for (let i = 0, len = handlerData.length; i < len; i++) {
    for (let j = 0, len2 = handlerData[i].length; j < len2; j++) {
      const map = handlerData[i][j]?.[1];
      if (!map) {
        continue;
      }
      const keys = Object.keys(map);
      for (let k = 0, len3 = keys.length; k < len3; k++) {
        map[keys[k]] = paramReplacementMap[map[keys[k]]];
      }
    }
  }
  const handlerMap = [];
  for (const i in indexReplacementMap) {
    handlerMap[i] = handlerData[indexReplacementMap[i]];
  }
  return [regexp, handlerMap, staticMap];
}
__name(buildMatcherFromPreprocessedRoutes, "buildMatcherFromPreprocessedRoutes");
function findMiddleware(middleware, path) {
  if (!middleware) {
    return void 0;
  }
  for (const k of Object.keys(middleware).sort((a, b) => b.length - a.length)) {
    if (buildWildcardRegExp(k).test(path)) {
      return [...middleware[k]];
    }
  }
  return void 0;
}
__name(findMiddleware, "findMiddleware");
var RegExpRouter = class {
  static {
    __name(this, "RegExpRouter");
  }
  name = "RegExpRouter";
  #middleware;
  #routes;
  constructor() {
    this.#middleware = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
    this.#routes = { [METHOD_NAME_ALL]: /* @__PURE__ */ Object.create(null) };
  }
  add(method, path, handler) {
    const middleware = this.#middleware;
    const routes = this.#routes;
    if (!middleware || !routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    if (!middleware[method]) {
      ;
      [middleware, routes].forEach((handlerMap) => {
        handlerMap[method] = /* @__PURE__ */ Object.create(null);
        Object.keys(handlerMap[METHOD_NAME_ALL]).forEach((p) => {
          handlerMap[method][p] = [...handlerMap[METHOD_NAME_ALL][p]];
        });
      });
    }
    if (path === "/*") {
      path = "*";
    }
    const paramCount = (path.match(/\/:/g) || []).length;
    if (/\*$/.test(path)) {
      const re = buildWildcardRegExp(path);
      if (method === METHOD_NAME_ALL) {
        Object.keys(middleware).forEach((m2) => {
          middleware[m2][path] ||= findMiddleware(middleware[m2], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
        });
      } else {
        middleware[method][path] ||= findMiddleware(middleware[method], path) || findMiddleware(middleware[METHOD_NAME_ALL], path) || [];
      }
      Object.keys(middleware).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(middleware[m2]).forEach((p) => {
            re.test(p) && middleware[m2][p].push([handler, paramCount]);
          });
        }
      });
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          Object.keys(routes[m2]).forEach(
            (p) => re.test(p) && routes[m2][p].push([handler, paramCount])
          );
        }
      });
      return;
    }
    const paths = checkOptionalParameter(path) || [path];
    for (let i = 0, len = paths.length; i < len; i++) {
      const path2 = paths[i];
      Object.keys(routes).forEach((m2) => {
        if (method === METHOD_NAME_ALL || method === m2) {
          routes[m2][path2] ||= [
            ...findMiddleware(middleware[m2], path2) || findMiddleware(middleware[METHOD_NAME_ALL], path2) || []
          ];
          routes[m2][path2].push([handler, paramCount - len + i + 1]);
        }
      });
    }
  }
  match(method, path) {
    clearWildcardRegExpCache();
    const matchers = this.#buildAllMatchers();
    this.match = (method2, path2) => {
      const matcher = matchers[method2] || matchers[METHOD_NAME_ALL];
      const staticMatch = matcher[2][path2];
      if (staticMatch) {
        return staticMatch;
      }
      const match = path2.match(matcher[0]);
      if (!match) {
        return [[], emptyParam];
      }
      const index = match.indexOf("", 1);
      return [matcher[1][index], match];
    };
    return this.match(method, path);
  }
  #buildAllMatchers() {
    const matchers = /* @__PURE__ */ Object.create(null);
    Object.keys(this.#routes).concat(Object.keys(this.#middleware)).forEach((method) => {
      matchers[method] ||= this.#buildMatcher(method);
    });
    this.#middleware = this.#routes = void 0;
    return matchers;
  }
  #buildMatcher(method) {
    const routes = [];
    let hasOwnRoute = method === METHOD_NAME_ALL;
    [this.#middleware, this.#routes].forEach((r) => {
      const ownRoute = r[method] ? Object.keys(r[method]).map((path) => [path, r[method][path]]) : [];
      if (ownRoute.length !== 0) {
        hasOwnRoute ||= true;
        routes.push(...ownRoute);
      } else if (method !== METHOD_NAME_ALL) {
        routes.push(
          ...Object.keys(r[METHOD_NAME_ALL]).map((path) => [path, r[METHOD_NAME_ALL][path]])
        );
      }
    });
    if (!hasOwnRoute) {
      return null;
    } else {
      return buildMatcherFromPreprocessedRoutes(routes);
    }
  }
};

// node_modules/hono/dist/router/smart-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/smart-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var SmartRouter = class {
  static {
    __name(this, "SmartRouter");
  }
  name = "SmartRouter";
  #routers = [];
  #routes = [];
  constructor(init) {
    this.#routers = init.routers;
  }
  add(method, path, handler) {
    if (!this.#routes) {
      throw new Error(MESSAGE_MATCHER_IS_ALREADY_BUILT);
    }
    this.#routes.push([method, path, handler]);
  }
  match(method, path) {
    if (!this.#routes) {
      throw new Error("Fatal error");
    }
    const routers = this.#routers;
    const routes = this.#routes;
    const len = routers.length;
    let i = 0;
    let res;
    for (; i < len; i++) {
      const router = routers[i];
      try {
        for (let i2 = 0, len2 = routes.length; i2 < len2; i2++) {
          router.add(...routes[i2]);
        }
        res = router.match(method, path);
      } catch (e) {
        if (e instanceof UnsupportedPathError) {
          continue;
        }
        throw e;
      }
      this.match = router.match.bind(router);
      this.#routers = [router];
      this.#routes = void 0;
      break;
    }
    if (i === len) {
      throw new Error("Fatal error");
    }
    this.name = `SmartRouter + ${this.activeRouter.name}`;
    return res;
  }
  get activeRouter() {
    if (this.#routes || this.#routers.length !== 1) {
      throw new Error("No active router has been determined yet.");
    }
    return this.#routers[0];
  }
};

// node_modules/hono/dist/router/trie-router/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/router.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/router/trie-router/node.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var emptyParams = /* @__PURE__ */ Object.create(null);
var Node2 = class {
  static {
    __name(this, "Node");
  }
  #methods;
  #children;
  #patterns;
  #order = 0;
  #params = emptyParams;
  constructor(method, handler, children) {
    this.#children = children || /* @__PURE__ */ Object.create(null);
    this.#methods = [];
    if (method && handler) {
      const m2 = /* @__PURE__ */ Object.create(null);
      m2[method] = { handler, possibleKeys: [], score: 0 };
      this.#methods = [m2];
    }
    this.#patterns = [];
  }
  insert(method, path, handler) {
    this.#order = ++this.#order;
    let curNode = this;
    const parts = splitRoutingPath(path);
    const possibleKeys = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const p = parts[i];
      const nextP = parts[i + 1];
      const pattern = getPattern(p, nextP);
      const key = Array.isArray(pattern) ? pattern[0] : p;
      if (Object.keys(curNode.#children).includes(key)) {
        curNode = curNode.#children[key];
        const pattern2 = getPattern(p, nextP);
        if (pattern2) {
          possibleKeys.push(pattern2[1]);
        }
        continue;
      }
      curNode.#children[key] = new Node2();
      if (pattern) {
        curNode.#patterns.push(pattern);
        possibleKeys.push(pattern[1]);
      }
      curNode = curNode.#children[key];
    }
    const m2 = /* @__PURE__ */ Object.create(null);
    const handlerSet = {
      handler,
      possibleKeys: possibleKeys.filter((v, i, a) => a.indexOf(v) === i),
      score: this.#order
    };
    m2[method] = handlerSet;
    curNode.#methods.push(m2);
    return curNode;
  }
  #getHandlerSets(node, method, nodeParams, params) {
    const handlerSets = [];
    for (let i = 0, len = node.#methods.length; i < len; i++) {
      const m2 = node.#methods[i];
      const handlerSet = m2[method] || m2[METHOD_NAME_ALL];
      const processedSet = {};
      if (handlerSet !== void 0) {
        handlerSet.params = /* @__PURE__ */ Object.create(null);
        handlerSets.push(handlerSet);
        if (nodeParams !== emptyParams || params && params !== emptyParams) {
          for (let i2 = 0, len2 = handlerSet.possibleKeys.length; i2 < len2; i2++) {
            const key = handlerSet.possibleKeys[i2];
            const processed = processedSet[handlerSet.score];
            handlerSet.params[key] = params?.[key] && !processed ? params[key] : nodeParams[key] ?? params?.[key];
            processedSet[handlerSet.score] = true;
          }
        }
      }
    }
    return handlerSets;
  }
  search(method, path) {
    const handlerSets = [];
    this.#params = emptyParams;
    const curNode = this;
    let curNodes = [curNode];
    const parts = splitPath(path);
    const curNodesQueue = [];
    for (let i = 0, len = parts.length; i < len; i++) {
      const part = parts[i];
      const isLast = i === len - 1;
      const tempNodes = [];
      for (let j = 0, len2 = curNodes.length; j < len2; j++) {
        const node = curNodes[j];
        const nextNode = node.#children[part];
        if (nextNode) {
          nextNode.#params = node.#params;
          if (isLast) {
            if (nextNode.#children["*"]) {
              handlerSets.push(
                ...this.#getHandlerSets(nextNode.#children["*"], method, node.#params)
              );
            }
            handlerSets.push(...this.#getHandlerSets(nextNode, method, node.#params));
          } else {
            tempNodes.push(nextNode);
          }
        }
        for (let k = 0, len3 = node.#patterns.length; k < len3; k++) {
          const pattern = node.#patterns[k];
          const params = node.#params === emptyParams ? {} : { ...node.#params };
          if (pattern === "*") {
            const astNode = node.#children["*"];
            if (astNode) {
              handlerSets.push(...this.#getHandlerSets(astNode, method, node.#params));
              astNode.#params = params;
              tempNodes.push(astNode);
            }
            continue;
          }
          if (part === "") {
            continue;
          }
          const [key, name, matcher] = pattern;
          const child = node.#children[key];
          const restPathString = parts.slice(i).join("/");
          if (matcher instanceof RegExp) {
            const m2 = matcher.exec(restPathString);
            if (m2) {
              params[name] = m2[0];
              handlerSets.push(...this.#getHandlerSets(child, method, node.#params, params));
              if (Object.keys(child.#children).length) {
                child.#params = params;
                const componentCount = m2[0].match(/\//)?.length ?? 0;
                const targetCurNodes = curNodesQueue[componentCount] ||= [];
                targetCurNodes.push(child);
              }
              continue;
            }
          }
          if (matcher === true || matcher.test(part)) {
            params[name] = part;
            if (isLast) {
              handlerSets.push(...this.#getHandlerSets(child, method, params, node.#params));
              if (child.#children["*"]) {
                handlerSets.push(
                  ...this.#getHandlerSets(child.#children["*"], method, params, node.#params)
                );
              }
            } else {
              child.#params = params;
              tempNodes.push(child);
            }
          }
        }
      }
      curNodes = tempNodes.concat(curNodesQueue.shift() ?? []);
    }
    if (handlerSets.length > 1) {
      handlerSets.sort((a, b) => {
        return a.score - b.score;
      });
    }
    return [handlerSets.map(({ handler, params }) => [handler, params])];
  }
};

// node_modules/hono/dist/router/trie-router/router.js
var TrieRouter = class {
  static {
    __name(this, "TrieRouter");
  }
  name = "TrieRouter";
  #node;
  constructor() {
    this.#node = new Node2();
  }
  add(method, path, handler) {
    const results = checkOptionalParameter(path);
    if (results) {
      for (let i = 0, len = results.length; i < len; i++) {
        this.#node.insert(method, results[i], handler);
      }
      return;
    }
    this.#node.insert(method, path, handler);
  }
  match(method, path) {
    return this.#node.search(method, path);
  }
};

// node_modules/hono/dist/hono.js
var Hono2 = class extends Hono {
  static {
    __name(this, "Hono");
  }
  constructor(options = {}) {
    super(options);
    this.router = options.router ?? new SmartRouter({
      routers: [new RegExpRouter(), new TrieRouter()]
    });
  }
};

// src/routes/user.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var import_edge = __toESM(require_edge3());

// node_modules/@prisma/extension-accelerate/dist/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var import_default_index = __toESM(require_default_index(), 1);
var import_default_index2 = __toESM(require_default_index(), 1);
function y(s, n) {
  let [c = 0, l = 0, u = 0] = s.split(".").map(Number), [o = 0, h = 0, i = 0] = n.split(".").map(Number), r = o - c, e = h - l, t = i - u;
  return r || e || t;
}
__name(y, "y");
function P() {
  let s = import_default_index2.default.Prisma.prismaVersion;
  return [I(), `PrismaEngine/${s.engine}`, `PrismaClient/${s.client}`].join(" ");
}
__name(P, "P");
function I() {
  return typeof navigator < "u" ? "Cloudflare-Workers" : typeof process < "u" && typeof process.versions < "u" ? `Node/${process.versions.node} (${process.platform}; ${process.arch})` : "EdgeRuntime" in globalThis ? "Vercel-Edge-Runtime" : "UnknownRuntime";
}
__name(I, "I");
var A = "@prisma/extension-accelerate";
var x = "Unable to connect to the Accelerate API. This may be due to a network or DNS issue. Please check your connection and the Accelerate connection string. For details, visit https://www.prisma.io/docs/accelerate/troubleshoot.";
function E(s) {
  let n = P(), c;
  return async (l) => {
    let { args: u } = l, { cacheStrategy: o, __accelerateInfo: h = false, ...i } = u, r = null, { __internalParams: e, query: t } = l;
    return e.customDataProxyFetch = () => async (a, d) => {
      let f = new Array();
      typeof o?.ttl == "number" && f.push(`max-age=${o.ttl}`), typeof o?.swr == "number" && f.push(`stale-while-revalidate=${o.swr}`);
      let p = o?.tags?.join(",") ?? "";
      d.headers = { ...d.headers, "cache-control": f.length > 0 ? f.join(",") : "no-cache", "user-agent": n, ...p.length > 0 ? { "accelerate-cache-tags": p } : {} }, c && (d.headers["accelerate-query-engine-jwt"] = c);
      try {
        let g = await s(a, d);
        return r = { cacheStatus: g.headers.get("accelerate-cache-status"), lastModified: new Date(g.headers.get("last-modified") ?? ""), region: g.headers.get("cf-ray")?.split("-")[1] ?? "unspecified", requestId: g.headers.get("cf-ray") ?? "unspecified", signature: g.headers.get("accelerate-signature") ?? "unspecified" }, c = g.headers.get("accelerate-query-engine-jwt") ?? void 0, g;
      } catch {
        throw new Error(x);
      }
    }, h ? { data: await t(i, e), info: r } : t(i, e);
  };
}
__name(E, "E");
function T(s) {
  let n = y("5.1.0", import_default_index.default.Prisma.prismaVersion.client) >= 0;
  return import_default_index.default.Prisma.defineExtension((c) => {
    let { apiKeyPromise: l, baseURL: u } = $(c), o = E(s);
    async function h(r) {
      let e = await l;
      if (!e) return { requestId: "unspecified" };
      let t;
      try {
        t = await s(new URL("/invalidate", u).href, { method: "POST", headers: { authorization: `Bearer ${e}`, "content-type": "application/json" }, body: JSON.stringify(r) });
      } catch {
        throw new Error(x);
      }
      if (!t?.ok) {
        let a = await t.text();
        throw new Error(`Failed to invalidate Accelerate cache. Response was ${t.status} ${t.statusText}. ${a}`);
      }
      return t.body?.cancel(), { requestId: t.headers.get("cf-ray") ?? "unspecified" };
    }
    __name(h, "h");
    let i = c.$extends({ name: A, query: { $allModels: { $allOperations: o } } });
    return i.$extends({ name: A, client: { $accelerate: { invalidate: /* @__PURE__ */ __name((r) => h(r), "invalidate"), invalidateAll: /* @__PURE__ */ __name(() => h({ tags: "all" }), "invalidateAll") } }, model: { $allModels: { aggregate(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.aggregate(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.aggregate({ ...r, __accelerateInfo: true });
      } });
    }, count(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.count(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.count({ ...r, __accelerateInfo: true });
      } });
    }, findFirst(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.findFirst(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.findFirst({ ...r, __accelerateInfo: true });
      } });
    }, findFirstOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.findFirstOrThrow(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.findFirstOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, findMany(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.findMany(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.findMany({ ...r, __accelerateInfo: true });
      } });
    }, findUnique(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.findUnique(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.findUnique({ ...r, __accelerateInfo: true });
      } });
    }, findUniqueOrThrow(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.findUniqueOrThrow(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.findUniqueOrThrow({ ...r, __accelerateInfo: true });
      } });
    }, groupBy(r) {
      let e = import_default_index.default.Prisma.getExtensionContext(this), t = n ? e.$parent[e.$name] : i[e.name], a = t.groupBy(r);
      return Object.assign(a, { withAccelerateInfo() {
        return t.groupBy({ ...r, __accelerateInfo: true });
      } });
    } } } });
  });
}
__name(T, "T");
function $(s) {
  let n = Reflect.get(s, "_accelerateEngineConfig");
  try {
    let { host: c, hostname: l, protocol: u, searchParams: o } = new URL(n?.accelerateUtils?.resolveDatasourceUrl?.(n));
    if (u === "prisma+postgres:" && (l === "localhost" || l === "127.0.0.1")) return { apiKeyPromise: Promise.resolve(o.get("api_key")), baseURL: new URL(`http://${c}`) };
  } catch {
  }
  return { apiKeyPromise: s._engine.start().then(() => s._engine.apiKey?.() ?? null), baseURL: new URL("https://accelerate.prisma-data.net") };
}
__name($, "$");
function F(s) {
  let n = s?.fetch ?? fetch;
  return T(n);
}
__name(F, "F");

// node_modules/hono/dist/middleware/jwt/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/middleware/jwt/jwt.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/helper/cookie/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/utils/cookie.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/http-exception.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/utils/jwt/jwt.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/utils/encode.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var decodeBase64Url = /* @__PURE__ */ __name((str) => {
  return decodeBase64(str.replace(/_|-/g, (m2) => ({ _: "/", "-": "+" })[m2] ?? m2));
}, "decodeBase64Url");
var encodeBase64Url = /* @__PURE__ */ __name((buf) => encodeBase64(buf).replace(/\/|\+/g, (m2) => ({ "/": "_", "+": "-" })[m2] ?? m2), "encodeBase64Url");
var encodeBase64 = /* @__PURE__ */ __name((buf) => {
  let binary = "";
  const bytes = new Uint8Array(buf);
  for (let i = 0, len = bytes.length; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}, "encodeBase64");
var decodeBase64 = /* @__PURE__ */ __name((str) => {
  const binary = atob(str);
  const bytes = new Uint8Array(new ArrayBuffer(binary.length));
  const half = binary.length / 2;
  for (let i = 0, j = binary.length - 1; i <= half; i++, j--) {
    bytes[i] = binary.charCodeAt(i);
    bytes[j] = binary.charCodeAt(j);
  }
  return bytes;
}, "decodeBase64");

// node_modules/hono/dist/utils/jwt/jwa.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var AlgorithmTypes = /* @__PURE__ */ ((AlgorithmTypes2) => {
  AlgorithmTypes2["HS256"] = "HS256";
  AlgorithmTypes2["HS384"] = "HS384";
  AlgorithmTypes2["HS512"] = "HS512";
  AlgorithmTypes2["RS256"] = "RS256";
  AlgorithmTypes2["RS384"] = "RS384";
  AlgorithmTypes2["RS512"] = "RS512";
  AlgorithmTypes2["PS256"] = "PS256";
  AlgorithmTypes2["PS384"] = "PS384";
  AlgorithmTypes2["PS512"] = "PS512";
  AlgorithmTypes2["ES256"] = "ES256";
  AlgorithmTypes2["ES384"] = "ES384";
  AlgorithmTypes2["ES512"] = "ES512";
  AlgorithmTypes2["EdDSA"] = "EdDSA";
  return AlgorithmTypes2;
})(AlgorithmTypes || {});

// node_modules/hono/dist/utils/jwt/jws.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();

// node_modules/hono/dist/helper/adapter/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var knownUserAgents = {
  deno: "Deno",
  bun: "Bun",
  workerd: "Cloudflare-Workers",
  node: "Node.js"
};
var getRuntimeKey = /* @__PURE__ */ __name(() => {
  const global = globalThis;
  const userAgentSupported = typeof navigator !== "undefined" && true;
  if (userAgentSupported) {
    for (const [runtimeKey, userAgent] of Object.entries(knownUserAgents)) {
      if (checkUserAgentEquals(userAgent)) {
        return runtimeKey;
      }
    }
  }
  if (typeof global?.EdgeRuntime === "string") {
    return "edge-light";
  }
  if (global?.fastly !== void 0) {
    return "fastly";
  }
  if (global?.process?.release?.name === "node") {
    return "node";
  }
  return "other";
}, "getRuntimeKey");
var checkUserAgentEquals = /* @__PURE__ */ __name((platform) => {
  const userAgent = "Cloudflare-Workers";
  return userAgent.startsWith(platform);
}, "checkUserAgentEquals");

// node_modules/hono/dist/utils/jwt/types.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var JwtAlgorithmNotImplemented = class extends Error {
  static {
    __name(this, "JwtAlgorithmNotImplemented");
  }
  constructor(alg) {
    super(`${alg} is not an implemented algorithm`);
    this.name = "JwtAlgorithmNotImplemented";
  }
};
var JwtTokenInvalid = class extends Error {
  static {
    __name(this, "JwtTokenInvalid");
  }
  constructor(token) {
    super(`invalid JWT token: ${token}`);
    this.name = "JwtTokenInvalid";
  }
};
var JwtTokenNotBefore = class extends Error {
  static {
    __name(this, "JwtTokenNotBefore");
  }
  constructor(token) {
    super(`token (${token}) is being used before it's valid`);
    this.name = "JwtTokenNotBefore";
  }
};
var JwtTokenExpired = class extends Error {
  static {
    __name(this, "JwtTokenExpired");
  }
  constructor(token) {
    super(`token (${token}) expired`);
    this.name = "JwtTokenExpired";
  }
};
var JwtTokenIssuedAt = class extends Error {
  static {
    __name(this, "JwtTokenIssuedAt");
  }
  constructor(currentTimestamp, iat) {
    super(`Incorrect "iat" claim must be a older than "${currentTimestamp}" (iat: "${iat}")`);
    this.name = "JwtTokenIssuedAt";
  }
};
var JwtHeaderInvalid = class extends Error {
  static {
    __name(this, "JwtHeaderInvalid");
  }
  constructor(header) {
    super(`jwt header is invalid: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderInvalid";
  }
};
var JwtHeaderRequiresKid = class extends Error {
  static {
    __name(this, "JwtHeaderRequiresKid");
  }
  constructor(header) {
    super(`required "kid" in jwt header: ${JSON.stringify(header)}`);
    this.name = "JwtHeaderRequiresKid";
  }
};
var JwtTokenSignatureMismatched = class extends Error {
  static {
    __name(this, "JwtTokenSignatureMismatched");
  }
  constructor(token) {
    super(`token(${token}) signature mismatched`);
    this.name = "JwtTokenSignatureMismatched";
  }
};
var CryptoKeyUsage = /* @__PURE__ */ ((CryptoKeyUsage2) => {
  CryptoKeyUsage2["Encrypt"] = "encrypt";
  CryptoKeyUsage2["Decrypt"] = "decrypt";
  CryptoKeyUsage2["Sign"] = "sign";
  CryptoKeyUsage2["Verify"] = "verify";
  CryptoKeyUsage2["DeriveKey"] = "deriveKey";
  CryptoKeyUsage2["DeriveBits"] = "deriveBits";
  CryptoKeyUsage2["WrapKey"] = "wrapKey";
  CryptoKeyUsage2["UnwrapKey"] = "unwrapKey";
  return CryptoKeyUsage2;
})(CryptoKeyUsage || {});

// node_modules/hono/dist/utils/jwt/utf8.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var utf8Encoder = new TextEncoder();
var utf8Decoder = new TextDecoder();

// node_modules/hono/dist/utils/jwt/jws.js
async function signing(privateKey, alg, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPrivateKey(privateKey, algorithm);
  return await crypto.subtle.sign(algorithm, cryptoKey, data);
}
__name(signing, "signing");
async function verifying(publicKey, alg, signature, data) {
  const algorithm = getKeyAlgorithm(alg);
  const cryptoKey = await importPublicKey(publicKey, algorithm);
  return await crypto.subtle.verify(algorithm, cryptoKey, signature, data);
}
__name(verifying, "verifying");
function pemToBinary(pem) {
  return decodeBase64(pem.replace(/-+(BEGIN|END).*/g, "").replace(/\s/g, ""));
}
__name(pemToBinary, "pemToBinary");
async function importPrivateKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type !== "private" && key.type !== "secret") {
      throw new Error(
        `unexpected key type: CryptoKey.type is ${key.type}, expected private or secret`
      );
    }
    return key;
  }
  const usages = [CryptoKeyUsage.Sign];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PRIVATE")) {
    return await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPrivateKey, "importPrivateKey");
async function importPublicKey(key, alg) {
  if (!crypto.subtle || !crypto.subtle.importKey) {
    throw new Error("`crypto.subtle.importKey` is undefined. JWT auth middleware requires it.");
  }
  if (isCryptoKey(key)) {
    if (key.type === "public" || key.type === "secret") {
      return key;
    }
    key = await exportPublicJwkFrom(key);
  }
  if (typeof key === "string" && key.includes("PRIVATE")) {
    const privateKey = await crypto.subtle.importKey("pkcs8", pemToBinary(key), alg, true, [
      CryptoKeyUsage.Sign
    ]);
    key = await exportPublicJwkFrom(privateKey);
  }
  const usages = [CryptoKeyUsage.Verify];
  if (typeof key === "object") {
    return await crypto.subtle.importKey("jwk", key, alg, false, usages);
  }
  if (key.includes("PUBLIC")) {
    return await crypto.subtle.importKey("spki", pemToBinary(key), alg, false, usages);
  }
  return await crypto.subtle.importKey("raw", utf8Encoder.encode(key), alg, false, usages);
}
__name(importPublicKey, "importPublicKey");
async function exportPublicJwkFrom(privateKey) {
  if (privateKey.type !== "private") {
    throw new Error(`unexpected key type: ${privateKey.type}`);
  }
  if (!privateKey.extractable) {
    throw new Error("unexpected private key is unextractable");
  }
  const jwk = await crypto.subtle.exportKey("jwk", privateKey);
  const { kty } = jwk;
  const { alg, e, n } = jwk;
  const { crv, x: x2, y: y2 } = jwk;
  return { kty, alg, e, n, crv, x: x2, y: y2, key_ops: [CryptoKeyUsage.Verify] };
}
__name(exportPublicJwkFrom, "exportPublicJwkFrom");
function getKeyAlgorithm(name) {
  switch (name) {
    case "HS256":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-256"
        }
      };
    case "HS384":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-384"
        }
      };
    case "HS512":
      return {
        name: "HMAC",
        hash: {
          name: "SHA-512"
        }
      };
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-256"
        }
      };
    case "RS384":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-384"
        }
      };
    case "RS512":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: {
          name: "SHA-512"
        }
      };
    case "PS256":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-256"
        },
        saltLength: 32
      };
    case "PS384":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-384"
        },
        saltLength: 48
      };
    case "PS512":
      return {
        name: "RSA-PSS",
        hash: {
          name: "SHA-512"
        },
        saltLength: 64
      };
    case "ES256":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-256"
        },
        namedCurve: "P-256"
      };
    case "ES384":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-384"
        },
        namedCurve: "P-384"
      };
    case "ES512":
      return {
        name: "ECDSA",
        hash: {
          name: "SHA-512"
        },
        namedCurve: "P-521"
      };
    case "EdDSA":
      return {
        name: "Ed25519",
        namedCurve: "Ed25519"
      };
    default:
      throw new JwtAlgorithmNotImplemented(name);
  }
}
__name(getKeyAlgorithm, "getKeyAlgorithm");
function isCryptoKey(key) {
  const runtime = getRuntimeKey();
  if (runtime === "node" && !!crypto.webcrypto) {
    return key instanceof crypto.webcrypto.CryptoKey;
  }
  return key instanceof CryptoKey;
}
__name(isCryptoKey, "isCryptoKey");

// node_modules/hono/dist/utils/jwt/jwt.js
var encodeJwtPart = /* @__PURE__ */ __name((part) => encodeBase64Url(utf8Encoder.encode(JSON.stringify(part)).buffer).replace(/=/g, ""), "encodeJwtPart");
var encodeSignaturePart = /* @__PURE__ */ __name((buf) => encodeBase64Url(buf).replace(/=/g, ""), "encodeSignaturePart");
var decodeJwtPart = /* @__PURE__ */ __name((part) => JSON.parse(utf8Decoder.decode(decodeBase64Url(part))), "decodeJwtPart");
function isTokenHeader(obj) {
  if (typeof obj === "object" && obj !== null) {
    const objWithAlg = obj;
    return "alg" in objWithAlg && Object.values(AlgorithmTypes).includes(objWithAlg.alg) && (!("typ" in objWithAlg) || objWithAlg.typ === "JWT");
  }
  return false;
}
__name(isTokenHeader, "isTokenHeader");
var sign = /* @__PURE__ */ __name(async (payload, privateKey, alg = "HS256") => {
  const encodedPayload = encodeJwtPart(payload);
  let encodedHeader;
  if (typeof privateKey === "object" && "alg" in privateKey) {
    alg = privateKey.alg;
    encodedHeader = encodeJwtPart({ alg, typ: "JWT", kid: privateKey.kid });
  } else {
    encodedHeader = encodeJwtPart({ alg, typ: "JWT" });
  }
  const partialToken = `${encodedHeader}.${encodedPayload}`;
  const signaturePart = await signing(privateKey, alg, utf8Encoder.encode(partialToken));
  const signature = encodeSignaturePart(signaturePart);
  return `${partialToken}.${signature}`;
}, "sign");
var verify = /* @__PURE__ */ __name(async (token, publicKey, alg = "HS256") => {
  const tokenParts = token.split(".");
  if (tokenParts.length !== 3) {
    throw new JwtTokenInvalid(token);
  }
  const { header, payload } = decode(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  const now = Date.now() / 1e3 | 0;
  if (payload.nbf && payload.nbf > now) {
    throw new JwtTokenNotBefore(token);
  }
  if (payload.exp && payload.exp <= now) {
    throw new JwtTokenExpired(token);
  }
  if (payload.iat && now < payload.iat) {
    throw new JwtTokenIssuedAt(now, payload.iat);
  }
  const headerPayload = token.substring(0, token.lastIndexOf("."));
  const verified = await verifying(
    publicKey,
    alg,
    decodeBase64Url(tokenParts[2]),
    utf8Encoder.encode(headerPayload)
  );
  if (!verified) {
    throw new JwtTokenSignatureMismatched(token);
  }
  return payload;
}, "verify");
var verifyFromJwks = /* @__PURE__ */ __name(async (token, options, init) => {
  const header = decodeHeader(token);
  if (!isTokenHeader(header)) {
    throw new JwtHeaderInvalid(header);
  }
  if (!header.kid) {
    throw new JwtHeaderRequiresKid(header);
  }
  let keys = typeof options.keys === "function" ? await options.keys() : options.keys;
  if (options.jwks_uri) {
    const response = await fetch(options.jwks_uri, init);
    if (!response.ok) {
      throw new Error(`failed to fetch JWKS from ${options.jwks_uri}`);
    }
    const data = await response.json();
    if (!data.keys) {
      throw new Error('invalid JWKS response. "keys" field is missing');
    }
    if (!Array.isArray(data.keys)) {
      throw new Error('invalid JWKS response. "keys" field is not an array');
    }
    if (keys) {
      keys.push(...data.keys);
    } else {
      keys = data.keys;
    }
  } else if (!keys) {
    throw new Error('verifyFromJwks requires options for either "keys" or "jwks_uri" or both');
  }
  const matchingKey = keys.find((key) => key.kid === header.kid);
  if (!matchingKey) {
    throw new JwtTokenInvalid(token);
  }
  return await verify(token, matchingKey, matchingKey.alg || header.alg);
}, "verifyFromJwks");
var decode = /* @__PURE__ */ __name((token) => {
  try {
    const [h, p] = token.split(".");
    const header = decodeJwtPart(h);
    const payload = decodeJwtPart(p);
    return {
      header,
      payload
    };
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decode");
var decodeHeader = /* @__PURE__ */ __name((token) => {
  try {
    const [h] = token.split(".");
    return decodeJwtPart(h);
  } catch {
    throw new JwtTokenInvalid(token);
  }
}, "decodeHeader");

// node_modules/hono/dist/utils/jwt/index.js
var Jwt = { sign, verify, decode, verifyFromJwks };

// node_modules/hono/dist/middleware/jwt/jwt.js
var verify2 = Jwt.verify;
var decode2 = Jwt.decode;
var sign2 = Jwt.sign;

// src/routes/user.ts
var import_medium_clone = __toESM(require_dist());
var userRouter = new Hono2();
userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const result = import_medium_clone.signupInput.safeParse(body);
  if (!result.success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    });
  }
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(F());
  try {
    const user = await prisma.user.create({
      data: {
        username: body.username,
        password: body.password,
        name: body.name
      }
    });
    const jwt2 = await sign2(
      {
        id: user.id
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt2);
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.text("Invalid");
  }
});
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = import_medium_clone.signinInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    });
  }
  const prisma = new import_edge.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(F());
  try {
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password
      }
    });
    if (!user) {
      c.status(403);
      return c.json({
        message: "Incorrect creds"
      });
    }
    const jwt2 = await sign2(
      {
        id: user.id
      },
      c.env.JWT_SECRET
    );
    return c.text(jwt2);
  } catch (e) {
    console.log(e);
    c.status(411);
    return c.text("Invalid");
  }
});

// src/routes/blog.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var import_medium_clone2 = __toESM(require_dist());
var import_edge2 = __toESM(require_edge3());
var blogRouter = new Hono2();
blogRouter.use("/*", async (c, next) => {
  const jwt2 = c.req.header("Authorization");
  if (!jwt2) {
    c.status(401);
    return c.json({ error: "unauthorized" });
  }
  const token = jwt2;
  const payload = await verify2(token, c.env.JWT_SECRET);
  if (!payload) {
    c.status(401);
    return c.json({ error: "unathorised" });
  }
  c.set("userId", String(payload.id));
  await next();
});
blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  const { success } = import_medium_clone2.createBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    });
  }
  const authorId = c.get("userId");
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(F());
  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: Number(authorId)
    }
  });
  return c.json({
    id: blog.id
  });
});
blogRouter.put("/update", async (c) => {
  const body = await c.req.json();
  const { success } = import_medium_clone2.updateBlogInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs not correct"
    });
  }
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(F());
  const blog = await prisma.blog.update({
    where: {
      id: body.id
    },
    data: {
      title: body.title,
      content: body.content
    }
  });
  return c.json({
    id: blog.id
  });
});
blogRouter.get("/bulk", async (c) => {
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(F());
  const blogs = await prisma.blog.findMany({
    select: {
      content: true,
      title: true,
      id: true,
      author: {
        select: {
          name: true
        }
      }
    }
  });
  return c.json({
    blogs
  });
});
blogRouter.get("/get/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new import_edge2.PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(F());
  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id)
      },
      select: {
        id: true,
        title: true,
        content: true,
        author: {
          select: {
            name: true
          }
        }
      }
    });
    return c.json({
      blog
    });
  } catch (e) {
    c.status(411);
    return c.json({
      message: "Error while fetching blog post"
    });
  }
});

// node_modules/hono/dist/middleware/cors/index.js
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var cors = /* @__PURE__ */ __name((options) => {
  const defaults = {
    origin: "*",
    allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
    allowHeaders: [],
    exposeHeaders: []
  };
  const opts = {
    ...defaults,
    ...options
  };
  const findAllowOrigin = ((optsOrigin) => {
    if (typeof optsOrigin === "string") {
      if (optsOrigin === "*") {
        return () => optsOrigin;
      } else {
        return (origin) => optsOrigin === origin ? origin : null;
      }
    } else if (typeof optsOrigin === "function") {
      return optsOrigin;
    } else {
      return (origin) => optsOrigin.includes(origin) ? origin : null;
    }
  })(opts.origin);
  return /* @__PURE__ */ __name(async function cors2(c, next) {
    function set(key, value) {
      c.res.headers.set(key, value);
    }
    __name(set, "set");
    const allowOrigin = findAllowOrigin(c.req.header("origin") || "", c);
    if (allowOrigin) {
      set("Access-Control-Allow-Origin", allowOrigin);
    }
    if (opts.origin !== "*") {
      const existingVary = c.req.header("Vary");
      if (existingVary) {
        set("Vary", existingVary);
      } else {
        set("Vary", "Origin");
      }
    }
    if (opts.credentials) {
      set("Access-Control-Allow-Credentials", "true");
    }
    if (opts.exposeHeaders?.length) {
      set("Access-Control-Expose-Headers", opts.exposeHeaders.join(","));
    }
    if (c.req.method === "OPTIONS") {
      if (opts.maxAge != null) {
        set("Access-Control-Max-Age", opts.maxAge.toString());
      }
      if (opts.allowMethods?.length) {
        set("Access-Control-Allow-Methods", opts.allowMethods.join(","));
      }
      let headers = opts.allowHeaders;
      if (!headers?.length) {
        const requestHeaders = c.req.header("Access-Control-Request-Headers");
        if (requestHeaders) {
          headers = requestHeaders.split(/\s*,\s*/);
        }
      }
      if (headers?.length) {
        set("Access-Control-Allow-Headers", headers.join(","));
        c.res.headers.append("Vary", "Access-Control-Request-Headers");
      }
      c.res.headers.delete("Content-Length");
      c.res.headers.delete("Content-Type");
      return new Response(null, {
        headers: c.res.headers,
        status: 204,
        statusText: "No Content"
      });
    }
    await next();
  }, "cors2");
}, "cors");

// src/index.ts
var app = new Hono2();
app.use("/*", cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);
app.get("/", (c) => {
  return c.text("Hello from Hono!");
});
var src_default = app;

// node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-pux5GE/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// node_modules/wrangler/templates/middleware/common.ts
init_strip_cf_connecting_ip_header();
init_modules_watch_stub();
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-pux5GE/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
