import DataTable from "@/components/DataTable";
import KanbanBoard from "@/components/kanbanBoard";


export default function Page() {
const rows = [
{ id: 1, name: "Jane Doe", email: "jane@ex.com", tags: "lead", stage: "Engaged" },
{ id: 2, name: "John Smith", email: "john@ex.com", tags: "vip", stage: "Lead" },
];
const columns = [
{ key: "name", header: "Name" },
{ key: "email", header: "Email" },
{ key: "tags", header: "Tags" },
{ key: "stage", header: "Stage" },
] as const;


return (
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="h1">Contacts</div>
<div className="space-x-2">
<button className="btn">+ Add Contact</button>
<button className="btn">Import CSV</button>
</div>
</div>
<DataTable columns={columns as any} data={rows} />
<div className="h2">Pipeline</div>
<KanbanBoard />
</div>
);
}