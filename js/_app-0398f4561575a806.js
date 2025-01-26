(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888],
    {
        2962: function (e, t, n) {
            "use strict";
            n.d(t, {
                PB: function () {
                    return g;
                },
                lX: function () {
                    return h;
                },
            });
            var r = n(7294),
                o = n(9008),
                a = n.n(o);
            function i() {
                return (i = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var n = arguments[t];
                              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                          }
                          return e;
                      }).apply(this, arguments);
            }
            function l(e, t) {
                if (null == e) return {};
                var n,
                    r,
                    o = {},
                    a = Object.keys(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o;
            }
            var c = ["keyOverride"],
                p = ["crossOrigin"],
                u = { templateTitle: "", noindex: !1, nofollow: !1, norobots: !1, defaultOpenGraphImageWidth: 0, defaultOpenGraphImageHeight: 0, defaultOpenGraphVideoWidth: 0, defaultOpenGraphVideoHeight: 0 },
                s = function (e, t, n) {
                    void 0 === t && (t = []);
                    var o = void 0 === n ? {} : n,
                        a = o.defaultWidth,
                        i = o.defaultHeight;
                    return t.reduce(function (t, n, o) {
                        return (
                            t.push(r.createElement("meta", { key: "og:" + e + ":0" + o, property: "og:" + e, content: n.url })),
                            n.alt && t.push(r.createElement("meta", { key: "og:" + e + ":alt0" + o, property: "og:" + e + ":alt", content: n.alt })),
                            n.secureUrl && t.push(r.createElement("meta", { key: "og:" + e + ":secure_url0" + o, property: "og:" + e + ":secure_url", content: n.secureUrl.toString() })),
                            n.type && t.push(r.createElement("meta", { key: "og:" + e + ":type0" + o, property: "og:" + e + ":type", content: n.type.toString() })),
                            n.width
                                ? t.push(r.createElement("meta", { key: "og:" + e + ":width0" + o, property: "og:" + e + ":width", content: n.width.toString() }))
                                : a && t.push(r.createElement("meta", { key: "og:" + e + ":width0" + o, property: "og:" + e + ":width", content: a.toString() })),
                            n.height
                                ? t.push(r.createElement("meta", { key: "og:" + e + ":height" + o, property: "og:" + e + ":height", content: n.height.toString() }))
                                : i && t.push(r.createElement("meta", { key: "og:" + e + ":height" + o, property: "og:" + e + ":height", content: i.toString() })),
                            t
                        );
                    }, []);
                },
                f = function (e) {
                    var t,
                        n,
                        o,
                        a,
                        f,
                        d = [];
                    e.titleTemplate && (u.templateTitle = e.titleTemplate);
                    var h = "";
                    e.title
                        ? ((h = e.title),
                          u.templateTitle &&
                              (h = u.templateTitle.replace(/%s/g, function () {
                                  return h;
                              })))
                        : e.defaultTitle && (h = e.defaultTitle),
                        h && d.push(r.createElement("title", { key: "title" }, h));
                    var g = void 0 === e.noindex ? u.noindex || e.dangerouslySetAllPagesToNoIndex : e.noindex,
                        m = void 0 === e.nofollow ? u.nofollow || e.dangerouslySetAllPagesToNoFollow : e.nofollow,
                        y = e.norobots || u.norobots,
                        v = "";
                    if (e.robotsProps) {
                        var b = e.robotsProps,
                            _ = b.nosnippet,
                            w = b.maxSnippet,
                            G = b.maxImagePreview,
                            k = b.maxVideoPreview,
                            E = b.noarchive,
                            O = b.noimageindex,
                            P = b.notranslate,
                            j = b.unavailableAfter;
                        v =
                            (_ ? ",nosnippet" : "") +
                            (w ? ",max-snippet:" + w : "") +
                            (G ? ",max-image-preview:" + G : "") +
                            (E ? ",noarchive" : "") +
                            (j ? ",unavailable_after:" + j : "") +
                            (O ? ",noimageindex" : "") +
                            (k ? ",max-video-preview:" + k : "") +
                            (P ? ",notranslate" : "");
                    }
                    if (
                        (e.norobots && (u.norobots = !0),
                        g || m
                            ? (e.dangerouslySetAllPagesToNoIndex && (u.noindex = !0),
                              e.dangerouslySetAllPagesToNoFollow && (u.nofollow = !0),
                              d.push(r.createElement("meta", { key: "robots", name: "robots", content: (g ? "noindex" : "index") + "," + (m ? "nofollow" : "follow") + v })))
                            : (!y || v) && d.push(r.createElement("meta", { key: "robots", name: "robots", content: "index,follow" + v })),
                        e.description && d.push(r.createElement("meta", { key: "description", name: "description", content: e.description })),
                        e.themeColor && d.push(r.createElement("meta", { key: "theme-color", name: "theme-color", content: e.themeColor })),
                        e.mobileAlternate && d.push(r.createElement("link", { rel: "alternate", key: "mobileAlternate", media: e.mobileAlternate.media, href: e.mobileAlternate.href })),
                        e.languageAlternates &&
                            e.languageAlternates.length > 0 &&
                            e.languageAlternates.forEach(function (e) {
                                d.push(r.createElement("link", { rel: "alternate", key: "languageAlternate-" + e.hrefLang, hrefLang: e.hrefLang, href: e.href }));
                            }),
                        e.twitter &&
                            (e.twitter.cardType && d.push(r.createElement("meta", { key: "twitter:card", name: "twitter:card", content: e.twitter.cardType })),
                            e.twitter.site && d.push(r.createElement("meta", { key: "twitter:site", name: "twitter:site", content: e.twitter.site })),
                            e.twitter.handle && d.push(r.createElement("meta", { key: "twitter:creator", name: "twitter:creator", content: e.twitter.handle }))),
                        e.facebook && e.facebook.appId && d.push(r.createElement("meta", { key: "fb:app_id", property: "fb:app_id", content: e.facebook.appId })),
                        ((null != (t = e.openGraph) && t.title) || h) && d.push(r.createElement("meta", { key: "og:title", property: "og:title", content: (null == (a = e.openGraph) ? void 0 : a.title) || h })),
                        ((null != (n = e.openGraph) && n.description) || e.description) &&
                            d.push(r.createElement("meta", { key: "og:description", property: "og:description", content: (null == (f = e.openGraph) ? void 0 : f.description) || e.description })),
                        e.openGraph)
                    ) {
                        if (((e.openGraph.url || e.canonical) && d.push(r.createElement("meta", { key: "og:url", property: "og:url", content: e.openGraph.url || e.canonical })), e.openGraph.type)) {
                            var T = e.openGraph.type.toLowerCase();
                            d.push(r.createElement("meta", { key: "og:type", property: "og:type", content: T })),
                                "profile" === T && e.openGraph.profile
                                    ? (e.openGraph.profile.firstName && d.push(r.createElement("meta", { key: "profile:first_name", property: "profile:first_name", content: e.openGraph.profile.firstName })),
                                      e.openGraph.profile.lastName && d.push(r.createElement("meta", { key: "profile:last_name", property: "profile:last_name", content: e.openGraph.profile.lastName })),
                                      e.openGraph.profile.username && d.push(r.createElement("meta", { key: "profile:username", property: "profile:username", content: e.openGraph.profile.username })),
                                      e.openGraph.profile.gender && d.push(r.createElement("meta", { key: "profile:gender", property: "profile:gender", content: e.openGraph.profile.gender })))
                                    : "book" === T && e.openGraph.book
                                    ? (e.openGraph.book.authors &&
                                          e.openGraph.book.authors.length &&
                                          e.openGraph.book.authors.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "book:author:0" + t, property: "book:author", content: e }));
                                          }),
                                      e.openGraph.book.isbn && d.push(r.createElement("meta", { key: "book:isbn", property: "book:isbn", content: e.openGraph.book.isbn })),
                                      e.openGraph.book.releaseDate && d.push(r.createElement("meta", { key: "book:release_date", property: "book:release_date", content: e.openGraph.book.releaseDate })),
                                      e.openGraph.book.tags &&
                                          e.openGraph.book.tags.length &&
                                          e.openGraph.book.tags.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "book:tag:0" + t, property: "book:tag", content: e }));
                                          }))
                                    : "article" === T && e.openGraph.article
                                    ? (e.openGraph.article.publishedTime && d.push(r.createElement("meta", { key: "article:published_time", property: "article:published_time", content: e.openGraph.article.publishedTime })),
                                      e.openGraph.article.modifiedTime && d.push(r.createElement("meta", { key: "article:modified_time", property: "article:modified_time", content: e.openGraph.article.modifiedTime })),
                                      e.openGraph.article.expirationTime && d.push(r.createElement("meta", { key: "article:expiration_time", property: "article:expiration_time", content: e.openGraph.article.expirationTime })),
                                      e.openGraph.article.authors &&
                                          e.openGraph.article.authors.length &&
                                          e.openGraph.article.authors.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "article:author:0" + t, property: "article:author", content: e }));
                                          }),
                                      e.openGraph.article.section && d.push(r.createElement("meta", { key: "article:section", property: "article:section", content: e.openGraph.article.section })),
                                      e.openGraph.article.tags &&
                                          e.openGraph.article.tags.length &&
                                          e.openGraph.article.tags.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "article:tag:0" + t, property: "article:tag", content: e }));
                                          }))
                                    : ("video.movie" === T || "video.episode" === T || "video.tv_show" === T || "video.other" === T) &&
                                      e.openGraph.video &&
                                      (e.openGraph.video.actors &&
                                          e.openGraph.video.actors.length &&
                                          e.openGraph.video.actors.forEach(function (e, t) {
                                              e.profile && d.push(r.createElement("meta", { key: "video:actor:0" + t, property: "video:actor", content: e.profile })),
                                                  e.role && d.push(r.createElement("meta", { key: "video:actor:role:0" + t, property: "video:actor:role", content: e.role }));
                                          }),
                                      e.openGraph.video.directors &&
                                          e.openGraph.video.directors.length &&
                                          e.openGraph.video.directors.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "video:director:0" + t, property: "video:director", content: e }));
                                          }),
                                      e.openGraph.video.writers &&
                                          e.openGraph.video.writers.length &&
                                          e.openGraph.video.writers.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "video:writer:0" + t, property: "video:writer", content: e }));
                                          }),
                                      e.openGraph.video.duration && d.push(r.createElement("meta", { key: "video:duration", property: "video:duration", content: e.openGraph.video.duration.toString() })),
                                      e.openGraph.video.releaseDate && d.push(r.createElement("meta", { key: "video:release_date", property: "video:release_date", content: e.openGraph.video.releaseDate })),
                                      e.openGraph.video.tags &&
                                          e.openGraph.video.tags.length &&
                                          e.openGraph.video.tags.forEach(function (e, t) {
                                              d.push(r.createElement("meta", { key: "video:tag:0" + t, property: "video:tag", content: e }));
                                          }),
                                      e.openGraph.video.series && d.push(r.createElement("meta", { key: "video:series", property: "video:series", content: e.openGraph.video.series })));
                        }
                        e.defaultOpenGraphImageWidth && (u.defaultOpenGraphImageWidth = e.defaultOpenGraphImageWidth),
                            e.defaultOpenGraphImageHeight && (u.defaultOpenGraphImageHeight = e.defaultOpenGraphImageHeight),
                            e.openGraph.images && e.openGraph.images.length && d.push.apply(d, s("image", e.openGraph.images, { defaultWidth: u.defaultOpenGraphImageWidth, defaultHeight: u.defaultOpenGraphImageHeight })),
                            e.defaultOpenGraphVideoWidth && (u.defaultOpenGraphVideoWidth = e.defaultOpenGraphVideoWidth),
                            e.defaultOpenGraphVideoHeight && (u.defaultOpenGraphVideoHeight = e.defaultOpenGraphVideoHeight),
                            e.openGraph.videos && e.openGraph.videos.length && d.push.apply(d, s("video", e.openGraph.videos, { defaultWidth: u.defaultOpenGraphVideoWidth, defaultHeight: u.defaultOpenGraphVideoHeight })),
                            e.openGraph.audio && d.push.apply(d, s("audio", e.openGraph.audio)),
                            e.openGraph.locale && d.push(r.createElement("meta", { key: "og:locale", property: "og:locale", content: e.openGraph.locale })),
                            (e.openGraph.siteName || e.openGraph.site_name) && d.push(r.createElement("meta", { key: "og:site_name", property: "og:site_name", content: e.openGraph.siteName || e.openGraph.site_name }));
                    }
                    return (
                        e.canonical && d.push(r.createElement("link", { rel: "canonical", href: e.canonical, key: "canonical" })),
                        e.additionalMetaTags &&
                            e.additionalMetaTags.length > 0 &&
                            e.additionalMetaTags.forEach(function (e) {
                                var t,
                                    n,
                                    o = e.keyOverride,
                                    a = l(e, c);
                                d.push(r.createElement("meta", i({ key: "meta:" + (null != (t = null != (n = null != o ? o : a.name) ? n : a.property) ? t : a.httpEquiv) }, a)));
                            }),
                        null != (o = e.additionalLinkTags) &&
                            o.length &&
                            e.additionalLinkTags.forEach(function (e) {
                                var t,
                                    n = e.crossOrigin,
                                    o = l(e, p);
                                d.push(r.createElement("link", i({ key: "link" + (null != (t = o.keyOverride) ? t : o.href) + o.rel }, o, { crossOrigin: "anonymous" === n || "use-credentials" === n || "" === n ? n : void 0 })));
                            }),
                        d
                    );
                },
                d = function (e) {
                    return r.createElement(a(), null, f(e));
                },
                h = function (e) {
                    var t = e.title,
                        n = e.titleTemplate,
                        o = e.defaultTitle,
                        a = e.themeColor,
                        i = e.dangerouslySetAllPagesToNoIndex,
                        l = e.dangerouslySetAllPagesToNoFollow,
                        c = e.description,
                        p = e.canonical,
                        u = e.facebook,
                        s = e.openGraph,
                        f = e.additionalMetaTags,
                        h = e.twitter,
                        g = e.defaultOpenGraphImageWidth,
                        m = e.defaultOpenGraphImageHeight,
                        y = e.defaultOpenGraphVideoWidth,
                        v = e.defaultOpenGraphVideoHeight,
                        b = e.mobileAlternate,
                        _ = e.languageAlternates,
                        w = e.additionalLinkTags,
                        G = e.robotsProps,
                        k = e.norobots;
                    return r.createElement(d, {
                        title: t,
                        titleTemplate: n,
                        defaultTitle: o,
                        themeColor: a,
                        dangerouslySetAllPagesToNoIndex: void 0 !== i && i,
                        dangerouslySetAllPagesToNoFollow: void 0 !== l && l,
                        description: c,
                        canonical: p,
                        facebook: u,
                        openGraph: s,
                        additionalMetaTags: f,
                        twitter: h,
                        defaultOpenGraphImageWidth: g,
                        defaultOpenGraphImageHeight: m,
                        defaultOpenGraphVideoWidth: y,
                        defaultOpenGraphVideoHeight: v,
                        mobileAlternate: b,
                        languageAlternates: _,
                        additionalLinkTags: w,
                        robotsProps: G,
                        norobots: k,
                    });
                },
                g = function (e) {
                    var t = e.title,
                        n = e.themeColor,
                        o = e.noindex,
                        a = e.nofollow,
                        i = e.robotsProps,
                        l = e.description,
                        c = e.canonical,
                        p = e.openGraph,
                        u = e.facebook,
                        s = e.twitter,
                        f = e.additionalMetaTags,
                        h = e.titleTemplate,
                        g = e.defaultTitle,
                        m = e.mobileAlternate,
                        y = e.languageAlternates,
                        v = e.additionalLinkTags;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d, {
                            title: t,
                            themeColor: n,
                            noindex: o,
                            nofollow: a,
                            robotsProps: i,
                            description: l,
                            canonical: c,
                            facebook: u,
                            openGraph: p,
                            additionalMetaTags: f,
                            twitter: s,
                            titleTemplate: h,
                            defaultTitle: g,
                            mobileAlternate: m,
                            languageAlternates: y,
                            additionalLinkTags: v,
                        })
                    );
                };
            RegExp("[" + Object.keys(Object.freeze({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })).join("") + "]", "g");
        },
        6840: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/_app",
                function () {
                    return n(3893);
                },
            ]);
        },
        3893: function (e, t, n) {
            "use strict";
            n.r(t);
            var r = n(5893),
                o = n(8067),
                a = n.n(o),
                i = n(4081),
                l = n.n(i),
                c = n(2962),
                p = n(1163);
            n(692);
            var u = n(4304),
                s = n(9008),
                f = n.n(s);
            t.default = (e) => {
                let { Component: t, pageProps: n } = e,
                    o = (0, p.useRouter)(),
                    i = o.asPath.split("?")[0],
                    s = "".concat("https://www.morphic.com/") + ("/" === o.asPath ? "" : i.replace(/^\//, "")),
                    d = i.startsWith("/showcase");
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !d &&
                            (0, r.jsxs)(f(), {
                                children: [
                                    (0, r.jsx)("meta", { name: "twitter:image", content: "https://morphic.com/og/home-og.png" }),
                                    (0, r.jsx)("meta", { name: "og:image", content: "https://morphic.com/og/home-og.png" }),
                                    (0, r.jsx)("meta", { name: "og:site_name", content: "Morphic" }),
                                ],
                            }),
                        (0, r.jsx)(c.lX, {
                            title: d ? void 0 : "Morphic — A new era of storytelling",
                            titleTemplate: "%s",
                            description: d ? void 0 : "Morphic is transforming the future of storytelling using breakthrough technologies.",
                            canonical: s,
                            twitter: { handle: "@morphic", site: "@morphic", cardType: "summary_large_image" },
                            additionalMetaTags: [
                                { name: "application-name", content: "Morphic" },
                                { name: "msapplication-TileColor", content: "#da532c" },
                                { name: "theme-color", content: "#ffffff" },
                            ],
                            additionalLinkTags: [
                                { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                                { rel: "icon", type: "image/png", href: "/favicon-32x32.png", sizes: "32x32" },
                                { rel: "icon", type: "image/png", href: "/favicon-16x16.png", sizes: "16x16" },
                                { rel: "manifest", href: "/site.webmanifest" },
                                { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
                            ],
                        }),
                        (0, r.jsx)("main", { className: "".concat(a().className, " ").concat(l().variable), children: (0, r.jsx)(t, { ...n }) }),
                        (0, r.jsx)(u.Wi, { strategy: "lazyOnload", trackPageViews: { ignoreHashChange: !0 } }),
                    ],
                });
            };
        },
        692: function () {},
        4081: function (e) {
            e.exports = { style: { fontFamily: "'__soehneBuch_03d2f6', '__soehneBuch_Fallback_03d2f6'" }, className: "__className_03d2f6", variable: "__variable_03d2f6" };
        },
        8067: function (e) {
            e.exports = { style: { fontFamily: "'__soehneKraftig_ad46c4', '__soehneKraftig_Fallback_ad46c4'" }, className: "__className_ad46c4", variable: "__variable_ad46c4" };
        },
        9008: function (e, t, n) {
            e.exports = n(7828);
        },
        1163: function (e, t, n) {
            e.exports = n(9090);
        },
        4298: function (e, t, n) {
            e.exports = n(2892);
        },
        1462: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.GoogleAnalytics = void 0);
            let r = n(7582),
                o = r.__importDefault(n(7294)),
                a = r.__importDefault(n(4298)),
                i = n(8816);
            t.GoogleAnalytics = function ({ debugMode: e = !1, gaMeasurementId: t, gtagUrl: n = "https://www.googletagmanager.com/gtag/js", strategy: r = "afterInteractive", defaultConsent: l = "granted", trackPageViews: c, nonce: p }) {
                let u = "G-RX6HYHVK1E";
                return ((0, i.usePageViews)({ gaMeasurementId: u, ignoreHashChange: "object" == typeof c && (null == c ? void 0 : c.ignoreHashChange), disabled: !c }), u)
                    ? o.default.createElement(
                          o.default.Fragment,
                          null,
                          o.default.createElement(a.default, { src: `${n}?id=${u}`, strategy: r }),
                          o.default.createElement(
                              a.default,
                              { id: "nextjs-google-analytics", nonce: p },
                              `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${
                "denied" === l &&
                `gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });`
            }
            gtag('config', '${u}', {
              page_path: window.location.pathname,
              ${e ? `debug_mode: ${e},` : ""}
            });
          `
                          )
                      )
                    : null;
            };
        },
        106: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.GoogleAnalytics = void 0);
            var r = n(1462);
            Object.defineProperty(t, "GoogleAnalytics", {
                enumerable: !0,
                get: function () {
                    return r.GoogleAnalytics;
                },
            });
        },
        8816: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.usePageViews = t.usePagesViews = void 0);
            var r = n(7015);
            Object.defineProperty(t, "usePagesViews", {
                enumerable: !0,
                get: function () {
                    return r.usePagesViews;
                },
            });
            var o = n(9412);
            Object.defineProperty(t, "usePageViews", {
                enumerable: !0,
                get: function () {
                    return o.usePageViews;
                },
            });
        },
        9412: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.usePageViews = void 0);
            let r = n(7294),
                o = n(1163),
                a = n(8396);
            t.usePageViews = function ({ gaMeasurementId: e, ignoreHashChange: t, disabled: n } = {}) {
                (0, r.useEffect)(() => {
                    if (n) return;
                    let e = (e) => {
                        (0, a.pageView)({ path: e.toString() }, "G-RX6HYHVK1E");
                    };
                    return (
                        o.Router.events.on("routeChangeComplete", e),
                        t || o.Router.events.on("hashChangeComplete", e),
                        () => {
                            o.Router.events.off("routeChangeComplete", e), t || o.Router.events.off("hashChangeComplete", e);
                        }
                    );
                }, [o.Router.events, e, t]);
            };
        },
        7015: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.usePagesViews = void 0);
            let r = n(9412);
            t.usePagesViews = function (e) {
                console.warn("Nextjs Google Analytics: The 'usePagesViews' hook is deprecated. Please use 'usePageViews' hook instead. https://github.com/MauricioRobayo/nextjs-google-analytics#readme"), (0, r.usePageViews)(e);
            };
        },
        4304: function (e, t, n) {
            "use strict";
            t.B = t.Wi = void 0;
            var r = n(106);
            Object.defineProperty(t, "Wi", {
                enumerable: !0,
                get: function () {
                    return r.GoogleAnalytics;
                },
            }),
                n(8816);
            var o = n(8396);
            Object.defineProperty(t, "B", {
                enumerable: !0,
                get: function () {
                    return o.event;
                },
            });
        },
        5146: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.consent = void 0),
                (t.consent = function ({ arg: e, params: t }) {
                    window.gtag && window.gtag("consent", e, t);
                });
        },
        9633: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.event = void 0);
            let r = n(7582);
            t.event = function (e, t = {}) {
                var { category: n, label: o, value: a, nonInteraction: i, userId: l } = t,
                    c = r.__rest(t, ["category", "label", "value", "nonInteraction", "userId"]);
                if (!window.gtag) return;
                let p = Object.assign({}, c);
                void 0 !== n && (p.event_category = n), void 0 !== o && (p.event_label = o), void 0 !== a && (p.value = a), void 0 !== i && (p.non_interaction = i), void 0 !== l && (p.user_id = l), window.gtag("event", e, p);
            };
        },
        8396: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.consent = t.event = t.pageView = void 0);
            var r = n(3371);
            Object.defineProperty(t, "pageView", {
                enumerable: !0,
                get: function () {
                    return r.pageView;
                },
            });
            var o = n(9633);
            Object.defineProperty(t, "event", {
                enumerable: !0,
                get: function () {
                    return o.event;
                },
            });
            var a = n(5146);
            Object.defineProperty(t, "consent", {
                enumerable: !0,
                get: function () {
                    return a.consent;
                },
            });
        },
        3371: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.pageView = void 0),
                (t.pageView = function ({ title: e, location: t, path: n, sendPageView: r, userId: o } = {}, a) {
                    let i = "G-RX6HYHVK1E";
                    if (!i || !window.gtag) return;
                    let l = {};
                    void 0 !== e && (l.page_title = e), void 0 !== t && (l.page_location = t), void 0 !== n && (l.page_path = n), void 0 !== r && (l.send_page_view = r), void 0 !== o && (l.user_id = o), window.gtag("config", i, l);
                });
        },
        7582: function (e, t, n) {
            "use strict";
            n.r(t),
                n.d(t, {
                    __addDisposableResource: function () {
                        return N;
                    },
                    __assign: function () {
                        return a;
                    },
                    __asyncDelegator: function () {
                        return O;
                    },
                    __asyncGenerator: function () {
                        return E;
                    },
                    __asyncValues: function () {
                        return P;
                    },
                    __await: function () {
                        return k;
                    },
                    __awaiter: function () {
                        return h;
                    },
                    __classPrivateFieldGet: function () {
                        return A;
                    },
                    __classPrivateFieldIn: function () {
                        return I;
                    },
                    __classPrivateFieldSet: function () {
                        return V;
                    },
                    __createBinding: function () {
                        return m;
                    },
                    __decorate: function () {
                        return l;
                    },
                    __disposeResources: function () {
                        return H;
                    },
                    __esDecorate: function () {
                        return p;
                    },
                    __exportStar: function () {
                        return y;
                    },
                    __extends: function () {
                        return o;
                    },
                    __generator: function () {
                        return g;
                    },
                    __importDefault: function () {
                        return S;
                    },
                    __importStar: function () {
                        return x;
                    },
                    __makeTemplateObject: function () {
                        return j;
                    },
                    __metadata: function () {
                        return d;
                    },
                    __param: function () {
                        return c;
                    },
                    __propKey: function () {
                        return s;
                    },
                    __read: function () {
                        return b;
                    },
                    __rest: function () {
                        return i;
                    },
                    __runInitializers: function () {
                        return u;
                    },
                    __setFunctionName: function () {
                        return f;
                    },
                    __spread: function () {
                        return _;
                    },
                    __spreadArray: function () {
                        return G;
                    },
                    __spreadArrays: function () {
                        return w;
                    },
                    __values: function () {
                        return v;
                    },
                });
            var r = function (e, t) {
                return (r =
                    Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array &&
                        function (e, t) {
                            e.__proto__ = t;
                        }) ||
                    function (e, t) {
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    })(e, t);
            };
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw TypeError("Class extends value " + String(t) + " is not a constructor or null");
                function n() {
                    this.constructor = e;
                }
                r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
            }
            var a = function () {
                return (a =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function i(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && 0 > t.indexOf(r) && (n[r] = e[r]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++) 0 > t.indexOf(r[o]) && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                return n;
            }
            function l(e, t, n, r) {
                var o,
                    a = arguments.length,
                    i = a < 3 ? t : null === r ? (r = Object.getOwnPropertyDescriptor(t, n)) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
                else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
                return a > 3 && i && Object.defineProperty(t, n, i), i;
            }
            function c(e, t) {
                return function (n, r) {
                    t(n, r, e);
                };
            }
            function p(e, t, n, r, o, a) {
                function i(e) {
                    if (void 0 !== e && "function" != typeof e) throw TypeError("Function expected");
                    return e;
                }
                for (
                    var l,
                        c = r.kind,
                        p = "getter" === c ? "get" : "setter" === c ? "set" : "value",
                        u = !t && e ? (r.static ? e : e.prototype) : null,
                        s = t || (u ? Object.getOwnPropertyDescriptor(u, r.name) : {}),
                        f = !1,
                        d = n.length - 1;
                    d >= 0;
                    d--
                ) {
                    var h = {};
                    for (var g in r) h[g] = "access" === g ? {} : r[g];
                    for (var g in r.access) h.access[g] = r.access[g];
                    h.addInitializer = function (e) {
                        if (f) throw TypeError("Cannot add initializers after decoration has completed");
                        a.push(i(e || null));
                    };
                    var m = (0, n[d])("accessor" === c ? { get: s.get, set: s.set } : s[p], h);
                    if ("accessor" === c) {
                        if (void 0 === m) continue;
                        if (null === m || "object" != typeof m) throw TypeError("Object expected");
                        (l = i(m.get)) && (s.get = l), (l = i(m.set)) && (s.set = l), (l = i(m.init)) && o.unshift(l);
                    } else (l = i(m)) && ("field" === c ? o.unshift(l) : (s[p] = l));
                }
                u && Object.defineProperty(u, r.name, s), (f = !0);
            }
            function u(e, t, n) {
                for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
                return r ? n : void 0;
            }
            function s(e) {
                return "symbol" == typeof e ? e : "".concat(e);
            }
            function f(e, t, n) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", { configurable: !0, value: n ? "".concat(n, " ", t) : t });
            }
            function d(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t);
            }
            function h(e, t, n, r) {
                return new (n || (n = Promise))(function (o, a) {
                    function i(e) {
                        try {
                            c(r.next(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function l(e) {
                        try {
                            c(r.throw(e));
                        } catch (e) {
                            a(e);
                        }
                    }
                    function c(e) {
                        var t;
                        e.done
                            ? o(e.value)
                            : ((t = e.value) instanceof n
                                  ? t
                                  : new n(function (e) {
                                        e(t);
                                    })
                              ).then(i, l);
                    }
                    c((r = r.apply(e, t || [])).next());
                });
            }
            function g(e, t) {
                var n,
                    r,
                    o,
                    a,
                    i = {
                        label: 0,
                        sent: function () {
                            if (1 & o[0]) throw o[1];
                            return o[1];
                        },
                        trys: [],
                        ops: [],
                    };
                return (
                    (a = { next: l(0), throw: l(1), return: l(2) }),
                    "function" == typeof Symbol &&
                        (a[Symbol.iterator] = function () {
                            return this;
                        }),
                    a
                );
                function l(l) {
                    return function (c) {
                        return (function (l) {
                            if (n) throw TypeError("Generator is already executing.");
                            for (; a && ((a = 0), l[0] && (i = 0)), i; )
                                try {
                                    if (((n = 1), r && (o = 2 & l[0] ? r.return : l[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, l[1])).done)) return o;
                                    switch (((r = 0), o && (l = [2 & l[0], o.value]), l[0])) {
                                        case 0:
                                        case 1:
                                            o = l;
                                            break;
                                        case 4:
                                            return i.label++, { value: l[1], done: !1 };
                                        case 5:
                                            i.label++, (r = l[1]), (l = [0]);
                                            continue;
                                        case 7:
                                            (l = i.ops.pop()), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                i = 0;
                                                continue;
                                            }
                                            if (3 === l[0] && (!o || (l[1] > o[0] && l[1] < o[3]))) {
                                                i.label = l[1];
                                                break;
                                            }
                                            if (6 === l[0] && i.label < o[1]) {
                                                (i.label = o[1]), (o = l);
                                                break;
                                            }
                                            if (o && i.label < o[2]) {
                                                (i.label = o[2]), i.ops.push(l);
                                                break;
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue;
                                    }
                                    l = t.call(e, i);
                                } catch (e) {
                                    (l = [6, e]), (r = 0);
                                } finally {
                                    n = o = 0;
                                }
                            if (5 & l[0]) throw l[1];
                            return { value: l[0] ? l[1] : void 0, done: !0 };
                        })([l, c]);
                    };
                }
            }
            var m = Object.create
                ? function (e, t, n, r) {
                      void 0 === r && (r = n);
                      var o = Object.getOwnPropertyDescriptor(t, n);
                      (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) &&
                          (o = {
                              enumerable: !0,
                              get: function () {
                                  return t[n];
                              },
                          }),
                          Object.defineProperty(e, r, o);
                  }
                : function (e, t, n, r) {
                      void 0 === r && (r = n), (e[r] = t[n]);
                  };
            function y(e, t) {
                for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || m(t, e, n);
            }
            function v(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length)
                    return {
                        next: function () {
                            return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
                        },
                    };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function b(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r,
                    o,
                    a = n.call(e),
                    i = [];
                try {
                    for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
                } catch (e) {
                    o = { error: e };
                } finally {
                    try {
                        r && !r.done && (n = a.return) && n.call(a);
                    } finally {
                        if (o) throw o.error;
                    }
                }
                return i;
            }
            function _() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
                return e;
            }
            function w() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                for (var r = Array(e), o = 0, t = 0; t < n; t++) for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++) r[o] = a[i];
                return r;
            }
            function G(e, t, n) {
                if (n || 2 == arguments.length) for (var r, o = 0, a = t.length; o < a; o++) (!r && o in t) || (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
                return e.concat(r || Array.prototype.slice.call(t));
            }
            function k(e) {
                return this instanceof k ? ((this.v = e), this) : new k(e);
            }
            function E(e, t, n) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var r,
                    o = n.apply(e, t || []),
                    a = [];
                return (
                    (r = {}),
                    i("next"),
                    i("throw"),
                    i("return"),
                    (r[Symbol.asyncIterator] = function () {
                        return this;
                    }),
                    r
                );
                function i(e) {
                    o[e] &&
                        (r[e] = function (t) {
                            return new Promise(function (n, r) {
                                a.push([e, t, n, r]) > 1 || l(e, t);
                            });
                        });
                }
                function l(e, t) {
                    try {
                        var n;
                        (n = o[e](t)).value instanceof k ? Promise.resolve(n.value.v).then(c, p) : u(a[0][2], n);
                    } catch (e) {
                        u(a[0][3], e);
                    }
                }
                function c(e) {
                    l("next", e);
                }
                function p(e) {
                    l("throw", e);
                }
                function u(e, t) {
                    e(t), a.shift(), a.length && l(a[0][0], a[0][1]);
                }
            }
            function O(e) {
                var t, n;
                return (
                    (t = {}),
                    r("next"),
                    r("throw", function (e) {
                        throw e;
                    }),
                    r("return"),
                    (t[Symbol.iterator] = function () {
                        return this;
                    }),
                    t
                );
                function r(r, o) {
                    t[r] = e[r]
                        ? function (t) {
                              return (n = !n) ? { value: k(e[r](t)), done: !1 } : o ? o(t) : t;
                          }
                        : o;
                }
            }
            function P(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t,
                    n = e[Symbol.asyncIterator];
                return n
                    ? n.call(e)
                    : ((e = v(e)),
                      (t = {}),
                      r("next"),
                      r("throw"),
                      r("return"),
                      (t[Symbol.asyncIterator] = function () {
                          return this;
                      }),
                      t);
                function r(n) {
                    t[n] =
                        e[n] &&
                        function (t) {
                            return new Promise(function (r, o) {
                                !(function (e, t, n, r) {
                                    Promise.resolve(r).then(function (t) {
                                        e({ value: t, done: n });
                                    }, t);
                                })(r, o, (t = e[n](t)).done, t.value);
                            });
                        };
                }
            }
            function j(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", { value: t }) : (e.raw = t), e;
            }
            var T = Object.create
                ? function (e, t) {
                      Object.defineProperty(e, "default", { enumerable: !0, value: t });
                  }
                : function (e, t) {
                      e.default = t;
                  };
            function x(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e) for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && m(t, e, n);
                return T(t, e), t;
            }
            function S(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function A(e, t, n, r) {
                if ("a" === n && !r) throw TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e);
            }
            function V(e, t, n, r, o) {
                if ("m" === r) throw TypeError("Private method is not writable");
                if ("a" === r && !o) throw TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === r ? o.call(e, n) : o ? (o.value = n) : t.set(e, n), n;
            }
            function I(e, t) {
                if (null === t || ("object" != typeof t && "function" != typeof t)) throw TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t);
            }
            function N(e, t, n) {
                if (null != t) {
                    var r;
                    if ("object" != typeof t && "function" != typeof t) throw TypeError("Object expected.");
                    if (n) {
                        if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                        r = t[Symbol.asyncDispose];
                    }
                    if (void 0 === r) {
                        if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                        r = t[Symbol.dispose];
                    }
                    if ("function" != typeof r) throw TypeError("Object not disposable.");
                    e.stack.push({ value: t, dispose: r, async: n });
                } else n && e.stack.push({ async: !0 });
                return t;
            }
            var C =
                "function" == typeof SuppressedError
                    ? SuppressedError
                    : function (e, t, n) {
                          var r = Error(n);
                          return (r.name = "SuppressedError"), (r.error = e), (r.suppressed = t), r;
                      };
            function H(e) {
                function t(t) {
                    (e.error = e.hasError ? new C(t, e.error, "An error was suppressed during disposal.") : t), (e.hasError = !0);
                }
                return (function n() {
                    for (; e.stack.length; ) {
                        var r = e.stack.pop();
                        try {
                            var o = r.dispose && r.dispose.call(r.value);
                            if (r.async)
                                return Promise.resolve(o).then(n, function (e) {
                                    return t(e), n();
                                });
                        } catch (e) {
                            t(e);
                        }
                    }
                    if (e.hasError) throw e.error;
                })();
            }
            t.default = {
                __extends: o,
                __assign: a,
                __rest: i,
                __decorate: l,
                __param: c,
                __metadata: d,
                __awaiter: h,
                __generator: g,
                __createBinding: m,
                __exportStar: y,
                __values: v,
                __read: b,
                __spread: _,
                __spreadArrays: w,
                __spreadArray: G,
                __await: k,
                __asyncGenerator: E,
                __asyncDelegator: O,
                __asyncValues: P,
                __makeTemplateObject: j,
                __importStar: x,
                __importDefault: S,
                __classPrivateFieldGet: A,
                __classPrivateFieldSet: V,
                __classPrivateFieldIn: I,
                __addDisposableResource: N,
                __disposeResources: H,
            };
        },
    },
    function (e) {
        var t = function (t) {
            return e((e.s = t));
        };
        e.O(0, [774, 179], function () {
            return t(6840), t(9090);
        }),
            (_N_E = e.O());
    },
]);
