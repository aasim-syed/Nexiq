import { createRSCClient } from "@/utils/supabase/server";

export async function getDashboardData() {
  const sb = await createRSCClient();

  // Contacts count
  const { count: contactsCount } = await sb
    .from("contacts")
    .select("*", { count: "exact", head: true });

  // Emails sent this month (sum of sent_count in current month)
  const { data: emailAgg } = await sb.rpc("dashboard_emails_this_month");
  const emailsThisMonth = emailAgg?.total ?? 0;

  // Active funnels count
  const { count: funnelsCount } = await sb
    .from("funnels")
    .select("*", { count: "exact", head: true })
    .eq("status", "active");

  // Conversion last 7d: toy example via events
  const { data: convEvents } = await sb
    .from("activity_events")
    .select("id")
    .eq("kind", "conversion")
    .gte("created_at", new Date(Date.now() - 7 * 864e5).toISOString());
  const conversionRate7d = convEvents ? Math.min(100, convEvents.length) : 0; // replace with real calc

  // Recent activity feed
  const { data: recent } = await sb
    .from("activity_events")
    .select("id, message, created_at")
    .order("created_at", { ascending: false })
    .limit(10);

  return {
    contactsCount: contactsCount ?? 0,
    emailsThisMonth,
    funnelsCount: funnelsCount ?? 0,
    conversionRate7d,
    recent: recent ?? [],
  };
}
