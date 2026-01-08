module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/useSeoMeta.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSeoMeta",
    ()=>useSeoMeta
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function upsertMeta(selector, attrs) {
    let el = document.head.querySelector(selector);
    if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
    }
    Object.entries(attrs).forEach(([k, v])=>{
        if (v !== undefined && v !== null && v !== "") el.setAttribute(k, v);
    });
}
function useSeoMeta({ title, description, image, url, type = "article" }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!title) return;
        const pageUrl = url || (("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "");
        document.title = title;
        upsertMeta('meta[name="description"]', {
            name: "description",
            content: description || ""
        });
        upsertMeta('meta[property="og:type"]', {
            property: "og:type",
            content: type
        });
        upsertMeta('meta[property="og:title"]', {
            property: "og:title",
            content: title
        });
        upsertMeta('meta[property="og:description"]', {
            property: "og:description",
            content: description || ""
        });
        upsertMeta('meta[property="og:url"]', {
            property: "og:url",
            content: pageUrl
        });
        upsertMeta('meta[property="og:image"]', {
            property: "og:image",
            content: image || ""
        });
        upsertMeta('meta[name="twitter:card"]', {
            name: "twitter:card",
            content: "summary_large_image"
        });
        upsertMeta('meta[name="twitter:title"]', {
            name: "twitter:title",
            content: title
        });
        upsertMeta('meta[name="twitter:description"]', {
            name: "twitter:description",
            content: description || ""
        });
        upsertMeta('meta[name="twitter:image"]', {
            name: "twitter:image",
            content: image || ""
        });
    }, [
        title,
        description,
        image,
        url,
        type
    ]);
}
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/lib/sanity.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "client",
    ()=>client,
    "urlFor",
    ()=>urlFor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/image-url/lib/index.js [app-ssr] (ecmascript) <locals>");
;
;
const client = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: "c7nvssn2",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true
});
const builder = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$image$2d$url$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])(client);
const urlFor = (source)=>builder.image(source);
}),
"[project]/app/article/[slug]/ArticleDetailsClient.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSeoMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useSeoMeta.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/sanity.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThemeContext.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// --- CUSTOM PORTABLE TEXT RENDERER ---
const SimplePortableText = ({ value, components })=>{
    if (!value || !Array.isArray(value)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: value.map((block, i)=>{
            // Handle Images
            if (block._type === 'image' && components?.types?.image) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, {
                    children: components.types.image({
                        value: block
                    })
                }, block._key || i, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 31,
                    columnNumber: 19
                }, ("TURBOPACK compile-time value", void 0));
            }
            // Handle Text Blocks
            if (block._type !== 'block' || !block.children) return null;
            const children = block.children.map((span, idx)=>{
                let el = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: span.text
                }, idx, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 38,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0));
                // Apply basic styling marks (Bold, Italic)
                if (span.marks && span.marks.length > 0) {
                    if (span.marks.includes('strong')) el = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        className: "font-black",
                        children: el
                    }, idx, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 42,
                        columnNumber: 55
                    }, ("TURBOPACK compile-time value", void 0));
                    if (span.marks.includes('em')) el = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                        children: el
                    }, idx, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 43,
                        columnNumber: 51
                    }, ("TURBOPACK compile-time value", void 0));
                }
                return el;
            });
            const style = block.style || 'normal';
            switch(style){
                case 'h1':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl md:text-4xl font-black mt-8 mb-4",
                        children: children
                    }, i, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 50,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                case 'h2':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-bold mt-8 mb-4",
                        children: children
                    }, i, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 51,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                case 'h3':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl md:text-2xl font-bold mt-6 mb-3",
                        children: children
                    }, i, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 52,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                case 'h4':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg font-bold mt-4 mb-2",
                        children: children
                    }, i, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 53,
                        columnNumber: 29
                    }, ("TURBOPACK compile-time value", void 0));
                case 'blockquote':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        className: "border-l-4 pl-4 italic my-6 opacity-80",
                        children: children
                    }, i, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 54,
                        columnNumber: 37
                    }, ("TURBOPACK compile-time value", void 0));
                default:
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 leading-relaxed",
                        children: children
                    }, i, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 55,
                        columnNumber: 27
                    }, ("TURBOPACK compile-time value", void 0));
            }
        })
    }, void 0, false);
};
// --- COMPONENTE INTERNO: BackButton ---
const BackButton = ({ to = "/", theme })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: to,
        className: `group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${isLight ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 hover:shadow-sm bg-white/60 backdrop-blur-sm border border-pink-100' : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            "Voltar"
        ]
    }, void 0, true, {
        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
        lineNumber: 66,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// --- ESTILOS DE PROSE (Tipografia Rica) ---
const proseClass = (isLight)=>`prose prose-lg max-w-none 
  ${isLight ? 'prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-pink-600 prose-a:text-purple-600 hover:prose-a:text-purple-500 prose-blockquote:border-pink-300 prose-blockquote:bg-pink-50/50 prose-li:marker:text-pink-400' : 'prose-headings:text-white prose-p:text-gray-300 prose-strong:text-cyan-400 prose-a:text-fuchsia-400 hover:prose-a:text-fuchsia-300 prose-blockquote:border-cyan-500 prose-blockquote:bg-white/5 prose-li:marker:text-cyan-500'}`;
const proseComponents = (isLight)=>({
        types: {
            image: ({ value })=>{
                if (!value?.asset?._ref) return null;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                    className: "my-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["urlFor"])(value).width(800).url(),
                            alt: value.alt || 'Imagem do artigo',
                            className: `w-full rounded-[2rem] ${isLight ? 'shadow-xl shadow-pink-100' : 'shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10'}`
                        }, void 0, false, {
                            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        value.caption && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("figcaption", {
                            className: `text-center text-xs mt-3 font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                            children: value.caption
                        }, void 0, false, {
                            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                            lineNumber: 99,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0));
            }
        }
    });
