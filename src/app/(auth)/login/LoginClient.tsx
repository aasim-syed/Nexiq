"use client";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";

export default function LoginClient() {
  const sb = createClient();
  const [loading, setLoading] = useState(false);

  async function signInWith(provider: "google" | "apple") {
    setLoading(true);
    // Send users to a dedicated callback that exchanges the code for a session
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");

    const { error } = await sb.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${origin}/auth/callback` },
    });

    if (error) alert(error.message);
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto mt-16 card">
      <div className="card-body">
        <div className="h1 mb-2">Sign in</div>
        <p className="text-sm text-gray-600 mb-4">
          Use your Google or Apple account.
        </p>
        <div className="space-y-3">
          <button
            className="btn w-full"
            onClick={() => signInWith("google")}
            disabled={loading}
          >
            Continue with Google
          </button>

          {/* Keep Apple visible only after it's enabled in Supabase */}
          <button
            className="btn w-full"
            onClick={() => signInWith("apple")}
            disabled={loading}
          >
            Continue with Apple
          </button>
        </div>
      </div>
    </div>
  );
}
