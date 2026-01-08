(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/circuits/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThemeContext.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// --- COMPONENTE: Modal de Visualização ---
const CircuitModal = ({ circuit, isOpen, onClose, theme })=>{
    const isLight = theme === 'light';
    if (!isOpen || !circuit) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200",
        onClick: onClose,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute inset-0 backdrop-blur-xl ${isLight ? 'bg-black/40' : 'bg-black/80'}`
            }, void 0, false, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 23,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 max-w-5xl w-full rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 ${isLight ? 'bg-white border-2 border-pink-200' : 'bg-[#0a0a10] border-2 border-cyan-500/30 shadow-[0_0_50px_rgba(0,255,242,0.3)]'}`,
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between p-6 border-b ${isLight ? 'border-pink-100 bg-pink-50/50' : 'border-white/10 bg-white/5'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl",
                                                children: circuit.countryCode === 'BR' ? '🇧🇷' : circuit.countryCode === 'MC' ? '🇲🇨' : circuit.countryCode === 'GB' ? '🇬🇧' : circuit.countryCode === 'BE' ? '🇧🇪' : circuit.countryCode === 'US' ? '🇺🇸' : '🇯🇵'
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 38,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-xs font-bold uppercase tracking-wider ${isLight ? 'text-gray-500' : 'text-cyan-400'}`,
                                                children: circuit.location
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 39,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-2xl md:text-3xl font-black uppercase tracking-tight ${isLight ? 'text-gray-900' : 'text-white'}`,
                                        children: circuit.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: `p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${isLight ? 'bg-white text-gray-600 hover:bg-gray-100 shadow-md' : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/app/circuits/page.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-8 ${isLight ? 'bg-gradient-to-br from-pink-50 to-purple-50' : 'bg-gradient-to-br from-[#0a0a10] to-[#1a0a20]'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `rounded-2xl overflow-hidden ${isLight ? 'bg-white shadow-xl' : 'bg-black/40 shadow-2xl border border-white/10'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: circuit.image,
                                alt: `Layout completo ${circuit.name}`,
                                className: `w-full h-auto ${isLight ? '' : 'invert brightness-110 contrast-125'}`
                            }, void 0, false, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/circuits/page.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 border-t ${isLight ? 'border-pink-100' : 'border-white/10'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                            children: "Extensão"
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-lg font-black ${isLight ? 'text-gray-900' : 'text-cyan-400'}`,
                                            children: circuit.length
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 79,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/circuits/page.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                            children: "Voltas"
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-lg font-black ${isLight ? 'text-gray-900' : 'text-cyan-400'}`,
                                            children: circuit.laps || '--'
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 88,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/circuits/page.jsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                            children: "Tipo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-sm font-bold ${isLight ? 'text-gray-700' : 'text-white'}`,
                                            children: circuit.type
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 97,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/circuits/page.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-[10px] font-bold uppercase tracking-wider mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                            children: "Recorde"
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-xs font-bold ${isLight ? 'text-pink-600' : 'text-fuchsia-400'}`,
                                            children: circuit.record
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 106,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/circuits/page.jsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/circuits/page.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/circuits/page.jsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = CircuitModal;
// --- COMPONENTE INTERNO: BackButton ---
const BackButton = ({ to = "/", theme })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: to,
        className: `group mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:pl-2 px-5 py-2.5 rounded-full ${isLight ? 'text-pink-500 hover:text-pink-600 hover:bg-pink-50 hover:shadow-sm bg-white/60 backdrop-blur-sm border border-pink-100' : 'text-cyan-400 hover:text-white hover:bg-cyan-900/20 border border-cyan-500/30 bg-black/40 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,242,0.15)] hover:shadow-[0_0_25px_cyan] hover:border-cyan-400'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 16
            }, void 0, false, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 129,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            "Voltar"
        ]
    }, void 0, true, {
        fileName: "[project]/app/circuits/page.jsx",
        lineNumber: 121,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = BackButton;
// --- DADOS DOS CIRCUITOS ---
const CIRCUITS_DATA = [
    {
        id: 'australia',
        name: 'Albert Park Circuit',
        location: 'Melbourne, Austrália',
        countryCode: 'AU',
        length: '5.278 km',
        laps: 58,
        record: '1:19.813 (Charles Leclerc, 2024)',
        image: '/img/circuitos/australia.avif',
        photo: '/img/circuitos/australia.avif',
        type: 'Urbano / Semi-rua',
        vibe: 'Season Opener Energy'
    },
    {
        id: 'china',
        name: 'Shanghai International Circuit',
        location: 'Xangai, China',
        countryCode: 'CN',
        length: '5.451 km',
        laps: 56,
        record: '1:32.238 (Michael Schumacher, 2004)',
        image: '/img/circuitos/china.avif',
        photo: '/img/circuitos/china.avif',
        type: 'Técnico',
        vibe: 'Big Stage'
    },
    {
        id: 'japan',
        name: 'Suzuka Circuit',
        location: 'Suzuka, Japão',
        countryCode: 'JP',
        length: '5.807 km',
        laps: 53,
        record: '1:30.965 (Kimi Antonelli, 2025)',
        image: '/img/circuitos/japan.avif',
        photo: '/img/circuitos/japan.avif',
        type: 'Técnico',
        vibe: 'Fan Passion'
    },
    {
        id: 'bahrain',
        name: 'Bahrain International Circuit',
        location: 'Sakhir, Bahrain',
        countryCode: 'BH',
        length: '5.412 km',
        laps: 57,
        record: '1:31.447 (Pedro de la Rosa, 2005)',
        image: '/img/circuitos/bahrain.avif',
        photo: '/img/circuitos/bahrain.avif',
        type: 'Alta velocidade',
        vibe: 'Desert Night'
    },
    {
        id: 'saudi-arabia',
        name: 'Jeddah Corniche Circuit',
        location: 'Jeddah, Arábia Saudita',
        countryCode: 'SA',
        length: '6.174 km',
        laps: 50,
        record: '1:30.734 (Lewis Hamilton, 2021)',
        image: '/img/circuitos/saudi-arabia.avif',
        photo: '/img/circuitos/saudi-arabia.avif',
        type: 'Rua (Street Circuit)',
        vibe: 'High Speed Chaos'
    },
    {
        id: 'miami',
        name: 'Miami International Autodrome',
        location: 'Miami Gardens, EUA',
        countryCode: 'US',
        length: '5.412 km',
        laps: 57,
        record: '1:29.708 (Max Verstappen, 2023)',
        image: '/img/circuitos/miami.avif',
        photo: '/img/circuitos/miami.avif',
        type: 'Urbano / Semi-rua',
        vibe: 'Influencer Core'
    },
    {
        id: 'canada',
        name: 'Circuit Gilles-Villeneuve',
        location: 'Montreal, Canadá',
        countryCode: 'CA',
        length: '4.361 km',
        laps: 70,
        record: '1:13.078 (Valtteri Bottas, 2019)',
        image: '/img/circuitos/canada.avif',
        photo: '/img/circuitos/canada.avif',
        type: 'Alta velocidade',
        vibe: 'Wall Of Champions'
    },
    {
        id: 'monaco',
        name: 'Circuit de Monaco',
        location: 'Monte Carlo, Mônaco',
        countryCode: 'MC',
        length: '3.337 km',
        laps: 78,
        record: '1:12.909 (Lewis Hamilton, 2021)',
        image: '/img/circuitos/monaco.avif',
        photo: '/img/circuitos/monaco.avif',
        type: 'Rua (Street Circuit)',
        vibe: 'Glam & Precision'
    },
    {
        id: 'barcelona-catalunya',
        name: 'Circuit de Barcelona-Catalunya',
        location: 'Montmeló, Espanha',
        countryCode: 'ES',
        length: '4.657 km',
        laps: 66,
        record: '1:15.743 (Oscar Piastri, 2025)',
        image: '/img/circuitos/barcelona-catalunya.avif',
        photo: '/img/circuitos/barcelona-catalunya.avif',
        type: 'Técnico',
        vibe: 'Classic Test Track'
    },
    {
        id: 'austria',
        name: 'Red Bull Ring',
        location: 'Spielberg, Áustria',
        countryCode: 'AT',
        length: '4.326 km',
        laps: 71,
        record: '1:07.924 (Oscar Piastri, 2025)',
        image: '/img/circuitos/austria.avif',
        photo: '/img/circuitos/austria.avif',
        type: 'Alta velocidade',
        vibe: 'Short & Punchy'
    },
    {
        id: 'great-britain',
        name: 'Silverstone Circuit',
        location: 'Silverstone, Reino Unido',
        countryCode: 'GB',
        length: '5.891 km',
        laps: 52,
        record: '1:27.097 (Max Verstappen, 2020)',
        image: '/img/circuitos/great-britain.avif',
        photo: '/img/circuitos/great-britain.avif',
        type: 'Alta velocidade',
        vibe: 'Home Of F1'
    },
    {
        id: 'belgium',
        name: 'Circuit de Spa-Francorchamps',
        location: 'Stavelot, Bélgica',
        countryCode: 'BE',
        length: '7.004 km',
        laps: 44,
        record: '1:44.701 (Sergio Perez, 2024)',
        image: '/img/circuitos/belgium.avif',
        photo: '/img/circuitos/belgium.avif',
        type: 'Alta velocidade',
        vibe: 'Eau Rouge Myth'
    },
    {
        id: 'hungary',
        name: 'Hungaroring',
        location: 'Mogyoród, Hungria',
        countryCode: 'HU',
        length: '4.381 km',
        laps: 70,
        record: '1:16.627 (Lewis Hamilton, 2020)',
        image: '/img/circuitos/hungary.avif',
        photo: '/img/circuitos/hungary.avif',
        type: 'Técnico',
        vibe: 'Hot & Tight'
    },
    {
        id: 'netherlands',
        name: 'Circuit Zandvoort',
        location: 'Zandvoort, Países Baixos',
        countryCode: 'NL',
        length: '4.259 km',
        laps: 72,
        record: '1:11.097 (Lewis Hamilton, 2021)',
        image: '/img/circuitos/netherlands.avif',
        photo: '/img/circuitos/netherlands.avif',
        type: 'Técnico',
        vibe: 'Banking Madness'
    },
    {
        id: 'italy',
        name: 'Autodromo Nazionale Monza',
        location: 'Monza, Itália',
        countryCode: 'IT',
        length: '5.793 km',
        laps: 53,
        record: '1:20.901 (Lando Norris, 2025)',
        image: '/img/circuitos/italy.avif',
        photo: '/img/circuitos/italy.avif',
        type: 'Alta velocidade',
        vibe: 'Temple Of Speed'
    },
    {
        id: 'spain',
        name: 'Madring',
        location: 'Madrid, Espanha',
        countryCode: 'ES',
        length: '5.474 km',
        laps: null,
        record: '--',
        image: '/img/circuitos/spain.avif',
        photo: '/img/circuitos/spain.avif',
        type: 'Rua (Street Circuit)',
        vibe: 'New Era Debut'
    },
    {
        id: 'azerbaijan',
        name: 'Baku City Circuit',
        location: 'Baku, Azerbaijão',
        countryCode: 'AZ',
        length: '6.003 km',
        laps: 51,
        record: '1:43.009 (Charles Leclerc, 2019)',
        image: '/img/circuitos/azerbaijan.avif',
        photo: '/img/circuitos/azerbaijan.avif',
        type: 'Rua (Street Circuit)',
        vibe: 'Castle Straight'
    },
    {
        id: 'singapore',
        name: 'Marina Bay Street Circuit',
        location: 'Singapura, Singapura',
        countryCode: 'SG',
        length: '4.927 km',
        laps: 62,
        record: '1:33.808 (Lewis Hamilton, 2025)',
        image: '/img/circuitos/singapore.avif',
        photo: '/img/circuitos/singapore.avif',
        type: 'Rua (Street Circuit)',
        vibe: 'Night Heat'
    },
    {
        id: 'united-states',
        name: 'Circuit of the Americas',
        location: 'Austin, EUA',
        countryCode: 'US',
        length: '5.513 km',
        laps: 56,
        record: '1:36.169 (Charles Leclerc, 2019)',
        image: '/img/circuitos/united-states.avif',
        photo: '/img/circuitos/united-states.avif',
        type: 'Técnico',
        vibe: 'Stadium Roar'
    },
    {
        id: 'mexico',
        name: 'Autódromo Hermanos Rodríguez',
        location: 'Cidade do México, México',
        countryCode: 'MX',
        length: '4.304 km',
        laps: 71,
        record: '1:17.774 (Valtteri Bottas, 2021)',
        image: '/img/circuitos/mexico.avif',
        photo: '/img/circuitos/mexico.avif',
        type: 'Alta velocidade',
        vibe: 'Stadium Party'
    },
    {
        id: 'brazil',
        name: 'Autódromo José Carlos Pace (Interlagos)',
        location: 'São Paulo, Brasil',
        countryCode: 'BR',
        length: '4.309 km',
        laps: 71,
        record: '1:10.540 (Valtteri Bottas, 2018)',
        image: '/img/circuitos/brazil.avif',
        photo: '/img/circuitos/brazil.avif',
        type: 'Técnico',
        vibe: 'Pure Emotion'
    },
    {
        id: 'las-vegas',
        name: 'Las Vegas Strip Circuit',
        location: 'Las Vegas, EUA',
        countryCode: 'US',
        length: '6.201 km',
        laps: 50,
        record: '1:33.365 (Max Verstappen, 2025)',
        image: '/img/circuitos/las-vegas.avif',
        photo: '/img/circuitos/las-vegas.avif',
        type: 'Rua (Street Circuit)',
        vibe: 'Neon Speed'
    },
    {
        id: 'qatar',
        name: 'Lusail International Circuit',
        location: 'Lusail, Qatar',
        countryCode: 'QA',
        length: '5.419 km',
        laps: 57,
        record: '1:22.384 (Lando Norris, 2024)',
        image: '/img/circuitos/qatar.avif',
        photo: '/img/circuitos/qatar.avif',
        type: 'Alta velocidade',
        vibe: 'Desert Flow'
    },
    {
        id: 'abu-dhabi',
        name: 'Yas Marina Circuit',
        location: 'Abu Dhabi, Emirados Árabes Unidos',
        countryCode: 'AE',
        length: '5.281 km',
        laps: 58,
        record: '1:25.637 (Kevin Magnussen, 2024)',
        image: '/img/circuitos/abu-dhabi.avif',
        photo: '/img/circuitos/abu-dhabi.avif',
        type: 'Alta velocidade',
        vibe: 'Final Boss'
    }
];
const CircuitsPage = ()=>{
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const resolvedTheme = theme || 'light';
    const isLight = resolvedTheme === 'light';
    const [selectedCircuit, setSelectedCircuit] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const openModal = (circuit)=>{
        setSelectedCircuit(circuit);
        setModalOpen(true);
        document.body.style.overflow = 'hidden'; // Previne scroll do body
    };
    const closeModal = ()=>{
        setModalOpen(false);
        setSelectedCircuit(null);
        document.body.style.overflow = 'unset';
    };
    // --- BACKGROUNDS ---
    const lightPattern = {
        backgroundColor: '#FFF5F8',
        backgroundImage: `
      radial-gradient(at 0% 0%, rgba(247, 184, 200, 0.3) 0px, transparent 50%),
      radial-gradient(at 100% 0%, rgba(216, 196, 240, 0.3) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffb7b2' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
    `
    };
    const darkPattern = {
        backgroundColor: '#050510',
        backgroundImage: `
      linear-gradient(rgba(0, 255, 242, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(189, 0, 255, 0.03) 1px, transparent 1px),
      radial-gradient(at 50% 0%, rgba(189, 0, 255, 0.15) 0px, transparent 70%)
    `,
        backgroundSize: '40px 40px, 40px 40px, 100% 100%'
    };
    // Cores e Estilos Dinâmicos
    const textMain = isLight ? 'text-gray-900' : 'text-white';
    const textSub = isLight ? 'text-gray-500' : 'text-cyan-100/60';
    const cardBg = isLight ? 'bg-white/80 backdrop-blur-sm border border-pink-100 shadow-lg hover:shadow-xl hover:border-pink-200' : 'bg-[#121217]/70 backdrop-blur-sm border border-white/10 hover:border-cyan-500/30 shadow-lg hover:shadow-xl';
    const badgeStyle = isLight ? 'bg-pink-50 text-pink-600 border border-pink-200' : 'bg-cyan-900/30 text-cyan-300 border border-cyan-500/40';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen p-4 md:p-8 font-sans`,
        style: isLight ? lightPattern : darkPattern,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CircuitModal, {
                circuit: selectedCircuit,
                isOpen: modalOpen,
                onClose: closeModal,
                theme: resolvedTheme
            }, void 0, false, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 509,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/10'}`
                    }, void 0, false, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 518,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-10 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/10'}`
                    }, void 0, false, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 519,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 517,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackButton, {
                        to: "/",
                        theme: resolvedTheme
                    }, void 0, false, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 text-center md:text-left relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center md:justify-start gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-full ${isLight ? 'bg-white shadow-md text-pink-500' : 'bg-white/10 border border-white/20 text-cyan-400'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Map$3e$__["Map"], {
                                            size: 24
                                        }, void 0, false, {
                                            fileName: "[project]/app/circuits/page.jsx",
                                            lineNumber: 529,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 528,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[10px] font-black uppercase tracking-[0.3em] ${isLight ? 'text-pink-600' : 'text-fuchsia-400'}`,
                                        children: "Track Guide"
                                    }, void 0, false, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 527,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: `text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-5 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400'}`,
                                style: {
                                    fontFamily: "'Russo One', sans-serif"
                                },
                                children: "Circuitos"
                            }, void 0, false, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 536,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-base md:text-lg font-medium max-w-2xl mx-auto md:mx-0 ${textSub}`,
                                children: "O palco onde a mágica acontece. Clique no mapa para visualizar em detalhe."
                            }, void 0, false, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 540,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 526,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: CIRCUITS_DATA.map((circuit)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `group relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${cardBg}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-56 overflow-hidden bg-gray-100 dark:bg-gray-900",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: circuit.photo,
                                                alt: circuit.name,
                                                className: "w-full h-full object-cover",
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 554,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 bg-gradient-to-t ${isLight ? 'from-white/60 via-transparent to-transparent' : 'from-[#121217]/60 via-transparent to-transparent'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 562,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute top-3 right-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider backdrop-blur-md ${badgeStyle}`,
                                                children: circuit.vibe
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 565,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>openModal(circuit),
                                        className: `relative -mt-10 mx-auto z-10 w-24 h-24 rounded-2xl p-3 backdrop-blur-md border-2 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-2xl group/map ${isLight ? 'bg-white border-pink-200 hover:border-pink-400' : 'bg-[#1a1a20] border-white/20 hover:border-cyan-400 hover:shadow-cyan-500/50'}`,
                                        title: "Clique para visualizar em tamanho grande",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: circuit.image,
                                                alt: `Layout ${circuit.name}`,
                                                className: `w-full h-full object-contain transition-all ${isLight ? 'opacity-90 group-hover/map:opacity-100' : 'invert brightness-110 contrast-125 group-hover/map:brightness-125'}`,
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 580,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `absolute inset-0 flex items-center justify-center opacity-0 group-hover/map:opacity-100 transition-opacity ${isLight ? 'bg-white/90' : 'bg-black/80'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ZoomIn$3e$__["ZoomIn"], {
                                                    className: `${isLight ? 'text-pink-500' : 'text-cyan-400'}`,
                                                    size: 32
                                                }, void 0, false, {
                                                    fileName: "[project]/app/circuits/page.jsx",
                                                    lineNumber: 589,
                                                    columnNumber: 22
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 588,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 571,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 pt-4 flex-1 flex flex-col",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-4 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-center gap-2 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg",
                                                                children: circuit.countryCode === 'BR' ? '🇧🇷' : circuit.countryCode === 'MC' ? '🇲🇨' : circuit.countryCode === 'GB' ? '🇬🇧' : circuit.countryCode === 'BE' ? '🇧🇪' : circuit.countryCode === 'US' ? '🇺🇸' : '🇯🇵'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 597,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[9px] font-bold uppercase tracking-widest ${textSub}`,
                                                                children: circuit.location
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 598,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/circuits/page.jsx",
                                                        lineNumber: 596,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-xl font-black uppercase leading-tight tracking-tight ${textMain}`,
                                                        children: circuit.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/circuits/page.jsx",
                                                        lineNumber: 600,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 595,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `grid grid-cols-2 gap-3 mt-auto p-4 rounded-2xl ${isLight ? 'bg-gray-50/80 border border-gray-200' : 'bg-white/5 border border-white/10'}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center gap-1.5 text-[9px] font-bold uppercase ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/circuits/page.jsx",
                                                                        lineNumber: 610,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Extensão"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 609,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm font-black ${textMain}`,
                                                                children: circuit.length
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 612,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/circuits/page.jsx",
                                                        lineNumber: 608,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col gap-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center gap-1.5 text-[9px] font-bold uppercase ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/circuits/page.jsx",
                                                                        lineNumber: 617,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Voltas"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 616,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-sm font-black ${textMain}`,
                                                                children: circuit.laps || '--'
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 619,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/circuits/page.jsx",
                                                        lineNumber: 615,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "col-span-2 pt-2 mt-1 border-t border-dashed border-gray-300 dark:border-white/10",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `flex items-center gap-1.5 text-[9px] font-bold uppercase mb-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Timer$3e$__["Timer"], {
                                                                        size: 11
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/circuits/page.jsx",
                                                                        lineNumber: 624,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " Recorde"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 623,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-bold ${isLight ? 'text-pink-600' : 'text-cyan-400'}`,
                                                                children: circuit.record
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/circuits/page.jsx",
                                                                lineNumber: 626,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/circuits/page.jsx",
                                                        lineNumber: 622,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/circuits/page.jsx",
                                                lineNumber: 606,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/circuits/page.jsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, circuit.id, true, {
                                fileName: "[project]/app/circuits/page.jsx",
                                lineNumber: 548,
                                columnNumber: 14
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/app/circuits/page.jsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 522,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`
            }, void 0, false, {
                fileName: "[project]/app/circuits/page.jsx",
                lineNumber: 635,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/circuits/page.jsx",
        lineNumber: 503,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CircuitsPage, "nABJ/fisecBDIxglwDvP1hOCTjU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c2 = CircuitsPage;
const __TURBOPACK__default__export__ = CircuitsPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CircuitModal");
__turbopack_context__.k.register(_c1, "BackButton");
__turbopack_context__.k.register(_c2, "CircuitsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Timer
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "10",
            x2: "14",
            y1: "2",
            y2: "2",
            key: "14vaq8"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "15",
            y1: "14",
            y2: "11",
            key: "17fdiu"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "14",
            r: "8",
            key: "1e1u0o"
        }
    ]
];
const Timer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("timer", __iconNode);
;
 //# sourceMappingURL=timer.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript) <export default as Timer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Timer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$timer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/timer.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronLeft
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m15 18-6-6 6-6",
            key: "1wnfg3"
        }
    ]
];
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Map
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
            key: "169xi5"
        }
    ],
    [
        "path",
        {
            d: "M15 5.764v15",
            key: "1pn4in"
        }
    ],
    [
        "path",
        {
            d: "M9 3.236v15",
            key: "1uimfh"
        }
    ]
];
const Map = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("map", __iconNode);
;
 //# sourceMappingURL=map.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript) <export default as Map>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Map",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Activity
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
            key: "169zse"
        }
    ]
];
const Activity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("activity", __iconNode);
;
 //# sourceMappingURL=activity.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Activity",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Navigation
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "polygon",
        {
            points: "3 11 22 2 13 21 11 13 3 11",
            key: "1ltx0t"
        }
    ]
];
const Navigation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("navigation", __iconNode);
;
 //# sourceMappingURL=navigation.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript) <export default as Navigation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navigation",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/navigation.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ZoomIn
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ],
    [
        "line",
        {
            x1: "21",
            x2: "16.65",
            y1: "21",
            y2: "16.65",
            key: "13gj7c"
        }
    ],
    [
        "line",
        {
            x1: "11",
            x2: "11",
            y1: "8",
            y2: "14",
            key: "1vmskp"
        }
    ],
    [
        "line",
        {
            x1: "8",
            x2: "14",
            y1: "11",
            y2: "11",
            key: "durymu"
        }
    ]
];
const ZoomIn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("zoom-in", __iconNode);
;
 //# sourceMappingURL=zoom-in.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript) <export default as ZoomIn>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZoomIn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zoom$2d$in$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zoom-in.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_db3a92d6._.js.map