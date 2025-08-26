import { redirect } from "next/navigation";
import { createRSCClient } from "@/utils/supabase/server";

export async function requireUser() {
  const sb = await createRSCClient();
  const { data } = await sb.auth.getUser();
  if (!data?.user) redirect("/login");
  return data.user;
}
