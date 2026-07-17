type FinancialCenterProps = {
  dinero: number;
  compras: number;
};

export default function FinancialCenter({
  dinero,
  compras,
}: FinancialCenterProps) {
  return (
    <section className="mt-12">

      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 text-white shadow-2xl">

        <div className="mb-8 flex items-center justify-between">

          <div>

            <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-300">
              🏦 Centro Financiero
            </span>

            <h2 className="mt-5 text-5xl font-extrabold">
              Tu patrimonio
            </h2>

            <p className="mt-3 text-lg text-slate-300">
              Visualiza el crecimiento de tu ahorro y toma mejores decisiones financieras.
            </p>

          </div>

          <div className="hidden lg:block text-right">

            <p className="text-slate-400">
              Estado financiero
            </p>

            <h3 className="mt-2 text-3xl font-bold text-emerald-400">
              Saludable
            </h3>

          </div>

        </div>

       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">

            <p className="text-slate-300">
              💰 Patrimonio
            </p>

           <h3 className="mt-4 text-4xl font-black">
  ${dinero.toLocaleString("es-MX")}
</h3>
            <p className="mt-2 text-sm text-emerald-400">
              +12.8% este mes
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">

            <p className="text-slate-300">
  📈 Compras evitadas
</p>

<h3 className="mt-4 text-4xl font-black">
  {compras}
</h3>

<p className="mt-2 text-sm text-cyan-400">
  Productos evitados
</p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">

            <p className="text-slate-300">
              🔥 Racha
            </p>

            <h3 className="mt-4 text-4xl font-black">
              14 días
            </h3>

            <p className="mt-2 text-sm text-orange-400">
              Sin compras impulsivas
            </p>

          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-lg">

            <p className="text-slate-300">
              🎯 Metas
            </p>

            <h3 className="mt-4 text-4xl font-black">
              3 / 5
            </h3>

            <p className="mt-2 text-sm text-pink-400">
              Objetivos cumplidos
            </p>

          </div>

        </div>
                <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8">

          <h3 className="mb-4 text-2xl font-bold">
            📊 Evolución del ahorro
          </h3>

          <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-slate-600">
            <p className="text-slate-400">
              Aquí irá la gráfica de ahorro en la próxima versión.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}