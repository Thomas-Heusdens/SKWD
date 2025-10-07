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

  // 🧩 1. Ignore Next.js internal and static paths
  if (
    pathname.startsWith('/_next') ||      // Next.js internal files
    pathname.startsWith('/images') ||     // your images (like /images/logo.png)
    pathname.startsWith('/favicon') ||    // favicon.ico
    pathname.startsWith('/icons') ||      // future /icons folder
    pathname.startsWith('/fonts') ||      // font files
    pathname.startsWith('/api') ||        // API routes
    pathname.includes('.')                // any static file with an extension (e.g. .png, .jpg, .css, etc.)
  ) {
    return; // Let Next.js handle these normally
  }

  // 🧩 2. Apply locale redirection logic
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}