import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function requireUser() {
  const sb = await createClient();
  const { data } = await sb.auth.getUser();
  if (!data?.user) redirect("/login");
  return data.user;
}
