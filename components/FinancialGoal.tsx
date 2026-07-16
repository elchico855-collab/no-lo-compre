"use client";
import { calcularMeta } from "@/app/lib/ai/goalEngine";

type Props = {
  nombre: string;
  objetivo: number;
  ahorrado: number;
};

export default function FinancialGoal({
  nombre,
  objetivo,
  ahorrado,
}: Props) {
  const porcentaje = Math.min(
    100,
    Math.round((ahorrado / objetivo) * 100)
  );

  const restante = Math.max(
    0,
    objetivo - ahorrado
  );
  const prediccion = calcularMeta(
  objetivo,
  ahorrado
);
  return (
    <div className="mt-10 overflow-hidden rounded-3xl border border-violet-200 bg-white shadow-2xl">

      {/* Header */}

      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 p-7 text-white">

        <h2 className="text-3xl font-black">

          🎯 Mi Meta Financiera

        </h2>

        <p className="mt-2 opacity-90">

          Convierte cada compra evitada en un objetivo.

        </p>

      </div>

      <div className="space-y-8 p-8">

        <div>

          <p className="text-gray-500">

            Objetivo

          </p>

          <h2 className="mt-2 text-4xl font-black">

            {nombre}

          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-2xl bg-slate-50 p-6">

            <p className="text-gray-500">

              💰 Meta

            </p>

            <h2 className="mt-2 text-3xl font-black">

              ${objetivo.toLocaleString()}

            </h2>

          </div>

          <div className="rounded-2xl bg-slate-50 p-6">

            <p className="text-gray-500">

              💵 Ahorrado

            </p>

            <h2 className="mt-2 text-3xl font-black text-green-600">

              ${ahorrado.toLocaleString()}

            </h2>

          </div>

        </div>

        <div>

          <div className="mb-3 flex justify-between">

            <span className="font-bold">

              Progreso

            </span>

            <span className="font-black">

              {porcentaje}%

            </span>

          </div>

          <div className="h-5 overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-600 transition-all duration-700"
              style={{
                width: `${porcentaje}%`,
              }}
            />

          </div>

        </div>

        <div className="rounded-2xl bg-yellow-50 border border-yellow-200 p-6">
         <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">

  <h3 className="mb-4 text-xl font-bold text-indigo-700">

    🧠 Predicción Inteligente

  </h3>

  <p className="leading-8 text-slate-700">

    {prediccion.mensaje}

  </p>

</div>
          <p className="text-gray-600">

            💡 Dinero restante

          </p>

          <h2 className="mt-2 text-4xl font-black text-yellow-700">

            ${restante.toLocaleString()}

          </h2>

        </div>

      </div>

    </div>
  );
}