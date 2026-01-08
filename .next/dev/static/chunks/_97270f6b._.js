(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/constants/theme.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ==============================================================================
// 🎨 CONFIGURAÇÃO DE TEMA E CORES
// ==============================================================================
__turbopack_context__.s([
    "GIRLIE_COLORS",
    ()=>GIRLIE_COLORS,
    "HELMET_ICON",
    ()=>HELMET_ICON,
    "LOGO_IMG_DARK",
    ()=>LOGO_IMG_DARK,
    "LOGO_IMG_LIGHT",
    ()=>LOGO_IMG_LIGHT,
    "VAPORWAVE_COLORS",
    ()=>VAPORWAVE_COLORS,
    "darkPattern",
    ()=>darkPattern,
    "lightPattern",
    ()=>lightPattern
]);
const LOGO_IMG_LIGHT = "/img/web/LIGHT-MODE-HEADER.png";
const LOGO_IMG_DARK = "/img/web/DARK-MODE-HEADER.png";
const HELMET_ICON = "/img/web/helmet.png";
const GIRLIE_COLORS = {
    roxo: '#caa5d8',
    rosa: '#fac4dc',
    azul: '#bbd3f2'
};
const VAPORWAVE_COLORS = {
    neonRoxo: '#bd00ff',
    neonCyan: '#00fff2',
    neonPink: '#ff00ff'
};
const lightPattern = {
    backgroundColor: '#FFF0F5',
    backgroundImage: `
    radial-gradient(at 10% 10%, rgba(252, 205, 238, 0.5) 0px, transparent 50%),
    radial-gradient(at 90% 0%, rgba(255, 182, 193, 0.5) 0px, transparent 50%),
    radial-gradient(at 50% 100%, rgba(230, 230, 250, 0.5) 0px, transparent 50%)
  `,
    backgroundSize: '100% 100%'
};
const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
    linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px)
  `,
    backgroundSize: '40px 40px'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/LogoHelmet.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoHelmet",
    ()=>LogoHelmet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/theme.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const LogoHelmet = ({ theme, size = 'normal' })=>{
    _s();
    const isLight = theme === 'light';
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const logoUrl = isLight ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGO_IMG_LIGHT"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOGO_IMG_DARK"];
    const mobileHelmetSize = size === 'large' ? "h-16" : "h-12";
    const desktopLogoSize = size === 'large' ? "h-48 lg:h-56 xl:h-64" : "h-20 md:h-24";
    if (!imgError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex items-center justify-center ${size === 'large' ? 'p-2 md:p-4' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 blur-2xl opacity-40 rounded-full ${isLight ? 'bg-pink-300' : 'bg-cyan-500'} animate-pulse`
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoHelmet.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HELMET_ICON"],
                    alt: "Autamubilismo Helmet",
                    className: `${mobileHelmetSize} w-auto object-contain transition-all duration-500 drop-shadow-lg relative z-10 md:hidden`,
                    onError: ()=>setImgError(true)
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoHelmet.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: logoUrl,
                    alt: "Autamubilismo",
                    className: `hidden md:block ${desktopLogoSize} w-auto max-w-[500px] object-contain transition-all duration-500 drop-shadow-lg relative z-10`,
                    onError: ()=>setImgError(true)
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoHelmet.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/LogoHelmet.jsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center md:items-start leading-none select-none relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: `font-black tracking-tighter italic ${size === 'large' ? 'text-3xl md:text-6xl lg:text-7xl' : 'text-xl md:text-2xl'} ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400'}`,
            children: [
                "AUTA",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: isLight ? 'text-pink-400' : 'text-fuchsia-400',
                    children: "MU"
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoHelmet.jsx",
                    lineNumber: 38,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0)),
                "BILISMO"
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/LogoHelmet.jsx",
            lineNumber: 37,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/LogoHelmet.jsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LogoHelmet, "0doYx/lFKmVVbvtO/eWR8SJrtgo=");
