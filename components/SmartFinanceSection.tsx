"use client";

import SmartAdvisorCard from "./SmartAdvisorCard";
import { smartAdvisor } from "@/app/lib/ai/smartAdvisor";

type Props = {
  dinero: number;
  compras: number;
  precio: number;
  categoria: string;
  marca: string;
};

export default function SmartFinanceSection({
  dinero,
  compras,
  precio,
  categoria,
  marca,
}: Props) {

  const resultado = smartAdvisor({
    dinero,
    compras,
    precio,
    categoria,
    marca,
  });

  return (

    <section className="mt-12">

      <div className="mb-8">

        <h2 className="text-4xl font-black text-slate-900">

          🧠 Smart Finance

        </h2>

        <p className="mt-2 text-slate-600">

          Tu nuevo asesor financiero inteligente.

        </p>

      </div>

      <SmartAdvisorCard
        resultado={resultado}
      />

    </section>

  );

}