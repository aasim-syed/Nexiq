export default function EditorPlaceholder() {
return (
<div className="card">
<div className="card-body">
<div className="h2 mb-2">Funnel Editor (MVP)</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-1 space-y-2">
<div className="font-medium">Blocks</div>
<button className="btn w-full">Text</button>
<button className="btn w-full">Image</button>
<button className="btn w-full">Form</button>
<button className="btn w-full">Button</button>
</div>
<div className="md:col-span-2">
<div className="rounded-2xl border bg-white p-6 min-h-[320px]">
<div className="text-xl font-semibold mb-3">Header Text: {"\"Get My Ebook\""}</div>

<div className="h-24 bg-gray-100 rounded-xl mb-3" />
<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
<input placeholder="Name" className="rounded-xl border px-3 py-2" />
<input placeholder="Email" className="rounded-xl border px-3 py-2" />
<button className="btn">Submit</button>
</div>
</div>
</div>
</div>
</div>
</div>
);
}