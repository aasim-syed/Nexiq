import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/";

  const base = process.env.APP_URL ?? "http://localhost:3000";
  if (!code) {
    return NextResponse.redirect(new URL("/login", base));
  }

  // Prepare the redirect response FIRST so Supabase can attach cookies to it.
  const redirectResponse = NextResponse.redirect(new URL(next, base));

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.headers.get("cookie")
            ?.split(";")
            .map((c: string) => c.trim())
            .find((c: string) => c.startsWith(`${name}=`))
            ?.split("=")[1] ?? null;
        },
        set(name: string, value: string, options?: Partial<import("next/dist/compiled/@edge-runtime/cookies").ResponseCookie>) {
          redirectResponse.cookies.set({ name, value, ...(options ?? {}) });
        },
        remove(name: string, options?: Partial<import("next/dist/compiled/@edge-runtime/cookies").ResponseCookie>) {
          redirectResponse.cookies.set({ name, value: "", ...(options ?? {}), maxAge: 0 });
        },
      },
    }
  );

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(new URL("/login?error=oauth_exchange_failed", base));
  }

  return redirectResponse;
}
