import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";


export async function updateSession(request: NextRequest) {
const response = NextResponse.next({ request: { headers: request.headers } });


const supabase = createServerClient(
process.env.NEXT_PUBLIC_SUPABASE_URL!,
process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
{
cookies: {
get(name: string) {
return request.cookies.get(name)?.value;
},
set(name: string, value: string, options: any) {
response.cookies.set({ name, value, ...options });
},
remove(name: string, options: any) {
response.cookies.set({ name, value: "", ...options, maxAge: 0 });
},
},
}
);


// Force refresh session if needed
await supabase.auth.getUser();


return response;
}