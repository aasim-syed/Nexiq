import MetricsCard from "@/components/MetricsCard";
import { requireUser } from "@/utils/auth/requireUser";
import { getDashboardData } from "@/services/dashboard";

export default async function Home() {
  const user = await requireUser();
  const data = await getDashboardData();

  return (
    <main style={{ padding: 32 }}>
      <h1>Welcome, {user.email}</h1>
      <p>You're authenticated. Put your dashboard here.</p>

      <div className="space-y-6 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricsCard title="Contacts" value={String(data.contactsCount)} sub="+12 this week" />
          <MetricsCard title="Emails Sent" value={String(data.emailsThisMonth)} sub="this month" />
          <MetricsCard title="Funnels" value={String(data.funnelsCount)} sub="active" />
          <MetricsCard title="Conversion" value={`${data.conversionRate7d}%`} sub="last 7 days" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card">
            <div className="card-body">
              <div className="h2 mb-3">Recent Activity</div>
              <ul className="space-y-2 text-sm">
                {data.recent.map((e) => (
                  <li key={e.id}>• {e.message}</li>
                ))}
                {data.recent.length === 0 && <li>No recent activity.</li>}
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="h2 mb-3">Quick Actions</div>
              <div className="space-y-2">
                <a href="/funnels" className="btn w-full">+ Create Funnel</a>
                <a href="/emails" className="btn w-full">+ New Email Campaign</a>
                <a href="/contacts" className="btn w-full">+ Add Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