// Ícone customizado do X (Twitter)
const XIcon = ({ size = 18 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
            lineNumber: 112,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
        lineNumber: 111,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// Ícone customizado do Facebook
const FacebookIcon = ({ size = 18 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "currentColor",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        }, void 0, false, {
            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
            lineNumber: 119,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
        lineNumber: 118,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
// --- DADOS MOCKADOS PARA FALLBACK ---
const NEWS_DATA = [];
const ARTICLES_DATA = [];
const MANIFESTO_POST = {
    id: 'manifesto',
    title: 'O Manifesto',
    content: '<p>Conteúdo do manifesto...</p>'
};
const ArticleDetail = ({ slug: slugProp })=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const resolvedTheme = theme || "light";
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const slug = slugProp || params?.slug;
    const [post, setPost] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLight = resolvedTheme === "light";
    // URL para compartilhamento
    const shareUrl = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : "";
    // CORES E ESTILOS
    const textPrimary = isLight ? "text-gray-900" : "text-white";
    const textSecondary = isLight ? "text-gray-500" : "text-gray-400";
    const accentColor = isLight ? "text-pink-500" : "text-cyan-400";
    // Backgrounds e Sombras
    const pageBgStyle = isLight ? {
        backgroundColor: '#FFF0F5',
        backgroundImage: `radial-gradient(at 0% 0%, rgba(255, 182, 193, 0.4) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(216, 196, 240, 0.4) 0px, transparent 50%)`
    } : {
        backgroundColor: '#050510',
        backgroundImage: `linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px), radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)`,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%'
    };
    const cardBg = isLight ? "bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(255,182,193,0.4)] border border-white/60" : "bg-[#121217]/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]";
    const badgeBg = isLight ? "bg-gradient-to-r from-pink-200 to-purple-200 text-purple-900 shadow-sm" : "bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 text-cyan-300 border border-cyan-500/30";
    // FUNÇÃO DE COPIAR LINK
    const handleCopyLink = ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchPost = async ()=>{
            try {
                const normalizedSlug = decodeURIComponent(slug);
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$sanity$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["client"].fetch(`*[_type in ["article", "articles"] && (
              slug.current == $slug ||
              _id == $slug ||
              string::lower(slug.current) == string::lower($slug)
            )][0]{
            _id,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            excerpt,
            category,
            author,
            publishedAt,

            // ✅ OG/SEO
            seo{
              metaTitle,
              metaDescription,
              "ogImage": ogImage.asset->url
            },

            content[] {
              ...,
              _type == "image" => {
                ...,
                "url": asset->url
              }
            }
          }`, {
                    slug: normalizedSlug
                });
                // ⚠️ Só usa o artigo do Sanity se ele tiver conteúdo mesmo
                const hasSanityContent = data && Array.isArray(data.content) && data.content.length > 0;
                if (hasSanityContent) {
                    setPost(data);
                    return;
                }
                // fallback local (NEWS_DATA, ARTICLES_DATA, MANIFESTO_POST)
                const allLocal = [
                    ...NEWS_DATA,
                    ...ARTICLES_DATA,
                    MANIFESTO_POST
                ];
                const found = allLocal.find((a)=>a.id === slug);
                if (found) {
                    setPost({
                        ...found,
                        image: found.image,
                        contentHtml: found.content
                    });
                }
            } catch (err) {
                console.error("Erro ao carregar artigo:", err);
            } finally{
                setLoading(false);
            }
        };
        fetchPost();
    }, [
        slug
    ]);
    const ogTitle = post?.seo?.metaTitle || post?.title || "Autamubilismo";
    const ogDesc = post?.seo?.metaDescription || post?.excerpt || "";
    const ogImage = post?.seo?.ogImage || post?.image || "https://www.autamubilismo.com/og-default.png";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useSeoMeta$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSeoMeta"])({
        title: ogTitle,
        description: ogDesc,
        image: ogImage,
        url: shareUrl,
        type: "article"
    });
    // LOADING
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen flex flex-col items-center justify-center`,
            style: pageBgStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 ${isLight ? "border-pink-400" : "border-cyan-500"}`
                }, void 0, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 258,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `mt-6 font-black uppercase tracking-widest text-sm ${textSecondary} animate-pulse`,
                    children: "Carregando artigo..."
                }, void 0, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
            lineNumber: 257,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // NÃO ENCONTRADO
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `min-h-screen flex flex-col items-center justify-center text-center px-6`,
            style: pageBgStyle,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackButton, {
                    to: "/article",
                    theme: resolvedTheme
                }, void 0, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 270,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: `text-4xl font-black mb-4 ${textPrimary}`,
                    children: "Artigo não encontrado 📄"
                }, void 0, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 271,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-lg ${textSecondary}`,
                    children: "Esse artigo pode ter sido removido ou o link está incorreto."
                }, void 0, false, {
                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                    lineNumber: 274,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
            lineNumber: 269,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // ✅ OG/SEO (fallback: seo -> title/excerpt/image)
    // ---------- DETECÇÃO DO TIPO DE CONTEÚDO ----------
    const isSanityPortable = Array.isArray(post.content);
    const htmlContent = post.contentHtml || (!isSanityPortable && typeof post.content === "string" ? post.content : null);
    // --------------------------------------------------
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen pb-20 transition-colors duration-500 font-sans",
        style: pageBgStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[-20%] left-[-10%] w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`
                    }, void 0, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 296,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`
                    }, void 0, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 297,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_20px_cyan]"
                    }, void 0, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 298,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                lineNumber: 295,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-4 md:px-8 pt-8 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackButton, {
                        to: "/article",
                        theme: resolvedTheme
                    }, void 0, false, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "mb-10 text-center md:text-left mt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row md:items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest w-fit ${badgeBg}`,
                                        children: [
                                            isLight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 12,
                                                className: "fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 308,
                                                columnNumber: 26
                                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 12,
                                                className: "fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 308,
                                                columnNumber: 76
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            post.category || "Editorial"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                        lineNumber: 307,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex items-center gap-4 text-xs font-bold uppercase tracking-wide ${textSecondary}`,
                                        children: [
                                            post.publishedAt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                        size: 14,
                                                        className: accentColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                                                        day: 'numeric',
                                                        month: 'long',
                                                        year: 'numeric'
                                                    })
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 314,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        size: 14,
                                                        className: accentColor
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                        lineNumber: 320,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    " Leitura rápida"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                        lineNumber: 312,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 306,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 ${textPrimary} ${!isLight ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white" : "text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900"}`,
                                style: {
                                    fontFamily: "'Russo One', sans-serif"
                                },
                                children: post.title
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 326,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col sm:flex-row sm:items-center justify-between border-y py-6 gap-6 ${isLight ? 'border-pink-200/50' : 'border-white/10'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${isLight ? "bg-white border border-pink-100 text-pink-500" : "bg-[#1a1a20] border border-white/10 text-cyan-400"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                    lineNumber: 340,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 339,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-sm font-black uppercase tracking-wide ${textPrimary}`,
                                                        children: post.author || "Redação Autamubilismo"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                        lineNumber: 343,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-xs font-medium ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`,
                                                        children: "Colunista Oficial"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                        lineNumber: 346,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                        lineNumber: 338,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] font-bold uppercase tracking-widest mr-2 ${textSecondary}`,
                                                children: "Compartilhar"
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 352,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://wa.me/?text=${encodeURIComponent(post.title + " - " + shareUrl)}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 ${isLight ? "bg-white text-green-500 hover:bg-green-50 shadow-sm border border-gray-100" : "bg-[#1a1a20] text-green-400 border border-white/10 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)]"}`,
                                                title: "WhatsApp",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                    lineNumber: 368,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 357,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(shareUrl)}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 ${isLight ? "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-100" : "bg-[#1a1a20] text-white border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"}`,
                                                title: "X / Twitter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(XIcon, {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 372,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: `p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 ${isLight ? "bg-white text-blue-600 hover:bg-blue-50 shadow-sm border border-gray-100" : "bg-[#1a1a20] text-blue-400 border border-white/10 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(96,165,250,0.3)]"}`,
                                                title: "Facebook",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FacebookIcon, {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 387,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleCopyLink,
                                                className: `p-3 rounded-full transition-all hover:scale-110 hover:-translate-y-1 relative ${isLight ? "bg-white text-pink-500 hover:bg-pink-50 shadow-sm border border-gray-100" : "bg-[#1a1a20] text-fuchsia-400 border border-white/10 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(232,121,249,0.3)]"}`,
                                                title: "Copiar Link",
                                                children: [
                                                    copied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] px-3 py-1.5 rounded-lg shadow-lg font-bold animate-in fade-in zoom-in duration-300 whitespace-nowrap ${isLight ? 'bg-gray-900 text-white' : 'bg-white text-black'}`,
                                                        children: "Copiado! ✨"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                        lineNumber: 416,
                                                        columnNumber: 17
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                                lineNumber: 402,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                        lineNumber: 351,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 305,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    post.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `relative w-full aspect-video md:aspect-[21/9] rounded-[2.5rem] overflow-hidden mb-12 group transition-all duration-700 ${isLight ? "shadow-[0_20px_50px_-10px_rgba(255,182,193,0.5)] border-4 border-white" : "shadow-[0_0_50px_-10px_rgba(0,255,242,0.15)] border border-white/10 ring-1 ring-white/5"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: post.image,
                                alt: post.title,
                                className: "w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-105"
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 431,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute inset-0 bg-gradient-to-t pointer-events-none opacity-60 ${isLight ? 'from-pink-900/20 to-transparent' : 'from-[#050510] via-transparent to-transparent'}`
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 437,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute bottom-6 left-6 md:bottom-10 md:left-10 px-5 py-2.5 rounded-2xl backdrop-blur-md border ${isLight ? 'bg-white/80 border-white text-gray-900' : 'bg-black/60 border-white/10 text-white'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs font-black uppercase tracking-widest flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            size: 14,
                                            className: isLight ? 'text-red-500 fill-current' : 'text-pink-500 fill-current'
                                        }, void 0, false, {
                                            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                            lineNumber: 442,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Destaque da Semana"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                    lineNumber: 441,
                                    columnNumber: 16
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 424,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `max-w-4xl mx-auto ${cardBg} p-8 md:p-14 rounded-[3rem] relative overflow-hidden`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl to-transparent opacity-10 rounded-bl-full pointer-events-none ${isLight ? 'from-pink-400' : 'from-cyan-400'}`
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            post.excerpt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-xl md:text-2xl font-medium leading-relaxed mb-12 pl-8 border-l-[6px] italic relative ${isLight ? "text-gray-700 border-pink-300" : "text-gray-200 border-cyan-500"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `absolute -top-4 -left-4 text-6xl opacity-20 font-serif ${isLight ? 'text-pink-300' : 'text-cyan-500'}`,
                                        children: '"'
                                    }, void 0, false, {
                                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                        lineNumber: 462,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    post.excerpt
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            Array.isArray(post.content) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: proseClass(isLight),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SimplePortableText, {
                                    value: post.content,
                                    components: proseComponents(isLight)
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : post.contentHtml ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: proseClass(isLight),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "article-html",
                                    dangerouslySetInnerHTML: {
                                        __html: post.contentHtml
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                    lineNumber: 474,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 473,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                className: proseClass(isLight),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "opacity-50 italic",
                                    children: "Conteúdo completo não disponível na prévia."
                                }, void 0, false, {
                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                    lineNumber: 478,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `mt-20 pt-10 border-t border-dashed text-center ${isLight ? "border-pink-200" : "border-white/10"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: `text-sm font-medium uppercase tracking-widest opacity-50 flex items-center justify-center gap-2 ${textSecondary}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                            lineNumber: 486,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Fim da transmissão"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                                lineNumber: 482,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                        lineNumber: 450,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`
            }, void 0, false, {
                fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
                lineNumber: 492,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/article/[slug]/ArticleDetailsClient.jsx",
        lineNumber: 292,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ArticleDetail;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bdef5948._.js.map