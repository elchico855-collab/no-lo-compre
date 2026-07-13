type Props = {
  dineroAhorrado: number;
  comprasEvitadas: number;
};

export default function Dashboard({
  dineroAhorrado,
  comprasEvitadas,
}: Props) {

  const obtenerNivel = () => {
    if (comprasEvitadas >= 50) return "👑 Leyenda del Ahorro";
    if (comprasEvitadas >= 30) return "💎 Experto Financiero";
    if (comprasEvitadas >= 15) return "🥇 Maestro del Ahorro";
    if (comprasEvitadas >= 5) return "🥈 Comprador Inteligente";
    return "🥉 Novato";
  };

  const siguienteMeta = () => {
    if (comprasEvitadas < 5) return 5;
    if (comprasEvitadas < 15) return 15;
    if (comprasEvitadas < 30) return 30;
    if (comprasEvitadas < 50) return 50;
    return 50;
  };

  const progreso = Math.min(
    (comprasEvitadas / siguienteMeta()) * 100,
    100
  );

  return (
    <section className="mt-16">

      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 rounded-3xl shadow-2xl p-10 text-white">

        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">

          <div>

            <h2 className="text-4xl font-bold">
              📊 Tu Dashboard
            </h2>

            <p className="text-gray-300 mt-2">
              Sigue construyendo tu hábito de ahorrar.
            </p>

          </div>

          <div className="bg-white/10 px-6 py-3 rounded-2xl">

            <p className="text-sm text-gray-300">
              Nivel actual
            </p>

            <h3 className="text-2xl font-bold">
              {obtenerNivel()}
            </h3>

          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">

            <p className="text-gray-300">
              💰 Dinero Ahorrado
            </p>

            <h2 className="text-5xl font-bold mt-4">
              ${dineroAhorrado.toLocaleString()}
            </h2>

          </div>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">

            <p className="text-gray-300">
              🛒 Compras Evitadas
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {comprasEvitadas}
            </h2>

          </div>

          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur">

            <p className="text-gray-300">
              🎯 Próxima Meta
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {siguienteMeta()}
            </h2>

            <p className="mt-2 text-gray-300">
              compras
            </p>

          </div>

        </div>

        <div className="mt-12">

          <div className="flex justify-between text-sm mb-3">

            <span>
              Progreso al siguiente nivel
            </span>

            <span>
              {Math.round(progreso)}%
            </span>

          </div>

          <div className="w-full h-5 rounded-full bg-slate-700 overflow-hidden">

            <div
              className="h-5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-700"
              style={{
                width: `${progreso}%`,
              }}
            />

          </div>

          <p className="mt-5 text-gray-300">

            Te faltan{" "}

            <strong className="text-white">

              {Math.max(
                siguienteMeta() - comprasEvitadas,
                0
              )}

            </strong>{" "}

            compras para subir al siguiente nivel.

          </p>

        </div>

      </div>

    </section>
  );
} 