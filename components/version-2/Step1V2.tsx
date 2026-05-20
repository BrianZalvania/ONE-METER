"use client";

import Image from "next/image";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Leaf,
  LockKeyhole,
  Rocket,
  Sprout,
  Target,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

type Props = {
  setStep: (value: number) => void;
  setAmount: (value: number) => void;
};

const options = [
  {
    value: 300000,
    amount: "$300.000",
    badge: "Inicio estratégico",
    icon: Sprout,
    badgeIcon: Leaf,
  },
  {
    value: 500000,
    amount: "$500.000",
    badge: "Crecimiento sólido",
    icon: TrendingUp,
    badgeIcon: TrendingUp,
  },
  {
    value: 700000,
    amount: "$700.000",
    badge: "Avance acelerado",
    icon: Rocket,
    badgeIcon: Rocket,
  },
  {
    value: 1000000,
    amount: "$1.000.000",
    badge: "Máxima proyección",
    icon: Target,
    badgeIcon: Target,
  },
];

export default function Step1V2({ setStep, setAmount }: Props) {
  const [selected, setSelected] = useState<number | null>(null);

  const selectAmount = (value: number) => {
    setSelected(value);
    setAmount(value);
    setStep(2);
    window.history.replaceState(null, "", "/version-2");
  };

  return (
    <section className="h-[100dvh] overflow-hidden bg-[#f7f4ed] px-3 py-3 text-[#071827]">
      <div className="relative mx-auto flex h-[calc(100dvh-24px)] w-full max-w-[680px] flex-col overflow-hidden rounded-[24px] bg-[#fffdf8] px-5 pb-3 pt-3 shadow-[0_18px_60px_rgba(28,35,25,0.08)] sm:px-8 sm:pb-4 md:max-h-[920px] md:px-8 md:pb-4">
        <div className="relative z-10 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#edf4df] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#2e6b32]">
            <CheckCircle2 size={15} />
            Paso 1 de 3
          </div>
          <p className="hidden text-[12px] font-bold text-[#6a746c] sm:block">
            Elegí tu ahorro mensual
          </p>
        </div>

        <div className="relative z-10 mt-2">
          <h1 className="max-w-[332px] text-[24px] font-black leading-[1.01] tracking-[-0.035em] text-[#071827] min-[430px]:max-w-[360px] min-[430px]:text-[24px] sm:max-w-[420px] sm:text-[36px] md:max-w-[430px] md:text-[36px]">
            ¿Cuánto dinero promedio
            <br />
            podrías <span className="text-[#2e6b32]">ahorrar por mes</span>
            <br />
            para tu futura casa?
          </h1>

          <div className="mt-3 grid max-w-[238px] gap-1.5 min-[430px]:max-w-[272px] sm:mt-4 sm:max-w-[330px] sm:gap-2.5 md:mt-4 md:max-w-[330px] md:gap-2.5">
            <div className="flex items-center gap-3 rounded-full bg-white/84 pr-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#7ba86b] bg-white text-[#4d8a3f]">
                <Check size={14} strokeWidth={3} />
              </span>
              <p className="text-[13px] font-bold text-[#27323b]">
                Sin obligación de cuota fija.
              </p>
            </div>

            <div className="ml-8 h-[10px] w-32 rounded-[50%] border-t-[3px] border-[#4b883d]" />

            <div className="flex items-start gap-3 text-[#4d8a3f]">
              <Leaf size={18} className="mt-0.5 shrink-0" />
              <p className="max-w-[168px] text-[12px] font-bold leading-snug min-[430px]:max-w-[220px] min-[430px]:text-[12px] sm:max-w-none sm:text-[13px] md:max-w-none md:text-[13px]">
                Elegí con cuánto te sentirías cómodo empezar.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-82px] top-[78px] z-0 h-[190px] w-[382px] min-[430px]:right-[-66px] min-[430px]:top-[78px] min-[430px]:h-[194px] min-[430px]:w-[398px] sm:right-[-18px] sm:top-[58px] sm:h-[315px] sm:w-[500px] md:right-[8px] md:top-[68px] md:mt-0 md:h-[318px] md:w-[575px] md:max-w-none">
          <Image
            src="/images/step1v2.png"
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 520px, 410px"
            className="object-contain object-center md:object-right-top"
          />
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#fffdf8] via-[#fffdf8]/90 to-transparent sm:w-56 md:hidden" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fffdf8] via-[#fffdf8]/82 to-transparent sm:h-24 md:hidden" />
        </div>

        <div className="relative z-10 mt-[58px] space-y-2 min-[430px]:mt-[56px] sm:mt-[84px] sm:space-y-3 md:mt-[82px] md:space-y-3">
          {options.map((option) => {
            const Icon = option.icon;
            const BadgeIcon = option.badgeIcon;
            const active = selected === option.value;

            return (
              <a
                href="/version-2"
                key={option.value}
                onClick={(event) => {
                  event.preventDefault();
                  selectAmount(option.value);
                }}
                className={`group flex min-h-[75px] w-full items-center gap-3.5 rounded-[10px] border bg-white/90 px-4 text-left shadow-[0_8px_22px_rgba(28,35,25,0.08)] transition duration-200 min-[430px]:min-h-[70px] min-[430px]:gap-4 min-[430px]:px-5 sm:min-h-[94px] sm:gap-6 sm:px-7 md:min-h-[96px] md:gap-6 md:px-7 ${
                  active
                    ? "border-[#4d8a3f] ring-2 ring-[#4d8a3f]/20"
                    : "border-[#efe9dd] hover:-translate-y-0.5 hover:border-[#bcd4ac] hover:shadow-[0_12px_28px_rgba(28,35,25,0.11)]"
                }`}
              >
                <span className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#5b944c] min-[430px]:h-[48px] min-[430px]:w-[48px] sm:h-[64px] sm:w-[64px] md:h-[64px] md:w-[64px]">
                  <Icon size={27} strokeWidth={2.1} className="min-[430px]:h-7 min-[430px]:w-7 sm:h-9 sm:w-9 md:h-9 md:w-9" />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-[25px] font-black leading-none tracking-[-0.035em] text-[#071827] min-[430px]:text-[25px] sm:text-[36px] md:text-[36px]">
                    {option.amount}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1.5 rounded-[7px] bg-[#3f7f35] px-2.5 py-0.5 text-[9.5px] font-black text-white min-[430px]:gap-2 min-[430px]:px-3 min-[430px]:text-[9.5px] sm:mt-2 sm:py-1 sm:text-[12px] md:mt-2 md:py-1 md:text-[12px]">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-white text-[#3f7f35] sm:h-5 sm:w-5 md:h-5 md:w-5">
                      <BadgeIcon size={13} strokeWidth={3} />
                    </span>
                    {option.badge}
                  </span>
                </span>

                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition sm:h-8 sm:w-8 md:h-8 md:w-8 ${
                    active
                      ? "bg-[#3f7f35] text-white"
                      : "bg-[#edf4df] text-[#5b944c] group-hover:bg-[#3f7f35] group-hover:text-white"
                  }`}
                >
                  {active ? <Check size={20} strokeWidth={3} /> : <ArrowRight size={20} />}
                </span>
              </a>
            );
          })}
        </div>

        <div className="relative z-10 mt-1.5 flex items-center justify-center gap-2 rounded-full bg-[#fbfaf5] px-3 py-1.5 text-[9.5px] font-bold text-[#28323a] shadow-[inset_0_0_0_1px_rgba(77,138,63,0.10)] min-[430px]:gap-3 min-[430px]:px-4 min-[430px]:text-[10.5px] sm:mt-3 sm:py-2 sm:text-[12px] md:mt-3 md:py-2 md:text-[12px]">
          <LockKeyhole size={16} className="text-[#5b944c]" />
          Podés cambiar tu elección cuando quieras.
        </div>
      </div>
    </section>
  );
}
