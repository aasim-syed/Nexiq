import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";


export async function POST() {
const sb = createClient();
await sb.auth.signOut();
return NextResponse.redirect(new URL("/", process.env.APP_URL));
}