"use client";

import { useState } from "react";
import { ShieldCheck, Lock, ArrowRight, Home } from "lucide-react";
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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#d8ccb6] via-[#c8b894] to-[#b6a17c] px-4 py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,248,236,0.60),transparent_55%)]" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff8ec]/20 blur-[90px]" />

      <div className="relative mx-auto w-full max-w-[430px] rounded-[34px] border border-[#cbb896] bg-[#efe7db]/92 p-6 shadow-[0_28px_90px_rgba(75,55,25,0.25)] backdrop-blur-xl md:p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#d7c9b0] bg-[#fff8ec] shadow-md">
          <ShieldCheck size={38} className="text-green-700" />
        </div>

        <div className="mt-6 text-center">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d7c9b0] bg-[#fff8ec]/80 px-4 py-2 text-[11px] font-black tracking-[0.18em] text-green-700">
            <Home size={14} />
            PANEL PRIVADO
          </div>

          <h1 className="mt-4 text-[42px] font-black leading-[0.9] tracking-[-0.06em] text-gray-950 md:text-5xl">
            ONE
            <br />
            <span className="text-green-700">METER</span>
          </h1>

          <p className="mx-auto mt-4 max-w-[310px] text-sm leading-relaxed text-gray-700">
            Ingresá la contraseña para acceder al panel privado de leads.
          </p>
        </div>

        <div
          className={`mt-7 flex items-center gap-3 rounded-2xl border px-4 py-4 shadow-md ${
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            className="w-full bg-transparent text-sm font-semibold text-gray-900 outline-none placeholder:font-medium placeholder:text-gray-500"
          />
        </div>

        {error && (
          <p className="mt-2 text-center text-sm font-bold text-red-600">
            {error}
          </p>
        )}

        <button
          onClick={handleLogin}
          disabled={loading}
          className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl bg-green-700 px-5 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(22,101,52,0.30)] transition-all duration-300 hover:scale-[1.01] hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Ingresando..." : "Entrar al panel"}

          <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-white text-green-700">
            <ArrowRight size={20} strokeWidth={3} />
          </span>
        </button>

        <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-medium text-gray-600">
          <ShieldCheck size={14} className="text-green-700" />
          Acceso protegido para administración.
        </div>
      </div>
    </main>
  );
}