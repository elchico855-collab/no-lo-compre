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
    <div className="mt-12 max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">

      <div className="grid md:grid-cols-2">

        {/* Imagen */}
        <div className="bg-gradient-to-br from-slate-100 to-white flex items-center justify-center p-12">

          <img
            src={imagen}
            alt={nombre}
            className="max-h-[420px] object-contain hover:scale-105 transition duration-500"
          />

        </div>

        {/* Información */}
        <div className="p-10">

          <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
            Apple
          </span>

          <h2 className="text-5xl font-bold text-gray-900 mt-6">
            {nombre}
          </h2>

          <div className="flex items-center gap-3 mt-5">

            <div className="text-yellow-500 text-2xl">
              ★★★★★
            </div>

            <span className="text-gray-500">
              4.9 (2,548 opiniones)
            </span>

          </div>

          <h3 className="text-6xl font-extrabold text-blue-700 mt-8">
            ${precio.toLocaleString()} MXN
          </h3>

          <div className="mt-8 space-y-3 text-gray-700">

            <div>✅ Envío gratis</div>

            <div>✅ Disponible</div>

            <div>✅ Garantía oficial</div>

            <div>✅ Pago seguro</div>

          </div>

          <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6">

            <p className="text-green-700 font-semibold">
              💚 Si decides no comprarlo...
            </p>

            <h3 className="text-3xl font-bold text-green-700 mt-3">
              Conservas ${precio.toLocaleString()} MXN
            </h3>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">

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
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl py-4 font-bold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              💰 Guardar este dinero
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}