"use client";

import Image from "next/image";
import { plans } from "@/data/plans";
import {
  Bell,
  CheckCircle2,
  ClipboardCheck,
  Home,
  LockKeyhole,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

type Props = {
  amount: number;
  setStep: (value: number) => void;
};

const fallbackAmount = 500000;

const moneyARS = (value: number) =>
  value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

function MeterUnit({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-start whitespace-nowrap ${className}`}>
      m<sup className="-ml-px text-[0.56em] leading-none">2</sup>
    </span>
  );
}

export default function Step4V2({ amount, setStep }: Props) {
  const selectedAmount = amount || fallbackAmount;
  const data = plans[selectedAmount as keyof typeof plans] ?? plans[fallbackAmount];
  const fiveYears = data.fiveYears.split(" ")[0];

  return (
    <section className="h-[100svh] overflow-hidden bg-[#f7f4ed] px-2 py-2 text-[#071827] sm:min-h-[100dvh] sm:px-3 sm:py-3 lg:h-[100dvh] lg:overflow-hidden">
      <div className="mx-auto flex h-full w-full max-w-[430px] flex-col overflow-hidden rounded-[18px] bg-[#fffdf8] px-3 pb-2 pt-3 shadow-[0_18px_60px_rgba(28,35,25,0.08)] sm:min-h-[calc(100dvh-24px)] sm:max-w-[960px] sm:rounded-[22px] sm:px-8 sm:pb-6 sm:pt-7 lg:h-[calc(100dvh-24px)] lg:min-h-0 lg:max-w-[1060px] lg:px-8 lg:py-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#edf4df] px-3 py-1.5 text-[13px] font-black text-[#1f6d2d] sm:gap-2 sm:px-4 sm:py-2 sm:text-[20px] lg:px-3.5 lg:py-1.5 lg:text-[18px]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#24762e] text-white sm:h-8 sm:w-8 lg:h-7 lg:w-7">
              <CheckCircle2 size={17} strokeWidth={3} />
            </span>
            Registro completado
          </div>

          <h1 className="mx-auto mt-3 max-w-[320px] text-[32px] font-black leading-[0.94] tracking-[-0.045em] text-[#071827] min-[430px]:text-[34px] sm:mt-5 sm:max-w-[860px] sm:text-[68px] lg:mt-2 lg:text-[48px] xl:text-[54px]">
            &iexcl;Ya est&aacute;s m&aacute;s cerca
            <br />
            <span className="text-[#24762e]">de tu casa propia!</span>
          </h1>

          <p className="mx-auto mt-3 max-w-[330px] text-[13px] font-medium leading-snug text-[#3d4650] sm:mt-4 sm:max-w-[620px] sm:text-[23px] lg:mt-1.5 lg:max-w-[720px] lg:text-[16px]">
            Recibimos tu informaci&oacute;n correctamente.
            <br className="hidden sm:block" />
            Nuestro equipo est&aacute; validando las primeras solicitudes y te contactaremos cuanto antes con novedades del lanzamiento.
          </p>
        </div>

        <div className="relative mx-auto mt-1 h-[145px] w-full max-w-[340px] shrink-0 sm:mt-0 sm:h-[420px] sm:max-w-[720px] lg:mt-1 lg:h-[250px] lg:max-w-[780px] xl:h-[270px] xl:max-w-[840px]">
          <Image
            src="/images/step4v2.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 840px, (min-width: 640px) 720px, 100vw"
            className="object-contain object-bottom"
          />
        </div>

        <div className="rounded-[12px] border border-[#efe9dd] bg-white/94 p-2 shadow-[0_10px_34px_rgba(28,35,25,0.07)] sm:rounded-[16px] sm:p-5 lg:p-2.5">
          <h2 className="text-center text-[18px] font-black leading-none text-[#24762e] sm:text-[30px] lg:text-[20px]">&iquest;Qu&eacute; sigue ahora?</h2>
          <div className="mt-2 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-5 lg:mt-1.5 lg:gap-3">
            <NextStep icon={<ClipboardCheck size={30} />} text="Revisamos tu solicitud" />
            <NextStep icon={<Search size={31} />} text="Validamos disponibilidad" />
            <NextStep icon={<Bell size={31} />} text="Te contactamos pronto" />
          </div>
        </div>

        <div className="mt-1.5 grid grid-cols-[1.08fr_1fr] rounded-[12px] border border-[#efe9dd] bg-white/94 p-2 shadow-[0_10px_34px_rgba(28,35,25,0.07)] sm:mt-4 sm:grid-cols-[1.1fr_1fr] sm:rounded-[16px] sm:p-6 lg:mt-2.5 lg:p-3">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-20 sm:w-20 lg:h-12 lg:w-12">
              <TrendingUp className="h-5 w-5 sm:h-10 sm:w-10 lg:h-7 lg:w-7" size={40} />
            </span>
            <div>
              <p className="text-[10px] font-medium leading-tight text-[#25323c] sm:text-[20px] lg:text-[16px]">Proyecci&oacute;n registrada:</p>
              <p className="mt-0.5 text-[18px] font-black leading-none text-[#24762e] sm:text-[40px] lg:text-[28px]">
                {moneyARS(selectedAmount)}
              </p>
              <p className="mt-0.5 text-[14px] font-black leading-none text-[#24762e] sm:text-[30px] lg:text-[20px]">por mes</p>
            </div>
          </div>

          <div className="border-l border-[#d8d5cf] pl-3 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
            <p className="text-[10px] font-medium leading-tight text-[#25323c] sm:text-[20px] lg:text-[16px]">
              Esto podr&iacute;a representar aproximadamente:
            </p>
            <p className="mt-0.5 text-[22px] font-black leading-none text-[#24762e] sm:text-[48px] lg:text-[32px]">
              {fiveYears} <MeterUnit />
            </p>
            <p className="mt-0.5 text-[11px] font-medium leading-none text-[#071827] sm:text-[24px] lg:text-[16px]">en 5 a&ntilde;os</p>
          </div>
        </div>

        <div className="mt-1.5 flex items-center gap-2 rounded-[12px] bg-[#edf4df] px-3 py-2 text-[#071827] sm:mt-4 sm:justify-center sm:gap-5 sm:rounded-[14px] sm:px-4 sm:py-4 lg:mt-2.5 lg:py-2.5">
          <LockKeyhole className="shrink-0 text-[#24762e]" size={18} />
          <p className="text-[11px] font-medium leading-tight sm:text-[20px] lg:text-[15px]">
            <strong>Est&aacute;s participando en una etapa privada de validaci&oacute;n.</strong>
            <br />
            Las vacantes iniciales ser&aacute;n limitadas.
          </p>
        </div>

        <button
          onClick={() => setStep(1)}
          className="mt-1.5 flex h-11 w-full items-center justify-center gap-2 rounded-[12px] bg-[#176c27] px-5 text-[18px] font-black text-white shadow-[0_16px_34px_rgba(23,108,39,0.22)] transition hover:bg-[#11551f] sm:mt-4 sm:h-auto sm:gap-4 sm:rounded-[14px] sm:py-5 sm:text-[31px] lg:mt-2.5 lg:py-2.5 lg:text-[22px]"
        >
          <Home size={23} />
          Perfecto, entiendo
        </button>

        <p className="mt-1.5 flex items-center justify-center gap-1.5 text-center text-[10px] font-medium leading-none text-[#6a746c] sm:mt-4 sm:gap-2 sm:text-[17px] lg:mt-1.5 lg:text-[13px]">
          <ShieldCheck size={13} className="text-[#6a746c] sm:h-[18px] sm:w-[18px]" />
          Tus datos fueron enviados de forma segura.
        </p>
      </div>
    </section>
  );
}

function NextStep({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-4 sm:justify-center">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-20 sm:w-20 lg:h-10 lg:w-10 [&>svg]:h-4 [&>svg]:w-4 sm:[&>svg]:h-[30px] sm:[&>svg]:w-[30px] [&>svg]:lg:h-6 [&>svg]:lg:w-6">
        {icon}
      </span>
      <p className="text-[10px] font-medium leading-tight text-[#071827] sm:text-left sm:text-[21px] lg:text-[15px]">{text}</p>
    </div>
  );
}
