import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

type CookieOpts = Partial<ResponseCookie>;

export async function createClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value ?? null;
        },
        set(name: string, value: string, options?: CookieOpts) {
          cookieStore.set({ name, value, ...(options ?? {}) });
        },
        remove(name: string, options?: CookieOpts) {
          cookieStore.set({ name, value: "", ...(options ?? {}), maxAge: 0 });
        },
      },
    }
  );
}
