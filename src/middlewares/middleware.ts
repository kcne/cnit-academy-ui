import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import acceptLanguage from 'accept-language'
import { fallbackLng, languages } from '@/config/i18nSettings'

acceptLanguage.languages(languages)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|locales).*)']
}

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.includes('/api/')) {
    return NextResponse.next();
  }

  let lng = fallbackLng;

  // Try to get language from accept-language header
  const acceptLang = req.headers.get('Accept-Language');
  if (acceptLang) {
    const detectedLng = acceptLanguage.get(acceptLang);
    if (detectedLng && languages.includes(detectedLng)) {
      lng = detectedLng;
    }
  }

  // Check if the pathname already starts with a supported language
  const pathnameHasLang = languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`));

  // If the page is accessed directly (not via locale prefix)
  // and it's not a next.js resource
  const shouldRedirect = 
    !pathnameHasLang &&
    !req.nextUrl.pathname.startsWith('/_next') &&
    req.nextUrl.pathname !== '/favicon.ico' &&
    !req.nextUrl.pathname.includes('/locales/');

  if (shouldRedirect) {
    // Redirect to the same path but prefixed with the detected language
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
  }

  return NextResponse.next();
} 