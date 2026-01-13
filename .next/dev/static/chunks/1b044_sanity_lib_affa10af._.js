(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/package.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "peerDependencies",
    ()=>peerDependencies,
    "version",
    ()=>version
]);
var version = "5.2.0", peerDependencies = {
    "styled-components": "^6.1.15"
};
;
 //# sourceMappingURL=package.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/version.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SANITY_VERSION",
    ()=>SANITY_VERSION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/package.js [app-client] (ecmascript)");
;
let buildVersion;
try {
    buildVersion = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.PKG_BUILD_VERSION;
} catch  {}
try {
    buildVersion = buildVersion || // This is replaced by `@sanity/pkg-utils` at build time
    // and must always be references by its full static name, e.g. no optional chaining, no `if (process && process.env)` etc.
    "5.2.0";
} catch  {}
const SANITY_VERSION = buildVersion || `${__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$package$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]}-dev`;
;
 //# sourceMappingURL=version.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/TooltipDelayGroupProvider.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Dialog",
    ()=>Dialog,
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "Hotkeys",
    ()=>Hotkeys,
    "MenuButton",
    ()=>MenuButton,
    "MenuItem",
    ()=>MenuItem,
    "Popover",
    ()=>Popover,
    "Tab",
    ()=>Tab,
    "Tooltip",
    ()=>Tooltip,
    "TooltipDelayGroupProvider",
    ()=>TooltipDelayGroupProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/@sanity/ui/dist/_chunks-es/_visual-editing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/@sanity/ui/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_singletons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/react-is/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/styled-components/dist/styled-components.browser.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
const LARGE_BUTTON_PROPS = {
    space: 3,
    padding: 3
}, DEFAULT_BUTTON_PROPS = {
    space: 2,
    padding: 2
}, TooltipButtonWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"].span`
  display: inline-flex;
`, Button = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(t0, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    let paddingLeft, paddingY, rest, t1, t2, t3, tooltipProps;
    $[0] !== t0 ? ({ size: t1, mode: t2, paddingY, paddingLeft, tone: t3, tooltipProps, ...rest } = t0, $[0] = t0, $[1] = paddingLeft, $[2] = paddingY, $[3] = rest, $[4] = t1, $[5] = t2, $[6] = t3, $[7] = tooltipProps) : (paddingLeft = $[1], paddingY = $[2], rest = $[3], t1 = $[4], t2 = $[5], t3 = $[6], tooltipProps = $[7]);
    const size = t1 === void 0 ? "default" : t1, mode = t2 === void 0 ? "default" : t2, tone = t3 === void 0 ? "default" : t3, sizeProps = size === "default" ? DEFAULT_BUTTON_PROPS : LARGE_BUTTON_PROPS;
    let t4;
    $[8] !== mode || $[9] !== paddingLeft || $[10] !== paddingY || $[11] !== ref || $[12] !== rest || $[13] !== sizeProps || $[14] !== tone ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        ...rest,
        ...sizeProps,
        paddingY,
        paddingLeft,
        ref,
        mode,
        tone
    }), $[8] = mode, $[9] = paddingLeft, $[10] = paddingY, $[11] = ref, $[12] = rest, $[13] = sizeProps, $[14] = tone, $[15] = t4) : t4 = $[15];
    const children = t4;
    if (tooltipProps) {
        const t5 = tooltipProps?.content;
        let t6;
        $[16] !== children ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TooltipButtonWrapper, {
            children
        }), $[16] = children, $[17] = t6) : t6 = $[17];
        let t7;
        return $[18] !== t5 || $[19] !== t6 || $[20] !== tooltipProps ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tooltip, {
            content: t5,
            portal: !0,
            ...tooltipProps,
            children: t6
        }), $[18] = t5, $[19] = t6, $[20] = tooltipProps, $[21] = t7) : t7 = $[21], t7;
    }
    return children;
}), Dialog = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(t0, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(23);
    let bodyHeight, children, footer, props, t1, t2, zOffset;
    $[0] !== t0 ? ({ animate: t1, bodyHeight, children, footer, padding: t2, zOffset, ...props } = t0, $[0] = t0, $[1] = bodyHeight, $[2] = children, $[3] = footer, $[4] = props, $[5] = t1, $[6] = t2, $[7] = zOffset) : (bodyHeight = $[1], children = $[2], footer = $[3], props = $[4], t1 = $[5], t2 = $[6], zOffset = $[7]);
    const animate = t1 === void 0 ? !0 : t1, padding = t2 === void 0 ? !0 : t2, { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    let t3;
    $[8] !== footer || $[9] !== props || $[10] !== t ? (t3 = (footer?.confirmButton || footer?.cancelButton) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        width: "full",
        gap: 3,
        justify: "flex-end",
        padding: 3,
        align: "center",
        children: [
            footer?.description && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
                flex: 1,
                paddingLeft: 1,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    size: 1,
                    muted: !0,
                    children: footer.description
                })
            }),
            props.onClose && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                mode: "bleed",
                padding: 2,
                text: t("common.dialog.cancel-button.text"),
                tone: "default",
                onClick: props.onClose,
                "data-testid": "cancel-button",
                ...footer.cancelButton
            }),
            footer.confirmButton && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                mode: "default",
                padding: 2,
                text: t("common.dialog.confirm-button.text"),
                tone: "critical",
                "data-testid": "confirm-button",
                ...footer.confirmButton
            })
        ]
    }), $[8] = footer, $[9] = props, $[10] = t, $[11] = t3) : t3 = $[11];
    const t4 = padding ? 4 : 0;
    let t5;
    $[12] !== bodyHeight || $[13] !== children || $[14] !== t4 ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        height: bodyHeight,
        padding: t4,
        children
    }), $[12] = bodyHeight, $[13] = children, $[14] = t4, $[15] = t5) : t5 = $[15];
    let t6;
    return $[16] !== animate || $[17] !== props || $[18] !== ref || $[19] !== t3 || $[20] !== t5 || $[21] !== zOffset ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Dialog"], {
        ...props,
        animate,
        zOffset,
        ref,
        footer: t3,
        children: t5
    }), $[16] = animate, $[17] = props, $[18] = ref, $[19] = t3, $[20] = t5, $[21] = zOffset, $[22] = t6) : t6 = $[22], t6;
});
function ErrorBoundary(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    let onCatch, rest;
    $[0] !== t0 ? ({ onCatch, ...rest } = t0, $[0] = t0, $[1] = onCatch, $[2] = rest) : (onCatch = $[1], rest = $[2]);
    const source = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SourceContext"]);
    let t1;
    $[3] !== onCatch || $[4] !== source ? (t1 = (t22)=>{
        const { error: caughtError, info: caughtInfo } = t22, run = ()=>{
            source?.onUncaughtError?.(caughtError, caughtInfo);
        };
        try {
            run();
        } catch (t3) {
            const e = t3;
            e.message = `Encountered an additional error when calling custom "onUncaughtError()": ${e.message}`, console.error(e);
        }
        onCatch?.({
            error: caughtError,
            info: caughtInfo
        });
    }, $[3] = onCatch, $[4] = source, $[5] = t1) : t1 = $[5];
    const handleCatch = t1;
    let t2;
    return $[6] !== handleCatch || $[7] !== rest ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ErrorBoundary"], {
        ...rest,
        onCatch: handleCatch
    }), $[6] = handleCatch, $[7] = rest, $[8] = t2) : t2 = $[8], t2;
}
const MenuButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    let t0;
    $[0] !== props.popover ? (t0 = {
        ...props.popover,
        animate: !0
    }, $[0] = props.popover, $[1] = t0) : t0 = $[1];
    let t1;
    return $[2] !== props || $[3] !== ref || $[4] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MenuButton"], {
        ...props,
        ref,
        popover: t0
    }), $[2] = props, $[3] = ref, $[4] = t0, $[5] = t1) : t1 = $[5], t1;
});
function Hotkeys(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    let props, t1, t2;
    $[0] !== t0 ? ({ makePlatformAware: t1, keys: t2, ...props } = t0, $[0] = t0, $[1] = props, $[2] = t1, $[3] = t2) : (props = $[1], t1 = $[2], t2 = $[3]);
    const makePlatformAware = t1 === void 0 ? !0 : t1;
    let t3;
    $[4] !== t2 ? (t3 = t2 === void 0 ? [] : t2, $[4] = t2, $[5] = t3) : t3 = $[5];
    const hotKeys = t3;
    let t4;
    $[6] !== hotKeys || $[7] !== makePlatformAware ? (t4 = makePlatformAware ? hotKeys.map(platformifyKey) : hotKeys, $[6] = hotKeys, $[7] = makePlatformAware, $[8] = t4) : t4 = $[8];
    const keys = t4;
    let t5;
    return $[9] !== keys || $[10] !== props ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Hotkeys"], {
        ...props,
        keys
    }), $[9] = keys, $[10] = props, $[11] = t5) : t5 = $[11], t5;
}
const IS_APPLE_DEVICE = typeof navigator > "u" || typeof navigator.platform != "string" ? !1 : /Mac|iPod|iPhone|iPad/.test(navigator.platform || "");
function platformifyKey(key) {
    const lowerKey = key.toLowerCase();
    return lowerKey === "alt" && IS_APPLE_DEVICE ? matchCase(key, "option") : lowerKey === "option" && !IS_APPLE_DEVICE ? matchCase(key, "alt") : key;
}
function matchCase(original, target) {
    const orgLength = original.length;
    return target.replace(/./g, (char, i)=>i < orgLength && original[i] === original[i].toUpperCase() ? char.toUpperCase() : char);
}
const TOOLTIP_DELAY_PROPS = {
    open: 400
}, TOOLTIP_SHARED_PROPS = {
    animate: !0,
    arrow: !1,
    boundaryElement: null,
    delay: TOOLTIP_DELAY_PROPS,
    fallbackPlacements: [
        "bottom-start",
        "bottom-end",
        "top-start",
        "top-end"
    ],
    placement: "bottom",
    portal: !0
}, Tooltip = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    let content, hotkeys, rest;
    if ($[0] !== props ? ({ content, hotkeys, ...rest } = props, $[0] = props, $[1] = content, $[2] = hotkeys, $[3] = rest) : (content = $[1], hotkeys = $[2], rest = $[3]), typeof content == "string") {
        let t02;
        $[4] !== content ? (t02 = content && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            flex: 1,
            padding: 1,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                size: 1,
                children: content
            })
        }), $[4] = content, $[5] = t02) : t02 = $[5];
        let t1;
        $[6] !== hotkeys ? (t1 = hotkeys && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
            flex: "none",
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Hotkeys, {
                keys: hotkeys
            })
        }), $[6] = hotkeys, $[7] = t1) : t1 = $[7];
        let t2;
        $[8] !== t02 || $[9] !== t1 ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            align: "center",
            children: [
                t02,
                t1
            ]
        }), $[8] = t02, $[9] = t1, $[10] = t2) : t2 = $[10];
        let t3;
        return $[11] !== ref || $[12] !== rest || $[13] !== t2 ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            ...TOOLTIP_SHARED_PROPS,
            content: t2,
            padding: 1,
            ref,
            ...rest
        }), $[11] = ref, $[12] = rest, $[13] = t2, $[14] = t3) : t3 = $[14], t3;
    }
    let t0;
    return $[15] !== content || $[16] !== ref || $[17] !== rest ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
        ...TOOLTIP_SHARED_PROPS,
        content,
        ref,
        ...rest
    }), $[15] = content, $[16] = ref, $[17] = rest, $[18] = t0) : t0 = $[18], t0;
}), FONT_SIZE = 1, SUBTITLE_FONT_SIZE = 0, SubtitleText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"])`
  margin-top: 2px;
`, PreviewWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$styled$2d$components$2f$dist$2f$styled$2d$components$2e$browser$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["styled"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"])`
  height: 25px;
  width: 25px;
  overflow: hidden;
`, MenuItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(t0, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    let Icon, IconRight, __unstable_space, __unstable_subtitle, badgeText, childrenProp, disabled, hotkeys, renderMenuItem, rest, t1, text, tooltipProps;
    $[0] !== t0 ? ({ badgeText, children: childrenProp, disabled, hotkeys, icon: Icon, iconRight: IconRight, preview: t1, renderMenuItem, text, tooltipProps, __unstable_subtitle, __unstable_space, ...rest } = t0, $[0] = t0, $[1] = Icon, $[2] = IconRight, $[3] = __unstable_space, $[4] = __unstable_subtitle, $[5] = badgeText, $[6] = childrenProp, $[7] = disabled, $[8] = hotkeys, $[9] = renderMenuItem, $[10] = rest, $[11] = t1, $[12] = text, $[13] = tooltipProps) : (Icon = $[1], IconRight = $[2], __unstable_space = $[3], __unstable_subtitle = $[4], badgeText = $[5], childrenProp = $[6], disabled = $[7], hotkeys = $[8], renderMenuItem = $[9], rest = $[10], t1 = $[11], text = $[12], tooltipProps = $[13]);
    const preview = t1 === void 0 ? null : t1;
    let t2;
    $[14] !== __unstable_space || $[15] !== disabled || $[16] !== preview ? (t2 = preview && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(PreviewWrapper, {
        style: {
            opacity: disabled ? 0.25 : void 0
        },
        paddingRight: __unstable_space ? 1 : 0,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
            align: "center",
            height: "fill",
            justify: "center",
            children: preview
        })
    }), $[14] = __unstable_space, $[15] = disabled, $[16] = preview, $[17] = t2) : t2 = $[17];
    let t3;
    $[18] !== Icon ? (t3 = Icon && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        paddingRight: 1,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: FONT_SIZE,
            children: [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(Icon) && Icon,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(Icon) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Icon, {})
            ]
        })
    }), $[18] = Icon, $[19] = t3) : t3 = $[19];
    let t4;
    $[20] !== __unstable_subtitle || $[21] !== text ? (t4 = text && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stack"], {
        flex: 1,
        space: __unstable_subtitle ? 1 : 2,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                size: FONT_SIZE,
                textOverflow: "ellipsis",
                weight: "medium",
                children: text
            }),
            __unstable_subtitle && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(SubtitleText, {
                size: SUBTITLE_FONT_SIZE,
                textOverflow: "ellipsis",
                weight: "medium",
                muted: !0,
                children: __unstable_subtitle
            })
        ]
    }), $[20] = __unstable_subtitle, $[21] = text, $[22] = t4) : t4 = $[22];
    let t5;
    $[23] !== IconRight || $[24] !== badgeText || $[25] !== hotkeys ? (t5 = (badgeText || hotkeys || IconRight) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        align: "center",
        gap: 3,
        marginLeft: 3,
        children: [
            hotkeys && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Hotkeys, {
                keys: hotkeys,
                style: {
                    marginTop: -4,
                    marginBottom: -4
                }
            }),
            badgeText && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                fontSize: 0,
                style: {
                    marginTop: -4,
                    marginBottom: -4
                },
                children: badgeText
            }),
            IconRight && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                size: FONT_SIZE,
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElement"])(IconRight) && IconRight,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$is$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidElementType"])(IconRight) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(IconRight, {})
                ]
            })
        ]
    }), $[23] = IconRight, $[24] = badgeText, $[25] = hotkeys, $[26] = t5) : t5 = $[26];
    let t6;
    $[27] !== t2 || $[28] !== t3 || $[29] !== t4 || $[30] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        align: "center",
        gap: 2,
        children: [
            t2,
            t3,
            t4,
            t5
        ]
    }), $[27] = t2, $[28] = t3, $[29] = t4, $[30] = t5, $[31] = t6) : t6 = $[31];
    const menuItemContent = t6, t7 = preview ? 1 : 3, t8 = preview ? 1 : 3;
    let t9;
    $[32] !== childrenProp || $[33] !== menuItemContent || $[34] !== renderMenuItem ? (t9 = typeof childrenProp > "u" && typeof renderMenuItem == "function" ? renderMenuItem(menuItemContent) : menuItemContent, $[32] = childrenProp, $[33] = menuItemContent, $[34] = renderMenuItem, $[35] = t9) : t9 = $[35];
    let t10;
    $[36] !== disabled || $[37] !== ref || $[38] !== rest || $[39] !== t7 || $[40] !== t8 || $[41] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuItem"], {
        disabled,
        paddingLeft: t7,
        paddingRight: 3,
        paddingY: t8,
        ref,
        ...rest,
        children: t9
    }), $[36] = disabled, $[37] = ref, $[38] = rest, $[39] = t7, $[40] = t8, $[41] = t9, $[42] = t10) : t10 = $[42];
    const children = t10;
    if (tooltipProps) {
        const t11 = tooltipProps?.content;
        let t12;
        $[43] !== children ? (t12 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children
        }), $[43] = children, $[44] = t12) : t12 = $[44];
        let t13;
        return $[45] !== t11 || $[46] !== t12 || $[47] !== tooltipProps ? (t13 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tooltip, {
            content: t11,
            portal: !0,
            ...tooltipProps,
            children: t12
        }), $[45] = t11, $[46] = t12, $[47] = tooltipProps, $[48] = t13) : t13 = $[48], t13;
    }
    return children;
}), Popover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    let restProps, t0;
    $[0] !== props ? ({ animate: t0, ...restProps } = props, $[0] = props, $[1] = restProps, $[2] = t0) : (restProps = $[1], t0 = $[2]);
    const animate = t0 === void 0 ? !0 : t0;
    let t1;
    return $[3] !== animate || $[4] !== ref || $[5] !== restProps ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        ...restProps,
        animate,
        ref
    }), $[3] = animate, $[4] = ref, $[5] = restProps, $[6] = t1) : t1 = $[6], t1;
}), Tab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(t0, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    let props, t1;
    $[0] !== t0 ? ({ tone: t1, ...props } = t0, $[0] = t0, $[1] = props, $[2] = t1) : (props = $[1], t1 = $[2]);
    const tone = t1 === void 0 ? "default" : t1;
    let t2;
    return $[3] !== props || $[4] !== ref || $[5] !== tone ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tab"], {
        ...props,
        muted: !0,
        padding: 2,
        ref,
        tone
    }), $[3] = props, $[4] = ref, $[5] = tone, $[6] = t2) : t2 = $[6], t2;
}), TooltipDelayGroupProvider = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    let t0;
    return $[0] !== props.children ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipDelayGroupProvider"], {
        delay: TOOLTIP_DELAY_PROPS,
        children: props.children
    }), $[0] = props.children, $[1] = t0) : t0 = $[1], t0;
};
;
 //# sourceMappingURL=TooltipDelayGroupProvider.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/MenuGroup.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConfirmPopover",
    ()=>ConfirmPopover,
    "MenuGroup",
    ()=>MenuGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/@sanity/ui/dist/_chunks-es/_visual-editing.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$TooltipDelayGroupProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/TooltipDelayGroupProvider.js [app-client] (ecmascript)");
;
;
;
;
;
;
function ConfirmPopover(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(16), { cancelButtonIcon, cancelButtonText, confirmButtonIcon, confirmButtonText, message, onCancel, onConfirm, open, referenceElement, tone: t1, placement: t2, fallbackPlacements: t3 } = t0, tone = t1 === void 0 ? "critical" : t1, placement = t2 === void 0 ? "top" : t2;
    let t4;
    $[0] !== t3 ? (t4 = t3 === void 0 ? [
        "left",
        "bottom"
    ] : t3, $[0] = t3, $[1] = t4) : t4 = $[1];
    const fallbackPlacements = t4;
    if (!open) return null;
    let t5;
    $[2] !== cancelButtonIcon || $[3] !== cancelButtonText || $[4] !== confirmButtonIcon || $[5] !== confirmButtonText || $[6] !== message || $[7] !== onCancel || $[8] !== onConfirm || $[9] !== tone ? (t5 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ConfirmPopoverContent, {
        cancelButtonIcon,
        cancelButtonText,
        confirmButtonIcon,
        confirmButtonText,
        message,
        onCancel,
        onConfirm,
        tone
    }), $[2] = cancelButtonIcon, $[3] = cancelButtonText, $[4] = confirmButtonIcon, $[5] = confirmButtonText, $[6] = message, $[7] = onCancel, $[8] = onConfirm, $[9] = tone, $[10] = t5) : t5 = $[10];
    let t6;
    return $[11] !== fallbackPlacements || $[12] !== placement || $[13] !== referenceElement || $[14] !== t5 ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
        content: t5,
        constrainSize: !0,
        fallbackPlacements,
        open: !0,
        placement,
        portal: !0,
        preventOverflow: !0,
        referenceElement
    }), $[11] = fallbackPlacements, $[12] = placement, $[13] = referenceElement, $[14] = t5, $[15] = t6) : t6 = $[15], t6;
}
function ConfirmPopoverContent(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(29), { cancelButtonIcon, cancelButtonText, confirmButtonIcon, confirmButtonText, message, onCancel, onConfirm, tone } = t0, { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])(), { isTopLayer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayer"])(), ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t1;
    $[0] !== isTopLayer || $[1] !== onCancel ? (t1 = (event)=>{
        event.key === "Escape" && isTopLayer && onCancel();
    }, $[0] = isTopLayer, $[1] = onCancel, $[2] = t1) : t1 = $[2], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalKeyDown"])(t1);
    let t2;
    $[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t2 = ()=>[
            ref.current
        ], $[3] = t2) : t2 = $[3], (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useClickOutsideEvent"])(isTopLayer && onCancel, t2);
    let t3;
    $[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t3 = {
        minWidth: 280,
        maxWidth: 350
    }, $[4] = t3) : t3 = $[4];
    let t4;
    $[5] !== message ? (t4 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        flex: 1,
        overflow: "auto",
        padding: 4,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
            size: 1,
            children: message
        })
    }), $[5] = message, $[6] = t4) : t4 = $[6];
    let t5;
    $[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel") ? (t5 = {
        borderTop: "1px solid var(--card-border-color)"
    }, $[7] = t5) : t5 = $[7];
    let t6;
    $[8] !== cancelButtonText || $[9] !== t ? (t6 = cancelButtonText || t("common.dialog.cancel-button.text"), $[8] = cancelButtonText, $[9] = t, $[10] = t6) : t6 = $[10];
    let t7;
    $[11] !== cancelButtonIcon || $[12] !== onCancel || $[13] !== t6 ? (t7 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-testid": "confirm-popover-cancel-button",
        icon: cancelButtonIcon,
        onClick: onCancel,
        mode: "ghost",
        padding: 2,
        text: t6,
        size: 1
    }), $[11] = cancelButtonIcon, $[12] = onCancel, $[13] = t6, $[14] = t7) : t7 = $[14];
    let t8;
    $[15] !== confirmButtonText || $[16] !== t ? (t8 = confirmButtonText || t("common.dialog.confirm-button.text"), $[15] = confirmButtonText, $[16] = t, $[17] = t8) : t8 = $[17];
    let t9;
    $[18] !== confirmButtonIcon || $[19] !== onConfirm || $[20] !== t8 || $[21] !== tone ? (t9 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-testid": "confirm-popover-confirm-button",
        icon: confirmButtonIcon,
        onClick: onConfirm,
        padding: 2,
        text: t8,
        tone,
        size: 1
    }), $[18] = confirmButtonIcon, $[19] = onConfirm, $[20] = t8, $[21] = tone, $[22] = t9) : t9 = $[22];
    let t10;
    $[23] !== t7 || $[24] !== t9 ? (t10 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        paddingX: 4,
        paddingY: 3,
        style: t5,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Grid"], {
            columns: 2,
            gap: 2,
            children: [
                t7,
                t9
            ]
        })
    }), $[23] = t7, $[24] = t9, $[25] = t10) : t10 = $[25];
    let t11;
    return $[26] !== t10 || $[27] !== t4 ? (t11 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
        direction: "column",
        ref,
        style: t3,
        children: [
            t4,
            t10
        ]
    }), $[26] = t10, $[27] = t4, $[28] = t11) : t11 = $[28], t11;
}
const MenuGroup = (props)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { tooltipProps } = props;
    let t0;
    $[0] !== props ? (t0 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$ui$2f$dist$2f$_chunks$2d$es$2f$_visual$2d$editing$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MenuGroup"], {
        ...props,
        fontSize: 1,
        padding: 3
    }), $[0] = props, $[1] = t0) : t0 = $[1];
    const children = t0;
    if (tooltipProps) {
        const t1 = tooltipProps?.content;
        let t2;
        $[2] !== children ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            children
        }), $[2] = children, $[3] = t2) : t2 = $[3];
        let t3;
        return $[4] !== t1 || $[5] !== t2 || $[6] !== tooltipProps ? (t3 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$TooltipDelayGroupProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
            content: t1,
            portal: !0,
            ...tooltipProps,
            children: t2
        }), $[4] = t1, $[5] = t2, $[6] = tooltipProps, $[7] = t3) : t3 = $[7], t3;
    }
    return children;
};
;
 //# sourceMappingURL=MenuGroup.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/generate-help-url.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateHelpUrl",
    ()=>generateHelpUrl
]);
const BASE_URL = "https://www.sanity.io/docs/help/";
function generateHelpUrl(slug) {
    return BASE_URL + slug;
}
;
 //# sourceMappingURL=generate-help-url.esm.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/resources7.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>structureLocaleStrings
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
;
const structureLocaleStrings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineLocalesResources"])("structure", {
    /** Label for the "Copy Document URL" document action */ "action.copy-document-url.label": "Copy Document URL",
    /** Tooltip when action button is disabled because the operation is not ready   */ "action.delete.disabled.not-ready": "Operation not ready",
    /** Tooltip when action button is disabled because the document does not exist */ "action.delete.disabled.nothing-to-delete": "This document doesn't yet exist or is already deleted",
    /** Label for the "Delete" document action button */ "action.delete.label": "Delete",
    /** Label for the "Delete" document action while the document is being deleted */ "action.delete.running.label": "Deleting\u2026",
    /** Tooltip when action is disabled because the document is linked to Canvas */ "action.disabled-by-canvas.tooltip": "Some document actions are disabled for documents linked to Canvas",
    /** Message prompting the user to confirm discarding changes */ "action.discard-changes.confirm-dialog.confirm-discard-changes": "Are you sure you want to discard all changes since last published?",
    /** Message prompting the user to confirm discarding changes */ "action.discard-changes.confirm-dialog.confirm-discard-changes-draft": "Are you sure you want to discard all changes and delete this draft document?",
    /**Header for the confirm discard dialog */ "action.discard-changes.confirm-dialog.header.text": "Discard changes?",
    /** Tooltip when action is disabled because the document has no unpublished changes */ "action.discard-changes.disabled.no-change": "This document has no unpublished changes",
    /** Tooltip when action is disabled because the document is not published */ "action.discard-changes.disabled.not-published": "This document is not published",
    /** Tooltip when action button is disabled because the operation is not ready   */ "action.discard-changes.disabled.not-ready": "Operation not ready",
    /** Label for the "Discard changes" document action */ "action.discard-changes.label": "Discard changes",
    /** Tooltip when action is disabled because the operation is not ready   */ "action.duplicate.disabled.not-ready": "Operation not ready",
    /** Tooltip when action is disabled because the document doesn't exist */ "action.duplicate.disabled.nothing-to-duplicate": "This document doesn't yet exist so there's nothing to duplicate",
    /** Label for the "Duplicate" document action */ "action.duplicate.label": "Duplicate",
    /** Label for the "Duplicate" document action while the document is being duplicated */ "action.duplicate.running.label": "Duplicating\u2026",
    /** Tooltip when publish button is disabled because the document is already published, and published time is unavailable.*/ "action.publish.already-published.no-time-ago.tooltip": "Already published",
    /** Tooltip when publish button is disabled because the document is already published.*/ "action.publish.already-published.tooltip": "Published {{timeSincePublished}}",
    /** Tooltip when action is disabled because the studio is not ready.*/ "action.publish.disabled.not-ready": "Operation not ready",
    /** Label for action when there are pending changes.*/ "action.publish.draft.label": "Publish",
    /** Label for the "Publish" document action */ "action.publish.label": "Publish",
    /** Label for the "Publish" document action when the document has live edit enabled.*/ "action.publish.live-edit.label": "Publish",
    /** Fallback tooltip for the "Publish" document action when publish is invoked for a document with live edit enabled.*/ "action.publish.live-edit.publish-disabled": "Cannot publish since Live Edit is enabled for this document type",
    /** Tooltip for the "Publish" document action when the document has live edit enabled.*/ "action.publish.live-edit.tooltip": "Live Edit is enabled for this content type and publishing happens automatically as you make changes",
    /** Tooltip when publish button is disabled because there are no changes.*/ "action.publish.no-changes.tooltip": "No unpublished changes",
    /** Label for the "Publish" document action when there are no changes.*/ "action.publish.published.label": "Published",
    /** Label for the "Publish" document action while publish is being executed.*/ "action.publish.running.label": "Publishing\u2026",
    /** Tooltip when the "Publish" document action is disabled due to validation issues */ "action.publish.validation-issues.tooltip": "There are validation errors that need to be fixed before this document can be published",
    /** Tooltip when publish button is waiting for validation and async tasks to complete.*/ "action.publish.waiting": "Waiting for tasks to finish before publishing",
    /** Message prompting the user to confirm that they want to restore to an earlier revision*/ "action.restore.confirm.message": "Are you sure you want to restore this document?",
    /** Fallback tooltip for when user is looking at the initial revision */ "action.restore.disabled.cannot-restore-initial": "You can't restore to the initial revision",
    /** Label for the "Restore" document action */ "action.restore.label": "Revert to revision",
    /** Default tooltip for the action */ "action.restore.tooltip": "Restore to this revision",
    /** Tooltip when action is disabled because the document is not already published */ "action.unpublish.disabled.not-published": "This document is not published",
    /** Tooltip when action is disabled because the operation is not ready   */ "action.unpublish.disabled.not-ready": "Operation not ready",
    /** Label for the "Unpublish" document action */ "action.unpublish.label": "Unpublish",
    /** Fallback tooltip for the Unpublish document action when publish is invoked for a document with live edit enabled.*/ "action.unpublish.live-edit.disabled": "This document has live edit enabled and cannot be unpublished",
    /** Description for the archived release banner, rendered when viewing the history of a version document from the publihed view */ "banners.archived-release.description": "This document version belongs to the archived <VersionBadge>{{title}}</VersionBadge> release",
    /** Description for the archived scheduled draft banner, rendered when viewing the history of a cardinality one release document */ "banners.archived-scheduled-draft.description": "This scheduled draft is archived",
    /** The explanation displayed when a user attempts to create a new draft document, but the draft model is not switched on */ "banners.choose-new-document-destination.cannot-create-draft-document": "Cannot create a draft document.",
    /** The explanation displayed when a user attempts to create a new published document, but the schema type doesn't support live-editing */ "banners.choose-new-document-destination.cannot-create-published-document": "Cannot create a published document.",
    /** The prompt displayed when a user must select a different perspective in order to create a document */ "banners.choose-new-document-destination.choose-destination": "Choose a destination for this document:",
    /** The explanation displayed when a user attempts to create a new document in a release, but the selected release is inactive */ "banners.choose-new-document-destination.release-inactive": "The <VersionBadge>{{title}}</VersionBadge> release is not active.",
    /** The text for the restore button on the deleted document banner */ "banners.deleted-document-banner.restore-button.text": "Restore most recent revision",
    /** The text content for the deleted document banner */ "banners.deleted-document-banner.text": "This document has been deleted.",
    /** The text content for the deprecated document type banner */ "banners.deprecated-document-type-banner.text": "This document type has been deprecated.",
    /** The text for publish action for discarding the version */ "banners.live-edit-draft-banner.discard.tooltip": "Discard draft to continue editing.",
    /** The text for publish action for the draft banner */ "banners.live-edit-draft-banner.publish.tooltip": "Publish draft to continue editing.",
    /** The text content for the live edit document when it's a draft */ "banners.live-edit-draft-banner.text": "The type <strong>{{schemaType}}</strong> has <code>liveEdit</code> enabled, but a draft version of this document exists. Publish or discard the draft in order to continue live editing it.",
    /** The label for the "compare draft" action */ "banners.obsolete-draft.actions.compare-draft.text": "Compare draft",
    /** The label for the "discard draft" action */ "banners.obsolete-draft.actions.discard-draft.text": "Discard draft",
    /** The label for the "publish draft" action */ "banners.obsolete-draft.actions.publish-draft.text": "Publish draft",
    /** The warning displayed when editing a document that has an obsolete draft because the draft model is not switched on */ "banners.obsolete-draft.draft-model-inactive.text": "The workspace does not have drafts enabled, but a draft version of this document exists.",
    /** The text for the permission check banner if the user only has one role, and it does not allow publishing this document */ "banners.permission-check-banner.missing-permission_create_one": "Your role <Roles/> does not have permission to publish this document.",
    /** The text for the permission check banner if the user only has multiple roles, but they do not allow publishing this document */ "banners.permission-check-banner.missing-permission_create_other": "Your roles <Roles/> do not have permission to publish this document.",
    /** The text for the permission check banner if the user only has one role, and it does not allow editing this document */ "banners.permission-check-banner.missing-permission_update_one": "Your role <Roles/> does not have permission to edit this document.",
    /** The text for the permission check banner if the user only has multiple roles, but they do not allow editing this document */ "banners.permission-check-banner.missing-permission_update_other": "Your roles <Roles/> do not have permission to edit this document.",
    /** The pending text for the request permission button that appears for viewer roles */ "banners.permission-check-banner.request-permission-button.sent": "Editor request sent",
    /** The text for the request permission button that appears for viewer roles */ "banners.permission-check-banner.request-permission-button.text": "Ask to edit",
    /** Description for the archived release banner, rendered when viewing the history of a version document from the published view */ "banners.published-release.description": "You are viewing a read-only document that was published as part of <VersionBadge>{{title}}</VersionBadge>. It can't be edited",
    /** The text for the reload button */ "banners.reference-changed-banner.reason-changed.reload-button.text": "Reload reference",
    /** The text for the reference change banner if the reason is that the reference has been changed */ "banners.reference-changed-banner.reason-changed.text": "This reference has changed since you opened it.",
    /** The text for the close button */ "banners.reference-changed-banner.reason-removed.close-button.text": "Close reference",
    /** The text for the reference change banner if the reason is that the reference has been deleted */ "banners.reference-changed-banner.reason-removed.text": "This reference has been removed since you opened it.",
    /** The text that appears for the action button to add the current document to the global release */ "banners.release.action.add-to-release": "Add to release",
    /** The text that appears for the action button to add the current document to the global release */ "banners.release.action.open-to-edit": "Open release to edit",
    /** Toast description in case an error occurs when adding a document to a release  */ "banners.release.error.description": "An error occurred when adding document to the release: {{message}}",
    /** Toast title in case an error occurs when adding a document to a release  */ "banners.release.error.title": "Error adding document to release",
    /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */ "banners.release.navigate-to-edit-description": "The document only exists in the",
    /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */ "banners.release.navigate-to-edit-description-end_one": "release",
    /** The text for the banner that appears when a document only has versions but is in a draft or published pinned release */ "banners.release.navigate-to-edit-description-end_other": "releases",
    /** The text for the banner that appears when there are multiple versions but no drafts or published, only one extra releases */ "banners.release.navigate-to-edit-description-multiple_one": "This document is part of the <VersionBadge/> release and {{count}} more release.",
    /** The text for the banner that appears when there are multiple versions but no drafts or published, more than one extra releases */ "banners.release.navigate-to-edit-description-multiple_other": "This document is part of the <VersionBadge/> release and {{count}} more releases",
    /** The text for the banner that appears when a document is not part of any release
   * @deprecated – no longer in use
   * */ "banners.release.navigate-to-edit-description-none": "This document is not part of any release",
    /** The text for the banner that appears when a document only has one version but is in a draft or published pinned release */ "banners.release.navigate-to-edit-description-single": "This document is part of the <VersionBadge/> release",
    /** The text for the banner that appears when a document is not in the current global release */ "banners.release.not-in-release": "Not in the <VersionBadge>{{title}}</VersionBadge> release.",
    /** Description of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */ "banners.release.waiting.description": "Please hold tight while the document is added to the release. It should not take longer than a few seconds.",
    /** Title of toast that will appear in case of latency between the user adding a document to a release and the UI reflecting it */ "banners.release.waiting.title": "Adding document to release\u2026",
    /** The text for the revision not found banner */ "banners.revision-not-found.description": "We couldn't find the document revision selected, please select another entry from the history list.",
    /** The text content for the scheduled draft override banner */ "banners.scheduled-draft-override-banner.text": "A scheduled draft for this document exists. If you publish changes now they will be overwritten when the schedule runs.",
    /** The text content for the unpublished document banner when is part of a release */ "banners.unpublished-release-banner.text": "This document will be unpublished as part of the <VersionBadge>{{title}}</VersionBadge> release.",
    /** The text content for the unpublished document banner letting the user know that the current published version is being shown */ "banners.unpublished-release-banner.text-with-published": "Showing the current <strong>published</strong> version:",
    /** Browser/tab title when creating a new document of a given type */ "browser-document-title.new-document": "New {{schemaType}}",
    /** Browser/tab title when editing a document where the title cannot be resolved from preview configuration */ "browser-document-title.untitled-document": "Untitled",
    /** The action menu button aria-label */ "buttons.action-menu-button.aria-label": "Open document actions",
    /** The action menu button tooltip */ "buttons.action-menu-button.tooltip": "Document actions",
    /** The aria-label for the collapse pane button on the document panel header */ "buttons.focus-pane-button.aria-label.collapse": "Exit focus mode (show navigation)",
    /** The aria-label for the focus pane button on the document panel header */ "buttons.focus-pane-button.aria-label.focus": "Enter focus mode (hide navigation)",
    /** The tooltip for the collapse pane button on the document panel header */ "buttons.focus-pane-button.tooltip.collapse": "Exit focus mode",
    /** The tooltip for the focus pane button on the document panel header */ "buttons.focus-pane-button.tooltip.focus": "Enter focus mode",
    /** The aria-label for the split pane button on the document panel header */ "buttons.split-pane-button.aria-label": "Split pane right",
    /** The tool tip for the split pane button on the document panel header */ "buttons.split-pane-button.tooltip": "Split pane right",
    /** The title for the close button on the split pane on the document panel header */ "buttons.split-pane-close-button.title": "Close split pane",
    /** The title for the close group button on the split pane on the document panel header */ "buttons.split-pane-close-group-button.title": "Close pane group",
    /** The text for the canvas linked banner action button */ "canvas.banner.edit-in-canvas-action": "Edit in Canvas",
    /** The text for the canvas linked banner when the document in editable mode*/ "canvas.banner.editable.linked-text": "This document can be edited in Canvas.",
    /** The description for the canvas linked banner popover in editable mode*/ "canvas.banner.editable.popover-description": "Canvas lets you write freely, then update content in Studio without manual field-by-field copying.",
    /** The heading for the canvas linked banner popover in editable mode*/ "canvas.banner.editable.popover-heading": "Free-form writing",
    /** The text for the canvas linked banner when the document is a draft */ "canvas.banner.linked-text.draft": "This draft document is linked to Canvas",
    /** The text for the canvas linked banner when the document is a live document */ "canvas.banner.linked-text.published": "This live document is linked to Canvas",
    /** The text for the canvas linked banner when the document is a version document */ "canvas.banner.linked-text.version": "This version document is linked to Canvas",
    /** The text for the canvas linked banner popover button */ "canvas.banner.popover-button-text": "Learn more",
    /** The description for the canvas linked banner popover */ "canvas.banner.popover-description": "Canvas lets you author in a free-form editor that automatically maps back to the Studio as structured content - as you type.",
    /** The heading for the canvas linked banner popover */ "canvas.banner.popover-heading": "Idea first authoring",
    /** The description for the changes banner */ "changes.banner.description": "Showing the history for the <strong>{{perspective}}</strong> version of this document.",
    /** The tooltip for the changes banner */ "changes.banner.tooltip": "This view shows the changes that occurred in a specific version of this document. Select a different version to see its changes",
    /** The label used in the changes inspector for the from selector */ "changes.from.label": "From",
    /* The label for the history tab in the changes inspector*/ "changes.tab.history": "History",
    /* The label for the review tab in the changes inspector*/ "changes.tab.review-changes": "Review changes",
    /** The label used in the changes inspector for the to selector */ "changes.to.label": "To",
    /** The error message shown when the specified document comparison mode is not supported */ "compare-version.error.invalidModeParam": '"{{input}}" is not a supported document comparison mode.',
    /** The error message shown when the next document for comparison could not be extracted from the URL */ "compare-version.error.invalidNextDocumentParam": "The next document parameter is invalid.",
    /** The error message shown when the document comparison URL could not be parsed */ "compare-version.error.invalidParams.title": "Unable to compare documents",
    /** The error message shown when the previous document for comparison could not be extracted from the URL */ "compare-version.error.invalidPreviousDocumentParam": "The previous document parameter is invalid.",
    /** The text for the tooltip when the "Compare versions" action for a document is disabled */ "compare-versions.menu-item.disabled-reason": "There are no other versions of this document to compare.",
    /** The text for the "Compare versions" action for a document */ "compare-versions.menu-item.title": "Compare versions",
    /** The string used to label draft documents */ "compare-versions.status.draft": "Draft",
    /** The string used to label published documents */ "compare-versions.status.published": "Published",
    /** The title used when comparing versions of a document */ "compare-versions.title": "Compare versions",
    /** The text in the "Cancel" button in the confirm delete dialog that cancels the action and closes the dialog */ "confirm-delete-dialog.cancel-button.text": "Cancel",
    /** Used in `confirm-delete-dialog.cdr-summary.title` */ "confirm-delete-dialog.cdr-summary.document-count_one": "1 document",
    /** Used in `confirm-delete-dialog.cdr-summary.title` */ "confirm-delete-dialog.cdr-summary.document-count_other": "{{count}} documents",
    /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */ "confirm-delete-dialog.cdr-summary.subtitle_one": "Dataset: {{datasets}}",
    /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */ "confirm-delete-dialog.cdr-summary.subtitle_other": "Datasets: {{datasets}}",
    /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */ "confirm-delete-dialog.cdr-summary.subtitle_unavailable_one": "Unavailable dataset",
    /** The text that appears in the subtitle `<summary>` that lists the datasets below the title */ "confirm-delete-dialog.cdr-summary.subtitle_unavailable_other": "Unavailable datasets",
    /** The text that appears in the title `<summary>` that includes the list of CDRs (singular) */ "confirm-delete-dialog.cdr-summary.title_one": "{{documentCount}} in another dataset",
    /** The text that appears in the title `<summary>` that includes the list of CDRs (plural) */ "confirm-delete-dialog.cdr-summary.title_other": "{{documentCount}} in {{count}} datasets",
    /** Appears when hovering over the copy button to copy */ "confirm-delete-dialog.cdr-table.copy-id-button.tooltip": "Copy ID to clipboard",
    /** The header for the dataset column in the list of cross-dataset references found */ "confirm-delete-dialog.cdr-table.dataset.label": "Dataset",
    /** The header for the document ID column in the list of cross-dataset references found */ "confirm-delete-dialog.cdr-table.document-id.label": "Document ID",
    /** The toast title when the copy button has been clicked but copying failed */ "confirm-delete-dialog.cdr-table.id-copied-toast.title-failed": "Failed to copy document ID",
    /** The header for the project ID column in the list of cross-dataset references found */ "confirm-delete-dialog.cdr-table.project-id.label": "Project ID",
    /** The text in the "Delete anyway" button in the confirm delete dialog that confirms the action */ "confirm-delete-dialog.confirm-anyway-button.text_delete": "Delete all versions anyway",
    /** The text in the "Unpublish anyway" button in the confirm delete dialog that confirms the action */ "confirm-delete-dialog.confirm-anyway-button.text_unpublish": "Unpublish anyway",
    /** The text in the "Delete now" button in the confirm delete dialog that confirms the action */ "confirm-delete-dialog.confirm-button.text_delete": "Delete all versions",
    /** The text in the "Unpublish now" button in the confirm delete dialog that confirms the action */ "confirm-delete-dialog.confirm-button.text_unpublish": "Unpublish now",
    /** If no referring documents are found, this text appears above the cancel and confirmation buttons */ "confirm-delete-dialog.confirmation.text_delete": "Are you sure you want to delete all the versions of this document?",
    /** If no referring documents are found, this text appears above the cancel and confirmation buttons */ "confirm-delete-dialog.confirmation.text_unpublish": "Are you sure you want to unpublish \u201C<DocumentTitle/>\u201D?",
    /** The text body of the error dialog. */ "confirm-delete-dialog.error.message.text": "An error occurred while loading referencing documents.",
    /** The text in the retry button of the confirm delete dialog if an error occurred. */ "confirm-delete-dialog.error.retry-button.text": "Retry",
    /** The header of the confirm delete dialog if an error occurred while the confirm delete dialog was open. */ "confirm-delete-dialog.error.title.text": "Error",
    /** The header of the confirm delete dialog */ "confirm-delete-dialog.header.text_delete": "Delete document?",
    /** The header of the confirm delete dialog */ "confirm-delete-dialog.header.text_unpublish": "Unpublish document?",
    /** The text that appears while the referring documents are queried */ "confirm-delete-dialog.loading.text": "Looking for referring documents\u2026",
    /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */ "confirm-delete-dialog.other-reference-count.title_one": "1 other reference not show",
    /** Shown if there are references to other documents but the user does not have the permission to see the relevant document IDs */ "confirm-delete-dialog.other-reference-count.title_other": "{{count}} other references not shown",
    /** Text in the tooltip of this component if hovering over the info icon */ "confirm-delete-dialog.other-reference-count.tooltip": "We can't display metadata for these references due to a missing access token for the related datasets.",
    /** Appears when unable to render a document preview in the referring document list */ "confirm-delete-dialog.preview-item.preview-unavailable.subtitle": "ID: {{documentId}}",
    /** Appears when unable to render a document preview in the referring document list */ "confirm-delete-dialog.preview-item.preview-unavailable.title": "Preview unavailable",
    /** Warns the user of affects to other documents if the action is confirmed (delete) */ "confirm-delete-dialog.referential-integrity-disclaimer.text_delete": "If you delete this document, documents that refer to it will no longer be able to access it.",
    /** Warns the user of affects to other documents if the action is confirmed (unpublish) */ "confirm-delete-dialog.referential-integrity-disclaimer.text_unpublish": "If you unpublish this document, documents that refer to it will no longer be able to access it.",
    /** Tells the user the count of how many other referring documents there are before listing them. (singular) */ "confirm-delete-dialog.referring-document-count.text_one": "1 document refers to \u201C<DocumentTitle/>\u201D",
    /** Tells the user the count of how many other referring documents there are before listing them. (plural) */ "confirm-delete-dialog.referring-document-count.text_other": "{{count}} documents refer to \u201C<DocumentTitle/>\u201D",
    /** Describes the list of documents that refer to the one trying to be deleted (delete) */ "confirm-delete-dialog.referring-documents-descriptor.text_delete": "You may not be able to delete \u201C<DocumentTitle/>\u201D because the following documents refer to it:",
    /** Describes the list of documents that refer to the one trying to be deleted (unpublish) */ "confirm-delete-dialog.referring-documents-descriptor.text_unpublish": "You may not be able to unpublish \u201C<DocumentTitle/>\u201D because the following documents refer to it:",
    /** The text for the cancel button in the confirm dialog used in document action shortcuts if none is provided */ "confirm-dialog.cancel-button.fallback-text": "Cancel",
    /** The text for the confirm button in the confirm dialog used in document action shortcuts if none is provided */ "confirm-dialog.confirm-button.fallback-text": "Confirm",
    /** For the default structure definition, the title for the "Content" pane */ "default-definition.content-title": "Content",
    /** The text shown if there was an error while getting the document's title via a preview value */ "doc-title.error.text": "Error: {{errorMessage}}",
    /** The text shown if the preview value for a document is non-existent or empty */ "doc-title.fallback.text": "Untitled",
    /** The text shown if a document's title via a preview value cannot be determined due to an unknown schema type */ "doc-title.unknown-schema-type.text": "Unknown schema type: {{schemaType}}",
    /** Tooltip text shown for the close button of the document inspector */ "document-inspector.close-button.tooltip": "Close",
    /** The title shown in the dialog header, when inspecting a valid document */ "document-inspector.dialog.title": "Inspecting <DocumentTitle/>",
    /** The title shown in the dialog header, when the document being inspected is not created yet/has no value */ "document-inspector.dialog.title-no-value": "No value",
    /** Title shown for menu item that opens the "Inspect" dialog */ "document-inspector.menu-item.title": "Inspect",
    /** the placeholder text for the search input on the inspect dialog */ "document-inspector.search.placeholder": "Search",
    /** The "parsed" view mode, meaning the JSON is searchable, collapsible etc */ "document-inspector.view-mode.parsed": "Parsed",
    /** The "raw" view mode, meaning the JSON is presented syntax-highlighted, but with no other features - optimal for copying */ "document-inspector.view-mode.raw-json": "Raw JSON",
    /** The text for when a form is hidden */ "document-view.form-view.form-hidden": "This form is hidden",
    /** Fallback title shown when a form title is not provided */ "document-view.form-view.form-title-fallback": "Untitled",
    /** The text for when the form view is loading a document */ "document-view.form-view.loading": "Loading document\u2026",
    /** The description of the sync lock toast on the form view */ "document-view.form-view.sync-lock-toast.description": "Please hold tight while the document is synced. This usually happens right after the document has been published, and it should not take more than a few seconds",
    /** The title of the sync lock toast on the form view */ "document-view.form-view.sync-lock-toast.title": "Syncing document\u2026",
    /** The description for the document favorite action */ "document.favorites.add-to-favorites": "Add to favorites",
    /** The description for the document unfavorite action */ "document.favorites.remove-from-favorites": "Remove from favorites",
    /** The description for the events inspector when we can't load the document so we default to compare with published */ "events.compare-with-published.description": "We're unable to load the changes for this document, probably due to history retention policy of your plan, this shows you how the <strong>{{version}}</strong> version compares to the <strong>published</strong> version.",
    /** The title for the events inspector when we can't load the document so we default to compare with published */ "events.compare-with-published.title": "Comparing with published",
    /**The title for the menu items that will be shown when expanding a publish release event to inspect the document */ "events.inspect.release": "Inspect <VersionBadge>{{releaseTitle}}</VersionBadge> document",
    /**The title for the menu items that will be shown when expanding a publish draft event to inspect the draft document*/ "events.open.draft": "Open <VersionBadge>draft</VersionBadge> document",
    /**The title for the menu items that will be shown when expanding a publish release event to inspect the release*/ "events.open.release": "Open <VersionBadge>{{releaseTitle}}</VersionBadge> release",
    /** The loading messaging for when the tooltip is still loading permission info */ "insufficient-permissions-message-tooltip.loading-text": "Loading\u2026",
    /** --- Menu items --- */ /** The menu item group title to use for the Action menu items */ "menu-item-groups.actions-group": "Actions",
    /** The menu item group title to use for the Layout menu items */ "menu-item-groups.layout-group": "Layout",
    /** The menu item group title to use for the Sort menu items */ "menu-item-groups.sorting-group": "Sort",
    /** The menu item title to use the compact view */ "menu-items.layout.compact-view": "Compact view",
    /** The menu item title to use the detailed view */ "menu-items.layout.detailed-view": "Detailed view",
    /** The menu item title to Sort by Created */ "menu-items.sort-by.created": "Sort by Created",
    /** The menu item title to Sort by Last Edited */ "menu-items.sort-by.last-edited": "Sort by Last Edited",
    /** The link text of the no document type screen that appears directly below the subtitle */ "no-document-types-screen.link-text": "Learn how to add a document type \u2192",
    /** The subtitle of the no document type screen that appears directly below the title */ "no-document-types-screen.subtitle": "Please define at least one document type in your schema.",
    /** The title of the no document type screen */ "no-document-types-screen.title": "No document types",
    /** Text shown on back button visible on smaller breakpoints */ "pane-header.back-button.text": "Back",
    /** tooltip text (via `title` attribute) for the menu button */ "pane-header.context-menu-button.tooltip": "Show menu",
    /** Appears in a document list pane header if there are more than one option for create. This is the label for that menu */ "pane-header.create-menu.label": "Create",
    /** Tooltip displayed on the create new button in document lists */ "pane-header.create-new-button.tooltip": "Create new document",
    /** The `aria-label` for the disabled button in the pane header if create permissions are granted */ "pane-header.disabled-created-button.aria-label": "Insufficient permissions",
    /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */ "pane-item.draft-status.has-draft.tooltip": "Edited <RelativeTime/>",
    /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */ "pane-item.draft-status.no-draft.tooltip": "No unpublished edits",
    /** The subtitle tor pane item previews if there isn't a matching schema type found */ "pane-item.missing-schema-type.subtitle": "Document: <Code>{{documentId}}</Code>",
    /** The title tor pane item previews if there isn't a matching schema type found */ "pane-item.missing-schema-type.title": "No schema found for type <Code>{{documentType}}</Code>",
    /** The text shown in the tooltip of pane item previews of documents if there are unpublished edits */ "pane-item.published-status.has-published.tooltip": "Published <RelativeTime/>",
    /** The text shown in the tooltip of pane item previews of documents if there are no unpublished edits */ "pane-item.published-status.no-published.tooltip": "No unpublished edits",
    /** The text used in the document header title if there is an error */ "panes.document-header-title.error.text": "Error: {{error}}",
    /** The text used in the document header title if creating a new item */ "panes.document-header-title.new.text": "New {{schemaType}}",
    /** The text used in the document header title if no other title can be determined */ "panes.document-header-title.untitled.text": "Untitled",
    /** The help text saying that we have given up on automatic retry */ "panes.document-list-pane.error.max-retries-attempted": "Not automatically retrying after {{count}} unsuccessful attempts.",
    /** The help text saying that we'll retry fetching the document list */ "panes.document-list-pane.error.retrying": "Retrying\u2026",
    /** The error text on the document list pane */ "panes.document-list-pane.error.text": "Encountered an error while fetching documents.",
    /** The error text on the document list pane */ "panes.document-list-pane.error.text.dev": "Error: <Code>{{error}}</Code>",
    /** The error text on the document list pane if the browser appears to be offlline */ "panes.document-list-pane.error.text.offline": "The Internet connection appears to be offline.",
    /** The error title on the document list pane */ "panes.document-list-pane.error.title": "Could not fetch list items",
    /** The help text saying that we'll retry fetching the document list */ "panes.document-list-pane.error.will-retry-automatically_one": "Retrying\u2026",
    "panes.document-list-pane.error.will-retry-automatically_other": "Retrying\u2026 (#{{count}}).",
    /** The text of the document list pane if more than a maximum number of documents are returned */ "panes.document-list-pane.max-items.text": "Displaying a maximum of {{limit}} documents",
    /** The text of the document list pane if no documents are found for a specified type */ "panes.document-list-pane.no-documents-of-type.text": "No documents of this type",
    /** The text of the document list pane if no documents are found */ "panes.document-list-pane.no-documents.text": "No results found",
    /** The text of the document list pane if no documents are found matching specified criteria */ "panes.document-list-pane.no-matching-documents.text": "No matching documents",
    /** The search input for the search input on the document list pane */ "panes.document-list-pane.reconnecting": "Trying to connect\u2026",
    /** The aria-label for the search input on the document list pane */ "panes.document-list-pane.search-input.aria-label": "Search list",
    /** The search input for the search input on the document list pane */ "panes.document-list-pane.search-input.placeholder": "Search list",
    /** The summary title when displaying an error for a document operation result */ "panes.document-operation-results.error.summary.title": "Details",
    /** The text when a generic operation failed (fallback, generally not shown)  */ "panes.document-operation-results.operation-error": "An error occurred during {{context}}",
    /** The text when a delete operation failed  */ "panes.document-operation-results.operation-error_delete": "An error occurred while attempting to delete this document. This usually means that there are other documents that refers to it.",
    /** The text when an unpublish operation failed  */ "panes.document-operation-results.operation-error_unpublish": "An error occurred while attempting to unpublish this document. This usually means that there are other documents that refers to it.",
    /** The text when a generic operation succeeded (fallback, generally not shown)  */ "panes.document-operation-results.operation-success": "Successfully performed {{op}} on document",
    /** The text when copy URL operation succeeded  */ "panes.document-operation-results.operation-success_copy-url": "Document URL copied to clipboard",
    /**  */ "panes.document-operation-results.operation-success_createVersion": "<Strong>{{title}}</Strong> was added to the release",
    /** The text when a delete operation succeeded  */ "panes.document-operation-results.operation-success_delete": "The document was successfully deleted",
    /** The text when a discard changes operation succeeded  */ "panes.document-operation-results.operation-success_discardChanges": "All changes has now been discarded. The discarded draft can still be recovered from history",
    /** The text when a duplicate operation succeeded  */ "panes.document-operation-results.operation-success_duplicate": "The document was successfully duplicated",
    /** The text when a publish operation succeeded  */ "panes.document-operation-results.operation-success_publish": "<Strong>{{title}}</Strong> was published",
    /** The text when a restore operation succeeded  */ "panes.document-operation-results.operation-success_restore": "<Strong>{{title}}</Strong> was restored",
    /** The text when an unpublish operation succeeded  */ "panes.document-operation-results.operation-success_unpublish": "<Strong>{{title}}</Strong> was unpublished. A draft has been created from the latest published revision.",
    /** The document title shown when document title is "undefined" in operation message */ "panes.document-operation-results.operation-undefined-title": "Untitled",
    /** The loading message for the document not found pane */ "panes.document-pane.document-not-found.loading": "Loading document\u2026",
    /** The text of the document not found pane if the schema is known */ "panes.document-pane.document-not-found.text": "The document type is not defined, and a document with the <Code>{{id}}</Code> identifier could not be found.",
    /** The title of the document not found pane if the schema is known */ "panes.document-pane.document-not-found.title": "The document was not found",
    /** The text of the document not found pane if the schema is not found */ "panes.document-pane.document-unknown-type.text": "This document has the schema type <Code>{{documentType}}</Code>, which is not defined as a type in the local content studio schema.",
    /** The title of the document not found pane if the schema is not found or unknown */ "panes.document-pane.document-unknown-type.title": "Unknown document type: <Code>{{documentType}}</Code>",
    /** The title of the document not found pane if the schema is unknown */ "panes.document-pane.document-unknown-type.without-schema.text": "This document does not exist, and no schema type was specified for it.",
    /** Default message shown while resolving the structure definition for an asynchronous node */ "panes.resolving.default-message": "Loading\u2026",
    /** Message shown while resolving the structure definition for an asynchronous node and it is taking a while (more than 5s) */ "panes.resolving.slow-resolve-message": "Still loading\u2026",
    /** The text to display when type is missing */ "panes.unknown-pane-type.missing-type.text": "Structure item is missing required <Code>type</Code> property.",
    /** The title of the unknown pane */ "panes.unknown-pane-type.title": "Unknown pane type",
    /** The text to display when type is unknown */ "panes.unknown-pane-type.unknown-type.text": "Structure item of type <Code>{{type}}</Code> is not a known entity.",
    /** The text for the "Open preview" action for a document */ "production-preview.menu-item.title": "Open preview",
    /** The text for the confirm button in the request permission dialog used in the permissions banner */ "request-permission-dialog.confirm-button.text": "Send request",
    /** The description text for the request permission dialog used in the permissions banner */ "request-permission-dialog.description.text": "Your request will be sent to the project administrator(s). If you'd like, you can also include a note",
    /** The header/title for the request permission dialog used in the permissions banner */ "request-permission-dialog.header.text": "Ask for edit access",
    /** The text describing the note input for the request permission dialog used in the permissions banner */ "request-permission-dialog.note-input.description.text": "If you'd like, you can add a note",
    /** The placeholder for the note input in the request permission dialog used in the permissions banner */ "request-permission-dialog.note-input.placeholder.text": "Add note...",
    /** The error/warning text in the request permission dialog when the user's request has been declined */ "request-permission-dialog.warning.denied.text": "Your request to access this project has been declined.",
    /** The error/warning text in the request permission dialog when the user's request has been denied due to too many outstanding requests */ "request-permission-dialog.warning.limit-reached.text": "You've reached the limit for role requests across all projects. Please wait before submitting more requests or contact an administrator for assistance.",
    /** Label for button when status is saved */ "status-bar.document-status-pulse.status.saved.text": "Saved",
    /** Label for button when status is syncing */ "status-bar.document-status-pulse.status.syncing.text": "Saving...",
    /** Accessibility label indicating when the document was last published, in relative time, eg "3 weeks ago" */ "status-bar.publish-status-button.last-published-time.aria-label": "Last published {{relativeTime}}",
    /** Text for tooltip showing explanation of timestamp/relative time, eg "Last published <RelativeTime/>" */ "status-bar.publish-status-button.last-published-time.tooltip": "Last published <RelativeTime/>",
    /** Accessibility label indicating when the document was last updated, in relative time, eg "2 hours ago" */ "status-bar.publish-status-button.last-updated-time.aria-label": "Last updated {{relativeTime}}",
    /** Text for tooltip showing explanation of timestamp/relative time, eg "Last updated <RelativeTime/>" */ "status-bar.publish-status-button.last-updated-time.tooltip": "Last updated <RelativeTime/>",
    /** Aria label for the button */ "status-bar.review-changes-button.aria-label": "Review changes",
    /** Label for button when status is saved */ "status-bar.review-changes-button.status.saved.text": "Saved!",
    /** Label for button when status is syncing */ "status-bar.review-changes-button.status.syncing.text": "Saving...",
    /** Text for the secondary text for tooltip for the button */ "status-bar.review-changes-button.tooltip.changes-saved": "Changes saved",
    /** Primary text for tooltip for the button */ "status-bar.review-changes-button.tooltip.text": "Review changes",
    /** The text that appears in side the documentation link */ "structure-error.docs-link.text": "View documentation",
    /** Labels the error message or error stack of the structure error screen */ "structure-error.error.label": "Error",
    /** The header that appears at the top of the error screen */ "structure-error.header.text": "Encountered an error while reading structure",
    /** The text in the reload button to retry rendering the structure */ "structure-error.reload-button.text": "Reload",
    /** Labels the structure path of the structure error screen */ "structure-error.structure-path.label": "Structure path",
    /** The aria label for the menu button in the timeline item */ "timeline-item.menu-button.aria-label": "Open action menu",
    /** The text for the tooltip in menu button the timeline item */ "timeline-item.menu-button.tooltip": "Actions",
    /** The text for the collapse action in the timeline item menu */ "timeline-item.menu.action-collapse": "Collapse",
    /** The text for the expand action in the timeline item menu */ "timeline-item.menu.action-expand": "Expand",
    /** The text for the published event menu tooltip when the release is not found */ "timeline-item.not-found-release.tooltip": 'Release with id "{{releaseId}}" not found',
    /** The text for the "Inline changes" action, which is used to toggle the visibility of content diffs inside inputs */ "toggle-inline-changes.menu-item.title": "Inline changes"
});
;
 //# sourceMappingURL=resources7.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_createContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createContext",
    ()=>createGlobalScopedContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/version.js [app-client] (ecmascript)");
;
;
const MISSING_CONTEXT_HELP_URL = "https://www.sanity.io/help/missing-context-error";
function createGlobalScopedContext(key, defaultValue) {
    const symbol = Symbol.for(key);
    if (typeof document > "u" || typeof window < "u" && typeof window.navigator < "u" && window.navigator.userAgent.includes("jsdom")) {
        const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue);
        return context.displayName = key, context;
    }
    if (!globalScope[symbol]) globalScope[symbol] = {
        context: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(defaultValue),
        version: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]
    };
    else {
        if (globalScope[symbol].version !== __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]) throw new TypeError(`Duplicate instances of context "${key}" with incompatible versions detected: Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]} but got ${globalScope[symbol].version}.

