import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export default async function PrivatePage() {
  const sb = await createClient();
  const { data } = await sb.auth.getUser();
  if (!data?.user) redirect("/login");
  return <div className="h1">Hello {data.user.email}</div>;
}
