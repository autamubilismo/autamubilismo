// src/styles/proseStyles.js
export const proseClass = (isLight) => `
  prose prose-lg max-w-none
  ${isLight ? "prose-slate" : "prose-invert"}

  /* HEADINGS */
  prose-headings:font-black
  prose-headings:tracking-tight
  ${
    isLight
      ? "prose-h2:text-[#1F2937]"
      : "prose-h2:text-[#FFFFFF]"
  }
  ${
    isLight
      ? "prose-h2:border-l-4 prose-h2:border-[#F7B8C8] prose-h2:pl-4"
      : "prose-h2:border-l-4 prose-h2:border-[#ab0eff] prose-h2:pl-4"
  }

  ${
    isLight
      ? "prose-h3:text-[#D8C4F0]"
      : "prose-h3:text-[#00fff2]"
  }
  prose-h3:uppercase prose-h3:tracking-[0.2em] prose-h3:text-sm

  /* LINKS */
  ${
    isLight
      ? "prose-a:text-[#D8C4F0] hover:prose-a:text-[#F7B8C8]"
      : "prose-a:text-[#00fff2] hover:prose-a:text-[#ab0eff]"
  }
  prose-a:no-underline hover:prose-a:underline

  /* STRONG */
  ${
    isLight
      ? "prose-strong:text-[#1F2937]"
      : "prose-strong:text-[#FFFFFF]"
  }

  /* BLOCKQUOTE */
  prose-blockquote:rounded-2xl prose-blockquote:px-6 prose-blockquote:py-4
  ${
    isLight
      ? "prose-blockquote:bg-[#FFF5F8] prose-blockquote:border-l-4 prose-blockquote:border-[#F7B8C8] prose-blockquote:text-[#6B7280]"
      : "prose-blockquote:bg-[#1e1e24] prose-blockquote:border-l-4 prose-blockquote:border-[#ab0eff] prose-blockquote:text-[#9CA3AF]"
  }

  /* LISTAS */
  ${
    isLight
      ? "prose-li:marker:text-[#F7B8C8]"
      : "prose-li:marker:text-[#ab0eff]"
  }

  /* IMAGENS */
  prose-img:rounded-2xl
  ${
    isLight
      ? "prose-img:shadow-xl"
      : "prose-img:shadow-[0_0_25px_#bd00ff55]"
  }
`;
