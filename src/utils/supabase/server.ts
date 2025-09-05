// src/utils/supabase/server.ts
import { cookies, headers } from "next/headers";
import { createServerClient } from "@supabase/ssr";

/** RSC-only client: read cookies, never mutates them */
export async function createRSCClient() {
  const cookieStore = await cookies();
  const hdrs = await headers();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        // RSC read-only: supply all cookies, but no setAll
        getAll() {
          return cookieStore.getAll().map(c => ({ name: c.name, value: c.value }));
        },
      },
      // CRUCIAL: prevent supabase-js from trying to persist/refresh in RSC
      auth: {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      },
      global: {
        headers: {
          "x-forwarded-for": hdrs.get("x-forwarded-for") ?? "",
        },
      },
    }
  );
}
