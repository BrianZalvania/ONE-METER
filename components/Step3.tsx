"use client";

import { useState } from "react";
import {
  Zap,
  Home,
  CalendarCheck,
  Gift,
  Mail,
  Lock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { validateEmail } from "@/utils/validateEmail";

type Props = {
  amount: number;
  setStep: (value: number) => void;
};

export default function Step3({ amount, setStep }: Props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    const errorMessage = validateEmail(email);

    if (errorMessage) {
      setError(errorMessage);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          amount,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "No se pudo guardar el email.");
        return;
      }

      setStep(4);
    } catch {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    { icon: Home, title: "Convertí tu ahorro", desc: "en valor real" },
    { icon: CalendarCheck, title: "Acceso anticipado", desc: "al lanzamiento" },
    { icon: Gift, title: "Oportunidades", desc: "exclusivas" },
  ];

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-gradient-to-b from-[#d8ccb6] via-[#c8b894] to-[#b6a17c]">
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[760px] -translate-x-1/2 overflow-hidden bg-[#efe7db] shadow-[0_0_90px_rgba(75,55,25,0.22)]">
        <img
          src="/images/step3.png"
          alt="Casa moderna"
          className="
            absolute
            bottom-[-92px]
            md:bottom-[-120px]
            left-0
            h-[43vh]
            md:h-[52vh]
            w-full
            object-cover
            object-[center_bottom]
            md:object-[center_85%]
            opacity-95
          "
        />

        <div className="absolute inset-x-0 bottom-[14vh] md:bottom-[22vh] h-[19vh] md:h-[22vh] bg-gradient-to-b from-[#efe7db] via-[#efe7db]/82 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-b from-[#efe7db] via-[#efe7db]/98 to-[#efe7db]/62" />
      </div>

      <div className="relative z-10 flex h-full w-full items-start justify-center px-4 pt-3 md:items-center md:pt-0">
        <div className="w-full max-w-[650px]">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cbb896] bg-[#f7efe2]/90 px-3 py-1.5 text-[10px] text-gray-700 shadow-md backdrop-blur-xl md:px-4 md:py-2 md:text-sm">
            <Zap size={14} className="text-green-600" />
            Simulación rápida · En 10 segundos ves tu resultado
          </div>

          <h1 className="mt-2 text-[25px] font-bold leading-[1.03] tracking-[-0.04em] text-gray-950 md:mt-5 md:text-[50px]">
            Estás a un paso de empezar{" "}
            <span className="text-green-700">tu propiedad</span>
          </h1>

          <p className="mt-1.5 max-w-[520px] text-[13px] leading-snug text-gray-700 md:mt-3 md:text-[18px]">
            Dejá tu email y{" "}
            <span className="font-medium text-green-700">accedé primero</span>{" "}
            al lanzamiento.
          </p>

          <div className="mt-3 space-y-2 md:mt-5 md:space-y-3">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-[#eadcc5] bg-[#fff8ec]/88 px-4 py-2.5 shadow-[0_10px_24px_rgba(80,60,30,0.10)] backdrop-blur-xl md:gap-4 md:py-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efe6cf] md:h-16 md:w-16">
                    <Icon
                      size={24}
                      className="text-green-700 md:h-8 md:w-8"
                    />
                  </div>

                  <div className="text-left">
                    <p className="text-[14px] font-bold leading-tight text-gray-950 md:text-[18px]">
                      {item.title}
                    </p>

                    <p className="text-[12px] leading-tight text-gray-700 md:text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            className={`mt-3 flex items-center gap-3 rounded-xl border px-4 py-3 shadow-[0_8px_22px_rgba(80,60,30,0.08)] backdrop-blur-xl md:mt-5 md:py-4 ${
              error
                ? "border-red-400 bg-red-50/90"
                : "border-[#d7c9b0] bg-[#fffaf2]/82"
            }`}
          >
            <Mail
              size={21}
              className={`shrink-0 ${
                error ? "text-red-600" : "text-green-700"
              }`}
            />

            <input
              type="email"
              placeholder="Tu email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="w-full bg-transparent text-[14px] text-gray-900 outline-none placeholder:text-gray-500 md:text-[17px]"
            />
          </div>

          {error && (
            <p className="mt-1.5 text-[11px] font-bold text-red-600 md:text-[12px]">
              {error}
            </p>
          )}

          <div className="mt-1.5 flex items-center gap-2 text-[9px] text-gray-700 md:mt-2 md:text-[12px]">
            <Lock size={12} className="shrink-0 text-gray-600" />
            Sin spam. Solo te escribimos cosas importantes.
          </div>

          <button
            onClick={handleContinue}
            disabled={loading}
            className={`mt-2.5 flex w-full items-center justify-center gap-3 rounded-xl px-5 py-2.5 text-[14px] font-bold text-white shadow-[0_14px_35px_rgba(22,101,52,0.32)] transition-all duration-300 md:mt-4 md:py-4 md:text-[18px] ${
              loading
                ? "cursor-not-allowed bg-green-900/70"
                : "bg-green-700 hover:scale-[1.01] hover:bg-green-800"
            }`}
          >
            {loading ? "Guardando..." : "Quiero acceso anticipado"}

            <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700 md:h-9 md:w-9">
              <ArrowRight size={21} strokeWidth={3} />
            </span>
          </button>

          <div className="mt-2 flex items-center gap-3 rounded-2xl bg-[#efe7db]/70 px-2 py-1.5 backdrop-blur-sm md:mt-5 md:py-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe6cf]/95 shadow-sm md:h-14 md:w-14">
              <ShieldCheck
                size={23}
                className="text-green-700 md:h-7 md:w-7"
              />
            </div>

            <p className="text-[11px] font-bold leading-snug text-gray-900 md:text-[14px]">
              Estamos preparando el lanzamiento.
              <br />
              Cupos limitados.
            </p>
          </div>

          <div className="h-[18vh] md:h-[12vh]" />
        </div>
      </div>
    </div>
  );
}