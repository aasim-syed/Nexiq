"use client";
import Link from "next/link";


export default function Navbar() {
return (
<header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
<div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
<nav className="flex items-center gap-4 text-sm">
<Link href="/" className="hover:underline">Dashboard</Link>
<Link href="/funnels" className="hover:underline">Funnels</Link>
<Link href="/emails" className="hover:underline">Emails</Link>
<Link href="/contacts" className="hover:underline">Contacts</Link>
<Link href="/billing" className="hover:underline">Billing</Link>
</nav>
<div className="flex items-center gap-3">
<button className="btn">Profile</button>
</div>
</div>
</header>
);
}