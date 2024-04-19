import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
 
export const config = {
  matcher: '/api_it',
};

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log('in the middleware');
  console.log(request.url);
  //const response = NextResponse.next();
  //response.headers.set('Cache-Control', 'public');
  //return response;
  return NextResponse.rewrite('/api/edge_runtime');
}