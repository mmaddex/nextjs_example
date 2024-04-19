import { NextResponse } from 'next/server';

export const config = {
  runtime: 'edge', //This specifies the runtime environment that the middleware function will be executed in.
};

export default (request) => {
  return NextResponse.json({
    name: `Hello, from ${request.url} I'm now an Edge Function... that doesn't actually run on the "edge"`,
  });
};