import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'fr', 'nl'];

function getLocale(request: NextRequest) {
  const acceptLang = request.headers.get('accept-language') || '';
  const preferred = acceptLang.split(',')[0].split('-')[0];
  return locales.includes(preferred) ? preferred : 'en';
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1️⃣ Ignore Next.js internal and static paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/favicon') ||
    pathname.startsWith('/icons') ||
    pathname.startsWith('/fonts') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return;
  }

  // 2️⃣ Detect if a locale is missing in the URL
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    const redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    const response = NextResponse.redirect(redirectUrl);

    // 3️⃣ ADD: Noindex ONLY when the user lands on the raw root "/"
    if (pathname === '/' || pathname === '') {
      response.headers.set('X-Robots-Tag', 'noindex');
    }

    return response;
  }
}