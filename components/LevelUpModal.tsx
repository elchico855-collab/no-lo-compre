"use client";

type Props = {
  abierto: boolean;
  nivel: number;
  onClose: () => void;
};

export default function LevelUpModal({
  abierto,
  nivel,
  onClose,
}: Props) {
  if (!abierto) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">

      <div className="w-full max-w-lg rounded-3xl bg-white shadow-2xl overflow-hidden animate-[fadeIn_.35s_ease]">

        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-8 text-center text-white">

          <div className="text-7xl animate-bounce">
            🏆
          </div>

          <h2 className="mt-5 text-4xl font-black">
            ¡Subiste de nivel!
          </h2>

          <p className="mt-2 text-lg opacity-90">
            Sigue tomando decisiones inteligentes.
          </p>

        </div>

        <div className="p-10 text-center">

          <p className="text-gray-500">
            Nivel actual
          </p>

          <h3 className="mt-2 text-6xl font-black text-orange-500">
            {nivel}
          </h3>

          <p className="mt-5 text-gray-600">
            Cada compra evitada fortalece tu patrimonio.
          </p>

          <button
            onClick={onClose}
            className="
              mt-10
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              to-red-500
              px-8
              py-4
              font-bold
              text-white
              transition-all
              duration-300
              hover:scale-105
            "
          >
            🚀 Continuar
          </button>

        </div>

      </div>

    </div>
  );
}