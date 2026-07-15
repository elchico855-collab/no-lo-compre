export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-extrabold">
              NoLo<span className="text-blue-400">Compré</span>
            </h2>

            <p className="mt-4 text-gray-400 leading-7">
              Compra inteligentemente.
              <br />
              Tu mejor compra siempre será
              la que decidiste no hacer.
            </p>

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Navegación
            </h3>

            <ul className="space-y-3 mt-5 text-gray-400">

              <li>Inicio</li>

              <li>Favoritos</li>

              <li>Estadísticas</li>

              <li>Acerca</li>

            </ul>

          </div>

          <div>

            <h3 className="font-bold text-lg">
              Estado
            </h3>

            <div className="mt-5 space-y-3">

              <p className="text-green-400">
                ● Sistema en línea
              </p>

              <p className="text-gray-400">
                <p>🚀 Versión 2.3 Premium</p>
              </p>

              <p className="text-gray-400">
                Hecho con Next.js + Tailwind
              </p>

            </div>

          </div>

        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-gray-500">

          © 2026 NoLoCompré.
          Todos los derechos reservados.

        </div>

      </div>

    </footer>
  );
}