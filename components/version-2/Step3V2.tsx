"use client";

import Image from "next/image";
import { validateEmail } from "@/utils/validateEmail";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Home,
  LockKeyhole,
  Mail,
  PiggyBank,
  Rocket,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

type Props = {
  amount: number;
  setStep: (value: number) => void;
};

export default function Step3V2({ amount, setStep }: Props) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), amount }),
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

  return (
    <section className="min-h-[100dvh] bg-[#f7f4ed] px-3 py-3 text-[#071827]">
      <div className="mx-auto flex min-h-[calc(100dvh-24px)] w-full max-w-[700px] flex-col overflow-hidden rounded-[22px] bg-[#fffdf8] px-4 pb-4 pt-3 shadow-[0_18px_60px_rgba(28,35,25,0.08)] sm:h-[calc(100dvh-24px)] sm:px-6">
        <div className="relative grid min-h-[184px] shrink-0 grid-cols-[1fr_150px] overflow-hidden rounded-[12px] min-[430px]:grid-cols-[1fr_164px] sm:block sm:min-h-[292px]">
          <div className="relative z-10 max-w-none pt-5 sm:max-w-[335px] sm:pt-9">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#edf4df] px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] text-[#2e6b32] sm:mb-4 sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[11px]">
              <CheckCircle2 size={12} className="sm:h-[15px] sm:w-[15px]" />
              Paso 3 de 3
            </div>
            <h1 className="text-[25px] font-black leading-[1.02] tracking-[-0.045em] text-[#071827] min-[430px]:text-[28px] sm:text-[40px]">
              Este puede ser
              <br />
              el comienzo de tu
              <br />
              <span className="text-[#1c7a35]">casa propia.</span>
            </h1>
            <div className="mt-2 h-[12px] w-[176px] overflow-hidden min-[430px]:w-[198px] sm:mt-3 sm:w-[242px]">
              <div className="h-[24px] rounded-[50%] border-t-[3px] border-[#1c7a35]" />
            </div>
          </div>

          <div className="relative z-0 mt-4 h-[166px] self-end min-[430px]:h-[176px] sm:hidden">
            <Image
              src="/images/step3v3.png"
              alt=""
              fill
              priority
              sizes="(min-width: 430px) 164px, 150px"
              className="object-contain object-left-bottom"
            />
          </div>

          <div className="pointer-events-none absolute hidden sm:block sm:bottom-[-14px] sm:right-[-28px] sm:top-[-6px] sm:w-[455px] sm:opacity-100">
            <Image
              src="/images/step3v3.png"
              alt=""
              fill
              priority
              sizes="455px"
              className="object-contain object-right-bottom"
            />
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[50%] bg-gradient-to-r from-[#fffdf8] via-[#fffdf8]/92 to-transparent sm:block" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-10 bg-gradient-to-t from-[#fffdf8] via-[#fffdf8]/70 to-transparent sm:block" />
        </div>

        <div className="mt-1.5 grid shrink-0 gap-2 sm:grid-cols-[0.88fr_1fr] sm:items-start sm:gap-3">
          <div className="order-2 sm:order-1">
            <div className="hidden items-center gap-2.5 border-b border-[#e5dfd2] pb-2 sm:flex sm:gap-3 sm:pb-3">
              <FeatureIcon icon={<Rocket size={21} />} />
              <div>
                <h2 className="text-[14px] font-black text-[#1c7a35] sm:text-[16px]">Sumate al lanzamiento.</h2>
                <p className="text-[11px] font-medium text-[#25323c] sm:mt-0.5 sm:text-[13px]">Dejanos tu mail y accede primero.</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:block sm:gap-0">
              <Feature icon={<PiggyBank size={20} />} text={<>Converti tu ahorro en <strong>valor real.</strong></>} />
              <Feature icon={<ClipboardCheck size={20} />} text={<>Acercate a un <strong>credito.</strong></>} />
              <Feature icon={<Home size={21} />} text={<>Elegi tu futura <strong>propiedad.</strong></>} />
            </div>
          </div>

          <div className="order-1 rounded-[16px] border border-[#efe9dd] bg-white/94 p-3 shadow-[0_18px_46px_rgba(28,35,25,0.09)] sm:order-2 sm:rounded-[18px] sm:p-5">
            <div className="flex items-start gap-2.5 sm:gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-10 sm:w-10">
                <Mail size={20} />
              </span>
              <div>
                <h2 className="text-[16px] font-black leading-tight text-[#071827] sm:text-[18px]">Sumate al lanzamiento</h2>
                <p className="text-[11px] font-medium text-[#25323c] sm:mt-0.5 sm:text-[12px]">
                  Dejanos tu mail y te avisamos antes que a nadie.
                </p>
              </div>
            </div>

            <div
              className={`mt-3 flex items-center gap-3 rounded-[10px] border bg-white px-4 py-2.5 shadow-[0_10px_24px_rgba(28,35,25,0.06)] sm:mt-5 sm:py-3 ${
                error ? "border-[#d93b3b]" : "border-[#d8d5cf]"
              }`}
            >
              <Mail className={error ? "text-[#d93b3b]" : "text-[#9ba59e]"} size={22} />
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setError("");
                }}
                className="w-full bg-transparent text-[15px] font-bold text-[#102017] outline-none placeholder:text-[#9ba59e]"
              />
            </div>

            {error && <p className="mt-2 text-sm font-black text-[#d93b3b]">{error}</p>}

            <button
              onClick={handleContinue}
              disabled={loading}
              className={`mt-3 flex w-full items-center justify-center gap-3 rounded-[10px] px-5 py-3 text-[13px] font-black text-white shadow-[0_16px_32px_rgba(23,108,39,0.22)] transition sm:mt-4 sm:py-3.5 sm:text-[14px] ${
                loading ? "cursor-not-allowed bg-[#6f9b74]" : "bg-[#176c27] hover:bg-[#11551f]"
              }`}
            >
              <Mail size={21} />
              {loading ? "Guardando..." : "Quiero mi acceso anticipado"}
              <ArrowRight size={20} className="hidden sm:block" />
            </button>
          </div>
        </div>

        <div className="mt-2 grid shrink-0 grid-cols-2 gap-1.5 sm:hidden">
          <MiniInfo
            icon={<Rocket size={16} />}
            title="Acceso temprano"
            text="Te avisamos al abrir."
          />
          <MiniInfo
            icon={<LockKeyhole size={16} />}
            title="Sin compromiso"
            text="Solo novedades clave."
          />
        </div>

        <div className="mt-2 flex items-center gap-3 rounded-[16px] border border-[#efe9dd] bg-[#faf8ef] p-3 shadow-[0_8px_24px_rgba(28,35,25,0.05)] sm:mt-4 sm:p-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#24762e] sm:h-12 sm:w-12">
            <ShieldCheck size={36} strokeWidth={1.8} />
          </span>
          <div>
            <h2 className="text-[14px] font-black leading-tight text-[#071827] sm:text-[18px]">
              Este es un <span className="text-[#1c7a35]">proyecto en desarrollo.</span>
            </h2>
            <p className="mt-1 text-[11px] font-medium leading-snug text-[#25323c] sm:text-[13px]">
              Estamos validando el interes antes del lanzamiento y armando los primeros cupos.
            </p>
            <p className="mt-1 hidden items-center gap-2 text-[11px] font-bold text-[#5c665f] sm:flex">
              <LockKeyhole size={14} />
              Tus datos se mantienen protegidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e] sm:h-13 sm:w-13">
      {icon}
    </span>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: React.ReactNode }) {
  return (
    <div className="flex min-h-[78px] flex-col items-center justify-start gap-1 rounded-[10px] border border-[#e5dfd2] bg-white/76 px-1.5 py-2 text-center shadow-[0_8px_18px_rgba(28,35,25,0.04)] sm:min-h-0 sm:flex-row sm:gap-3 sm:rounded-none sm:border-x-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:py-3 sm:text-left sm:shadow-none sm:last:border-b-0">
      <FeatureIcon icon={icon} />
      <p className="text-[10px] font-semibold leading-tight text-[#25323c] sm:text-[14px] sm:font-medium sm:leading-snug [&_strong]:font-black [&_strong]:text-[#1c7a35]">
        {text}
      </p>
    </div>
  );
}

function MiniInfo({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex min-h-[54px] items-center gap-2 rounded-[12px] border border-[#e5dfd2] bg-white/78 px-2.5 py-2 shadow-[0_8px_18px_rgba(28,35,25,0.04)]">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#edf4df] text-[#24762e]">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10.5px] font-black leading-tight text-[#071827]">{title}</span>
        <span className="mt-0.5 block text-[9px] font-bold leading-tight text-[#5c665f]">{text}</span>
      </span>
    </div>
  );
}
