// src/data/f1Calendar2026.js

// 🔹 PRÉ-TEMPORADA
export const F1_2026_PRESEASON = [
  {
    id: "preseason-test-1",
    kind: "TEST",
    title: "Pré-temporada — Teste 1",
    circuitLabel: "Circuit de Barcelona-Catalunya, Espanha",
    startDate: "2026-01-26",
    endDate: "2026-01-30",
    timezoneLabel: "BRT",
    sessions: [
      { day: "SEG", date: "26", name: "Sessão de Testes - Dia 1", time: "" },
      { day: "TER", date: "27", name: "Sessão de Testes - Dia 2", time: "" },
      { day: "QUA", date: "28", name: "Sessão de Testes - Dia 3", time: "" },
      { day: "QUI", date: "29", name: "Sessão de Testes - Dia 4", time: "" },
      { day: "SEX", date: "30", name: "Sessão de Testes - Dia 5", time: "" },
    ],
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
      { day: "QUA", date: "11", name: "Sessão de Testes - Dia 1", time: "" },
      { day: "QUI", date: "12", name: "Sessão de Testes - Dia 2", time: "" },
      { day: "SEX", date: "13", name: "Sessão de Testes - Dia 3", time: "" },
    ],
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
      { day: "QUA", date: "18", name: "Sessão de Testes - Dia 1", time: "" },
      { day: "QUI", date: "19", name: "Sessão de Testes - Dia 2", time: "" },
      { day: "SEX", date: "20", name: "Sessão de Testes - Dia 3", time: "" },
    ],
  },
];

// 🔹 TEMPORADA (resumido aqui, você pode colar o grandão depois)
export const F1_2026_CALENDAR = [
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
    timezoneLabel: "BRT",
    isSprint: false,
    sessions: [
      // preenche depois se quiser
    ],
  },
  // … resto das corridas depois
];
