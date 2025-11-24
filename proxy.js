import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function proxy(request) {
  const isLoggedIn = false; // replace with real auth check

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/pages/login", request.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request) { ... }

// See "Matching Paths" below to learn more
export const config = {
  // Only match dynamic product detail pages like /products/1, /products/2
  matcher: "/products/:id",
};
