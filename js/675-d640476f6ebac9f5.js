(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [675],
    {
        6541: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "Image", {
                    enumerable: !0,
                    get: function () {
                        return w;
                    },
                });
            let r = i(8754),
                o = i(1757),
                n = i(5893),
                s = o._(i(7294)),
                l = r._(i(3935)),
                a = r._(i(7828)),
                u = i(7367),
                d = i(7903),
                c = i(4938);
            i(1997);
            let f = i(9953),
                g = r._(i(6663)),
                p = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: !0, unoptimized: !1 };
            function m(e, t, i, r, o, n, s) {
                let l = null == e ? void 0 : e.src;
                e &&
                    e["data-loaded-src"] !== l &&
                    ((e["data-loaded-src"] = l),
                    ("decode" in e ? e.decode() : Promise.resolve())
                        .catch(() => {})
                        .then(() => {
                            if (e.parentElement && e.isConnected) {
                                if (("empty" !== t && o(!0), null == i ? void 0 : i.current)) {
                                    let t = new Event("load");
                                    Object.defineProperty(t, "target", { writable: !1, value: e });
                                    let r = !1,
                                        o = !1;
                                    i.current({
                                        ...t,
                                        nativeEvent: t,
                                        currentTarget: e,
                                        target: e,
                                        isDefaultPrevented: () => r,
                                        isPropagationStopped: () => o,
                                        persist: () => {},
                                        preventDefault: () => {
                                            (r = !0), t.preventDefault();
                                        },
                                        stopPropagation: () => {
                                            (o = !0), t.stopPropagation();
                                        },
                                    });
                                }
                                (null == r ? void 0 : r.current) && r.current(e);
                            }
                        }));
            }
            function h(e) {
                return s.use ? { fetchPriority: e } : { fetchpriority: e };
            }
            let v = (0, s.forwardRef)((e, t) => {
                let {
                    src: i,
                    srcSet: r,
                    sizes: o,
                    height: l,
                    width: a,
                    decoding: u,
                    className: d,
                    style: c,
                    fetchPriority: f,
                    placeholder: g,
                    loading: p,
                    unoptimized: v,
                    fill: b,
                    onLoadRef: w,
                    onLoadingCompleteRef: y,
                    setBlurComplete: S,
                    setShowAltText: _,
                    sizesInput: j,
                    onLoad: x,
                    onError: C,
                    ...z
                } = e;
                return (0, n.jsx)("img", {
                    ...z,
                    ...h(f),
                    loading: p,
                    width: a,
                    height: l,
                    decoding: u,
                    "data-nimg": b ? "fill" : "1",
                    className: d,
                    style: c,
                    sizes: o,
                    srcSet: r,
                    src: i,
                    ref: (0, s.useCallback)(
                        (e) => {
                            t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (C && (e.src = e.src), e.complete && m(e, g, w, y, S, v, j));
                        },
                        [i, g, w, y, S, C, v, j, t]
                    ),
                    onLoad: (e) => {
                        m(e.currentTarget, g, w, y, S, v, j);
                    },
                    onError: (e) => {
                        _(!0), "empty" !== g && S(!0), C && C(e);
                    },
                });
            });
            function b(e) {
                let { isAppRouter: t, imgAttributes: i } = e,
                    r = { as: "image", imageSrcSet: i.srcSet, imageSizes: i.sizes, crossOrigin: i.crossOrigin, referrerPolicy: i.referrerPolicy, ...h(i.fetchPriority) };
                return t && l.default.preload
                    ? (l.default.preload(i.src, r), null)
                    : (0, n.jsx)(a.default, { children: (0, n.jsx)("link", { rel: "preload", href: i.srcSet ? void 0 : i.src, ...r }, "__nimg-" + i.src + i.srcSet + i.sizes) });
            }
            let w = (0, s.forwardRef)((e, t) => {
                let i = (0, s.useContext)(f.RouterContext),
                    r = (0, s.useContext)(c.ImageConfigContext),
                    o = (0, s.useMemo)(() => {
                        let e = p || r || d.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            i = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e, allSizes: t, deviceSizes: i };
                    }, [r]),
                    { onLoad: l, onLoadingComplete: a } = e,
                    m = (0, s.useRef)(l);
                (0, s.useEffect)(() => {
                    m.current = l;
                }, [l]);
                let h = (0, s.useRef)(a);
                (0, s.useEffect)(() => {
                    h.current = a;
                }, [a]);
                let [w, y] = (0, s.useState)(!1),
                    [S, _] = (0, s.useState)(!1),
                    { props: j, meta: x } = (0, u.getImgProps)(e, { defaultLoader: g.default, imgConf: o, blurComplete: w, showAltText: S });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(v, { ...j, unoptimized: x.unoptimized, placeholder: x.placeholder, fill: x.fill, onLoadRef: m, onLoadingCompleteRef: h, setBlurComplete: y, setShowAltText: _, sizesInput: e.sizes, ref: t }),
                        x.priority ? (0, n.jsx)(b, { isAppRouter: !i, imgAttributes: j }) : null,
                    ],
                });
            });
            ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, "__esModule", { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        7367: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getImgProps", {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }),
                i(1997);
            let r = i(9919),
                o = i(7903);
            function n(e) {
                return void 0 !== e.default;
            }
            function s(e) {
                return void 0 === e ? e : "number" == typeof e ? (Number.isFinite(e) ? e : NaN) : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN;
            }
            function l(e, t) {
                var i;
                let l,
                    a,
                    u,
                    {
                        src: d,
                        sizes: c,
                        unoptimized: f = !1,
                        priority: g = !1,
                        loading: p,
                        className: m,
                        quality: h,
                        width: v,
                        height: b,
                        fill: w = !1,
                        style: y,
                        overrideSrc: S,
                        onLoad: _,
                        onLoadingComplete: j,
                        placeholder: x = "empty",
                        blurDataURL: C,
                        fetchPriority: z,
                        layout: P,
                        objectFit: E,
                        objectPosition: O,
                        lazyBoundary: R,
                        lazyRoot: I,
                        ...M
                    } = e,
                    { imgConf: k, showAltText: N, blurComplete: A, defaultLoader: D } = t,
                    B = k || o.imageConfigDefault;
                if ("allSizes" in B) l = B;
                else {
                    let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
                        t = B.deviceSizes.sort((e, t) => e - t);
                    l = { ...B, allSizes: e, deviceSizes: t };
                }
                if (void 0 === D) throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");
                let F = M.loader || D;
                delete M.loader, delete M.srcSet;
                let G = "__next_img_default" in F;
                if (G) {
                    if ("custom" === l.loader) throw Error('Image with src "' + d + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader');
                } else {
                    let e = F;
                    F = (t) => {
                        let { config: i, ...r } = t;
                        return e(r);
                    };
                }
                if (P) {
                    "fill" === P && (w = !0);
                    let e = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[P];
                    e && (y = { ...y, ...e });
                    let t = { responsive: "100vw", fill: "100vw" }[P];
                    t && !c && (c = t);
                }
                let L = "",
                    W = s(v),
                    T = s(b);
                if ("object" == typeof (i = d) && (n(i) || void 0 !== i.src)) {
                    let e = n(d) ? d.default : d;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (((a = e.blurWidth), (u = e.blurHeight), (C = C || e.blurDataURL), (L = e.src), !w)) {
                        if (W || T) {
                            if (W && !T) {
                                let t = W / e.width;
                                T = Math.round(e.height * t);
                            } else if (!W && T) {
                                let t = T / e.height;
                                W = Math.round(e.width * t);
                            }
                        } else (W = e.width), (T = e.height);
                    }
                }
                let U = !g && ("lazy" === p || void 0 === p);
                (!(d = "string" == typeof d ? d : L) || d.startsWith("data:") || d.startsWith("blob:")) && ((f = !0), (U = !1)), l.unoptimized && (f = !0), G && d.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0), g && (z = "high");
                let V = s(h),
                    q = Object.assign(w ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: E, objectPosition: O } : {}, N ? {} : { color: "transparent" }, y),
                    J =
                        A || "empty" === x
                            ? null
                            : "blur" === x
                            ? 'url("data:image/svg+xml;charset=utf-8,' + (0, r.getImageBlurSvg)({ widthInt: W, heightInt: T, blurWidth: a, blurHeight: u, blurDataURL: C || "", objectFit: q.objectFit }) + '")'
                            : 'url("' + x + '")',
                    Y = J ? { backgroundSize: q.objectFit || "cover", backgroundPosition: q.objectPosition || "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: J } : {},
                    H = (function (e) {
                        let { config: t, src: i, unoptimized: r, width: o, quality: n, sizes: s, loader: l } = e;
                        if (r) return { src: i, srcSet: void 0, sizes: void 0 };
                        let { widths: a, kind: u } = (function (e, t, i) {
                                let { deviceSizes: r, allSizes: o } = e;
                                if (i) {
                                    let e = /(^|\s)(1?\d?\d)vw/g,
                                        t = [];
                                    for (let r; (r = e.exec(i)); r) t.push(parseInt(r[2]));
                                    if (t.length) {
                                        let e = 0.01 * Math.min(...t);
                                        return { widths: o.filter((t) => t >= r[0] * e), kind: "w" };
                                    }
                                    return { widths: o, kind: "w" };
                                }
                                return "number" != typeof t ? { widths: r, kind: "w" } : { widths: [...new Set([t, 2 * t].map((e) => o.find((t) => t >= e) || o[o.length - 1]))], kind: "x" };
                            })(t, o, s),
                            d = a.length - 1;
                        return {
                            sizes: s || "w" !== u ? s : "100vw",
                            srcSet: a.map((e, r) => l({ config: t, src: i, quality: n, width: e }) + " " + ("w" === u ? e : r + 1) + u).join(", "),
                            src: l({ config: t, src: i, quality: n, width: a[d] }),
                        };
                    })({ config: l, src: d, unoptimized: f, width: W, quality: V, sizes: c, loader: F });
                return {
                    props: { ...M, loading: U ? "lazy" : p, fetchPriority: z, width: W, height: T, decoding: "async", className: m, style: { ...q, ...Y }, sizes: H.sizes, srcSet: H.srcSet, src: S || H.src },
                    meta: { unoptimized: f, priority: g, placeholder: x, fill: w },
                };
            }
        },
        9919: function (e, t) {
            "use strict";
            function i(e) {
                let { widthInt: t, heightInt: i, blurWidth: r, blurHeight: o, blurDataURL: n, objectFit: s } = e,
                    l = r ? 40 * r : t,
                    a = o ? 40 * o : i,
                    u = l && a ? "viewBox='0 0 " + l + " " + a + "'" : "";
                return (
                    "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
                    u +
                    "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
                    (u ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") +
                    "' style='filter: url(%23b);' href='" +
                    n +
                    "'/%3E%3C/svg%3E"
                );
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "getImageBlurSvg", {
                    enumerable: !0,
                    get: function () {
                        return i;
                    },
                });
        },
        5666: function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    default: function () {
                        return a;
                    },
                    getImageProps: function () {
                        return l;
                    },
                });
            let r = i(8754),
                o = i(7367),
                n = i(6541),
                s = r._(i(6663));
            function l(e) {
                let { props: t } = (0, o.getImgProps)(e, {
                    defaultLoader: s.default,
                    imgConf: { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: !0, unoptimized: !1 },
                });
                for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
                return { props: t };
            }
            let a = n.Image;
        },
        6663: function (e, t) {
            "use strict";
            function i(e) {
                let { config: t, src: i, width: r, quality: o } = e;
                return t.path + "?url=" + encodeURIComponent(i) + "&w=" + r + "&q=" + (o || 75);
            }
            Object.defineProperty(t, "__esModule", { value: !0 }),
                Object.defineProperty(t, "default", {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                (i.__next_img_default = !0);
            let r = i;
        },
        5675: function (e, t, i) {
            e.exports = i(5666);
        },
    },
]);
