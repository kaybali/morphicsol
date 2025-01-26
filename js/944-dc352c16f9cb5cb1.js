"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [944],
    {
        6944: function (e, t, l) {
            l.d(t, {
                Z: function () {
                    return g;
                },
            });
            var r = l(5893),
                s = l(7294),
                i = l(4304),
                a = l(1664),
                n = l.n(a),
                o = l(8584),
                V = (e) => {
                    let { isOpen: t, toggleMenu: l } = e;
                    return (0, r.jsxs)("button", {
                        className: "relative hidden z-50 md:flex flex-col items-center justify-center w-[25px] h-[25px] focus:outline-none ml-auto",
                        onClick: l,
                        "aria-label": "hamburger-menu",
                        children: [
                            (0, r.jsx)("div", { className: "w-4 h-0.5 bg-neutral-100 mb-1 transition-transform duration-300 ".concat(t ? "transform rotate-45 translate-y-[5px]" : "") }),
                            (0, r.jsx)("div", { className: "w-4 h-0.5 bg-neutral-100 mt-1 transition-transform duration-300 ".concat(t ? "transform -rotate-45 -translate-y-[5px]" : "") }),
                        ],
                    });
                },
                d = (e) => {
                    let { items: t, isMobile: l = !1, isOpen: s = !1, closeMenu: a, menuRef: o } = e;
                    return (0, r.jsx)("div", {
                        ref: o,
                        className: "transition-all mx-auto duration-500 ".concat(l ? "md:block overflow-hidden w-full" : "flex items-center justify-center gap-0.5 md:hidden"),
                        style: l ? { maxHeight: s ? "500px" : "0", height: "auto" } : {},
                        children: (0, r.jsx)("ul", {
                            className: "".concat(l ? "flex flex-col gap-3 mb-8 py-8" : "flex items-center justify-evenly gap-4"),
                            children: t.map((e, t) =>
                                (0, r.jsx)(
                                    "li",
                                    {
                                        children: (0, r.jsx)(n(), {
                                            href: e.link,
                                            onClick: () => {
                                                (0, i.B)("navlink_click", { redirectTo: e.link, title: e.title }), l && a && a();
                                            },
                                            className: "".concat(l ? "text-2xl text-neutral-100" : "py-2 px-3 group rounded-full transition-all relative text-[#737373] hover:text-neutral-100"),
                                            rel: "noopener no-referrer",
                                            children: e.title,
                                        }),
                                    },
                                    t
                                )
                            ),
                        }),
                    });
                },
                C = l(3195);
            let c = [
                { title: "Studio", link: "/studio" },
                { title: "About", link: "/about" },
                { title: "Blog", link: "/blog" },
                { title: "Manifesto", link: "/manifesto" },
                { title: "Pricing", link: "/pricing" },
            ];
            var H = () => {
                    let [e, t] = (0, s.useState)(!1),
                        l = (0, s.useRef)(null);
                    return (0, r.jsxs)("header", {
                        className: "font-soehne fixed pt-2 w-full left-0 z-[100] md:pt-3",
                        children: [
                            (0, r.jsx)("div", {
                                className: "relative z-10 max-w-[1280px] mx-auto w-full h-full rounded-xl",
                                children: (0, r.jsxs)("div", {
                                    className: "p-2 pl-5 md:p-4 md:px-6 rounded-xl bg-black/75 backdrop-blur-lg",
                                    children: [
                                        (0, r.jsxs)("div", {
                                            className: "grid grid-cols-3 md:grid-cols-2 items-center",
                                            children: [
                                                (0, r.jsx)(n(), { href: "/", "aria-label": "Morphic Home Page", children: (0, r.jsx)(C.F, { className: "w-[108px] h-[26px] md:max-w-[120px] text-neutral-100" }) }),
                                                (0, r.jsx)(d, { items: c }),
                                                (0, r.jsx)("div", {
                                                    className: "flex gap-2 md:hidden ml-auto",
                                                    children: (0, r.jsx)(n(), {
                                                        href: "https://studio.morphic.com/",
                                                        target: "_blank",
                                                        onClick: () => (0, i.B)("join_beta", { source: "navlink" }),
                                                        children: (0, r.jsx)(o.Z, { variant: "primary", size: "medium", children: "Join Beta" }),
                                                    }),
                                                }),
                                                (0, r.jsx)(V, {
                                                    isOpen: e,
                                                    toggleMenu: () => {
                                                        l.current && (t((e) => !e), document.body.classList.toggle("overflow-hidden", !e));
                                                    },
                                                }),
                                            ],
                                        }),
                                        (0, r.jsx)(d, {
                                            isMobile: !0,
                                            isOpen: e,
                                            items: c,
                                            closeMenu: () => {
                                                t(!1), document.body.classList.remove("overflow-hidden");
                                            },
                                            menuRef: l,
                                        }),
                                    ],
                                }),
                            }),
                            (0, r.jsx)("div", { className: "bg-gradient-to-t from-[#080808]/0 via-40% via-[#080808]/25 to-[#080808]/40 pointer-events-none h-24 top-0 w-full fixed" }),
                        ],
                    });
                },
                m = l(5675),
                x = l.n(m),
                u = l(2119);
            let M = [
                    { title: "Studio", link: "/studio" },
                    { title: "About", link: "/about" },
                    { title: "Blog", link: "/blog" },
                    { title: "Manifesto", link: "/manifesto" },
                ],
                Z = [
                    {
                        title: "X (Twitter)",
                        icon: {
                            src: "/_next/static/media/twitter.b274ac7b.png",
                            height: 16,
                            width: 16,
                            blurDataURL:
                                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAc0lEQVR42h2Luw2AMBQDrRClpmIRkNiCBWiYgI8NEg0MQodYgZIBMkVm4SmNrZN9kGOpCqAHtmCpQh8je0AN7zkAYKeHlwa+rA1XB/DQrqQWkM+uWiXuPPNsUdt50KVHnSEDbzbWvaK+yWHxY8guWC3l7H4exSX+XQGNmAAAAABJRU5ErkJggg==",
                            blurWidth: 8,
                            blurHeight: 8,
                        },
                        link: "https://twitter.com/morphic",
                    },
                    { title: "LinkedIn", icon: { src: "/_next/static/media/linkedin.64446bf7.svg", height: 16, width: 16, blurWidth: 0, blurHeight: 0 }, link: "https://www.linkedin.com/company/morphicfilms" },
                ],
                h = [
                    { title: "Contact Us", link: "mailto:support@morphic.com" },
                    { title: "Glossary", link: "/glossary" },
                    { title: "Privacy Policy", link: "/privacy-policy" },
                    { title: "Terms of use", link: "/terms-of-conditions" },
                ];
            var f = () =>
                (0, r.jsxs)("footer", {
                    className: "w-full overflow-hidden relative mt-24",
                    children: [
                        (0, r.jsx)(C.F, { className: "h-6 mt-16 md:ml-4 ml-20 mb-6 text-white" }),
                        (0, r.jsx)(u.Z, { size: 17, className: "w-full" }),
                        (0, r.jsx)("div", {
                            className: "flex justify-center gap-0.5 mt-2 sm:flex-wrap sm:justify-start sm:gap-0 sm:gap-y-2 sm:mb-2 max-w-5xl w-full mx-auto px-4",
                            children: M.map((e, t) =>
                                (0, r.jsx)(
                                    n(),
                                    {
                                        href: e.link,
                                        rel: "noopener no-referrer",
                                        className:
                                            "w-full h-6 text-xs text-medium flex justify-start pl-2 items-center text-neutral-500 bg-neutral-850 border border-white/[.08] shadow-[0px_0px_0px_1px_rgba(0,0,0,1)] rounded-md leading-[14px]  sm:w-1/2 sm:bg-black sm:border-0 sm:justify-start sm:pl-4 sm:text-md sm:font-normal transition-colors duration-150 hover:bg-neutral-800 hover:border-white/[.1] hover:text-neutral-100",
                                        children: e.title,
                                    },
                                    t
                                )
                            ),
                        }),
                        (0, r.jsx)("div", {
                            className: "flex justify-center gap-0.5 mt-2 sm:flex-wrap sm:justify-start sm:gap-0 sm:gap-y-2 sm:mt-0 max-w-5xl w-full mx-auto px-4",
                            children: h.map((e, t) =>
                                (0, r.jsx)(
                                    n(),
                                    {
                                        href: e.link,
                                        rel: "noopener no-referrer",
                                        className:
                                            "w-full h-6 text-xs text-medium flex justify-start pl-2 items-center text-neutral-500 bg-neutral-900 border border-white/[.06] shadow-[0px_0px_0px_1px_rgba(0,0,0,1)] rounded-md leading-[14px]   sm:w-1/2 sm:bg-black sm:border-0 sm:justify-start sm:pl-4 sm:text-md sm:font-normal transition-colors duration-150 hover:bg-neutral-850 hover:border-white/[.08] hover:text-neutral-200",
                                        children: e.title,
                                    },
                                    t
                                )
                            ),
                        }),
                        (0, r.jsxs)("div", {
                            className: "flex justify-between mt-[200px] relative z-10 mb-5 mx-20 sm:mx-4 text-neutral-500",
                            children: [
                                (0, r.jsx)("p", { className: "text-[1rem]", children: "2024 Morphic, Inc." }),
                                (0, r.jsx)("div", {
                                    className: "flex gap-2",
                                    children: Z.map((e, t) =>
                                        (0, r.jsx)(
                                            n(),
                                            {
                                                href: e.link,
                                                onClick: () => (0, i.B)("social_list_click", { redirectTo: e.link, source: "footer", title: e.title }),
                                                target: "_blank",
                                                rel: "noopener no-referrer",
                                                children: (0, r.jsx)(x(), { src: e.icon, alt: e.title }),
                                            },
                                            t
                                        )
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsx)(p, { className: "absolute md:top-40 top-[10vw] pointer-events-none" }),
                    ],
                });
            function p(e) {
                let { className: t } = e;
                return (0, r.jsxs)("svg", {
                    width: "100%",
                    height: "100%",
                    viewBox: "0 0 1411 197",
                    fill: "none",
                    className: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsxs)("mask", {
                            id: "path-1-outside-1_37_45966",
                            maskUnits: "userSpaceOnUse",
                            x: "-1",
                            y: "-1",
                            width: "1413",
                            height: "362",
                            fill: "black",
                            children: [
                                (0, r.jsx)("rect", { fill: "white", x: "-1", y: "-1", width: "1413", height: "362" }),
                                (0, r.jsx)("path", {
                                    d:
                                        "M164.6 288H123L47.8 66V288H0.200001V0.799978H70.6L144.6 220.8L218.6 0.799978H287.4V288H239.8V66L164.6 288ZM520.806 183.2C520.806 248.4 478.806 292.4 419.606 292.4C360.406 292.4 318.406 248.4 318.406 183.2C318.406 118 360.406 74 419.606 74C478.806 74 520.806 118 520.806 183.2ZM366.806 183.2C366.806 226 387.206 252 419.606 252C452.006 252 472.406 226 472.406 183.2C472.406 140.4 452.006 114.4 419.606 114.4C387.206 114.4 366.806 140.4 366.806 183.2ZM669.369 77.6V125.6C663.369 124.8 658.569 124.4 651.769 124.4C621.369 124.4 598.169 144 598.169 177.6V288H550.169V78H598.169V109.2C607.369 89.6 628.969 76.8 655.769 76.8C661.369 76.8 665.769 77.2 669.369 77.6ZM802.913 292.4C775.713 292.4 755.713 281.6 742.513 266V360H694.513V78H742.513V100.4C755.713 84.8 775.713 74 802.913 74C861.713 74 895.312 123.6 895.312 183.2C895.312 242.8 861.713 292.4 802.913 292.4ZM741.313 177.2V189.6C741.313 228.4 763.713 250.4 793.313 250.4C828.113 250.4 846.913 223.2 846.913 183.2C846.913 143.2 828.113 116 793.313 116C763.713 116 741.313 137.6 741.313 177.2ZM924.403 288V0.799978H972.403V100.4C984.403 86.4 1003.2 74 1030.4 74C1074.4 74 1100.8 104.4 1100.8 149.6V288H1052.8V163.6C1052.8 137.6 1042.4 118.8 1016 118.8C994.403 118.8 972.403 134.8 972.403 164.8V288H924.403ZM1140.99 50V0.799978H1190.59V50H1140.99ZM1189.79 78V288H1141.79V78H1189.79ZM1267.03 183.2C1267.03 226 1289.43 250.8 1322.23 250.8C1347.83 250.8 1363.43 234 1369.43 210.8L1410.63 231.6C1399.83 265.6 1367.83 292.4 1322.23 292.4C1262.23 292.4 1219.03 248 1219.03 183.2C1219.03 118.4 1262.23 74 1322.23 74C1367.43 74 1398.63 99.6 1409.83 133.2L1369.43 155.2C1363.43 132.4 1347.83 115.2 1322.23 115.2C1289.43 115.2 1267.03 140.4 1267.03 183.2Z",
                                }),
                            ],
                        }),
                        (0, r.jsx)("path", {
                            d:
                                "M164.6 288V289H165.317L165.547 288.321L164.6 288ZM123 288L122.053 288.321L122.283 289H123V288ZM47.8 66L48.7471 65.6792L46.8 66H47.8ZM47.8 288V289H48.8V288H47.8ZM0.200001 288H-0.799999V289H0.200001V288ZM0.200001 0.79998V-0.20002H-0.799999V0.79998H0.200001ZM70.6 0.79998L71.5478 0.481163L71.3187 -0.20002H70.6V0.79998ZM144.6 220.8L143.652 221.119L144.6 223.937L145.548 221.119L144.6 220.8ZM218.6 0.79998V-0.20002H217.881L217.652 0.481163L218.6 0.79998ZM287.4 0.79998H288.4V-0.20002H287.4V0.79998ZM287.4 288V289H288.4V288H287.4ZM239.8 288H238.8V289H239.8V288ZM239.8 66H240.8L238.853 65.6792L239.8 66ZM164.6 287H123V289H164.6V287ZM123.947 287.679L48.7471 65.6792L46.8529 66.3208L122.053 288.321L123.947 287.679ZM46.8 66V288H48.8V66H46.8ZM47.8 287H0.200001V289H47.8V287ZM1.2 288V0.79998H-0.799999V288H1.2ZM0.200001 1.79998H70.6V-0.20002H0.200001V1.79998ZM69.6522 1.11879L143.652 221.119L145.548 220.481L71.5478 0.481163L69.6522 1.11879ZM145.548 221.119L219.548 1.11879L217.652 0.481163L143.652 220.481L145.548 221.119ZM218.6 1.79998H287.4V-0.20002H218.6V1.79998ZM286.4 0.79998V288H288.4V0.79998H286.4ZM287.4 287H239.8V289H287.4V287ZM240.8 288V66H238.8V288H240.8ZM238.853 65.6792L163.653 287.679L165.547 288.321L240.747 66.3208L238.853 65.6792ZM519.806 183.2C519.806 215.584 509.379 242.628 491.676 261.567C473.977 280.502 448.948 291.4 419.606 291.4V293.4C449.465 293.4 475.036 282.298 493.137 262.933C511.234 243.572 521.806 216.016 521.806 183.2H519.806ZM419.606 291.4C390.265 291.4 365.236 280.502 347.537 261.567C329.834 242.628 319.406 215.584 319.406 183.2H317.406C317.406 216.016 327.979 243.572 346.076 262.933C364.177 282.298 389.748 293.4 419.606 293.4V291.4ZM319.406 183.2C319.406 150.816 329.834 123.772 347.537 104.833C365.236 85.8981 390.265 75 419.606 75V73C389.748 73 364.177 84.1019 346.076 103.467C327.979 122.828 317.406 150.384 317.406 183.2H319.406ZM419.606 75C448.948 75 473.977 85.8981 491.676 104.833C509.379 123.772 519.806 150.816 519.806 183.2H521.806C521.806 150.384 511.234 122.828 493.137 103.467C475.036 84.1019 449.465 73 419.606 73V75ZM365.806 183.2C365.806 204.745 370.94 222.184 380.265 234.261C389.612 246.367 403.11 253 419.606 253V251C403.703 251 390.8 244.633 381.848 233.039C372.873 221.416 367.806 204.455 367.806 183.2H365.806ZM419.606 253C436.103 253 449.6 246.367 458.948 234.261C468.273 222.184 473.406 204.745 473.406 183.2H471.406C471.406 204.455 466.34 221.416 457.365 233.039C448.412 244.633 435.51 251 419.606 251V253ZM473.406 183.2C473.406 161.655 468.273 144.216 458.948 132.139C449.6 120.033 436.103 113.4 419.606 113.4V115.4C435.51 115.4 448.412 121.767 457.365 133.361C466.34 144.984 471.406 161.945 471.406 183.2H473.406ZM419.606 113.4C403.11 113.4 389.612 120.033 380.265 132.139C370.94 144.216 365.806 161.655 365.806 183.2H367.806C367.806 161.945 372.873 144.984 381.848 133.361C390.8 121.767 403.703 115.4 419.606 115.4V113.4ZM669.369 77.6H670.369V76.7049L669.479 76.6061L669.369 77.6ZM669.369 125.6L669.237 126.591L670.369 126.742V125.6H669.369ZM598.169 288V289H599.169V288H598.169ZM550.169 288H549.169V289H550.169V288ZM550.169 78V77H549.169V78H550.169ZM598.169 78H599.169V77H598.169V78ZM598.169 109.2H597.169L599.074 109.625L598.169 109.2ZM668.369 77.6V125.6H670.369V77.6H668.369ZM669.501 124.609C663.464 123.804 658.619 123.4 651.769 123.4V125.4C658.518 125.4 663.273 125.796 669.237 126.591L669.501 124.609ZM651.769 123.4C636.355 123.4 622.695 128.371 612.881 137.674C603.059 146.985 597.169 160.559 597.169 177.6H599.169C599.169 161.041 604.879 148.015 614.257 139.126C623.643 130.229 636.783 125.4 651.769 125.4V123.4ZM597.169 177.6V288H599.169V177.6H597.169ZM598.169 287H550.169V289H598.169V287ZM551.169 288V78H549.169V288H551.169ZM550.169 79H598.169V77H550.169V79ZM597.169 78V109.2H599.169V78H597.169ZM599.074 109.625C608.079 90.4411 629.279 77.8 655.769 77.8V75.8C628.659 75.8 606.659 88.7589 597.263 108.775L599.074 109.625ZM655.769 77.8C661.318 77.8 665.679 78.1961 669.258 78.5939L669.479 76.6061C665.859 76.2039 661.419 75.8 655.769 75.8V77.8ZM742.513 266L743.276 265.354L741.513 263.27V266H742.513ZM742.513 360V361H743.513V360H742.513ZM694.513 360H693.513V361H694.513V360ZM694.513 78V77H693.513V78H694.513ZM742.513 78H743.513V77H742.513V78ZM742.513 100.4H741.513V103.13L743.276 101.046L742.513 100.4ZM802.913 291.4C776.005 291.4 756.285 280.728 743.276 265.354L741.749 266.646C755.14 282.472 775.42 293.4 802.913 293.4V291.4ZM741.513 266V360H743.513V266H741.513ZM742.513 359H694.513V361H742.513V359ZM695.513 360V78H693.513V360H695.513ZM694.513 79H742.513V77H694.513V79ZM741.513 78V100.4H743.513V78H741.513ZM743.276 101.046C756.285 85.6715 776.005 75 802.913 75V73C775.42 73 755.14 83.9285 741.749 99.7541L743.276 101.046ZM802.913 75C832.001 75 854.815 87.2553 870.379 106.872C885.961 126.51 894.312 153.577 894.312 183.2H896.312C896.312 153.223 887.864 125.69 871.946 105.628C856.01 85.5447 832.624 73 802.913 73V75ZM894.312 183.2C894.312 212.823 885.961 239.89 870.379 259.528C854.815 279.145 832.001 291.4 802.913 291.4V293.4C832.624 293.4 856.01 280.855 871.946 260.772C887.864 240.71 896.312 213.177 896.312 183.2H894.312ZM740.312 177.2V189.6H742.312V177.2H740.312ZM740.312 189.6C740.312 209.191 745.97 224.647 755.469 235.218C764.974 245.797 778.253 251.4 793.312 251.4V249.4C778.772 249.4 766.051 244.003 756.956 233.882C747.855 223.753 742.312 208.809 742.312 189.6H740.312ZM793.312 251.4C811.004 251.4 824.705 244.471 833.956 232.409C843.181 220.38 847.913 203.341 847.913 183.2H845.913C845.913 203.059 841.244 219.62 832.369 231.191C823.52 242.729 810.421 249.4 793.312 249.4V251.4ZM847.913 183.2C847.913 163.059 843.181 146.02 833.956 133.991C824.705 121.929 811.004 115 793.312 115V117C810.421 117 823.52 123.671 832.369 135.209C841.244 146.78 845.913 163.341 845.913 183.2H847.913ZM793.312 115C778.258 115 764.977 120.499 755.469 131.082C745.967 141.656 740.312 157.214 740.312 177.2H742.312C742.312 157.586 747.858 142.544 756.956 132.418C766.048 122.301 778.767 117 793.312 117V115ZM924.403 288H923.403V289H924.403V288ZM924.403 0.79998V-0.20002H923.403V0.79998H924.403ZM972.403 0.79998H973.403V-0.20002H972.403V0.79998ZM972.403 100.4H971.403V103.103L973.162 101.051L972.403 100.4ZM1100.8 288V289H1101.8V288H1100.8ZM1052.8 288H1051.8V289H1052.8V288ZM972.403 288V289H973.403V288H972.403ZM925.403 288V0.79998H923.403V288H925.403ZM924.403 1.79998H972.403V-0.20002H924.403V1.79998ZM971.403 0.79998V100.4H973.403V0.79998H971.403ZM973.162 101.051C985.009 87.2299 1003.55 75 1030.4 75V73C1002.86 73 983.797 85.5701 971.644 99.7492L973.162 101.051ZM1030.4 75C1052.16 75 1069.48 82.5088 1081.36 95.5243C1093.26 108.551 1099.8 127.191 1099.8 149.6H1101.8C1101.8 126.809 1095.15 107.649 1082.84 94.1757C1070.53 80.6912 1052.65 73 1030.4 73V75ZM1099.8 149.6V288H1101.8V149.6H1099.8ZM1100.8 287H1052.8V289H1100.8V287ZM1053.8 288V163.6H1051.8V288H1053.8ZM1053.8 163.6C1053.8 150.492 1051.19 139.046 1045.11 130.854C1038.99 122.612 1029.47 117.8 1016 117.8V119.8C1028.94 119.8 1037.82 124.388 1043.5 132.046C1049.22 139.754 1051.8 150.708 1051.8 163.6H1053.8ZM1016 117.8C993.905 117.8 971.403 134.195 971.403 164.8H973.403C973.403 135.405 994.901 119.8 1016 119.8V117.8ZM971.403 164.8V288H973.403V164.8H971.403ZM972.403 287H924.403V289H972.403V287ZM1140.99 50H1139.99V51H1140.99V50ZM1140.99 0.79998V-0.20002H1139.99V0.79998H1140.99ZM1190.59 0.79998H1191.59V-0.20002H1190.59V0.79998ZM1190.59 50V51H1191.59V50H1190.59ZM1189.79 78H1190.79V77H1189.79V78ZM1189.79 288V289H1190.79V288H1189.79ZM1141.79 288H1140.79V289H1141.79V288ZM1141.79 78V77H1140.79V78H1141.79ZM1141.99 50V0.79998H1139.99V50H1141.99ZM1140.99 1.79998H1190.59V-0.20002H1140.99V1.79998ZM1189.59 0.79998V50H1191.59V0.79998H1189.59ZM1190.59 49H1140.99V51H1190.59V49ZM1188.79 78V288H1190.79V78H1188.79ZM1189.79 287H1141.79V289H1189.79V287ZM1142.79 288V78H1140.79V288H1142.79ZM1141.79 79H1189.79V77H1141.79V79ZM1369.43 210.8L1369.88 209.907L1368.77 209.348L1368.46 210.55L1369.43 210.8ZM1410.63 231.6L1411.58 231.903L1411.84 231.091L1411.08 230.707L1410.63 231.6ZM1409.83 133.2L1410.31 134.078L1411.04 133.678L1410.78 132.884L1409.83 133.2ZM1369.43 155.2L1368.46 155.454L1368.79 156.688L1369.91 156.078L1369.43 155.2ZM1266.03 183.2C1266.03 204.766 1271.68 221.916 1281.57 233.693C1291.47 245.488 1305.56 251.8 1322.23 251.8V249.8C1306.1 249.8 1292.59 243.712 1283.1 232.407C1273.59 221.084 1268.03 204.434 1268.03 183.2H1266.03ZM1322.23 251.8C1335.27 251.8 1345.81 247.516 1353.85 240.242C1361.88 232.98 1367.36 222.791 1370.4 211.05L1368.46 210.55C1365.5 222.009 1360.18 231.82 1352.51 238.758C1344.85 245.684 1334.8 249.8 1322.23 249.8V251.8ZM1368.98 211.693L1410.18 232.493L1411.08 230.707L1369.88 209.907L1368.98 211.693ZM1409.68 231.297C1399.01 264.878 1367.4 291.4 1322.23 291.4V293.4C1368.26 293.4 1400.65 266.322 1411.58 231.903L1409.68 231.297ZM1322.23 291.4C1292.49 291.4 1266.95 280.4 1248.86 261.41C1230.75 242.418 1220.03 215.375 1220.03 183.2H1218.03C1218.03 215.826 1228.91 243.382 1247.41 262.79C1265.91 282.2 1291.98 293.4 1322.23 293.4V291.4ZM1220.03 183.2C1220.03 151.025 1230.75 123.982 1248.86 104.99C1266.95 86.0002 1292.49 75 1322.23 75V73C1291.98 73 1265.91 84.1998 1247.41 103.61C1228.91 123.018 1218.03 150.574 1218.03 183.2H1220.03ZM1322.23 75C1367.01 75 1397.82 100.332 1408.88 133.516L1410.78 132.884C1399.44 98.8683 1367.85 73 1322.23 73V75ZM1409.35 132.322L1368.95 154.322L1369.91 156.078L1410.31 134.078L1409.35 132.322ZM1370.4 154.945C1367.36 143.406 1361.88 133.22 1353.85 125.911C1345.82 118.589 1335.27 114.2 1322.23 114.2V116.2C1334.79 116.2 1344.85 120.411 1352.51 127.389C1360.18 134.38 1365.5 144.194 1368.46 155.454L1370.4 154.945ZM1322.23 114.2C1305.56 114.2 1291.47 120.616 1281.56 132.51C1271.67 144.386 1266.03 161.634 1266.03 183.2H1268.03C1268.03 161.966 1273.59 145.214 1283.1 133.79C1292.6 122.384 1306.11 116.2 1322.23 116.2V114.2Z",
                            fill: "url(#paint0_linear_37_45966)",
                            mask: "url(#path-1-outside-1_37_45966)",
                        }),
                        (0, r.jsx)("defs", {
                            children: (0, r.jsxs)("linearGradient", {
                                id: "paint0_linear_37_45966",
                                x1: "694",
                                y1: "-102",
                                x2: "694",
                                y2: "378",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", { offset: "0.143661", stopColor: "#333333" }), (0, r.jsx)("stop", { offset: "0.759221" })],
                            }),
                        }),
                    ],
                });
            }
            var g = (e) => {
                let { children: t } = e;
                return (0, r.jsxs)("div", { className: "relative font-soehne bg-black", children: [(0, r.jsx)(H, {}), t, (0, r.jsx)(f, {})] });
            };
        },
        2119: function (e, t, l) {
            var r = l(5893),
                s = l(4397);
            l(7294),
                (t.Z = (e) => {
                    let { size: t, className: l } = e;
                    return (0, r.jsx)("div", {
                        className: (0, s.cx)("w-full h-full mx-4 pt-5 border-b border-gray-800 flex flex-col justify-end items-start gap-3", l),
                        children: (0, r.jsx)("div", {
                            className: "w-full flex justify-between items-start",
                            children: Array.from({ length: t }).map(
                                (e, t) =>
                                    16 !== t &&
                                    (0, r.jsxs)(
                                        "div",
                                        {
                                            children: [
                                                (0, r.jsx)("span", { className: "relative ".concat(0 === t ? "right-0" : "right-1", " text-center text-gray-500 text-xs font-medium"), children: 0 === t ? 0 : "".concat(t, "s") }, t),
                                                (0, r.jsx)("div", {
                                                    className: "w-full flex justify-start items-start gap-6",
                                                    children: Array.from({ length: 5 }).map((e, t) => (0, r.jsx)("div", { className: "w-[1px] h-1 ".concat(0 === t || 5 === t ? "bg-gray-500" : "bg-gray-800") }, t)),
                                                }),
                                            ],
                                        },
                                        t
                                    )
                            ),
                        }),
                    });
                });
        },
        3195: function (e, t, l) {
            l.d(t, {
                F: function () {
                    return i;
                },
            });
            var r = l(5893),
                s = l(4397);
            function i(e) {
                return (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 386 96",
                    fill: "none",
                    className: (0, s.cx)(e.className),
                    children: [
                        (0, r.jsx)("path", { d: "M27 20.9396C27 12.1364 34.1364 5 42.9396 5C44.6298 5 46 6.37019 46 8.0604V77.5604C46 86.3636 38.8636 93.5 30.0604 93.5C28.3702 93.5 27 92.1298 27 90.4396V20.9396Z", fill: "currentColor" }),
                        (0, r.jsx)("path", {
                            d: "M54 36.4396C54 27.6364 61.1364 20.5 69.9396 20.5C71.6298 20.5 73 21.8702 73 23.5604V62.0604C73 70.8636 65.8636 78 57.0604 78C55.3702 78 54 76.6298 54 74.9396V36.4396Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", { d: "M0 36.4396C0 27.6364 7.1364 20.5 15.9396 20.5C17.6298 20.5 19 21.8702 19 23.5604V62.0604C19 70.8636 11.8636 78 3.0604 78C1.37019 78 0 76.6298 0 74.9396V36.4396Z", fill: "currentColor" }),
                        (0, r.jsx)("path", { d: "M135.32 78H127L111.96 33.6V78H102.44V20.56H116.52L131.32 64.56L146.12 20.56H159.88V78H150.36V33.6L135.32 78Z", fill: "currentColor" }),
                        (0, r.jsx)("path", {
                            d:
                                "M206.561 57.04C206.561 70.08 198.161 78.88 186.321 78.88C174.481 78.88 166.081 70.08 166.081 57.04C166.081 44 174.481 35.2 186.321 35.2C198.161 35.2 206.561 44 206.561 57.04ZM175.761 57.04C175.761 65.6 179.841 70.8 186.321 70.8C192.801 70.8 196.881 65.6 196.881 57.04C196.881 48.48 192.801 43.28 186.321 43.28C179.841 43.28 175.761 48.48 175.761 57.04Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", {
                            d:
                                "M236.274 35.92V45.52C235.074 45.36 234.114 45.28 232.754 45.28C226.674 45.28 222.034 49.2 222.034 55.92V78H212.434V36H222.034V42.24C223.874 38.32 228.194 35.76 233.554 35.76C234.674 35.76 235.554 35.84 236.274 35.92Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", {
                            d:
                                "M262.982 78.88C257.542 78.88 253.542 76.72 250.902 73.6V92.4H241.303V36H250.902V40.48C253.542 37.36 257.542 35.2 262.982 35.2C274.742 35.2 281.462 45.12 281.462 57.04C281.462 68.96 274.742 78.88 262.982 78.88ZM250.663 55.84V58.32C250.663 66.08 255.143 70.48 261.062 70.48C268.023 70.48 271.783 65.04 271.783 57.04C271.783 49.04 268.023 43.6 261.062 43.6C255.143 43.6 250.663 47.92 250.663 55.84Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", {
                            d:
                                "M287.281 78V20.56H296.881V40.48C299.281 37.68 303.041 35.2 308.481 35.2C317.281 35.2 322.561 41.28 322.561 50.32V78H312.961V53.12C312.961 47.92 310.881 44.16 305.601 44.16C301.281 44.16 296.881 47.36 296.881 53.36V78H287.281Z",
                            fill: "currentColor",
                        }),
                        (0, r.jsx)("path", { d: "M330.599 30.4V20.56H340.519V30.4H330.599ZM340.359 36V78H330.759V36H340.359Z", fill: "currentColor" }),
                        (0, r.jsx)("path", {
                            d:
                                "M355.806 57.04C355.806 65.6 360.286 70.56 366.846 70.56C371.966 70.56 375.086 67.2 376.286 62.56L384.526 66.72C382.366 73.52 375.966 78.88 366.846 78.88C354.846 78.88 346.206 70 346.206 57.04C346.206 44.08 354.846 35.2 366.846 35.2C375.886 35.2 382.126 40.32 384.366 47.04L376.286 51.44C375.086 46.88 371.966 43.44 366.846 43.44C360.286 43.44 355.806 48.48 355.806 57.04Z",
                            fill: "currentColor",
                        }),
                    ],
                });
            }
        },
        8584: function (e, t, l) {
            var r = l(5893);
            l(7294);
            var s = l(4397);
            let i = {
                    default: "hover:text-neutral-500 disabled:text-neutral-600",
                    primary: "bg-blue-600 hover:bg-blue-700 focus:bg-blue-600 active:bg-blue-700 disabled:bg-blue-600/20 disabled:text-blue-600/40",
                    secondary: "bg-neutral-850 hover:bg-neutral-800 focus:bg-neutral-800 active:bg-neutral-800 disabled:text-neutral-600",
                    outline: "border border-neutral-800 bg-transparent hover:bg-transparent hover:text-support-100 focus:bg-transparent-100 active:bg-blue-700 text-white disabled:text-neutral-600",
                    delete: "bg-red-700/20 hover:bg-red-800/20 focus:bg-red-800/20 active:bg-red-800/20 disabled:bg-red-800/20 text-red-700 disabled:text-red-700/40",
                },
                a = { small: "text-xs font-medium p-2", medium: "text-sm font-medium px-3 py-2", large: "text-sm font-medium px-4 py-[10px]" };
            t.Z = (e) => {
                let { variant: t = "default", size: l = "small", className: n, icon: o, disabled: V = !1, children: d, onClick: C, id: c, onKeyDown: H } = e;
                return (0, r.jsxs)("button", {
                    className: (0, s.cx)("text-neutral-100 rounded-md", "inline-flex items-center justify-center gap-x-1.5", "transition-all disabled:cursor-not-allowed", i[t], a[l], n),
                    id: c,
                    disabled: V,
                    onClick: C,
                    onKeyDown: H,
                    children: [o && (0, r.jsx)(o, { className: "w-4 h-4" }), d],
                });
            };
        },
        4397: function (e, t, l) {
            l.d(t, {
                cx: function () {
                    return i;
                },
            });
            var r = l(512),
                s = l(8388);
            let i = function () {
                for (var e = arguments.length, t = Array(e), l = 0; l < e; l++) t[l] = arguments[l];
                return (0, s.m6)((0, r.Z)(...t));
            };
        },
    },
]);
