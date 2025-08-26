import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import type { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

type CookieOpts = Partial<ResponseCookie>;

/**
 * For Server Components only (cannot modify cookies).
 * Use this in pages/layouts/components on the server.
 */
export async function createRSCClient() {
  const cookieStore = await cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value ?? null;
        },
        // No-ops: Next.js forbids cookie mutation in RSCs.
        set(_name: string, _value: string, _options?: CookieOpts) {},
        remove(_name: string, _options?: CookieOpts) {},
      },
    }
  );
}
