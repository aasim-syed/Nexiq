import EditorPlaceholder from "@/components/EditorPlaceholder";
import DataTable from "@/components/DataTable";


export default function Page() {
const rows = [
{ id: 1, name: "Funnel A", visitors: 120, conv: "14%", updated: "2d ago" },
{ id: 2, name: "Funnel B", visitors: 90, conv: "5%", updated: "5d ago" },
];
const columns = [
{ key: "name", header: "Name" },
{ key: "visitors", header: "Visitors" },
{ key: "conv", header: "Conversions" },
{ key: "updated", header: "Last Edited" },
] as const;


return (
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="h1">Funnels</div>
<button className="btn">+ Create Funnel</button>
</div>
<DataTable columns={columns as any} data={rows} />
<EditorPlaceholder />
</div>
);
}