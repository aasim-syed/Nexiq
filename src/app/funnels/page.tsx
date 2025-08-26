import EditorPlaceholder from "@/components/EditorPlaceholder";
import DataTable from "@/components/DataTable";

type FunnelRow = {
  id: number;
  name: string;
  visitors: number;
  conv: string;
  updated: string;
};

type FunnelColumnKey = "name" | "visitors" | "conv" | "updated";

export default function Page() {
  const rows: FunnelRow[] = [
    { id: 1, name: "Funnel A", visitors: 120, conv: "14%", updated: "2d ago" },
    { id: 2, name: "Funnel B", visitors: 90, conv: "5%", updated: "5d ago" },
  ];

  const columns: ReadonlyArray<{ key: FunnelColumnKey; header: string }> = [
    { key: "name", header: "Name" },
    { key: "visitors", header: "Visitors" },
    { key: "conv", header: "Conversions" },
    { key: "updated", header: "Last Edited" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="h1">Funnels</div>
        <button className="btn">+ Create Funnel</button>
      </div>
      <DataTable columns={columns} data={rows} />
      <EditorPlaceholder />
    </div>
  );
}