For more information, please visit ${MISSING_CONTEXT_HELP_URL}`);
        warned.has(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]) || (console.warn(`Duplicate instances of context "${key}" detected. This is likely a mistake and may cause unexpected behavior.

For more information, please visit ${MISSING_CONTEXT_HELP_URL}`), warned.add(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$version$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SANITY_VERSION"]));
    }
    return globalScope[symbol].context;
}
const warned = /* @__PURE__ */ new Set();
function getGlobalScope() {
    if (typeof globalThis < "u") return globalThis;
    if (typeof window < "u") return window;
    if (typeof self < "u") return self;
    if (("TURBOPACK compile-time value", "object") < "u") return /*TURBOPACK member replacement*/ __turbopack_context__.g;
    throw new Error("sanity: could not locate global scope");
}
const globalScope = getGlobalScope();
;
 //# sourceMappingURL=_createContext.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_singletons.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ActiveWorkspaceMatcherContext",
    ()=>ActiveWorkspaceMatcherContext,
    "AddonDatasetContext",
    ()=>AddonDatasetContext,
    "AppIdCacheContext",
    ()=>AppIdCacheContext,
    "AssetLimitUpsellContext",
    ()=>AssetLimitUpsellContext,
    "CalendarContext",
    ()=>CalendarContext,
    "ChangeIndicatorTrackerContextGetSnapshot",
    ()=>ChangeIndicatorTrackerContextGetSnapshot,
    "ChangeIndicatorTrackerContextStore",
    ()=>ChangeIndicatorTrackerContextStore,
    "ColorSchemeSetValueContext",
    ()=>ColorSchemeSetValueContext,
    "ColorSchemeValueContext",
    ()=>ColorSchemeValueContext,
    "CommentInputContext",
    ()=>CommentInputContext,
    "CommentsAuthoringPathContext",
    ()=>CommentsAuthoringPathContext,
    "CommentsContext",
    ()=>CommentsContext,
    "CommentsEnabledContext",
    ()=>CommentsEnabledContext,
    "CommentsIntentContext",
    ()=>CommentsIntentContext,
    "CommentsOnboardingContext",
    ()=>CommentsOnboardingContext,
    "CommentsSelectedPathContext",
    ()=>CommentsSelectedPathContext,
    "CommentsUpsellContext",
    ()=>CommentsUpsellContext,
    "CopyPasteContext",
    ()=>CopyPasteContext,
    "DialogStackContext",
    ()=>DialogStackContext,
    "DiffContext",
    ()=>DiffContext,
    "DocumentActionPropsContext",
    ()=>DocumentActionPropsContext,
    "DocumentActionsStateContext",
    ()=>DocumentActionsStateContext,
    "DocumentChangeContext",
    ()=>DocumentChangeContext,
    "DocumentFieldActionsContext",
    ()=>DocumentFieldActionsContext,
    "DocumentIdContext",
    ()=>DocumentIdContext,
    "DocumentLimitUpsellContext",
    ()=>DocumentLimitUpsellContext,
    "DocumentPaneContext",
    ()=>DocumentPaneContext,
    "DocumentSheetListContext",
    ()=>DocumentSheetListContext,
    "EnhancedObjectDialogContext",
    ()=>EnhancedObjectDialogContext,
    "EventsContext",
    ()=>EventsContext,
    "FieldActionsContext",
    ()=>FieldActionsContext,
    "FormBuilderContext",
    ()=>FormBuilderContext,
    "FormCallbacksContext",
    ()=>FormCallbacksContext,
    "FormFieldPresenceContext",
    ()=>FormFieldPresenceContext,
    "FormValueContext",
    ()=>FormValueContext,
    "FreeTrialContext",
    ()=>FreeTrialContext,
    "FullscreenPTEContext",
    ()=>FullscreenPTEContext,
    "GetFormValueContext",
    ()=>GetFormValueContext,
    "HoveredFieldContext",
    ()=>HoveredFieldContext,
    "IsLastPaneContext",
    ()=>IsLastPaneContext,
    "LiveUserApplicationContext",
    ()=>LiveUserApplicationContext,
    "LocaleContext",
    ()=>LocaleContext,
    "MediaLibraryIdsContext",
    ()=>MediaLibraryIdsContext,
    "MentionUserContext",
    ()=>MentionUserContext,
    "NavbarContext",
    ()=>NavbarContext,
    "PackageVersionInfoContext",
    ()=>PackageVersionInfoContext,
    "PaneContext",
    ()=>PaneContext,
    "PaneLayoutContext",
    ()=>PaneLayoutContext,
    "PaneRouterContext",
    ()=>PaneRouterContext,
    "PerspectiveContext",
    ()=>PerspectiveContext,
    "PortableTextMarkersContext",
    ()=>PortableTextMarkersContext,
    "PortableTextMemberItemElementRefsContext",
    ()=>PortableTextMemberItemElementRefsContext,
    "PortableTextMemberItemsContext",
    ()=>PortableTextMemberItemsContext,
    "PresenceContext",
    ()=>PresenceContext,
    "PresenceTrackerContextGetSnapshot",
    ()=>PresenceTrackerContextGetSnapshot,
    "PresenceTrackerContextStore",
    ()=>PresenceTrackerContextStore,
    "PresentationContext",
    ()=>PresentationContext,
    "PresentationDisplayedDocumentContext",
    ()=>PresentationDisplayedDocumentContext,
    "PresentationDocumentContext",
    ()=>PresentationDocumentContext,
    "PresentationNavigateContext",
    ()=>PresentationNavigateContext,
    "PresentationPanelsContext",
    ()=>PresentationPanelsContext,
    "PresentationParamsContext",
    ()=>PresentationParamsContext,
    "PresentationSharedStateContext",
    ()=>PresentationSharedStateContext,
    "PreviewCardContext",
    ()=>PreviewCardContext,
    "ReferenceInputOptionsContext",
    ()=>ReferenceInputOptionsContext,
    "ReferenceItemRefContext",
    ()=>ReferenceItemRefContext,
    "ReleasesMetadataContext",
    ()=>ReleasesMetadataContext,
    "ReleasesUpsellContext",
    ()=>ReleasesUpsellContext,
    "ResolvedPanesContext",
    ()=>ResolvedPanesContext,
    "ResolvedPanesProvider",
    ()=>ResolvedPanesProvider,
    "ResourceCacheContext",
    ()=>ResourceCacheContext,
    "ReviewChangesContext",
    ()=>ReviewChangesContext,
    "RouterContext",
    ()=>RouterContext,
    "RouterHistoryContext",
    ()=>RouterHistoryContext,
    "SanityCreateConfigContext",
    ()=>SanityCreateConfigContext,
    "SchedulePublishUpsellContext",
    ()=>SchedulePublishUpsellContext,
    "ScheduledPublishingEnabledContext",
    ()=>ScheduledPublishingEnabledContext,
    "SchedulesContext",
    ()=>SchedulesContext,
    "ScrollContext",
    ()=>ScrollContext,
    "SearchContext",
    ()=>SearchContext,
    "SingleDocReleaseContext",
    ()=>SingleDocReleaseContext,
    "SingleDocReleaseEnabledContext",
    ()=>SingleDocReleaseEnabledContext,
    "SingleDocReleaseUpsellContext",
    ()=>SingleDocReleaseUpsellContext,
    "SortableItemIdContext",
    ()=>SortableItemIdContext,
    "SourceContext",
    ()=>SourceContext,
    "StructureToolContext",
    ()=>StructureToolContext,
    "StudioAnnouncementContext",
    ()=>StudioAnnouncementContext,
    "TableContext",
    ()=>TableContext,
    "TasksContext",
    ()=>TasksContext,
    "TasksEnabledContext",
    ()=>TasksEnabledContext,
    "TasksNavigationContext",
    ()=>TasksNavigationContext,
    "TasksUpsellContext",
    ()=>TasksUpsellContext,
    "UserApplicationCacheContext",
    ()=>UserApplicationCacheContext,
    "UserColorManagerContext",
    ()=>UserColorManagerContext,
    "ValidationContext",
    ()=>ValidationContext,
    "VirtualizerScrollInstanceContext",
    ()=>VirtualizerScrollInstanceContext,
    "WorkspaceContext",
    ()=>WorkspaceContext,
    "WorkspacesContext",
    ()=>WorkspacesContext,
    "ZIndexContext",
    ()=>ZIndexContext,
    "zIndexContextDefaults",
    ()=>zIndexContextDefaults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_createContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$BehaviorSubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
;
;
const ActiveWorkspaceMatcherContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/active-workspace-matcher", null), AddonDatasetContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/addon-dataset", null), AppIdCacheContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/app-id-cache", null), AssetLimitUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/asset-limit-upsell", null), CalendarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/calendar", void 0), ChangeIndicatorTrackerContextStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/change-indicator-tracker-store", null), ChangeIndicatorTrackerContextGetSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/change-indicator-tracker-get-snapshot", null), ColorSchemeSetValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/color-scheme-set-value", null), ColorSchemeValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/color-scheme-value", null), CommentInputContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comment-input", null), CommentsAuthoringPathContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-authoring-path", null), CommentsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments", null), CommentsEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-enabled", {
    enabled: !1,
    mode: null
}), CommentsIntentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-intent", void 0), CommentsOnboardingContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-onboarding", null), CommentsSelectedPathContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-selected-path", null), CommentsUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/comments-upsell", null), CopyPasteContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/copy-paste", null), DialogStackContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/dialog-stack", null), DiffContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/diff", {
    path: []
}), DocumentActionPropsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-action-props", void 0), DocumentActionsStateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/actions-state", null), DocumentChangeContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-change", null), DocumentFieldActionsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-field-actions", null), DocumentIdContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-id", null), DocumentLimitUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-limit-upsell", null), DocumentPaneContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-pane", null), DocumentSheetListContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/document-sheet-list", void 0), EnhancedObjectDialogContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/enhanced-object-dialog-enabled", {
    enabled: !1,
    legacyEditing: !1
}), EventsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/events", null), FieldActionsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/field-actions", {
    actions: [],
    focused: !1,
    hovered: !1,
    // eslint-disable-next-line camelcase
    __internal_slot: void 0,
    // eslint-disable-next-line camelcase
    __internal_comments: void 0,
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{}
}), FormBuilderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-builder", null), FormCallbacksContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-callbacks", null), FormFieldPresenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-field-presence", []), FormValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/form-value", null), FreeTrialContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/free-trial", void 0), FullscreenPTEContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/fullscreen-pte", {
    getFullscreenPath: ()=>{},
    setFullscreenPath: ()=>{},
    hasAnyFullscreen: ()=>!1,
    allFullscreenPaths: []
}), GetFormValueContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/get-form-value", null), HoveredFieldContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/hovered-field", {
    store: {
        subscribe: ()=>()=>{},
        getSnapshot: ()=>[]
    },
    onMouseEnter: ()=>{},
    onMouseLeave: ()=>{}
}), IsLastPaneContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/is-last-pane", !1), LiveUserApplicationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/live-user-application", {
    userApplication: void 0,
    isLoading: !0
}), LocaleContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/locale", void 0), MediaLibraryIdsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/media-library", null), MentionUserContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/mention-user", null), NavbarContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/navbar", {
    onSearchFullscreenOpenChange: ()=>"",
    onSearchOpenChange: ()=>"",
    searchFullscreenOpen: !1,
    searchFullscreenPortalEl: null,
    searchOpen: !1
}), PackageVersionInfoContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/package-version-info", {
    isAutoUpdating: !1,
    checkForUpdates: ()=>{},
    get currentVersion () {
        throw new Error("PackageVersionInfoContext not provided");
    },
    versionCheckStatus: {
        lastCheckedAt: null,
        checking: !1
    }
}), PaneContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/pane", null), PaneLayoutContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/pane-layout", null);
function missingContext() {
    throw new Error("Pane is missing router context");
}
const PaneRouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/pane-router", {
    index: 0,
    groupIndex: 0,
    siblingIndex: 0,
    payload: void 0,
    params: {},
    hasGroupSiblings: !1,
    groupLength: 0,
    routerPanesState: [],
    BackLink: ()=>missingContext(),
    ChildLink: ()=>missingContext(),
    ReferenceChildLink: ()=>missingContext(),
    handleEditReference: ()=>missingContext(),
    ParameterizedLink: ()=>missingContext(),
    replaceCurrent: ()=>missingContext(),
    closeCurrentAndAfter: ()=>missingContext(),
    closeCurrent: ()=>missingContext(),
    duplicateCurrent: ()=>missingContext(),
    setView: ()=>missingContext(),
    setParams: ()=>missingContext(),
    setPayload: ()=>missingContext(),
    navigateIntent: ()=>missingContext(),
    createPathWithParams: ()=>missingContext()
}), PerspectiveContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/perspective-context", null), PortableTextMarkersContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/portable-text-markers", []), PortableTextMemberItemElementRefsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/portable-text-member-item-element-refs", new __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$rxjs$2f$dist$2f$esm5$2f$internal$2f$BehaviorSubject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BehaviorSubject"]({})), PortableTextMemberItemsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/portable-text-member-items", []), PresenceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presence", []), PresenceTrackerContextStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presence-tracker-store", null), PresenceTrackerContextGetSnapshot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presence-tracker-get-snapshot", null), PresentationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation", null), PresentationDisplayedDocumentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation/displayed-document", null), PresentationDocumentContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation/document", null), PresentationNavigateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation/navigate", null), PresentationPanelsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation/panels", null), PresentationParamsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation/params", null), PresentationSharedStateContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/presentation/shared-state", null), PreviewCardContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/preview-card", {
    selected: !1
}), ReferenceInputOptionsContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/reference-input-options", {}), ReferenceItemRefContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/reference-item-ref", null), ReleasesMetadataContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/releases-metadata", null), TableContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/releases-table", null), ReleasesUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/releases-upsell", null), ResolvedPanesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/resolved-panes", null);
function ResolvedPanesProvider(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), { children, value } = t0;
    let t1;
    return $[0] !== children || $[1] !== value ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ResolvedPanesContext.Provider, {
        value,
        children
    }), $[0] = children, $[1] = value, $[2] = t1) : t1 = $[2], t1;
}
const ResourceCacheContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/resource-cache", null), ReviewChangesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/review-changes", {
    onOpenReviewChanges: ()=>{},
    onSetFocus: ()=>{},
    isReviewChangesOpen: !1,
    isInteractive: !0
}), RouterContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/router", null), RouterHistoryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/router-history", null), SanityCreateConfigContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/start-in-create-enabled", {
    startInCreateEnabled: !1
}), DEFAULT$1 = {
    enabled: !1,
    mode: null,
    hasUsedScheduledPublishing: {
        used: !1,
        loading: !1
    }
}, ScheduledPublishingEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/scheduled-publishing-enabled", DEFAULT$1), SchedulePublishUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/schedule-publish-upsell", {
    upsellData: null,
    handleOpenDialog: ()=>null,
    handleClose: ()=>null,
    upsellDialogOpen: !1,
    telemetryLogs: {
        dialogSecondaryClicked: ()=>null,
        dialogPrimaryClicked: ()=>null,
        panelViewed: ()=>null,
        panelDismissed: ()=>null,
        panelPrimaryClicked: ()=>null,
        panelSecondaryClicked: ()=>null
    }
}), SchedulesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/schedules", void 0), ScrollContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/scroll", null), SearchContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/search", void 0), SingleDocReleaseContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/single-doc-release-context", null), DEFAULT = {
    enabled: !1,
    mode: null
}, SingleDocReleaseEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/single-doc-release-enabled", DEFAULT), SingleDocReleaseUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/single-doc-release-upsell", {
    upsellData: null,
    handleOpenDialog: ()=>null,
    handleClose: ()=>null,
    upsellDialogOpen: !1,
    telemetryLogs: {
        dialogSecondaryClicked: ()=>null,
        dialogPrimaryClicked: ()=>null,
        panelViewed: ()=>null,
        panelDismissed: ()=>null,
        panelPrimaryClicked: ()=>null,
        panelSecondaryClicked: ()=>null
    }
}), SortableItemIdContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/sortable-item-id", null), SourceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/source", null), StructureToolContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/structure-tool", null), StudioAnnouncementContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/studioAnnouncements", void 0), TasksContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks", null), TasksEnabledContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks-enabled", {
    enabled: !1,
    mode: null
}), TasksNavigationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks-navigation", null), TasksUpsellContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/tasks-upsell", null), UserApplicationCacheContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/user-application-cache", null), UserColorManagerContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/user-color-manager", null), ValidationContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/validation", []), VirtualizerScrollInstanceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/virtualizer-scroll-instance", null), WorkspaceContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/workspace", null), WorkspacesContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/workspaces", null), zIndexContextDefaults = {
    navbar: 200,
    navbarPopover: 5e5,
    navbarDialog: 500001,
    // pane
    pane: 100,
    paneHeader: [
        110,
        15e3
    ],
    paneFooter: [
        120,
        2e4
    ],
    paneResizer: [
        130,
        25e3
    ],
    paneDialog: [
        140,
        5e3
    ],
    //
    popover: 200,
    modal: 200,
    movingItem: 1e4,
    drawershade: 1e6,
    drawer: 1000001,
    fullscreen: 12e5,
    toast: [
        100,
        11e3
    ],
    // NOT IN USE
    portal: 200,
    dropdown: 200,
    navbarFixed: 1010,
    fullscreenEdit: 1050,
    popoverBackground: 1060,
    tooltip: 200,
    modalBackground: 2e3,
    spinner: 3e3
}, ZIndexContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_createContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])("sanity/_singletons/context/z-index", zIndexContextDefaults);
;
 //# sourceMappingURL=_singletons.js.map
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/router.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IntentLink",
    ()=>IntentLink,
    "Link",
    ()=>Link,
    "RouteScope",
    ()=>RouteScope,
    "RouterProvider",
    ()=>RouterProvider,
    "STICKY_PARAMS",
    ()=>STICKY_PARAMS,
    "StateLink",
    ()=>StateLink,
    "WithRouter",
    ()=>WithRouter,
    "_createNode",
    ()=>_createNode,
    "decodeJsonParams",
    ()=>decodeJsonParams,
    "encodeJsonParams",
    ()=>encodeJsonParams,
    "route",
    ()=>route,
    "useIntentLink",
    ()=>useIntentLink,
    "useLink",
    ()=>useLink,
    "useRouter",
    ()=>useRouter,
    "useRouterState",
    ()=>useRouterState,
    "useStateLink",
    ()=>useStateLink,
    "withRouter",
    ()=>withRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_singletons.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$intersection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__intersection$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/intersection.js [app-client] (ecmascript) <export default as intersection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/difference.js [app-client] (ecmascript) <export default as difference>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pick$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/pick.js [app-client] (ecmascript) <export default as pick>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isPlainObject$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/isPlainObject.js [app-client] (ecmascript) <export default as isPlainObject>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$partition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__partition$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/partition.js [app-client] (ecmascript) <export default as partition>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$toPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toPairs$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/toPairs.js [app-client] (ecmascript) <export default as toPairs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$fromPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__fromPairs$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/fromPairs.js [app-client] (ecmascript) <export default as fromPairs>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__identity$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/lodash-es/identity.js [app-client] (ecmascript) <export default as identity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/debug/src/browser.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
function useRouter() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterContext"]);
    if (!router) throw new Error("Router: missing context value");
    return router;
}
function isLeftClickEvent(event) {
    return event.button === 0;
}
function isModifiedEvent(event) {
    return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function useLink(options) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8), { onClick: onClickProp, href, target, replace: t0 } = options, replace = t0 === void 0 ? !1 : t0, { navigateUrl } = useRouter();
    let t1;
    $[0] !== href || $[1] !== navigateUrl || $[2] !== onClickProp || $[3] !== replace || $[4] !== target ? (t1 = (event)=>{
        event.isDefaultPrevented() || href && (onClickProp && onClickProp(event), !(isModifiedEvent(event) || !isLeftClickEvent(event)) && (target || (event.preventDefault(), navigateUrl({
            path: href,
            replace
        }))));
    }, $[0] = href, $[1] = navigateUrl, $[2] = onClickProp, $[3] = replace, $[4] = target, $[5] = t1) : t1 = $[5];
    const onClick = t1;
    let t2;
    return $[6] !== onClick ? (t2 = {
        onClick
    }, $[6] = onClick, $[7] = t2) : t2 = $[7], t2;
}
function useIntentLink(options) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13), { intent, onClick: onClickProp, params, replace, target, searchParams } = options, { resolveIntentLink } = useRouter();
    let t0;
    $[0] !== intent || $[1] !== params || $[2] !== resolveIntentLink || $[3] !== searchParams ? (t0 = resolveIntentLink(intent, params, searchParams), $[0] = intent, $[1] = params, $[2] = resolveIntentLink, $[3] = searchParams, $[4] = t0) : t0 = $[4];
    const href = t0;
    let t1;
    $[5] !== href || $[6] !== onClickProp || $[7] !== replace || $[8] !== target ? (t1 = {
        href,
        onClick: onClickProp,
        replace,
        target
    }, $[5] = href, $[6] = onClickProp, $[7] = replace, $[8] = target, $[9] = t1) : t1 = $[9];
    const { onClick } = useLink(t1);
    let t2;
    return $[10] !== href || $[11] !== onClick ? (t2 = {
        onClick,
        href
    }, $[10] = href, $[11] = onClick, $[12] = t2) : t2 = $[12], t2;
}
const IntentLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    let intent, params, restProps, searchParams, target;
    $[0] !== props ? ({ intent, params, target, searchParams, ...restProps } = props, $[0] = props, $[1] = intent, $[2] = params, $[3] = restProps, $[4] = searchParams, $[5] = target) : (intent = $[1], params = $[2], restProps = $[3], searchParams = $[4], target = $[5]);
    let t0;
    $[6] !== intent || $[7] !== params || $[8] !== props.onClick || $[9] !== searchParams || $[10] !== target ? (t0 = {
        intent,
        params,
        target,
        onClick: props.onClick,
        searchParams
    }, $[6] = intent, $[7] = params, $[8] = props.onClick, $[9] = searchParams, $[10] = target, $[11] = t0) : t0 = $[11];
    const { onClick, href } = useIntentLink(t0);
    let t1;
    return $[12] !== href || $[13] !== onClick || $[14] !== ref || $[15] !== restProps || $[16] !== target ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
        ...restProps,
        href,
        onClick,
        ref,
        target
    }), $[12] = href, $[13] = onClick, $[14] = ref, $[15] = restProps, $[16] = target, $[17] = t1) : t1 = $[17], t1;
}), Link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    let href, onClickProp, replace, restProps, target;
    $[0] !== props ? ({ onClick: onClickProp, href, target, replace, ...restProps } = props, $[0] = props, $[1] = href, $[2] = onClickProp, $[3] = replace, $[4] = restProps, $[5] = target) : (href = $[1], onClickProp = $[2], replace = $[3], restProps = $[4], target = $[5]);
    let t0;
    $[6] !== href || $[7] !== onClickProp || $[8] !== replace || $[9] !== target ? (t0 = {
        onClick: onClickProp,
        href,
        target,
        replace
    }, $[6] = href, $[7] = onClickProp, $[8] = replace, $[9] = target, $[10] = t0) : t0 = $[10];
    const { onClick } = useLink(t0);
    let t1;
    return $[11] !== href || $[12] !== onClick || $[13] !== ref || $[14] !== restProps || $[15] !== target ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
        ...restProps,
        onClick,
        href,
        target,
        ref
    }), $[11] = href, $[12] = onClick, $[13] = ref, $[14] = restProps, $[15] = target, $[16] = t1) : t1 = $[16], t1;
}), VALID_PARAM_SEGMENT = /^[a-zA-Z0-9_-]+$/;
function createSegment(segment) {
    if (!segment) return null;
    if (segment.startsWith(":")) {
        const paramName = segment.slice(1);
        if (!VALID_PARAM_SEGMENT.test(paramName)) {
            const addendum = segment.includes("*") ? " Splats are not supported. Consider using child routes instead" : "";
            console.error(new Error(`Warning: Param segments "${segment}" includes invalid characters.${addendum}`));
        }
        return {
            type: "param",
            name: paramName
        };
    }
    return {
        type: "dir",
        name: segment
    };
}
function _parseRoute(route2) {
    const [pathname] = route2.split("?"), segments = pathname.split("/").map(createSegment).filter(Boolean);
    return {
        raw: route2,
        segments
    };
}
function arrayify(val) {
    return Array.isArray(val) ? val : val ? [
        val
    ] : [];
}
function isRecord(value) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$isPlainObject$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__isPlainObject$3e$__["isPlainObject"])(value);
}
function createMatchError(node, missingKeys, unmappableStateKeys) {
    return {
        type: "error",
        node,
        missingKeys,
        unmappableStateKeys
    };
}
function createMatchOk(node, matchedState, searchParams, child) {
    return {
        type: "ok",
        node,
        matchedState,
        searchParams,
        child
    };
}
function _findMatchingRoutes(node, _state) {
    if (!_state) return createMatchOk(node, {}, []);
    const scopedState = node.scope ? _state[node.scope] : _state, { _searchParams: searchParams = [], ...state } = scopedState || {}, requiredParams = node.route.segments.filter((seg)=>seg.type === "param").map((seg)=>seg.name), stateKeys = isRecord(state) ? Object.keys(state) : [], consumedParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$intersection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__intersection$3e$__["intersection"])(stateKeys, requiredParams), missingParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__["difference"])(requiredParams, consumedParams), remainingParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$difference$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__difference$3e$__["difference"])(stateKeys, consumedParams);
    if (missingParams.length > 0) return createMatchError(node, missingParams, []);
    const scopedParams = searchParams.map(([key, value])=>[
            [
                key
            ],
            value
        ]), consumedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pick$3e$__["pick"])(state, consumedParams);
    if (remainingParams.length === 0) return createMatchOk(node, consumedState, scopedParams);
    const children = arrayify((typeof node.children == "function" ? node.children(isRecord(state) ? state : {}) : node.children) || []);
    if (remainingParams.length > 0 && children.length === 0) return createMatchError(node, [], remainingParams);
    const remainingState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$pick$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__pick$3e$__["pick"])(state, remainingParams), found = children.map((childNode)=>_findMatchingRoutes(childNode, remainingState)).find((res)=>res.type === "ok");
    return found ? createMatchOk(node, consumedState, scopedParams, found) : createMatchError(node, [], remainingParams);
}
function encodeURIComponentExcept(uriComponent, unescaped) {
    const chars = [
        ...String(uriComponent)
    ];
    let res = "";
    for(let i = 0; i < chars.length; i++){
        const char = chars[i];
        unescaped.includes(char) ? res += char : res += encodeURIComponent(char);
    }
    return res;
}
const debug = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$debug$2f$src$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("state-router");
function _resolvePathFromState(node, _state) {
    debug("Resolving path from state %o", _state);
    const match = _findMatchingRoutes(node, _state);
    if (match.type === "error") {
        const unmappable = match.unmappableStateKeys;
        if (unmappable.length > 0) throw new Error(`Unable to find matching route for state. Could not map the following state key${unmappable.length == 1 ? "" : "s"} to a valid url: ${unmappable.map(quote).join(", ")}`);
        const missingKeys = match.missingKeys;
        throw new Error(`Unable to find matching route for state. State object is missing the following key${missingKeys.length == 1 ? "" : "s"} defined in route: ${missingKeys.map(quote).join(", ")}`);
    }
    const { path, searchParams } = pathFromMatchResult(match), search = searchParams.length > 0 ? encodeParams$1(searchParams) : "";
    return `/${path.join("/")}${search ? `?${search}` : ""}`;
}
function bracketify(value) {
    return `[${value}]`;
}
function encodeParams$1(params) {
    return params.flatMap(([key, value])=>value === void 0 ? [] : [
            encodeSearchParamKey(serializeScopedPath(key)),
            encodeSearchParamValue(value)
        ].join("=")).join("&");
}
function serializeScopedPath(scopedPath) {
    const [head, ...tail] = scopedPath;
    return tail.length > 0 ? [
        head,
        ...tail.map(bracketify)
    ].join("") : head;
}
function encodeSearchParamValue(value) {
    return encodeURIComponentExcept(value, "/");
}
function encodeSearchParamKey(value) {
    return encodeURIComponentExcept(value, "[]");
}
function pathFromMatchResult(match) {
    const matchedState = match.matchedState, base = match.node.route.segments.map((segment)=>{
        if (segment.type === "dir") return segment.name;
        const transform = match.node.transform && match.node.transform[segment.name];
        return transform ? transform.toPath(matchedState[segment.name]) : matchedState[segment.name];
    }), childMatch = match.child ? pathFromMatchResult(match.child) : void 0, searchParams = childMatch?.searchParams ? [
        ...match.searchParams,
        ...childMatch.searchParams
    ] : match.searchParams;
    return {
        searchParams: addNodeScope(match.node, searchParams),
        path: [
            ...base || [],
            ...childMatch?.path || []
        ]
    };
}
function addNodeScope(node, searchParams) {
    const scope = node.scope;
    return scope && !node.__unsafe_disableScopedSearchParams ? searchParams.map(([namespaces, value])=>[
            [
                scope,
                ...namespaces
            ],
            value
        ]) : searchParams;
}
function quote(value) {
    return `"${value}"`;
}
function parseScopedParams(params) {
    return params.map(([key, value])=>[
            parse(key),
            value
        ]);
}
const OPEN = 1, CLOSED = 0;
function parse(str) {
    const result = [];
    let i = 0, state = CLOSED;
    for(; i < str.length;){
        const nextBracketIdx = str.indexOf("[", i);
        if (nextBracketIdx === -1) {
            result.push(str.slice(i, str.length));
            break;
        }
        if (state === OPEN) throw new Error("Nested brackets not supported");
        state = OPEN, nextBracketIdx > i && (result.push(str.slice(i, nextBracketIdx)), i = nextBracketIdx);
        const nextClosing = str.indexOf("]", nextBracketIdx);
        if (nextClosing === -1) {
            if (state === OPEN) throw new Error("Unclosed bracket");
            break;
        }
        state = CLOSED, result.push(str.slice(i + 1, nextClosing)), i = nextClosing + 1;
    }
    return result;
}
function matchPath(node, path, searchParams) {
    const parts = path.split("/").filter(Boolean), segmentsLength = node.route.segments.length;
    if (parts.length < segmentsLength) return null;
    const state = {};
    if (!node.route.segments.every((segment, i)=>{
        if (segment.type === "dir") return segment.name === parts[i];
        const transform = node.transform && node.transform[segment.name];
        return state[segment.name] = transform ? transform.toState(parts[i]) : parts[i], !0;
    })) return null;
    const rest = parts.slice(segmentsLength);
    let childState = null;
    const children = typeof node.children == "function" ? arrayify(node.children(state)) : node.children, unscopedParams = removeScope(node.scope, searchParams);
    if (children.some((childNode)=>{
        if (childNode) {
            const childParams = childNode.scope ? unscopedParams.filter(([namespaces])=>childNode.scope === namespaces[0]) : unscopedParams;
            return childState = matchPath(childNode, rest.join("/"), childParams), childState;
        }
    }), rest.length > 0 && !childState) return null;
    const selfParams = unscopedParams.flatMap(([namespace, value])=>namespace.length === 1 ? [
            [
                namespace[0],
                value
            ]
        ] : []), mergedState = {
        ...state,
        ...childState === null ? {} : childState,
        ...selfParams.length > 0 ? {
            _searchParams: selfParams
        } : {}
    };
    return node.scope ? {
        [node.scope]: mergedState
    } : mergedState;
}
function _resolveStateFromPath(node, path) {
    debug("resolving state from path %s", path);
    const [pathname, search] = path.split("?"), urlSearchParams = Array.from(new URLSearchParams(search).entries()), pathMatch = matchPath(node, pathname, parseScopedParams(urlSearchParams));
    return debug("resolved: %o", pathMatch || null), pathMatch || null;
}
function removeScope(scope, searchParams) {
    return scope ? searchParams.map(([namespaces, value])=>[
            namespaces[0] === scope ? namespaces.slice(1) : namespaces,
            value
        ]) : searchParams;
}
function encodeBase64Url(str) {
    return encodeBase64(str).replace(/\//g, "_").replace(/\+/g, "-").replace(/[=]+$/, "");
}
function decodeBase64Url(str) {
    return decodeBase64(str.replace(/-/g, "+").replace(/_/g, "/"));
}
function percentToByte(p) {
    return String.fromCharCode(parseInt(p.slice(1), 16));
}
function encodeBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%[0-9A-F]{2}/g, percentToByte));
}
function byteToPercent(b) {
    return `%${`00${b.charCodeAt(0).toString(16)}`.slice(-2)}`;
}
function decodeBase64(str) {
    return decodeURIComponent(Array.from(atob(str), byteToPercent).join(""));
}
function decodeJsonParams(pathSegment = "") {
    const segment = decodeURIComponent(pathSegment);
    if (!segment) return {};
    try {
        return JSON.parse(decodeBase64Url(segment));
    } catch  {}
    try {
        return JSON.parse(atob(segment));
    } catch  {}
    try {
        return JSON.parse(segment);
    } catch  {
        console.warn("Failed to parse JSON parameters");
    }
    return {};
}
function encodeJsonParams(params) {
    return params ? encodeBase64Url(JSON.stringify(params)) : "";
}
function decodeParams(pathSegment) {
    return pathSegment.split(";").reduce((params, pair)=>{
        const [key, value] = pair.split("=");
        return params[decodeURIComponent(key)] = decodeURIComponent(value), params;
    }, {});
}
function encodeParams(params) {
    return Object.entries(params).filter(([, value])=>value != null).map(([key, value])=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join(";");
}
const route = {
    create: (routeOrOpts, childrenOrOpts, children)=>_createNode(normalizeArgs(routeOrOpts, childrenOrOpts, children)),
    intents: (base)=>{
        const basePath = normalize(base).join("/");
        return route.create(`${basePath}/:intent`, [
            route.create(":params", {
                transform: {
                    params: {
                        toState: decodeParams,
                        toPath: encodeParams
                    }
                }
            }, [
                route.create(":payload", {
                    transform: {
                        payload: {
                            toState: decodeJsonParams,
                            toPath: encodeJsonParams
                        }
                    }
                })
            ])
        ]);
    },
    scope (scopeName, routeOrOpts, childrenOrOpts, children) {
        const options = normalizeArgs(routeOrOpts, childrenOrOpts, children);
        return _createNode({
            ...options,
            scope: scopeName
        });
    }
};
function normalizeChildren(children) {
    return Array.isArray(children) || typeof children == "function" ? children : children ? [
        children
    ] : [];
}
function isRoute(val) {
    return val && "_isRoute" in val;
}
function normalizeArgs(path, childrenOrOpts, children) {
    return typeof path == "object" ? path : Array.isArray(childrenOrOpts) || typeof childrenOrOpts == "function" || isRoute(childrenOrOpts) ? {
        path,
        children: normalizeChildren(childrenOrOpts)
    } : children ? {
        path,
        ...childrenOrOpts,
        children: normalizeChildren(children)
    } : {
        path,
        ...childrenOrOpts
    };
}
function normalize(...paths) {
    return paths.reduce((acc, path)=>acc.concat(path.split("/")), []).filter(Boolean);
}
const EMPTY_STATE$1 = {};
function isRoot(pathname) {
    return pathname.split("/").every((segment)=>!segment);
}
function _createNode(options) {
    const { path, scope, transform, children, __unsafe_disableScopedSearchParams } = options;
    if (!path) throw new TypeError("Missing path");
    const parsedRoute = _parseRoute(path);
    return {
        _isRoute: !0,
        // todo: make a Router class instead
        scope,
        // eslint-disable-next-line camelcase
        __unsafe_disableScopedSearchParams,
        route: parsedRoute,
        children: children || [],
        transform,
        encode (state) {
            return _resolvePathFromState(this, state);
        },
        decode (_path) {
            return _resolveStateFromPath(this, _path);
        },
        isRoot,
        isNotFound (pathname) {
            return this.decode(pathname) === null;
        },
        getBasePath () {
            return this.encode(EMPTY_STATE$1);
        },
        getRedirectBase (pathname) {
            if (isRoot(pathname)) {
                const basePath = this.getBasePath();
                if (pathname !== basePath) return basePath;
            }
            return null;
        }
    };
}
const STICKY_PARAMS = [
    "perspective",
    "excludedPerspectives",
    "displayInlineChanges"
], isNavigateOptions = (maybeNavigateOptions)=>{
    if (typeof maybeNavigateOptions != "object" || maybeNavigateOptions === null || Array.isArray(maybeNavigateOptions) || !("replace" in maybeNavigateOptions || "stickyParams" in maybeNavigateOptions || "state" in maybeNavigateOptions)) return !1;
    if ("state" in maybeNavigateOptions) {
        const { state } = maybeNavigateOptions;
        return state == null || typeof state == "object";
    }
    return !0;
};
function RouterProvider(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(44), { onNavigate, router: routerProp, state } = props;
    let t0;
    $[0] !== routerProp || $[1] !== state._searchParams ? (t0 = (intentName, parameters, _searchParams)=>{
        const [params, payload] = Array.isArray(parameters) ? parameters : [
            parameters
        ];
        return routerProp.encode({
            intent: intentName,
            params,
            payload,
            _searchParams: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$toPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__toPairs$3e$__["toPairs"])({
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$fromPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__fromPairs$3e$__["fromPairs"])((state._searchParams ?? []).filter(_temp)),
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$fromPairs$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__fromPairs$3e$__["fromPairs"])(_searchParams ?? [])
            })
        });
    }, $[0] = routerProp, $[1] = state._searchParams, $[2] = t0) : t0 = $[2];
    const resolveIntentLink = t0;
    let t1;
    $[3] !== routerProp || $[4] !== state._searchParams ? (t1 = (nextState)=>{
        const currentStateParams = state._searchParams || [], nextStateParams = nextState?._searchParams || [], nextParams = STICKY_PARAMS.reduce((acc, param)=>replaceStickyParam(acc, param, findParam(nextStateParams, param) ?? findParam(currentStateParams, param)), nextStateParams || []);
        return routerProp.encode({
            ...nextState,
            _searchParams: nextParams
        });
    }, $[3] = routerProp, $[4] = state._searchParams, $[5] = t1) : t1 = $[5];
    const resolvePathFromState = t1;
    let t2;
    $[6] !== onNavigate || $[7] !== resolvePathFromState || $[8] !== state ? (t2 = (nextStateOrOptions, maybeOptions)=>{
        const options = isNavigateOptions(nextStateOrOptions) && !maybeOptions ? nextStateOrOptions : maybeOptions || {}, baseState = isNavigateOptions(nextStateOrOptions) ? getStateFromOptions(nextStateOrOptions, state) ?? state : nextStateOrOptions, currentParams = state._searchParams || [], nextStickyParams = options.stickyParams ?? Object.fromEntries(currentParams.filter(_temp2));
        validateStickyParams(nextStickyParams);
        const nextParams_0 = baseState._searchParams || [], mergedParams = mergeStickyParams(nextParams_0, nextStickyParams);
        onNavigate({
            path: resolvePathFromState({
                ...baseState,
                _searchParams: mergedParams
            }),
            replace: options.replace
        });
    }, $[6] = onNavigate, $[7] = resolvePathFromState, $[8] = state, $[9] = t2) : t2 = $[9];
    const navigate = t2;
    let t3;
    $[10] !== navigate ? (t3 = (params_0, t42)=>navigate({
            stickyParams: params_0,
            ...t42 === void 0 ? {} : t42,
            state: void 0
        }), $[10] = navigate, $[11] = t3) : t3 = $[11];
    const handleNavigateStickyParams = t3;
    let t4;
    $[12] !== onNavigate || $[13] !== resolveIntentLink ? (t4 = (intentName_0, params_1, t52)=>{
        const options_1 = t52 === void 0 ? {} : t52;
        onNavigate({
            path: resolveIntentLink(intentName_0, params_1),
            replace: options_1.replace
        });
    }, $[12] = onNavigate, $[13] = resolveIntentLink, $[14] = t4) : t4 = $[14];
    const navigateIntent = t4;
    let t5;
    bb0: {
        if (!state._searchParams) {
            let t63;
            $[15] !== state ? (t63 = [
                state,
                null
            ], $[15] = state, $[16] = t63) : t63 = $[16], t5 = t63;
            break bb0;
        }
        let _searchParams_0, rest;
        $[17] !== state ? ({ _searchParams: _searchParams_0, ...rest } = state, $[17] = state, $[18] = _searchParams_0, $[19] = rest) : (_searchParams_0 = $[18], rest = $[19]);
        let t62;
        $[20] !== _searchParams_0 ? (t62 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$partition$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__partition$3e$__["partition"])(_searchParams_0, _temp3), $[20] = _searchParams_0, $[21] = t62) : t62 = $[21];
        const [sticky, restParams] = t62;
        if (sticky.length === 0) {
            let t73;
            $[22] !== state ? (t73 = [
                state,
                null
            ], $[22] = state, $[23] = t73) : t73 = $[23], t5 = t73;
            break bb0;
        }
        let t72;
        $[24] !== rest || $[25] !== restParams ? (t72 = {
            ...rest,
            _searchParams: restParams
        }, $[24] = rest, $[25] = restParams, $[26] = t72) : t72 = $[26];
        let t82;
        $[27] !== sticky || $[28] !== t72 ? (t82 = [
            t72,
            sticky
        ], $[27] = sticky, $[28] = t72, $[29] = t82) : t82 = $[29], t5 = t82;
    }
    const [routerState, stickyParams] = t5;
    let t6;
    $[30] !== stickyParams ? (t6 = Object.fromEntries(stickyParams || []), $[30] = stickyParams, $[31] = t6) : t6 = $[31];
    const stickyParamsByName = t6;
    let t7;
    $[32] !== handleNavigateStickyParams || $[33] !== navigate || $[34] !== navigateIntent || $[35] !== onNavigate || $[36] !== resolveIntentLink || $[37] !== resolvePathFromState || $[38] !== routerState || $[39] !== stickyParamsByName ? (t7 = {
        navigate,
        navigateIntent,
        navigateStickyParams: handleNavigateStickyParams,
        navigateUrl: onNavigate,
        resolveIntentLink,
        resolvePathFromState,
        state: routerState,
        stickyParams: stickyParamsByName
    }, $[32] = handleNavigateStickyParams, $[33] = navigate, $[34] = navigateIntent, $[35] = onNavigate, $[36] = resolveIntentLink, $[37] = resolvePathFromState, $[38] = routerState, $[39] = stickyParamsByName, $[40] = t7) : t7 = $[40];
    const router = t7;
    let t8;
    return $[41] !== props.children || $[42] !== router ? (t8 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterContext"].Provider, {
        value: router,
        children: props.children
    }), $[41] = props.children, $[42] = router, $[43] = t8) : t8 = $[43], t8;
}
function _temp3(t0) {
    const [key_1] = t0;
    return STICKY_PARAMS.includes(key_1);
}
function _temp2(t0) {
    const [key_0] = t0;
    return STICKY_PARAMS.includes(key_0);
}
function _temp(t0) {
    const [key] = t0;
    return STICKY_PARAMS.includes(key);
}
function replaceStickyParam(current, param, value) {
    const filtered = current.filter(([key])=>key !== param);
    return value === void 0 || value == "" ? filtered : [
        ...filtered,
        [
            param,
            value
        ]
    ];
}
function mergeStickyParams(currentParams, newParams) {
    if (!newParams) return currentParams;
    const filteredParams = currentParams.filter(([key])=>!Object.hasOwn(newParams, key)), isValidSearchParam = (entry)=>entry[1] !== void 0, convertNullSearchParam = (entry)=>[
            entry[0],
            entry[1] === null ? "" : entry[1]
        ], newEntries = Object.entries(newParams).filter(isValidSearchParam).map(convertNullSearchParam);
    return [
        ...filteredParams,
        ...newEntries
    ];
}
function findParam(searchParams, key) {
    const entry = searchParams.find(([k])=>k === key);
    return entry ? entry[1] : void 0;
}
function getStateFromOptions(nextStateOrOptions, state) {
    return isNavigateOptions(nextStateOrOptions) ? nextStateOrOptions.state === null ? {} : nextStateOrOptions.state ?? state : null;
}
function validateStickyParams(nextStickyParams) {
    if (Object.keys(nextStickyParams).some((param)=>!STICKY_PARAMS.includes(param))) throw new Error("One or more parameters are not sticky");
}
function addScope(routerState, scope, scopedState) {
    return scopedState && {
        ...routerState,
        [scope]: scopedState
    };
}
const RouteScope = function(props) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24), { children, scope, __unsafe_disableScopedSearchParams } = props, parentRouter = useRouter(), { resolvePathFromState: parent_resolvePathFromState, navigate: parent_navigate } = parentRouter, parentStateRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(parentRouter.state);
    let t0, t1;
    $[0] !== parentRouter.state ? (t0 = ()=>{
        parentStateRef.current = parentRouter.state;
    }, t1 = [
        parentRouter.state
    ], $[0] = parentRouter.state, $[1] = t0, $[2] = t1) : (t0 = $[1], t1 = $[2]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    $[3] !== __unsafe_disableScopedSearchParams || $[4] !== scope ? (t2 = (_nextState)=>{
        if (_nextState === null) return null;
        const { _searchParams, ...nextState } = _nextState || {}, nextParentState = addScope(parentStateRef.current, scope, nextState);
        return __unsafe_disableScopedSearchParams ? nextParentState._searchParams = _searchParams : nextParentState[scope]._searchParams = _searchParams, nextParentState;
    }, $[3] = __unsafe_disableScopedSearchParams, $[4] = scope, $[5] = t2) : t2 = $[5];
    const resolveNextParentState = t2;
    let t3;
    $[6] !== parent_resolvePathFromState || $[7] !== resolveNextParentState ? (t3 = (nextState_0)=>parent_resolvePathFromState(resolveNextParentState(nextState_0)), $[6] = parent_resolvePathFromState, $[7] = resolveNextParentState, $[8] = t3) : t3 = $[8];
    const resolvePathFromState = t3;
    let t4;
    $[9] !== parent_navigate || $[10] !== resolveNextParentState ? (t4 = (nextStateOrOptions, maybeOptions)=>{
        if (isNavigateOptions(nextStateOrOptions) && !maybeOptions) {
            const options = nextStateOrOptions, { state } = options;
            if (state) {
                const nextState_1 = resolveNextParentState(state);
                return parent_navigate(nextState_1 === null ? {} : nextState_1, options);
            }
            return parent_navigate(options);
        }
        const nextState_2 = isNavigateOptions(nextStateOrOptions) ? resolveNextParentState(null) : resolveNextParentState(nextStateOrOptions);
        return parent_navigate(nextState_2 === null ? {} : nextState_2, maybeOptions || {});
    }, $[9] = parent_navigate, $[10] = resolveNextParentState, $[11] = t4) : t4 = $[11];
    const navigate = t4, parentState = parentRouter.state;
    let childState;
    $[12] !== __unsafe_disableScopedSearchParams || $[13] !== parentState || $[14] !== scope ? (childState = typeof parentState[scope] == "object" ? {
        ...parentState[scope]
    } : {}, __unsafe_disableScopedSearchParams && (childState._searchParams = parentState._searchParams), $[12] = __unsafe_disableScopedSearchParams, $[13] = parentState, $[14] = scope, $[15] = childState) : childState = $[15];
    let t5;
    $[16] !== childState || $[17] !== navigate || $[18] !== parentRouter || $[19] !== resolvePathFromState ? (t5 = {
        ...parentRouter,
        navigate,
        resolvePathFromState,
        state: childState
    }, $[16] = childState, $[17] = navigate, $[18] = parentRouter, $[19] = resolvePathFromState, $[20] = t5) : t5 = $[20];
    const childRouter = t5;
    let t6;
    return $[21] !== childRouter || $[22] !== children ? (t6 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_singletons$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RouterContext"].Provider, {
        value: childRouter,
        children
    }), $[21] = childRouter, $[22] = children, $[23] = t6) : t6 = $[23], t6;
};
RouteScope.displayName = "RouteScope";
const EMPTY_STATE = {};
function useStateLink(options) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11), { onClick: onClickProp, replace, state, target, toIndex: t0 } = options, toIndex = t0 === void 0 ? !1 : t0;
    if (state && toIndex) throw new Error("Passing both `state` and `toIndex={true}` as props to StateLink is invalid");
    !state && !toIndex && console.error(new Error("No state passed to StateLink. If you want to link to an empty state, its better to use the the `toIndex` property"));
    const { resolvePathFromState } = useRouter(), t1 = toIndex ? EMPTY_STATE : state || EMPTY_STATE;
    let t2;
    $[0] !== resolvePathFromState || $[1] !== t1 ? (t2 = resolvePathFromState(t1), $[0] = resolvePathFromState, $[1] = t1, $[2] = t2) : t2 = $[2];
    const href = t2;
    let t3;
    $[3] !== href || $[4] !== onClickProp || $[5] !== replace || $[6] !== target ? (t3 = {
        href,
        onClick: onClickProp,
        replace,
        target
    }, $[3] = href, $[4] = onClickProp, $[5] = replace, $[6] = target, $[7] = t3) : t3 = $[7];
    const { onClick } = useLink(t3);
    let t4;
    return $[8] !== href || $[9] !== onClick ? (t4 = {
        onClick,
        href
    }, $[8] = href, $[9] = onClick, $[10] = t4) : t4 = $[10], t4;
}
const StateLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(props, ref) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    let onClickProp, replace, restProps, state, t0, target;
    $[0] !== props ? ({ onClick: onClickProp, replace, state, target, toIndex: t0, ...restProps } = props, $[0] = props, $[1] = onClickProp, $[2] = replace, $[3] = restProps, $[4] = state, $[5] = t0, $[6] = target) : (onClickProp = $[1], replace = $[2], restProps = $[3], state = $[4], t0 = $[5], target = $[6]);
    const toIndex = t0 === void 0 ? !1 : t0;
    let t1;
    $[7] !== onClickProp || $[8] !== replace || $[9] !== state || $[10] !== target || $[11] !== toIndex ? (t1 = {
        onClick: onClickProp,
        replace,
        state,
        target,
        toIndex
    }, $[7] = onClickProp, $[8] = replace, $[9] = state, $[10] = target, $[11] = toIndex, $[12] = t1) : t1 = $[12];
    const { onClick, href } = useStateLink(t1);
    let t2;
    return $[13] !== href || $[14] !== onClick || $[15] !== ref || $[16] !== restProps ? (t2 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("a", {
        ...restProps,
        href,
        onClick,
        ref
    }), $[13] = href, $[14] = onClick, $[15] = ref, $[16] = restProps, $[17] = t2) : t2 = $[17], t2;
});
function useRouterState(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), selector = t0 === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$lodash$2d$es$2f$identity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__identity$3e$__["identity"] : t0, { state } = useRouter();
    let t1;
    return $[0] !== selector || $[1] !== state ? (t1 = selector(state), $[0] = selector, $[1] = state, $[2] = t1) : t1 = $[2], t1;
}
function withRouter(Component) {
    function WithRouter2(props) {
        const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3), router = useRouter(), t0 = props;
        let t1;
        return $[0] !== router || $[1] !== t0 ? (t1 = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...t0,
            router
        }), $[0] = router, $[1] = t0, $[2] = t1) : t1 = $[2], t1;
    }
    return WithRouter2.displayName = `withRouter(${Component.displayName || Component.name})`, WithRouter2;
}
const WithRouter = withRouter((props)=>props.children(props.router));
;
 //# sourceMappingURL=router.js.map
}),
]);

//# sourceMappingURL=1b044_sanity_lib_affa10af._.js.map