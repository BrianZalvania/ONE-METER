"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Step1V2 from "@/components/version-2/Step1V2";
import Step2V2 from "@/components/version-2/Step2V2";
import Step3V2 from "@/components/version-2/Step3V2";
import Step4V2 from "@/components/version-2/Step4V2";

export default function Version2Page() {
  const [loading, setLoading] = useState(true);
  const [barLoaded, setBarLoaded] = useState(false);

  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (window.location.search) {
      window.history.replaceState(null, "", "/version-2");
    }

    let startLoading = 0;
    let finishLoading = 0;

    const resetLoading = window.requestAnimationFrame(() => {
      setLoading(true);
      setBarLoaded(false);
      setStep(1);
      setAmount(0);

      startLoading = window.requestAnimationFrame(() => {
        setBarLoaded(true);
      });

      finishLoading = window.setTimeout(() => {
        setLoading(false);
      }, 3200);
    });

    return () => {
      window.cancelAnimationFrame(resetLoading);
      window.cancelAnimationFrame(startLoading);
      window.clearTimeout(finishLoading);
    };
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[100dvh] items-center justify-center bg-[#f7f4ed] px-4 py-5 text-[#24313c]">
        <section className="relative h-[calc(100dvh-40px)] w-full max-w-[690px] overflow-hidden rounded-[28px] bg-[#fffdf8] shadow-[0_24px_80px_rgba(28,35,25,0.12)]">
          <Image
            src="/images/pagev2.png"
            alt="One Meter"
            fill
            priority
            sizes="(min-width: 768px) 690px, 100vw"
            className="object-cover object-bottom"
          />

          <div className="absolute inset-x-0 top-0 h-[44%] bg-gradient-to-b from-[#fffdf8] via-[#fffdf8]/96 to-[#fffdf8]/18" />
          <div className="absolute inset-x-0 bottom-0 h-[8%] bg-gradient-to-t from-[#fffdf8]/70 to-transparent" />

          <div className="relative z-10 flex h-full flex-col items-center px-5 pt-10 text-center sm:px-8 sm:pt-14">
            <div className="text-[#28622e]">
              <p className="text-[39px] font-black italic leading-[0.82] tracking-[-0.04em] sm:text-[48px]">
                ONE
              </p>
              <p className="text-[26px] font-black italic leading-none tracking-[-0.04em] sm:text-[32px]">
                METER
              </p>
              <div className="mx-auto mt-2 h-[18px] w-[150px] overflow-hidden sm:w-[178px]">
                <div className="h-[34px] rounded-[50%] border-t-[3px] border-[#5d923b]" />
              </div>
            </div>

            <h1 className="mt-14 text-[34px] font-black leading-tight tracking-[-0.03em] text-[#24313c] min-[430px]:text-[40px] sm:text-[44px]">
              Calculando tu <span className="text-[#28622e]">futuro</span>...
            </h1>

            <p className="mt-5 max-w-[440px] text-[20px] font-medium leading-snug text-[#3d4650] sm:text-[24px]">
              Estamos preparando tu proyecci&oacute;n
              <br />
              de ahorro en metros cuadrados.
            </p>

            <div className="mt-6 w-full max-w-[360px] sm:mt-10 sm:max-w-[430px]">
              <div className="h-[5px] overflow-hidden rounded-full bg-[#e8f0df] shadow-[inset_0_1px_2px_rgba(40,98,46,0.12)]">
                <div
                  className="h-full rounded-full bg-[#28622e] transition-[width] duration-[3000ms] ease-out"
                  style={{ width: barLoaded ? "100%" : "0%" }}
                />
              </div>
            </div>

            <div className="min-h-[38vh] w-full flex-1" />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#f8f2e6]">
      {step === 1 && <Step1V2 setStep={setStep} setAmount={setAmount} />}
      {step === 2 && <Step2V2 amount={amount} setStep={setStep} />}
      {step === 3 && <Step3V2 amount={amount} setStep={setStep} />}
      {step === 4 && <Step4V2 amount={amount} setStep={setStep} />}
    </main>
  );
}
