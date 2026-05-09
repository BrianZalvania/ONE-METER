"use client";

import { plans } from "@/data/plans";
import {
  Zap,
  Home,
  CalendarDays,
  Sofa,
  Building2,
  Wallet,
  Calculator,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

type Props = {
  amount: number;
  setStep: (value: number) => void;
};

export default function Step2({ amount, setStep }: Props) {
  const data = plans[amount as keyof typeof plans];

  const total5 = amount * 60;
  const total7 = amount * 84;
  const total10 = amount * 120;

  const money = (value: number) =>
    value.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    });

  const getNumber = (value: string) => {
    const clean = value.replace(",", ".").replace(/[^\d.]/g, "");
    return Number(clean);
  };

  const fiveM2 = getNumber(data.fiveYears);
  const sevenM2 = fiveM2 * 1.4;
  const tenM2 = getNumber(data.tenYears);

  const cards = [
    {
      years: "En 5 años",
      m2: fiveM2,
      icon: CalendarDays,
      title: "Tu primer espacio amplio",
      invested: total5,
    },
    {
      years: "En 7 años",
      m2: sevenM2,
      icon: Sofa,
      title: "Un hogar cómodo de 2 ambientes",
      invested: total7,
    },
    {
      years: "En 10 años",
      m2: tenM2,
      icon: Building2,
      title: "Un departamento completo de 3 ambientes",
      invested: total10,
    },
  ];

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-gradient-to-b from-[#d8ccb6] via-[#c8b894] to-[#b6a17c]">
      {/* FONDO CREMA */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,246,226,0.50),transparent_62%)]" />

      {/* POSTER CENTRAL */}
      <div className="absolute inset-y-0 left-1/2 w-full max-w-[760px] -translate-x-1/2 overflow-hidden bg-[#efe7db] shadow-[0_0_90px_rgba(75,55,25,0.22)]" />

      {/* CONTENIDO */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-3 py-2 md:px-4 md:py-3">
        <div className="w-full max-w-[650px]">
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cbb896] bg-[#f7efe2]/90 px-3 py-1.5 text-[10px] text-gray-700 shadow-md backdrop-blur-xl md:px-4 md:py-2 md:text-sm">
            <Zap size={14} className="text-green-600 md:h-[15px] md:w-[15px]" />
            Simulación rápida · En 10 segundos ves tu resultado
          </div>

          {/* TITULO */}
          <h1 className="mt-2 text-[23px] font-bold leading-[1.03] tracking-[-0.04em] text-gray-950 md:mt-4 md:text-[44px]">
            Con este nivel, ya estás construyendo tu{" "}
            <span className="text-green-700">futuro hogar</span>
          </h1>

          <p className="mt-1.5 text-[12px] leading-snug text-gray-700 md:mt-3 md:text-[17px]">
            Con tu ahorro de{" "}
            <span className="font-bold text-green-700">{money(amount)} por mes</span>,
            este es tu progreso estimado.
          </p>

          {/* ESTADO */}
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#eadcc5] bg-[#fff8ec]/82 px-3 py-2.5 shadow-[0_10px_28px_rgba(80,60,30,0.11)] backdrop-blur-xl md:mt-4 md:gap-4 md:px-4 md:py-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#efe6cf] md:h-16 md:w-16">
              <Home size={24} className="text-green-700 md:h-[34px] md:w-[34px]" />
            </div>

            <div className="text-left">
              <p className="text-[12px] font-bold text-green-700 md:text-[16px]">
                ESTÁS AVANZANDO
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-gray-700 md:mt-1 md:text-[14px]">
                Todos los meses estás comprando parte de tu propiedad.
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="mt-2 grid grid-cols-3 gap-1.5 md:mt-4 md:gap-3">
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#eadcc5] bg-[#fffaf2]/86 px-1.5 py-2 text-center shadow-[0_10px_24px_rgba(80,60,30,0.10)] backdrop-blur-xl md:px-4 md:py-4"
                >
                  <div className="mx-auto mb-1.5 inline-flex rounded-full bg-[#e9e4c9] px-2 py-0.5 text-[9px] font-bold text-gray-700 md:mb-3 md:px-3 md:py-1 md:text-[12px]">
                    {card.years}
                  </div>

                  <h2 className="text-[20px] font-bold text-gray-950 md:text-[38px]">
                    {card.m2.toFixed(1)} m²
                  </h2>

                  <div className="mx-auto my-1 h-[2px] w-8 bg-green-600 md:my-2 md:w-10" />

                  <div className="mx-auto mb-1 flex h-9 w-9 items-center justify-center rounded-full bg-[#e6f4dc] md:mb-2 md:h-14 md:w-14">
                    <Icon size={19} className="text-green-700 md:h-[25px] md:w-[25px]" />
                  </div>

                  <p className="min-h-[28px] text-[9px] font-bold leading-tight text-green-700 md:min-h-[38px] md:text-[13px]">
                    {card.title}
                  </p>

                  <div className="my-1.5 h-px w-full bg-[#eadcc5] md:my-3" />

                  <div className="flex items-center justify-center gap-1 md:gap-2">
                    <Wallet size={14} className="text-green-700 md:h-[18px] md:w-[18px]" />
                    <p className="text-[8.5px] leading-tight text-gray-700 md:text-[12px]">
                      <b>{money(card.invested)}</b>
                      <br />
                      invertidos
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* INFO */}
          <div className="mt-2 flex items-center gap-3 rounded-2xl border border-[#eadcc5] bg-[#fff8ec]/82 px-3 py-2 shadow-[0_10px_24px_rgba(80,60,30,0.10)] backdrop-blur-xl md:mt-3 md:gap-4 md:px-4 md:py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe6cf] md:h-12 md:w-12">
              <Calculator size={22} className="text-green-700 md:h-[27px] md:w-[27px]" />
            </div>

            <div className="text-left">
              <p className="text-[11px] font-bold text-green-700 md:text-[15px]">
                ¿Cómo se calcula?
              </p>
              <p className="mt-0.5 text-[9.5px] leading-snug text-gray-700 md:mt-1 md:text-[13px]">
                Se calcula en base al valor del m² y su variación constante.
              </p>
            </div>
          </div>

          {/* FRASE */}
          <div className="mt-2 flex items-center justify-between gap-3 rounded-2xl border border-[#eadcc5] bg-[#fff8ec]/82 px-3 py-2 shadow-[0_10px_24px_rgba(80,60,30,0.10)] backdrop-blur-xl md:mt-3 md:gap-4 md:px-4 md:py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#efe6cf] md:h-12 md:w-12">
                <Home size={22} className="text-green-700 md:h-[25px] md:w-[25px]" />
              </div>

              <p className="text-[10.5px] font-bold leading-snug text-gray-900 md:text-[15px]">
                Esto ya puede convertirse en una parte real de tu propia casa.
              </p>
            </div>

            <img
              src="/images/casa1.png"
              className="w-20 shrink-0 opacity-90 md:w-36"
              alt="Casa ilustración"
            />
          </div>

          {/* BOTON */}
          <button
            onClick={() => setStep(3)}
            className="mt-2 flex w-full items-center justify-center gap-3 rounded-xl bg-green-700 px-5 py-3 text-[14px] font-bold text-white shadow-[0_14px_35px_rgba(22,101,52,0.30)] transition-all duration-300 hover:scale-[1.01] hover:bg-green-800 md:mt-4 md:py-4 md:text-[16px]"
          >
            Quiero empezar ahora
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-700 md:h-9 md:w-9">
              <ArrowRight size={21} strokeWidth={3} />
            </span>
          </button>

          {/* FOOTER */}
          <div className="mt-1.5 flex items-center justify-center gap-2 text-[9px] text-gray-700 md:mt-2 md:text-[11px]">
            <ShieldCheck size={12} className="text-green-600 md:h-[13px] md:w-[13px]" />
            Sin compromiso. Podés ajustar el monto cuando quieras.
          </div>
        </div>
      </div>
    </div>
  );
}