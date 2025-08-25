import { requireUser } from "@/utils/auth/requireUser";

export default async function Home() {
  const user = await requireUser(); // redirects to /login if not signed in
  return (
    <main style={{ padding: 32 }}>
      <h1>Welcome, {user.email}</h1>
      <p>You're authenticated. Put your dashboard here.</p>
    </main>
  );
}
