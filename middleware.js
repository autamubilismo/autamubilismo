import { NextResponse } from "next/server";

const BOT_UA =
  /(facebookexternalhit|facebot|whatsapp|twitterbot|telegrambot|discordbot|slackbot|linkedinbot|embedly|pinterest|preview|crawler|spider|bot)/i;

export function middleware(req) {
  const ua = req.headers.get("user-agent") || "";
  const { pathname, origin, searchParams } = req.nextUrl;

  // Rotas que você quer OG dinâmico
  const newsMatch = pathname.match(/^\/news\/([^/]+)\/?$/);
  const articleMatch = pathname.match(/^\/articles\/([^/]+)\/?$/);

  const isBot = BOT_UA.test(ua);

  if (!isBot) return NextResponse.next();

  // Se for bot e for uma página de detalhe, reescreve pra API de OG
  if (newsMatch) {
    const slug = newsMatch[1];
    const url = `${origin}/news/${slug}`;
    const ogUrl = req.nextUrl.clone();
    ogUrl.pathname = "/api/og";
    ogUrl.searchParams.set("type", "news");
    ogUrl.searchParams.set("slug", slug);
    ogUrl.searchParams.set("url", url);
    return NextResponse.rewrite(ogUrl);
  }

  if (articleMatch) {
    const slug = articleMatch[1];
    const url = `${origin}/articles/${slug}`;
    const ogUrl = req.nextUrl.clone();
    ogUrl.pathname = "/api/og";
    ogUrl.searchParams.set("type", "article");
    ogUrl.searchParams.set("slug", slug);
    ogUrl.searchParams.set("url", url);
    return NextResponse.rewrite(ogUrl);
  }

  return NextResponse.next();
}

// Só roda nessas páginas (não desperdiça middleware no site todo)
export const config = {
  matcher: ["/news/:path*", "/articles/:path*"],
};
