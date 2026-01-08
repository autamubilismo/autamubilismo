module.exports = [
"[project]/app/standings/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-ssr] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThemeContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// --- DADOS DE FALLBACK 2026 ---
// Usados quando a API está offline ou durante pré-temporada
const FALLBACK_DRIVERS = [
    {
        position: 1,
        driverId: 'kimi',
        driverName: 'Kimi Antonelli',
        driverNumber: 12,
        image: 'img/pilotos/antonelli/grid-antonelli.avif',
        team: 'Mercedes-AMG',
        teamColor: '#00D2BE',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 2,
        driverId: 'lewis',
        driverName: 'Lewis Hamilton',
        driverNumber: 44,
        image: 'img/pilotos/hamilton/grid-hamilton.avif',
        team: 'Ferrari',
        teamColor: '#FF0000',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 3,
        driverId: 'gabriel',
        driverName: 'Gabriel Bortoleto',
        driverNumber: 5,
        image: 'img/pilotos/bortoleto/grid-bortoleto.avif',
        team: 'Sauber',
        teamColor: '#52E252',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 4,
        driverId: 'max',
        driverName: 'Max Verstappen',
        driverNumber: 1,
        image: 'img/pilotos/verstappen/grid-verstappen.avif',
        team: 'Red Bull',
        teamColor: '#1E41FF',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 5,
        driverId: 'lando',
        driverName: 'Lando Norris',
        driverNumber: 4,
        image: 'img/pilotos/norris/grid-norris.avif',
        team: 'McLaren',
        teamColor: '#FF8700',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 6,
        driverId: 'charles',
        driverName: 'Charles Leclerc',
        driverNumber: 16,
        image: 'img/pilotos/leclerc/grid-leclerc.avif',
        team: 'Ferrari',
        teamColor: '#FF0000',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 7,
        driverId: 'oscar',
        driverName: 'Oscar Piastri',
        driverNumber: 81,
        image: 'img/pilotos/piastri/grid-piastri.avif',
        team: 'McLaren',
        teamColor: '#FF8700',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 8,
        driverId: 'george',
        driverName: 'George Russell',
        driverNumber: 63,
        image: 'img/pilotos/russell/grid-russell.avif',
        team: 'Mercedes-AMG',
        teamColor: '#00D2BE',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 9,
        driverId: 'carlos',
        driverName: 'Carlos Sainz',
        driverNumber: 55,
        image: 'img/pilotos/sainz/grid-sainz.avif',
        team: 'Williams',
        teamColor: '#005AFF',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 10,
        driverId: 'oliver',
        driverName: 'Oliver Bearman',
        driverNumber: 87,
        image: 'img/pilotos/bearman/grid-bearman.avif',
        team: 'Haas',
        teamColor: '#B6BABD',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 11,
        driverId: 'liam',
        driverName: 'Liam Lawson',
        driverNumber: 30,
        image: 'img/pilotos/lawson/grid-lawson.avif',
        team: 'Red Bull',
        teamColor: '#1E41FF',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 12,
        driverId: 'isack',
        driverName: 'Isack Hadjar',
        driverNumber: 6,
        image: 'img/pilotos/hadjar/grid-hadjar.avif',
        team: 'VCARB',
        teamColor: '#1633EF',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 13,
        driverId: 'nico',
        driverName: 'Nico Hulkenberg',
        driverNumber: 27,
        image: 'img/pilotos/hulkenberg/grid-hulkenberg.avif',
        team: 'Sauber',
        teamColor: '#52E252',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 14,
        driverId: 'esteban',
        driverName: 'Esteban Ocon',
        driverNumber: 31,
        image: 'img/pilotos/ocon/grid-ocon.avif',
        team: 'Haas',
        teamColor: '#B6BABD',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 15,
        driverId: 'fernando',
        driverName: 'Fernando Alonso',
        driverNumber: 14,
        image: 'img/pilotos/alonso/grid-alonso.avif',
        team: 'Aston Martin',
        teamColor: '#006F62',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 16,
        driverId: 'lance',
        driverName: 'Lance Stroll',
        driverNumber: 18,
        image: 'img/pilotos/stroll/grid-stroll.avif',
        team: 'Aston Martin',
        teamColor: '#006F62',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 17,
        driverId: 'pierre',
        driverName: 'Pierre Gasly',
        driverNumber: 10,
        image: 'img/pilotos/gasly/grid-gasly.avif',
        team: 'Alpine',
        teamColor: '#0090FF',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 18,
        driverId: 'alex',
        driverName: 'Alex Albon',
        driverNumber: 23,
        image: 'img/pilotos/albon/grid-albon.avif',
        team: 'Williams',
        teamColor: '#005AFF',
        points: 0,
        wins: 0,
        podiums: 0
    },
    {
        position: 19,
        driverId: 'yuki',
        driverName: 'Yuki Tsunoda',
        driverNumber: 22,
        image: 'img/pilotos/tsunoda/grid-tsunoda.avif',
        team: 'VCARB',
        teamColor: '#1633EF',
        points: 0,
        wins: 0,
        podiums: 0
    }
];
const FALLBACK_CONSTRUCTORS = [
    {
        position: 1,
        teamId: 'mercedes',
        teamName: 'Mercedes-AMG Petronas',
        teamShortName: 'Mercedes-AMG',
        image: 'img/equipes/mercedes/logo-mercedes.png',
        teamColor: '#00D2BE',
        points: 0,
        wins: 0
    },
    {
        position: 2,
        teamId: 'ferrari',
        teamName: 'Scuderia Ferrari',
        teamShortName: 'Ferrari',
        image: 'img/equipes/ferrari/logo-ferrari.png',
        teamColor: '#FF0000',
        points: 0,
        wins: 0
    },
    {
        position: 3,
        teamId: 'red-bull',
        teamName: 'Oracle Red Bull Racing',
        teamShortName: 'Red Bull',
        image: 'img/equipes/redbull/logo-redbull.png',
        teamColor: '#1E41FF',
        points: 0,
        wins: 0
    },
    {
        position: 4,
        teamId: 'mclaren',
        teamName: 'McLaren F1 Team',
        teamShortName: 'McLaren',
        image: 'img/equipes/mclaren/logo-mclaren.png',
        teamColor: '#FF8700',
        points: 0,
        wins: 0
    },
    {
        position: 5,
        teamId: 'aston-martin',
        teamName: 'Aston Martin Aramco F1 Team',
        teamShortName: 'Aston Martin',
        image: 'img/equipes/astonmartin/logo-astonmartin.png',
        teamColor: '#006F62',
        points: 0,
        wins: 0
    },
    {
        position: 6,
        teamId: 'alpine',
        teamName: 'BWT Alpine F1 Team',
        teamShortName: 'Alpine',
        image: 'img/equipes/alpine/logo-alpine.png',
        teamColor: '#0090FF',
        points: 0,
        wins: 0
    },
    {
        position: 7,
        teamId: 'williams',
        teamName: 'Williams Racing',
        teamShortName: 'Williams',
        image: 'img/equipes/williams/logo-williams.png',
        teamColor: '#005AFF',
        points: 0,
        wins: 0
    },
    {
        position: 8,
        teamId: 'vcarb',
        teamName: 'Visa Cash App RB F1 Team',
        teamShortName: 'VCARB',
        image: 'img/equipes/rb/logo-rb.png',
        teamColor: '#1633EF',
        points: 0,
        wins: 0
    },
    {
        position: 9,
        teamId: 'haas',
        teamName: 'MoneyGram Haas F1 Team',
        teamShortName: 'Haas',
        image: 'img/equipes/haas/logo-haas.png',
        teamColor: '#B6BABD',
        points: 0,
        wins: 0
    },
    {
        position: 10,
        teamId: 'audi',
        teamName: 'Audi F1 Team',
        teamShortName: 'Audi',
        image: 'img/equipes/audi/logo-audi.png',
        teamColor: '#000000',
        points: 0,
        wins: 0
    }
];
// Mapeamento de cores por equipe (personalize conforme necessário)
const TEAM_COLORS = {
    'Red Bull': '#1E41FF',
    'Ferrari': '#FF0000',
    'Mercedes': '#00D2BE',
    'McLaren': '#FF8700',
    'Aston Martin': '#006F62',
    'Alpine': '#0090FF',
    'Williams': '#005AFF',
    'RB': '#1633EF',
    'Kick Sauber': '#52E252',
    'Sauber': '#52E252',
    'Haas F1 Team': '#B6BABD'
};
// Mapeamento de nomes de piloto para suas imagens locais
const DRIVER_IMAGE_MAP = {
    'Max Verstappen': 'img/pilotos/verstappen/grid-verstappen.avif',
    'Lando Norris': 'img/pilotos/norris/grid-norris.avif',
    'Charles Leclerc': 'img/pilotos/leclerc/grid-leclerc.avif',
    'Oscar Piastri': 'img/pilotos/piastri/grid-piastri.avif',
    'Carlos Sainz': 'img/pilotos/sainz/grid-sainz.avif',
    'George Russell': 'img/pilotos/russell/grid-russell.avif',
    'Lewis Hamilton': 'img/pilotos/hamilton/grid-hamilton.avif',
    'Sergio Pérez': 'img/pilotos/perez/grid-perez.avif',
    'Fernando Alonso': 'img/pilotos/alonso/grid-alonso.avif',
    'Lance Stroll': 'img/pilotos/stroll/grid-stroll.avif',
    'Pierre Gasly': 'img/pilotos/gasly/grid-gasly.avif',
    'Esteban Ocon': 'img/pilotos/ocon/grid-ocon.avif',
    'Alexander Albon': 'img/pilotos/albon/grid-albon.avif',
    'Yuki Tsunoda': 'img/pilotos/tsunoda/grid-tsunoda.avif',
    'Nico Hulkenberg': 'img/pilotos/hulkenberg/grid-hulkenberg.avif',
    'Valtteri Bottas': 'img/pilotos/bottas/grid-bottas.avif',
    'Zhou Guanyu': 'img/pilotos/zhou/grid-zhou.avif',
    'Kevin Magnussen': 'img/pilotos/magnussen/grid-magnussen.avif'
};
// Mapeamento de equipes para suas imagens locais
const TEAM_IMAGE_MAP = {
    'Red Bull': 'img/equipes/redbull/logo-redbull.png',
    'Ferrari': 'img/equipes/ferrari/logo-ferrari.png',
    'Mercedes': 'img/equipes/mercedes/logo-mercedes.png',
    'McLaren': 'img/equipes/mclaren/logo-mclaren.png',
    'Aston Martin': 'img/equipes/astonmartin/logo-astonmartin.png',
    'Alpine': 'img/equipes/alpine/logo-alpine.png',
    'Williams': 'img/equipes/williams/logo-williams.png',
    'RB': 'img/equipes/rb/logo-rb.png',
    'Kick Sauber': 'img/equipes/sauber/logo-sauber.png',
    'Sauber': 'img/equipes/sauber/logo-sauber.png',
    'Haas F1 Team': 'img/equipes/haas/logo-haas.png'
};
// --- COMPONENTES UI ---
const BackButton = ({ to, theme })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: to,
        className: `inline-flex items-center gap-1.5 mb-8 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:-translate-x-1 duration-200 ${isLight ? 'bg-white text-gray-400 hover:text-pink-500 hover:shadow-sm border border-transparent hover:border-pink-100' : 'bg-white/5 text-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            "Voltar"
        ]
    }, void 0, true, {
        fileName: "[project]/app/standings/page.jsx",
        lineNumber: 179,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageContainer = ({ theme, children })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen w-full px-4 py-8 transition-colors duration-500 font-sans ${isLight ? 'bg-[#FFF0F5] bg-[radial-gradient(#E0F2FE_1px,transparent_1px)] [background-size:20px_20px]' : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'}`,
        children: [
            !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-20 fixed z-0",
                style: {
                    backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 202,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto relative z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 210,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/standings/page.jsx",
        lineNumber: 196,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageHeader = ({ theme, badge, title, subtitle, onRefresh, loading, usingFallback })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-3 mb-3",
                children: [
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] ${isLight ? 'bg-white text-pink-400 shadow-sm' : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`,
                        children: badge
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onRefresh,
                        disabled: loading,
                        className: `p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${isLight ? 'bg-white text-gray-600 hover:bg-gray-50 shadow-sm' : 'bg-white/10 text-gray-400 hover:bg-white/20'} ${loading ? 'animate-spin' : ''}`,
                        title: "Atualizar dados",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                            size: 14
                        }, void 0, false, {
                            fileName: "[project]/app/standings/page.jsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 221,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]'}`,
                style: {
                    fontFamily: "'Russo One', sans-serif"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 247,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm md:text-base max-w-lg mx-auto leading-relaxed ${isLight ? 'text-gray-400 font-medium' : 'text-cyan-100/60'}`,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 254,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            usingFallback && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-center justify-center gap-2 mt-4 px-4 py-2 rounded-full text-[10px] font-bold max-w-md mx-auto ${isLight ? 'bg-yellow-50 text-yellow-700' : 'bg-yellow-900/20 text-yellow-400'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                        size: 12
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 265,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Usando dados de backup (API offline)"
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 262,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/standings/page.jsx",
        lineNumber: 220,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// --- COMPONENTES DO PÓDIO ---
const PodiumStep = ({ data, place, type, theme })=>{
    if (!data) return null;
    const isLight = theme === 'light';
    const rankColors = {
        1: isLight ? 'bg-yellow-100 text-yellow-600 border-yellow-200' : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]',
        2: isLight ? 'bg-gray-100 text-gray-500 border-gray-200' : 'bg-gray-500/20 text-gray-300 border-gray-400/30',
        3: isLight ? 'bg-orange-100 text-orange-600 border-orange-200' : 'bg-orange-700/20 text-orange-400 border-orange-500/30'
    };
    const scale = place === 1 ? 'scale-110 z-10' : 'scale-100 z-0 mt-8';
    const name = type === 'drivers' ? data.driverName : data.teamName;
    const shortName = type === 'drivers' ? (data.driverName || '').split(' ').pop() : data.teamShortName;
    let imagePath = data.image || '';
    if (imagePath && !imagePath.startsWith('/') && !imagePath.startsWith('http')) {
        imagePath = `/${imagePath}`;
    }
    const imgClass = type === 'drivers' ? "w-full h-full object-cover object-top" : `w-full h-full object-contain p-3 ${!isLight ? 'brightness-0 invert drop-shadow-[0_0_2px_rgba(255,255,255,0.5)]' : ''}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center ${scale} transition-all duration-500`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative mb-4 rounded-full p-1 ${rankColors[place]} border-2`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center ${isLight ? 'bg-white' : 'bg-black/50'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imagePath,
                            alt: name,
                            className: imgClass,
                            onError: (e)=>{
                                if (type === 'drivers') {
                                    e.target.src = 'https://media.formula1.com/content/dam/fom-website/drivers/driver_fallback_image.png';
                                } else {
                                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg';
                                    e.target.style.filter = !isLight ? 'brightness(0) invert(1)' : 'none';
                                    e.target.style.padding = '10px';
                                }
                            }
                        }, void 0, false, {
                            fileName: "[project]/app/standings/page.jsx",
                            lineNumber: 305,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 302,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full font-black text-sm border-2 ${isLight ? 'bg-white border-white shadow-sm' : 'bg-[#090011] border-[#090011]'} ${rankColors[place]}`,
                        children: place
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 320,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-center px-4 py-3 rounded-2xl w-32 md:w-40 backdrop-blur-md border ${isLight ? 'bg-white/60 border-white shadow-sm' : 'bg-[#121217]/60 border-white/5'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-sm md:text-base font-black truncate leading-tight ${isLight ? 'text-gray-800' : 'text-white'}`,
                        children: shortName
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 332,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-[10px] uppercase font-bold tracking-wider mt-1 ${isLight ? 'text-gray-400' : 'text-cyan-400/70'}`,
                        children: [
                            data.points,
                            " PTS"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 337,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 327,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/standings/page.jsx",
        lineNumber: 300,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// --- PÁGINA PRINCIPAL ---
const Standings = ()=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const resolvedTheme = theme || 'light';
    const isLight = resolvedTheme === 'light';
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('drivers');
    const [driversData, setDriversData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(FALLBACK_DRIVERS);
    const [constructorsData, setConstructorsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(FALLBACK_CONSTRUCTORS);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usingFallback, setUsingFallback] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Função para buscar dados da API
    const fetchAPIData = async ()=>{
        setLoading(true);
        try {
            const [driversRes, constructorsRes] = await Promise.all([
                fetch('/api/ergast?path=current/driverStandings.json'),
                fetch('/api/ergast?path=current/constructorStandings.json')
            ]);
            if (!driversRes.ok || !constructorsRes.ok) {
                throw new Error('API indisponível');
            }
            const driversJson = await driversRes.json();
            const constructorsJson = await constructorsRes.json();
            // Processar pilotos
            const apiDrivers = driversJson.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
            const formattedDrivers = apiDrivers.map((driver)=>{
                const fullName = `${driver.Driver.givenName} ${driver.Driver.familyName}`;
                const teamName = driver.Constructors[0]?.name || 'Unknown';
                return {
                    position: parseInt(driver.position),
                    driverId: driver.Driver.driverId,
                    driverName: fullName,
                    driverNumber: driver.Driver.permanentNumber || '?',
                    image: DRIVER_IMAGE_MAP[fullName] || 'img/pilotos/default/grid-default.avif',
                    team: teamName,
                    teamColor: TEAM_COLORS[teamName] || '#999999',
                    points: parseInt(driver.points),
                    wins: parseInt(driver.wins),
                    podiums: 0
                };
            });
            // Processar construtores
            const apiConstructors = constructorsJson.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];
            const formattedConstructors = apiConstructors.map((team)=>{
                const teamName = team.Constructor.name;
                return {
                    position: parseInt(team.position),
                    teamId: team.Constructor.constructorId,
                    teamName: teamName,
                    teamShortName: teamName.split(' ')[0],
                    image: TEAM_IMAGE_MAP[teamName] || 'img/equipes/default/logo-default.png',
                    teamColor: TEAM_COLORS[teamName] || '#999999',
                    points: parseInt(team.points),
                    wins: parseInt(team.wins)
                };
            });
            setDriversData(formattedDrivers);
            setConstructorsData(formattedConstructors);
            setUsingFallback(false);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
            setDriversData(FALLBACK_DRIVERS);
            setConstructorsData(FALLBACK_CONSTRUCTORS);
            setUsingFallback(true);
        } finally{
            setLoading(false);
        }
    };
    // Buscar dados ao montar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAPIData();
    }, []);
    const drivers = driversData || [];
    const constructors = constructorsData || [];
    const currentData = activeTab === 'drivers' ? drivers : constructors;
    const top3 = [
        currentData[1],
        currentData[0],
        currentData[2]
    ].filter(Boolean);
    const restOfField = currentData.slice(3);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContainer, {
        theme: resolvedTheme,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackButton, {
                to: "/",
                theme: resolvedTheme
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 438,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                theme: resolvedTheme,
                badge: "Live Standings",
                title: "Classificação",
                subtitle: "Acompanhe a batalha pelo campeonato em tempo real",
                onRefresh: fetchAPIData,
                loading: loading,
                usingFallback: usingFallback
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 440,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative flex p-1.5 rounded-full mx-auto max-w-sm mb-12 ${isLight ? 'bg-white shadow-inner border border-gray-100' : 'bg-[#121217] border border-white/5'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-1.5 bottom-1.5 rounded-full transition-all duration-300 w-[calc(50%-6px)] ${activeTab === 'drivers' ? 'left-1.5' : 'left-[calc(50%+3px)]'} ${isLight ? 'bg-gradient-to-r from-pink-400 to-pink-500 shadow-md' : 'bg-cyan-600 shadow-[0_0_15px_rgba(8,145,178,0.4)]'}`
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 456,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('drivers'),
                        className: `relative z-10 flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-300 ${activeTab === 'drivers' ? 'text-white' : isLight ? 'text-gray-400' : 'text-gray-500'}`,
                        children: "Pilotos"
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab('constructors'),
                        className: `relative z-10 flex-1 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-colors duration-300 ${activeTab === 'constructors' ? 'text-white' : isLight ? 'text-gray-400' : 'text-gray-500'}`,
                        children: "Equipes"
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 472,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 451,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            top3.length >= 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-end gap-2 md:gap-8 mb-16 px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumStep, {
                        place: 2,
                        data: top3[0],
                        type: activeTab,
                        theme: resolvedTheme
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 485,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumStep, {
                        place: 1,
                        data: top3[1],
                        type: activeTab,
                        theme: resolvedTheme
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 486,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PodiumStep, {
                        place: 3,
                        data: top3[2],
                        type: activeTab,
                        theme: resolvedTheme
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 487,
                        columnNumber: 12
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 484,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `rounded-[2.5rem] overflow-hidden ${isLight ? 'bg-white/60 backdrop-blur-xl border border-pink-100 shadow-xl' : 'bg-[#121217]/60 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)]'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `grid grid-cols-12 gap-2 md:gap-4 p-6 border-b text-[10px] font-black uppercase tracking-widest opacity-60 ${isLight ? 'border-pink-50 text-gray-500' : 'border-white/5 text-cyan-100'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-1",
                                children: "Pos"
                            }, void 0, false, {
                                fileName: "[project]/app/standings/page.jsx",
                                lineNumber: 502,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-6 md:col-span-5",
                                children: activeTab === 'drivers' ? 'Piloto' : 'Equipe'
                            }, void 0, false, {
                                fileName: "[project]/app/standings/page.jsx",
                                lineNumber: 503,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-3 md:col-span-3 text-center",
                                children: "Pontos"
                            }, void 0, false, {
                                fileName: "[project]/app/standings/page.jsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 md:col-span-3 text-right hidden md:block",
                                children: "Vitórias"
                            }, void 0, false, {
                                fileName: "[project]/app/standings/page.jsx",
                                lineNumber: 505,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-2 md:col-span-3 text-right md:hidden",
                                children: "Vit"
                            }, void 0, false, {
                                fileName: "[project]/app/standings/page.jsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divide-y divide-gray-50 dark:divide-white/5",
                        children: restOfField.map((item, index)=>{
                            const name = activeTab === 'drivers' ? item.driverName : item.teamName;
                            const subName = activeTab === 'drivers' ? item.team : null;
                            let imageSrc = item.image || '';
                            if (imageSrc && !imageSrc.startsWith('/') && !imageSrc.startsWith('http')) {
                                imageSrc = `/${imageSrc}`;
                            }
                            const imgClasses = activeTab === 'drivers' ? 'w-full h-full object-cover object-top' : `w-full h-full object-contain p-1.5 ${!isLight ? 'brightness-0 invert' : ''}`;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `grid grid-cols-12 gap-2 md:gap-4 p-4 md:p-5 items-center transition-all duration-200 group ${isLight ? 'hover:bg-pink-50/50' : 'hover:bg-white/5'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-1",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `text-sm md:text-lg font-black opacity-50 group-hover:opacity-100 ${isLight ? 'text-gray-400 group-hover:text-pink-500' : 'text-gray-600 group-hover:text-cyan-400'}`,
                                            children: item.position
                                        }, void 0, false, {
                                            fileName: "[project]/app/standings/page.jsx",
                                            lineNumber: 532,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/standings/page.jsx",
                                        lineNumber: 531,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-6 md:col-span-5 flex items-center gap-3 md:gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0 ${isLight ? 'bg-gray-100' : 'bg-white/10'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: imageSrc,
                                                    alt: name,
                                                    className: imgClasses,
                                                    onError: (e)=>{
                                                        if (activeTab === 'drivers') {
                                                            e.target.src = 'https://media.formula1.com/content/dam/fom-website/drivers/driver_fallback_image.png';
                                                            e.target.className = 'w-full h-full object-cover';
                                                        } else {
                                                            e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg';
                                                            e.target.className = `w-full h-full object-contain p-1.5 ${!isLight ? 'brightness-0 invert' : ''}`;
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/standings/page.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/standings/page.jsx",
                                                lineNumber: 540,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `font-bold text-sm md:text-base truncate group-hover:translate-x-1 transition-transform ${isLight ? 'text-gray-800' : 'text-white'}`,
                                                        children: name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/standings/page.jsx",
                                                        lineNumber: 560,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    subName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `text-[9px] md:text-[10px] font-bold uppercase tracking-wider truncate ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                                        children: subName
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/standings/page.jsx",
                                                        lineNumber: 566,
                                                        columnNumber: 24
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/standings/page.jsx",
                                                lineNumber: 559,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/standings/page.jsx",
                                        lineNumber: 539,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-3 md:col-span-3 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `px-3 py-1 rounded-lg text-xs md:text-sm font-black ${isLight ? 'bg-gray-50 text-gray-900 group-hover:bg-pink-100 group-hover:text-pink-600' : 'bg-white/5 text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400'}`,
                                            children: item.points
                                        }, void 0, false, {
                                            fileName: "[project]/app/standings/page.jsx",
                                            lineNumber: 576,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/standings/page.jsx",
                                        lineNumber: 575,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-span-2 md:col-span-3 flex justify-end items-center gap-1 md:gap-2",
                                        children: [
                                            item.wins > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                size: 12,
                                                className: isLight ? "text-yellow-500" : "text-yellow-400",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/app/standings/page.jsx",
                                                lineNumber: 587,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `text-[10px] md:text-xs font-bold ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                                children: item.wins
                                            }, void 0, false, {
                                                fileName: "[project]/app/standings/page.jsx",
                                                lineNumber: 589,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/standings/page.jsx",
                                        lineNumber: 585,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, index, true, {
                                fileName: "[project]/app/standings/page.jsx",
                                lineNumber: 525,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/standings/page.jsx",
                        lineNumber: 510,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 492,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-center mt-8 text-[10px] font-bold uppercase tracking-widest opacity-40 ${isLight ? 'text-gray-500' : 'text-cyan-100'}`,
                children: [
                    "Fórmula 1 Season ",
                    usingFallback ? '2026' : '2025',
                    " ",
                    usingFallback ? '' : '• Dados via Ergast API'
                ]
            }, void 0, true, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 601,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`
            }, void 0, false, {
                fileName: "[project]/app/standings/page.jsx",
                lineNumber: 607,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/standings/page.jsx",
        lineNumber: 437,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = Standings;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
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
const ChevronLeft = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("chevron-left", __iconNode);
;
 //# sourceMappingURL=chevron-left.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronLeft",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>RefreshCw
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
            key: "v9h5vc"
        }
    ],
    [
        "path",
        {
            d: "M21 3v5h-5",
            key: "1q7to0"
        }
    ],
    [
        "path",
        {
            d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
            key: "3uifl3"
        }
    ],
    [
        "path",
        {
            d: "M8 16H3v5",
            key: "1cv678"
        }
    ]
];
const RefreshCw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("refresh-cw", __iconNode);
;
 //# sourceMappingURL=refresh-cw.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RefreshCw",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_32381fc8._.js.map