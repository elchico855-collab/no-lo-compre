"use client";

import { AIAdvice } from "@/app/lib/ai/types";

type Props = {
  resultado: AIAdvice;
  dinero: number;
  compras: number;
};

export default function AIAdvisor({
  resultado,
  dinero,
  compras,
}: Props) {
  const color =
    resultado.riesgo === "ALTO"
      ? "text-red-500"
      : resultado.riesgo === "MEDIO"
      ? "text-yellow-500"
      : "text-green-500";

  const fondo =
    resultado.riesgo === "ALTO"
      ? "from-red-500 via-pink-500 to-red-600"
      : resultado.riesgo === "MEDIO"
      ? "from-yellow-500 via-orange-500 to-yellow-600"
      : "from-green-500 via-emerald-500 to-green-600";

  const icono =
    resultado.riesgo === "ALTO"
      ? "🔴"
      : resultado.riesgo === "MEDIO"
      ? "🟡"
      : "🟢";

  const porcentajeImpacto =
    dinero > 0
      ? Math.min(
          100,
          Math.round(
            (resultado.score * 10 + resultado.score) *
              (100 / 110)
          )
        )
      : 0;

  const nivel =
    compras >= 60
      ? "👑 Leyenda"
      : compras >= 30
      ? "🏆 Experto"
      : compras >= 15
      ? "📈 Inversionista"
      : compras >= 5
      ? "💰 Ahorrador"
      : "🌱 Principiante";

  const estado =
    dinero >= 200000
      ? "Excelente"
      : dinero >= 100000
      ? "Muy bueno"
      : dinero >= 50000
      ? "Bueno"
      : dinero >= 10000
      ? "En crecimiento"
      : "Comenzando";

  return (
    <div className="mt-10 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

      {/* HEADER */}

      <div
        className={`bg-gradient-to-r ${fondo} p-8 text-white`}
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 text-5xl backdrop-blur">

              🧠

            </div>

            <div>

              <h2 className="text-4xl font-black">

                NoLoCompré AI

              </h2>

              <p className="mt-1 text-white/90">

                Asistente Financiero Inteligente

              </p>

            </div>

          </div>

          <div className="rounded-2xl bg-white/20 px-5 py-3 text-center backdrop-blur">

            <p className="text-sm">

              Motor

            </p>

            <p className="text-2xl font-black">

              v3.1

            </p>

          </div>

        </div>

      </div>

      <div className="space-y-8 p-8">

        {/* NIVEL DE RIESGO */}

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">

          <div className="mb-4 flex items-center justify-between">

            <h3 className="text-xl font-bold text-slate-800">

              📊 Nivel de Riesgo

            </h3>

            <span className="text-3xl font-black">

              {resultado.score}/10

            </span>

          </div>

          <div className="h-5 overflow-hidden rounded-full bg-slate-200">

            <div
              className={`h-full bg-gradient-to-r ${fondo} transition-all duration-700`}
              style={{
                width: `${resultado.score * 10}%`,
              }}
            />

          </div>

          <div className="mt-5 flex items-center gap-3">

            <span className="text-3xl">

              {icono}

            </span>

            <span className={`text-3xl font-black ${color}`}>

              {resultado.riesgo}

            </span>

          </div>

        </div>
                {/* IMPACTO EN EL AHORRO */}

        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6">

          <div className="flex items-center justify-between">

            <div>

              <h3 className="text-xl font-bold text-emerald-700">

                💰 Impacto en tu ahorro

              </h3>

              <p className="mt-1 text-slate-600">

                Esta compra representa aproximadamente

              </p>

            </div>

            <div className="text-right">

              <p className="text-5xl font-black text-emerald-600">

                {porcentajeImpacto}%

              </p>

            </div>

          </div>

          <div className="mt-6 h-5 overflow-hidden rounded-full bg-white">

            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-600 transition-all duration-700"
              style={{
                width: `${porcentajeImpacto}%`,
              }}
            />

          </div>

          <p className="mt-4 text-slate-700 leading-7">

            Si decides no realizar esta compra conservarás una mayor parte
            de tu patrimonio y podrás acercarte más rápido a tus metas.

          </p>

        </div>

        {/* HÁBITOS FINANCIEROS */}

        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6">

          <h3 className="mb-6 text-xl font-bold text-blue-700">

            👤 Tus hábitos financieros

          </h3>

          <div className="grid gap-5 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-5 shadow-sm">

              <p className="text-sm text-slate-500">

                💰 Dinero conservado

              </p>

              <h2 className="mt-2 text-3xl font-black text-emerald-600">

                ${dinero.toLocaleString()}

              </h2>

            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">

              <p className="text-sm text-slate-500">

                🛒 Compras evitadas

              </p>

              <h2 className="mt-2 text-3xl font-black text-blue-600">

                {compras}

              </h2>

            </div>

          </div>

        </div>

        {/* PERFIL FINANCIERO */}

        <div className="grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl bg-slate-50 p-6">

            <p className="text-sm text-slate-500">

              🏆 Nivel financiero

            </p>

            <h2 className="mt-3 text-3xl font-black">

              {nivel}

            </h2>

          </div>

          <div className="rounded-3xl bg-slate-50 p-6">

            <p className="text-sm text-slate-500">

              📈 Estado financiero

            </p>

            <h2 className="mt-3 text-3xl font-black text-green-600">

              {estado}

            </h2>

          </div>

        </div>
                {/* CONSEJO */}

        <div className="rounded-3xl border border-indigo-200 bg-indigo-50 p-6">

          <h3 className="mb-4 text-xl font-bold text-indigo-700">

            💬 Consejo Inteligente

          </h3>

          <p className="leading-8 text-slate-700 whitespace-pre-line">

            {resultado.mensaje}

          </p>

        </div>

        {/* ESTADO DEL MOTOR */}

        <div className="grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">

              🤖 IA

            </p>

            <h4 className="mt-2 text-xl font-black text-emerald-600">

              Activa

            </h4>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">

              ⚙️ Motor

            </p>

            <h4 className="mt-2 text-xl font-black">

              v3.1

            </h4>

          </div>

          <div className="rounded-2xl bg-slate-50 p-5">

            <p className="text-sm text-slate-500">

              🟢 Estado

            </p>

            <h4 className="mt-2 text-xl font-black text-green-600">

              En línea

            </h4>

          </div>

        </div>

        {/* BOTÓN */}

        <button
          className={`w-full rounded-3xl bg-gradient-to-r ${fondo} py-5 text-xl font-black text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl`}
        >
          🧠 {resultado.recomendacion}
        </button>

      </div>

    </div>

  );

}