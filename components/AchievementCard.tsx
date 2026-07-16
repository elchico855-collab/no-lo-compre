"use client";

import { obtenerInsignias } from "@/app/lib/ai/achievementEngine";

type Props = {
  compras: number;
};

export default function AchievementCard({
  compras,
}: Props) {

  const insignias = obtenerInsignias(compras);

  return (

    <div className="mt-10 overflow-hidden rounded-3xl border border-yellow-200 bg-white shadow-2xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 p-7 text-white">

        <h2 className="text-3xl font-black">

          🏅 Insignias

        </h2>

        <p className="mt-2 opacity-90">

          Desbloquea logros mientras mejoras tus hábitos financieros.

        </p>

      </div>

      <div className="space-y-5 p-8">

        {insignias.map((insignia) => (

          <div
            key={insignia.id}
            className={`flex items-center justify-between rounded-2xl border p-5 transition-all duration-300 ${
              insignia.desbloqueado
                ? "border-green-200 bg-green-50"
                : "border-gray-200 bg-gray-50 opacity-70"
            }`}
          >

            <div className="flex items-center gap-4">

              <div className="text-4xl">

                {insignia.icono}

              </div>

              <div>

                <h3 className="text-xl font-black">

                  {insignia.titulo}

                </h3>

                <p className="text-gray-500">

                  {insignia.descripcion}

                </p>

              </div>

            </div>

            <div>

              {insignia.desbloqueado ? (

                <span className="rounded-full bg-green-500 px-4 py-2 font-bold text-white">

                  ✅ Desbloqueada

                </span>

              ) : (

                <span className="rounded-full bg-gray-400 px-4 py-2 font-bold text-white">

                  🔒 Bloqueada

                </span>

              )}

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}