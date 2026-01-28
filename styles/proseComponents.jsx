console.log("✅ proseComponents.js carregou");

// src/styles/proseComponents.js



export const proseComponents = (isLight) => ({
  // ==== TIPOS ESPECIAIS (imagens, etc) ====
  types: {
    image: ({ value }) => (
      <figure className="my-10">
        <img
          src={value?.url}
          alt={value?.alt || ""}
          className="rounded-2xl w-full max-h-[480px] object-cover shadow-lg"
        />
        {value?.caption && (
          <figcaption className="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center">
            {value.caption}
          </figcaption>
        )}
      </figure>
    ),
  },

  // ==== BLOCOS (parágrafo, títulos, citação...) ====
  block: {
    // 🔹 H2 – título de seção (elegante, não gritão)
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-semibold mt-12 mb-4 tracking-tight leading-snug">
        {children}
      </h2>
    ),

    // 🔹 H3 – subtítulo (mais leve, apoio visual)
    h3: ({ children }) => (
      <h3 className="text-lg md:text-xl font-medium mt-8 mb-3 tracking-tight uppercase text-[#D3968C]">
        {children}
      </h3>
    ),

    // 🔹 Parágrafo padrão
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed font-normal text-base md:text-lg">
        {children}
      </p>
    ),

    // ⭐ QUOTE / BLOCKQUOTE ⭐
    blockquote: ({ children }) => (
      <blockquote
        className={
          isLight
            ? // LIGHT: editorial, suave
              "border-l-4 border-[#D3968C] bg-[#F7F4D5]/90 rounded-2xl py-4 pl-6 pr-4 my-10 italic text-lg md:text-xl text-[#4B5563]"
            : // DARK: neon contido
              "border-l-4 border-[#caa5d8]/70 bg-[#1e1e24] rounded-2xl py-4 pl-6 pr-4 my-10 italic text-lg md:text-xl text-gray-100 shadow-[0_0_30px_rgba(189,0,255,0.25)]"
        }
      >
        {children}
      </blockquote>
    ),
  },

  // ==== LISTAS ====
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">
        {children}
      </ol>
    ),
  },

  // ==== MARCAS (negrito, itálico, link) ====
  marks: {
    // 🔸 Negrito elegante (sem gritar)
    strong: ({ children }) => (
      <strong
        className={
          isLight
            ? "font-medium text-gray-900"
            : "font-medium text-white"
        }
      >
        {children}
      </strong>
    ),

    // 🔸 Itálico suave
    em: ({ children }) => (
      <em
        className={
          isLight
            ? "italic text-[#6B7280]"
            : "italic text-gray-300"
        }
      >
        {children}
      </em>
    ),

    // 🔸 Links com presença, sem pesar
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noreferrer noopener" : undefined}
        className={
          isLight
            ? "font-medium underline decoration-[#D3968C] decoration-2 underline-offset-4 hover:text-[#0A3323]"
            : "font-medium text-[#caa5d8] underline decoration-[#caa5d8]/60 decoration-2 underline-offset-4 hover:text-white"
        }
      >
        {children}
      </a>
    ),
  },
});
