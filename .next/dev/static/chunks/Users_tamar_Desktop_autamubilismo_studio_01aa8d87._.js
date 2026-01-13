(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/article.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "article",
    ()=>article
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-client] (ecmascript)");
;
const article = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["news"],
    name: 'article',
    title: 'Artigo'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/articles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articles",
    ()=>articles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-client] (ecmascript)");
;
const articles = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["news"],
    name: 'articles',
    title: 'Artigos'
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/seo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "schemaTypes",
    ()=>schemaTypes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/news.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$article$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/article.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$articles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/articles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$seo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/seo.js [app-client] (ecmascript)");
;
;
;
;
const schemaTypes = [
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$news$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["news"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$article$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["article"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$articles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["articles"],
    __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$seo$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["seo"]
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/sanity.config.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/node_modules/sanity/lib/_chunks-es/pane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/schemaTypes/index.js [app-client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    name: 'autamubilismo',
    title: 'Autamubilismo',
    projectId: 'c7nvssn2',
    dataset: 'production',
    basePath: '/studio',
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])()
    ],
    schema: {
        types: __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$studio$2f$schemaTypes$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schemaTypes"]
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Users/tamar/Desktop/autamubilismo/studio/sanity.config.js [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/studio/sanity.config.js [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Users_tamar_Desktop_autamubilismo_studio_01aa8d87._.js.map