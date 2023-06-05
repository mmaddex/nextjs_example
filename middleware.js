import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log('in the middleware');
  return new NextResponse();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/*',
};
