export default function Page() {
return (
<div className="space-y-6">
<div className="h1">Drip Sequence</div>
<div className="card">
<div className="card-body">
<div className="flex flex-col md:flex-row items-center gap-4">
<div className="rounded-2xl border p-4 min-w-[220px]">Email 1</div>
<div>→ (Wait 2 days) →</div>
<div className="rounded-2xl border p-4 min-w-[220px]">Email 2</div>
<div>→ (Wait 2 days) →</div>
<div className="rounded-2xl border p-4 min-w-[220px]">Email 3</div>
</div>
<div className="mt-4">
<button className="btn">+ Add Email</button>
</div>
</div>
</div>
</div>
);
}