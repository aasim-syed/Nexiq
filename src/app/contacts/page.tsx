import DataTable from "@/components/DataTable";
import KanbanBoard from "@/components/kanbanBoard";

type ContactRow = {
  id: number;
  name: string;
  email: string;
  tags: string;
  stage: string;
};

type ContactColumnKey = "name" | "email" | "tags" | "stage";

export default function Page() {
  const rows: ContactRow[] = [
    { id: 1, name: "Jane Doe", email: "jane@ex.com", tags: "lead", stage: "Engaged" },
    { id: 2, name: "John Smith", email: "john@ex.com", tags: "vip", stage: "Lead" },
  ];

  const columns: ReadonlyArray<{ key: ContactColumnKey; header: string }> = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "tags", header: "Tags" },
    { key: "stage", header: "Stage" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h1">Contacts</div>
        <div className="space-x-2">
          <button className="btn">+ Add Contact</button>
          <button className="btn">Import CSV</button>
        </div>
      </div>

      {/* Assuming DataTable accepts `columns` and `data` with matching keys */}
      <DataTable columns={columns} data={rows} />

      <div className="h2">Pipeline</div>
      <KanbanBoard />
    </div>
  );
}
