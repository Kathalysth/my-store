import { auth } from "./auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  if (isLoggedIn && nextUrl.pathname.startsWith("/dashboard")) {
    // const orgId = req.auth?.orgId; // Inject org ID
    // nextUrl.searchParams.set("orgId", orgId);
  }
  if (!isLoggedIn && nextUrl.pathname.startsWith("/protected")) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }
  //@ts-expect-error fox orgId
  return NextResponse.next(nextUrl);
});

export const config = { matcher: ["/dashboard/:path*", "/protected/:path*"] };
