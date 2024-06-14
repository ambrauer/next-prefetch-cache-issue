import { NextRequest, NextResponse } from "next/server";

const isPrefetch = (req: NextRequest): boolean => {
  return req.headers.get("purpose") === "prefetch";
};

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/a" || request.nextUrl.pathname === "/1") {
    const rewriteUrl =
      request.nextUrl.pathname === "/a"
        ? isPrefetch(request)
          ? "/a"
          : "/b"
        : isPrefetch(request)
          ? "/1"
          : "/2";
    const response = NextResponse.rewrite(new URL(rewriteUrl, request.url));
    response.headers.set("x-middleware-cache", "no-cache"); // Disable preflight caching
    return response;
  }
}
