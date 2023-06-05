import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log('in the middleware');
  return new NextResponse();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/*',
};
