import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">

      <Header />

      <Hero />

      {/* Estadísticas */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-5xl font-bold text-blue-700">$0</h3>
          <p className="mt-3 text-gray-500">
            Dinero ahorrado
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-5xl font-bold text-blue-700">0</h3>
          <p className="mt-3 text-gray-500">
            Compras evitadas
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-5xl font-bold text-blue-700">
            Nivel 1
          </h3>
          <p className="mt-3 text-gray-500">
            Comprador Inteligente
          </p>
        </div>

      </section>

      {/* Beneficios */}
      <section className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8 px-6">

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl">💰</div>

          <h3 className="text-2xl font-bold mt-4">
            Ahorra dinero
          </h3>

          <p className="mt-3 text-gray-500">
            Evita compras impulsivas y conserva más dinero.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl">🛒</div>

          <h3 className="text-2xl font-bold mt-4">
            Compra sin gastar
          </h3>

          <p className="mt-3 text-gray-500">
            Disfruta la experiencia sin afectar tu bolsillo.
          </p>

        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="text-5xl">📈</div>

          <h3 className="text-2xl font-bold mt-4">
            Estadísticas
          </h3>

          <p className="mt-3 text-gray-500">
            Descubre cuánto has evitado gastar.
          </p>

        </div>

      </section>

      {/* Panel */}
      <section className="max-w-5xl mx-auto mt-20 px-6 pb-20">

        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl shadow-xl p-10 text-white">

          <h2 className="text-4xl font-bold">
            Tu ahorro
          </h2>

          <div className="grid grid-cols-2 gap-10 mt-10">

            <div>

              <p className="text-lg">
                Dinero ahorrado
              </p>

              <h3 className="text-5xl font-bold mt-2">
                $0.00
              </h3>

            </div>

            <div>

              <p className="text-lg">
                Compras evitadas
              </p>

              <h3 className="text-5xl font-bold mt-2">
                0
              </h3>

            </div>

          </div>

        </div>

      </section>
     <Footer />
    </main>
  );
}