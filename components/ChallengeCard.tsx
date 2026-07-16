"use client";

import { obtenerDesafio } from "@/app/lib/ai/challengeEngine";

type Props = {
  compras: number;
};

export default function ChallengeCard({
  compras,
}: Props) {

  const desafio = obtenerDesafio(compras);

  const porcentaje = Math.round(
    (desafio.progreso / desafio.objetivo) * 100
  );

  return (

    <div className="mt-10 overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-2xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 p-7 text-white">

        <h2 className="text-3xl font-black">

          🔥 Desafío Semanal

        </h2>

        <p className="mt-2 opacity-90">

          Completa retos y gana experiencia.

        </p>

      </div>

      <div className="space-y-8 p-8">

        <div>

          <h3 className="text-2xl font-black">

            {desafio.descripcion}

          </h3>

        </div>

        <div>

          <div className="mb-3 flex justify-between">

            <span className="font-bold">

              Progreso

            </span>

            <span className="font-black">

              {desafio.progreso} / {desafio.objetivo}

            </span>

          </div>

          <div className="h-5 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 transition-all duration-700"
              style={{
                width: `${porcentaje}%`,
              }}
            />

          </div>

        </div>

        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-5">

            <p className="text-gray-500">

              🎁 Recompensa

            </p>

            <h3 className="mt-2 text-3xl font-black text-orange-600">

              +{desafio.recompensaXP} XP

            </h3>

          </div>

          <div className="rounded-2xl border border-green-200 bg-green-50 p-5">

            <p className="text-gray-500">

              Estado

            </p>

            <h3 className="mt-2 text-2xl font-black">

              {desafio.completado
                ? "✅ Completado"
                : "⏳ En progreso"}

            </h3>

          </div>

        </div>

      </div>

    </div>

  );

}