import { NextResponse } from "next/server";
import { createRSCClient } from "@/utils/supabase/server";

export async function POST() {
  const sb = await createRSCClient();              // <-- await the async factory
  await sb.auth.signOut();
  return NextResponse.redirect(new URL("/", process.env.APP_URL ?? "http://localhost:3000"));
}
