// src/styles/proseStyles.js

export const proseClass = (isLight) => `
  prose prose-lg max-w-none
  ${isLight ? "prose-slate" : "prose-invert"}

  /* =========================
     HEADINGS
     ========================= */

  /* H1 praticamente não usado no corpo, mas garantido */
  prose-h1:font-black prose-h1:tracking-tight

  /* 🔥 H2 = SECTION LABEL (igual News) */
  ${
    isLight
      ? "prose-h2:text-[#D8C4F0]"
      : "prose-h2:text-[#00fff2]"
  }
  prose-h2:uppercase
  prose-h2:tracking-[0.2em]
  prose-h2:text-sm
  prose-h2:font-medium
  prose-h2:mb-4
  prose-h2:mt-12
  prose-h2:border-none
  prose-h2:pl-0

  /* H3 = subtítulo real */
  ${
    isLight
      ? "prose-h3:text-[#1F2937]"
      : "prose-h3:text-white"
  }
  prose-h3:text-xl
  prose-h3:font-semibold
  prose-h3:tracking-tight
  prose-h3:mt-10
  prose-h3:mb-3

  /* =========================
     PARÁGRAFOS
     ========================= */
  prose-p:font-normal
  prose-p:leading-relaxed
  prose-p:text-base
  md:prose-p:text-lg

  /* =========================
     LINKS
     ========================= */
  ${
    isLight
      ? "prose-a:text-[#D8C4F0] hover:prose-a:text-[#F7B8C8]"
      : "prose-a:text-[#00fff2] hover:prose-a:text-[#caa5d8]"
  }
  prose-a:font-medium
  prose-a:no-underline
  hover:prose-a:underline
  prose-a:underline-offset-4

  /* =========================
     STRONG / EMPHASIS
     ========================= */
  ${
    isLight
      ? "prose-strong:text-[#1F2937]"
      : "prose-strong:text-white"
  }
  prose-strong:font-medium

  prose-em:italic
  ${
    isLight
      ? "prose-em:text-[#6B7280]"
      : "prose-em:text-gray-300"
  }

/* =========================
   BLOCKQUOTE
   ========================= */
prose-blockquote:rounded-2xl
prose-blockquote:px-6
prose-blockquote:py-4
prose-blockquote:italic
prose-blockquote:text-lg
md:prose-blockquote:text-xl
prose-blockquote:my-10
prose-blockquote:shadow-none

${
  isLight
    ? "prose-blockquote:bg-[#FFF5F8] prose-blockquote:border-l-4 prose-blockquote:border-[#F7B8C8] prose-blockquote:text-[#6B7280]"
    : "prose-blockquote:bg-[#0b0f14] prose-blockquote:border-l-4 prose-blockquote:border-[#00fff2]/60 prose-blockquote:text-gray-200"
}

  /* =========================
     LISTAS
     ========================= */
  ${
    isLight
      ? "prose-li:marker:text-[#F7B8C8]"
      : "prose-li:marker:text-[#caa5d8]"
  }
  prose-li:my-1

  /* =========================
     IMAGENS
     ========================= */
  prose-img:rounded-2xl
  ${
    isLight
      ? "prose-img:shadow-xl"
      : "prose-img:shadow-[0_0_25px_#bd00ff55]"
  }
`;
