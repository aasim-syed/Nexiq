"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";


const items = [
{ href: "/", label: "Home" },
{ href: "/funnels", label: "Funnels" },
{ href: "/emails", label: "Emails" },
{ href: "/contacts", label: "Contacts" },
{ href: "/billing", label: "Billing" },
];


export default function Sidebar() {
const pathname = usePathname();
return (
<aside className="hidden md:block w-60 border-r bg-white">
<div className="p-4 text-lg font-semibold">My SaaS</div>
<ul className="px-2 space-y-1">
{items.map((it) => (
<li key={it.href}>
<Link
href={it.href}
className={`block rounded-xl px-3 py-2 text-sm hover:bg-gray-100 ${
pathname === it.href ? "bg-gray-100 font-medium" : ""
}`}
>
{it.label}
</Link>
</li>
))}
</ul>
</aside>
);
}