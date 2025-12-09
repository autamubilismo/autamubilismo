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
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-black mt-10 mb-4 tracking-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold mt-8 mb-3">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 leading-relaxed">{children}</p>
    ),

    // ⭐ AQUI É A QUOTE ⭐
    blockquote: ({ children }) => (
      <blockquote
        className={
          isLight
            ? // LIGHT: fundo rosinha, texto mais suave
              "border-l-4 border-[#F7B8C8] bg-[#FFF5F8]/90 rounded-2xl py-4 pl-6 pr-4 my-8 italic text-lg md:text-xl text-[#4B5563]"
            : // DARK: mantém o neon bonito
              "border-l-4 border-[#caa5d8]/70 bg-[#1e1e24] rounded-2xl py-4 pl-6 pr-4 my-8 italic text-lg md:text-xl text-gray-100 shadow-[0_0_30px_rgba(189,0,255,0.25)]"
        }
      >
        {children}
      </blockquote>
    ),
  },

  // ==== LISTAS ====
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
  },

  // ==== MARCAS (negrito, itálico, link) ====
  marks: {
    strong: ({ children }) => (
      <strong
        className={
          isLight
            ? "font-semibold text-gray-900"
            : "font-semibold text-white"
        }
      >
        {children}
      </strong>
    ),
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
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noreferrer noopener" : undefined}
        className={
          isLight
            ? "font-semibold underline decoration-[#F7B8C8] decoration-2 underline-offset-4 hover:text-[#BE185D]"
            : "font-semibold text-[#caa5d8] underline decoration-[#caa5d8]/60 decoration-2 underline-offset-4 hover:text-white"
        }
      >
        {children}
      </a>
    ),
  },
});
