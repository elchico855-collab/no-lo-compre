import AnimatedCounter from "./AnimatedCounter";
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
    <section className="mt-20">

      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-10 shadow-2xl">

        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative">

          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div>

              <span className="inline-flex rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">

                📊 Dashboard Premium

              </span>

              <h2 className="mt-5 text-4xl font-black text-white">

                Tus estadísticas

              </h2>

              <p className="mt-2 text-slate-300">

                Cada compra evitada fortalece tu futuro financiero.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/10 px-6 py-5 backdrop-blur">

              <p className="text-sm text-slate-300">

                Nivel actual

              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">

                {obtenerNivel()}

              </h3>

            </div>

          </div>

          <div className="grid gap-6 md:grid-cols-3">
                        {/* Dinero */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 p-8 shadow-xl transition-all duration-300 hover:-translate-y-2">

              <p className="text-white/80">
                💰 Dinero Ahorrado
              </p>

              <h2 className="mt-4 text-5xl font-black text-white">
  <AnimatedCounter
    value={dineroAhorrado}
    prefix="$"
  />
</h2>

              <p className="mt-4 text-sm text-green-100">
                Sigue aumentando tu patrimonio.
              </p>

            </div>

            {/* Compras */}
            <div className="rounded-3xl bg-gradient-to-br from-sky-500 to-blue-700 p-8 shadow-xl transition-all duration-300 hover:-translate-y-2">

              <p className="text-white/80">
                🛒 Compras Evitadas
              </p>

              <h2 className="mt-4 text-5xl font-black text-white">
  <AnimatedCounter
    value={comprasEvitadas}
  />
</h2>

              <p className="mt-4 text-sm text-blue-100">
                Decisiones inteligentes.
              </p>

            </div>

            {/* Meta */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-500 p-8 shadow-xl transition-all duration-300 hover:-translate-y-2">

              <p className="text-white/80">
                🎯 Próxima Meta
              </p>

              <h2 className="mt-4 text-5xl font-black text-white">
  <AnimatedCounter
    value={siguienteMeta()}
  />
</h2>

              <p className="mt-4 text-sm text-orange-100">
                Compras para subir de nivel.
              </p>

            </div>

          </div>

          {/* Barra de progreso */}

          <div className="mt-12">

            <div className="mb-4 flex items-center justify-between">

              <span className="text-sm font-medium text-slate-300">
                Progreso al siguiente nivel
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-bold text-cyan-300">
                {Math.round(progreso)}%
              </span>

            </div>

            <div className="h-4 w-full overflow-hidden rounded-full bg-slate-700">

              <div
                className="h-4 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-1000"
                style={{
                  width: `${progreso}%`,
                }}
              />

            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <h3 className="text-xl font-bold text-white">
                🚀 Sigue así
              </h3>

              <p className="mt-3 leading-7 text-slate-300">

                Te faltan{" "}

                <strong className="text-white">
                  {Math.max(
                    siguienteMeta() - comprasEvitadas,
                    0
                  )}
                </strong>{" "}

                compras evitadas para alcanzar el siguiente nivel.

                Cada decisión inteligente fortalece tu futuro financiero.

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
          