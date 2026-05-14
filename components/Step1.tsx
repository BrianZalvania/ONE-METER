"use client";

import { useState } from "react";
import {
  Sprout,
  TrendingUp,
  Rocket,
  Star,
  Building2,
  Lock,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  Home,
  Zap,
} from "lucide-react";

type Props = {
  setStep: (value: number) => void;
  setAmount: (value: number) => void;
};

const options = [
  { value: 300000, title: "$300.000", desc: "Inicio estrategico", icon: Sprout, badge: "Inicio inteligente" },
  { value: 500000, title: "$500.000", desc: "El equilibrio perfecto para avanzar", icon: TrendingUp, badge: "El punto ideal" },
  { value: 700000, title: "$700.000", desc: "Avance más rápido", icon: Rocket, badge: "Crecimiento rápido" },
  { value: 1000000, title: "$1.000.000", desc: "Máximo potencial", icon: Star, badge: "Mayor proyección" },
];

export default function Step1({ setStep, setAmount }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="relative h-[100dvh] w-screen overflow-hidden bg-gradient-to-b from-[#d8ccb6] via-[#c8b894] to-[#b6a17c]">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,246,226,0.45),transparent_62%)]" />

      <div className="absolute inset-y-0 left-1/2 w-full max-w-[760px] md:max-w-[900px] -translate-x-1/2 overflow-hidden bg-gradient-to-b from-[#efe7db] via-[#e7dcc9] to-[#d6c1a0] shadow-[0_0_90px_rgba(75,55,25,0.26)]">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_55%)]" />

  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#c8b894]/28" />

</div>

      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-2">
        <div className="w-full max-w-[690px] md:max-w-[760px]">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#cbb896] bg-[#f7efe2]/90 px-4 py-1.5 text-[10px] text-gray-700 shadow-[0_8px_25px_rgba(80,60,30,0.14)] backdrop-blur-xl md:text-[13px]">
            <Zap size={14} className="text-green-600" />
            Simulación rápida · En 10 segundos ves tu resultado
          </div>

          <h1 className="mt-2 max-w-[620px] text-[24px] font-semibold leading-[1.02] text-gray-950 sm:text-[30px] md:text-[46px]">
            ¿Querés tu propia vivienda y no sabés por dónde empezar?
            <br />
            Simula ahorrar en <span className="text-green-600">metros cuadrados</span>.
          </h1>

          <p className="mt-2 max-w-[520px] text-[12px] leading-snug text-gray-700 sm:text-[13px] md:text-[15px]">
            Elegí cuánto podés ahorrar por mes y descubrí cuántos{" "}
            <span className="font-medium text-green-600">metros cuadrados</span> podés alcanzar.
          </p>

          <div className="mt-3 w-full space-y-2 md:max-w-2xl">
            {options.map((opt) => {
              const active = hovered === opt.value || selected === opt.value;
              const Icon = opt.icon;

              return (
                <button
                  key={opt.value}
                  onMouseEnter={() => setHovered(opt.value)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => {
                    setSelected(opt.value);
                    setAmount(opt.value);
                    setTimeout(() => setStep(2), 180);
                  }}
                  className={`flex h-[62px] w-full items-center justify-between rounded-2xl px-4 transition-all duration-200 md:h-[72px] md:px-6
                  ${
                    active
                      ? "scale-[1.01] border border-green-600 bg-[#f8efe1]/96 shadow-[0_18px_45px_rgba(34,197,94,0.18)]"
                      : "border border-[#eadcc5] bg-[#fffaf2]/92 shadow-[0_10px_28px_rgba(80,60,30,0.13)]"
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3 md:gap-4">
                    <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full bg-[#efe6cf] shadow-inner md:h-12 md:w-12">
                      <Icon size={22} className="text-green-700 md:h-6 md:w-6" />
                    </div>

                    <div className="min-w-0 text-left">
                      <div className="mb-0.5 flex flex-wrap items-center gap-2">
                        <span className={`text-[16px] font-bold md:text-[20px] ${active ? "text-green-700" : "text-gray-950"}`}>
                          {opt.title}
                        </span>

                        {active && (
                          <span className="inline-flex rounded-full bg-[#e4dfbd]/90 px-2 py-[2px] text-[8px] font-semibold text-green-700 md:text-[10px]">
                            ★ {opt.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-[10px] text-gray-600 md:text-[12px]">
                        {opt.desc}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all md:h-11 md:w-11
                    ${active ? "bg-green-600 text-white shadow-md" : "border border-[#dcc9a8] bg-[#fff7e9]/70 text-[#9b8057]"}`}
                  >
                    <ArrowRight size={21} strokeWidth={3} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl border border-[#eadcc5] bg-[#fff8ec]/74 px-4 py-2 text-[10px] text-gray-700 shadow-[0_8px_22px_rgba(80,60,30,0.09)] backdrop-blur-xl md:max-w-2xl md:text-[12px]">
            <ShieldCheck className="shrink-0 text-green-700" size={16} />
            <span><b>Sin compromiso.</b> Podés ajustar el monto cuando quieras.</span>
          </div>

          <div className="mt-2 grid w-full grid-cols-3 rounded-xl border border-[#eadcc5] bg-[#fff8ec]/78 px-3 py-2.5 shadow-[0_10px_28px_rgba(80,60,30,0.11)] backdrop-blur-xl md:max-w-3xl md:px-6 md:py-3">
            {[
              { icon: Building2, title: "Se ajusta al costo real", desc: "Tu ahorro siempre acompaña el valor real." },
              { icon: Lock, title: "Sin permanencia", desc: "Podés entrar y salir cuando quieras." },
              { icon: BarChart3, title: "Ves tus m² en tiempo real", desc: "Seguí tu progreso en todo momento." },
            ].map((b, i) => {
              const Icon = b.icon;

              return (
                <div
                  key={i}
                  className={`flex flex-col items-center px-2 text-center md:px-3 ${
                    i !== 0 ? "border-l border-[#dcc9a8]" : ""
                  }`}
                >
                  <div className="mb-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#efe6cf] shadow-inner md:h-10 md:w-10">
                    <Icon size={16} className="text-green-700 md:h-5 md:w-5" />
                  </div>

                  <p className="text-[8.5px] font-bold leading-tight text-gray-900 md:text-[12px]">
                    {b.title}
                  </p>

                  <p className="mt-1 hidden text-[9px] leading-tight text-gray-600 sm:block md:text-[10px]">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-2 flex w-full items-center justify-between gap-4 rounded-xl border border-[#eadcc5] bg-[#fff8ec]/78 px-4 py-2.5 shadow-[0_10px_28px_rgba(80,60,30,0.11)] backdrop-blur-xl md:max-w-3xl md:px-6 md:py-3">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#efe6cf] shadow-inner md:h-10 md:w-10">
                <Home size={18} className="text-green-700 md:h-5 md:w-5" />
              </div>

              <p className="text-[11px] font-medium leading-snug text-gray-900 md:text-[14px]">
                Un pequeño ahorro hoy, puede ser muchos metros mañana.
              </p>
            </div>

            <img
              src="/images/casa1.png"
              className="w-20 shrink-0 opacity-90 md:w-32"
              alt="Casa ilustración"
            />
          </div>

          <div className="mt-1.5 flex items-center justify-center gap-2 text-[9px] text-gray-700 md:text-[10px]">
            <Lock size={11} className="shrink-0 text-green-600" />
            Tus datos están protegidos. No compartimos tu información.
          </div>

        </div>
      </div>
    </div>
  );
}
