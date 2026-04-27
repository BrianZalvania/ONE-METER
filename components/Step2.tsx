import { plans } from "@/data/plans";

type Props = {
  amount: number;
  setStep: (value: number) => void;
};

export default function Step2({ amount, setStep }: Props) {
  const data = plans[amount as keyof typeof plans];

  const total5 = amount * 60;
  const total10 = amount * 120;

  const compareText: Record<number, { five: string; ten: string }> = {
    300000: {
      five: "Espacio funcional o guardado amplio",
      ten: "Ambiente chico",
    },
    500000: {
      five: "Dormitorio compacto",
      ten: "Monoambiente",
    },
    700000: {
      five: "Ambiente amplio",
      ten: "Departamento",
    },
    1000000: {
      five: "Monoambiente",
      ten: "Casa de 2 ambientes",
    },
  };

  const compare = compareText[amount];

  const money = (value: number) =>
    value.toLocaleString("es-AR", {
      style: "currency",
      currency: "ARS",
      maximumFractionDigits: 0,
    });

  return (
    <div className="relative text-center animate-[fadeUp_0.8s_ease-out]">

      {/* Glow */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[460px] h-[460px] bg-white/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        PROYECCIÓN ESTIMADA
      </div>

      {/* Title */}
      <h1 className="relative text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight mb-3">
        Con {money(amount)} por mes
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        Esto podrías empezar a construir.
      </p>

      {/* Resultado mensual */}
      <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-8 mb-6">

        <p className="text-gray-400 text-sm uppercase tracking-[0.25em] mb-3">
          Valor mensual estimado
        </p>

        <h2 className="text-5xl md:text-7xl font-semibold text-white mb-2">
          {data.monthly}
        </h2>

        <p className="text-gray-400">
          en metros cuadrados por mes
        </p>

      </div>

      {/* Tarjetas */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">

        {/* 5 años */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
          <p className="text-gray-500 text-sm mb-2">En 5 años</p>

          <h3 className="text-4xl font-semibold mb-2">
            {data.fiveYears}
          </h3>

          <p className="text-sm text-gray-300 mb-2">
            Aportes estimados: {money(total5)}
          </p>

          <p className="text-gray-400 text-sm">
            {compare.five}
          </p>
        </div>

        {/* 10 años */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left">
          <p className="text-gray-500 text-sm mb-2">En 10 años</p>

          <h3 className="text-4xl font-semibold mb-2">
            {data.tenYears}
          </h3>

          <p className="text-sm text-gray-300 mb-2">
            Aportes estimados: {money(total10)}
          </p>

          <p className="text-gray-400 text-sm">
            {compare.ten}
          </p>
        </div>

      </div>

      {/* Línea emocional */}
      <p className="text-gray-300 text-lg mb-8">
        Esto ya puede convertirse en una parte real de tu próxima casa.
      </p>

      {/* Botón */}
      <button
        onClick={() => setStep(3)}
        className="px-8 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.03] transition-all duration-300"
      >
        Continuar →
      </button>

      <style jsx global>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
      `}</style>

    </div>
  );
}