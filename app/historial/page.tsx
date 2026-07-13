"use client";

import { useEffect, useState } from "react";

type HistorialItem = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  fecha: string;
};

export default function HistorialPage() {
  const [historial, setHistorial] = useState<HistorialItem[]>([]);

  useEffect(() => {
    const datos = JSON.parse(
      localStorage.getItem("historialCompras") || "[]"
    );

    setHistorial(datos);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-extrabold text-gray-900 mb-3">
          📜 Historial de Compras Evitadas
        </h1>

        <p className="text-gray-500 mb-10">
          Aquí se registran todas las compras que decidiste no realizar.
        </p>

        {historial.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

            <div className="text-6xl">
              📭
            </div>

            <h2 className="text-3xl font-bold mt-6">
              Aún no hay historial
            </h2>

            <p className="text-gray-500 mt-4">
              Cuando pulses "Guardar este dinero", aparecerán aquí tus registros.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {historial.map((item) => (

              <div
                key={`${item.id}-${item.fecha}`}
                className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row items-center gap-6"
              >

                <img
                  src={item.imagen}
                  alt={item.nombre}
                  className="w-32 h-32 object-contain bg-gray-100 rounded-2xl p-4"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold text-gray-900">
                    {item.nombre}
                  </h2>

                  <p className="text-blue-700 text-3xl font-bold mt-3">
                    ${item.precio.toLocaleString()} MXN
                  </p>

                  <p className="text-gray-500 mt-3">
                    📅 {item.fecha}
                  </p>

                </div>

                <div className="bg-green-100 text-green-700 px-6 py-3 rounded-2xl font-bold">
                  ✔ Compra evitada
                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}