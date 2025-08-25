import { requireUser } from "@/utils/auth/requireUser";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  await requireUser(); // redirects to /login if not authed
  return <>{children}</>;
}
