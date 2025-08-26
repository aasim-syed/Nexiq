import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const next = url.searchParams.get("next") || "/";

  // Always redirect to the same origin that handled this callback
  const base = `${url.protocol}//${url.host}`;

  if (!code) {
    return NextResponse.redirect(new URL("/login", base));
  }

  // Prepare redirect so Supabase can attach cookies to THIS response
  const redirectResponse = NextResponse.redirect(new URL(next, base));

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          // read cookies from the incoming request headers
          const cookieHeader = (request.headers.get("cookie") ?? "");
          const match = cookieHeader
            .split(";")
            .map((c) => c.trim())
            .find((c) => c.startsWith(`${name}=`));
          return match ? match.split("=")[1] : null;
        },
        set(name, value, options) {
          redirectResponse.cookies.set({ name, value, ...(options ?? {}) });
        },
        remove(name, options) {
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
