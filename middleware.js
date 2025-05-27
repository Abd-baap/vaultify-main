// middleware.js
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server'; // Import NextResponse for redirection

const isPublicRoute = createRouteMatcher([
  '/',
  '/about',
  '/support',
  '/sitemap.xml',
  '/robots.txt',
  // Add other public routes if you have them, e.g., /sign-in, /sign-up
  '/sign-in',
]);

export default clerkMiddleware((auth, req) => {
  // Check if the current route is public
  if (isPublicRoute(req)) {
    // If it's a public route, allow access
    return NextResponse.next();
  }

  // If it's not a public route, check if the user is signed in
  if (!auth().userId) {
    // If not signed in and trying to access a private route, redirect to sign-in
    // You can customize the redirect URL as needed // Optionally add a redirect_url param
    return NextResponse.redirect('/sign-in');
  }

  // If signed in and accessing a private route, allow access
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Ensure this matcher correctly captures all routes you want to protect,
    // but excludes Next.js internal paths and static assets.
    // The provided matcher looks generally correct for common setups.
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)', // Protects API routes as well
  ],
};
