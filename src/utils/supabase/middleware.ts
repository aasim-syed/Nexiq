// middleware.ts
import type { NextRequest } from "next/server";
import { updateSession } from "@/middleware/update-session";

export async function middleware(req: NextRequest) {
  return updateSession(req);
}

// Avoid static assets
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