_c = LogoHelmet;
var _c;
__turbopack_context__.k.register(_c, "LogoHelmet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/BentoCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoCard",
    ()=>BentoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
;
;
;
;
const BentoCard = ({ children, className, theme, title, subtitle, onClick, to, noPadding = false })=>{
    const isLight = theme === 'light';
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative z-10 h-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'}`,
        children: [
            (title || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 relative",
                children: [
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 block opacity-80 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoCard.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-xl md:text-2xl font-black leading-none ${isLight ? 'text-gray-900' : 'text-white font-mono'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoCard.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                        size: 12,
                        className: "absolute -right-2 top-0 text-pink-300 opacity-50 rotate-12"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoCard.jsx",
                        lineNumber: 22,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/BentoCard.jsx",
                lineNumber: 11,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/BentoCard.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
    const baseClasses = `relative overflow-hidden transition-all duration-500 group ${className} 
    ${isLight ? 'bg-white/60 backdrop-blur-xl rounded-[2.5rem] shadow-[0_10px_30px_rgba(255,182,193,0.3)] border border-pink-100 hover:border-pink-300 hover:shadow-[0_20px_50px_rgba(255,105,180,0.25)] hover:-translate-y-1' : 'bg-[#090912]/80 backdrop-blur-xl rounded-[2rem] border border-white/5 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,255,242,0.15)] hover:-translate-y-1 ring-1 ring-white/5'} active:scale-[0.98]`;
    const CardWrapper = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${isLight ? 'from-pink-100/40' : 'from-cyan-900/10'} to-transparent opacity-50 pointer-events-none`
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoCard.jsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 opacity-[0.05] pointer-events-none group-hover:opacity-[0.1] transition-opacity duration-700`,
                    style: {
                        backgroundImage: isLight ? 'radial-gradient(circle at 2px 2px, #ec4899 1px, transparent 0)' : 'linear-gradient(to right, #4f4f4f 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f 1px, transparent 1px)',
                        backgroundSize: isLight ? '24px 24px' : '40px 40px'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoCard.jsx",
                    lineNumber: 38,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                children
            ]
        }, void 0, true);
    if (to) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: to,
            className: baseClasses,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardWrapper, {
                children: content
            }, void 0, false, {
                fileName: "[project]/components/ui/BentoCard.jsx",
                lineNumber: 54,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/ui/BentoCard.jsx",
            lineNumber: 53,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `${baseClasses} ${onClick ? 'cursor-pointer' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardWrapper, {
            children: content
        }, void 0, false, {
            fileName: "[project]/components/ui/BentoCard.jsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/ui/BentoCard.jsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BentoCard;
var _c;
__turbopack_context__.k.register(_c, "BentoCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ScrollToTop.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToTop",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ScrollToTop = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            window.scrollTo(0, 0);
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
};
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/BackButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackButton",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const BackButton = ({ theme, to })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLight = theme === 'light';
    const handleClick = ()=>{
        if (to) {
            router.push(to);
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: `group flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${isLight ? 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:text-pink-500 border border-gray-100' : 'bg-[#1a1a20] text-white border border-[#333] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,242,0.2)]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                size: 20,
                className: "transition-transform group-hover:-translate-x-1"
            }, void 0, false, {
                fileName: "[project]/components/ui/BackButton.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-black text-xs tracking-widest uppercase",
                children: "Voltar"
            }, void 0, false, {
                fileName: "[project]/components/ui/BackButton.jsx",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/BackButton.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BackButton, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BackButton;
var _c;
__turbopack_context__.k.register(_c, "BackButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/LoadingSpinner.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
;
const LoadingSpinner = ({ theme, size = 'medium', text = 'Carregando...' })=>{
    const isLight = theme === 'light';
    const sizeClasses = {
        small: 'w-6 h-6',
        medium: 'w-10 h-10',
        large: 'w-16 h-16'
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: `animate-spin ${sizeClasses[size]} ${isLight ? 'text-pink-500' : 'text-cyan-400'}`
            }, void 0, false, {
                fileName: "[project]/components/ui/LoadingSpinner.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm font-bold tracking-wide ${isLight ? 'text-gray-500' : 'text-gray-400'}`,
                children: text
            }, void 0, false, {
                fileName: "[project]/components/ui/LoadingSpinner.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/LoadingSpinner.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = LoadingSpinner;
var _c;
__turbopack_context__.k.register(_c, "LoadingSpinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/ErrorMessage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorMessage",
    ()=>ErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
;
;
const ErrorMessage = ({ theme, title = 'Ops!', message, onRetry })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center justify-center gap-4 py-12 px-6 text-center max-w-md mx-auto rounded-3xl ${isLight ? 'bg-red-50 border-2 border-red-200' : 'bg-red-900/20 border-2 border-red-500/30'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                size: 48,
                className: isLight ? 'text-red-500' : 'text-red-400'
            }, void 0, false, {
                fileName: "[project]/components/ui/ErrorMessage.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-xl font-black mb-2 ${isLight ? 'text-red-700' : 'text-red-300'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ErrorMessage.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-sm ${isLight ? 'text-red-600' : 'text-red-400'}`,
                        children: message || 'Algo deu errado. Tente novamente mais tarde.'
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ErrorMessage.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/ErrorMessage.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onRetry,
                className: `px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wider transition-all hover:scale-105 active:scale-95 ${isLight ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-red-500/20 text-red-400 border border-red-500/50 hover:bg-red-500/30'}`,
                children: "Tentar Novamente"
            }, void 0, false, {
                fileName: "[project]/components/ui/ErrorMessage.jsx",
                lineNumber: 32,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/ErrorMessage.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ErrorMessage;
var _c;
__turbopack_context__.k.register(_c, "ErrorMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PageContainer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageContainer",
    ()=>PageContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const lightPattern = {
    backgroundColor: '#FFF0F5',
    backgroundImage: `
    radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
    radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.4) 0px, transparent 50%),
    conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0.8) 0deg, transparent 60deg, rgba(255, 255, 255, 0.5) 120deg)
  `,
    backgroundSize: '100% 100%'
};
const darkPattern = {
    backgroundColor: '#050510',
    backgroundImage: `
    linear-gradient(rgba(0, 255, 242, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(189, 0, 255, 0.05) 1px, transparent 1px),
    radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.2) 0px, transparent 70%)
  `,
    backgroundSize: '40px 40px, 40px 40px, 100% 100%'
};
const PageContainer = ({ theme, children, className = "" })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen p-6 md:p-12 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans ${isLight ? 'selection:bg-pink-300 selection:text-white' : 'selection:bg-cyan-500 selection:text-black'} ${className}`,
        style: isLight ? lightPattern : darkPattern,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PageContainer.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PageContainer.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PageContainer.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/PageContainer.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto w-full",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/PageContainer.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PageContainer.jsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PageContainer;
var _c;
__turbopack_context__.k.register(_c, "PageContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/PageHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
const PageHeader = ({ theme, title, subtitle, badge, icon: Icon, className = "" })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-14 text-center md:text-left relative ${className}`,
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border ${isLight ? 'bg-white/50 border-pink-200 text-pink-500 shadow-sm' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`,
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                        size: 12,
                        className: "inline mr-2"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PageHeader.jsx",
                        lineNumber: 21,
                        columnNumber: 20
                    }, ("TURBOPACK compile-time value", void 0)),
                    badge
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/PageHeader.jsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/PageHeader.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-lg md:text-xl font-medium max-w-2xl mx-auto md:mx-0 ${isLight ? 'text-gray-500' : 'text-cyan-100/70'}`,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/ui/PageHeader.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `h-1.5 w-24 rounded-full mt-6 ${isLight ? 'bg-gradient-to-r from-pink-300 to-purple-300' : 'bg-gradient-to-r from-cyan-500 to-fuchsia-500'} mx-auto md:mx-0 shadow-[0_0_15px_currentColor]`
            }, void 0, false, {
                fileName: "[project]/components/ui/PageHeader.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/PageHeader.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = PageHeader;
var _c;
__turbopack_context__.k.register(_c, "PageHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoHelmet$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LogoHelmet.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BentoCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BentoCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollToTop$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollToTop.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoadingSpinner.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ErrorMessage$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ErrorMessage.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageContainer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PageContainer.jsx [app-client] (ecmascript)"); // NOVO
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PageHeader.jsx [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/drivers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRIVERS_DATA",
    ()=>DRIVERS_DATA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-client] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-client] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-client] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-client] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-client] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
;
const DRIVERS_DATA = [
    {
        id: 'kimi',
        name: 'Kimi Antonelli',
        number: 12,
        team: 'Mercedes-AMG',
        color: '#00D2BE',
        image: '/img/pilotos/antonelli/grid-antonelli.avif',
        photocardImage: '/img/pilotos/antonelli/antonelli-photocard.jpg',
        bio: "Andrea Kimi Antonelli nasceu em Bolonha, Itália, em 25 de agosto de 2006. Filho do ex-piloto Marco Antonelli, cresceu imerso no automobilismo. Dominou o kart, venceu a F4 Italiana, ADAC F4 e brilhou na Fórmula Regional Europeia e Middle East. Em 2025, estreou pela Mercedes como um dos pilotos mais jovens da história, mostrando maturidade, ritmo forte e consistência impressionante ao longo de seus primeiros 24 GPs.",
        country: 'Bolonha, Itália 🇮🇹',
        age: '19 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
                label: 'Sim Racer'
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
                label: 'Pasta Lover'
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Rookie'
            }
        ],
        stats: {
            points: '150',
            podiums: '3',
            bestResult: 'P2',
            xp: '24 GPs'
        },
        signature: "Kimi A.",
        secretFact: "Leva seu simulador portátil para todos os hotéis.",
        zodiac: "Virgem ♍"
    },
    {
        id: 'lewis',
        name: 'Lewis Hamilton',
        number: 44,
        team: 'Ferrari',
        color: '#FF0000',
        image: '/img/pilotos/hamilton/grid-hamilton.avif',
        photocardImage: '/img/pilotos/hamilton/hamilton-photocard.jpg',
        bio: "Lewis Hamilton, nascido em Stevenage em 7 de janeiro de 1985, é uma das maiores lendas da Fórmula 1. Sete vezes campeão mundial, redefiniu padrões de pilotagem, performance e impacto cultural no esporte. Em 2025, já na Ferrari, manteve sua consistência exemplar e sua reputação de competidor feroz, trazendo sua liderança e influência para Maranello.",
        country: 'Reino Unido 🇬🇧',
        age: '40 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                label: 'Lenda'
            }
        ],
        stats: {
            points: '171',
            podiums: '1',
            bestResult: 'P2',
            xp: '327 GPs'
        },
        signature: "Lewis 44",
        secretFact: "Roscoe tem seu próprio passe VIP.",
        zodiac: "Capricórnio ♑"
    },
    {
        id: 'gabriel',
        name: 'Gabriel Bortoleto',
        number: 5,
        team: 'Audi',
        color: '#52E252',
        image: '/img/pilotos/bortoleto/grid-bortoleto.avif',
        photocardImage: '/img/pilotos/bortoleto/bortoleto-photocard.jpg',
        bio: "Gabriel Bortoleto nasceu no Brasil em 2004 e rapidamente se tornou um dos maiores talentos da nova geração. Campeão da Fórmula 3, entrou na Fórmula 1 com maturidade além da idade. Em 2025, somou 19 pontos e mostrou velocidade, técnica e estabilidade, garantindo resultados sólidos para a Sauber. Sua condução suave e inteligente o coloca entre os jovens mais promissores do grid.",
        country: 'Brasil 🇧🇷',
        age: '21 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Rápido'
            }
        ],
        stats: {
            points: '19',
            podiums: '0',
            bestResult: 'P6',
            xp: '24 GPs'
        },
        signature: "Bortoleto",
        secretFact: "Adora feijoada.",
        zodiac: "Libra ♎"
    },
    {
        id: 'max',
        name: 'Max Verstappen',
        number: 3,
        team: 'Red Bull',
        color: '#1E41FF',
        image: '/img/pilotos/verstappen/grid-verstappen.avif',
        photocardImage: '/img/pilotos/verstappen/verstappen-photocard.jpg',
        bio: "Max Verstappen, nascido em 1997, é um fenômeno da Fórmula 1. Depois de dominar a categoria por anos, seguiu extremamente competitivo em 2025, somando vitórias, pódios e mantendo um nível técnico absurdo. Conhecido pelo estilo agressivo, controle de corrida e leitura afiada, é um dos nomes mais dominantes da história moderna da F1.",
        country: 'Países Baixos 🇳🇱',
        age: '28 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                label: 'Campeão'
            }
        ],
        stats: {
            points: '421',
            podiums: '15',
            bestResult: 'P1',
            xp: '233 GPs'
        },
        signature: "Max V.",
        secretFact: "Prefere FIFA a entrevistas.",
        zodiac: "Libra ♎"
    },
    {
        id: 'lando',
        name: 'Lando Norris',
        number: 1,
        team: 'McLaren',
        color: '#FF8700',
        image: '/img/pilotos/norris/grid-norris.avif',
        photocardImage: '/img/pilotos/norris/norris-photocard.jpg',
        bio: "Lando Norris nasceu em 1999 e tornou-se um dos pilotos mais completos do grid. Em 2025, viveu sua melhor temporada, conquistando vitórias, pódios e o título mundial ao lado da McLaren. Sua combinação de velocidade, carisma e consistência elevou sua reputação a um patamar histórico.",
        country: 'Reino Unido 🇬🇧',
        age: '26 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
                label: 'Gamer'
            }
        ],
        stats: {
            points: '423',
            podiums: '18',
            bestResult: 'P1',
            xp: '152 GPs'
        },
        signature: "Lando",
        secretFact: "DJ nas horas vagas.",
        zodiac: "Escorpião ♏"
    },
    {
        id: 'charles',
        name: 'Charles Leclerc',
        number: 16,
        team: 'Ferrari',
        color: '#FF0000',
        image: '/img/pilotos/leclerc/grid-leclerc.avif',
        photocardImage: '/img/pilotos/leclerc/leclerc-photocard.jpg',
        bio: "Charles Leclerc nasceu em Mônaco em 1997 e tornou-se o principal nome da Ferrari na última década. Conhecido por sua velocidade de uma volta, precisão e emocionalidade intensa, entregou uma temporada forte em 2025, com pódios e consistência no top 10. Seu talento bruto segue inquestionável no cenário da F1.",
        country: 'Mônaco 🇲🇨',
        age: '28 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
                label: 'Piano'
            }
        ],
        stats: {
            points: '242',
            podiums: '7',
            bestResult: 'P2',
            xp: '171 GPs'
        },
        signature: "Charles 16",
        secretFact: "Toca piano para relaxar.",
        zodiac: "Libra ♎"
    },
    {
        id: 'oscar',
        name: 'Oscar Piastri',
        number: 81,
        team: 'McLaren',
        color: '#FF8700',
        image: '/img/pilotos/piastri/grid-piastri.avif',
        photocardImage: '/img/pilotos/piastri/piastri-photocard.jpg',
        bio: "Oscar Piastri, nascido na Austrália em 2001, é um dos talentos mais limpos e precisos do grid. Em 2025, conquistou vitórias, pódios e consolidou sua posição como vice-líder técnico da McLaren. Seu estilo calmo, calculado e maduro faz dele um competidor extremamente perigoso.",
        country: 'Austrália 🇦🇺',
        age: '24 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
                label: 'Calmo'
            }
        ],
        stats: {
            points: '410',
            podiums: '16',
            bestResult: 'P1',
            xp: '70 GPs'
        },
        signature: "Oscar P.",
        secretFact: "O homem mais calmo do mundo.",
        zodiac: "Áries ♈"
    },
    {
        id: 'george',
        name: 'George Russell',
        number: 63,
        team: 'Mercedes-AMG',
        color: '#00D2BE',
        image: '/img/pilotos/russell/grid-russell.avif',
        photocardImage: '/img/pilotos/russell/russell-photocard.jpg',
        bio: "George Russell nasceu em 1998 e rapidamente ascendeu como um dos pilotos mais técnicos de sua geração. Em 2025, entregou vitórias, pódios e uma temporada extremamente consistente para a Mercedes, reforçando seu status de líder interno e competidor cerebral.",
        country: 'Reino Unido 🇬🇧',
        age: '27 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                label: 'CEO'
            }
        ],
        stats: {
            points: '319',
            podiums: '9',
            bestResult: 'P1',
            xp: '152 GPs'
        },
        signature: "GR63",
        secretFact: "Ama uma pose de powerpoint.",
        zodiac: "Aquário ♒"
    },
    {
        id: 'carlos',
        name: 'Carlos Sainz',
        number: 55,
        team: 'Williams',
        color: '#005AFF',
        image: '/img/pilotos/sainz/grid-sainz.avif',
        photocardImage: '/img/pilotos/sainz/sainz-photocard.jpg',
        bio: "Carlos Sainz nasceu em Madri em 1994 e construiu uma carreira marcada por solidez e inteligência estratégica. Em 2025, correndo pela Williams, entregou pódios e resultados fortes mesmo com equipamento limitado, reforçando sua reputação como um dos pilotos mais consistentes do pelotão.",
        country: 'Espanha 🇪🇸',
        age: '31 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Smooth Operator'
            }
        ],
        stats: {
            points: '64',
            podiums: '2',
            bestResult: 'P3',
            xp: '230 GPs'
        },
        signature: "Chili",
        secretFact: "Smooth Operator original.",
        zodiac: "Virgem ♍"
    },
    {
        id: 'oliver',
        name: 'Oliver Bearman',
        number: 87,
        team: 'Haas',
        color: '#B6BABD',
        image: '/img/pilotos/bearman/grid-bearman.avif',
        photocardImage: '/img/pilotos/bearman/bearman-photocard.jpg',
        bio: "Oliver Bearman nasceu em 2005 no Reino Unido e rapidamente se tornou um prodígio do automobilismo. Sua temporada completa de estreia em 2025 mostrou velocidade, maturidade e capacidade de pontuar com equipamento limitado, consolidando seu status como futura estrela da F1.",
        country: 'Reino Unido 🇬🇧',
        age: '20 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Prodígio'
            }
        ],
        stats: {
            points: '41',
            podiums: '0',
            bestResult: 'P4',
            xp: '27 GPs'
        },
        signature: "Ollie",
        secretFact: "Estudou para a prova de direção durante o GP.",
        zodiac: "Touro ♉"
    },
    {
        id: 'liam',
        name: 'Liam Lawson',
        number: 30,
        team: 'Vcarb',
        color: '#1633EF',
        image: '/img/pilotos/lawson/grid-lawson.avif',
        photocardImage: '/img/pilotos/lawson/lawson-photocard.jpg',
        bio: "Liam Lawson, nascido na Nova Zelândia em 2002, finalmente garantiu uma vaga fixa na Fórmula 1 e entregou uma temporada forte em 2025. Sua condução agressiva, carisma e capacidade de extrair performance mesmo sob pressão fizeram dele um destaque do pelotão intermediário.",
        country: 'Nova Zelândia 🇳🇿',
        age: '23 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Agressivo'
            }
        ],
        stats: {
            points: '38',
            podiums: '0',
            bestResult: 'P5',
            xp: '35 GPs'
        },
        signature: "Lawson",
        secretFact: "Adora carros JDM.",
        zodiac: "Aquário ♒"
    },
    {
        id: 'arvid',
        name: 'Arvid Lindblad',
        number: 22,
        team: 'Vcarb',
        color: '#1633EF',
        image: '/img/pilotos/lindblad/grid-lindblad.avif',
        photocardImage: '/img/pilotos/lindblad/lindblad-photocard.jpg',
        bio: "Arvid Lindblad, nascido na Suécia em 2001, é conhecido por sua pilotagem técnica e calma sob pressão. Em 2025, competindo pela Vcarb, entregou resultados sólidos e mostrou grande potencial para crescer na Fórmula 1.",
        country: 'Suécia 🇸🇪',
        age: '23 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Técnico'
            }
        ],
        stats: {
            points: '25',
            podiums: '0',
            bestResult: 'P6',
            xp: '30 GPs'
        },
        signature: "Lindblad",
        secretFact: "Fã de música clássica.",
        zodiac: "Capricórnio ♑"
    },
    {
        id: 'isack',
        name: 'Isack Hadjar',
        number: 6,
        team: 'red Bull',
        color: '#1E41FF',
        image: '/img/pilotos/hadjar/grid-hadjar.avif',
        photocardImage: '/img/pilotos/hadjar/hadjar-photocard.jpg',
        bio: "Isack Hadjar nasceu na França em 2004 e teve uma ascensão meteórica até a Fórmula 1. Em 2025, conquistou seu primeiro pódio e mostrou agressividade controlada, velocidade natural e excelente adaptação à categoria, consolidando-se como uma das maiores promessas recentes.",
        country: 'França 🇫🇷',
        age: '21 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Promessa'
            }
        ],
        stats: {
            points: '51',
            podiums: '1',
            bestResult: 'P3',
            xp: '23 GPs'
        },
        signature: "Hadjar",
        secretFact: "Treina kart até de madrugada.",
        zodiac: "Libra ♎"
    },
    {
        id: 'nico',
        name: 'Nico Hulkenberg',
        number: 27,
        team: 'Sauber',
        color: '#52E252',
        image: '/img/pilotos/hulkenberg/grid-hulkenberg.avif',
        photocardImage: '/img/pilotos/hulkenberg/hulkenberg-photocard.jpg',
        bio: "Nico Hülkenberg, nascido em 1987, é um dos veteranos mais respeitados da Fórmula 1. Em 2025, conquistou um pódio histórico após anos de espera. Sua pilotagem técnica, experiência e leitura de corrida continuam sendo valiosas para qualquer equipe.",
        country: 'Alemanha 🇩🇪',
        age: '38 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                label: 'Veterano'
            }
        ],
        stats: {
            points: '51',
            podiums: '1',
            bestResult: 'P3',
            xp: '251 GPs'
        },
        signature: "Hulk",
        secretFact: "O rei das sextas-feiras.",
        zodiac: "Leão ♌"
    },
    {
        id: 'esteban',
        name: 'Esteban Ocon',
        number: 31,
        team: 'Haas',
        color: '#B6BABD',
        image: '/img/pilotos/ocon/grid-ocon.avif',
        photocardImage: '/img/pilotos/ocon/ocon-photocard.jpg',
        bio: "Esteban Ocon, nascido em 1996, sempre foi reconhecido por sua consistência, defesa impecável e frieza estratégica. Em 2025, competiu pela Haas e entregou resultados sólidos, mostrando maturidade e profissionalismo mesmo em condições desafiadoras.",
        country: 'França 🇫🇷',
        age: '29 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Consistente'
            }
        ],
        stats: {
            points: '56',
            podiums: '0',
            bestResult: 'P7',
            xp: '427 GPs'
        },
        signature: "Ocon",
        secretFact: "Dirige melhor sob pressão.",
        zodiac: "Virgem ♍"
    },
    {
        id: 'fernando',
        name: 'Fernando Alonso',
        number: 14,
        team: 'Aston Martin',
        color: '#006F62',
        image: '/img/pilotos/alonso/grid-alonso.avif',
        photocardImage: '/img/pilotos/alonso/alonso-photocard.jpg',
        bio: "Fernando Alonso, nascido em 1981, é um dos maiores talentos da história da Fórmula 1. Bicampeão mundial, dono de velocidade pura, inteligência estratégica e longevidade espetacular, seguiu extremamente competitivo em 2025, acumulando top 10s e mantendo sua reputação de lenda viva do esporte.",
        country: 'Espanha 🇪🇸',
        age: '44 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                label: 'Lenda'
            }
        ],
        stats: {
            points: '56',
            podiums: '0',
            bestResult: 'P7',
            xp: '427 GPs'
        },
        signature: "Alo 14",
        secretFact: "Provavelmente venceria se corresse sozinho.",
        zodiac: "Leão ♌"
    },
    {
        id: 'lance',
        name: 'Lance Stroll',
        number: 18,
        team: 'Aston Martin',
        color: '#006F62',
        image: '/img/pilotos/stroll/grid-stroll.avif',
        photocardImage: '/img/pilotos/stroll/stroll-photocard.jpg',
        bio: "Lance Stroll nasceu em 1998 no Canadá e construiu uma carreira marcada por bons desempenhos, incluindo pódios e grandes atuações na chuva. Em 2025, continuou entregando resultados sólidos com a Aston Martin, pontuando regularmente e mostrando evolução técnica.",
        country: 'Canadá 🇨🇦',
        age: '27 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
                label: 'Determinado'
            }
        ],
        stats: {
            points: '33',
            podiums: '0',
            bestResult: 'P9',
            xp: '190 GPs'
        },
        signature: "Lance",
        secretFact: "Adora guiar na chuva.",
        zodiac: "Escorpião ♏"
    },
    {
        id: 'pierre',
        name: 'Pierre Gasly',
        number: 10,
        team: 'Alpine',
        color: '#0090FF',
        image: '/img/pilotos/gasly/grid-gasly.avif',
        photocardImage: '/img/pilotos/gasly/gasly-photocard.jpg',
        bio: "Pierre Gasly nasceu em 1996 e conquistou seu espaço na Fórmula 1 com talento, resiliência e carisma. Vencedor de corrida, entregou uma temporada regular em 2025, somando pontos importantes para a Alpine e mantendo sua reputação de piloto técnico e rápido.",
        country: 'França 🇫🇷',
        age: '29 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
                label: 'Estiloso'
            }
        ],
        stats: {
            points: '22',
            podiums: '0',
            bestResult: 'P7',
            xp: '177 GPs'
        },
        signature: "Gasly",
        secretFact: "Viciado em moda.",
        zodiac: "Aquário ♒"
    },
    {
        id: 'alex',
        name: 'Alex Albon',
        number: 23,
        team: 'Williams',
        color: '#005AFF',
        image: '/img/pilotos/albon/grid-albon.avif',
        photocardImage: '/img/pilotos/albon/albon-photocard.jpg',
        bio: "Alexander Albon nasceu em Londres em 23 de março de 1996 e representa a Tailândia na Fórmula 1. Sua carreira é marcada por resiliência e evolução constante. Em 2025, viveu sua melhor temporada, somando 73 pontos, 11 top 10 e uma volta mais rápida. Suas conduções calmas, limpas e extremamente técnicas o mantêm como um dos pilotos mais valorizados do pelotão intermediário.",
        country: 'Tailândia 🇹🇭',
        age: '29 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
                label: 'Calmo'
            }
        ],
        stats: {
            points: '73',
            podiums: '0',
            bestResult: 'P7',
            xp: '128 GPs'
        },
        signature: "Albon",
        secretFact: "Come arroz com ovo em todo GP.",
        zodiac: "Áries ♈"
    },
    {
        id: 'valtteri',
        name: 'Valtteri Bottas',
        number: 77,
        team: 'Cadillac',
        color: '#003366',
        image: '/img/pilotos/bottas/grid-bottas.avif',
        photocardImage: '/img/pilotos/bottas/bottas-photocard.jpg',
        bio: "Valtteri Bottas, nascido em 1989 na Finlândia, é um piloto experiente conhecido por sua consistência e habilidade técnica. Em 2026, competindo pela Cadillac, entregou resultados sólidos, pontuando regularmente e contribuindo significativamente para o desenvolvimento do time.",
        country: 'Finlândia 🇫🇮',
        age: '35 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
                label: 'Profissional'
            }
        ],
        stats: {
            points: '48',
            podiums: '0',
            bestResult: 'P8',
            xp: '206 GPs'
        },
        signature: "Bottas",
        secretFact: "Ama sauna finlandesa.",
        zodiac: "Leão ♌"
    },
    {
        id: 'checo',
        name: 'Sergio Pérez',
        number: 11,
        team: 'Cadillac',
        color: '#003366',
        image: '/img/pilotos/perez/grid-perez.avif',
        photocardImage: '/img/pilotos/perez/perez-photocard.png',
        bio: "Sergio 'Checo' Pérez, nascido em 1990 no México, é conhecido por sua habilidade excepcional em gerenciamento de pneus e estratégias de corrida inteligentes. Em 2026, competindo pela Cadillac, continuou a demonstrar sua experiência e capacidade de maximizar resultados mesmo em condições desafiadoras.",
        country: 'México 🇲🇽',
        age: '33 anos',
        vibes: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
                label: 'Estratégico'
            }
        ],
        stats: {
            points: '45',
            podiums: '0',
            bestResult: 'P8',
            xp: '215 GPs'
        },
        signature: "Checo",
        secretFact: "Fã de tacos autênticos.",
        zodiac: "Câncer ♋"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/teams.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STANDINGS_TEAMS",
    ()=>STANDINGS_TEAMS,
    "TEAMS_DATA",
    ()=>TEAMS_DATA
]);
const TEAMS_DATA = [
    {
        id: 'mercedes',
        name: 'Mercedes',
        fullName: 'Mercedes-AMG PETRONAS F1 Team',
        color: '#00D2BE',
        engine: 'Mercedes',
        drivers: [
            'George Russell',
            'Kimi Antonelli'
        ],
        domain: 'mercedesamgf1.com',
        image: '/img/equipes/mercedes/logo-mercedes.png',
        car: 'img/equipes/mercedes/carro-mercedes.avif',
        titles: 8,
        base: 'Brackley, Inglaterra',
        principal: 'Toto Wolff',
        bio: 'A Mercedes dominou a F1 na era turbo-híbrida (2014-2021) com 8 títulos consecutivos de construtores, estabelecendo um dos períodos mais dominantes da história do esporte. Sediada em Brackley (chassis) e Brixworth (motores), a equipe alemã é conhecida por sua excelência técnica e gestão impecável. Para 2026, representa uma nova era pós-Hamilton, com George Russell como líder estabelecido e Kimi Antonelli, jovem prodígio italiano, fazendo sua estreia. A Mercedes também fornece motores para McLaren, Williams e Alpine, tornando-se o maior fornecedor do grid. A equipe busca retornar ao topo após temporadas desafiadoras.'
    },
    {
        id: 'ferrari',
        name: 'Ferrari',
        fullName: 'Scuderia Ferrari HP',
        color: '#FF0000',
        engine: 'Ferrari',
        drivers: [
            'Charles Leclerc',
            'Lewis Hamilton'
        ],
        domain: 'ferrari.com',
        image: '/img/equipes/ferrari/logo-ferrari.png',
        car: 'img/equipes/ferrari/carro-ferrari.avif',
        titles: 16,
        base: 'Maranello, Itália',
        principal: 'Fred Vasseur',
        bio: 'A Ferrari é a única equipe presente desde a primeira temporada da Fórmula 1 em 1950, sendo sinônimo do esporte. Com 16 títulos de construtores e 15 de pilotos, a Scuderia é a equipe mais vitoriosa da história. Sediada em Maranello, a Ferrari produz seus próprios motores e chassis, sendo a verdadeira equipe de fábrica da categoria. Para 2026, conta com a dupla de sonho formada por Charles Leclerc, piloto da casa e futuro da equipe, e Lewis Hamilton, o heptacampeão mundial que se juntou à Ferrari em 2025 na transferência mais impactante da história recente da F1. A equipe busca retornar ao topo após anos sem títulos.'
    },
    {
        id: 'redbull',
        name: 'Red Bull Racing',
        fullName: 'Oracle Red Bull Racing',
        color: '#1E41FF',
        engine: 'Red Bull Powertrains-Ford',
        drivers: [
            'Max Verstappen',
            'Isaack Hadjar'
        ],
        domain: 'redbullracing.com',
        image: '/img/equipes/redbull/logo-redbull.png',
        car: 'img/equipes/redbull/carro-redbull.avif',
        titles: 7,
        base: 'Milton Keynes, Inglaterra',
        principal: 'Laurent Mekies',
        bio: 'A Red Bull Racing entrou na F1 em 2005 após comprar a Jaguar e rapidamente se estabeleceu como uma potência. Com 7 títulos de construtores e 7 de pilotos (2010-2013 com Vettel e 2021-2024 com Verstappen), a equipe austríaca dominou a última era da F1. Para 2026, marca uma nova fase com motores próprios desenvolvidos em parceria com a Ford, encerrando a parceria com Honda. Max Verstappen continua como líder, enquanto Isack Hadjar, promovido da Racing Bulls, representa a nova geração de talentos da academia Red Bull. A equipe enfrenta o desafio de se adaptar aos novos regulamentos enquanto mantém a competitividade.'
    },
    {
        id: 'mclaren',
        name: 'McLaren',
        fullName: 'McLaren F1 Team',
        color: '#FF8700',
        engine: 'Mercedes',
        drivers: [
            'Lando Norris',
            'Oscar Piastri'
        ],
        domain: 'mclaren.com',
        image: '/img/equipes/mclaren/logo-mclaren.png',
        car: 'img/equipes/mclaren/carro-mclaren.avif',
        titles: 8,
        base: 'Woking, Inglaterra',
        principal: 'Andrea Stella',
        bio: 'A McLaren é uma das equipes mais icônicas da Fórmula 1, fundada por Bruce McLaren em 1963. Com 8 títulos de construtores e 12 de pilotos, a equipe de Woking é a segunda mais bem-sucedida da história da F1. Após anos difíceis, a McLaren ressurgiu como força competitiva a partir de 2021 com o retorno dos motores Mercedes. Em 2025, conquistou o campeonato de construtores e viu Lando Norris tornar-se campeão mundial, marcando o início de uma nova era dourada. A dupla Norris-Piastri é considerada uma das mais fortes do grid, combinando juventude, talento e experiência crescente.'
    },
    {
        id: 'astonmartin',
        name: 'Aston Martin',
        fullName: 'Aston Martin Aramco F1 Team',
        color: '#006F62',
        engine: 'Honda',
        drivers: [
            'Fernando Alonso',
            'Lance Stroll'
        ],
        domain: 'astonmartinf1.com',
        image: '/img/equipes/astonmartin/logo-astonmartin.png',
        car: 'img/equipes/astonmartin/carro-astonmartin.avif',
        titles: 0,
        base: 'Silverstone, Inglaterra',
        principal: 'Adrian Newey',
        bio: 'A Aston Martin renasceu em 2021 quando o empresário Lawrence Stroll renomeou a Racing Point, trazendo de volta o icônico nome britânico à F1. Com investimentos massivos em infraestrutura, incluindo um túnel de vento de última geração e novas instalações em Silverstone, a equipe busca se estabelecer entre as grandes. Para 2026, representa uma mudança histórica: Adrian Newey, o designer mais bem-sucedido da história da F1, assume como chefe de equipe, e a Honda retorna como parceira de motores. Fernando Alonso, bicampeão mundial, continua desafiando a idade aos 44 anos, enquanto Lance Stroll complementa a formação.'
    },
    {
        id: 'alpine',
        name: 'Alpine',
        fullName: 'BWT Alpine F1 Team',
        color: '#0090FF',
        engine: 'Mercedes',
        drivers: [
            'Pierre Gasly',
            'Franco Colapinto'
        ],
        domain: 'alpinecars.com',
        image: '/img/equipes/alpine/logo-alpine.png',
        car: 'img/equipes/alpine/carro-alpine.avif',
        titles: 2,
        base: 'Enstone, Inglaterra',
        principal: 'Flavio Briatore / Steve Nielsen',
        bio: 'A Alpine representa a operação francesa na F1, com raízes que remontam à Benetton e aos títulos mundiais com a Renault em 2005 e 2006. Sediada em Enstone, a equipe passou por transformação significativa em 2026 ao abandonar os motores Renault (pela primeira vez desde os anos 90) em favor dos Mercedes. Esta mudança marca o fim de uma era, com a Alpine tornando-se equipe cliente após décadas como equipe de fábrica. Pierre Gasly lidera a formação, enquanto Franco Colapinto, que impressionou ao substituir Jack Doohan em 2025, confirma-se como titular. A equipe busca reconstruir sua competitividade sob nova liderança.'
    },
    {
        id: 'haas',
        name: 'Haas',
        fullName: 'MoneyGram Haas F1 Team',
        color: '#B6BABD',
        engine: 'Ferrari',
        drivers: [
            'Esteban Ocon',
            'Oliver Bearman'
        ],
        domain: 'haasf1team.com',
        image: '/img/equipes/haas/logo-haas.png',
        car: 'img/equipes/haas/carro-haas.avif',
        titles: 0,
        base: 'Kannapolis, EUA / Banbury, Inglaterra',
        principal: 'Ayao Komatsu',
        bio: 'A Haas é a equipe americana que estreou na F1 em 2016, fundada pelo empresário Gene Haas. Operando com base nos EUA e instalações na Inglaterra, a equipe adota um modelo único de parceria estreita com a Ferrari, fornecedora de motores e diversos componentes. Para 2026, a Haas mantém sua dupla renovada de 2025: Esteban Ocon, experiente vencedor de GP, e Oliver Bearman, jovem talento britânico que impressionou em sua temporada de estreia. A equipe tem mostrado progresso consistente e busca se estabelecer no meio do grid, aproveitando os novos regulamentos para dar um salto competitivo.'
    },
    {
        id: 'rb',
        name: 'Racing Bulls',
        fullName: 'Visa Cash App RB F1 Team',
        color: '#1633EF',
        engine: 'Red Bull Powertrains-Ford',
        drivers: [
            'Liam Lawson',
            'Arvid Lindblad'
        ],
        domain: 'visacashapprb.com',
        image: '/img/equipes/rb/logo-rb.png',
        car: 'img/equipes/rb/carro-rb.avif',
        titles: 0,
        base: 'Faenza, Itália',
        principal: 'Alan Permane',
        bio: 'A Racing Bulls (anteriormente Toro Rosso e AlphaTauri) é a equipe irmã da Red Bull Racing, servindo como plataforma de desenvolvimento para jovens talentos da academia Red Bull. Sediada em Faenza, Itália, a equipe tem tradição em revelar futuros campeões como Sebastian Vettel e Max Verstappen. Para 2026, continua sua missão com Liam Lawson, piloto neozelandês que retorna após ser rebaixado da Red Bull em 2025, e Arvid Lindblad, prodígio britânico-sueco de apenas 18 anos fazendo sua estreia direta da Fórmula 2. A equipe compartilhará os novos motores Red Bull-Ford com a equipe principal.'
    },
    {
        id: 'williams',
        name: 'Williams',
        fullName: 'Williams Racing',
        color: '#005AFF',
        engine: 'Mercedes',
        drivers: [
            'Alex Albon',
            'Carlos Sainz'
        ],
        domain: 'williamsf1.com',
        image: '/img/equipes/williams/logo-williams.png',
        car: 'img/equipes/williams/carro-williams.avif',
        titles: 9,
        base: 'Grove, Inglaterra',
        principal: 'James Vowles',
        bio: 'A Williams é uma das equipes mais lendárias da F1, fundada por Sir Frank Williams em 1977. Com 9 títulos de construtores e 7 de pilotos, a equipe de Grove atravessou anos difíceis desde seu último título em 1997. Sob nova liderança de James Vowles (ex-Mercedes), a Williams passa por reconstrução significativa. Para 2026, conta com Alex Albon como líder e Carlos Sainz, experiente piloto espanhol que deixou a Ferrari, formando uma dupla sólida. A parceria com Mercedes continua fornecendo motores competitivos. A equipe busca aproveitar os novos regulamentos para retornar ao topo do grid.'
    },
    {
        id: 'audi',
        name: 'Audi',
        fullName: 'Audi F1 Team',
        color: '#000000',
        engine: 'Audi',
        drivers: [
            'Nico Hulkenberg',
            'Gabriel Bortoleto'
        ],
        domain: 'audi.com',
        image: '/img/equipes/audi/logo-audi.png',
        car: 'img/equipes/audi/carro-audi.avif',
        titles: 0,
        base: 'Hinwil, Suíça',
        principal: 'Jonathan Wheatley',
        bio: 'A Audi marca o retorno de uma grande montadora alemã à F1, tendo adquirido a equipe Sauber em 2024. Esta é a primeira incursão da Audi na Fórmula 1, embora sua empresa predecessora Auto Union tenha competido antes da Segunda Guerra Mundial. Sediada em Hinwil, Suíça, a equipe passa por transformação completa para se tornar operação de fábrica com motores próprios. Para 2026, conta com Nico Hülkenberg, experiente piloto alemão que finalmente conquistou seu primeiro pódio em 2025, e Gabriel Bortoleto, jovem brasileiro campeão da F2 2024. Jonathan Wheatley, ex-Red Bull, lidera a transição como chefe de equipe. A Audi chega com grandes ambições e recursos para se estabelecer entre as principais forças da categoria.'
    },
    {
        id: 'cadillac',
        name: 'Cadillac',
        fullName: 'Cadillac F1 Team',
        color: '#E6BE56',
        engine: 'Ferrari',
        drivers: [
            'Valteri Bottas',
            'Sergio Perez'
        ],
        domain: 'cadillac.com',
        image: '/img/equipes/cadillac/logo-cadillac.png',
        car: 'img/equipes/cadillac/carro-cadillac.avif',
        titles: 0,
        base: 'Estados Unidos',
        principal: 'A confirmar',
        bio: 'A Cadillac faz história como a 11ª equipe do grid e a segunda equipe americana na F1 moderna (ao lado da Haas), marcando a expansão mais significativa da categoria em anos. Parte do grupo General Motors, a Cadillac inicialmente usará motores Ferrari enquanto desenvolve sua própria unidade de potência prevista para 2029. Para sua temporada de estreia, escolheu experiência: Valtteri Bottas (ex-Mercedes e Sauber) e Sergio Pérez (ex-Red Bull), dois pilotos veteranos com mais de 500 GPs combinados. A entrada da Cadillac reflete o crescimento da F1 nos Estados Unidos, onde a categoria agora disputa três corridas. A equipe chega com ambições de longo prazo e apoio de uma das maiores montadoras mundiais.'
    }
];
const STANDINGS_TEAMS = [
    {
        pos: 1,
        name: 'McLaren',
        points: 756
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/glossary.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GLOSSARY_DATA",
    ()=>GLOSSARY_DATA,
    "GLOSSARY_SETS",
    ()=>GLOSSARY_SETS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-client] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-client] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dot.js [app-client] (ecmascript) <export default as CircleDot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-client] (ecmascript) <export default as Flag>");
