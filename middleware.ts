import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const redirects: Record<string, string> = {
    "/donate": "https://hcb.hackclub.com/donations/start/campfire-bangkok",
    "/slack": "https://hackclub.enterprise.slack.com/archives/C09TDQAQS9H",
    "/signup": "https://campfire.hack.club/43",
  };

  if (pathname in redirects) {
    return NextResponse.redirect(new URL(redirects[pathname], req.url));
  }

  return NextResponse.next();
}
