import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";


export const metadata: Metadata = {
title: "All‑in‑One Marketing SaaS (MVP)",
description: "Funnels • Email • CRM — Solo‑friendly MVP",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
<body className="min-h-screen bg-gray-50 text-gray-900">
<div className="flex min-h-screen">
<Sidebar />
<div className="flex-1 flex flex-col">
<Navbar />
<main className="p-6 max-w-7xl w-full mx-auto">{children}</main>
</div>
</div>
</body>
</html>
);
}