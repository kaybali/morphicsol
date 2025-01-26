(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405],
    {
        8312: function (e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return s(7198);
                },
            ]);
        },
        7198: function (e, t, s) {
            "use strict";
            s.r(t),
                s.d(t, {
                    __N_SSP: function () {
                        return D;
                    },
                    default: function () {
                        return M;
                    },
                });
            var r = s(5893),
                i = s(6944),
                a = s(7294),
                n = s(4304),
                A = s(1664),
                l = s.n(A),
                o = s(7861),
                c = s(8584),
                m = s(2230),
                d = () => {
                    let e = (0, a.useRef)(null),
                        t = (0, a.useRef)(null),
                        s = (0, a.useRef)(null),
                        i = (0, a.useRef)(null);
                    return (
                        (0, a.useEffect)(() => {
                            let r = () => {
                                    if (t.current && s.current && i.current) {
                                        var r, a;
                                        i.current.getBoundingClientRect().top;
                                        let n = i.current.offsetHeight,
                                            A = window.innerHeight,
                                            l = window.scrollY,
                                            o = s.current.querySelectorAll(".char"),
                                            c = o.length,
                                            m = 0.5 * n,
                                            d = 0.9 * n;
                                        o.forEach((e, t) => {
                                            let s = m + (t * (d - m)) / c;
                                            e.style.opacity = Math.min(1, Math.max(0.3, (l - s) / (s + (d - m) / c - s))).toString();
                                        });
                                        let h = Math.min(1, 0.95 + (l / (n / 2)) * 0.1);
                                        (t.current.style.transform = "scale(".concat(h, ")")),
                                            h >= 1
                                                ? (null === (r = e.current) || void 0 === r || r.classList.add("rounded-none"), (s.current.style.opacity = "1"))
                                                : (null === (a = e.current) || void 0 === a || a.classList.remove("rounded-none"), (s.current.style.opacity = "0")),
                                            l > 0.1 * A ? e.current && (e.current.style.opacity = "0.7") : e.current && (e.current.style.opacity = "1");
                                    }
                                },
                                a = new IntersectionObserver(
                                    (e) => {
                                        let [t] = e;
                                        t.isIntersecting ? (window.addEventListener("scroll", r), r()) : window.removeEventListener("scroll", r);
                                    },
                                    { threshold: 0.25 }
                                );
                            return (
                                i.current && a.observe(i.current),
                                () => {
                                    window.removeEventListener("scroll", r), i.current && a.unobserve(i.current);
                                }
                            );
                        }, []),
                        (0, r.jsxs)("div", {
                            className: "flex flex-col items-center gap-12 sm:gap-8 pt-[84px] pb-24",
                            children: [
                                (0, r.jsxs)("section", {
                                    className: "flex flex-col items-center gap-6 pt-8",
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: "flex flex-col max-w-[580px] md:max-w-[360px] text-center gap-4",
                                            children: [
                                                (0, r.jsx)("div", {
                                                    className: "flex flex-col",
                                                    children: (0, r.jsx)("div", {
                                                        className: "flex flex-1 justify-center",
                                                        children: (0, r.jsx)("h1", { className: "text-[80px] md:text-[48px] leading-none font-medium tracking-tight text-neutral-100", children: "A new era of storytelling." }),
                                                    }),
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: "flex flex-col px-4",
                                                    children: (0, r.jsx)("div", {
                                                        className: "flex flex-col flex-1 items-start justify-center",
                                                        children: (0, r.jsx)("p", { className: "text-xl md:text-md text-neutral-500 tracking-tight", children: "Transforming the future of storytelling using breakthrough technologies." }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "flex flex-row items-center justify-center gap-[8px]",
                                            children: [
                                                (0, r.jsx)(l(), {
                                                    href: "www.x.com",
                                                    target: "_blank",
                                                    onClick: () => (0, n.B)("join_beta", { source: "navlink" }),
                                                    children: (0, r.jsx)(c.Z, { size: "medium", variant: "primary", children: "Join Beta" }),
                                                }),
                                                (0, r.jsx)(l(), { href: "www.x.com", target: "_blank", children: (0, r.jsx)(c.Z, { size: "medium", icon: o.D, variant: "secondary", children: "Join Discord" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("section", {
                                    className: "relative h-[200vh] w-full mb-[110vh]",
                                    ref: i,
                                    children: (0, r.jsx)("div", {
                                        className: "sticky top-0 flex justify-center w-full",
                                        children: (0, r.jsx)("div", {
                                            className: "overflow-hidden flex justify-center",
                                            children: (0, r.jsxs)("div", {
                                                className: "absolute z-10 scale-95 mx-auto w-full aspect-video transition-opacity duration-500",
                                                ref: t,
                                                children: [
                                                    (0, r.jsxs)("div", {
                                                        className: "relative",
                                                        children: [
                                                            (0, r.jsx)("video", {
                                                                muted: !0,
                                                                autoPlay: !0,
                                                                playsInline: !0,
                                                                loop: !0,
                                                                controls: !1,
                                                                ref: e,
                                                                id: "top-video",
                                                                className: "rounded-3xl object-cover w-full h-screen transition-all relative z-10 outline outline-1 outline-white/[8%] -outline-offset-1",
                                                                children: (0, r.jsx)("source", { src: "https://studio.morphic.com/website/assets/video/hero.mp4", type: "video/mp4" }),
                                                            }),
                                                            (0, r.jsx)("div", { className: "absolute bottom-2 right-2 text-neutral-100", children: "Created with Morphic Studio." }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className: "absolute inset-0 opacity-50 transition-opacity px-8 lg:px-8 md:px-6 sm:px-4 transform blur-[100px] z-0",
                                                        children: (0, r.jsx)("video", {
                                                            muted: !0,
                                                            autoPlay: !0,
                                                            playsInline: !0,
                                                            loop: !0,
                                                            controls: !1,
                                                            className: "rounded-3xl object-cover w-full h-screen outline outline-1 outline-white/[8%] -outline-offset-1",
                                                            children: (0, r.jsx)("source", { src: "https://studio.morphic.com/website/assets/video/flowers.mp4", type: "video/mp4" }),
                                                        }),
                                                    }),
                                                    (0, r.jsx)("div", {
                                                        className:
                                                            "absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 transition-opacity duration-500 flex flex-col items-center opacity-0 justify-center w-full z-20 px-8 lg:px-8 md:px-6 sm:px-4 md:max-w-none max-w-[721px]",
                                                        ref: s,
                                                        children: (0, r.jsx)("h2", {
                                                            className: "text-[40px] lg:text-[32px] leading-tight font-medium text-neutral-100 absolute text-center lg:px-8",
                                                            children: "Stories have the power to shape the world. Our mission is to fuel profound narratives with advanced machine learning, turning visions into cinematic realities."
                                                                .split("")
                                                                .map((e, t) => (0, r.jsx)("span", { className: "char transition-opacity duration-500", style: { opacity: 0 }, children: e }, t)),
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(m.Z, {}),
                            ],
                        })
                    );
                },
                h = s(5675),
                x = s.n(h),
                u = s(4397);
            let g = [
                {
                    type: "image",
                    src: {
                        src: "/_next/static/media/carousel1.b4d31672.jpg",
                        height: 1768,
                        width: 3004,
                        blurDataURL:
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABQEBAQAAAAAAAAAAAAAAAAAAAQT/2gAMAwEAAhADEAAAAL4Jf//EABwQAAIABwAAAAAAAAAAAAAAAAECAAMRExQhMv/aAAgBAQABPwCY9vF0SzqXVieTQx//xAAYEQACAwAAAAAAAAAAAAAAAAAAAwIhIv/aAAgBAgEBPwCLmXo//8QAFhEAAwAAAAAAAAAAAAAAAAAAAAEh/9oACAEDAQE/AHD/2Q==",
                        blurWidth: 8,
                        blurHeight: 5,
                    },
                    alt: "Image 1",
                },
                {
                    type: "image",
                    src: {
                        src: "/_next/static/media/carousel2.e0bd5a4f.png",
                        height: 744,
                        width: 1264,
                        blurDataURL:
                            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAr0lEQVR4nAWATYsBYQCAn3dWrZVZLZlSUsuN8tHc5eCk/C0XJ/kZyo24yMEFIYUc5WPKR0YkDOaV6M7X9uGsCOtusrVcuB4+vH+Sf9vAr2pSFKpt6TbPKLcDG08cPRpgN+ngtE4EE3lEqdKXKifk64rm9sOPg2Fviak6GLw1RLGxkmGvgu/5wDh+EbjMSOlJ6tM9198Iotwc2e1aS+RCTjwxndp4Tjr4zWJtEMpk5Qcl50Qlzz7wVwAAAABJRU5ErkJggg==",
                        blurWidth: 8,
                        blurHeight: 5,
                    },
                    alt: "Image 2",
                },
                { type: "video", src: "https://studio.morphic.com/website/assets/video/flowers.mp4", alt: "Video" },
                {
                    type: "image",
                    src: {
                        src: "/_next/static/media/carousel4.c459c6b4.jpg",
                        height: 1768,
                        width: 3004,
                        blurDataURL:
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAABP/aAAwDAQACEAMQAAAAuAIf/8QAGxAAAQQDAAAAAAAAAAAAAAAAAgABAxEEBkL/2gAIAQEAAT8A2g2BsG4xO5ul/8QAGREAAgMBAAAAAAAAAAAAAAAAAgMAAQQh/9oACAECAQE/ANevSixFbSGuz//EABcRAQEBAQAAAAAAAAAAAAAAAAIBAwD/2gAIAQMBAT8A2xybtQNvf//Z",
                        blurWidth: 8,
                        blurHeight: 5,
                    },
                    alt: "Image 4",
                },
            ];
            var p = (e) => {
                let { className: t, onPrevBtnClick: s, onNextBtnCLick: i } = e,
                    [n, A] = (0, a.useState)(0),
                    [l, o] = (0, a.useState)(0),
                    c = (0, a.useRef)(0),
                    m = (0, a.useRef)(0),
                    d = (0, a.useRef)(null),
                    h = (0, a.useRef)(null),
                    p = () => {
                        A((e) => (e + 1) % g.length), o(0);
                    },
                    f = () => {
                        A((e) => (e - 1 + g.length) % g.length), o(0);
                    };
                return (
                    (0, a.useEffect)(() => {
                        "video" === g[n].type && d.current && ((d.current.muted = !0), d.current.play()), "video" === g[n].type && h.current && ((h.current.muted = !0), h.current.play());
                    }, [n]),
                    (0, a.useEffect)(() => {
                        let e = setTimeout(() => {
                            o((e) => (e >= 100 ? (p(), i(), 0) : e + 1));
                        }, 40);
                        return () => clearTimeout(e);
                    }, [l, i]),
                    (0, r.jsxs)("div", {
                        className: "relative flex justify-center w-full max-w-[44rem]",
                        children: [
                            "image" === g[n].type
                                ? (0, r.jsx)(x(), { src: g[n].src, alt: g[n].alt, className: "absolute inset-0 opacity-50 w-[90%] mx-auto blur-xl" })
                                : (0, r.jsx)("video", { src: g[n].src, className: "absolute inset-0 opacity-50 object-cover w-[90%] mx-auto blur-xl", ref: h, muted: !0, controls: !1, playsInline: !0 }),
                            (0, r.jsx)("div", {
                                className: (0, u.cx)("relative z-10 w-full overflow-hidden rounded-xl border border-white/[0.08] aspect-[158/93]", t),
                                children: (0, r.jsx)("div", {
                                    className: "flex transition-transform duration-500",
                                    style: { transform: "translateX(-".concat(100 * n, "%)") },
                                    onTouchStart: (e) => {
                                        (c.current = e.touches[0].clientX), (m.current = c.current);
                                    },
                                    onTouchMove: (e) => {
                                        m.current = e.touches[0].clientX;
                                    },
                                    onTouchEnd: () => {
                                        let e = m.current - c.current;
                                        e > 50 ? (f(), s()) : e < -50 && (p(), i());
                                    },
                                    children: g.map((e, s) =>
                                        (0, r.jsx)(
                                            "div",
                                            {
                                                className: (0, u.cx)("relative flex-shrink-0 w-full aspect-[158/93]", t),
                                                children:
                                                    "image" === e.type
                                                        ? (0, r.jsx)(x(), { src: e.src, alt: e.alt, layout: "fill", objectFit: "cover" })
                                                        : (0, r.jsx)("video", { src: e.src, className: "w-full h-full object-cover", ref: d, muted: !0, controls: !1, playsInline: !0 }),
                                            },
                                            s
                                        )
                                    ),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: "absolute z-[999] top-1/2 left-0 sm:hidden",
                                children: (0, r.jsx)("button", {
                                    className: "h-6 w-6 bg-neutral-850 hover:text-neutral-200 transition-colors duration-150 hover:bg-neutral-800 text-neutral-400 text-[larger] rounded-full p-1 flex justify-center items-center",
                                    onClick: () => {
                                        f(), s();
                                    },
                                    "aria-label": "prev-btn",
                                    children: (0, r.jsx)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, r.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d:
                                                "M10.4717 2.86201C10.7321 3.12236 10.7321 3.54447 10.4717 3.80482L6.27646 8.00008L10.4717 12.1953C10.7321 12.4557 10.7321 12.8778 10.4717 13.1381C10.2114 13.3985 9.78927 13.3985 9.52892 13.1381L4.86226 8.47148C4.60193 8.21115 4.60193 7.78901 4.86226 7.52868L9.52892 2.86201C9.78927 2.60166 10.2114 2.60166 10.4717 2.86201Z",
                                            fill: "currentColor",
                                        }),
                                    }),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: "absolute top-1/2 right-0 sm:hidden",
                                children: (0, r.jsx)("button", {
                                    className: "h-6 w-6 bg-neutral-850 hover:text-neutral-200 transition-colors duration-150 hover:bg-neutral-800 text-neutral-400 text-[larger] rounded-full p-1 flex justify-center items-center",
                                    onClick: () => {
                                        p(), i();
                                    },
                                    "aria-label": "next-btn",
                                    children: (0, r.jsx)("svg", {
                                        width: "16",
                                        height: "16",
                                        viewBox: "0 0 16 16",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, r.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d:
                                                "M5.52827 13.138C5.26792 12.8776 5.26792 12.4555 5.52827 12.1952L9.72354 7.99992L5.52827 3.80465C5.26792 3.54432 5.26792 3.12219 5.52827 2.86185C5.78862 2.60152 6.21073 2.60152 6.47108 2.86185L11.1377 7.52852C11.3981 7.78885 11.3981 8.21099 11.1377 8.47132L6.47108 13.138C6.21073 13.3983 5.78862 13.3983 5.52827 13.138Z",
                                            fill: "currentColor",
                                        }),
                                    }),
                                }),
                            }),
                            (0, r.jsx)("div", {
                                className: "absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-1",
                                children: g.map((e, t) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: "w-10 h-1 rounded-[100px] flex-1 bg-neutral-800 relative overflow-hidden",
                                            children: t === n && (0, r.jsx)("div", { className: "absolute left-0 top-0 h-full bg-neutral-100 rounded-full", style: { width: "".concat(l, "%") } }),
                                        },
                                        t
                                    )
                                ),
                            }),
                        ],
                    })
                );
            };
            let f = [
                { discordCommand: "/imagine", assetName: [], prompt: "a girl with with purple hair and large expressive eyes" },
                { discordCommand: "/animate", assetName: ["street.png"], prompt: "purple flowers valley with watch tower" },
                { discordCommand: "/style", assetName: ["flowers.mp4"], prompt: "Convert video into selected style" },
                { discordCommand: "/transform", assetName: ["Sketch.png"], prompt: "A girl with purple hair" },
            ];
            var w = (e) => {
                let { handleIntersection: t } = e,
                    [s, i] = (0, a.useState)(0),
                    n = (0, a.useRef)(null);
                return (
                    (0, a.useEffect)(() => {
                        let e = new IntersectionObserver(
                            (s) => {
                                s.forEach((s) => {
                                    s.isIntersecting && (t(), e.disconnect());
                                });
                            },
                            { rootMargin: "0px", threshold: 0.1 }
                        );
                        return (
                            n.current && e.observe(n.current),
                            () => {
                                n.current && e.unobserve(n.current);
                            }
                        );
                    }, []),
                    (0, r.jsx)("main", {
                        className: "container",
                        children: (0, r.jsxs)("section", {
                            ref: n,
                            className: "font-soehne flex flex-col items-center justify-center mb-32 sm:mb-14 sm:mt-10",
                            children: [
                                (0, r.jsxs)("header", {
                                    className: "text-center mt-[14px]",
                                    children: [
                                        (0, r.jsx)("h1", {
                                            className: "text-neutral-100 text-[36px] font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem] sm:-tracking-[1px]",
                                            children: "Morphic Playground.",
                                        }),
                                        (0, r.jsx)("p", {
                                            className: "text-neutral-500 text-[36px] text-balance font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem]  sm:-tracking-[1px]",
                                            children: "Create assets, with a simple message.",
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(l(), { href: "https://discord.gg/AqGXhtzZSZ", target: "_blank", children: (0, r.jsx)(c.Z, { variant: "primary", size: "medium", className: "mt-6 mb-10", icon: o.D, children: "Join Discord" }) }),
                                (0, r.jsx)(p, {
                                    className: "max-w-[632px]",
                                    onNextBtnCLick: () => {
                                        i((e) => (e + 1) % f.length);
                                    },
                                    onPrevBtnClick: () => {
                                        i((e) => (e - 1 + f.length) % f.length);
                                    },
                                }),
                                (0, r.jsx)("footer", {
                                    className: "w-[499px] sm:w-full mt-11 p-1 rounded-[10px] bg-neutral-900 border border-neutral-850 shadow-[0px_2px_4px_0px_#00000029]",
                                    children: (0, r.jsx)("div", {
                                        className: "flex items-center px-2 py-1 rounded-[6px] border border-neutral-850 shadow-[0px_0px_0px_1px_#00000080]",
                                        children: (0, r.jsxs)("p", {
                                            children: [
                                                (0, r.jsx)("span", { className: "text-sm text-blue-600 mr-1.5", children: f[s].discordCommand }),
                                                f[s].assetName.length > 0 && f[s].assetName.map((e, t) => (0, r.jsx)("span", { className: "text-sm px-2 py-1 bg-neutral-800 rounded text-neutral-400 mr-1.5", children: e }, t)),
                                                (0, r.jsx)("span", { className: "text-sm text-neutral-100", children: f[s].prompt }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            };
            function j(e) {
                let { post: t } = e;
                return (0, r.jsxs)(l(), {
                    href: "/blog/".concat(t.slug),
                    className: "w-full max-w-[470px]",
                    children: [
                        t.feature_image && (0, r.jsx)(x(), { src: t.feature_image, alt: "playground-discord", className: "w-full aspect-[235/132] object-contain rounded-xl border border-[#212121]", width: 470, height: 264 }),
                        (0, r.jsx)("h4", { className: "text-neutral-100 text-lg font-semibold mt-4 mb-2", children: t.title }),
                        (0, r.jsx)(c.Z, { variant: "secondary", size: "medium", className: "sm:hidden", children: "Learn more" }),
                    ],
                });
            }
            var b = (e) => {
                    let { posts: t } = e;
                    return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsxs)("main", {
                            className: "container sm:px-[1rem] flex flex-col items-center justify-center",
                            children: [
                                (0, r.jsxs)("section", {
                                    className: "font-soehne sm:mt-6 sm:mb-14 mt-16 mb-36",
                                    children: [
                                        (0, r.jsxs)("header", {
                                            className: "flex justify-center gap-4 sm:gap-2 sm:flex-col sm:items-start",
                                            children: [
                                                (0, r.jsxs)("div", {
                                                    className: "w-[470px] lg:flex-shrink flex-shrink-0 sm:w-full",
                                                    children: [
                                                        (0, r.jsx)("h1", { className: "text-neutral-100 font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem]", children: "Pioneering AI Research." }),
                                                        (0, r.jsx)("p", {
                                                            className: "text-neutral-500 font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem] sm:-tracking-[1px]",
                                                            children: "For Storytelling Frontiers.",
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)("div", {
                                                    className: "text-md text-neutral-500 leading-normal text-balance max-w-[470px]",
                                                    children:
                                                        "Leading cutting-edge innovations in visual large-scale models, 3D asset generation, and more. We are focused on revolutionizing creative possibilities with AI-driven advancements.",
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)("div", { className: "grid grid-cols-2 sm:grid-cols-1 gap-4 mt-4 mx-auto", children: t.slice(0, 2).map((e, t) => (0, r.jsx)(j, { post: e }, t)) }),
                                    ],
                                }),
                                (0, r.jsxs)("section", {
                                    className: "sm:mt-6 mt-16 sm:mb-28 mb-32",
                                    children: [
                                        (0, r.jsxs)("h2", {
                                            className: "sm:text-[2.1rem]/[2.8rem] font-medium text-balance text-4xl text-neutral-100 text-center sm:mb-8 mb-10",
                                            children: ["Transforming the future of storytelling ", (0, r.jsx)("br", {}), "using breakthrough technologies."],
                                        }),
                                        (0, r.jsxs)("div", {
                                            className: "flex gap-2 justify-center",
                                            children: [
                                                (0, r.jsx)(l(), {
                                                    href: "https://studio.morphic.com/",
                                                    target: "_blank",
                                                    onClick: () => (0, n.B)("join_beta", { source: "navlink" }),
                                                    children: (0, r.jsx)(c.Z, { variant: "primary", size: "medium", children: "Join Beta" }),
                                                }),
                                                (0, r.jsx)(l(), { href: "https://discord.gg/AqGXhtzZSZ", target: "_blank", children: (0, r.jsx)(c.Z, { variant: "secondary", size: "medium", icon: o.D, children: "Join Discord" }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                v = (e) => {
                    let { imageUrl: t, heading: s, content: i, info: a, className: n } = e;
                    return (0, r.jsxs)("div", {
                        className: (0, u.cx)("relative w-full max-w-sm overflow-hidden rounded-lg shadow-lg outline outline-2 outline-white/[8%] -outline-offset-1 sm:rounded-xl", n),
                        children: [
                            (0, r.jsx)("div", { className: "absolute inset-0", children: (0, r.jsx)(x(), { src: t, alt: "Background", layout: "fill", objectFit: "cover" }) }),
                            (0, r.jsxs)("div", {
                                className: "relative p-4 h-full flex flex-col justify-between",
                                children: [
                                    (0, r.jsx)("h2", { className: "text-xl font-medium text-neutral-100", children: s }),
                                    (0, r.jsxs)("div", {
                                        className: "h-[98px]",
                                        children: [
                                            a && (0, r.jsx)("p", { className: "px-2 py-1 w-fit leading-[14px] rounded-md text-xs font-medium backdrop-blur-lg bg-blue-600/20 text-blue-600", children: a }),
                                            !a && (0, r.jsx)("br", {}),
                                            (0, r.jsx)("p", { className: "mt-2 text-md font-normal text-neutral-200 leading-[22.4px]", children: i }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                };
            let y = [
                {
                    heading: "Creatives",
                    content: "A canvas and end-to-end video editor that merges advanced AI with a user-friendly design.",
                    imageUrl: {
                        src: "/_next/static/media/card1.7036c553.jpg",
                        height: 864,
                        width: 616,
                        blurDataURL:
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAAhAn/xAAbEAADAAIDAAAAAAAAAAAAAAABAgMAQQQFUf/aAAgBAQABPwDidyUWprNXZ6FySTvwaz//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",
                        blurWidth: 6,
                        blurHeight: 8,
                    },
                },
                {
                    heading: "Game Designers",
                    info: "Coming soon",
                    content: "Providing tools for creating interactive gaming experiences. Reducing time to market to less than half.",
                    imageUrl: {
                        src: "/_next/static/media/card2.8fb9a770.jpg",
                        height: 864,
                        width: 616,
                        blurDataURL:
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJyK/8QAGhAAAgIDAAAAAAAAAAAAAAAAAQIEEgAFE//aAAgBAQABPwCTtZCMvCQyBBUVOf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
                        blurWidth: 6,
                        blurHeight: 8,
                    },
                },
                {
                    heading: "Filmmakers",
                    info: "Coming soon",
                    content: "Serving as a production partner and crafting inspiring stories in-house.",
                    imageUrl: {
                        src: "/_next/static/media/card3.1eba9beb.jpg",
                        height: 864,
                        width: 616,
                        blurDataURL:
                            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJ4KP//EABsQAAICAwEAAAAAAAAAAAAAAAECAwQABRIy/9oACAEBAAE/AIr2sEk3VdmQkcKT5z//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8Apn//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwCP/9k=",
                        blurWidth: 6,
                        blurHeight: 8,
                    },
                },
            ];
            var C = () =>
                    (0, r.jsx)("main", {
                        className: "max-w-[948px] mx-auto sm:mb-10 md:p-4 mb-[143px]",
                        children: (0, r.jsxs)("section", {
                            className: "font-soehne flex flex-col justify-center",
                            children: [
                                (0, r.jsxs)("header", {
                                    className: "mt-[14px]",
                                    children: [
                                        (0, r.jsx)("h1", { className: "text-neutral-100 font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem] sm:-tracking-[1px]", children: "The power of Morphic." }),
                                        (0, r.jsx)("p", { className: "text-neutral-500 font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem] sm:-tracking-[1px]", children: "Across Industries." }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: "flex justify-center items-center sm:flex-col gap-4 mt-6",
                                    children: y.map((e, t) =>
                                        (0, r.jsxs)(
                                            "div",
                                            {
                                                className: "relative",
                                                children: [
                                                    (0, r.jsx)(x(), { src: e.imageUrl, alt: e.heading, layout: "fill", objectFit: "cover", className: "absolute w-full h-[428px] mt-3 inset-0 bg-cover bg-center filter blur-xl" }),
                                                    (0, r.jsx)(v, { heading: e.heading, content: e.content, imageUrl: e.imageUrl, info: e.info, className: "h-[432px]" }, t),
                                                ],
                                            },
                                            t
                                        )
                                    ),
                                }),
                            ],
                        }),
                    }),
                E = s(4298),
                N = s.n(E);
            function Q(e) {
                return (0, r.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    className: (0, u.cx)(e.className),
                    children: (0, r.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d:
                            "M13.8047 3.13807C14.0651 2.87772 14.0651 2.45561 13.8047 2.19526C13.5443 1.93491 13.1223 1.93491 12.8619 2.19526L8.94233 6.11483L6.17009 2.27634C6.04475 2.1028 5.8437 2 5.62963 2H2.66667C2.41631 2 2.18707 2.14026 2.07309 2.36317C1.95912 2.58607 1.97964 2.85404 2.12621 3.05699L6.26692 8.79027L2.19526 12.8619C1.93491 13.1223 1.93491 13.5444 2.19526 13.8047C2.45561 14.0651 2.87772 14.0651 3.13807 13.8047L7.05767 9.88513L9.82993 13.7237C9.95527 13.8972 10.1563 14 10.3704 14H13.3333C13.5837 14 13.8129 13.8597 13.9269 13.6369C14.0409 13.4139 14.0204 13.1459 13.8738 12.943L9.73307 7.20973L13.8047 3.13807ZM3.97051 3.33333L10.7113 12.6667H12.0295L5.28876 3.33333H3.97051Z",
                        fill: "currentColor",
                    }),
                });
            }
            var B = (e) => {
                let { isTwitterVisible: t } = e,
                    [s, i] = (0, a.useState)(!1),
                    n = (0, a.useRef)(null);
                return (0, r.jsx)("main", {
                    className: "container mb-28 font-soehne",
                    children: (0, r.jsxs)("section", {
                        ref: n,
                        children: [
                            (0, r.jsxs)("header", {
                                className: "text-center mt-5",
                                children: [
                                    (0, r.jsx)("h1", { className: "text-neutral-100 font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem]", children: "Built for creators." }),
                                    (0, r.jsx)("p", { className: "text-neutral-500 font-medium sm:text-[1.75rem] text-4xl text-medium leading-[3rem] sm:leading-[2.5rem]", children: "Loved by our community." }),
                                ],
                            }),
                            (0, r.jsxs)("div", {
                                className: "relative max-w-[852px] mx-auto flex md:flex-col flex-wrap gap-4 sm:gap-0 mt-10",
                                children: [
                                    (0, r.jsx)("div", { className: "absolute inset-0 z-10 bg-[#493D3D] mix-blend-overlay pointer-events-none" }),
                                    (0, r.jsxs)("div", {
                                        className: "flex-1 sm:w-full",
                                        children: [
                                            t &&
                                                (0, r.jsxs)("blockquote", {
                                                    className: "twitter-tweet mb-4",
                                                    "data-theme": "dark",
                                                    children: [
                                                        (0, r.jsxs)("p", {
                                                            lang: "en",
                                                            dir: "ltr",
                                                            children: [
                                                                "what if your Enlightened Being was alive? \uD83D\uDC40",
                                                                " ",
                                                                (0, r.jsx)("a", { href: "https://twitter.com/0xanmol?ref_src=twsrc%5Etfw", children: "@0xanmol" }),
                                                                " ",
                                                                (0, r.jsx)("br", {}),
                                                                (0, r.jsx)("br", {}),
                                                                "made with",
                                                                " ",
                                                                (0, r.jsx)("a", { href: "https://twitter.com/morphic?ref_src=twsrc%5Etfw", children: "@morphic" }),
                                                                (0, r.jsx)("a", { href: "https://t.co/iSvYqzQlyR", children: "pic.twitter.com/iSvYqzQlyR" }),
                                                            ],
                                                        }),
                                                        "— ishika.eth (@IshikaMukerji)",
                                                        " ",
                                                        (0, r.jsx)("a", { href: "https://twitter.com/IshikaMukerji/status/1790120178568577248?ref_src=twsrc%5Etfw", children: "May 13, 2024" }),
                                                    ],
                                                }),
                                            (0, r.jsx)("div", {
                                                style: { display: s ? "block" : "none" },
                                                children:
                                                    t &&
                                                    (0, r.jsxs)("blockquote", {
                                                        className: "twitter-tweet",
                                                        "data-theme": "dark",
                                                        children: [
                                                            (0, r.jsxs)("p", {
                                                                lang: "en",
                                                                dir: "ltr",
                                                                children: [
                                                                    "Want a sneak peek of what's possible with Morphic?",
                                                                    (0, r.jsx)("br", {}),
                                                                    (0, r.jsx)("br", {}),
                                                                    "Join Morphic Playground:",
                                                                    " ",
                                                                    (0, r.jsx)("a", { href: "https://t.co/50FAN7HQy6", children: "https://t.co/50FAN7HQy6" }),
                                                                    (0, r.jsx)("br", {}),
                                                                    (0, r.jsx)("br", {}),
                                                                    "Explore Morphic's capabilities, and connect with the team and community.",
                                                                    (0, r.jsx)("br", {}),
                                                                    (0, r.jsx)("br", {}),
                                                                    "Anime Fans! Bring manga, fan fiction, videos, and sketches to life! Check out fun generations below.",
                                                                ],
                                                            }),
                                                            "— Morphic (@morphic)",
                                                            " ",
                                                            (0, r.jsx)("a", { href: "https://twitter.com/morphicfilms/status/1803837951022964905?ref_src=twsrc%5Etfw", children: "June 20, 2024" }),
                                                        ],
                                                    }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsxs)("div", {
                                        className: "flex-1 sm:w-full",
                                        children: [
                                            t &&
                                                (0, r.jsxs)("blockquote", {
                                                    className: "twitter-tweet",
                                                    "data-theme": "dark",
                                                    children: [
                                                        (0, r.jsxs)("p", {
                                                            lang: "en",
                                                            dir: "ltr",
                                                            children: [
                                                                "Style transfer using Morphic Studio by",
                                                                " ",
                                                                (0, r.jsx)("a", { href: "https://twitter.com/morphic?ref_src=twsrc%5Etfw", children: "@morphic" }),
                                                                ". \uD83D\uDD25",
                                                                (0, r.jsx)("br", {}),
                                                                (0, r.jsx)("br", {}),
                                                                "Totally love the results. this is still early and we are improving each passing day! \uD83D\uDE80",
                                                                (0, r.jsx)("br", {}),
                                                                (0, r.jsx)("br", {}),
                                                                "Join the waitlist: ",
                                                                (0, r.jsx)("a", { href: "https://t.co/VrRIQrf0qs", children: "https://t.co/VrRIQrf0qs" }),
                                                                " ",
                                                                (0, r.jsx)("a", { href: "https://t.co/KUuR5WRp3x", children: "pic.twitter.com/KUuR5WRp3x" }),
                                                            ],
                                                        }),
                                                        "— Dalsukh Tapaniya (@djtapaniya)",
                                                        " ",
                                                        (0, r.jsx)("a", { href: "https://twitter.com/djtapaniya/status/1789009083086885037?ref_src=twsrc%5Etfw", children: "May 10, 2024" }),
                                                    ],
                                                }),
                                            (0, r.jsx)("div", {
                                                style: { display: s ? "block" : "none" },
                                                children:
                                                    t &&
                                                    (0, r.jsxs)("blockquote", {
                                                        className: "twitter-tweet",
                                                        "data-theme": "dark",
                                                        children: [
                                                            (0, r.jsxs)("p", {
                                                                lang: "en",
                                                                dir: "ltr",
                                                                children: [
                                                                    "Excited to announce that I have been tinkering around with Morphic for the past few months. ",
                                                                    (0, r.jsx)("br", {}),
                                                                    (0, r.jsx)("br", {}),
                                                                    "As a big anime fan and movie buff, I've always wanted to do something in the animation/movie space. With Morphic, we are making Gen-AI a part of the creative process. ",
                                                                    (0, r.jsx)("br", {}),
                                                                    (0, r.jsx)("br", {}),
                                                                    "Extremely proud… ",
                                                                    (0, r.jsx)("a", { href: "https://t.co/bNFVHyaweb", children: "https://t.co/bNFVHyaweb" }),
                                                                ],
                                                            }),
                                                            "— Jaynti Kanani (JD) (@jdkanani)",
                                                            " ",
                                                            (0, r.jsx)("a", { href: "https://twitter.com/jdkanani/status/1768687403001086366?ref_src=twsrc%5Etfw", children: "March 15, 2024" }),
                                                        ],
                                                    }),
                                            }),
                                        ],
                                    }),
                                    t && (0, r.jsx)(N(), { src: "https://platform.twitter.com/widgets.js", strategy: "lazyOnload" }),
                                    (0, r.jsx)("div", {
                                        className: "absolute bottom-0 w-full h-40 flex justify-center mt-4 gap-2 bg-gradient-black-transparent z-40",
                                        children: (0, r.jsxs)("div", {
                                            className: "flex items-end gap-2",
                                            children: [
                                                (0, r.jsx)(c.Z, {
                                                    variant: "primary",
                                                    size: "medium",
                                                    onClick: () => {
                                                        i(!s), n.current && s && n.current.scrollIntoView({ behavior: "smooth" });
                                                    },
                                                    children: s ? "Show less" : "Show more",
                                                }),
                                                (0, r.jsx)(l(), { href: "https://x.com/morphic", target: "_blank", children: (0, r.jsx)(c.Z, { variant: "secondary", size: "medium", icon: Q, children: "Follow Morphic" }) }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            };
            let I = {
                "@context": "https://schema.org",
                "@type": "Website",
                name: "Morphic",
                url: "https://www.morphic.com",
                description: "Morphic is transforming the future of storytelling using breakthrough technologies.",
                mainEntity: {
                    "@type": "Organization",
                    name: "Morphic",
                    url: "https://www.morphic.com",
                    logo: "https://www.morphic.com/og/og.jpg",
                    sameAs: ["https://twitter.com/morphic", "https://www.linkedin.com/company/morphicfilms"],
                    contactPoint: { "@type": "ContactPoint", email: "support@morphic.com", contactType: "Customer Service" },
                },
                about: { "@type": "CreativeWork", name: "Morphic", description: "From ideation to final story. Iterate on frames, animate your characters, use inbetweening to bring scenes to life, create your own unique style, and more." },
                potentialAction: [
                    { "@type": "JoinAction", name: "Join Beta", target: { "@type": "EntryPoint", urlTemplate: "https://studio.morphic.com/" } },
                    { "@type": "CommunicateAction", name: "Join Discord", target: { "@type": "EntryPoint", urlTemplate: "https://discord.gg/AqGXhtzZSZ" } },
                ],
                mainEntityOfPage: {
                    "@type": "FAQPage",
                    mainEntity: [
                        {
                            "@type": "Question",
                            name: "What is Morphic Studio?",
                            acceptedAnswer: { "@type": "Answer", text: "Morphic Studio is a comprehensive tool that takes you from ideation to the final story with advanced AI capabilities." },
                        },
                        {
                            "@type": "Question",
                            name: "What is Canvas?",
                            acceptedAnswer: {
                                "@type": "Answer",
                                text:
                                    "Canvas is your ultimate storyboard and generation hub. Seamless UX with powerful tools for in-depth frame editing. Iterate on frames, animate your characters, use inbetweening to bring scenes to life, create your own unique style model, and more.",
                            },
                        },
                    ],
                },
            };
            var k = s(7439),
                D = !0,
                M = (e) => {
                    let { posts: t } = e,
                        [s, n] = (0, a.useState)(!1);
                    return (0, r.jsxs)(i.Z, {
                        children: [(0, r.jsx)(k.Z, { data: I }), (0, r.jsx)(d, {}), (0, r.jsx)(w, { handleIntersection: () => n(!0) }), (0, r.jsx)(C, {}), (0, r.jsx)(B, { isTwitterVisible: s }), (0, r.jsx)(b, { posts: t })],
                    });
                };
        },
    },
    function (e) {
        e.O(0, [119, 675, 944, 904, 888, 774, 179], function () {
            return e((e.s = 8312));
        }),
            (_N_E = e.O());
    },
]);
