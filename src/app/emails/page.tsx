import DataTable from "@/components/DataTable";

type EmailRow = {
  id: number;
  name: string;
  status: string;
  open: string;
  ctr: string;
  date: string;
};

type EmailColumnKey = "name" | "status" | "open" | "ctr" | "date";

export default function Page() {
  const rows: EmailRow[] = [
    { id: 1, name: "Welcome Seq", status: "Sent", open: "45%", ctr: "10%", date: "Aug 15" },
    { id: 2, name: "Promo Blast", status: "Draft", open: "-", ctr: "-", date: "-" },
  ];

  const columns: ReadonlyArray<{ key: EmailColumnKey; header: string }> = [
    { key: "name", header: "Name" },
    { key: "status", header: "Status" },
    { key: "open", header: "Open Rate" },
    { key: "ctr", header: "CTR" },
    { key: "date", header: "Sent Date" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h1">Email Campaigns</div>
        <div className="space-x-2">
          <a href="/emails/sequence" className="btn">
            + New Sequence
          </a>
          <button className="btn">+ New Campaign</button>
        </div>
      </div>

      <DataTable columns={columns} data={rows} />

      <div className="card mt-6">
        <div className="card-body">
          <div className="h2 mb-3">Compose (Preview)</div>
          <div className="grid gap-3">
            <input
              placeholder="Subject: Welcome to my list!"
              className="rounded-2xl border px-3 py-2"
            />
            <textarea rows={6} placeholder="Body..." className="rounded-2xl border px-3 py-2" />
            <div className="flex items-center gap-2">
              <select className="rounded-2xl border px-3 py-2">
                <option>All Leads</option>
                <option>VIP</option>
              </select>
              <button className="btn">Send Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
