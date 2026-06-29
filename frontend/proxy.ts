import { NextResponse, type NextRequest } from 'next/server';

const API_BASE_URL =
  process.env.API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'http://localhost:8000';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/api')) {
    const apiUrl = new URL(pathname.replace(/^\/api/, ''), API_BASE_URL);
    apiUrl.search = request.nextUrl.search;

    return NextResponse.rewrite(apiUrl);
  }

  return NextResponse.next();
}
