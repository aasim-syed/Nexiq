export default function MetricsCard({ title, value, sub }: { title: string; value: string; sub?: string; }) {
return (
<div className="card">
<div className="card-body">
<div className="stat">{title}</div>
<div className="text-2xl font-semibold">{value}</div>
{sub && <div className="text-xs text-gray-500 mt-1">{sub}</div>}
</div>
</div>
);
}