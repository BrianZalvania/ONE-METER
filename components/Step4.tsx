type Props = {
  setStep?: (value: number) => void;
};

export default function Step4({ setStep }: Props) {
  function restart() {
    if (setStep) {
      setStep(1);
    } else {
      window.location.reload();
    }
  }

  return (
    <div className="relative text-center animate-[fadeUp_0.8s_ease-out]">

      {/* Glow verde */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-emerald-400/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Icono */}
      <div className="relative mx-auto mb-8 w-24 h-24 rounded-full border border-emerald-400/30 bg-emerald-400/10 flex items-center justify-center text-4xl">
        ✓
      </div>

      {/* Badge */}
      <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        ACCESO CONFIRMADO
      </div>

      {/* Title */}
      <h1 className="relative text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-tight mb-4">
        Listo.
        <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
          Ya estás adentro
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8">
        Te avisaremos antes que al resto cuando ONE METER esté disponible.
      </p>

      {/* Quote */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 mb-8">
        <p className="text-white text-lg md:text-xl font-medium">
          Cada gran propiedad empieza con una decisión.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={restart}
        className="px-8 py-4 rounded-2xl bg-white text-black font-semibold text-lg hover:scale-[1.03] transition-all duration-300"
      >
        Volver al inicio →
      </button>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-5">
        Gracias por confiar en ONE METER.
      </p>

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