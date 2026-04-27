"use client";

import { useEffect, useState } from "react";

import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setLoading(false);
          }, 250);

          return 100;
        }

        return prev + 2;
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">

        {/* Fondos */}
        <div className="absolute w-[700px] h-[700px] bg-white/10 rounded-full blur-[180px] animate-pulse" />
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-white/10 rounded-full blur-3xl animate-pulse" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:60px_60px]" />

        <div className="relative text-center px-6 w-full max-w-2xl animate-[fadeUp_1s_ease-out]">

          <p className="text-xs tracking-[0.5em] text-gray-500 mb-5">
            ACCESO ANTICIPADO
          </p>

          <h1 className="text-6xl md:text-8xl font-semibold tracking-[-0.05em] leading-none mb-6">
            ONE{" "}
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              METER
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base tracking-[0.35em] mb-10">
            PREPARANDO EXPERIENCIA
          </p>

          {/* Barra real */}
          <div className="relative w-full h-[10px] bg-white/10 rounded-full overflow-hidden border border-white/10">

            <div
              className="h-full rounded-full bg-gradient-to-r from-white via-gray-300 to-white transition-all duration-100"
              style={{ width: `${progress}%` }}
            />

            {/* brillo */}
            <div
              className="absolute top-0 h-full w-14 bg-white/40 blur-md"
              style={{
                left: `calc(${progress}% - 28px)`,
                transition: "all 0.1s linear",
              }}
            />

          </div>

          <p className="mt-5 text-sm tracking-[0.25em] text-gray-500">
            {progress}%
          </p>

          <div className="space-y-2 mt-6">
            <p className="text-gray-300 text-sm">
              Inicializando entorno seguro...
            </p>

            <p className="text-gray-500 text-xs tracking-[0.25em]">
              INVERSIÓN INTELIGENTE
            </p>
          </div>

        </div>

        <style jsx global>{`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(24px) scale(0.98);
              filter: blur(12px);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
              filter: blur(0);
            }
          }
        `}</style>

      </main>
    );
  }

  return (
    <main className="min-h-screen text-white flex items-center justify-center p-6 bg-gradient-to-br from-slate-950 via-black to-slate-900 relative overflow-hidden">

      <div className="absolute top-[-180px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[180px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-120px] w-[500px] h-[500px] bg-blue-500/10 blur-[180px] rounded-full" />

      <div className="relative w-full max-w-3xl bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12">

        {step === 1 && <Step1 setStep={setStep} setAmount={setAmount} />}
        {step === 2 && <Step2 amount={amount} setStep={setStep} />}
        {step === 3 && <Step3 amount={amount} setStep={setStep} />}
        {step === 4 && <Step4 />}

      </div>

    </main>
  );
}