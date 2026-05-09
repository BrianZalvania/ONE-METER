"use client";

import {
  Check,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Home,
} from "lucide-react";

type Props = {
  setStep: (value: number) => void;
};

export default function Step4({ setStep }: Props) {
  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-[#bfa98a]">

      {/* FONDO PREMIUM CREMA OSCURO */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cdbb9f] via-[#b89f7c] to-[#9d8262]" />

      {/* GLOW */}
      <div className="absolute left-1/2 top-1/2 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#fff4dd]/25 blur-[160px]" />

      {/* POSTER */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[760px] -translate-x-1/2 overflow-hidden bg-[#e7dbc7] shadow-[0_0_120px_rgba(50,30,10,0.28)]">

        {/* GRID SUAVE */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#00000033_1px,transparent_1px),linear-gradient(to_bottom,#00000033_1px,transparent_1px)] bg-[size:70px_70px]" />
        </div>

        {/* DEGRADADOS */}
        <div className="absolute inset-x-0 top-0 h-[45vh] bg-gradient-to-b from-[#fff4de]/35 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#a88c68]/18 via-[#cbb08c]/12 to-transparent" />

        {/* BRILLO */}
        <div className="absolute bottom-[-120px] left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#fff6e6]/35 blur-[120px]" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-5">
        <div className="w-full max-w-[620px] text-center">

          {/* CHECK */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-green-700 bg-[#d9ecd7] shadow-[0_18px_50px_rgba(22,101,52,0.18)] md:h-24 md:w-24">
            <Check
              size={42}
              strokeWidth={2.5}
              className="text-green-700 md:h-12 md:w-12"
            />
          </div>

          {/* BADGE */}
          <div className="mx-auto mt-5 inline-flex items-center gap-2 rounded-full border border-[#b89d77] bg-[#f4e8d4]/92 px-5 py-2 text-[10px] font-medium tracking-wide text-[#4b5563] shadow-[0_8px_18px_rgba(0,0,0,0.08)] backdrop-blur-xl md:text-sm">
            <span className="h-2 w-2 rounded-full bg-green-600" />
            ACCESO CONFIRMADO
          </div>

          {/* TITULO */}
          <h1 className="mt-6 text-[36px] font-black leading-[0.9] tracking-[-0.06em] text-[#050816] md:mt-8 md:text-[72px]">
            Listo.
            <br />
            <span className="text-green-700">
              Ya estás adentro
            </span>
          </h1>

          {/* TEXTO */}
          <p className="mx-auto mt-5 max-w-[540px] px-2 text-[13px] leading-relaxed text-[#374151] md:text-[18px]">
            Te avisaremos antes que al resto cuando{" "}
            <span className="font-bold text-green-700">
              ONE METER
            </span>{" "}
            esté disponible.
          </p>

          {/* CARD 1 */}
          <div className="mx-auto mt-6 flex max-w-[560px] items-center gap-4 rounded-[26px] border border-[#d5c1a3] bg-[#f6edde]/88 px-5 py-4 text-left shadow-[0_20px_40px_rgba(70,45,20,0.12)] backdrop-blur-xl">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eadcc2] shadow-inner">
              <Home
                size={26}
                className="text-green-700"
              />
            </div>

            <p className="text-[14px] font-semibold leading-relaxed text-[#111827] md:text-[16px]">
              Cada gran propiedad empieza con una decisión.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="mx-auto mt-4 flex max-w-[560px] items-center gap-4 rounded-[26px] border border-[#d5c1a3] bg-[#f6edde]/75 px-5 py-4 text-left shadow-[0_14px_30px_rgba(70,45,20,0.10)] backdrop-blur-xl">

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#eadcc2] shadow-inner">
              <Sparkles
                size={26}
                className="text-green-700"
              />
            </div>

            <p className="text-[12px] leading-relaxed text-[#4b5563] md:text-[15px]">
              Estamos preparando una experiencia moderna,
              elegante y pensada para ayudarte a visualizar
              tu próximo hogar.
            </p>
          </div>

          {/* BOTON */}
          <button
            onClick={() => setStep(1)}
            className="mx-auto mt-7 flex items-center justify-center gap-3 rounded-2xl bg-green-700 px-8 py-4 text-[15px] font-bold text-white shadow-[0_22px_45px_rgba(22,101,52,0.28)] transition-all duration-300 hover:scale-[1.03] hover:bg-green-800 md:text-[17px]"
          >
            Volver al inicio

            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-green-700 shadow-sm">
              <ArrowRight
                size={18}
                strokeWidth={3}
              />
            </div>
          </button>

          {/* FOOTER */}
          <div className="mt-5 flex items-center justify-center gap-2 text-[10px] text-[#4b5563] md:text-[12px]">
            <ShieldCheck
              size={14}
              className="text-green-700"
            />
            Gracias por confiar en ONE METER.
          </div>

        </div>
      </div>
    </div>
  );
}