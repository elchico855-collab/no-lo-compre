"use client";

import { SmartAdvisorResult } from "@/app/lib/ai/smartAdvisor";

type Props = {
  resultado: SmartAdvisorResult;
};

export default function SmartAdvisorCard({
  resultado,
}: Props) {

  const colorImpacto =
    resultado.impacto === "ALTO"
      ? "text-red-500"
      : resultado.impacto === "MEDIO"
      ? "text-yellow-500"
      : "text-green-500";

  return (

    <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-700 p-8 text-white">

        <h2 className="text-4xl font-black">
          🧠 Smart Finance AI
        </h2>

        <p className="mt-2 text-blue-100">
          Asesor Financiero Inteligente v3.1
        </p>

      </div>

      <div className="grid gap-6 p-8 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-100 p-6 text-center">

          <p className="text-gray-500">
            AI Score
          </p>

          <h2 className="mt-3 text-5xl font-black text-blue-600">
            {resultado.score}
          </h2>

        </div>

        <div className="rounded-2xl bg-slate-100 p-6 text-center">

          <p className="text-gray-500">
            Decisión
          </p>

          <h2 className="mt-3 text-4xl font-black text-indigo-600">
            {resultado.decision}
          </h2>

        </div>

        <div className="rounded-2xl bg-slate-100 p-6 text-center">

          <p className="text-gray-500">
            Impacto
          </p>

          <h2 className={`mt-3 text-4xl font-black ${colorImpacto}`}>
            {resultado.impacto}
          </h2>

        </div>
                <div className="md:col-span-3 rounded-2xl bg-slate-50 p-6">

          <h3 className="text-2xl font-bold text-slate-800">
            📋 Motivos del análisis
          </h3>

          <ul className="mt-5 space-y-3">

            {resultado.motivos.map((motivo, index) => (

              <li
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
              >

                <span className="text-green-500 text-xl">
                  ✔
                </span>

                <span className="text-slate-700">
                  {motivo}
                </span>

              </li>

            ))}

          </ul>

        </div>

        <div className="md:col-span-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-indigo-700 p-6 text-center text-white">

          <p className="text-lg opacity-90">
            Probabilidad de una buena decisión
          </p>

          <h2 className="mt-3 text-6xl font-black">
            {resultado.probabilidad}%
          </h2>

        </div>

      </div>

    </div>

  );

}