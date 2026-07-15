"use client";

import FavoriteButton from "./FavoriteButton";

type Props = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  onComprar: () => void;
};

export default function ProductCard({
  id,
  nombre,
  precio,
  imagen,
  onComprar,
}: Props) {
  return (
    <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl">

      <div className="grid md:grid-cols-2">

        {/* Imagen */}

        <div className="flex items-center justify-center bg-gradient-to-br from-slate-100 to-white p-12">

          <img
            src={imagen}
            alt={nombre}
            className="max-h-[420px] object-contain transition duration-500 hover:scale-105"
          />

        </div>

        {/* Información */}

        <div className="flex flex-col justify-between p-10">

          <div>

            <span className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-400 to-amber-500 px-5 py-2 text-sm font-bold text-white shadow-lg">

              🔥 Producto Popular

            </span>

            <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">

              {nombre}

            </h2>

            <div className="mt-5 flex items-center gap-3">

              <div className="text-2xl text-yellow-500">

                ★★★★★

              </div>

              <span className="text-gray-500">

                4.9 (2,548 opiniones)

              </span>

            </div>

            <h3 className="mt-8 text-6xl font-black text-blue-700">

              ${precio.toLocaleString()} MXN

            </h3>

            <div className="mt-8 space-y-3 text-gray-700">

              <div>✅ Envío gratis</div>

              <div>✅ Disponible</div>

              <div>✅ Garantía oficial</div>

              <div>✅ Pago seguro</div>

            </div>

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-8 text-white shadow-xl">

              <p className="font-semibold text-green-100">

                💰 Si resistes la tentación...

              </p>

              <h3 className="mt-3 text-4xl font-black">

                Conservas ${precio.toLocaleString()} MXN

              </h3>

              <div className="my-6 h-px bg-white/20"></div>

              <p className="text-green-100">

                Si invirtieras este dinero al <strong>12% anual</strong>

              </p>

              <h2 className="mt-3 text-3xl font-bold">

                En 10 años ≈ $
                {(precio * 3.1058).toLocaleString(undefined, {
                  maximumFractionDigits: 0,
                })}

              </h2>

            </div>

          </div>
                    <div className="mt-10 grid grid-cols-2 gap-4">

            <FavoriteButton
              producto={{
                id,
                nombre,
                precio,
                imagen,
              }}
            />

            <button
              onClick={onComprar}
              className="rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
            >
              🚫 Resistir la tentación
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}