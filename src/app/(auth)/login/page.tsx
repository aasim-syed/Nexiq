import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import LoginClient from "./LoginClient";

export default async function LoginPage() {
  // server-side: if already signed in, send them home
  const sb = await createClient();
  const { data } = await sb.auth.getUser();
  if (data?.user) redirect("/");

  // otherwise render the client login UI
  return <LoginClient />;
}