;
const GLOSSARY_SETS = [
    {
        id: 'general',
        title: "Dicionário Geral A-Z",
        description: "Termos essenciais para entender o que os narradores dizem.",
        color: "#caa5d8",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
        items: [
            {
                id: 'aero',
                term: "Aerodinâmica",
                definition: "Estudo do fluxo de ar e da interação entre o ar e o carro em movimento. Fundamental para desempenho e velocidade."
            },
            {
                id: 'apex',
                term: "Apex",
                definition: "O ponto médio ou mais fechado de uma curva. Acertar o apex correto é essencial para o tempo de volta mais rápido."
            },
            {
                id: 'aquaplaning',
                term: "Aquaplaning",
                definition: "Perda de tração quando os pneus deslizam sobre água acumulada na pista."
            },
            {
                id: 'blistering',
                term: "Blistering",
                definition: "Degradação do pneu causada por superaquecimento, fazendo a borracha se desprender em pedaços."
            },
            {
                id: 'brake-mig',
                term: "Brake Migration",
                definition: "Movimento da distribuição de frenagem para trás durante uma frenagem, compensando a redução de downforce."
            },
            {
                id: 'camber',
                term: "Camber",
                definition: "Ângulo de inclinação do pneu em relação ao eixo vertical. Afeta a área de contato do pneu com o asfalto."
            },
            {
                id: 'clean-air',
                term: "Clean Air (Ar Limpo)",
                definition: "Ar não perturbado à frente de um carro, proporcionando máxima eficiência aerodinâmica."
            },
            {
                id: 'dirty-air',
                term: "Dirty Air (Ar Sujo)",
                definition: "Ar turbulento deixado pelo carro à frente, dificultando ultrapassagens e reduzindo downforce."
            },
            {
                id: 'downforce',
                term: "Downforce",
                definition: "Força aerodinâmica que empurra o carro para baixo, aumentando aderência e velocidade nas curvas."
            },
            {
                id: 'drag',
                term: "Drag (Arrasto)",
                definition: "Resistência aerodinâmica que o carro enfrenta ao se mover pelo ar. Reduz velocidade máxima."
            },
            {
                id: 'graining',
                term: "Graining",
                definition: "Quando pequenos pedaços de borracha se desprendem da superfície do pneu, reduzindo aderência temporariamente."
            },
            {
                id: 'grand-chelem',
                term: "Grand Chelem",
                definition: "Feito raro: Pole position, vitória, volta mais rápida e liderar todas as voltas da corrida."
            },
            {
                id: 'grip',
                term: "Grip",
                definition: "Nível de aderência que o carro tem com o asfalto."
            },
            {
                id: 'halo',
                term: "Halo",
                definition: "Estrutura de proteção em titânio ao redor do cockpit, obrigatória desde 2018."
            },
            {
                id: 'lock-up',
                term: "Lock-up",
                definition: "Quando as rodas param de girar durante a frenagem, causando trava e ponto plano no pneu."
            },
            {
                id: 'marbles',
                term: "Marbles",
                definition: "Pedaços de borracha degradada que se acumulam fora da linha de corrida, reduzindo a aderência."
            },
            {
                id: 'oversteer',
                term: "Oversteer (Sair de Traseira)",
                definition: "Quando a traseira do carro perde aderência e tenta 'ultrapassar' a dianteira em curvas."
            },
            {
                id: 'parc-ferme',
                term: "Parc Fermé",
                definition: "Regra que proíbe as equipes de mexerem nos carros após a classificação."
            },
            {
                id: 'porpoising',
                term: "Porpoising",
                definition: "Efeito de quicamento vertical do carro causado por aerodinâmica (comum em 2022-2024)."
            },
            {
                id: 'slipstream',
                term: "Slipstream (Vácuo)",
                definition: "Efeito de sucção atrás de outro carro que reduz arrasto e aumenta velocidade."
            },
            {
                id: 'understeer',
                term: "Understeer (Sair de Frente)",
                definition: "Quando o carro não vira o suficiente apesar do comando do volante, tendendo a seguir reto."
            }
        ]
    },
    {
        id: 'tech-2026',
        title: "Nova Era 2026",
        description: "Tudo sobre o novo regulamento, X-Mode, Z-Mode e motores.",
        color: "#FF69B4",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        items: [
            {
                id: 'active-aero',
                term: "Aerodinâmica Ativa",
                definition: "Sistema que substitui o DRS. Os carros alternam entre X-Mode (reta) e Z-Mode (curva)."
            },
            {
                id: 'x-mode',
                term: "X-Mode (Reta)",
                definition: "Modo de baixo arrasto com asas abertas para velocidade máxima. O substituto do DRS."
            },
            {
                id: 'z-mode',
                term: "Z-Mode (Curva)",
                definition: "Modo de alta downforce com asas fechadas para 'grudar' no chão nas curvas."
            },
            {
                id: 'override',
                term: "MGU-K Override",
                definition: "Novo sistema de ultrapassagem. Boost de 350kW (elétrico) quando se está a 1s do rival."
            },
            {
                id: 'ice-2026',
                term: "Motor 2026 (ICE)",
                definition: "V6 1.6L Turbo. Mais fraco que o anterior (540bhp), mas compensado pela parte elétrica."
            },
            {
                id: 'mguk-2026',
                term: "MGU-K 2026",
                definition: "A parte elétrica triplicou de força! Agora gera 470bhp (quase metade da potência total)."
            },
            {
                id: 'sustentavel',
                term: "Combustível Sustentável",
                definition: "100% obrigatório a partir de 2026, sem origem fóssil."
            },
            {
                id: 'dimensoes',
                term: "Carros Menores",
                definition: "Em 2026, os carros são 20cm mais curtos e 10cm mais estreitos que seus antecessores."
            },
            {
                id: 'livery',
                term: "Regra de Pintura",
                definition: "Acabou o carro todo preto! Mínimo de 55% do carro deve ter tinta/adesivo, escondendo o carbono."
            }
        ]
    },
    {
        id: 'radio',
        title: "Rádio & Box",
        description: "Entenda o que o engenheiro fala no ouvido do piloto.",
        color: "#00CED1",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
        items: [
            {
                id: 'box-box',
                term: "Box, Box!",
                definition: "Ordem para entrar nos boxes IMEDIATAMENTE naquela volta."
            },
            {
                id: 'lift-coast',
                term: "Lift and Coast",
                definition: "Tirar o pé do acelerador antes de frear. Serve para economizar combustível ou bateria."
            },
            {
                id: 'push',
                term: "Push!",
                definition: "Acelere ao máximo! Dê tudo o que o carro tem agora."
            },
            {
                id: 'undercut',
                term: "Undercut",
                definition: "Parar ANTES do rival para pegar pneus novos e ganhar a posição quando ele parar."
            },
            {
                id: 'overcut',
                term: "Overcut",
                definition: "Ficar na pista MAIS tempo que o rival, tentando ganhar a posição no ritmo."
            },
            {
                id: 'double-stack',
                term: "Double Stack",
                definition: "Quando a equipe para os dois carros um seguido do outro na mesma volta."
            },
            {
                id: 'check',
                term: "We are checking",
                definition: "A frase clássica (especialmente da Ferrari) quando o engenheiro ainda está analisando os dados."
            },
            {
                id: 'blue-flag-radio',
                term: "Blue Flags",
                definition: "Aviso de que um carro mais rápido vem atrás e o piloto deve deixar passar."
            },
            {
                id: 'strat',
                term: "Strat [Número]",
                definition: "Comando para mudar o mapa do motor para uma estratégia específica."
            }
        ]
    },
    {
        id: 'tyres',
        title: "Pneus & Estratégia",
        description: "Compostos C1 a C5, chuva e janelas de temperatura.",
        color: "#FF7F50",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__["CircleDot"],
        items: [
            {
                id: 'c1',
                term: "C1 (Duro)",
                definition: "O pneu mais duro de todos (Faixa Branca). Dura muito, mas é lento e difícil de aquecer."
            },
            {
                id: 'c3',
                term: "C3 (Médio)",
                definition: "O pneu 'faz tudo' (Faixa Amarela). Equilíbrio perfeito entre velocidade e durabilidade."
            },
            {
                id: 'c5',
                term: "C5 (Macio)",
                definition: "O mais rápido de todos (Faixa Vermelha). Gruda muito, mas acaba em poucas voltas. Rei de Mônaco."
            },
            {
                id: 'inter',
                term: "Intermediário (Verde)",
                definition: "Para pista úmida. O pneu mais versátil para condições mistas."
            },
            {
                id: 'wet',
                term: "Full Wet (Azul)",
                definition: "Para dilúvio. Escoa 85 litros de água por segundo a 300km/h."
            },
            {
                id: 'blankets',
                term: "Tyre Blankets",
                definition: "Cobertores elétricos que aquecem os pneus antes de serem colocados no carro."
            },
            {
                id: 'window',
                term: "Janela de Operação",
                definition: "A temperatura ideal do pneu. Se estiver frio, escorrega. Se passar, derrete."
            }
        ]
    },
    {
        id: 'rules',
        title: "Regras & Bandeiras",
        description: "Penalidades, pontuação e o significado das bandeiras.",
        color: "#FFD700",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"],
        items: [
            {
                id: 'flag-yellow',
                term: "Bandeira Amarela",
                definition: "Perigo! Reduza a velocidade e proibido ultrapassar."
            },
            {
                id: 'flag-red',
                term: "Bandeira Vermelha",
                definition: "Corrida paralisada. Todos voltam para o box. Acontece em acidentes graves."
            },
            {
                id: 'flag-blue',
                term: "Bandeira Azul",
                definition: "Você é retardatário. Deixe o líder passar ou levará punição."
            },
            {
                id: 'sc',
                term: "Safety Car (SC)",
                definition: "Carro de segurança. Entra na pista para agrupar o pelotão em ritmo lento."
            },
            {
                id: 'vsc',
                term: "Virtual Safety Car (VSC)",
                definition: "Não há carro na pista, mas todos devem manter uma velocidade reduzida controlada."
            },
            {
                id: 'cap',
                term: "Cost Cap (Teto de Gastos)",
                definition: "Limite de US$ 215 milhões (em 2026) que as equipes podem gastar por ano."
            },
            {
                id: 'sprint',
                term: "Sprint Race",
                definition: "Corrida curta de 100km aos sábados. Vale 8 pontos para o vencedor."
            },
            {
                id: 'points',
                term: "Pontuação GP",
                definition: "1º (25pts), 2º (18), 3º (15), 4º (12), 5º (10), 6º (8), 7º (6), 8º (4), 9º (2), 10º (1)."
            }
        ]
    }
];
const GLOSSARY_DATA = GLOSSARY_SETS[0].items;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/calendar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CIRCUITS_DATA",
    ()=>CIRCUITS_DATA,
    "RACES_2025",
    ()=>RACES_2025
]);
const RACES_2025 = [
    {
        round: 1,
        name: 'GP da Austrália',
        date: '16 Mar',
        circuit: 'Albert Park',
        status: 'completed',
        winner: 'L. Norris 🥇',
        podium: [
            'L. Norris 🥇',
            'M. Verstappen 🥈',
            'G. Russell 🥉'
        ]
    },
    // ... (a lista inteira continua, pode usar a que você já tem)
    {
        round: 24,
        name: 'GP de Abu Dhabi',
        date: '07 Dez',
        circuit: 'Yas Marina',
        status: 'upcoming'
    }
];
const CIRCUITS_DATA = [
    {
        id: 'interlagos',
        name: 'Autódromo de Interlagos',
        gp: 'GP de São Paulo',
        country: 'Brasil',
        flag: '🇧🇷',
        date: '07-09 Nov',
        length: '4.309 km',
        laps: 71,
        record: '1:10.540 (Bottas, 2018)',
        layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Brazil_Circuit.png.transform/7col/image.png'
    },
    {
        id: 'las-vegas',
        name: 'Las Vegas Strip Circuit',
        gp: 'GP de Las Vegas',
        country: 'EUA',
        flag: '🇺🇸',
        date: '20-22 Nov',
        length: '6.201 km',
        laps: 50,
        record: '1:35.490 (Piastri, 2023)',
        layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Las_Vegas_Circuit.png.transform/7col/image.png'
    },
    {
        id: 'lusail',
        name: 'Lusail International Circuit',
        gp: 'GP do Catar',
        country: 'Catar',
        flag: '🇶🇦',
        date: '28-30 Nov',
        length: '5.419 km',
        laps: 57,
        record: '1:24.319 (Verstappen, 2023)',
        layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Qatar_Circuit.png.transform/7col/image.png'
    },
    {
        id: 'yas-marina',
        name: 'Yas Marina Circuit',
        gp: 'GP de Abu Dhabi',
        country: 'EAU',
        flag: '🇦🇪',
        date: '05-07 Dez',
        length: '5.281 km',
        laps: 58,
        record: '1:26.103 (Verstappen, 2021)',
        layout: 'https://media.formula1.com/image/upload/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Abu_Dhabi_Circuit.png.transform/7col/image.png'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/news.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ARTICLES_DATA",
    ()=>ARTICLES_DATA,
    "MANIFESTO_POST",
    ()=>MANIFESTO_POST,
    "NEWS_DATA",
    ()=>NEWS_DATA
]);
const NEWS_DATA = [
    {
        id: 'news-1',
        title: "Verstappen vence em Vegas e retoma liderança por 1 ponto!",
        category: "GP Vegas",
        time: "12h atrás",
        image: "https://images.unsplash.com/photo-1506191839364-10509691934e?q=80&w=800",
        author: "Tamu",
        content: `<p class="lead">Reviravolta no campeonato! Com a desclassificação das McLarens, Max Verstappen vence e vira o jogo.</p>`
    }
];
const MANIFESTO_POST = {
    id: "manifesto",
    title: "Correndo como uma garota.",
    category: "Manifesto",
    time: "19 Nov",
    author: "Tamu",
    image: "/img/web/manifesto.jpg",
    excerpt: "O automobilismo sempre foi feito de barulho, mas a internet transformou isso numa bagunça.",
    contentLight: `... (todo aquele HTML do manifesto) ...`,
    contentDark: `... (todo aquele HTML do manifesto) ...`
};
const ARTICLES_DATA = [];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/ui-config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LOGO_DARK_URL",
    ()=>LOGO_DARK_URL,
    "LOGO_LIGHT_URL",
    ()=>LOGO_LIGHT_URL,
    "NEON",
    ()=>NEON,
    "PASTEL",
    ()=>PASTEL,
    "SITE_MAP",
    ()=>SITE_MAP,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-client] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-client] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-client] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
