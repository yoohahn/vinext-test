import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const customUUIDList = {
  foo: "01a1698d-fa7c-71da-b9f8-f6015017ba34",
  bar: "01a1698d-fa7c-796c-8b24-53600d794ccf",
  baz: "01a1698d-fa7c-77b7-babd-8a0dde16c30f",
};
export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/foo")) {
    return NextResponse.rewrite(new URL(`/${customUUIDList.foo}`, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/bar")) {
    return NextResponse.rewrite(new URL(`/${customUUIDList.bar}`, request.url));
  }
  if (request.nextUrl.pathname.startsWith("/baz")) {
    return NextResponse.rewrite(new URL(`/${customUUIDList.baz}`, request.url));
  }
  return NextResponse.redirect(new URL(`/foo`, request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
