"use client";

import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Lock,
 Leaf,
  Home as HomeIcon,
} from "lucide-react";

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
      <main className="relative h-[100dvh] w-screen overflow-hidden bg-gradient-to-b from-[#d8ccb6] via-[#cdbb9c] to-[#bda98a]">

        {/* FONDO DEFINITIVO */}
        <div className="absolute inset-0 flex items-end justify-center">

          <img
            src="/images/tortuga.png"
            alt="One Meter"
            className="h-[125%] w-[300%] object-contain object-bottom scale-[1.25] md:scale-[1.50]"
          />

          {/* COLOR INTEGRADO */}
          <div className="absolute inset-0 bg-[#d8c5a3]/18" />

          {/* SUAVIZADO SUPERIOR */}
          <div className="absolute inset-x-0 top-0 h-[58vh] bg-gradient-to-b from-[#e6dccb]/55 via-[#e6dccb]/20 to-transparent" />

        </div>

        {/* CONTENIDO */}
        <section className="relative z-10 flex h-full w-full flex-col items-center justify-between px-5 py-8 text-center">

          {/* PARTE SUPERIOR */}
          <div className="flex w-full max-w-[720px] flex-col items-center pt-3 md:pt-6">

            {/* ICONO */}
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#d8ccb7] bg-[#efe7db]/90 shadow-md backdrop-blur-sm">

              <HomeIcon
                size={28}
                strokeWidth={2.2}
                className="text-green-700"
              />

            </div>

            {/* TEXTO */}
            <p className="mb-4 text-[12px] font-bold tracking-[0.45em] text-green-700 md:text-[13px]">
              ACCESO ANTICIPADO
            </p>

            {/* TITULO */}
            <h1 className="text-[58px] font-black leading-[0.88] tracking-[-0.065em] text-green-700 drop-shadow-sm md:text-[96px]">
              ONE
              <br />
              METER
            </h1>

            {/* SUB */}
            <p className="mt-5 text-[11px] font-semibold tracking-[0.38em] text-[#22313f] md:text-[15px]">
              PREPARANDO EXPERIENCIA
            </p>

            {/* BARRA */}
            <div className="mt-7 w-full max-w-[460px] md:max-w-[560px]">

              <div className="relative h-3 overflow-hidden rounded-full bg-[#d9c8a4]/95 shadow-inner md:h-4">

                <div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-green-700 to-green-500 transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />

                <div
                  className="absolute top-0 h-full w-20 bg-white/45 blur-xl"
                  style={{
                    left: `calc(${progress}% - 40px)`,
                    transition: "all 0.15s linear",
                  }}
                />

              </div>

              {/* PORCENTAJE */}
              <div className="mt-4 flex justify-end">

                <div className="rounded-full border border-[#d7c9b0] bg-[#efe7db]/88 px-4 py-1 shadow-md backdrop-blur-md">

                  <p className="text-[18px] font-black tracking-[0.18em] text-green-800 md:text-[22px]">
                    {progress}%
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* BENEFICIOS */}
          <div className="w-full max-w-[780px] pb-2">

            <div className="rounded-[30px] border border-[#cbb796] bg-[#cdbb9c]/55 px-3 py-5 shadow-[0_18px_55px_rgba(69,49,22,0.20)] backdrop-blur-xl md:px-5 md:py-6">

              <div className="grid grid-cols-3">

                {/* ITEM */}
                <div className="flex flex-col items-center justify-center px-2 text-center">

                  <ShieldCheck
                    size={32}
                    className="mb-2 text-green-700 md:mb-3 md:h-10 md:w-10"
                    strokeWidth={2.2}
                  />

                  <p className="text-[10px] font-bold leading-tight text-green-800 md:text-[15px]">
                    SIN COMPROMISO
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex flex-col items-center justify-center border-x border-[#bfa989] px-2 text-center">

                  <Lock
                    size={32}
                    className="mb-2 text-green-700 md:mb-3 md:h-10 md:w-10"
                    strokeWidth={2.2}
                  />

                  <p className="text-[10px] font-bold leading-tight text-green-800 md:text-[15px]">
                    100% SEGURO
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex flex-col items-center justify-center px-2 text-center">

                  <Leaf
                    size={32}
                    className="mb-2 text-green-700 md:mb-3 md:h-10 md:w-10"
                    strokeWidth={2.2}
                  />

                  <p className="text-[10px] font-bold leading-tight text-green-800 md:text-[15px]">
                    PENSADO PARA
                    <br />
                    TU FUTURO
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#efe7db]">
      {step === 1 && <Step1 setStep={setStep} setAmount={setAmount} />}
      {step === 2 && <Step2 amount={amount} setStep={setStep} />}
      {step === 3 && <Step3 amount={amount} setStep={setStep} />}
      {step === 4 && <Step4 setStep={setStep} />}
    </main>
  );
}