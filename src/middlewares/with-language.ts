import {
  NextResponse,
  NextRequest,
  NextMiddleware,
  NextFetchEvent,
} from "next/server";
import acceptLanguage from "accept-language";
import { cookieName, fallbackLng, languages } from "@/app/i18n/settings";
import { MiddlewareFactory } from "./types";

export const config = {
  // matcher: '/:lng*'
  matcher: ["/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)"],
};

export const withLanguage: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    acceptLanguage.languages(languages);
    //  Middleware conventions https://nextjs.org/docs/pages/building-your-application/routing/middleware
    let lng;
    if (request.cookies.has(cookieName)) {
      lng = acceptLanguage.get(request.cookies.get(cookieName)?.value);
    }

    if (!lng) lng = acceptLanguage.get(request.headers.get("Accept-Language"));
    if (!lng) lng = fallbackLng;

    // Redirect if lng in path is not supported
    if (
      !languages.some((loc) =>
        request.nextUrl.pathname.startsWith(`/${loc}`)
      ) &&
      !request.nextUrl.pathname.startsWith("/_next")
    ) {
      // TODO possible not working
      return NextResponse.redirect(
        new URL(`/${lng}${request.nextUrl.pathname}`, request.url)
      );
    }

    if (request.headers.has("referer")) {
      // @ts-ignore
      const refererUrl = new URL(request.headers.get("referer"));
      const lngInReferer = languages.find((l) =>
        refererUrl.pathname.startsWith(`/${l}`)
      );
      const response = NextResponse.next();
      if (lngInReferer) response.cookies.set(cookieName, lngInReferer);
      return;
    }

    return;
  };
};
