import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about",
  "/support",
  "/sitemap.xml",
  "/robots.txt",
  "/suggestion",
  "/ads.txt",
  "/termsandconditions",
  "/privacypolicy"
]);

export default clerkMiddleware(async (auth, request) => {
  // Protect non-public routes
  if (!isPublicRoute(request)) {
    await auth.protect();
  }

  // Create the response
  const response = NextResponse.next();

  // Add CORS headers
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
response.headers.set("X-Robots-Tag", "index, follow"); 
  // Handle Preflight (OPTIONS) Request
  if (request.method === "OPTIONS") {
    return new Response(null, { headers: response.headers, status: 200 });
  }

  return response;
});

// Apply to API routes & necessary paths
export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
