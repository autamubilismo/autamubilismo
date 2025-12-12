import React from "react";
import { Link } from "react-router-dom";
import { Trophy, Wrench, ArrowRight } from "lucide-react";

export const SeasonWidget = ({ theme }) => {
  const isLight = theme === "light";

  const BRAND = {
    roxo: "#caa5d8",
    rosa: "#fac4dc",
    azul: "#bbd3f2",
    neonRoxo: "#bd00ff",
    neonCyan: "#00fff2",
  };

  // 🔒 TEMPORADA ZERADA (oficial)
  const topDrivers = [
    { pos: 1, name: "—", pts: 0, color: BRAND.roxo },
    { pos: 2, name: "—", pts: 0, color: BRAND.rosa },
    { pos: 3, name: "—", pts: 0, color: BRAND.azul },
    { pos: 4, name: "—", pts: 0, color: isLight ? "#ddd" : "rgba(255,255,255,0.25)" },
    { pos: 5, name: "—", pts: 0, color: isLight ? "#ddd" : "rgba(255,255,255,0.25)" },
  ];

  const constructors = [
    { name: "—", pts: 0, color: BRAND.roxo, width: "0%" },
    { name: "—", pts: 0, color: BRAND.rosa, width: "0%" },
    { name: "—", pts: 0, color: BRAND.azul, width: "0%" },
  ];

  const boxClass = isLight ? "bg-white border-gray-100" : "bg-white/5 border-white/5";
  const subText = isLight ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className={`h-full flex flex-col justify-between p-4 relative overflow-hidden ${
        isLight ? "text-gray-800" : "text-white"
      }`}
    >
      {/* Glow decorativo */}
      <div
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: isLight ? BRAND.azul : BRAND.neonCyan }}
      />

      {/* HEADER */}
      <div className="flex justify-between items-start mb-2 z-10 relative">
        <div className="flex items-center gap-2.5">
          <div
            className="p-2 rounded-xl shadow-sm"
            style={{ backgroundColor: isLight ? "white" : "rgba(255,255,255,0.1)" }}
          >
            <Trophy size={16} style={{ color: isLight ? BRAND.roxo : BRAND.neonRoxo }} />
          </div>
          <div>
            <h3
              className="text-sm font-black uppercase leading-none tracking-wide text-transparent bg-clip-text"
              style={{
                backgroundImage: isLight
                  ? `linear-gradient(to right, ${BRAND.roxo}, ${BRAND.rosa})`
                  : `linear-gradient(to right, #fff, ${BRAND.neonRoxo})`,
              }}
            >
              Temporada 2025
            </h3>
            <p className={`text-[9px] font-bold uppercase tracking-wider mt-0.5 ${subText}`}>
              Finalizada
            </p>
          </div>
        </div>

        <div className="text-right">
          <span className="text-[8px] font-bold opacity-50 uppercase tracking-widest block mb-0.5">
            Campeão
          </span>
          <span className="font-black text-xs">—</span>
        </div>
      </div>

      {/* CORPO */}
      <div className="flex-1 flex flex-col gap-2 z-10 justify-center">
        {/* TOP 5 */}
        <div className={`rounded-2xl p-3 border shadow-sm ${boxClass}`}>
          <span className="text-[8px] font-black uppercase tracking-[0.2em] opacity-50">
            Top 5 Pilotos
          </span>

          <div className="mt-2 space-y-1.5">
            {topDrivers.map((d) => (
              <div key={d.pos} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono w-3 text-[9px] opacity-40">{d.pos}</span>
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: d.color }}
                  />
                  <span className="truncate max-w-[90px] font-medium">{d.name}</span>
                </div>
                <span className="font-mono opacity-60 text-[9px]">{d.pts} pts</span>
              </div>
            ))}
          </div>
        </div>

        {/* CONSTRUTORES */}
        <div className={`rounded-2xl p-3 border shadow-sm ${boxClass}`}>
          <div className="flex items-center gap-1.5 mb-2 opacity-50">
            <Wrench size={10} />
            <span className="text-[8px] font-black uppercase tracking-[0.2em]">
              Construtores
            </span>
          </div>

          <div className="space-y-2">
            {constructors.map((t, i) => (
              <div key={i}>
                <div className="flex justify-between text-[9px] font-bold mb-1 px-0.5">
                  <span style={{ color: t.color }}>{t.name}</span>
                  <span className="font-mono opacity-60">{t.pts}</span>
                </div>
                <div
                  className={`w-full h-1.5 rounded-full ${
                    isLight ? "bg-gray-100" : "bg-white/10"
                  }`}
                >
                  <div
                    className="h-full rounded-full"
                    style={{ width: t.width, backgroundColor: t.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-1 pt-1 flex justify-center">
        <Link
          to="/regulation"
          className={`text-[9px] font-bold uppercase tracking-widest py-1 px-3 rounded-full transition-all flex items-center gap-1 ${
            isLight
              ? "text-gray-400 hover:text-gray-600 hover:bg-gray-50"
              : "text-gray-500 hover:text-white hover:bg-white/10"
          }`}
        >
          Ver Regulamento 2026
          <ArrowRight size={8} />
        </Link>
      </div>
    </div>
  );
};
