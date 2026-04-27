"use client";

import { useState } from "react";

type Props = {
  setStep: (value: number) => void;
};

export default function Step3({ setStep }: Props) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Ingresá un email válido");
      return;
    }

    setStep(4);
  }

  return (
    <div className="relative text-center animate-[fadeUp_0.8s_ease-out]">

      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] bg-white/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        ACCESO ANTICIPADO
      </div>

      {/* Title */}
      <h1 className="relative text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight mb-4">
        Esto puede ser el comienzo de
        <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          tu próxima propiedad
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10">
        Sumate al lanzamiento y recibí primero toda la información.
      </p>

      {/* Benefits */}
      <div className="grid gap-4 text-left mb-10">

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-white font-medium">
            ✔ Convertí ahorro en valor real
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-white font-medium">
            ✔ Accedé antes al lanzamiento oficial
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
          <p className="text-white font-medium">
            ✔ Recibí novedades y oportunidades exclusivas
          </p>
        </div>

      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="email"
          placeholder="Ingresá tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-2xl bg-white/[0.05] border border-white/10 px-5 py-4 text-white placeholder:text-gray-500 outline-none focus:border-white/30"
        />

        <button
          type="submit"
          className="w-full py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.02] transition-all duration-300"
        >
          Quiero acceso anticipado →
        </button>
      </form>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-5">
        Sin spam. Solo información relevante.
      </p>

      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>

    </div>
  );
}