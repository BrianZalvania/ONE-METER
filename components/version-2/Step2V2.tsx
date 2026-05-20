"use client";

import Image from "next/image";
import { plans } from "@/data/plans";
import {
  ArrowRight,
  Blocks,
  CalendarDays,
  CheckCircle2,
  Home,
  Info,
  Landmark,
  MousePointerClick,
  TrendingUp,
} from "lucide-react";

type Props = {
  amount: number;
  setStep: (value: number) => void;
};

const fallbackAmount = 500000;

const formatM2 = (value: number) =>
  new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: value < 10 ? 1 : 0,
  }).format(value);

const moneyARS = (value: number) =>
  value.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  });

const moneyUSD = (value: number) =>
  `USD ${value.toLocaleString("es-AR", { maximumFractionDigits: 0 })}`;

const getNumber = (value: string) =>
  Number(value.replace(",", ".").replace(/[^\d.]/g, ""));

function MeterUnit({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-start whitespace-nowrap ${className}`}>
      m<sup className="-ml-px text-[0.56em] leading-none">2</sup>
    </span>
  );
}

export default function Step2V2({ amount, setStep }: Props) {
  const selectedAmount = amount || fallbackAmount;
  const data = plans[selectedAmount as keyof typeof plans];

  const fiveM2 = getNumber(data.fiveYears);
  const sevenM2 = fiveM2 * 1.4;
  const tenM2 = getNumber(data.tenYears);
  const total5 = selectedAmount * 60;
  const usdLow = Math.round(total5 / 1667 / 100) * 100;
  const usdHigh = Math.round(total5 / 1111 / 100) * 100;

  return (
    <>
      <MobileStep2
        fiveM2={fiveM2}
        sevenM2={sevenM2}
        tenM2={tenM2}
        total5={total5}
        usdLow={usdLow}
        usdHigh={usdHigh}
        setStep={setStep}
      />

      <section className="hidden min-h-[100dvh] bg-[#f7f4ed] px-2 py-2 text-[#071827] sm:block sm:px-3 sm:py-3 lg:h-[100dvh] lg:overflow-hidden">
      <div className="mx-auto flex min-h-[calc(100dvh-16px)] w-full max-w-[680px] flex-col overflow-hidden rounded-[18px] bg-[#fffdf8] px-3 pb-3 pt-3 shadow-[0_18px_60px_rgba(28,35,25,0.08)] sm:min-h-0 sm:px-6 sm:pb-5 sm:pt-4 lg:grid lg:h-[calc(100dvh-24px)] lg:max-w-[1180px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-5 lg:rounded-[22px] lg:px-5 lg:py-5 xl:max-w-[1280px]">
        <div className="relative min-h-[208px] shrink-0 overflow-hidden rounded-[12px] bg-[#fbfaf5] sm:min-h-[385px] lg:h-full lg:min-h-0 lg:rounded-[16px] lg:p-6 xl:p-7">
          <div className="relative z-10 max-w-[230px] px-3 pt-3 sm:max-w-[330px] sm:px-0 sm:pt-0 lg:max-w-[390px]">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#edf4df] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#2e6b32]">
              <CheckCircle2 size={15} />
              Paso 2 de 3
            </div>

            <h1 className="mt-3 text-[19px] font-medium leading-[1.08] tracking-[-0.035em] text-[#071827] sm:mt-4 sm:text-[30px] lg:text-[36px] xl:text-[40px]">
              Con tu ahorro mensual,
              <br />
              en <span className="rounded-[6px] bg-[#edf4df] px-2 py-0.5 font-black sm:rounded-[7px] sm:px-2.5">5 a&ntilde;os</span>
              <br />
              <span className="font-black">podrias acumular</span>
            </h1>

            <div className="mt-3 flex items-end gap-1.5 text-[#1f6d2d] sm:mt-4 sm:gap-2">
              <span className="text-[68px] font-black leading-[0.82] tracking-[-0.07em] sm:text-[126px] lg:text-[138px] xl:text-[154px]">
                {formatM2(fiveM2)}
              </span>
              <MeterUnit className="mb-1.5 text-[32px] font-black sm:mb-2 sm:text-[58px] lg:text-[64px]" />
            </div>
            <div className="mt-1.5 h-[16px] w-[190px] max-w-full overflow-hidden sm:mt-2 sm:w-[230px]">
              <div className="h-[30px] rounded-[50%] border-t-[3px] border-[#2f7433]" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[24px] right-[-118px] h-[136px] w-[310px] sm:bottom-[-2px] sm:right-[-82px] sm:top-0 sm:h-auto sm:w-[650px] lg:bottom-[-22px] lg:right-[-138px] lg:top-auto lg:h-[68%] lg:w-[670px] xl:right-[-96px] xl:h-[72%] xl:w-[760px]">
            <Image
              src="/images/step2v2.png"
              alt=""
              fill
              priority
              sizes="(min-width: 1280px) 760px, (min-width: 1024px) 670px, (min-width: 640px) 650px, 520px"
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[66%] bg-gradient-to-r from-[#fbfaf5] via-[#fbfaf5]/92 to-transparent sm:w-[50%]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#fbfaf5] via-[#fbfaf5]/86 to-transparent" />

        </div>

        <div className="mt-2 grid flex-1 gap-2 lg:mt-0 lg:h-full lg:grid-cols-2 lg:grid-rows-[auto_auto_auto_auto] lg:content-start lg:gap-3 xl:gap-4">
          <div className="grid rounded-[12px] border border-[#efe9dd] bg-white/92 p-3 shadow-[0_8px_24px_rgba(28,35,25,0.07)] sm:grid-cols-2 sm:rounded-[14px] sm:p-5 lg:col-span-2 lg:p-4 xl:p-5">
            <Metric
              icon={<span className="text-4xl font-black">$</span>}
              label="Inversion estimada"
              value={moneyARS(total5)}
              caption="en 5 a&ntilde;os (60 meses)"
            />

            <Metric
              className="mt-3 border-t border-[#d8d5cf] pt-3 sm:mt-0 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"
              icon={<TrendingUp size={30} />}
              label={<>Equivalente aproximado segun valor del <MeterUnit /></>}
              value={`${moneyUSD(usdLow)} - ${usdHigh.toLocaleString("es-AR")}`}
              caption={<>Rango estimado segun valor del <MeterUnit /></>}
            />
          </div>

          <InfoCard
            className="lg:min-h-[132px]"
            icon={<span className="text-4xl font-black">$</span>}
            title="&iquest;Como se calcula?"
            text={
              <>
                Se calcula en base al valor del <MeterUnit /> publicado por APMECO y su variacion constante. No depende de la inflacion del peso.
              </>
            }
          />

          <div className="rounded-[12px] border border-[#efe9dd] bg-white/92 p-3 text-center shadow-[0_8px_24px_rgba(28,35,25,0.07)] sm:rounded-[14px] sm:p-5 lg:min-h-[132px] lg:p-4 xl:p-5">
            <h2 className="text-[16px] font-black sm:text-[20px] lg:text-[17px] xl:text-[20px]">Si mantenes este ritmo de ahorro:</h2>
            <div className="mt-2 grid grid-cols-2 divide-x divide-[#d8d5cf] sm:mt-4 lg:mt-3">
              <Projection label="En 7 a&ntilde;os" value={sevenM2} />
              <Projection label="En 10 a&ntilde;os" value={tenM2} />
            </div>
          </div>

          <div className="rounded-[12px] border border-[#efe9dd] bg-white/92 p-3 shadow-[0_8px_24px_rgba(28,35,25,0.07)] sm:rounded-[14px] sm:p-5 lg:min-h-[148px] lg:p-4 xl:p-5">
            <h2 className="text-center text-[16px] font-black sm:text-[18px] lg:text-[17px] xl:text-[18px]">Eso puede ser el equivalente a:</h2>
            <div className="mx-auto mt-2 grid max-w-[430px] gap-2 sm:mt-4 sm:gap-3 lg:mt-3 lg:gap-2.5">
              <Equivalence icon={<Home size={25} />} text="El inicio de tu casa propia." />
              <Equivalence icon={<Landmark size={25} />} text="El anticipo para un credito hipotecario." />
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[12px] border border-[#efe9dd] bg-white/92 p-3 shadow-[0_8px_24px_rgba(28,35,25,0.07)] sm:gap-4 sm:rounded-[14px] sm:p-5 lg:min-h-[148px] lg:p-4 xl:p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-14 sm:w-14">
              <Blocks size={26} />
            </span>
            <p className="text-[17px] font-black leading-tight text-[#071827] sm:text-[24px] lg:text-[21px] xl:text-[24px]">
              No estas ahorrando en pesos.
              <br />
              <span className="text-[#24762e]">Estas acumulando <MeterUnit />.</span>
            </p>
          </div>

          <button
            onClick={() => setStep(3)}
            className="group flex w-full items-center justify-center gap-3 rounded-[12px] bg-[#176c27] px-4 py-3 text-[20px] font-black text-white shadow-[0_16px_32px_rgba(23,108,39,0.22)] transition hover:bg-[#11551f] sm:gap-4 sm:px-5 sm:py-4 sm:text-[28px] lg:col-span-2 lg:min-h-[72px] lg:py-3"
          >
            <span className="text-[24px] leading-none sm:text-[30px]">&#128034;</span>
            Avanzar 1 metro
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 transition group-hover:translate-x-1 sm:h-10 sm:w-10">
              <ArrowRight size={22} />
            </span>
            <MousePointerClick className="hidden text-white/90 sm:block" size={34} />
          </button>

          <p className="flex items-center justify-center gap-1.5 text-center text-[10px] font-medium leading-tight text-[#6a746c] sm:gap-2 sm:text-[12px] lg:col-span-2">
            <Info size={14} className="text-[#24762e]" />
            Calculos estimados. El valor del <MeterUnit /> puede variar en el tiempo.
          </p>
        </div>
      </div>
      </section>
    </>
  );
}

function MobileStep2({
  fiveM2,
  sevenM2,
  tenM2,
  total5,
  usdLow,
  usdHigh,
  setStep,
}: {
  fiveM2: number;
  sevenM2: number;
  tenM2: number;
  total5: number;
  usdLow: number;
  usdHigh: number;
  setStep: (value: number) => void;
}) {
  return (
    <section className="h-[100svh] overflow-hidden bg-[#f7f4ed] p-2 text-[#071827] sm:hidden">
      <div className="mx-auto flex h-full max-w-[430px] flex-col gap-1.5 overflow-hidden rounded-[18px] bg-[#fffdf8] p-2 shadow-[0_18px_60px_rgba(28,35,25,0.08)]">
        <div className="relative h-[166px] shrink-0 overflow-hidden rounded-[14px] bg-[#fbfaf5]">
          <div className="relative z-10 h-full max-w-[220px] px-2.5 py-2">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-[#edf4df] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#2e6b32]">
              <CheckCircle2 size={12} />
              Paso 2 de 3
            </div>

            <h1 className="mt-1.5 text-[16px] font-medium leading-[1.16] tracking-[-0.035em]">
              Con tu ahorro mensual,
              <br />
              en <span className="inline-block rounded-[5px] bg-[#edf4df] px-1.5 py-0.5 align-baseline font-black leading-none">5 a&ntilde;os</span>
              <br />
              <span className="font-black">podrias acumular</span>
            </h1>

            <div className="mt-1 flex items-end gap-1 text-[#1f6d2d]">
              <span className="text-[52px] font-black leading-[0.82] tracking-[-0.07em]">
                {formatM2(fiveM2)}
              </span>
              <MeterUnit className="mb-1 text-[25px] font-black" />
            </div>
            <div className="mt-0.5 h-[10px] w-[150px] overflow-hidden">
              <div className="h-[20px] rounded-[50%] border-t-[2px] border-[#2f7433]" />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-[6px] right-[-36px] h-[164px] w-[286px]">
            <Image
              src="/images/step2v2.png"
              alt=""
              fill
              priority
              sizes="286px"
              className="object-contain object-right-bottom"
            />
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[54%] bg-gradient-to-r from-[#fbfaf5] via-[#fbfaf5]/78 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#fbfaf5]/70 to-transparent" />

        </div>

        <div className="grid shrink-0 grid-cols-[1fr_1.08fr] gap-1.5">
          <MobileMetric
            icon={<span className="text-[26px] font-black">$</span>}
            label="Inversion estimada"
            value={moneyARS(total5)}
            caption="en 5 a&ntilde;os (60 meses)"
          />
          <MobileMetric
            icon={<TrendingUp size={21} />}
            label={<>Equivalente segun valor del <MeterUnit /></>}
            value={`${moneyUSD(usdLow)} - ${moneyUSD(usdHigh).replace("USD ", "")}`}
            caption={<>Rango estimado del <MeterUnit /></>}
            compact
          />
        </div>

        <div className="grid shrink-0 grid-cols-[1fr_0.92fr] gap-1.5">
          <div className="rounded-[12px] border border-[#efe9dd] bg-white/92 p-2.5 shadow-[0_8px_24px_rgba(28,35,25,0.06)]">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e]">
                <span className="text-[22px] font-black">$</span>
              </span>
              <h2 className="text-[14px] font-black leading-none">&iquest;Como se calcula?</h2>
            </div>
            <p className="mt-1 text-[9.8px] font-medium leading-[1.18] text-[#25323c]">
              Se calcula en base al valor del <MeterUnit /> publicado por APMECO y su variacion constante. No depende de la inflacion del peso.
            </p>
          </div>

          <div className="flex items-center rounded-[12px] border border-[#efe9dd] bg-white/92 p-2 shadow-[0_8px_24px_rgba(28,35,25,0.06)]">
            <span className="mr-1.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e]">
              <Blocks size={17} />
            </span>
            <p className="text-[10.8px] font-black leading-[1.05]">
              No estas ahorrando en pesos.
              <br />
              <span className="text-[#24762e]">Estas acumulando <MeterUnit />.</span>
            </p>
          </div>
        </div>

        <div className="shrink-0 rounded-[12px] border border-[#efe9dd] bg-white/92 p-2.5 text-center shadow-[0_8px_24px_rgba(28,35,25,0.06)]">
          <h2 className="text-[14px] font-black leading-none">Si mantenes este ritmo de ahorro:</h2>
          <div className="mt-2 grid grid-cols-2 divide-x divide-[#d8d5cf]">
            <MobileProjection label="En 7 a&ntilde;os" value={sevenM2} />
            <MobileProjection label="En 10 a&ntilde;os" value={tenM2} />
          </div>
        </div>

        <div className="shrink-0 rounded-[12px] border border-[#efe9dd] bg-white/92 p-2.5 shadow-[0_8px_24px_rgba(28,35,25,0.06)]">
          <h2 className="text-center text-[14px] font-black leading-none">Eso puede ser el equivalente a:</h2>
          <div className="mt-2 grid gap-1.5">
            <MobileEquivalence icon={<Home size={17} />} text="El inicio de tu casa propia." />
            <MobileEquivalence icon={<Landmark size={17} />} text="El anticipo para un credito hipotecario." />
          </div>
        </div>

        <button
          onClick={() => setStep(3)}
          className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-[12px] bg-[#176c27] px-4 text-[18px] font-black text-white shadow-[0_12px_26px_rgba(23,108,39,0.22)]"
        >
          <span className="text-[22px] leading-none">&#128034;</span>
          Avanzar 1 metro
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/12">
            <ArrowRight size={19} />
          </span>
        </button>

        <p className="flex shrink-0 items-center justify-center gap-1 pb-0.5 text-center text-[9px] font-medium leading-none text-[#6a746c]">
          <Info size={12} className="text-[#24762e]" />
          Calculos estimados. El valor del <MeterUnit /> puede variar en el tiempo.
        </p>
      </div>
    </section>
  );
}

function MobileMetric({
  icon,
  label,
  value,
  caption,
  compact = false,
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  value: string;
  caption: React.ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="min-w-0 rounded-[12px] border border-[#efe9dd] bg-white/92 p-2 shadow-[0_8px_24px_rgba(28,35,25,0.06)]">
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#24762e] text-white">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-[10px] font-medium leading-tight text-[#25323c]">{label}</p>
          <p className={`${compact ? "text-[13px]" : "text-[16px]"} font-black leading-tight text-[#24762e]`}>
            {value}
          </p>
        </div>
      </div>
      <p className="mt-1 flex items-center gap-1 text-[9px] font-medium leading-tight text-[#25323c]">
        <Info size={10} className="shrink-0 text-[#24762e]" />
        {caption}
      </p>
    </div>
  );
}

function MobileProjection({ label, value }: { label: React.ReactNode; value: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 px-1">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e]">
        <CalendarDays size={17} />
      </span>
      <div className="text-left">
        <p className="text-[9px] font-medium leading-none text-[#071827]">{label}</p>
        <p className="text-[23px] font-black leading-none text-[#24762e]">
          {formatM2(value)} <MeterUnit />
        </p>
      </div>
    </div>
  );
}

function MobileEquivalence({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-[#d8d5cf] pb-1.5 last:border-b-0 last:pb-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e]">
        {icon}
      </span>
      <p className="text-[11px] font-medium leading-tight text-[#071827]">{text}</p>
    </div>
  );
}

function Metric({
  icon,
  label,
  value,
  caption,
  className = "",
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  value: string;
  caption: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 sm:gap-4 ${className}`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#24762e] text-white sm:h-14 sm:w-14 [&>span]:text-[30px] sm:[&>span]:text-4xl [&>svg]:h-6 [&>svg]:w-6 sm:[&>svg]:h-[30px] sm:[&>svg]:w-[30px]">
        {icon}
      </span>
      <div>
        <p className="text-[11px] font-medium leading-tight text-[#25323c] sm:text-[14px]">{label}</p>
        <p className="mt-0.5 text-[19px] font-black leading-tight text-[#24762e] sm:mt-1 sm:text-[22px]">{value}</p>
        <p className="mt-0.5 flex items-center gap-1 text-[10px] font-medium leading-tight text-[#25323c] sm:mt-1 sm:text-[12px]">
          <Info size={12} className="text-[#24762e]" />
          {caption}
        </p>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
  className = "",
}: {
  icon: React.ReactNode;
  title: React.ReactNode;
  text: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 rounded-[12px] border border-[#efe9dd] bg-white/92 p-3 shadow-[0_8px_24px_rgba(28,35,25,0.07)] sm:gap-4 sm:rounded-[14px] sm:p-5 lg:p-4 xl:p-5 ${className}`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-14 sm:w-14 [&>span]:text-[30px] sm:[&>span]:text-4xl">
        {icon}
      </span>
      <div>
        <h2 className="text-[16px] font-black sm:text-[19px]">{title}</h2>
        <p className="mt-0.5 max-w-[520px] text-[11px] font-medium leading-snug text-[#25323c] sm:mt-1 sm:text-[14px]">{text}</p>
      </div>
    </div>
  );
}

function Projection({ label, value }: { label: React.ReactNode; value: number }) {
  return (
    <div className="flex items-center justify-center gap-2 px-1 sm:gap-4 sm:px-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-14 sm:w-14">
        <CalendarDays size={21} />
      </span>
      <div className="text-left">
        <p className="text-[10px] font-medium text-[#071827] sm:text-[12px]">{label}</p>
        <p className="text-[24px] font-black leading-none text-[#24762e] sm:text-[36px]">
          {formatM2(value)} <MeterUnit />
        </p>
      </div>
    </div>
  );
}

function Equivalence({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 border-b border-[#d8d5cf] pb-2 last:border-b-0 last:pb-0 sm:gap-4 sm:pb-3">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-11 sm:w-11">
        {icon}
      </span>
      <p className="text-[12px] font-medium leading-snug text-[#071827] sm:text-[15px]">{text}</p>
    </div>
  );
}
