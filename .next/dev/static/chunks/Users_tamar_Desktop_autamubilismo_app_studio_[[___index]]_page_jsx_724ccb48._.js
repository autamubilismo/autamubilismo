(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Users/tamar/Desktop/autamubilismo/app/studio/[[...index]]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudioPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/sanity/lib/_chunks-es/pane.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Users/tamar/Desktop/autamubilismo/node_modules/@sanity/vision/lib/_chunks-es/index.js [app-client] (ecmascript)");
;
'use client';
;
;
;
;
const NextStudio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Users/tamar/Desktop/autamubilismo/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>mod.NextStudio), {
    loadableGenerated: {
        modules: [
            "[project]/Users/tamar/Desktop/autamubilismo/node_modules/next-sanity/dist/studio/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = NextStudio;
// Schema SEO
const seo = {
    name: 'seo',
    title: 'SEO',
    type: 'object',
    fields: [
        {
            name: 'metaTitle',
            title: 'Titulo SEO (Meta Title)',
            type: 'string',
            description: 'Titulo que aparece nos resultados de busca'
        },
        {
            name: 'metaDescription',
            title: 'Descricao SEO (Meta Description)',
            type: 'text',
            description: 'Descricao que aparece nos resultados de busca'
        },
        {
            name: 'ogTitle',
            title: 'Titulo OG (Open Graph)',
            type: 'string',
            description: 'Titulo quando compartilhado em redes sociais (Facebook, WhatsApp, etc.)'
        },
        {
            name: 'ogDescription',
            title: 'Descricao OG (Open Graph)',
            type: 'text',
            description: 'Descricao quando compartilhado em redes sociais'
        },
        {
            name: 'ogImage',
            title: 'Imagem OG (Open Graph)',
            type: 'image',
            options: {
                hotspot: true
            },
            description: 'Imagem quando compartilhado em redes sociais (recomendado: 1200x630px)',
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
// Schema News
const news = {
    name: 'news',
    title: 'Noticias',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'excerpt',
            title: 'Resumo',
            type: 'text',
            rows: 4
        },
        {
            name: 'publishedAt',
            title: 'Data de Publicacao',
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
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Formula 1',
                        value: 'f1'
                    },
                    {
                        title: 'Formula E',
                        value: 'fe'
                    },
                    {
                        title: 'Stock Car',
                        value: 'stockcar'
                    },
                    {
                        title: 'Endurance',
                        value: 'endurance'
                    },
                    {
                        title: 'Rally',
                        value: 'rally'
                    },
                    {
                        title: 'Outros',
                        value: 'outros'
                    }
                ]
            }
        },
        {
            name: 'mainImage',
            title: 'Imagem Principal',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string'
                }
            ]
        },
        {
            name: 'body',
            title: 'Conteudo',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Texto Alternativo',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'sourceLabel',
            title: 'Nome da Fonte',
            type: 'string',
            description: 'Ex: Motorsport.com, Globo Esporte, etc.'
        },
        {
            name: 'sourceUrl',
            title: 'Link da Fonte',
            type: 'url',
            description: 'Link para a materia original'
        },
        {
            name: 'seo',
            title: 'SEO & Open Graph',
            type: 'seo'
        }
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage'
        }
    }
};
// Schema Article (mesma estrutura de News)
const article = {
    name: 'article',
    title: 'Artigo',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titulo',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96
            },
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'excerpt',
            title: 'Resumo',
            type: 'text',
            rows: 4
        },
        {
            name: 'publishedAt',
            title: 'Data de Publicacao',
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
            type: 'string',
            options: {
                list: [
                    {
                        title: 'Formula 1',
                        value: 'f1'
                    },
                    {
                        title: 'Formula E',
                        value: 'fe'
                    },
                    {
                        title: 'Stock Car',
                        value: 'stockcar'
                    },
                    {
                        title: 'Endurance',
                        value: 'endurance'
                    },
                    {
                        title: 'Rally',
                        value: 'rally'
                    },
                    {
                        title: 'Outros',
                        value: 'outros'
                    }
                ]
            }
        },
        {
            name: 'mainImage',
            title: 'Imagem Principal',
            type: 'image',
            options: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Texto Alternativo',
                    type: 'string'
                }
            ]
        },
        {
            name: 'body',
            title: 'Conteudo',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            name: 'alt',
                            title: 'Texto Alternativo',
                            type: 'string'
                        }
                    ]
                }
            ]
        },
        {
            name: 'sourceLabel',
            title: 'Nome da Fonte',
            type: 'string',
            description: 'Ex: Motorsport.com, Globo Esporte, etc.'
        },
        {
            name: 'sourceUrl',
            title: 'Link da Fonte',
            type: 'url',
            description: 'Link para a materia original'
        },
        {
            name: 'seo',
            title: 'SEO & Open Graph',
            type: 'seo'
        }
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author',
            media: 'mainImage'
        }
    }
};
const config = {
    name: 'autamubilismo',
    title: 'Autamubilismo',
    projectId: 'c7nvssn2',
    dataset: 'production',
    basePath: '/studio',
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])(),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])()
    ],
    schema: {
        types: [
            seo,
            news,
            article
        ]
    }
};
function StudioPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Users$2f$tamar$2f$Desktop$2f$autamubilismo$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NextStudio, {
        config: config
    }, void 0, false, {
        fileName: "[project]/Users/tamar/Desktop/autamubilismo/app/studio/[[...index]]/page.jsx",
        lineNumber: 299,
        columnNumber: 10
    }, this);
}
_c1 = StudioPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "NextStudio");
__turbopack_context__.k.register(_c1, "StudioPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Users_tamar_Desktop_autamubilismo_app_studio_%5B%5B___index%5D%5D_page_jsx_724ccb48._.js.map