// src/app/auth/callback/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/";

  if (!code) {
    return NextResponse.redirect(
      new URL("/login", process.env.APP_URL ?? "http://localhost:3000")
    );
  }

  const sb = await createClient();
  const { error } = await sb.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(
      new URL(
        "/login?error=oauth_exchange_failed",
        process.env.APP_URL ?? "http://localhost:3000"
      )
    );
  }

  return NextResponse.redirect(
    new URL(next, process.env.APP_URL ?? "http://localhost:3000")
  );
}
