type Card = { id: string; name: string; email?: string };


const seed: Record<string, Card[]> = {
Lead: [ { id: "1", name: "Jane Doe", email: "jane@ex.com" }, { id: "2", name: "Tim Cook", email: "tim@ex.com" } ],
Engaged: [ { id: "3", name: "John Smith", email: "john@ex.com" } ],
Converted: [ { id: "4", name: "Alice Ray", email: "alice@ex.com" } ],
};


export default function KanbanBoard() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
{Object.entries(seed).map(([col, cards]) => (
<div key={col} className="card">
<div className="card-body">
<div className="h2 mb-3">{col}</div>
<div className="space-y-3">
{cards.map((c) => (
<div key={c.id} className="rounded-xl border p-3 bg-white">
<div className="font-medium">{c.name}</div>
<div className="text-xs text-gray-500">{c.email}</div>
</div>
))}
</div>
</div>
</div>
))}
</div>
);
}