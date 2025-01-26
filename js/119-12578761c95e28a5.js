(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [119],
    {
        6691: function (e, t) {
            "use strict";
            var r, o, n, l;
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    ACTION_FAST_REFRESH: function () {
                        return u;
                    },
                    ACTION_NAVIGATE: function () {
                        return a;
                    },
                    ACTION_PREFETCH: function () {
                        return d;
                    },
                    ACTION_REFRESH: function () {
                        return i;
                    },
                    ACTION_RESTORE: function () {
                        return s;
                    },
                    ACTION_SERVER_ACTION: function () {
                        return f;
                    },
                    ACTION_SERVER_PATCH: function () {
                        return c;
                    },
                    PrefetchCacheEntryStatus: function () {
                        return o;
                    },
                    PrefetchKind: function () {
                        return r;
                    },
                    isThenable: function () {
                        return p;
                    },
                });
            let i = "refresh",
                a = "navigate",
                s = "restore",
                c = "server-patch",
                d = "prefetch",
                u = "fast-refresh",
                f = "server-action";
            function p(e) {
                return e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then;
            }
            ((n = r || (r = {})).AUTO = "auto"),
                (n.FULL = "full"),
                (n.TEMPORARY = "temporary"),
                ((l = o || (o = {})).fresh = "fresh"),
                (l.reusable = "reusable"),
                (l.expired = "expired"),
                (l.stale = "stale"),
                ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        4318: function (e, t, r) {
            "use strict";
            function o(e, t, r, o) {
                return !1;
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getDomainLocale", {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }),
                r(8364),
                ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                    void 0 === t.default.__esModule &&
                    (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        9577: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return x;
                    },
                });
            let o = r(8754),
                n = r(5893),
                l = o._(r(7294)),
                i = r(1401),
                a = r(2045),
                s = r(7420),
                c = r(7201),
                d = r(1443),
                u = r(9953),
                f = r(5320),
                p = r(2905),
                b = r(4318),
                g = r(953),
                m = r(6691),
                h = new Set();
            function y(e, t, r, o, n, l) {
                if (l || (0, a.isLocalURL)(t)) {
                    if (!o.bypassPrefetchedCheck) {
                        let n = t + "%" + r + "%" + (void 0 !== o.locale ? o.locale : "locale" in e ? e.locale : void 0);
                        if (h.has(n)) return;
                        h.add(n);
                    }
                    (async () => (l ? e.prefetch(t, n) : e.prefetch(t, r, o)))().catch((e) => {});
                }
            }
            function v(e) {
                return "string" == typeof e ? e : (0, s.formatUrl)(e);
            }
            let x = l.default.forwardRef(function (e, t) {
                let r, o;
                let { href: s, as: h, children: x, prefetch: w = null, passHref: k, replace: j, shallow: C, scroll: z, locale: _, onClick: O, onMouseEnter: P, onTouchStart: E, legacyBehavior: M = !1, ...T } = e;
                (r = x), M && ("string" == typeof r || "number" == typeof r) && (r = (0, n.jsx)("a", { children: r }));
                let R = l.default.useContext(u.RouterContext),
                    S = l.default.useContext(f.AppRouterContext),
                    I = null != R ? R : S,
                    A = !R,
                    N = !1 !== w,
                    L = null === w ? m.PrefetchKind.AUTO : m.PrefetchKind.FULL,
                    { href: G, as: U } = l.default.useMemo(() => {
                        if (!R) {
                            let e = v(s);
                            return { href: e, as: h ? v(h) : e };
                        }
                        let [e, t] = (0, i.resolveHref)(R, s, !0);
                        return { href: e, as: h ? (0, i.resolveHref)(R, h) : t || e };
                    }, [R, s, h]),
                    K = l.default.useRef(G),
                    $ = l.default.useRef(U);
                M && (o = l.default.Children.only(r));
                let F = M ? o && "object" == typeof o && o.ref : t,
                    [H, D, W] = (0, p.useIntersection)({ rootMargin: "200px" }),
                    q = l.default.useCallback(
                        (e) => {
                            ($.current !== U || K.current !== G) && (W(), ($.current = U), (K.current = G)), H(e), F && ("function" == typeof F ? F(e) : "object" == typeof F && (F.current = e));
                        },
                        [U, F, G, W, H]
                    );
                l.default.useEffect(() => {
                    I && D && N && y(I, G, U, { locale: _ }, { kind: L }, A);
                }, [U, G, D, _, N, null == R ? void 0 : R.locale, I, A, L]);
                let V = {
                    ref: q,
                    onClick(e) {
                        M || "function" != typeof O || O(e),
                            M && o.props && "function" == typeof o.props.onClick && o.props.onClick(e),
                            I &&
                                !e.defaultPrevented &&
                                (function (e, t, r, o, n, i, s, c, d) {
                                    let { nodeName: u } = e.currentTarget;
                                    if (
                                        "A" === u.toUpperCase() &&
                                        ((function (e) {
                                            let t = e.currentTarget.getAttribute("target");
                                            return (t && "_self" !== t) || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.nativeEvent && 2 === e.nativeEvent.which);
                                        })(e) ||
                                            (!d && !(0, a.isLocalURL)(r)))
                                    )
                                        return;
                                    e.preventDefault();
                                    let f = () => {
                                        let e = null == s || s;
                                        "beforePopState" in t ? t[n ? "replace" : "push"](r, o, { shallow: i, locale: c, scroll: e }) : t[n ? "replace" : "push"](o || r, { scroll: e });
                                    };
                                    d ? l.default.startTransition(f) : f();
                                })(e, I, G, U, j, C, z, _, A);
                    },
                    onMouseEnter(e) {
                        M || "function" != typeof P || P(e),
                            M && o.props && "function" == typeof o.props.onMouseEnter && o.props.onMouseEnter(e),
                            I && (N || !A) && y(I, G, U, { locale: _, priority: !0, bypassPrefetchedCheck: !0 }, { kind: L }, A);
                    },
                    onTouchStart: function (e) {
                        M || "function" != typeof E || E(e),
                            M && o.props && "function" == typeof o.props.onTouchStart && o.props.onTouchStart(e),
                            I && (N || !A) && y(I, G, U, { locale: _, priority: !0, bypassPrefetchedCheck: !0 }, { kind: L }, A);
                    },
                };
                if ((0, c.isAbsoluteUrl)(U)) V.href = U;
                else if (!M || k || ("a" === o.type && !("href" in o.props))) {
                    let e = void 0 !== _ ? _ : null == R ? void 0 : R.locale,
                        t = (null == R ? void 0 : R.isLocaleDomain) && (0, b.getDomainLocale)(U, e, null == R ? void 0 : R.locales, null == R ? void 0 : R.domainLocales);
                    V.href = t || (0, g.addBasePath)((0, d.addLocale)(U, e, null == R ? void 0 : R.defaultLocale));
                }
                return M ? l.default.cloneElement(o, V) : (0, n.jsx)("a", { ...T, ...V, children: r });
            });
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        2905: function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "useIntersection", {
                    enumerable: !0,
                    get: function () {
                        return s;
                    },
                });
            let o = r(7294),
                n = r(3815),
                l = "function" == typeof IntersectionObserver,
                i = new Map(),
                a = [];
            function s(e) {
                let { rootRef: t, rootMargin: r, disabled: s } = e,
                    c = s || !l,
                    [d, u] = (0, o.useState)(!1),
                    f = (0, o.useRef)(null),
                    p = (0, o.useCallback)((e) => {
                        f.current = e;
                    }, []);
                return (
                    (0, o.useEffect)(() => {
                        if (l) {
                            if (c || d) return;
                            let e = f.current;
                            if (e && e.tagName)
                                return (function (e, t, r) {
                                    let { id: o, observer: n, elements: l } = (function (e) {
                                        let t;
                                        let r = { root: e.root || null, margin: e.rootMargin || "" },
                                            o = a.find((e) => e.root === r.root && e.margin === r.margin);
                                        if (o && (t = i.get(o))) return t;
                                        let n = new Map();
                                        return (
                                            (t = {
                                                id: r,
                                                observer: new IntersectionObserver((e) => {
                                                    e.forEach((e) => {
                                                        let t = n.get(e.target),
                                                            r = e.isIntersecting || e.intersectionRatio > 0;
                                                        t && r && t(r);
                                                    });
                                                }, e),
                                                elements: n,
                                            }),
                                            a.push(r),
                                            i.set(r, t),
                                            t
                                        );
                                    })(r);
                                    return (
                                        l.set(e, t),
                                        n.observe(e),
                                        function () {
                                            if ((l.delete(e), n.unobserve(e), 0 === l.size)) {
                                                n.disconnect(), i.delete(o);
                                                let e = a.findIndex((e) => e.root === o.root && e.margin === o.margin);
                                                e > -1 && a.splice(e, 1);
                                            }
                                        }
                                    );
                                })(e, (e) => e && u(e), { root: null == t ? void 0 : t.current, rootMargin: r });
                        } else if (!d) {
                            let e = (0, n.requestIdleCallback)(() => u(!0));
                            return () => (0, n.cancelIdleCallback)(e);
                        }
                    }, [c, r, t, d, f.current]),
                    [
                        p,
                        d,
                        (0, o.useCallback)(() => {
                            u(!1);
                        }, []),
                    ]
                );
            }
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        1664: function (e, t, r) {
            e.exports = r(9577);
        },
        512: function (e, t, r) {
            "use strict";
            t.Z = function () {
                for (var e, t, r = 0, o = "", n = arguments.length; r < n; r++)
                    (e = arguments[r]) &&
                        (t = (function e(t) {
                            var r,
                                o,
                                n = "";
                            if ("string" == typeof t || "number" == typeof t) n += t;
                            else if ("object" == typeof t) {
                                if (Array.isArray(t)) {
                                    var l = t.length;
                                    for (r = 0; r < l; r++) t[r] && (o = e(t[r])) && (n && (n += " "), (n += o));
                                } else for (o in t) t[o] && (n && (n += " "), (n += o));
                            }
                            return n;
                        })(e)) &&
                        (o && (o += " "), (o += t));
                return o;
            };
        },
        8388: function (e, t, r) {
            "use strict";
            r.d(t, {
                m6: function () {
                    return N;
                },
            });
            let o = /^\[(.+)\]$/;
            function n(e, t) {
                let r = e;
                return (
                    t.split("-").forEach((e) => {
                        r.nextPart.has(e) || r.nextPart.set(e, { nextPart: new Map(), validators: [] }), (r = r.nextPart.get(e));
                    }),
                    r
                );
            }
            let l = /\s+/;
            function i() {
                let e,
                    t,
                    r = 0,
                    o = "";
                for (; r < arguments.length; )
                    (e = arguments[r++]) &&
                        (t = (function e(t) {
                            let r;
                            if ("string" == typeof t) return t;
                            let o = "";
                            for (let n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                            return o;
                        })(e)) &&
                        (o && (o += " "), (o += t));
                return o;
            }
            function a(e) {
                let t = (t) => t[e] || [];
                return (t.isThemeGetter = !0), t;
            }
            let s = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                c = /^\d+\/\d+$/,
                d = new Set(["px", "full", "screen"]),
                u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                f = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                p = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
                b = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                g = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
            function m(e) {
                return y(e) || d.has(e) || c.test(e);
            }
            function h(e) {
                return T(e, "length", R);
            }
            function y(e) {
                return !!e && !Number.isNaN(Number(e));
            }
            function v(e) {
                return T(e, "number", y);
            }
            function x(e) {
                return !!e && Number.isInteger(Number(e));
            }
            function w(e) {
                return e.endsWith("%") && y(e.slice(0, -1));
            }
            function k(e) {
                return s.test(e);
            }
            function j(e) {
                return u.test(e);
            }
            let C = new Set(["length", "size", "percentage"]);
            function z(e) {
                return T(e, C, S);
            }
            function _(e) {
                return T(e, "position", S);
            }
            let O = new Set(["image", "url"]);
            function P(e) {
                return T(e, O, A);
            }
            function E(e) {
                return T(e, "", I);
            }
            function M() {
                return !0;
            }
            function T(e, t, r) {
                let o = s.exec(e);
                return !!o && (o[1] ? ("string" == typeof t ? o[1] === t : t.has(o[1])) : r(o[2]));
            }
            function R(e) {
                return f.test(e) && !p.test(e);
            }
            function S() {
                return !1;
            }
            function I(e) {
                return b.test(e);
            }
            function A(e) {
                return g.test(e);
            }
            let N = (function (e, ...t) {
                let r, a, s;
                let c = function (l) {
                    var i;
                    return (
                        (a = (r = {
                            cache: (function (e) {
                                if (e < 1) return { get: () => void 0, set: () => {} };
                                let t = 0,
                                    r = new Map(),
                                    o = new Map();
                                function n(n, l) {
                                    r.set(n, l), ++t > e && ((t = 0), (o = r), (r = new Map()));
                                }
                                return {
                                    get(e) {
                                        let t = r.get(e);
                                        return void 0 !== t ? t : void 0 !== (t = o.get(e)) ? (n(e, t), t) : void 0;
                                    },
                                    set(e, t) {
                                        r.has(e) ? r.set(e, t) : n(e, t);
                                    },
                                };
                            })((i = t.reduce((e, t) => t(e), e())).cacheSize),
                            splitModifiers: (function (e) {
                                let t = e.separator,
                                    r = 1 === t.length,
                                    o = t[0],
                                    n = t.length;
                                return function (e) {
                                    let l;
                                    let i = [],
                                        a = 0,
                                        s = 0;
                                    for (let c = 0; c < e.length; c++) {
                                        let d = e[c];
                                        if (0 === a) {
                                            if (d === o && (r || e.slice(c, c + n) === t)) {
                                                i.push(e.slice(s, c)), (s = c + n);
                                                continue;
                                            }
                                            if ("/" === d) {
                                                l = c;
                                                continue;
                                            }
                                        }
                                        "[" === d ? a++ : "]" === d && a--;
                                    }
                                    let c = 0 === i.length ? e : e.substring(s),
                                        d = c.startsWith("!"),
                                        u = d ? c.substring(1) : c;
                                    return { modifiers: i, hasImportantModifier: d, baseClassName: u, maybePostfixModifierPosition: l && l > s ? l - s : void 0 };
                                };
                            })(i),
                            ...(function (e) {
                                let t = (function (e) {
                                        var t;
                                        let { theme: r, prefix: o } = e,
                                            l = { nextPart: new Map(), validators: [] };
                                        return (
                                            ((t = Object.entries(e.classGroups)),
                                            o ? t.map(([e, t]) => [e, t.map((e) => ("string" == typeof e ? o + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, t]) => [o + e, t])) : e))]) : t).forEach(([e, t]) => {
                                                (function e(t, r, o, l) {
                                                    t.forEach((t) => {
                                                        if ("string" == typeof t) {
                                                            ("" === t ? r : n(r, t)).classGroupId = o;
                                                            return;
                                                        }
                                                        if ("function" == typeof t) {
                                                            if (t.isThemeGetter) {
                                                                e(t(l), r, o, l);
                                                                return;
                                                            }
                                                            r.validators.push({ validator: t, classGroupId: o });
                                                            return;
                                                        }
                                                        Object.entries(t).forEach(([t, i]) => {
                                                            e(i, n(r, t), o, l);
                                                        });
                                                    });
                                                })(t, l, e, r);
                                            }),
                                            l
                                        );
                                    })(e),
                                    { conflictingClassGroups: r, conflictingClassGroupModifiers: l } = e;
                                return {
                                    getClassGroupId: function (e) {
                                        let r = e.split("-");
                                        return (
                                            "" === r[0] && 1 !== r.length && r.shift(),
                                            (function e(t, r) {
                                                if (0 === t.length) return r.classGroupId;
                                                let o = t[0],
                                                    n = r.nextPart.get(o),
                                                    l = n ? e(t.slice(1), n) : void 0;
                                                if (l) return l;
                                                if (0 === r.validators.length) return;
                                                let i = t.join("-");
                                                return r.validators.find(({ validator: e }) => e(i))?.classGroupId;
                                            })(r, t) ||
                                                (function (e) {
                                                    if (o.test(e)) {
                                                        let t = o.exec(e)[1],
                                                            r = t?.substring(0, t.indexOf(":"));
                                                        if (r) return "arbitrary.." + r;
                                                    }
                                                })(e)
                                        );
                                    },
                                    getConflictingClassGroupIds: function (e, t) {
                                        let o = r[e] || [];
                                        return t && l[e] ? [...o, ...l[e]] : o;
                                    },
                                };
                            })(i),
                        }).cache.get),
                        (s = r.cache.set),
                        (c = d),
                        d(l)
                    );
                };
                function d(e) {
                    let t = a(e);
                    if (t) return t;
                    let o = (function (e, t) {
                        let { splitModifiers: r, getClassGroupId: o, getConflictingClassGroupIds: n } = t,
                            i = new Set();
                        return e
                            .trim()
                            .split(l)
                            .map((e) => {
                                let { modifiers: t, hasImportantModifier: n, baseClassName: l, maybePostfixModifierPosition: i } = r(e),
                                    a = o(i ? l.substring(0, i) : l),
                                    s = !!i;
                                if (!a) {
                                    if (!i || !(a = o(l))) return { isTailwindClass: !1, originalClassName: e };
                                    s = !1;
                                }
                                let c = (function (e) {
                                    if (e.length <= 1) return e;
                                    let t = [],
                                        r = [];
                                    return (
                                        e.forEach((e) => {
                                            "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
                                        }),
                                        t.push(...r.sort()),
                                        t
                                    );
                                })(t).join(":");
                                return { isTailwindClass: !0, modifierId: n ? c + "!" : c, classGroupId: a, originalClassName: e, hasPostfixModifier: s };
                            })
                            .reverse()
                            .filter((e) => {
                                if (!e.isTailwindClass) return !0;
                                let { modifierId: t, classGroupId: r, hasPostfixModifier: o } = e,
                                    l = t + r;
                                return !i.has(l) && (i.add(l), n(r, o).forEach((e) => i.add(t + e)), !0);
                            })
                            .reverse()
                            .map((e) => e.originalClassName)
                            .join(" ");
                    })(e, r);
                    return s(e, o), o;
                }
                return function () {
                    return c(i.apply(null, arguments));
                };
            })(function () {
                let e = a("colors"),
                    t = a("spacing"),
                    r = a("blur"),
                    o = a("brightness"),
                    n = a("borderColor"),
                    l = a("borderRadius"),
                    i = a("borderSpacing"),
                    s = a("borderWidth"),
                    c = a("contrast"),
                    d = a("grayscale"),
                    u = a("hueRotate"),
                    f = a("invert"),
                    p = a("gap"),
                    b = a("gradientColorStops"),
                    g = a("gradientColorStopPositions"),
                    C = a("inset"),
                    O = a("margin"),
                    T = a("opacity"),
                    R = a("padding"),
                    S = a("saturate"),
                    I = a("scale"),
                    A = a("sepia"),
                    N = a("skew"),
                    L = a("space"),
                    G = a("translate"),
                    U = () => ["auto", "contain", "none"],
                    K = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    $ = () => ["auto", k, t],
                    F = () => [k, t],
                    H = () => ["", m, h],
                    D = () => ["auto", y, k],
                    W = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    q = () => ["solid", "dashed", "dotted", "double", "none"],
                    V = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
                    B = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    Y = () => ["", "0", k],
                    Z = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    J = () => [y, v],
                    Q = () => [y, k];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [M],
                        spacing: [m, h],
                        blur: ["none", "", j, k],
                        brightness: J(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", j, k],
                        borderSpacing: F(),
                        borderWidth: H(),
                        contrast: J(),
                        grayscale: Y(),
                        hueRotate: Q(),
                        invert: Y(),
                        gap: F(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [w, h],
                        inset: $(),
                        margin: $(),
                        opacity: J(),
                        padding: F(),
                        saturate: J(),
                        scale: J(),
                        sepia: Y(),
                        skew: Q(),
                        space: F(),
                        translate: F(),
                    },
                    classGroups: {
                        aspect: [{ aspect: ["auto", "square", "video", k] }],
                        container: ["container"],
                        columns: [{ columns: [j] }],
                        "break-after": [{ "break-after": Z() }],
                        "break-before": [{ "break-before": Z() }],
                        "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                        box: [{ box: ["border", "content"] }],
                        display: [
                            "block",
                            "inline-block",
                            "inline",
                            "flex",
                            "inline-flex",
                            "table",
                            "inline-table",
                            "table-caption",
                            "table-cell",
                            "table-column",
                            "table-column-group",
                            "table-footer-group",
                            "table-header-group",
                            "table-row-group",
                            "table-row",
                            "flow-root",
                            "grid",
                            "inline-grid",
                            "contents",
                            "list-item",
                            "hidden",
                        ],
                        float: [{ float: ["right", "left", "none", "start", "end"] }],
                        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                        "object-position": [{ object: [...W(), k] }],
                        overflow: [{ overflow: K() }],
                        "overflow-x": [{ "overflow-x": K() }],
                        "overflow-y": [{ "overflow-y": K() }],
                        overscroll: [{ overscroll: U() }],
                        "overscroll-x": [{ "overscroll-x": U() }],
                        "overscroll-y": [{ "overscroll-y": U() }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{ inset: [C] }],
                        "inset-x": [{ "inset-x": [C] }],
                        "inset-y": [{ "inset-y": [C] }],
                        start: [{ start: [C] }],
                        end: [{ end: [C] }],
                        top: [{ top: [C] }],
                        right: [{ right: [C] }],
                        bottom: [{ bottom: [C] }],
                        left: [{ left: [C] }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{ z: ["auto", x, k] }],
                        basis: [{ basis: $() }],
                        "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                        flex: [{ flex: ["1", "auto", "initial", "none", k] }],
                        grow: [{ grow: Y() }],
                        shrink: [{ shrink: Y() }],
                        order: [{ order: ["first", "last", "none", x, k] }],
                        "grid-cols": [{ "grid-cols": [M] }],
                        "col-start-end": [{ col: ["auto", { span: ["full", x, k] }, k] }],
                        "col-start": [{ "col-start": D() }],
                        "col-end": [{ "col-end": D() }],
                        "grid-rows": [{ "grid-rows": [M] }],
                        "row-start-end": [{ row: ["auto", { span: [x, k] }, k] }],
                        "row-start": [{ "row-start": D() }],
                        "row-end": [{ "row-end": D() }],
                        "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", k] }],
                        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", k] }],
                        gap: [{ gap: [p] }],
                        "gap-x": [{ "gap-x": [p] }],
                        "gap-y": [{ "gap-y": [p] }],
                        "justify-content": [{ justify: ["normal", ...B()] }],
                        "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                        "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                        "align-content": [{ content: ["normal", ...B(), "baseline"] }],
                        "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                        "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                        "place-content": [{ "place-content": [...B(), "baseline"] }],
                        "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                        "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                        p: [{ p: [R] }],
                        px: [{ px: [R] }],
                        py: [{ py: [R] }],
                        ps: [{ ps: [R] }],
                        pe: [{ pe: [R] }],
                        pt: [{ pt: [R] }],
                        pr: [{ pr: [R] }],
                        pb: [{ pb: [R] }],
                        pl: [{ pl: [R] }],
                        m: [{ m: [O] }],
                        mx: [{ mx: [O] }],
                        my: [{ my: [O] }],
                        ms: [{ ms: [O] }],
                        me: [{ me: [O] }],
                        mt: [{ mt: [O] }],
                        mr: [{ mr: [O] }],
                        mb: [{ mb: [O] }],
                        ml: [{ ml: [O] }],
                        "space-x": [{ "space-x": [L] }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{ "space-y": [L] }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t] }],
                        "min-w": [{ "min-w": [k, t, "min", "max", "fit"] }],
                        "max-w": [{ "max-w": [k, t, "none", "full", "min", "max", "fit", "prose", { screen: [j] }, j] }],
                        h: [{ h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "min-h": [{ "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        "max-h": [{ "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                        size: [{ size: [k, t, "auto", "min", "max", "fit"] }],
                        "font-size": [{ text: ["base", j, h] }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{ font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", v] }],
                        "font-family": [{ font: [M] }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", k] }],
                        "line-clamp": [{ "line-clamp": ["none", y, v] }],
                        leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", m, k] }],
                        "list-image": [{ "list-image": ["none", k] }],
                        "list-style-type": [{ list: ["none", "disc", "decimal", k] }],
                        "list-style-position": [{ list: ["inside", "outside"] }],
                        "placeholder-color": [{ placeholder: [e] }],
                        "placeholder-opacity": [{ "placeholder-opacity": [T] }],
                        "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                        "text-color": [{ text: [e] }],
                        "text-opacity": [{ "text-opacity": [T] }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{ decoration: [...q(), "wavy"] }],
                        "text-decoration-thickness": [{ decoration: ["auto", "from-font", m, h] }],
                        "underline-offset": [{ "underline-offset": ["auto", m, k] }],
                        "text-decoration-color": [{ decoration: [e] }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                        indent: [{ indent: F() }],
                        "vertical-align": [{ align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", k] }],
                        whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                        break: [{ break: ["normal", "words", "all", "keep"] }],
                        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                        content: [{ content: ["none", k] }],
                        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                        "bg-opacity": [{ "bg-opacity": [T] }],
                        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                        "bg-position": [{ bg: [...W(), _] }],
                        "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                        "bg-size": [{ bg: ["auto", "cover", "contain", z] }],
                        "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, P] }],
                        "bg-color": [{ bg: [e] }],
                        "gradient-from-pos": [{ from: [g] }],
                        "gradient-via-pos": [{ via: [g] }],
                        "gradient-to-pos": [{ to: [g] }],
                        "gradient-from": [{ from: [b] }],
                        "gradient-via": [{ via: [b] }],
                        "gradient-to": [{ to: [b] }],
                        rounded: [{ rounded: [l] }],
                        "rounded-s": [{ "rounded-s": [l] }],
                        "rounded-e": [{ "rounded-e": [l] }],
                        "rounded-t": [{ "rounded-t": [l] }],
                        "rounded-r": [{ "rounded-r": [l] }],
                        "rounded-b": [{ "rounded-b": [l] }],
                        "rounded-l": [{ "rounded-l": [l] }],
                        "rounded-ss": [{ "rounded-ss": [l] }],
                        "rounded-se": [{ "rounded-se": [l] }],
                        "rounded-ee": [{ "rounded-ee": [l] }],
                        "rounded-es": [{ "rounded-es": [l] }],
                        "rounded-tl": [{ "rounded-tl": [l] }],
                        "rounded-tr": [{ "rounded-tr": [l] }],
                        "rounded-br": [{ "rounded-br": [l] }],
                        "rounded-bl": [{ "rounded-bl": [l] }],
                        "border-w": [{ border: [s] }],
                        "border-w-x": [{ "border-x": [s] }],
                        "border-w-y": [{ "border-y": [s] }],
                        "border-w-s": [{ "border-s": [s] }],
                        "border-w-e": [{ "border-e": [s] }],
                        "border-w-t": [{ "border-t": [s] }],
                        "border-w-r": [{ "border-r": [s] }],
                        "border-w-b": [{ "border-b": [s] }],
                        "border-w-l": [{ "border-l": [s] }],
                        "border-opacity": [{ "border-opacity": [T] }],
                        "border-style": [{ border: [...q(), "hidden"] }],
                        "divide-x": [{ "divide-x": [s] }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{ "divide-y": [s] }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{ "divide-opacity": [T] }],
                        "divide-style": [{ divide: q() }],
                        "border-color": [{ border: [n] }],
                        "border-color-x": [{ "border-x": [n] }],
                        "border-color-y": [{ "border-y": [n] }],
                        "border-color-t": [{ "border-t": [n] }],
                        "border-color-r": [{ "border-r": [n] }],
                        "border-color-b": [{ "border-b": [n] }],
                        "border-color-l": [{ "border-l": [n] }],
                        "divide-color": [{ divide: [n] }],
                        "outline-style": [{ outline: ["", ...q()] }],
                        "outline-offset": [{ "outline-offset": [m, k] }],
                        "outline-w": [{ outline: [m, h] }],
                        "outline-color": [{ outline: [e] }],
                        "ring-w": [{ ring: H() }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{ ring: [e] }],
                        "ring-opacity": [{ "ring-opacity": [T] }],
                        "ring-offset-w": [{ "ring-offset": [m, h] }],
                        "ring-offset-color": [{ "ring-offset": [e] }],
                        shadow: [{ shadow: ["", "inner", "none", j, E] }],
                        "shadow-color": [{ shadow: [M] }],
                        opacity: [{ opacity: [T] }],
                        "mix-blend": [{ "mix-blend": [...V(), "plus-lighter", "plus-darker"] }],
                        "bg-blend": [{ "bg-blend": V() }],
                        filter: [{ filter: ["", "none"] }],
                        blur: [{ blur: [r] }],
                        brightness: [{ brightness: [o] }],
                        contrast: [{ contrast: [c] }],
                        "drop-shadow": [{ "drop-shadow": ["", "none", j, k] }],
                        grayscale: [{ grayscale: [d] }],
                        "hue-rotate": [{ "hue-rotate": [u] }],
                        invert: [{ invert: [f] }],
                        saturate: [{ saturate: [S] }],
                        sepia: [{ sepia: [A] }],
                        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                        "backdrop-blur": [{ "backdrop-blur": [r] }],
                        "backdrop-brightness": [{ "backdrop-brightness": [o] }],
                        "backdrop-contrast": [{ "backdrop-contrast": [c] }],
                        "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
                        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
                        "backdrop-invert": [{ "backdrop-invert": [f] }],
                        "backdrop-opacity": [{ "backdrop-opacity": [T] }],
                        "backdrop-saturate": [{ "backdrop-saturate": [S] }],
                        "backdrop-sepia": [{ "backdrop-sepia": [A] }],
                        "border-collapse": [{ border: ["collapse", "separate"] }],
                        "border-spacing": [{ "border-spacing": [i] }],
                        "border-spacing-x": [{ "border-spacing-x": [i] }],
                        "border-spacing-y": [{ "border-spacing-y": [i] }],
                        "table-layout": [{ table: ["auto", "fixed"] }],
                        caption: [{ caption: ["top", "bottom"] }],
                        transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", k] }],
                        duration: [{ duration: Q() }],
                        ease: [{ ease: ["linear", "in", "out", "in-out", k] }],
                        delay: [{ delay: Q() }],
                        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", k] }],
                        transform: [{ transform: ["", "gpu", "none"] }],
                        scale: [{ scale: [I] }],
                        "scale-x": [{ "scale-x": [I] }],
                        "scale-y": [{ "scale-y": [I] }],
                        rotate: [{ rotate: [x, k] }],
                        "translate-x": [{ "translate-x": [G] }],
                        "translate-y": [{ "translate-y": [G] }],
                        "skew-x": [{ "skew-x": [N] }],
                        "skew-y": [{ "skew-y": [N] }],
                        "transform-origin": [{ origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", k] }],
                        accent: [{ accent: ["auto", e] }],
                        appearance: [{ appearance: ["none", "auto"] }],
                        cursor: [
                            {
                                cursor: [
                                    "auto",
                                    "default",
                                    "pointer",
                                    "wait",
                                    "text",
                                    "move",
                                    "help",
                                    "not-allowed",
                                    "none",
                                    "context-menu",
                                    "progress",
                                    "cell",
                                    "crosshair",
                                    "vertical-text",
                                    "alias",
                                    "copy",
                                    "no-drop",
                                    "grab",
                                    "grabbing",
                                    "all-scroll",
                                    "col-resize",
                                    "row-resize",
                                    "n-resize",
                                    "e-resize",
                                    "s-resize",
                                    "w-resize",
                                    "ne-resize",
                                    "nw-resize",
                                    "se-resize",
                                    "sw-resize",
                                    "ew-resize",
                                    "ns-resize",
                                    "nesw-resize",
                                    "nwse-resize",
                                    "zoom-in",
                                    "zoom-out",
                                    k,
                                ],
                            },
                        ],
                        "caret-color": [{ caret: [e] }],
                        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                        resize: [{ resize: ["none", "y", "x", ""] }],
                        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                        "scroll-m": [{ "scroll-m": F() }],
                        "scroll-mx": [{ "scroll-mx": F() }],
                        "scroll-my": [{ "scroll-my": F() }],
                        "scroll-ms": [{ "scroll-ms": F() }],
                        "scroll-me": [{ "scroll-me": F() }],
                        "scroll-mt": [{ "scroll-mt": F() }],
                        "scroll-mr": [{ "scroll-mr": F() }],
                        "scroll-mb": [{ "scroll-mb": F() }],
                        "scroll-ml": [{ "scroll-ml": F() }],
                        "scroll-p": [{ "scroll-p": F() }],
                        "scroll-px": [{ "scroll-px": F() }],
                        "scroll-py": [{ "scroll-py": F() }],
                        "scroll-ps": [{ "scroll-ps": F() }],
                        "scroll-pe": [{ "scroll-pe": F() }],
                        "scroll-pt": [{ "scroll-pt": F() }],
                        "scroll-pr": [{ "scroll-pr": F() }],
                        "scroll-pb": [{ "scroll-pb": F() }],
                        "scroll-pl": [{ "scroll-pl": F() }],
                        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                        "snap-stop": [{ snap: ["normal", "always"] }],
                        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                        touch: [{ touch: ["auto", "none", "manipulation"] }],
                        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{ select: ["none", "text", "all", "auto"] }],
                        "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", k] }],
                        fill: [{ fill: [e, "none"] }],
                        "stroke-w": [{ stroke: [m, h, v] }],
                        stroke: [{ stroke: [e, "none"] }],
                        sr: ["sr-only", "not-sr-only"],
                        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        size: ["w", "h"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        "line-clamp": ["display", "overflow"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"],
                    },
                    conflictingClassGroupModifiers: { "font-size": ["leading"] },
                };
            });
        },
    },
]);
