"use client";

import { useState } from "react";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!password.trim()) {
      setError("Ingresá la contraseña.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Contraseña incorrecta.");
        return;
      }

      router.push("/admin/leads");
    } catch {
      setError("Error del servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#d8ccb6] via-[#c8b894] to-[#b6a17c] px-4">
      <div className="w-full max-w-md rounded-[32px] border border-[#cbb896] bg-[#efe7db]/92 p-8 shadow-[0_25px_80px_rgba(75,55,25,0.22)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d7c9b0] bg-[#fff8ec] shadow-md">
          <ShieldCheck size={38} className="text-green-700" />
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm font-bold tracking-[0.25em] text-green-700">
            PANEL PRIVADO
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-[-0.04em] text-gray-950">
            ONE METER
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Ingresá la contraseña para acceder al panel de leads.
          </p>
        </div>

        <div
          className={`mt-8 flex items-center gap-3 rounded-2xl border px-4 py-4 shadow-md ${
            error
              ? "border-red-400 bg-red-50"
              : "border-[#d7c9b0] bg-[#fffaf2]"
          }`}
        >
          <Lock
            size={20}
            className={error ? "text-red-600" : "text-green-700"}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
            className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-500"
          />
        </div>

        {error && (
          <p className="mt-2 text-sm font-bold text-red-600">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-green-700 px-5 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(22,101,52,0.30)] transition-all duration-300 hover:scale-[1.01] hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Ingresando..." : "Entrar al panel"}

          <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-green-700">
            <ArrowRight size={20} strokeWidth={3} />
          </span>
        </button>
      </div>
    </main>
  );
}