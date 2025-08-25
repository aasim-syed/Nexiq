import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

type CookieOptions = Record<string, unknown>;

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
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...(options as any) });
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: "", ...(options as any), maxAge: 0 });
        },
      },
    }
  );
}
