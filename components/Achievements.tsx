type Props = {
  comprasEvitadas: number;
};

const logros = [
  {
    meta: 1,
    titulo: "Primer ahorro",
    icono: "🥉",
  },
  {
    meta: 5,
    titulo: "Comprador Inteligente",
    icono: "🥈",
  },
  {
    meta: 15,
    titulo: "Maestro del Ahorro",
    icono: "🥇",
  },
  {
    meta: 30,
    titulo: "Experto Financiero",
    icono: "💎",
  },
  {
    meta: 50,
    titulo: "Leyenda del Ahorro",
    icono: "👑",
  },
];

export default function Achievements({
  comprasEvitadas,
}: Props) {

  return (

    <section className="mt-16">

      <div className="rounded-3xl bg-white shadow-2xl border border-gray-200 p-8">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black text-gray-900">

              🏆 Tus Logros

            </h2>

            <p className="mt-2 text-gray-500">

              Desbloquea logros evitando compras impulsivas.

            </p>

          </div>

          <div className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-bold text-yellow-700">

            {comprasEvitadas} compras

          </div>

        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
                      {logros.map((logro) => {

            const desbloqueado =
              comprasEvitadas >= logro.meta;

            return (

              <div
                key={logro.meta}
                className={`rounded-2xl border p-6 transition-all duration-300 hover:scale-105 ${
                  desbloqueado
                    ? "border-emerald-300 bg-gradient-to-r from-emerald-50 to-green-100 shadow-lg"
                    : "border-gray-200 bg-gray-100 opacity-70"
                }`}
              >

                <div className="flex items-center gap-4">

                  <div className="text-5xl">

                    {desbloqueado ? logro.icono : "🔒"}

                  </div>

                  <div>

                    <h3 className="text-xl font-bold text-gray-900">

                      {logro.titulo}

                    </h3>

                    <p className="mt-1 text-gray-500">

                      {desbloqueado
                        ? "¡Logro desbloqueado!"
                        : `Desbloquea este logro al llegar a ${logro.meta} compras evitadas.`}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}
        