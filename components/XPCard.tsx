"use client";

import { calcularXP } from "@/app/lib/ai/xpEngine";

type Props = {
  compras: number;
};

export default function XPCard({ compras }: Props) {
  const xp = calcularXP(compras);

  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-2xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 p-7 text-white">

        <h2 className="text-3xl font-black">
          🏆 Nivel del Usuario
        </h2>

        <p className="mt-2 opacity-90">
          Cada compra evitada aumenta tu experiencia.
        </p>

      </div>

      <div className="space-y-8 p-8">

        <div className="text-center">

          <h2 className="text-6xl font-black text-amber-600">

            {xp.nivel}

          </h2>

          <p className="mt-3 text-2xl font-bold">

            {xp.titulo}

          </p>

        </div>

        <div>

          <div className="mb-3 flex justify-between">

            <span className="font-bold">

              Experiencia

            </span>

            <span className="font-black">

              {xp.xp} XP

            </span>

          </div>

          <div className="h-5 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 transition-all duration-700"
              style={{
                width: `${xp.progreso}%`,
              }}
            />

          </div>

          <div className="mt-4 flex justify-between text-gray-500">

            <span>

              {xp.xp % 500} XP

            </span>

            <span>

              {xp.siguienteNivel} XP

            </span>

          </div>

        </div>

        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">

          <h3 className="mb-3 text-xl font-bold text-amber-700">

            🚀 Próximo objetivo

          </h3>

          <p className="leading-8 text-gray-700">

            Sigue evitando compras para subir de nivel y desbloquear nuevas insignias y desafíos.

          </p>

        </div>

      </div>

    </div>
  );
}