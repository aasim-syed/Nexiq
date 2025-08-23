export default function Page() {
return (
<div className="space-y-6">
<div className="h1">Billing</div>
<div className="card">
<div className="card-body">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
<div>
<div className="text-sm text-gray-500">Current Plan</div>
<div className="text-lg font-semibold">Free</div>
<div className="text-xs text-gray-500">Contacts: 320 / 500</div>
</div>
<button className="btn">Upgrade to Starter — $29/mo</button>
</div>
</div>
</div>
</div>
);
}