import { NextResponse, type NextRequest } from 'next/server';

const API_BASE_URL =
  process.env.API_BASE_URL ??
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  'http://localhost:8000';

// TODO: 추후 수정 필요
export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const apiUrl = new URL(url.pathname.replace(/^\/api/, ''), API_BASE_URL);

  apiUrl.search = url.search;

  return NextResponse.rewrite(apiUrl);
}

export const config = {
  matcher: '/api/:path*',
};
