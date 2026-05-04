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
  { value: 300000, title: "$300.000", desc: "Para empezar sin esfuerzo", icon: Sprout, badge: "Inicio inteligente" },
  { value: 500000, title: "$500.000", desc: "El equilibrio perfecto para avanzar", icon: TrendingUp, badge: "El punto ideal" },
  { value: 700000, title: "$700.000", desc: "Avance más rápido", icon: Rocket, badge: "Más velocidad" },
  { value: 1000000, title: "$1.000.000", desc: "Máximo potencial", icon: Star, badge: "Nivel premium" },
];

export default function Step1({ setStep, setAmount }: Props) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#efe7db] relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 hidden md:block">
        <img src="/images/casastep1.jpeg" className="w-full h-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#efe7db] via-[#efe7db]/85 to-transparent" />
      </div>

      <div className="md:hidden h-[220px] relative">
        <img src="/images/casastep1.jpeg" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#efe7db]" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16 py-8 md:py-12">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 bg-white/90 px-5 py-2 rounded-full text-sm text-gray-700 shadow-sm mb-5">
          <Zap size={18} className="text-green-600" strokeWidth={2.5} /> Simulación rápida · En 10 segundos ves tu resultado
        </div>

        {/* TITULO */}
        <h1 className="text-[30px] md:text-[52px] font-semibold leading-[1.1] text-gray-900 mb-4 max-w-3xl">
          Descubrí cuántos <span className="text-green-600">m²</span> podés construir
          con tu ahorro
        </h1>

        {/* SUB */}
        <p className="text-[14px] md:text-[17px] text-gray-700 mb-6 max-w-2xl leading-relaxed">
          Elegí cuánto podés ahorrar por mes y descubrí cuántos{" "}
          <span className="text-green-600 font-medium">metros cuadrados</span> podés construir.
        </p>

        {/* BOTONES */}
        <div className="space-y-2 md:space-y-3 max-w-2xl">
          {options.map((opt) => {
            const active = hovered === opt.value;
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
                className={`w-full flex items-center justify-between rounded-2xl px-6 h-[80px] transition-all duration-200
                ${
                  active
                    ? "bg-white border-2 border-green-600 shadow-lg scale-[1.01]"
                    : "bg-white border border-[#e5e7eb]"
                }
                ${
                  selected === opt.value
                    ? "scale-[1.04] shadow-[0_10px_25px_rgba(34,197,94,0.35)]"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-[#dff3e6] flex items-center justify-center">
                    <Icon size={28} strokeWidth={2.5} className="text-green-700" />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[17px] font-semibold ${active ? "text-green-700" : "text-gray-900"}`}>
                        {opt.title}
                      </span>

                      {active && opt.badge && (
                        <span className="text-[11px] bg-[#e6f4ea] text-green-700 px-2.5 py-[2px] rounded-full font-medium flex items-center gap-1">
                          ⭐ {opt.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-[12px] text-gray-500">
                      {opt.desc}
                    </p>
                  </div>
                </div>

                <div
                  className={`flex items-center justify-center rounded-full w-12 h-12 transition-all
                  ${active ? "bg-green-600 text-white shadow-md" : "border border-gray-300 text-gray-400"}
                  ${selected === opt.value ? "scale-110 rotate-6" : ""}
                  `}
                >
                  <ArrowRight size={26} strokeWidth={3} />
                </div>
              </button>
            );
          })}
        </div>

        {/* SIN COMPROMISO */}
        <div className="mt-5 max-w-2xl border border-[#e5e7eb] bg-white/90 rounded-xl px-5 py-3 flex items-center gap-3 text-[13px] text-gray-700">
          <ShieldCheck className="text-green-700" size={20} />
          <span>Sin compromiso. Podés ajustar el monto cuando quieras.</span>
        </div>

        {/* BENEFICIOS */}
        <div className="mt-6 max-w-3xl bg-white/90 border border-[#e5e7eb] rounded-xl py-5 px-6 grid grid-cols-1 md:grid-cols-3">

          {[ 
            { icon: Building2, title: "Se ajusta al costo real", desc: "Tu ahorro siempre acompaña el valor real." },
            { icon: Lock, title: "Sin permanencia", desc: "Podés entrar y salir cuando quieras." },
            { icon: BarChart3, title: "Ves tus m² en tiempo real", desc: "Seguí tu progreso en todo momento." },
          ].map((b, i) => {
            const Icon = b.icon;
            return (
              <div key={i} className={`group flex flex-col items-center text-center px-4
              ${i !== 0 ? "border-t md:border-t-0 md:border-l border-[#e5e7eb] pt-4 md:pt-0" : ""}`}>
                
                <div className="w-12 h-12 rounded-full bg-[#dff3e6] flex items-center justify-center mb-2 
                transition-all duration-200 group-hover:scale-110">
                  <Icon size={24} className="text-green-700" />
                </div>

                <p className="font-semibold text-[13px] text-gray-900">{b.title}</p>
                <p className="text-gray-600 text-[11px] mt-1">{b.desc}</p>
              </div>
            );
          })}

        </div>

        {/* BLOQUE FINAL */}
        <div className="mt-6 max-w-3xl bg-white/90 border border-[#e5e7eb] rounded-xl px-6 py-4 flex items-center justify-between gap-6
        transition-all duration-300 hover:shadow-xl hover:-translate-y-[2px] hover:border-green-500">

          <div className="flex items-center gap-3 max-w-md">
            <div className="w-12 h-12 rounded-full bg-[#dff3e6] flex items-center justify-center">
              <Home size={24} className="text-green-700" />
            </div>

            <p className="text-gray-900 text-[14px] leading-relaxed font-medium">
              Un pequeño ahorro hoy, puede ser muchos metros mañana.
            </p>
          </div>

          <img src="/images/casa1.png" className="w-32 md:w-40 opacity-90" />

        </div>

        {/* FOOTER */}
        <div className="mt-4 text-[11px] text-gray-500 flex items-center gap-2">
          <Lock size={14} className="text-green-600" strokeWidth={2.5} /> Tus datos están protegidos. No compartimos tu información.
        </div>

      </div>
    </div>
  );
}