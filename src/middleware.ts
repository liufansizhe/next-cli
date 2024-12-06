import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("lfsz", request.url);

  return NextResponse.redirect(new URL("/", request.url));
}
export const config = {
  matcher: "/api/:path*",
};
