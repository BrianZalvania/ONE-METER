type Props = {
  setStep: (value: number) => void;
  setAmount: (value: number) => void;
};

export default function Step1({ setStep, setAmount }: Props) {
  function selectAmount(value: number) {
    setAmount(value);
    setStep(2);
  }

  const options = [
    {
      value: 300000,
      label: "$300.000",
      desc: "Inicio estratégico",
    },
    {
      value: 500000,
      label: "$500.000",
      desc: "Crecimiento sólido",
    },
    {
      value: 700000,
      label: "$700.000",
      desc: "Avance acelerado",
    },
    {
      value: 1000000,
      label: "$1.000.000",
      desc: "Máxima proyección",
    },
  ];

  return (
    <div className="relative text-center animate-[fadeUp_0.8s_ease-out]">

      {/* Glow premium */}
      <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        ACCESO PRIORITARIO
      </div>

      {/* Title */}
      <h1 className="relative text-5xl md:text-7xl font-semibold tracking-[-0.05em] leading-tight max-w-4xl mx-auto mb-5">
        Empezá hoy a construir
        <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          tu próxima propiedad
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
        Elegí cuánto destinarías por mes y descubrí cuánto podrías avanzar en metros cuadrados reales.
      </p>

      {/* Options */}
      <div className="relative grid gap-4">

        {options.map((item) => (
          <button
            key={item.value}
            onClick={() => selectAmount(item.value)}
            className="group relative overflow-hidden w-full rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-6 py-5 text-left transition-all duration-300 hover:scale-[1.018] hover:border-white/25 hover:bg-white/10"
          >
            {/* brillo hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative flex items-center justify-between gap-5">

              <div>
                <p className="text-2xl md:text-3xl font-semibold text-white">
                  {item.label}
                </p>

                <p className="text-sm md:text-base text-gray-400 mt-1 group-hover:text-gray-200 transition">
                  {item.desc}
                </p>
              </div>

              <div className="flex items-center gap-3">

                <span className="hidden md:block text-sm text-gray-500 group-hover:text-gray-300 transition">
                  Seleccionar
                </span>

                <div className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-xl group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300">
                  →
                </div>

              </div>

            </div>
          </button>
        ))}

      </div>

      {/* Footer */}
      <div className="relative mt-8">
        <p className="text-sm text-gray-500">
          Simulación informativa · Sin compromiso
        </p>
      </div>

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