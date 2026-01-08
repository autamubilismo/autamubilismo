module.exports = [
"[project]/data/teams.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/app/teams/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-ssr] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$teams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/teams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThemeContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
// --- COMPONENTES DE UI (Estilizados) ---
const BackButton = ({ to, theme })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: to,
        className: `inline-flex items-center gap-1.5 mb-8 px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all hover:-translate-x-1 duration-200 ${isLight ? 'bg-white text-gray-400 hover:text-pink-500 hover:shadow-sm border border-transparent hover:border-pink-100' : 'bg-white/5 text-cyan-400/60 hover:text-cyan-300 hover:bg-white/10 border border-white/5 hover:border-cyan-500/30'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                size: 12
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            "Voltar"
        ]
    }, void 0, true, {
        fileName: "[project]/app/teams/page.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageContainer = ({ theme, children })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen w-full px-6 py-8 transition-colors duration-500 font-sans ${isLight ? 'bg-[#FFF0F5] bg-[radial-gradient(#E0F2FE_1px,transparent_1px)] [background-size:20px_20px]' : 'bg-[#090011] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a004a] via-[#090011] to-[#05000a] text-cyan-50'}`,
        children: [
            !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none opacity-20 fixed z-0",
                style: {
                    backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
                }
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 37,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto relative z-10",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/teams/page.jsx",
        lineNumber: 30,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const PageHeader = ({ theme, badge, title, subtitle })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-center mb-4",
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.2em] mb-3 ${isLight ? 'bg-white text-pink-400 shadow-sm' : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30 shadow-[0_0_10px_rgba(255,0,255,0.2)]'}`,
                children: badge
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 57,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `text-4xl md:text-5xl font-black tracking-tighter mb-3 uppercase ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)]'}`,
                style: {
                    fontFamily: "'Russo One', sans-serif"
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-sm md:text-base max-w-lg mx-auto leading-relaxed ${isLight ? 'text-gray-400 font-medium' : 'text-cyan-100/60'}`,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 72,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/teams/page.jsx",
        lineNumber: 55,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// --- PÁGINA PRINCIPAL ---
const TeamsPage = ()=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const resolvedTheme = theme || 'light';
    const isLight = resolvedTheme === 'light';
    // Classes condicionais de estilo
    const cardClass = isLight ? 'bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(236,72,153,0.05)] hover:shadow-[0_20px_40px_rgba(236,72,153,0.15)] hover:-translate-y-1' : 'bg-[#121217]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:-translate-y-1';
    const textMain = isLight ? 'text-gray-800' : 'text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]';
    const textSub = isLight ? 'text-gray-400' : 'text-cyan-200/50';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageContainer, {
        theme: resolvedTheme,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(BackButton, {
                to: "/",
                theme: resolvedTheme
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-4 rounded-2xl mb-6 transition-transform hover:scale-110 duration-300 ${isLight ? 'bg-gradient-to-br from-pink-100 to-white text-pink-400 shadow-inner' : 'bg-white/5 text-cyan-400 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,255,255,0.15)]'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/app/teams/page.jsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/app/teams/page.jsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(PageHeader, {
                        theme: resolvedTheme,
                        badge: "The Garage",
                        title: "Construtores",
                        subtitle: "As garagens que movem o campeonato. Descubra a história, a tecnologia e os pilotos de cada equipe."
                    }, void 0, false, {
                        fileName: "[project]/app/teams/page.jsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$teams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TEAMS_DATA"].map((team)=>{
                    const teamFolder = team.id || team.name.toLowerCase().replace(/\s+/g, '-');
                    const logoImage = `/img/equipes/${teamFolder}/logo-${teamFolder}.png`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/teams/${teamFolder}`,
                        className: `group relative overflow-hidden rounded-[2rem] flex flex-col transition-all duration-500 ${cardClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-full flex-shrink-0 relative overflow-hidden",
                                style: {
                                    backgroundColor: team.color,
                                    boxShadow: !isLight ? `0 0 10px ${team.color}` : 'none'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-white/50 w-full h-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity"
                                }, void 0, false, {
                                    fileName: "[project]/app/teams/page.jsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/app/teams/page.jsx",
                                lineNumber: 130,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 p-6 md:p-8 flex flex-col h-full relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-2xl md:text-3xl font-black uppercase leading-none mb-1.5 tracking-tighter ${textMain}`,
                                                        style: {
                                                            fontFamily: "'Russo One', sans-serif"
                                                        },
                                                        children: team.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/teams/page.jsx",
                                                        lineNumber: 145,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: `text-[9px] font-bold uppercase tracking-[0.25em] ${textSub}`,
                                                        children: team.fullName || 'Formula 1 Team'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/teams/page.jsx",
                                                        lineNumber: 148,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/teams/page.jsx",
                                                lineNumber: 144,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2 rounded-full opacity-50 group-hover:opacity-100 transition-all duration-500 ${isLight ? 'bg-gray-50 text-gray-400' : 'bg-white/5 text-cyan-400'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/teams/page.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/teams/page.jsx",
                                                lineNumber: 154,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/teams/page.jsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-32 w-full my-6 flex items-center justify-center p-4",
                                        children: [
                                            !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 blur-2xl rounded-full transform scale-50",
                                                style: {
                                                    backgroundColor: team.color
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/teams/page.jsx",
                                                lineNumber: 165,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: logoImage,
                                                alt: `Logo ${team.name}`,
                                                className: `max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 relative z-10 ${!isLight ? 'brightness-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]' : 'drop-shadow-sm'}`,
                                                onError: (e)=>{
                                                    e.target.src = `https://logo.clearbit.com/${team.domain || 'formula1.com'}`;
                                                    if (!isLight) e.target.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.5))';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/app/teams/page.jsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/teams/page.jsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `mt-auto pt-5 border-t flex items-center justify-between transition-colors duration-300 ${isLight ? 'border-gray-100 group-hover:border-pink-100' : 'border-white/5 group-hover:border-white/10'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity ${isLight ? 'text-pink-400' : 'text-cyan-400'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/teams/page.jsx",
                                                                lineNumber: 194,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[8px] font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-400' : 'text-cyan-100/50'}`,
                                                                children: "Line-up"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/teams/page.jsx",
                                                                lineNumber: 195,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/teams/page.jsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: team.drivers?.map((d, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-xs font-bold whitespace-nowrap ${textMain}`,
                                                                children: [
                                                                    d.split(' ')[1],
                                                                    " ",
                                                                    i < team.drivers.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: `mx-1.5 font-light opacity-30 ${isLight ? 'text-gray-400' : 'text-gray-600'}`,
                                                                        children: "/"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/teams/page.jsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0))
                                                                ]
                                                            }, i, true, {
                                                                fileName: "[project]/app/teams/page.jsx",
                                                                lineNumber: 201,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/teams/page.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/teams/page.jsx",
                                                lineNumber: 190,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-2.5 rounded-full transition-all duration-500 transform group-hover:translate-x-1 ${isLight ? 'bg-gray-50 text-gray-400 group-hover:bg-pink-500 group-hover:text-white group-hover:shadow-md' : 'bg-white/5 text-gray-500 group-hover:bg-cyan-500 group-hover:text-black group-hover:shadow-[0_0_15px_cyan]'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/teams/page.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/app/teams/page.jsx",
                                                lineNumber: 212,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/teams/page.jsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/teams/page.jsx",
                                lineNumber: 140,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.06] transition-opacity duration-700",
                                style: {
                                    backgroundImage: `radial-gradient(circle at 2px 2px, ${isLight ? '#000' : '#fff'} 1px, transparent 0)`,
                                    backgroundSize: '16px 16px'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/teams/page.jsx",
                                lineNumber: 223,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, team.id, true, {
                        fileName: "[project]/app/teams/page.jsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');`
            }, void 0, false, {
                fileName: "[project]/app/teams/page.jsx",
                lineNumber: 235,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/teams/page.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TeamsPage;
}),
];

//# sourceMappingURL=_8c605b39._.js.map