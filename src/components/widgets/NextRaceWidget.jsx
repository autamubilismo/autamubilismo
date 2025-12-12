// src/components/widgets/NextRaceWidget.jsx
import React from "react";
import { Flag, MapPin, Clock } from "lucide-react";
import { F1_2026_PRESEASON, F1_2026_CALENDAR } from "../../data/f1Calendar2026";
import { getNextEvent } from "../../utils/f1Calendar";

export const NextRaceWidget = ({ theme }) => {
  const isLight = theme === "light";

  const BRAND = {
    roxo: "#caa5d8",
    rosa: "#fac4dc",
    neonRoxo: "#bd00ff",
    neonCyan: "#00fff2",
  };

  const nextEvent = getNextEvent({
    preseasonTests: F1_2026_PRESEASON,
    races: F1_2026_CALENDAR,
  });

  if (!nextEvent) {
    return (
      <div
        className={`h-full flex flex-col p-4 relative overflow-hidden ${
          isLight ? "text-gray-800" : "text-white"
        }`}
      >
        <p className="text-[10px] uppercase text-gray-500 mb-1">
          Próximo evento
        </p>
        <p className="text-sm">Temporada encerrada 🎉</p>
      </div>
    );
  }

  const isTest = nextEvent.kind === "TEST";

  const title = nextEvent.title; // "Pré-temporada — Teste 1" ou "ABU DHABI"
  const circuitLabel = nextEvent.circuitLabel;
  const timezoneLabel = nextEvent.timezoneLabel || "BRT";
  const sessions = nextEvent.sessions || [];

  return (
    <div
      className={`h-full flex flex-col p-4 relative overflow-hidden ${
        isLight ? "text-gray-800" : "text-white"
      }`}
    >
      {/* FLAG DE FUNDO */}
      <div
        className={`absolute -right-6 -bottom-10 opacity-[0.07] pointer-events-none rotate-12 transition-colors duration-500 ${
          isLight ? "text-purple-900" : "text-[#bd00ff]"
        }`}
      >
        <Flag size={200} />
      </div>

      {/* CABEÇALHO */}
      <div className="flex justify-between items-end mb-3 z-10 relative">
        <div>
          <span className="flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] opacity-50 mb-0.5">
            <MapPin size={9} /> {circuitLabel}
          </span>

          {/* Se quiser diferenciar visualmente teste vs corrida */}
          {isTest && (
            <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.16em] text-pink-300 mb-0.5">
              Pré-temporada
            </span>
          )}

          <h3
            className="text-2xl font-black leading-none italic tracking-tighter text-transparent bg-clip-text"
            style={{
              backgroundImage: isLight
                ? `linear-gradient(to right, ${BRAND.roxo}, ${BRAND.rosa})`
                : `linear-gradient(to right, #fff, ${BRAND.neonRoxo})`,
            }}
          >
            {title}
          </h3>
        </div>

        <div
          className={`px-2 py-0.5 rounded-full text-[8px] font-bold flex items-center gap-1 border shadow-sm ${
            isLight
              ? "bg-white border-gray-100 text-gray-400"
              : "bg-white/10 border-white/5 text-gray-300"
          }`}
        >
          <Clock size={9} />
          <span>{timezoneLabel}</span>
        </div>
      </div>

      {/* LISTA EM BLOCOS (REUSA SEU ESTILO) */}
      <div className="flex-1 flex flex-col justify-between gap-1.5 z-10">
        {sessions.map((session, i) => {
          const isMain = session.main;
          const isHighlight = session.highlight;

          let blockStyle = {};
          let textClass = "";

          if (isMain) {
            // sessão principal (corrida ou "dia chave")
            blockStyle = {
              background: isLight
                ? `linear-gradient(90deg, ${BRAND.roxo}, ${BRAND.rosa})`
                : `linear-gradient(90deg, ${BRAND.neonRoxo}, #9d00ff)`,
              border: "none",
              boxShadow: isLight
                ? "0 4px 10px -2px rgba(0,0,0,0.1)"
                : `0 0 15px ${BRAND.neonRoxo}40`,
            };
            textClass = "text-white";
          } else if (isHighlight) {
            blockStyle = {
              background: isLight ? "white" : "rgba(255,255,255,0.03)",
              borderColor: isLight ? BRAND.roxo : BRAND.neonCyan,
              borderWidth: "1px",
              borderStyle: "solid",
            };
            textClass = isLight ? "text-gray-800" : "text-white";
          } else {
            blockStyle = {
              background: isLight ? "white" : "rgba(255,255,255,0.02)",
              borderColor: isLight ? "#f3f4f6" : "transparent",
              borderWidth: "1px",
              borderStyle: "solid",
            };
            textClass = isLight ? "text-gray-500" : "text-gray-500";
          }

          return (
            <div
              key={i}
              className={`flex items-center justify-between p-2 rounded-xl transition-all duration-300 group hover:scale-[1.01] ${
                isMain ? "" : "shadow-sm"
              }`}
              style={blockStyle}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex flex-col items-center justify-center w-8 h-8 rounded-lg font-bold leading-none ${
                    isMain
                      ? "bg-white/20 text-white backdrop-blur-sm"
                      : isLight
                      ? "bg-gray-50 text-gray-400"
                      : "bg-white/5 text-gray-500"
                  }`}
                >
                  <span className="text-[7px] uppercase opacity-70 tracking-wider">
                    {session.day}
                  </span>
                  <span className="text-xs">{session.date}</span>
                </div>
                <div className={textClass}>
                  <span
                    className={`block text-[10px] ${
                      isMain || isHighlight
                        ? "font-black uppercase tracking-wide"
                        : "font-bold"
                    }`}
                  >
                    {session.name}
                  </span>
                </div>
              </div>
              <div
                className={`font-mono font-bold tracking-tight ${
                  isMain
                    ? "text-sm text-white"
                    : "text-xs " +
                      (isLight ? "text-gray-400" : "text-gray-500")
                }`}
              >
                {session.time || "--:--"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
