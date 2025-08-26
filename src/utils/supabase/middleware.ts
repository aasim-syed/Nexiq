import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

type CookieOpts = Partial<ResponseCookie>;

export async function updateSession(request: NextRequest) {
  const response = NextResponse.next({ request: { headers: request.headers } });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value ?? null;
        },
        set(name: string, value: string, options?: CookieOpts) {
          response.cookies.set({ name, value, ...(options ?? {}) });
        },
        remove(name: string, options?: CookieOpts) {
          response.cookies.set({ name, value: "", ...(options ?? {}), maxAge: 0 });
        },
      },
    }
  );

  // Refresh session if needed
  await supabase.auth.getUser();
  return response;
}
