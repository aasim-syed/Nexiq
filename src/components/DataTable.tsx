export type Column<T> = { key: keyof T; header: string; render?: (row: T) => React.ReactNode };


export default function DataTable<T extends { id: string | number }>({ columns, data }: { columns: Column<T>[]; data: T[]; }) {
return (
<div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
<table className="min-w-full divide-y divide-gray-200">
<thead className="bg-gray-50">
<tr>
{columns.map((c) => (
<th key={String(c.key)} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
{c.header}
</th>
))}
</tr>
</thead>
<tbody className="divide-y divide-gray-100 bg-white">
{data.map((row) => (
<tr key={row.id}>
{columns.map((c) => (
<td key={String(c.key)} className="px-4 py-3 text-sm text-gray-800">
{c.render ? c.render(row) : String(row[c.key])}
</td>
))}
</tr>
))}
</tbody>
</table>
</div>
);
}