;
const LOGO_DARK_URL = "/img/web/DARK-MODE-HEADER.png";
const LOGO_LIGHT_URL = "/img/web/LIGHT-MODE-HEADER.png";
const PASTEL = {
    pink: '#fac4dc',
    purple: '#caa5d8',
    blue: '#bbd3f2',
    bg: '#FFFDFE'
};
const NEON = {
    bg: '#141416',
    purple: '#bd00ff',
    cyan: '#00fff2',
    pink: '#caa5d8',
    surface: '#1e1e24'
};
const SOCIAL_LINKS = [
    {
        id: 'insta',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        url: 'https://instagram.com/autamubilismo',
        label: 'Instagram'
    },
    {
        id: 'twitter',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        url: 'https://twitter.com/autamubilismo',
        label: 'Twitter'
    },
    {
        id: 'youtube',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        url: 'https://tiktok.com/@autamubilismo',
        label: 'Youtube'
    },
    {
        id: 'mail',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        url: 'mailto:contato@autamubilismo.com',
        label: 'Email'
    }
];
const SITE_MAP = [
    {
        id: 'home',
        label: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        path: '/',
        desc: 'Painel Principal'
    },
    {
        id: 'news',
        label: 'Notícias',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
        path: '/news',
        desc: 'Últimas do Paddock'
    },
    {
        id: 'season',
        label: 'Temporada',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        path: '/season',
        desc: 'Calendário & Pontos'
    },
    {
        id: 'drivers',
        label: 'Pilotos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        path: '/drivers',
        desc: 'Grid de 2025'
    },
    {
        id: 'teams',
        label: 'Equipes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        path: '/teams',
        desc: 'Carros & Motores'
    },
    {
        id: 'fanzone',
        label: 'Fanzone',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        path: '/fanzone',
        desc: 'Comunidade & Artes'
    },
    {
        id: 'curiosities',
        label: 'Curiosidades',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        path: '/curiosities',
        desc: 'Fatos & História'
    },
    {
        id: 'glossary',
        label: 'Glossário',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        path: '/glossary',
        desc: 'Dicionário da F1'
    },
    {
        id: 'articles',
        label: 'Artigos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        path: '/articles',
        desc: 'Análises & Opinião'
    },
    {
        id: 'media',
        label: 'Multimídia',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
        path: '/media',
        desc: 'Playlists & Vídeos'
    },
    {
        id: 'contact',
        label: 'Contato',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        path: '/contact',
        desc: 'Fale com a gente'
    },
    {
        id: 'credits',
        label: 'Créditos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        path: '/credits',
        desc: 'Quem faz'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/standings2026.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/standings2026.js
// 🏆 CLASSIFICAÇÃO DE PILOTOS 2026
__turbopack_context__.s([
    "CONSTRUCTORS_STANDINGS",
    ()=>CONSTRUCTORS_STANDINGS,
    "DRIVERS_STANDINGS",
    ()=>DRIVERS_STANDINGS,
    "POINTS_SYSTEM",
    ()=>POINTS_SYSTEM,
    "SEASON_STATS",
    ()=>SEASON_STATS
]);
const DRIVERS_STANDINGS = [
    {
        position: 1,
        driverId: 'kimi',
        driverName: 'Kimi Antonelli',
        driverNumber: 12,
        image: 'img/pilotos/grid-antonelli.avif',
        team: 'Mercedes-AMG',
        teamColor: '#00D2BE',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 2,
        driverId: 'lewis',
        driverName: 'Lewis Hamilton',
        driverNumber: 44,
        image: 'img/pilotos/grid-hamilton.avif',
        team: 'Ferrari',
        teamColor: '#FF0000',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 3,
        driverId: 'gabriel',
        driverName: 'Gabriel Bortoleto',
        driverNumber: 5,
        image: 'img/pilotos/grid-bortoleto.avif',
        team: 'Sauber',
        teamColor: '#52E252',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 4,
        driverId: 'max',
        driverName: 'Max Verstappen',
        driverNumber: 1,
        image: 'img/pilotos/grid-verstappen.avif',
        team: 'Red Bull',
        teamColor: '#1E41FF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 5,
        driverId: 'lando',
        driverName: 'Lando Norris',
        driverNumber: 4,
        image: 'img/pilotos/grid-norris.avif',
        team: 'McLaren',
        teamColor: '#FF8700',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 6,
        driverId: 'charles',
        driverName: 'Charles Leclerc',
        driverNumber: 16,
        image: 'img/pilotos/grid-leclerc.avif',
        team: 'Ferrari',
        teamColor: '#FF0000',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 7,
        driverId: 'oscar',
        driverName: 'Oscar Piastri',
        driverNumber: 81,
        image: 'img/pilotos/grid-piastri.avif',
        team: 'McLaren',
        teamColor: '#FF8700',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 8,
        driverId: 'george',
        driverName: 'George Russell',
        driverNumber: 63,
        image: 'img/pilotos/grid-russell.avif',
        team: 'Mercedes-AMG',
        teamColor: '#00D2BE',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 9,
        driverId: 'carlos',
        driverName: 'Carlos Sainz',
        driverNumber: 55,
        image: 'img/pilotos/grid-sainz.avif',
        team: 'Williams',
        teamColor: '#005AFF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 10,
        driverId: 'oliver',
        driverName: 'Oliver Bearman',
        driverNumber: 87,
        image: 'img/pilotos/grid-bearman.avif',
        team: 'Haas',
        teamColor: '#B6BABD',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 11,
        driverId: 'liam',
        driverName: 'Liam Lawson',
        driverNumber: 30,
        image: 'img/pilotos/grid-lawson.avif',
        team: 'Red Bull',
        teamColor: '#1E41FF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 12,
        driverId: 'isack',
        driverName: 'Isack Hadjar',
        driverNumber: 6,
        image: 'img/pilotos/grid-hadjar.avif',
        team: 'VCARB',
        teamColor: '#1633EF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 13,
        driverId: 'nico',
        driverName: 'Nico Hulkenberg',
        driverNumber: 27,
        image: 'img/pilotos/grid-hulkenberg.avif',
        team: 'Sauber',
        teamColor: '#52E252',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 14,
        driverId: 'esteban',
        driverName: 'Esteban Ocon',
        driverNumber: 31,
        image: 'img/pilotos/grid-ocon.avif',
        team: 'Haas',
        teamColor: '#B6BABD',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 15,
        driverId: 'fernando',
        driverName: 'Fernando Alonso',
        driverNumber: 14,
        image: 'img/pilotos/grid-alonso.avif',
        team: 'Aston Martin',
        teamColor: '#006F62',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 16,
        driverId: 'lance',
        driverName: 'Lance Stroll',
        driverNumber: 18,
        image: 'img/pilotos/grid-stroll.avif',
        team: 'Aston Martin',
        teamColor: '#006F62',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 17,
        driverId: 'pierre',
        driverName: 'Pierre Gasly',
        driverNumber: 10,
        image: 'img/pilotos/grid-gasly.avif',
        team: 'Alpine',
        teamColor: '#0090FF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 18,
        driverId: 'alex',
        driverName: 'Alex Albon',
        driverNumber: 23,
        image: 'img/pilotos/grid-albon.avif',
        team: 'Williams',
        teamColor: '#005AFF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    },
    {
        position: 19,
        driverId: 'yuki',
        driverName: 'Yuki Tsunoda',
        driverNumber: 22,
        image: 'img/pilotos/grid-tsunoda.avif',
        team: 'VCARB',
        teamColor: '#1633EF',
        points: 0,
        wins: 0,
        podiums: 0,
        fastestLaps: 0,
        dnfs: 0,
        poles: 0
    }
];
const CONSTRUCTORS_STANDINGS = [
    {
        position: 1,
        teamId: 'mercedes',
        teamName: 'Mercedes-AMG Petronas',
        teamShortName: 'Mercedes-AMG',
        image: 'img/equipes/mercedes/logo-mercedes.png',
        teamColor: '#00D2BE',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Kimi Antonelli',
            'George Russell'
        ]
    },
    {
        position: 2,
        teamId: 'ferrari',
        teamName: 'Scuderia Ferrari',
        teamShortName: 'Ferrari',
        image: 'img/equipes/ferrari/logo-ferrari.png',
        teamColor: '#FF0000',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Lewis Hamilton',
            'Charles Leclerc'
        ]
    },
    {
        position: 3,
        teamId: 'red-bull',
        teamName: 'Oracle Red Bull Racing',
        teamShortName: 'Red Bull',
        image: 'img/equipes/red-bull/logo-redbull.png',
        teamColor: '#1E41FF',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Max Verstappen',
            'Liam Lawson'
        ]
    },
    {
        position: 4,
        teamId: 'mclaren',
        teamName: 'McLaren F1 Team',
        teamShortName: 'McLaren',
        image: 'img/equipes/mclaren/logo-mclaren.png',
        teamColor: '#FF8700',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Lando Norris',
            'Oscar Piastri'
        ]
    },
    {
        position: 5,
        teamId: 'aston-martin',
        teamName: 'Aston Martin Aramco F1 Team',
        teamShortName: 'Aston Martin',
        image: 'img/equipes/aston-martin/logo-astonmartin.png',
        teamColor: '#006F62',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Fernando Alonso',
            'Lance Stroll'
        ]
    },
    {
        position: 6,
        teamId: 'alpine',
        teamName: 'BWT Alpine F1 Team',
        teamShortName: 'Alpine',
        image: 'img/equipes/alpine/logo-alpine.png',
        teamColor: '#0090FF',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Pierre Gasly'
        ]
    },
    {
        position: 7,
        teamId: 'williams',
        teamName: 'Williams Racing',
        teamShortName: 'Williams',
        image: 'img/equipes/williams/logo-williams.png',
        teamColor: '#005AFF',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Carlos Sainz',
            'Alex Albon'
        ]
    },
    {
        position: 8,
        teamId: 'vcarb',
        teamName: 'Visa Cash App RB F1 Team',
        teamShortName: 'VCARB',
        image: 'img/equipes/vcarb/logo-vcarb.png',
        teamColor: '#1633EF',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Isack Hadjar',
            'Yuki Tsunoda'
        ]
    },
    {
        position: 9,
        teamId: 'haas',
        teamName: 'MoneyGram Haas F1 Team',
        teamShortName: 'Haas',
        image: 'img/equipes/haas/logo-haas.png',
        teamColor: '#B6BABD',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Oliver Bearman',
            'Esteban Ocon'
        ]
    },
    {
        position: 10,
        teamId: 'audi',
        teamName: 'Audi F1 Team',
        teamShortName: 'Audi',
        image: 'img/equipes/audi/logo-audi.png',
        teamColor: '#000000',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Gabriel Bortoleto',
            'Nico Hulkenberg'
        ]
    },
    {
        position: 11,
        teamId: 'cadillac',
        teamName: 'Cadillac F1 Team',
        teamShortName: 'Cadillac',
        image: 'img/equipes/cadillac/logo-cadillac.png',
        teamColor: '#A2AAAD',
        points: 0,
        wins: 0,
        podiums: 0,
        poles: 0,
        fastestLaps: 0,
        drivers: [
            'Valteri Bottas',
            'Sergio Perez'
        ]
    }
];
const POINTS_SYSTEM = {
    race: {
        1: 25,
        2: 18,
        3: 15,
        4: 12,
        5: 10,
        6: 8,
        7: 6,
        8: 4,
        9: 2,
        10: 1
    },
    sprint: {
        1: 8,
        2: 7,
        3: 6,
        4: 5,
        5: 4,
        6: 3,
        7: 2,
        8: 1
    },
    fastestLap: 1,
    pole: 0
};
const SEASON_STATS = {
    totalRaces: 24,
    sprintRaces: 6,
    racesCompleted: 0,
    currentRound: 0,
    lastUpdated: '2026-01-05'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/curiosities.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/curiosities.js
__turbopack_context__.s([
    "CURIOSITIES_DATA",
    ()=>CURIOSITIES_DATA
]);
const CURIOSITIES_DATA = [
    {
        id: 1,
        title: "Volta mais rápida da história",
        fact: "Lewis Hamilton registrou a volta mais rápida da F1 em Monza 2020, atingindo média de 264,362 km/h.",
        category: "Recordes"
    },
    {
        id: 2,
        title: "Piloto mais jovem",
        fact: "Max Verstappen é o piloto mais jovem a estrear na F1, com apenas 17 anos e 166 dias em 2015.",
        category: "Recordes"
    },
    {
        id: 3,
        title: "Circuito mais longo",
        fact: "Spa-Francorchamps na Bélgica é o circuito mais longo do calendário atual, com 7,004 km.",
        category: "Circuitos"
    },
    {
        id: 4,
        title: "Maior número de vitórias",
        fact: "Lewis Hamilton detém o recorde de vitórias na F1 com 103 triunfos (até 2024).",
        category: "Recordes"
    },
    {
        id: 5,
        title: "Monaco é especial",
        fact: "O GP de Mônaco é o único onde os pilotos correm em ruas públicas que são usadas normalmente fora do evento.",
        category: "Circuitos"
    },
    {
        id: 6,
        title: "Força G nas curvas",
        fact: "Os pilotos de F1 podem experimentar até 6G de força lateral nas curvas mais rápidas.",
        category: "Física"
    },
    {
        id: 7,
        title: "Temperatura no cockpit",
        fact: "A temperatura dentro do cockpit pode chegar a 50°C durante corridas em climas quentes.",
        category: "Física"
    },
    {
        id: 8,
        title: "Perda de peso",
        fact: "Um piloto pode perder entre 2 a 4 kg de peso durante uma única corrida devido ao calor e esforço físico.",
        category: "Física"
    },
    {
        id: 9,
        title: "Ayrton Senna em Monaco",
        fact: "Ayrton Senna venceu 6 vezes em Monaco, mais que qualquer outro piloto na história.",
        category: "Lendas"
    },
    {
        id: 10,
        title: "Velocidade de pit stop",
        fact: "O pit stop mais rápido da história foi da Red Bull em 2019: apenas 1,82 segundos!",
        category: "Recordes"
    },
    {
        id: 11,
        title: "Freios incandescentes",
        fact: "Os discos de freio podem atingir 1000°C durante uma frenagem, ficando vermelhos incandescentes.",
        category: "Física"
    },
    {
        id: 12,
        title: "Schumacher e Ferrari",
        fact: "Michael Schumacher venceu 5 títulos consecutivos com a Ferrari (2000-2004), um recorde histórico.",
        category: "Lendas"
    },
    {
        id: 13,
        title: "DRS - Asa Móvel",
        fact: "O DRS (Drag Reduction System) foi introduzido em 2011 para facilitar ultrapassagens.",
        category: "Tecnologia"
    },
    {
        id: 14,
        title: "Halo salvou vidas",
        fact: "O Halo, introduzido em 2018, já salvou várias vidas, incluindo a de Romain Grosjean em 2020.",
        category: "Segurança"
    },
    {
        id: 15,
        title: "Gasolina especial",
        fact: "Cada equipe desenvolve sua própria mistura de combustível, que pode custar até $500 mil por temporada.",
        category: "Tecnologia"
    },
    {
        id: 16,
        title: "Pneus extremos",
        fact: "Os pneus de F1 podem atingir temperaturas de até 130°C durante a corrida para máxima aderência.",
        category: "Física"
    },
    {
        id: 17,
        title: "Primeiro GP",
        fact: "O primeiro Grande Prêmio da história da F1 foi realizado em Silverstone, Inglaterra, em 1950.",
        category: "História"
    },
    {
        id: 18,
        title: "Família Schumacher",
        fact: "Michael e Ralf Schumacher são os únicos irmãos a subirem juntos no pódio, no GP do Canadá 2001.",
        category: "Lendas"
    },
    {
        id: 19,
        title: "Velocidade em retas",
        fact: "As velocidades máximas em retas podem ultrapassar 360 km/h em circuitos como Monza e Baku.",
        category: "Recordes"
    },
    {
        id: 20,
        title: "Volante high-tech",
        fact: "O volante de F1 pode ter mais de 20 botões e custar cerca de $60 mil dólares.",
        category: "Tecnologia"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/drivers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$teams$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/teams.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$glossary$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/glossary.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/calendar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/news.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ui$2d$config$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/ui-config.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/standings2026.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curiosities$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/curiosities.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/drivers/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/ui/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageContainer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PageContainer.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PageHeader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/data/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/drivers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const toSlug = (value)=>value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const DriversPage = ()=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const resolvedTheme = theme || 'light';
    const isLight = resolvedTheme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageContainer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageContainer"], {
        theme: resolvedTheme,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackButton"], {
                to: "/",
                theme: resolvedTheme
            }, void 0, false, {
                fileName: "[project]/app/drivers/page.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeader"], {
                theme: resolvedTheme,
                badge: "F1 Pro Grid",
                title: "Grid 2026",
                subtitle: "Conheça os pilotos que vão fazer história nesta temporada"
            }, void 0, false, {
                fileName: "[project]/app/drivers/page.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DRIVERS_DATA"].map((driver)=>{
                    const VibeIcon = driver.vibes?.[0]?.icon;
                    const driverId = driver.id || toSlug(driver.name || '');
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/drivers/${driverId}`,
                        style: {
                            backgroundColor: driver.color
                        },
                        className: `
                group relative overflow-hidden rounded-[2.5rem] h-[480px] cursor-pointer 
                transition-all duration-700 ease-out hover:-translate-y-4
                flex flex-col justify-end
                ${!isLight ? 'border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_50px_rgba(var(--driver-glow),0.4)]' : 'shadow-[0_20px_50px_-15px_rgba(255,182,193,0.6)] hover:shadow-pink-200'}
              `,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.1] group-hover:opacity-30 transition-opacity duration-1000",
                                style: {
                                    backgroundColor: driver.color
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/drivers/page.jsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            driver.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: driver.image,
                                alt: driver.name,
                                className: `absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-out group-hover:scale-110 group-hover:brightness-110 z-0 ${!isLight ? 'grayscale-[30%] group-hover:grayscale-0' : ''}`
                            }, void 0, false, {
                                fileName: "[project]/app/drivers/page.jsx",
                                lineNumber: 62,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 z-10 bg-gradient-to-t transition-all duration-500 ${isLight ? 'from-white via-white/10 to-transparent group-hover:from-pink-50/90' : 'from-[#050510] via-transparent to-transparent group-hover:from-[#050510]/80'}`
                            }, void 0, false, {
                                fileName: "[project]/app/drivers/page.jsx",
                                lineNumber: 72,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            VibeIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-6 right-6 backdrop-blur-xl p-3.5 rounded-[1.2rem] text-white shadow-xl z-20 border transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 ${isLight ? 'bg-white/20 border-white/40' : 'bg-black/30 border-white/10'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VibeIcon, {
                                    size: 20,
                                    strokeWidth: 2
                                }, void 0, false, {
                                    fileName: "[project]/app/drivers/page.jsx",
                                    lineNumber: 83,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/drivers/page.jsx",
                                lineNumber: 80,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-20 p-8 flex flex-col items-start transform transition-transform duration-700 group-hover:-translate-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute -right-4 -bottom-12 text-[140px] font-black select-none pointer-events-none transform rotate-6 group-hover:rotate-0 transition-all duration-1000 ${isLight ? 'text-white/40' : 'text-white/5'}`,
                                        children: driver.number
                                    }, void 0, false, {
                                        fileName: "[project]/app/drivers/page.jsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-[9px] font-black uppercase tracking-[0.25em] px-3 py-1 rounded-lg backdrop-blur-md border shadow-sm ${isLight ? 'bg-white/60 border-white/50 text-gray-800' : 'bg-black/40 border-white/10 text-white'}`,
                                            children: driver.team
                                        }, void 0, false, {
                                            fileName: "[project]/app/drivers/page.jsx",
                                            lineNumber: 98,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/drivers/page.jsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-4xl font-black leading-[0.85] uppercase tracking-tighter drop-shadow-md ${isLight ? 'text-gray-900' : 'text-white text-shadow-neon'}`,
                                        children: driver.name.split(' ').map((n, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block",
                                                children: n
                                            }, i, false, {
                                                fileName: "[project]/app/drivers/page.jsx",
                                                lineNumber: 109,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/app/drivers/page.jsx",
                                        lineNumber: 105,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-12 h-1.5 rounded-full mt-5 transition-all duration-700 group-hover:w-full shadow-sm ${!isLight && 'shadow-[0_0_10px_currentColor]'}`,
                                        style: {
                                            backgroundColor: driver.color,
                                            color: driver.color
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/drivers/page.jsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/drivers/page.jsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, driver.id || driver.number, true, {
                        fileName: "[project]/app/drivers/page.jsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/drivers/page.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/drivers/page.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(DriversPage, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = DriversPage;
const __TURBOPACK__default__export__ = DriversPage;
var _c;
__turbopack_context__.k.register(_c, "DriversPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_97270f6b._.js.map