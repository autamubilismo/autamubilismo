module.exports = [
"[project]/constants/theme.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/data/f1Calendar2026.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/f1Calendar2026.js
// 🔹 PRÉ-TEMPORADA
__turbopack_context__.s([
    "F1_2026_CALENDAR",
    ()=>F1_2026_CALENDAR,
    "F1_2026_PRESEASON",
    ()=>F1_2026_PRESEASON
]);
const F1_2026_PRESEASON = [
    {
        id: "preseason-test-1",
        kind: "TEST",
        title: "Pré-temporada — Teste 1",
        circuitLabel: "Circuit de Barcelona-Catalunya, Espanha",
        startDate: "2026-01-26",
        endDate: "2026-01-30",
        timezoneLabel: "BRT",
        sessions: [
            {
                day: "SEG",
                date: "26",
                name: "Sessão de Testes - Dia 1",
                time: ""
            },
            {
                day: "TER",
                date: "27",
                name: "Sessão de Testes - Dia 2",
                time: ""
            },
            {
                day: "QUA",
                date: "28",
                name: "Sessão de Testes - Dia 3",
                time: ""
            },
            {
                day: "QUI",
                date: "29",
                name: "Sessão de Testes - Dia 4",
                time: ""
            },
            {
                day: "SEX",
                date: "30",
                name: "Sessão de Testes - Dia 5",
                time: ""
            }
        ]
    },
    {
        id: "preseason-test-2",
        kind: "TEST",
        title: "Pré-temporada — Teste 2",
        circuitLabel: "Bahrain International Circuit, Bahrein",
        startDate: "2026-02-11",
        endDate: "2026-02-13",
        timezoneLabel: "BRT",
        sessions: [
            {
                day: "QUA",
                date: "11",
                name: "Sessão de Testes - Dia 1",
                time: ""
            },
            {
                day: "QUI",
                date: "12",
                name: "Sessão de Testes - Dia 2",
                time: ""
            },
            {
                day: "SEX",
                date: "13",
                name: "Sessão de Testes - Dia 3",
                time: ""
            }
        ]
    },
    {
        id: "preseason-test-3",
        kind: "TEST",
        title: "Pré-temporada — Teste 3",
        circuitLabel: "Bahrain International Circuit, Bahrein",
        startDate: "2026-02-18",
        endDate: "2026-02-20",
        timezoneLabel: "BRT",
        sessions: [
            {
                day: "QUA",
                date: "18",
                name: "Sessão de Testes - Dia 1",
                time: ""
            },
            {
                day: "QUI",
                date: "19",
                name: "Sessão de Testes - Dia 2",
                time: ""
            },
            {
                day: "SEX",
                date: "20",
                name: "Sessão de Testes - Dia 3",
                time: ""
            }
        ]
    }
];
const F1_2026_CALENDAR = [
    {
        id: "australia",
        kind: "RACE",
        round: 1,
        title: "GP da Austrália",
        grandPrix: "GP da Austrália",
        country: "Austrália",
        circuit: "Albert Park Circuit",
        circuitLabel: "Albert Park Circuit, Melbourne",
        location: "Melbourne",
        startDate: "2026-03-06",
        endDate: "2026-03-08",
        raceDate: "2026-03-08",
        timezoneLabel: "AEDT (UTC+11)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "06",
                name: "Treino Livre 1",
                time: "03:30"
            },
            {
                day: "SEX",
                date: "06",
                name: "Treino Livre 2",
                time: "07:00"
            },
            {
                day: "SÁB",
                date: "07",
                name: "Treino Livre 3",
                time: "03:30"
            },
            {
                day: "SÁB",
                date: "07",
                name: "Classificação",
                time: "07:00"
            },
            {
                day: "DOM",
                date: "08",
                name: "Corrida",
                time: "06:00"
            }
        ]
    },
    {
        id: "china",
        kind: "RACE",
        round: 2,
        title: "GP da China",
        grandPrix: "GP da China",
        country: "China",
        circuit: "Shanghai International Circuit",
        circuitLabel: "Shanghai International Circuit, Xangai",
        location: "Shanghai",
        startDate: "2026-03-13",
        endDate: "2026-03-15",
        raceDate: "2026-03-15",
        timezoneLabel: "CST (UTC+8)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "13",
                name: "Treino Livre 1",
                time: "00:30"
            },
            {
                day: "SEX",
                date: "13",
                name: "Treino Livre 2",
                time: "04:00"
            },
            {
                day: "SÁB",
                date: "14",
                name: "Treino Livre 3",
                time: "00:30"
            },
            {
                day: "SÁB",
                date: "14",
                name: "Classificação",
                time: "04:00"
            },
            {
                day: "DOM",
                date: "15",
                name: "Corrida",
                time: "03:00"
            }
        ]
    },
    {
        id: "japan",
        kind: "RACE",
        round: 3,
        title: "GP do Japão",
        grandPrix: "GP do Japão",
        country: "Japão",
        circuit: "Suzuka Circuit",
        circuitLabel: "Suzuka Circuit, Suzuka",
        location: "Suzuka",
        startDate: "2026-03-27",
        endDate: "2026-03-29",
        raceDate: "2026-03-29",
        timezoneLabel: "JST (UTC+9)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "27",
                name: "Treino Livre 1",
                time: "23:30"
            },
            {
                day: "SÁB",
                date: "28",
                name: "Treino Livre 2",
                time: "03:00"
            },
            {
                day: "SÁB",
                date: "28",
                name: "Treino Livre 3",
                time: "23:30"
            },
            {
                day: "DOM",
                date: "29",
                name: "Classificação",
                time: "03:00"
            },
            {
                day: "DOM",
                date: "29",
                name: "Corrida",
                time: "02:00"
            }
        ]
    },
    {
        id: "bahrain",
        kind: "RACE",
        round: 4,
        title: "GP do Bahrein",
        grandPrix: "GP do Bahrein",
        country: "Bahrein",
        circuit: "Bahrain International Circuit",
        circuitLabel: "Bahrain International Circuit, Sakhir",
        location: "Sakhir",
        startDate: "2026-04-10",
        endDate: "2026-04-12",
        raceDate: "2026-04-12",
        timezoneLabel: "AST (UTC+3)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "10",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "10",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "11",
                name: "Treino Livre 3",
                time: "09:30"
            },
            {
                day: "SÁB",
                date: "11",
                name: "Classificação",
                time: "13:00"
            },
            {
                day: "DOM",
                date: "12",
                name: "Corrida",
                time: "13:00"
            }
        ]
    },
    {
        id: "saudi-arabia",
        kind: "RACE",
        round: 5,
        title: "GP da Arábia Saudita",
        grandPrix: "GP da Arábia Saudita",
        country: "Arábia Saudita",
        circuit: "Jeddah Corniche Circuit",
        circuitLabel: "Jeddah Corniche Circuit, Jeddah",
        location: "Jeddah",
        startDate: "2026-04-17",
        endDate: "2026-04-19",
        raceDate: "2026-04-19",
        timezoneLabel: "AST (UTC+3)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "17",
                name: "Treino Livre 1",
                time: "10:30"
            },
            {
                day: "SEX",
                date: "17",
                name: "Treino Livre 2",
                time: "14:00"
            },
            {
                day: "SÁB",
                date: "18",
                name: "Treino Livre 3",
                time: "10:30"
            },
            {
                day: "SÁB",
                date: "18",
                name: "Classificação",
                time: "14:00"
            },
            {
                day: "DOM",
                date: "19",
                name: "Corrida",
                time: "14:00"
            }
        ]
    },
    {
        id: "miami",
        kind: "RACE",
        round: 6,
        title: "GP de Miami",
        grandPrix: "GP de Miami",
        country: "Estados Unidos",
        circuit: "Miami International Autodrome",
        circuitLabel: "Miami International Autodrome, Miami",
        location: "Miami",
        startDate: "2026-05-01",
        endDate: "2026-05-03",
        raceDate: "2026-05-03",
        timezoneLabel: "EDT (UTC-4)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "01",
                name: "Treino Livre 1",
                time: "16:30"
            },
            {
                day: "SEX",
                date: "01",
                name: "Treino Livre 2",
                time: "20:00"
            },
            {
                day: "SÁB",
                date: "02",
                name: "Treino Livre 3",
                time: "15:30"
            },
            {
                day: "SÁB",
                date: "02",
                name: "Classificação",
                time: "19:00"
            },
            {
                day: "DOM",
                date: "03",
                name: "Corrida",
                time: "18:00"
            }
        ]
    },
    {
        id: "canada",
        kind: "RACE",
        round: 7,
        title: "GP do Canadá",
        grandPrix: "GP do Canadá",
        country: "Canadá",
        circuit: "Circuit Gilles-Villeneuve",
        circuitLabel: "Circuit Gilles-Villeneuve, Montreal",
        location: "Montreal",
        startDate: "2026-05-22",
        endDate: "2026-05-24",
        raceDate: "2026-05-24",
        timezoneLabel: "EDT (UTC-4)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "22",
                name: "Treino Livre 1",
                time: "16:30"
            },
            {
                day: "SEX",
                date: "22",
                name: "Treino Livre 2",
                time: "20:00"
            },
            {
                day: "SÁB",
                date: "23",
                name: "Treino Livre 3",
                time: "15:30"
            },
            {
                day: "SÁB",
                date: "23",
                name: "Classificação",
                time: "19:00"
            },
            {
                day: "DOM",
                date: "24",
                name: "Corrida",
                time: "17:00"
            }
        ]
    },
    {
        id: "monaco",
        kind: "RACE",
        round: 8,
        title: "GP de Mônaco",
        grandPrix: "GP de Mônaco",
        country: "Mônaco",
        circuit: "Circuit de Monaco",
        circuitLabel: "Circuit de Monaco, Monte Carlo",
        location: "Monte Carlo",
        startDate: "2026-06-05",
        endDate: "2026-06-07",
        raceDate: "2026-06-07",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "05",
                name: "Treino Livre 1",
                time: "10:30"
            },
            {
                day: "SEX",
                date: "05",
                name: "Treino Livre 2",
                time: "14:00"
            },
            {
                day: "SÁB",
                date: "06",
                name: "Treino Livre 3",
                time: "09:30"
            },
            {
                day: "SÁB",
                date: "06",
                name: "Classificação",
                time: "13:00"
            },
            {
                day: "DOM",
                date: "07",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "spain-barcelona",
        kind: "RACE",
        round: 9,
        title: "GP da Espanha",
        grandPrix: "GP da Espanha",
        country: "Espanha",
        circuit: "Circuit de Barcelona-Catalunya",
        circuitLabel: "Circuit de Barcelona-Catalunya, Barcelona",
        location: "Barcelona",
        startDate: "2026-06-12",
        endDate: "2026-06-14",
        raceDate: "2026-06-14",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "12",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "12",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "13",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "13",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "14",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "austria",
        kind: "RACE",
        round: 10,
        title: "GP da Áustria",
        grandPrix: "GP da Áustria",
        country: "Áustria",
        circuit: "Red Bull Ring",
        circuitLabel: "Red Bull Ring, Spielberg",
        location: "Spielberg",
        startDate: "2026-06-26",
        endDate: "2026-06-28",
        raceDate: "2026-06-28",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "26",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "26",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "27",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "27",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "28",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "great-britain",
        kind: "RACE",
        round: 11,
        title: "GP da Grã-Bretanha",
        grandPrix: "GP da Grã-Bretanha",
        country: "Reino Unido",
        circuit: "Silverstone Circuit",
        circuitLabel: "Silverstone Circuit, Silverstone",
        location: "Silverstone",
        startDate: "2026-07-03",
        endDate: "2026-07-05",
        raceDate: "2026-07-05",
        timezoneLabel: "BST (UTC+1)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "03",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "03",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "04",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "04",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "05",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "belgium",
        kind: "RACE",
        round: 12,
        title: "GP da Bélgica",
        grandPrix: "GP da Bélgica",
        country: "Bélgica",
        circuit: "Circuit de Spa-Francorchamps",
        circuitLabel: "Circuit de Spa-Francorchamps, Spa",
        location: "Spa-Francorchamps",
        startDate: "2026-07-17",
        endDate: "2026-07-19",
        raceDate: "2026-07-19",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "17",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "17",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "18",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "18",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "19",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "hungary",
        kind: "RACE",
        round: 13,
        title: "GP da Hungria",
        grandPrix: "GP da Hungria",
        country: "Hungria",
        circuit: "Hungaroring",
        circuitLabel: "Hungaroring, Budapeste",
        location: "Budapest",
        startDate: "2026-07-24",
        endDate: "2026-07-26",
        raceDate: "2026-07-26",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "24",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "24",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "25",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "25",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "26",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "netherlands",
        kind: "RACE",
        round: 14,
        title: "GP dos Países Baixos",
        grandPrix: "GP dos Países Baixos",
        country: "Países Baixos",
        circuit: "Circuit Zandvoort",
        circuitLabel: "Circuit Zandvoort, Zandvoort",
        location: "Zandvoort",
        startDate: "2026-08-21",
        endDate: "2026-08-23",
        raceDate: "2026-08-23",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "21",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "21",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "22",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "22",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "23",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "italy",
        kind: "RACE",
        round: 15,
        title: "GP da Itália",
        grandPrix: "GP da Itália",
        country: "Itália",
        circuit: "Autodromo Nazionale di Monza",
        circuitLabel: "Autodromo Nazionale di Monza, Monza",
        location: "Monza",
        startDate: "2026-09-04",
        endDate: "2026-09-06",
        raceDate: "2026-09-06",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "04",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "04",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "05",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "05",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "06",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "spain-madrid",
        kind: "RACE",
        round: 16,
        title: "GP de Madrid",
        grandPrix: "GP de Madrid",
        country: "Espanha",
        circuit: "Madrid Street Circuit",
        circuitLabel: "Madrid Street Circuit, Madrid",
        location: "Madrid",
        startDate: "2026-09-11",
        endDate: "2026-09-13",
        raceDate: "2026-09-13",
        timezoneLabel: "CEST (UTC+2)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "11",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "11",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "12",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "12",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "13",
                name: "Corrida",
                time: "12:00"
            }
        ]
    },
    {
        id: "azerbaijan",
        kind: "RACE",
        round: 17,
        title: "GP do Azerbaijão",
        grandPrix: "GP do Azerbaijão",
        country: "Azerbaijão",
        circuit: "Baku City Circuit",
        circuitLabel: "Baku City Circuit, Baku",
        location: "Baku",
        startDate: "2026-09-25",
        endDate: "2026-09-27",
        raceDate: "2026-09-27",
        timezoneLabel: "AZT (UTC+4)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "25",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "25",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "26",
                name: "Treino Livre 3",
                time: "08:30"
            },
            {
                day: "SÁB",
                date: "26",
                name: "Classificação",
                time: "12:00"
            },
            {
                day: "DOM",
                date: "27",
                name: "Corrida",
                time: "10:00"
            }
        ]
    },
    {
        id: "singapore",
        kind: "RACE",
        round: 18,
        title: "GP de Singapura",
        grandPrix: "GP de Singapura",
        country: "Singapura",
        circuit: "Marina Bay Street Circuit",
        circuitLabel: "Marina Bay Street Circuit, Singapura",
        location: "Singapore",
        startDate: "2026-10-09",
        endDate: "2026-10-11",
        raceDate: "2026-10-11",
        timezoneLabel: "SGT (UTC+8)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "09",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "09",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "10",
                name: "Treino Livre 3",
                time: "09:30"
            },
            {
                day: "SÁB",
                date: "10",
                name: "Classificação",
                time: "13:00"
            },
            {
                day: "DOM",
                date: "11",
                name: "Corrida",
                time: "13:00"
            }
        ]
    },
    {
        id: "usa-austin",
        kind: "RACE",
        round: 19,
        title: "GP dos Estados Unidos",
        grandPrix: "GP dos Estados Unidos",
        country: "Estados Unidos",
        circuit: "Circuit of The Americas",
        circuitLabel: "Circuit of The Americas, Austin",
        location: "Austin",
        startDate: "2026-10-23",
        endDate: "2026-10-25",
        raceDate: "2026-10-25",
        timezoneLabel: "CDT (UTC-5)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "23",
                name: "Treino Livre 1",
                time: "17:30"
            },
            {
                day: "SEX",
                date: "23",
                name: "Treino Livre 2",
                time: "21:00"
            },
            {
                day: "SÁB",
                date: "24",
                name: "Treino Livre 3",
                time: "16:30"
            },
            {
                day: "SÁB",
                date: "24",
                name: "Classificação",
                time: "20:00"
            },
            {
                day: "DOM",
                date: "25",
                name: "Corrida",
                time: "19:00"
            }
        ]
    },
    {
        id: "mexico",
        kind: "RACE",
        round: 20,
        title: "GP do México",
        grandPrix: "GP do México",
        country: "México",
        circuit: "Autódromo Hermanos Rodríguez",
        circuitLabel: "Autódromo Hermanos Rodríguez, Cidade do México",
        location: "Mexico City",
        startDate: "2026-10-30",
        endDate: "2026-11-01",
        raceDate: "2026-11-01",
        timezoneLabel: "CST (UTC-6)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "30",
                name: "Treino Livre 1",
                time: "17:30"
            },
            {
                day: "SEX",
                date: "30",
                name: "Treino Livre 2",
                time: "21:00"
            },
            {
                day: "SÁB",
                date: "31",
                name: "Treino Livre 3",
                time: "16:30"
            },
            {
                day: "SÁB",
                date: "31",
                name: "Classificação",
                time: "20:00"
            },
            {
                day: "DOM",
                date: "01",
                name: "Corrida",
                time: "19:00"
            }
        ]
    },
    {
        id: "brazil",
        kind: "RACE",
        round: 21,
        title: "GP do Brasil",
        grandPrix: "GP do Brasil",
        country: "Brasil",
        circuit: "Autódromo José Carlos Pace",
        circuitLabel: "Autódromo José Carlos Pace, São Paulo",
        location: "São Paulo",
        startDate: "2026-11-06",
        endDate: "2026-11-08",
        raceDate: "2026-11-08",
        timezoneLabel: "BRT (UTC-3)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "06",
                name: "Treino Livre 1",
                time: "12:30"
            },
            {
                day: "SEX",
                date: "06",
                name: "Treino Livre 2",
                time: "16:00"
            },
            {
                day: "SÁB",
                date: "07",
                name: "Treino Livre 3",
                time: "11:30"
            },
            {
                day: "SÁB",
                date: "07",
                name: "Classificação",
                time: "15:00"
            },
            {
                day: "DOM",
                date: "08",
                name: "Corrida",
                time: "14:00"
            }
        ]
    },
    {
        id: "usa-las-vegas",
        kind: "RACE",
        round: 22,
        title: "GP de Las Vegas",
        grandPrix: "GP de Las Vegas",
        country: "Estados Unidos",
        circuit: "Las Vegas Street Circuit",
        circuitLabel: "Las Vegas Street Circuit, Las Vegas",
        location: "Las Vegas",
        startDate: "2026-11-19",
        endDate: "2026-11-21",
        raceDate: "2026-11-21",
        timezoneLabel: "PST (UTC-8)",
        isSprint: false,
        sessions: [
            {
                day: "QUI",
                date: "19",
                name: "Treino Livre 1",
                time: "05:30"
            },
            {
                day: "QUI",
                date: "19",
                name: "Treino Livre 2",
                time: "09:00"
            },
            {
                day: "SÁB",
                date: "21",
                name: "Treino Livre 3",
                time: "05:30"
            },
            {
                day: "SÁB",
                date: "21",
                name: "Classificação",
                time: "09:00"
            },
            {
                day: "DOM",
                date: "22",
                name: "Corrida",
                time: "05:00"
            }
        ]
    },
    {
        id: "qatar",
        kind: "RACE",
        round: 23,
        title: "GP do Qatar",
        grandPrix: "GP do Qatar",
        country: "Qatar",
        circuit: "Lusail International Circuit",
        circuitLabel: "Lusail International Circuit, Lusail",
        location: "Lusail",
        startDate: "2026-11-27",
        endDate: "2026-11-29",
        raceDate: "2026-11-29",
        timezoneLabel: "AST (UTC+3)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "27",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "27",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "28",
                name: "Treino Livre 3",
                time: "10:30"
            },
            {
                day: "SÁB",
                date: "28",
                name: "Classificação",
                time: "14:00"
            },
            {
                day: "DOM",
                date: "29",
                name: "Corrida",
                time: "14:00"
            }
        ]
    },
    {
        id: "abu-dhabi",
        kind: "RACE",
        round: 24,
        title: "GP de Abu Dhabi",
        grandPrix: "GP de Abu Dhabi",
        country: "Emirados Árabes Unidos",
        circuit: "Yas Marina Circuit",
        circuitLabel: "Yas Marina Circuit, Abu Dhabi",
        location: "Abu Dhabi",
        startDate: "2026-12-04",
        endDate: "2026-12-06",
        raceDate: "2026-12-06",
        timezoneLabel: "GST (UTC+4)",
        isSprint: false,
        sessions: [
            {
                day: "SEX",
                date: "04",
                name: "Treino Livre 1",
                time: "09:30"
            },
            {
                day: "SEX",
                date: "04",
                name: "Treino Livre 2",
                time: "13:00"
            },
            {
                day: "SÁB",
                date: "05",
                name: "Treino Livre 3",
                time: "10:30"
            },
            {
                day: "SÁB",
                date: "05",
                name: "Classificação",
                time: "14:00"
            },
            {
                day: "DOM",
                date: "06",
                name: "Corrida",
                time: "13:00"
            }
        ]
    }
];
}),
"[project]/components/widgets/NextRaceWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NextRaceWidget",
    ()=>NextRaceWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-ssr] (ecmascript) <export default as Flag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$f1Calendar2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/f1Calendar2026.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const NextRaceWidget = ({ theme })=>{
    const isLight = theme === 'light';
    const C = isLight ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GIRLIE_COLORS"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAPORWAVE_COLORS"];
    // Encontrar a próxima corrida baseado na data atual
    const nextRace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        // Encontrar a primeira corrida que ainda não aconteceu
        const upcoming = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$f1Calendar2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F1_2026_CALENDAR"].find((race)=>{
            const raceDate = new Date(race.endDate);
            return raceDate >= today;
        });
        // Se não encontrar nenhuma corrida futura, retornar a última corrida
        return upcoming || __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$f1Calendar2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F1_2026_CALENDAR"][__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$f1Calendar2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["F1_2026_CALENDAR"].length - 1];
    }, []);
    // Função para obter emoji da bandeira pelo país
    const getCountryFlag = (country)=>{
        const flags = {
            'Austrália': '🇦🇺',
            'China': '🇨🇳',
            'Japão': '🇯🇵',
            'Bahrein': '🇧🇭',
            'Arábia Saudita': '🇸🇦',
            'Estados Unidos': '🇺🇸',
            'Canadá': '🇨🇦',
            'Mônaco': '🇲🇨',
            'Espanha': '🇪🇸',
            'Áustria': '🇦🇹',
            'Reino Unido': '🇬🇧',
            'Bélgica': '🇧🇪',
            'Hungria': '🇭🇺',
            'Países Baixos': '🇳🇱',
            'Itália': '🇮🇹',
            'Azerbaijão': '🇦🇿',
            'Singapura': '🇸🇬',
            'México': '🇲🇽',
            'Brasil': '🇧🇷',
            'Qatar': '🇶🇦',
            'Emirados Árabes Unidos': '🇦🇪'
        };
        return flags[country] || '🏁';
    };
    // Função para obter o nome curto do circuito
    const getCircuitShortName = (location, country)=>{
        // Alguns casos especiais
        if (location === 'Singapore') return 'Marina Bay';
        if (location === 'Monte Carlo') return 'Monaco';
        if (location === 'Sakhir') return 'Bahrain';
        if (location === 'Spielberg') return 'Red Bull Ring';
        if (location === 'Silverstone') return 'Silverstone';
        if (location === 'Spa-Francorchamps') return 'Spa';
        if (location === 'Zandvoort') return 'Zandvoort';
        if (location === 'Monza') return 'Monza';
        if (location === 'Shanghai') return 'Shanghai';
        if (location === 'Suzuka') return 'Suzuka';
        if (location === 'Miami') return 'Miami';
        if (location === 'Las Vegas') return 'Las Vegas';
        if (location === 'Austin') return 'COTA';
        if (location === 'Mexico City') return 'Mexico City';
        if (location === 'São Paulo') return 'Interlagos';
        if (location === 'Lusail') return 'Lusail';
        if (location === 'Abu Dhabi') return 'Yas Marina';
        if (location === 'Melbourne') return 'Albert Park';
        if (location === 'Montreal') return 'Gilles Villeneuve';
        if (location === 'Barcelona') return 'Catalunya';
        if (location === 'Madrid') return 'Madrid';
        if (location === 'Baku') return 'Baku';
        if (location === 'Jeddah') return 'Jeddah';
        return location;
    };
    if (!nextRace) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `h-full flex items-center justify-center p-6 ${isLight ? 'text-gray-400' : 'text-gray-600'}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm font-bold uppercase tracking-wider",
                children: "Sem corridas programadas"
            }, void 0, false, {
                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                lineNumber: 87,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/components/widgets/NextRaceWidget.jsx",
            lineNumber: 86,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    const sessions = nextRace.sessions || [];
    const circuitName = getCircuitShortName(nextRace.location, nextRace.country);
    const countryFlag = getCountryFlag(nextRace.country);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-full flex flex-col p-6 md:p-8 relative overflow-hidden ${isLight ? 'text-gray-800' : 'text-white'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute -right-8 -bottom-16 opacity-[0.07] pointer-events-none rotate-12 transition-transform duration-1000 group-hover:rotate-0 ${isLight ? 'text-pink-900' : 'text-cyan-400'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"], {
                    size: 240
                }, void 0, false, {
                    fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                    lineNumber: 100,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-6 z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] opacity-60 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                size: 11
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                                lineNumber: 108,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " ",
                                            circuitName,
                                            ", ",
                                            nextRace.country
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    nextRace.isSprint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `px-2 py-0.5 rounded-md text-[9px] font-black uppercase flex items-center gap-1 ${isLight ? 'bg-yellow-300 text-orange-900' : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 9,
                                                className: "fill-current"
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                                lineNumber: 116,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " SPRINT"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: countryFlag
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text",
                                        style: {
                                            backgroundImage: isLight ? `linear-gradient(to right, #ec4899, #a855f7)` : `linear-gradient(to right, ${C.neonCyan}, ${C.neonPink})`
                                        },
                                        children: nextRace.title.replace('GP d', '').replace('GP de ', '').replace('GP do', '').replace('GP da', '').toUpperCase()
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `text-[10px] font-bold uppercase tracking-wider mt-1 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                children: [
                                    "Round ",
                                    nextRace.round,
                                    " • 2026"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `px-3 py-1.5 rounded-xl text-[10px] font-bold flex items-center gap-1.5 border shadow-sm ${isLight ? 'bg-white border-pink-100 text-pink-500' : 'bg-black/40 border-cyan-500/30 text-cyan-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                size: 12
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: nextRace.timezoneLabel?.split(' ')[0] || 'BRT'
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 134,
                                columnNumber: 31
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col justify-between gap-2.5 z-10",
                children: sessions.length > 0 ? sessions.map((session, i)=>{
                    const isRace = session.name.toLowerCase().includes('corrida');
                    const isQuali = session.name.toLowerCase().includes('classificação');
                    const isSprint = session.name.toLowerCase().includes('sprint') && !session.name.toLowerCase().includes('quali');
                    const isMain = isRace;
                    const isHighlight = isQuali || isSprint;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center justify-between p-3 rounded-2xl transition-all duration-300 group/item hover:scale-[1.02] hover:px-4 ${isMain ? isLight ? 'shadow-lg shadow-pink-200' : 'shadow-[0_0_15px_rgba(189,0,255,0.4)]' : ''}`,
                        style: isMain ? {
                            background: isLight ? `linear-gradient(90deg, #ec4899, #a855f7)` : `linear-gradient(90deg, ${C.neonRoxo}, ${C.neonPink})`,
                            color: 'white'
                        } : isHighlight ? {
                            background: isLight ? 'white' : 'rgba(0, 255, 242, 0.05)',
                            borderColor: isLight ? '#fbcfe8' : C.neonCyan,
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            color: isLight ? '#333' : 'white'
                        } : {
                            background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.02)',
                            borderColor: isLight ? '#fce7f3' : 'transparent',
                            borderWidth: '1px',
                            borderStyle: 'solid',
                            color: isLight ? '#9ca3af' : '#6b7280'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col items-center justify-center w-10 h-10 rounded-xl font-bold leading-none ${isMain ? 'bg-white/20 text-white backdrop-blur-sm' : isLight ? 'bg-pink-50 text-pink-400' : 'bg-white/5 text-gray-500'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[8px] uppercase opacity-70 tracking-wider mb-0.5",
                                                children: session.day
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                                lineNumber: 159,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm",
                                                children: session.date
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                                lineNumber: 160,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `block text-xs ${isMain || isHighlight ? 'font-black uppercase tracking-wide' : 'font-bold'}`,
                                            children: session.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                            lineNumber: 163,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                        lineNumber: 162,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            session.time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-mono font-bold tracking-tight ${isMain ? 'text-base' : 'text-sm opacity-80'}`,
                                children: session.time
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                                lineNumber: 169,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, i, true, {
                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                        lineNumber: 148,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `text-center py-8 ${isLight ? 'text-gray-400' : 'text-gray-600'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-wider",
                        children: "Horários a confirmar"
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/NextRaceWidget.jsx",
                lineNumber: 139,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/NextRaceWidget.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/widgets/NewsWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsWidget",
    ()=>NewsWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/theme.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const NewsWidget = ({ theme, posts, onNewsClick })=>{
    const isLight = theme === 'light';
    const loading = !posts || posts.length === 0;
    const displayPosts = posts || [];
    const C = __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAPORWAVE_COLORS"];
    const getBadgeStyle = (type)=>type === 'article' ? isLight ? {
            background: `linear-gradient(90deg, #ec4899, #a855f7)`,
            color: 'white'
        } : {
            borderColor: C.neonPink,
            color: C.neonPink,
            border: '1px solid',
            boxShadow: `0 0 5px ${C.neonPink}`
        } : isLight ? {
            backgroundColor: '#e0f2fe',
            color: '#0284c7'
        } : {
            borderColor: C.neonCyan,
            color: C.neonCyan,
            border: '1px solid',
            boxShadow: `0 0 5px ${C.neonCyan}`
        };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col h-full min-h-0 relative p-6 md:p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-6 px-1 shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-2 rounded-xl ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-white/10 text-cyan-400 border border-cyan-500/30'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"], {
                                size: 22
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsWidget.jsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `text-sm font-black uppercase tracking-[0.2em] ${isLight ? 'text-gray-600' : 'text-white'}`,
                            children: "Últimas do Paddock"
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/widgets/NewsWidget.jsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/NewsWidget.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col gap-4 overflow-y-auto pr-3 custom-scrollbar pb-2",
                children: [
                    loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 flex flex-col items-center justify-center opacity-60 gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 32,
                                className: `animate-spin ${isLight ? 'text-pink-400' : 'text-cyan-400'}`
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsWidget.jsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-bold tracking-wide",
                                children: "Buscando fofocas..."
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsWidget.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/NewsWidget.jsx",
                        lineNumber: 38,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !loading && displayPosts.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>onNewsClick?.(item),
                            className: `group relative flex items-stretch gap-4 p-4 rounded-3xl text-left border transition-all duration-300 cursor-pointer shrink-0 
              ${isLight ? "bg-white border-pink-50 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-100 hover:-translate-y-1" : "bg-[#0a0a12]/60 hover:bg-[#121217] border-white/5 hover:border-fuchsia-500/50 hover:shadow-[0_0_15px_rgba(189,0,255,0.2)] hover:-translate-y-1"}`,
                            children: [
                                item.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 shrink-0 rounded-2xl overflow-hidden relative shadow-md self-center aspect-square",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: item.image,
                                            alt: item.title,
                                            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                                            lineNumber: 56,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                                            lineNumber: 61,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/widgets/NewsWidget.jsx",
                                    lineNumber: 55,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 flex flex-col justify-center py-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm whitespace-nowrap",
                                                    style: getBadgeStyle(item.type),
                                                    children: item.category?.title || item.category || 'Geral'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/widgets/NewsWidget.jsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[10px] font-bold opacity-50 ${isLight ? "text-gray-500" : "text-gray-400"}`,
                                                    children: item.dateObj ? item.dateObj.toLocaleDateString('pt-BR', {
                                                        day: '2-digit',
                                                        month: 'short'
                                                    }) : ''
                                                }, void 0, false, {
                                                    fileName: "[project]/components/widgets/NewsWidget.jsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: `text-sm md:text-[15px] font-bold leading-snug line-clamp-3 ${isLight ? "text-gray-800" : "text-gray-200 group-hover:text-white"} transition-colors`,
                                            children: item.title
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/widgets/NewsWidget.jsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/NewsWidget.jsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsWidget.jsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, item._id || idx, true, {
                            fileName: "[project]/components/widgets/NewsWidget.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/NewsWidget.jsx",
                lineNumber: 36,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute bottom-0 left-0 right-0 h-8 pointer-events-none bg-gradient-to-t ${isLight ? 'from-white/80' : 'from-[#090912]/80'} to-transparent`
            }, void 0, false, {
                fileName: "[project]/components/widgets/NewsWidget.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/NewsWidget.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/data/standings2026.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/components/widgets/SeasonWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SeasonWidget",
    ()=>SeasonWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/standings2026.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const SeasonWidget = ({ theme })=>{
    const isLight = theme === 'light';
    const C = isLight ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GIRLIE_COLORS"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAPORWAVE_COLORS"];
    // Estados para dados da API
    const [driversData, setDriversData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRIVERS_STANDINGS"]);
    const [constructorsData, setConstructorsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSTRUCTORS_STANDINGS"]);
    const [seasonStats, setSeasonStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEASON_STATS"]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [usingAPI, setUsingAPI] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Mapeamento de cores por equipe (você pode personalizar)
    const TEAM_COLORS = {
        'Red Bull': '#3671C6',
        'Ferrari': '#E8002D',
        'Mercedes': '#27F4D2',
        'McLaren': '#FF8000',
        'Aston Martin': '#229971',
        'Alpine': '#FF87BC',
        'Williams': '#64C4FF',
        'RB': '#6692FF',
        'Kick Sauber': '#52E252',
        'Haas F1 Team': '#B6BABD'
    };
    // Função para buscar dados da API
    const fetchAPIData = async ()=>{
        setLoading(true);
        try {
            // Busca em paralelo: pilotos, construtores e última corrida
            const [driversRes, constructorsRes, lastRaceRes] = await Promise.all([
                fetch('https://ergast.com/api/f1/current/driverStandings.json'),
                fetch('https://ergast.com/api/f1/current/constructorStandings.json'),
                fetch('https://ergast.com/api/f1/current/last/results.json')
            ]);
            if (!driversRes.ok || !constructorsRes.ok) {
                throw new Error('API não disponível');
            }
            const driversJson = await driversRes.json();
            const constructorsJson = await constructorsRes.json();
            const lastRaceJson = await lastRaceRes.json();
            // Processar dados de pilotos
            const apiDrivers = driversJson.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
            const formattedDrivers = apiDrivers.map((driver)=>{
                const teamName = driver.Constructors[0]?.name || 'Unknown';
                return {
                    position: parseInt(driver.position),
                    driverName: `${driver.Driver.givenName} ${driver.Driver.familyName}`,
                    team: teamName,
                    teamColor: TEAM_COLORS[teamName] || '#999999',
                    points: parseInt(driver.points),
                    wins: parseInt(driver.wins)
                };
            });
            // Processar dados de construtores
            const apiConstructors = constructorsJson.MRData.StandingsTable.StandingsLists[0]?.ConstructorStandings || [];
            const formattedConstructors = apiConstructors.map((team)=>({
                    position: parseInt(team.position),
                    teamName: team.Constructor.name,
                    teamShortName: team.Constructor.name.split(' ')[0].toUpperCase(),
                    teamColor: TEAM_COLORS[team.Constructor.name] || '#999999',
                    points: parseInt(team.points),
                    wins: parseInt(team.wins)
                }));
            // Processar stats da temporada
            const raceData = lastRaceJson.MRData.RaceTable;
            const currentRound = raceData.Races?.[0]?.round || 0;
            const season = raceData.season || '2025';
            const updatedStats = {
                currentRound: parseInt(currentRound),
                totalRaces: 24,
                racesCompleted: parseInt(currentRound),
                season: season
            };
            // Atualizar estados
            setDriversData(formattedDrivers);
            setConstructorsData(formattedConstructors);
            setSeasonStats(updatedStats);
            setUsingAPI(true);
        } catch (error) {
            console.error('Erro ao buscar dados da API:', error);
            // Em caso de erro, manter dados manuais
            setDriversData(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRIVERS_STANDINGS"]);
            setConstructorsData(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONSTRUCTORS_STANDINGS"]);
            setSeasonStats(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SEASON_STATS"]);
            setUsingAPI(false);
        } finally{
            setLoading(false);
        }
    };
    // Buscar dados ao montar componente
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAPIData();
    }, []);
    // Top 5 pilotos do standings
    const topDrivers = driversData.slice(0, 5).map((driver)=>({
            pos: driver.position,
            name: driver.driverName.split(' ').map((n, i, arr)=>i === 0 ? n.charAt(0) + '.' : n).join(' '),
            team: driver.team.split(' ')[0].substring(0, 3).toUpperCase(),
            pts: driver.points,
            color: driver.teamColor,
            wins: driver.wins
        }));
    // Top 3 construtores
    const constructors = constructorsData.slice(0, 3).map((team, index)=>{
        const maxPoints = Math.max(...constructorsData.map((t)=>t.points)) || 1;
        const percent = maxPoints > 0 ? `${Math.round(team.points / maxPoints * 100)}%` : '0%';
        return {
            name: team.teamShortName,
            pts: team.points,
            color: team.teamColor,
            percent: team.points === 0 ? '0%' : percent
        };
    });
    const boxClass = isLight ? 'bg-white border-pink-100 shadow-sm' : 'bg-[#0a0a10] border-white/5';
    // Status da temporada
    const seasonStatus = seasonStats.racesCompleted === 0 ? 'Pré-Temporada' : seasonStats.racesCompleted >= seasonStats.totalRaces ? 'Campeonato Encerrado' : `Round ${seasonStats.currentRound} de ${seasonStats.totalRaces}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-full flex flex-col justify-between p-6 md:p-8 relative overflow-hidden text-left ${isLight ? 'text-gray-800' : 'text-white'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -right-10 -top-10 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none",
                style: {
                    background: isLight ? C.azul : C.neonCyan
                }
            }, void 0, false, {
                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                lineNumber: 149,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-start mb-6 z-10 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-3 rounded-2xl shadow-sm ${isLight ? 'bg-purple-50 text-purple-400' : 'bg-white/10 text-fuchsia-400 border border-fuchsia-500/20'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base font-black uppercase leading-none tracking-wide text-transparent bg-clip-text",
                                        style: {
                                            backgroundImage: isLight ? `linear-gradient(to right, ${C.roxo}, ${C.rosa})` : `linear-gradient(to right, ${C.neonCyan}, ${C.neonPink})`
                                        },
                                        children: [
                                            "Temporada ",
                                            seasonStats.season || '2026'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 161,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[10px] font-bold uppercase tracking-wider mt-1 ${seasonStats.racesCompleted === 0 ? isLight ? 'text-cyan-600' : 'text-cyan-400' : 'opacity-50'} ${isLight ? 'text-gray-500' : 'text-gray-400'}`,
                                        children: seasonStatus
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            seasonStats.racesCompleted === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider animate-pulse ${isLight ? 'bg-cyan-100 text-cyan-600' : 'bg-cyan-900/30 text-cyan-400 border border-cyan-500/30'}`,
                                children: "Em Breve"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 179,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: fetchAPIData,
                                disabled: loading,
                                className: `p-2 rounded-full transition-all hover:scale-110 active:scale-95 ${isLight ? 'bg-gray-100 text-gray-600 hover:bg-gray-200' : 'bg-white/10 text-gray-400 hover:bg-white/20'} ${loading ? 'animate-spin' : ''}`,
                                title: "Atualizar dados",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                lineNumber: 155,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 grid grid-cols-1 gap-4 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-3xl p-4 border flex flex-col justify-center ${boxClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-3 px-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `text-[9px] font-black uppercase tracking-[0.2em] opacity-50 ${isLight ? 'text-gray-600' : 'text-gray-400'}`,
                                        children: "Top 5 Pilotos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-bold opacity-30",
                                        children: "PTS"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            seasonStats.racesCompleted === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        className: `mx-auto mb-2 opacity-20 ${isLight ? 'text-gray-400' : 'text-gray-600'}`,
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 214,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                        children: "Aguardando primeira corrida"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 215,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: topDrivers.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `font-mono w-5 text-[10px] text-center rounded-lg py-0.5 ${d.pos === 1 && d.pts > 0 ? 'bg-yellow-100 text-yellow-600 font-bold' : 'opacity-40'}`,
                                                        children: d.pos
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                        lineNumber: 224,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 rounded-full shadow-[0_0_5px_currentColor]",
                                                        style: {
                                                            backgroundColor: d.color,
                                                            color: d.color
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                        lineNumber: 231,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `truncate max-w-[100px] ${d.pos === 1 && d.pts > 0 ? 'font-bold' : 'font-medium'}`,
                                                        children: d.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                        lineNumber: 235,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    d.wins > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-[8px] ${isLight ? 'text-yellow-600' : 'text-yellow-400'}`,
                                                        children: d.wins === 1 ? '🏆' : `🏆×${d.wins}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                        lineNumber: 239,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                lineNumber: 223,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono font-medium opacity-60 text-[11px] group-hover:opacity-100 transition-opacity",
                                                children: d.pts
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                lineNumber: 244,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, d.pos, true, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-3xl p-4 border flex flex-col justify-center ${boxClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 mb-3 px-1 opacity-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] font-black uppercase tracking-[0.2em]",
                                        children: "Construtores"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 257,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            seasonStats.racesCompleted === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"], {
                                        className: `mx-auto mb-2 opacity-20 ${isLight ? 'text-gray-400' : 'text-gray-600'}`,
                                        size: 32
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 262,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[10px] font-bold uppercase tracking-wider ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                                        children: "Aguardando primeira corrida"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 261,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: constructors.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between text-[10px] font-bold mb-1.5 px-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: t.color
                                                        },
                                                        children: t.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono opacity-60",
                                                        children: t.pts
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-full h-2 rounded-full overflow-hidden ${isLight ? 'bg-pink-50' : 'bg-white/10'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-full rounded-full transition-all duration-1000 ease-out origin-left hover:brightness-110 shadow-[0_0_5px_currentColor]",
                                                    style: {
                                                        width: t.pts === 0 ? '0%' : t.percent,
                                                        backgroundColor: t.color,
                                                        color: t.color
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                                lineNumber: 275,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                        lineNumber: 270,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 268,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                        lineNumber: 254,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                lineNumber: 202,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 pt-4 border-t border-dashed flex justify-between items-center ${isLight ? 'border-pink-200' : 'border-white/10'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/standings",
                        className: `text-[10px] font-bold uppercase tracking-widest py-2 px-5 rounded-full transition-all flex items-center gap-2 hover:scale-105 ${isLight ? 'bg-gray-50 text-gray-400 hover:text-gray-600' : 'bg-white/5 text-gray-500 hover:text-white border border-white/5 hover:border-cyan-500/50'}`,
                        children: [
                            "Ver Classificação ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                size: 10
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                                lineNumber: 302,
                                columnNumber: 29
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                        lineNumber: 294,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    usingAPI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[8px] font-medium tracking-wide ${isLight ? 'text-gray-400' : 'text-gray-600'}`,
                        children: "API ativa"
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/SeasonWidget.jsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/SeasonWidget.jsx",
                lineNumber: 293,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/SeasonWidget.jsx",
        lineNumber: 147,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/widgets/SimpleWidgets.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContactWidget",
    ()=>ContactWidget,
    "CuriosityWidget",
    ()=>CuriosityWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-ssr] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
'use client';
;
;
;
const ContactWidget = ({ theme })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col items-center justify-center text-center p-4 relative z-10 group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-4 rounded-full mb-3 transition-transform duration-300 group-hover:rotate-12 ${isLight ? 'bg-pink-50 text-pink-400' : 'bg-black/40 text-cyan-400 border border-cyan-500/20'}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    size: 28
                }, void 0, false, {
                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: `font-black text-lg ${isLight ? 'text-gray-800' : 'text-white'}`,
                children: "Contato"
            }, void 0, false, {
                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-[10px] font-bold uppercase tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`,
                children: "Mande um alô"
            }, void 0, false, {
                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const CuriosityWidget = ({ theme })=>{
    const isLight = theme === 'light';
    const [isOpen, setIsOpen] = useState(false);
    const [currentCuriosity, setCurrentCuriosity] = useState(null);
    // Selecionar uma curiosidade aleatória ao montar o componente ou atualizar a página
    useEffect(()=>{
        const randomCuriosity = CURIOSITIES_DATA[Math.floor(Math.random() * CURIOSITIES_DATA.length)];
        setCurrentCuriosity(randomCuriosity);
    }, []);
    // Função para pegar uma nova curiosidade aleatória
    const getNewCuriosity = ()=>{
        const randomCuriosity = CURIOSITIES_DATA[Math.floor(Math.random() * CURIOSITIES_DATA.length)];
        setCurrentCuriosity(randomCuriosity);
    };
    // Estado fechado - Preview
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>setIsOpen(true),
            className: "h-full flex flex-col items-center justify-center text-center p-6 relative z-10 cursor-pointer group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl",
                    style: {
                        background: isLight ? 'radial-gradient(circle at center, rgba(234, 179, 8, 0.1) 0%, transparent 70%)' : 'radial-gradient(circle at center, rgba(234, 179, 8, 0.2) 0%, transparent 70%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-4 rounded-full mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 ${isLight ? 'bg-yellow-100 text-yellow-500' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                        size: 28,
                        className: "fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                    className: `font-black text-lg leading-tight mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`,
                    children: "Você Sabia?"
                }, void 0, false, {
                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                currentCuriosity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-xs font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-yellow-600' : 'text-yellow-400'}`,
                    children: currentCuriosity.category
                }, void 0, false, {
                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                    lineNumber: 66,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `text-[10px] uppercase font-bold tracking-widest opacity-60 ${isLight ? 'text-gray-500' : 'text-gray-400'}`,
                    children: "Clique para descobrir"
                }, void 0, false, {
                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/widgets/SimpleWidgets.jsx",
            lineNumber: 41,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Estado aberto - Mostrando a curiosidade
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col p-6 relative z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-xl ${isLight ? 'bg-yellow-100 text-yellow-500' : 'bg-yellow-500/10 text-yellow-400'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                    size: 20,
                                    className: "fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-sm font-black uppercase leading-none ${isLight ? 'text-gray-800' : 'text-white'}`,
                                        children: "Você Sabia?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    currentCuriosity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[9px] font-bold uppercase tracking-wider opacity-60 mt-0.5 ${isLight ? 'text-gray-500' : 'text-gray-400'}`,
                                        children: currentCuriosity.category
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                lineNumber: 93,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(false),
                        className: `p-2 rounded-lg transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-400 hover:text-gray-600' : 'hover:bg-white/5 text-gray-500 hover:text-white'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(X, {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            currentCuriosity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-6 rounded-2xl mb-4 ${isLight ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200' : 'bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-500/30'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: `text-lg font-black mb-3 ${isLight ? 'text-gray-800' : 'text-yellow-400'}`,
                                children: currentCuriosity.title
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                lineNumber: 128,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-sm font-medium leading-relaxed ${isLight ? 'text-gray-700' : 'text-gray-300'}`,
                                children: currentCuriosity.fact
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: getNewCuriosity,
                        className: `w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 group ${isLight ? 'bg-yellow-500 text-white hover:bg-yellow-600 shadow-lg hover:shadow-xl' : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50 hover:bg-yellow-500/30 hover:border-yellow-400'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(RefreshCw, {
                                size: 14,
                                className: "group-hover:rotate-180 transition-transform duration-500"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                                lineNumber: 149,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            "Nova Curiosidade"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                        lineNumber: 141,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                lineNumber: 122,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 text-center text-[9px] font-bold uppercase tracking-wider opacity-50 ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                children: [
                    CURIOSITIES_DATA.length,
                    " curiosidades disponíveis"
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/SimpleWidgets.jsx",
                lineNumber: 156,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/SimpleWidgets.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/widgets/NewsletterWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "KpopPhotocard",
    ()=>KpopPhotocard,
    "NewsletterWidget",
    ()=>NewsletterWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-ssr] (ecmascript) <export default as RotateCcw>");
'use client';
;
;
;
const NewsletterWidget = ({ theme })=>{
    const isLight = theme === "light";
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!email) return;
        try {
            setStatus("loading");
            await new Promise((r)=>setTimeout(r, 1500));
            setStatus("success");
            setEmail("");
        } catch (error) {
            setStatus("error");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col items-center justify-center p-6 md:p-10 gap-6 relative z-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                className: `absolute -right-4 -top-4 w-40 h-40 opacity-5 pointer-events-none rotate-12 ${isLight ? 'text-purple-600' : 'text-cyan-500'}`
            }, void 0, false, {
                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center text-center gap-4 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-5 md:p-6 rounded-3xl shadow-md ${isLight ? "bg-white text-purple-400" : "bg-[#1a1a20] border border-fuchsia-500/30 text-fuchsia-400"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                            size: 32
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `font-black text-xl md:text-2xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`,
                                children: "Newsletter"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `text-xs md:text-sm font-medium ${isLight ? 'text-gray-400' : 'text-cyan-200'}`,
                                children: "Fofocas quentinhas na sua caixa de entrada."
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "flex flex-col sm:flex-row gap-3 md:gap-4 w-full max-w-lg relative z-10",
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex-1 group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "email",
                            placeholder: "seu@email.com",
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            className: `w-full h-12 md:h-14 px-5 md:px-6 rounded-2xl text-sm md:text-base font-bold outline-none transition-all text-center sm:text-left ${isLight ? "bg-white border-2 border-transparent focus:border-pink-300 text-gray-800 placeholder-gray-300 shadow-md" : "bg-[#0a0a12] border border-[#333] focus:border-cyan-400 text-white placeholder-gray-600"}`
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === "loading" || status === "success",
                        className: `h-12 md:h-14 px-6 md:px-10 rounded-2xl font-black text-xs md:text-sm uppercase tracking-wider transition-all active:scale-95 whitespace-nowrap shadow-xl flex items-center justify-center gap-3 ${isLight ? "bg-gray-900 hover:bg-black text-white hover:shadow-2xl" : "bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-[0_0_20px_rgba(192,38,211,0.4)] hover:shadow-[0_0_30px_rgba(192,38,211,0.6)]"} ${status === "success" ? "bg-green-500 hover:bg-green-600" : ""}`,
                        children: [
                            status === "loading" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                size: 18,
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                lineNumber: 59,
                                columnNumber: 36
                            }, ("TURBOPACK compile-time value", void 0)),
                            status === "success" ? "Enviado!" : "Assinar"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            status === "success" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 ${isLight ? 'text-green-600' : 'text-green-400'}`,
                children: "✓ Você será notificado das novidades!"
            }, void 0, false, {
                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                lineNumber: 66,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-2 ${isLight ? 'text-red-600' : 'text-red-400'}`,
                children: "✗ Ops! Algo deu errado. Tente novamente."
            }, void 0, false, {
                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                lineNumber: 74,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const KpopPhotocard = ({ driver, theme, onClick })=>{
    const isLight = theme === 'light';
    const [isFlipped, setIsFlipped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const surname = driver.name.split(' ').slice(-1)[0].toLowerCase();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative w-full aspect-[3/4.2] cursor-pointer",
        style: {
            perspective: '1200px'
        },
        onClick: (e)=>{
            e.stopPropagation();
            setIsFlipped(!isFlipped);
            if (onClick) onClick();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-full transition-all duration-700 ease-out-back",
            style: {
                transformStyle: 'preserve-3d',
                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 rounded-[2.5rem] overflow-hidden ${isLight ? 'border-[8px] border-white ring-4 ring-pink-200 shadow-2xl' : 'border-[6px] border-[#1a1a20] ring-4 ring-fuchsia-500/50 shadow-[0_0_30px_rgba(232,121,249,0.3)]'} bg-gray-200 z-10`,
                    style: {
                        backfaceVisibility: 'hidden'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: driver.photocardImage,
                            alt: driver.name,
                            className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-4 right-5 text-8xl font-black text-white opacity-20 pointer-events-none tracking-tighter mix-blend-overlay",
                            children: driver.number
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-full p-6 z-10 flex flex-col items-center text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-4xl font-black text-white leading-none drop-shadow-lg tracking-tighter uppercase mb-2",
                                    children: surname
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 text-white/90 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse bg-white/20 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " Virar"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 rounded-[2.5rem] p-6 flex flex-col justify-between text-center ${isLight ? 'bg-gradient-to-br from-pink-50 via-white to-purple-50 border-[8px] border-white ring-4 ring-pink-200' : 'bg-[#09090c] border-[6px] border-[#1a1a20] ring-4 ring-cyan-500/50 shadow-[0_0_20px_rgba(0,255,242,0.3)]'}`,
                    style: {
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-24 h-24 rounded-full overflow-hidden border-4 shadow-lg ${isLight ? 'border-pink-300' : 'border-cyan-400'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: driver.photocardImage,
                                        className: "w-full h-full object-cover",
                                        alt: "Avatar"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-black text-2xl leading-none ${isLight ? 'text-gray-800' : 'text-white'}`,
                                            children: driver.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                            lineNumber: 136,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `inline-block mt-2 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${isLight ? 'bg-pink-100 text-pink-600' : 'bg-fuchsia-900/30 text-fuchsia-300 border border-fuchsia-500/30'}`,
                                            children: driver.team
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex justify-center gap-4 text-xs font-bold uppercase tracking-widest ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: driver.zodiac
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "#",
                                        driver.number
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `p-5 rounded-2xl text-sm italic font-medium relative mx-2 ${isLight ? 'bg-white/80 text-gray-600 shadow-inner ring-1 ring-pink-100' : 'bg-[#1a1a20] text-cyan-200 border border-cyan-500/20'}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -top-3 -left-2 text-4xl opacity-20 font-serif",
                                    children: '"'
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                driver.secretFact,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "absolute -bottom-5 -right-2 text-4xl opacity-20 font-serif",
                                    children: '"'
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 149,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 transform -rotate-6 opacity-60 pb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `font-handwriting text-3xl ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`,
                                style: {
                                    fontFamily: 'cursive'
                                },
                                children: driver.signature
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/widgets/NewsletterWidget.jsx",
                    lineNumber: 127,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/widgets/NewsletterWidget.jsx",
            lineNumber: 99,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/widgets/NewsletterWidget.jsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/data/drivers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DRIVERS_DATA",
    ()=>DRIVERS_DATA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gamepad-2.js [app-ssr] (ecmascript) <export default as Gamepad2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/utensils.js [app-ssr] (ecmascript) <export default as Utensils>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smile.js [app-ssr] (ecmascript) <export default as Smile>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-ssr] (ecmascript) <export default as Briefcase>");
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
                label: 'Sim Racer'
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$utensils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Utensils$3e$__["Utensils"],
                label: 'Pasta Lover'
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gamepad$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gamepad2$3e$__["Gamepad2"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smile$3e$__["Smile"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
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
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"],
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
}),
"[project]/components/widgets/FanzoneWidget.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FanzoneWidget",
    ()=>FanzoneWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/theme.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/drivers.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
const FanzoneWidget = ({ theme })=>{
    const isLight = theme === 'light';
    const C = isLight ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GIRLIE_COLORS"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VAPORWAVE_COLORS"];
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDriver, setSelectedDriver] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasVoted, setHasVoted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [votes, setVotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    // Carregar votos do localStorage
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const savedVotes = localStorage.getItem('dotd_votes');
        const userVote = localStorage.getItem('dotd_user_vote');
        if (savedVotes) {
            setVotes(JSON.parse(savedVotes));
        }
        if (userVote) {
            setSelectedDriver(userVote);
            setHasVoted(true);
        }
    }, []);
    // Função para votar
    const handleVote = (driverId)=>{
        if (hasVoted) return;
        // Atualizar votos
        const newVotes = {
            ...votes
        };
        newVotes[driverId] = (newVotes[driverId] || 0) + 1;
        setVotes(newVotes);
        setSelectedDriver(driverId);
        setHasVoted(true);
        // Salvar no localStorage
        localStorage.setItem('dotd_votes', JSON.stringify(newVotes));
        localStorage.setItem('dotd_user_vote', driverId);
    };
    // Função para resetar voto (apenas para testes)
    const handleReset = ()=>{
        localStorage.removeItem('dotd_user_vote');
        setHasVoted(false);
        setSelectedDriver(null);
        setIsOpen(false);
    };
    // Calcular líder atual
    const currentLeader = Object.entries(votes).sort((a, b)=>b[1] - a[1])[0];
    const leaderDriver = currentLeader ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRIVERS_DATA"].find((d)=>d.id === currentLeader[0]) : null;
    const totalVotes = Object.values(votes).reduce((sum, v)=>sum + v, 0);
    // Ordenar pilotos por votos
    const driversWithVotes = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRIVERS_DATA"].map((driver)=>({
            ...driver,
            voteCount: votes[driver.id] || 0,
            percentage: totalVotes > 0 ? ((votes[driver.id] || 0) / totalVotes * 100).toFixed(1) : 0
        })).sort((a, b)=>b.voteCount - a.voteCount);
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            onClick: ()=>setIsOpen(true),
            className: "h-full flex flex-col items-center justify-center p-6 text-center relative z-10 group cursor-pointer",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
                    style: {
                        background: isLight ? 'radial-gradient(circle at center, rgba(236, 72, 153, 0.1) 0%, transparent 70%)' : 'radial-gradient(circle at center, rgba(168, 85, 247, 0.2) 0%, transparent 70%)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `p-5 rounded-full mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg ${isLight ? 'bg-pink-50 text-pink-400 ring-4 ring-pink-100' : 'bg-black/40 text-fuchsia-400 ring-2 ring-fuchsia-500/50 shadow-[0_0_15px_rgba(232,121,249,0.4)]'}`,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: `font-black text-xl mb-1 ${isLight ? 'text-gray-800' : 'text-white'}`,
                    children: "Fanzone"
                }, void 0, false, {
                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-xs uppercase font-bold tracking-widest mb-3 ${isLight ? 'text-pink-500' : 'text-fuchsia-400'}`,
                    children: "Driver of The Day"
                }, void 0, false, {
                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                hasVoted && leaderDriver ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `inline-flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-wider ${isLight ? 'bg-gradient-to-r from-pink-100 to-purple-100 text-pink-600' : 'bg-gradient-to-r from-fuchsia-900/30 to-cyan-900/30 text-fuchsia-300 border border-fuchsia-500/30'}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                size: 12,
                                className: "text-yellow-500"
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                lineNumber: 109,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            leaderDriver.name.split(' ').pop(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "opacity-60",
                                children: [
                                    "• ",
                                    totalVotes,
                                    " votos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 104,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                    lineNumber: 103,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: `text-[10px] uppercase font-bold tracking-widest opacity-50 ${isLight ? 'text-gray-500' : 'text-cyan-200'}`,
                    children: "Clique para votar"
                }, void 0, false, {
                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                    lineNumber: 115,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full flex flex-col p-6 relative z-10 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-2 rounded-xl ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-fuchsia-900/30 text-fuchsia-400'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                    lineNumber: 133,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-sm font-black uppercase leading-none ${isLight ? 'text-gray-800' : 'text-white'}`,
                                        children: "Driver of The Day"
                                    }, void 0, false, {
                                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `text-[9px] font-bold uppercase tracking-wider opacity-60 mt-0.5 ${isLight ? 'text-gray-500' : 'text-gray-400'}`,
                                        children: [
                                            totalVotes,
                                            " voto",
                                            totalVotes !== 1 ? 's' : ''
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                        lineNumber: 141,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsOpen(false),
                        className: `p-2 rounded-lg transition-colors ${isLight ? 'hover:bg-gray-100 text-gray-400 hover:text-gray-600' : 'hover:bg-white/5 text-gray-500 hover:text-white'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            size: 16
                        }, void 0, false, {
                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                lineNumber: 128,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-pink-300 dark:scrollbar-thumb-fuchsia-500/30 scrollbar-track-transparent",
                children: driversWithVotes.map((driver)=>{
                    const isSelected = selectedDriver === driver.id;
                    const isTopVoted = driver.voteCount > 0 && driver.voteCount === driversWithVotes[0].voteCount;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>!hasVoted && handleVote(driver.id),
                        disabled: hasVoted,
                        className: `w-full p-3 rounded-2xl transition-all duration-300 text-left group/driver ${hasVoted ? 'cursor-default' : 'cursor-pointer hover:scale-[1.02]'} ${isSelected ? isLight ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg' : 'bg-gradient-to-r from-fuchsia-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]' : isLight ? 'bg-white hover:bg-pink-50 border border-pink-100' : 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-500/30'}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3 flex-1 min-w-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-1.5 h-10 rounded-full shrink-0",
                                            style: {
                                                backgroundColor: driver.color
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                            lineNumber: 188,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-sm font-black truncate ${isSelected ? 'text-white' : isLight ? 'text-gray-800' : 'text-white'}`,
                                                            children: driver.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                            lineNumber: 196,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isSelected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            size: 14,
                                                            className: "shrink-0 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        isTopVoted && totalVotes > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {
                                                            size: 12,
                                                            className: "shrink-0 text-yellow-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                            lineNumber: 205,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                    lineNumber: 195,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[10px] font-bold ${isSelected ? 'text-white/80' : isLight ? 'text-gray-500' : 'text-gray-400'}`,
                                                            children: [
                                                                "#",
                                                                driver.number,
                                                                " • ",
                                                                driver.team
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                            lineNumber: 209,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        driver.voteCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `text-[9px] font-mono font-bold ${isSelected ? 'text-white/60' : isLight ? 'text-pink-500' : 'text-fuchsia-400'}`,
                                                            children: [
                                                                driver.percentage,
                                                                "%"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                            lineNumber: 215,
                                                            columnNumber: 25
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                    lineNumber: 186,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                driver.voteCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `px-3 py-1 rounded-lg text-xs font-bold shrink-0 ${isSelected ? 'bg-white/20 text-white' : isLight ? 'bg-pink-100 text-pink-600' : 'bg-fuchsia-900/30 text-fuchsia-300'}`,
                                    children: driver.voteCount
                                }, void 0, false, {
                                    fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                                    lineNumber: 227,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                            lineNumber: 185,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, driver.id, false, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 167,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                lineNumber: 161,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            hasVoted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mt-4 pt-4 border-t text-center ${isLight ? 'border-pink-100' : 'border-white/10'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-[10px] font-bold uppercase tracking-wider mb-2 ${isLight ? 'text-gray-500' : 'text-gray-400'}`,
                        children: "✓ Voto computado"
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 248,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReset,
                        className: `text-[9px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity ${isLight ? 'text-gray-400' : 'text-gray-500'}`,
                        children: "Redefinir voto"
                    }, void 0, false, {
                        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                        lineNumber: 253,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/widgets/FanzoneWidget.jsx",
                lineNumber: 245,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/widgets/FanzoneWidget.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/components/widgets/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$NextRaceWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/NextRaceWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$NewsWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/NewsWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$SeasonWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/SeasonWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$SimpleWidgets$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/SimpleWidgets.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$NewsletterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/NewsletterWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$FanzoneWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/FanzoneWidget.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
}),
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
"[project]/data/glossary.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GLOSSARY_DATA",
    ()=>GLOSSARY_DATA,
    "GLOSSARY_SETS",
    ()=>GLOSSARY_SETS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book.js [app-ssr] (ecmascript) <export default as Book>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/radio.js [app-ssr] (ecmascript) <export default as Radio>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-dot.js [app-ssr] (ecmascript) <export default as CircleDot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/flag.js [app-ssr] (ecmascript) <export default as Flag>");
;
const GLOSSARY_SETS = [
    {
        id: 'general',
        title: "Dicionário Geral A-Z",
        description: "Termos essenciais para entender o que os narradores dizem.",
        color: "#caa5d8",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Book$3e$__["Book"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$radio$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Radio$3e$__["Radio"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$dot$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleDot$3e$__["CircleDot"],
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Flag$3e$__["Flag"],
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
}),
"[project]/data/calendar.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/data/news.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/data/ui-config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wrench.js [app-ssr] (ecmascript) <export default as Wrench>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/headphones.js [app-ssr] (ecmascript) <export default as Headphones>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/newspaper.js [app-ssr] (ecmascript) <export default as Newspaper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
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
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
        url: 'https://instagram.com/autamubilismo',
        label: 'Instagram'
    },
    {
        id: 'twitter',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"],
        url: 'https://twitter.com/autamubilismo',
        label: 'Twitter'
    },
    {
        id: 'youtube',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"],
        url: 'https://tiktok.com/@autamubilismo',
        label: 'Youtube'
    },
    {
        id: 'mail',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        url: 'mailto:contato@autamubilismo.com',
        label: 'Email'
    }
];
const SITE_MAP = [
    {
        id: 'home',
        label: 'Home',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
        path: '/',
        desc: 'Painel Principal'
    },
    {
        id: 'news',
        label: 'Notícias',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$newspaper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Newspaper$3e$__["Newspaper"],
        path: '/news',
        desc: 'Últimas do Paddock'
    },
    {
        id: 'season',
        label: 'Temporada',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
        path: '/season',
        desc: 'Calendário & Pontos'
    },
    {
        id: 'drivers',
        label: 'Pilotos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
        path: '/drivers',
        desc: 'Grid de 2025'
    },
    {
        id: 'teams',
        label: 'Equipes',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wrench$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wrench$3e$__["Wrench"],
        path: '/teams',
        desc: 'Carros & Motores'
    },
    {
        id: 'fanzone',
        label: 'Fanzone',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
        path: '/fanzone',
        desc: 'Comunidade & Artes'
    },
    {
        id: 'curiosities',
        label: 'Curiosidades',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        path: '/curiosities',
        desc: 'Fatos & História'
    },
    {
        id: 'glossary',
        label: 'Glossário',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
        path: '/glossary',
        desc: 'Dicionário da F1'
    },
    {
        id: 'articles',
        label: 'Artigos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"],
        path: '/articles',
        desc: 'Análises & Opinião'
    },
    {
        id: 'media',
        label: 'Multimídia',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$headphones$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Headphones$3e$__["Headphones"],
        path: '/media',
        desc: 'Playlists & Vídeos'
    },
    {
        id: 'contact',
        label: 'Contato',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
        path: '/contact',
        desc: 'Fale com a gente'
    },
    {
        id: 'credits',
        label: 'Créditos',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
        path: '/credits',
        desc: 'Quem faz'
    }
];
}),
"[project]/data/curiosities.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/data/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/drivers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$teams$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/teams.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$glossary$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/glossary.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/calendar.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$news$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/news.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$ui$2d$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/ui-config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$standings2026$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/standings2026.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$curiosities$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/curiosities.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/components/ui/LogoHelmet.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LogoHelmet",
    ()=>LogoHelmet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/theme.js [app-ssr] (ecmascript)");
;
;
;
const LogoHelmet = ({ theme, size = 'normal' })=>{
    const isLight = theme === 'light';
    const [imgError, setImgError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const logoUrl = isLight ? __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOGO_IMG_LIGHT"] : __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LOGO_IMG_DARK"];
    const mobileHelmetSize = size === 'large' ? "h-16" : "h-12";
    const desktopLogoSize = size === 'large' ? "h-48 lg:h-56 xl:h-64" : "h-20 md:h-24";
    if (!imgError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex items-center justify-center ${size === 'large' ? 'p-2 md:p-4' : ''}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 blur-2xl opacity-40 rounded-full ${isLight ? 'bg-pink-300' : 'bg-cyan-500'} animate-pulse`
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoHelmet.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$theme$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HELMET_ICON"],
                    alt: "Autamubilismo Helmet",
                    className: `${mobileHelmetSize} w-auto object-contain transition-all duration-500 drop-shadow-lg relative z-10 md:hidden`,
                    onError: ()=>setImgError(true)
                }, void 0, false, {
                    fileName: "[project]/components/ui/LogoHelmet.jsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col justify-center items-center md:items-start leading-none select-none relative z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: `font-black tracking-tighter italic ${size === 'large' ? 'text-3xl md:text-6xl lg:text-7xl' : 'text-xl md:text-2xl'} ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400'}`,
            children: [
                "AUTA",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/ui/BentoCard.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BentoCard",
    ()=>BentoCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
;
;
;
;
const BentoCard = ({ children, className, theme, title, subtitle, onClick, to, noPadding = false })=>{
    const isLight = theme === 'light';
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative z-10 h-full flex flex-col ${noPadding ? '' : 'p-6 md:p-8'}`,
        children: [
            (title || subtitle) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 relative",
                children: [
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-2 block opacity-80 ${isLight ? 'text-pink-400' : 'text-cyan-400'}`,
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoCard.jsx",
                        lineNumber: 13,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-xl md:text-2xl font-black leading-none ${isLight ? 'text-gray-900' : 'text-white font-mono'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/BentoCard.jsx",
                        lineNumber: 18,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
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
    const CardWrapper = ({ children })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${isLight ? 'from-pink-100/40' : 'from-cyan-900/10'} to-transparent opacity-50 pointer-events-none`
                }, void 0, false, {
                    fileName: "[project]/components/ui/BentoCard.jsx",
                    lineNumber: 37,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            href: to,
            className: baseClasses,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardWrapper, {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: `${baseClasses} ${onClick ? 'cursor-pointer' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CardWrapper, {
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
}),
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
"[project]/components/ui/ScrollToTop.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollToTop",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
const ScrollToTop = ()=>{
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        window.scrollTo(0, 0);
    }, [
        pathname
    ]);
    return null;
};
}),
"[project]/components/ui/BackButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackButton",
    ()=>BackButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
;
;
;
;
;
const BackButton = ({ theme, to })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLight = theme === 'light';
    const handleClick = ()=>{
        if (to) {
            router.push(to);
        } else {
            router.back();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: handleClick,
        className: `group flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 ${isLight ? 'bg-white text-gray-800 shadow-md hover:shadow-lg hover:text-pink-500 border border-gray-100' : 'bg-[#1a1a20] text-white border border-[#333] hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(0,255,242,0.2)]'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                size: 20,
                className: "transition-transform group-hover:-translate-x-1"
            }, void 0, false, {
                fileName: "[project]/components/ui/BackButton.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
}),
"[project]/components/ui/LoadingSpinner.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoadingSpinner",
    ()=>LoadingSpinner
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center justify-center gap-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: `animate-spin ${sizeClasses[size]} ${isLight ? 'text-pink-500' : 'text-cyan-400'}`
            }, void 0, false, {
                fileName: "[project]/components/ui/LoadingSpinner.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/ui/ErrorMessage.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorMessage",
    ()=>ErrorMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
;
;
;
const ErrorMessage = ({ theme, title = 'Ops!', message, onRetry })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col items-center justify-center gap-4 py-12 px-6 text-center max-w-md mx-auto rounded-3xl ${isLight ? 'bg-red-50 border-2 border-red-200' : 'bg-red-900/20 border-2 border-red-500/30'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                size: 48,
                className: isLight ? 'text-red-500' : 'text-red-400'
            }, void 0, false, {
                fileName: "[project]/components/ui/ErrorMessage.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: `text-xl font-black mb-2 ${isLight ? 'text-red-700' : 'text-red-300'}`,
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/components/ui/ErrorMessage.jsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
            onRetry && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/components/ui/PageContainer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageContainer",
    ()=>PageContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `min-h-screen p-6 md:p-12 animate-in fade-in slide-in-from-bottom-6 duration-700 font-sans ${isLight ? 'selection:bg-pink-300 selection:text-white' : 'selection:bg-cyan-500 selection:text-black'} ${className}`,
        style: isLight ? lightPattern : darkPattern,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-30 ${isLight ? 'bg-pink-200' : 'bg-[#bd00ff]/30 animate-pulse'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PageContainer.jsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20 ${isLight ? 'bg-purple-200' : 'bg-[#00fff2]/20 animate-pulse'}`
                    }, void 0, false, {
                        fileName: "[project]/components/ui/PageContainer.jsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/ui/PageHeader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageHeader",
    ()=>PageHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const PageHeader = ({ theme, title, subtitle, badge, icon: Icon, className = "" })=>{
    const isLight = theme === 'light';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `mb-14 text-center md:text-left relative ${className}`,
        children: [
            badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `inline-block px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4 border ${isLight ? 'bg-white/50 border-pink-200 text-pink-500 shadow-sm' : 'bg-[#bd00ff]/10 border-[#bd00ff]/30 text-fuchsia-400 shadow-[0_0_10px_rgba(189,0,255,0.3)]'}`,
                children: [
                    Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: `text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-6 ${isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600' : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-500 drop-shadow-[0_0_10px_rgba(0,255,242,0.4)]'}`,
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/PageHeader.jsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `text-lg md:text-xl font-medium max-w-2xl mx-auto md:mx-0 ${isLight ? 'text-gray-500' : 'text-cyan-100/70'}`,
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/components/ui/PageHeader.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/components/ui/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LogoHelmet$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LogoHelmet.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BentoCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BentoCard.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ScrollToTop$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ScrollToTop.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$LoadingSpinner$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/LoadingSpinner.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$ErrorMessage$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/ErrorMessage.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageContainer$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PageContainer.jsx [app-ssr] (ecmascript)"); // NOVO
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$PageHeader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/PageHeader.jsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
}),
"[project]/app/fanzone/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-ssr] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/music.js [app-ssr] (ecmascript) <export default as Music>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/widgets/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$NewsletterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/widgets/NewsletterWidget.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/data/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/drivers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/components/ui/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/BackButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/layout/ThemeContext.jsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// ============================================================================
// 📄 DADOS MOCKADOS (FANDOMS)
// ============================================================================
const FANDOMS = [
    {
        id: 'teamlh',
        name: 'Team LH',
        icon: '💜',
        color: '#b100e8',
        members: '44M',
        slogan: 'Still We Rise',
        tag: 'Lewis Hamilton'
    },
    {
        id: 'tifosi',
        name: 'Tifosi',
        icon: '🐎',
        color: '#ff0000',
        members: '16M',
        slogan: 'Essere Ferrari',
        tag: 'Ferrari'
    },
    {
        id: 'papaya',
        name: 'Papaya Army',
        icon: '🧡',
        color: '#ff8700',
        members: '81M',
        slogan: 'Fearlessly Forward',
        tag: 'McLaren'
    },
    {
        id: 'orange',
        name: 'Orange Army',
        icon: '🦁',
        color: '#ff5500',
        members: '33M',
        slogan: 'Simply Lovely',
        tag: 'Max Verstappen'
    },
    {
        id: 'smooth',
        name: 'Smooth Operators',
        icon: '🌶️',
        color: '#005aff',
        members: '55M',
        slogan: 'Stop Inventing',
        tag: 'Carlos Sainz'
    },
    {
        id: 'sunshine',
        name: 'Sunshine Cult',
        icon: '☀️',
        color: '#00D2BE',
        members: '63M',
        slogan: 'Forecast: Fast',
        tag: 'George Russell'
    }
];
// ============================================================================
// 📄 PÁGINA FANZONE
// ============================================================================
const FanzonePage = ()=>{
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$layout$2f$ThemeContext$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const resolvedTheme = theme || 'light';
    const isLight = resolvedTheme === 'light';
    // --- BACKGROUNDS ---
    const lightPattern = {
        backgroundColor: '#FFF0F5',
        backgroundImage: `
      radial-gradient(at 10% 10%, rgba(255, 182, 193, 0.4) 0px, transparent 50%),
      radial-gradient(at 90% 90%, rgba(221, 160, 221, 0.4) 0px, transparent 50%),
      url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ff69b4' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")
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
    // --- ESTILOS DE ELEMENTOS ---
    const discordCardClass = isLight ? 'bg-gradient-to-r from-[#5865F2] to-[#7289da] text-white shadow-[0_15px_30px_-5px_rgba(88,101,242,0.4)] border border-white/20 ring-4 ring-[#5865F2]/10' : 'bg-[#0a0a10] border border-[#5865F2] text-[#5865F2] shadow-[0_0_30px_rgba(88,101,242,0.15)] hover:shadow-[0_0_50px_rgba(88,101,242,0.3)] hover:bg-[#5865F2]/5';
    const sectionTitleClass = isLight ? 'text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 drop-shadow-sm' : 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-4 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-700 font-sans",
        style: isLight ? lightPattern : darkPattern,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-0 pointer-events-none overflow-hidden",
                children: isLight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-20 right-10 text-pink-200 opacity-40 animate-pulse",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                size: 120,
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 73,
                                columnNumber: 95
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/fanzone/page.jsx",
                            lineNumber: 73,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-40 left-10 text-purple-200 opacity-30 animate-bounce-slow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                size: 80,
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 74,
                                columnNumber: 105
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/app/fanzone/page.jsx",
                            lineNumber: 74,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fuchsia-600/20 blur-[100px]"
                        }, void 0, false, {
                            fileName: "[project]/app/fanzone/page.jsx",
                            lineNumber: 78,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-600/10 blur-[100px]"
                        }, void 0, false, {
                            fileName: "[project]/app/fanzone/page.jsx",
                            lineNumber: 79,
                            columnNumber: 14
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/app/fanzone/page.jsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$BackButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackButton"], {
                        to: "/",
                        theme: resolvedTheme
                    }, void 0, false, {
                        fileName: "[project]/app/fanzone/page.jsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-12 text-center md:text-left relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 justify-center md:justify-start mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-2 rounded-full ${isLight ? 'bg-pink-100 text-pink-500' : 'bg-fuchsia-900/30 text-fuchsia-400'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/app/fanzone/page.jsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 90,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: `text-5xl md:text-7xl font-black uppercase tracking-tighter ${sectionTitleClass}`,
                                        style: {
                                            fontFamily: isLight ? 'sans-serif' : "'Russo One', sans-serif"
                                        },
                                        children: "Fanzone"
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 93,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `ml-1 text-lg font-medium max-w-xl mx-auto md:mx-0 ${isLight ? 'text-gray-500' : 'text-cyan-100/60'}`,
                                children: "O ponto de encontro da torcida. Colecione, vote e interaja."
                            }, void 0, false, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/fanzone/page.jsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://discord.gg/SEU_LINK_AQUI",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: `block p-8 md:p-10 rounded-[2.5rem] mb-20 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] group relative overflow-hidden ${discordCardClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"
                            }, void 0, false, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-center gap-8 text-center md:text-left relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-6 rounded-[1.5rem] shrink-0 transition-transform duration-500 group-hover:rotate-6 ${isLight ? 'bg-white/20 backdrop-blur-sm shadow-inner' : 'bg-[#5865F2]/10 border border-[#5865F2]/30'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            size: 56,
                                            className: "text-current"
                                        }, void 0, false, {
                                            fileName: "[project]/app/fanzone/page.jsx",
                                            lineNumber: 114,
                                            columnNumber: 18
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 113,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-center md:justify-start gap-3 mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-3xl font-black uppercase tracking-widest group-hover:underline decoration-4 decoration-white/30 underline-offset-4",
                                                        children: "Comunidade Discord"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 118,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-0.5 rounded-md text-[10px] font-bold uppercase ${isLight ? 'bg-white/20' : 'bg-[#5865F2] text-white'}`,
                                                        children: "Live"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 121,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 117,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: `text-lg font-medium leading-relaxed max-w-2xl ${isLight ? 'opacity-90' : 'opacity-70'}`,
                                                children: "O Feed agora acontece ao vivo! Junte-se ao nosso servidor para comentar as corridas em tempo real, trocar figurinhas e participar de watch parties."
                                            }, void 0, false, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 123,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 116,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `hidden md:flex ml-auto p-4 rounded-full border-2 transition-all ${isLight ? 'border-white/30 text-white group-hover:bg-white group-hover:text-[#5865F2]' : 'border-[#5865F2] text-[#5865F2] group-hover:bg-[#5865F2] group-hover:text-white'}`,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                            size: 24,
                                            className: "rotate-180"
                                        }, void 0, false, {
                                            fileName: "[project]/app/fanzone/page.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 127,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/fanzone/page.jsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-10 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                size: 32,
                                                className: isLight ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-500'
                                            }, void 0, false, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: `text-3xl font-black uppercase tracking-tighter leading-none ${isLight ? 'text-gray-800' : 'text-white'}`,
                                                        children: "Sua Coleção"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs font-bold uppercase tracking-[0.2em] ${isLight ? 'text-pink-400' : 'text-fuchsia-400'}`,
                                                        children: "Grid 2025 • Wave 1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 142,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 136,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: `px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all ${isLight ? 'bg-white text-gray-500 shadow-md hover:text-pink-500' : 'bg-[#1a1a20] text-gray-400 border border-white/10 hover:border-cyan-400 hover:text-cyan-400'}`,
                                        children: "Ver Tudo"
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 145,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-10",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$drivers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DRIVERS_DATA"].slice(0, 22).map((driver)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$widgets$2f$NewsletterWidget$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KpopPhotocard"], {
                                                driver: driver,
                                                theme: resolvedTheme
                                            }, void 0, false, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 153,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `p-2 rounded-full ${isLight ? 'bg-white shadow-md text-pink-400 hover:bg-pink-50' : 'bg-[#1a1a20] text-gray-400 hover:text-cyan-400'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/fanzone/page.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 176
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 158,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: `p-2 rounded-full ${isLight ? 'bg-white shadow-md text-purple-400 hover:bg-purple-50' : 'bg-[#1a1a20] text-gray-400 hover:text-fuchsia-400'}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/fanzone/page.jsx",
                                                            lineNumber: 159,
                                                            columnNumber: 183
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 157,
                                                columnNumber: 18
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, driver.id || driver.number, true, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 152,
                                        columnNumber: 16
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/fanzone/page.jsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-8 px-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Music$3e$__["Music"], {
                                        size: 28,
                                        className: isLight ? 'text-purple-500' : 'text-cyan-400'
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 169,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: `text-3xl font-black uppercase tracking-tighter ${isLight ? 'text-gray-800' : 'text-white'}`,
                                        children: "Official Fan Clubs"
                                    }, void 0, false, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 170,
                                        columnNumber: 14
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: FANDOMS.map((fandom)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `relative p-6 rounded-[2rem] overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-2 ${isLight ? 'bg-white/70 border border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-lg' : 'bg-[#121218]/80 border border-white/5 hover:border-[color:var(--fandom-color)] hover:shadow-[0_0_20px_var(--fandom-color)]'}`,
                                        style: {
                                            '--fandom-color': fandom.color
                                        },
                                        children: [
                                            !isLight && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-[var(--fandom-color)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl"
                                            }, void 0, false, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 188,
                                                columnNumber: 22
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10 flex flex-col h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between items-start mb-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-sm ${isLight ? 'bg-gray-50' : 'bg-[#1a1a20] border border-white/10'}`,
                                                                children: fandom.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 194,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1 ${isLight ? 'bg-gray-100 text-gray-500' : 'bg-black/40 text-gray-400 border border-white/10'}`,
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                        size: 10
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                                        lineNumber: 204,
                                                                        columnNumber: 29
                                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                                    " ",
                                                                    fandom.members
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 199,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: `text-[10px] font-bold uppercase tracking-wider mb-1 block ${isLight ? 'text-gray-400' : 'text-white/40'}`,
                                                                children: fandom.tag
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 210,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                className: `text-2xl font-black uppercase tracking-tight mb-2 ${isLight ? 'text-gray-800' : 'text-white group-hover:text-[var(--fandom-color)] transition-colors'}`,
                                                                style: {
                                                                    color: isLight ? fandom.color : undefined
                                                                },
                                                                children: fandom.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 215,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm font-medium italic opacity-70 ${isLight ? 'text-gray-600' : 'text-gray-300'}`,
                                                                children: [
                                                                    '"',
                                                                    fandom.slogan,
                                                                    '"'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 223,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `mt-6 pt-4 border-t flex items-center justify-between opacity-60 group-hover:opacity-100 transition-all ${isLight ? 'border-gray-100' : 'border-white/10'}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-bold uppercase tracking-widest",
                                                                children: "Membership"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 232,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `p-1.5 rounded-full ${isLight ? 'bg-gray-100 text-gray-600' : 'bg-white/10 text-white'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                                    size: 12,
                                                                    className: "rotate-180"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/fanzone/page.jsx",
                                                                    lineNumber: 236,
                                                                    columnNumber: 29
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/fanzone/page.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/fanzone/page.jsx",
                                                        lineNumber: 229,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/fanzone/page.jsx",
                                                lineNumber: 191,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, fandom.id, true, {
                                        fileName: "[project]/app/fanzone/page.jsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/app/fanzone/page.jsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/fanzone/page.jsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/fanzone/page.jsx",
                lineNumber: 84,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Russo+One&display=swap');`
            }, void 0, false, {
                fileName: "[project]/app/fanzone/page.jsx",
                lineNumber: 246,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/fanzone/page.jsx",
        lineNumber: 64,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = FanzonePage;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5334c602._.js.map