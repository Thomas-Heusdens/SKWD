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
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}