module.exports = [
"[externals]/async_hooks [external] (async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("async_hooks", () => require("async_hooks"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "news",
    ()=>news
]);
const sharedBodyField = {
    name: 'body',
    title: 'Conteudo',
    type: 'array',
    of: [
        {
            type: 'block'
        },
        {
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto alternativo',
                    type: 'string'
                },
                {
                    name: 'caption',
                    title: 'Legenda',
                    type: 'string'
                }
            ]
        }
    ]
};
const sharedFields = [
    {
        name: 'title',
        title: 'Titulo',
        type: 'string'
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96
        }
    },
    {
        name: 'excerpt',
        title: 'Resumo',
        type: 'text'
    },
    {
        name: 'publishedAt',
        title: 'Data de publicacao',
        type: 'datetime'
    },
    {
        name: 'author',
        title: 'Autor',
        type: 'string'
    },
    {
        name: 'category',
        title: 'Categoria',
        type: 'string'
    },
    {
        name: 'image',
        title: 'Imagem',
        type: 'image',
        options: {
            hotspot: true
        },
        fields: [
            {
                name: 'alt',
                title: 'Texto alternativo',
                type: 'string'
            }
        ]
    },
    {
        name: 'mainImage',
        title: 'Imagem principal',
        type: 'image',
        options: {
            hotspot: true
        },
        fields: [
            {
                name: 'alt',
                title: 'Texto alternativo',
                type: 'string'
            }
        ]
    },
    sharedBodyField,
    {
        name: 'sourceLabel',
        title: 'Nome da fonte',
        type: 'string'
    },
    {
        name: 'sourceUrl',
        title: 'Link da fonte',
        type: 'url',
        validation: (Rule)=>Rule.uri({
                allowRelative: false,
                scheme: [
                    'http',
                    'https'
                ]
            })
    },
    {
        name: 'seo',
        title: 'SEO',
        type: 'seo'
    }
];
const news = {
    name: 'news',
    title: 'Noticias',
    type: 'document',
    fields: sharedFields
};
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/article.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "article",
    ()=>article
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-ssr] (ecmascript)");
;
const article = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["news"],
    name: 'article',
    title: 'Artigo'
};
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/articles.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-ssr] (ecmascript)");
;
const articles = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["news"],
    name: 'articles',
    title: 'Artigos'
};
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/seo.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "seo",
    ()=>seo
]);
const seo = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'metaTitle',
            title: 'Titulo SEO',
            type: 'string'
        },
        {
            name: 'metaDescription',
            title: 'Descricao SEO',
            type: 'text'
        },
        {
            name: 'ogImage',
            title: 'Imagem OG',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto alternativo',
                    type: 'string'
                }
            ]
        }
    ]
};
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaTypes",
    ()=>schemaTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$article$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/article.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$articles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/articles.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$seo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/seo.js [app-ssr] (ecmascript)");
;
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["news"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$article$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["article"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$articles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["articles"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$seo$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["seo"]
];
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/sanity.config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/pane.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/@sanity/vision/lib/_chunks-es/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/index.js [app-ssr] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    name: 'autamubilismo',
    title: 'Autamubilismo',
    projectId: 'c7nvssn2',
    dataset: 'production',
    basePath: '/studio',
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["structureTool"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["visionTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["schemaTypes"]
    }
});
}),
"[project]/Users/tamar/Desktop/autamubilismo/app/studio/[[...index]]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next-sanity/dist/studio/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$sanity$2e$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/sanity.config.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function StudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2d$sanity$2f$dist$2f$studio$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NextStudio"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$sanity$2e$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }, void 0, false, {
        fileName: "[project]/Users/tamar/Desktop/autamubilismo/app/studio/[[...index]]/page.tsx",
        lineNumber: 7,
        columnNumber: 10
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ba0a5884._.js.map