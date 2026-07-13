"use client";

import { useEffect, useState } from "react";

type Producto = {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
};

export default function FavoritosPage() {

  const [favoritos, setFavoritos] = useState<Producto[]>([]);

  useEffect(() => {
    const datos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );

    setFavoritos(datos);
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-10">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold mb-10">

          ❤️ Mis Favoritos

        </h1>

        {favoritos.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">

            <h2 className="text-3xl font-bold">

              Aún no tienes favoritos

            </h2>

            <p className="text-gray-500 mt-4">

              Guarda productos para verlos aquí.

            </p>

          </div>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {favoritos.map((producto) => (

              <div
                key={producto.id}
                className="bg-white rounded-3xl shadow-xl p-6"
              >

                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="h-56 w-full object-contain"
                />

                <h2 className="text-2xl font-bold mt-6">

                  {producto.nombre}

                </h2>

                <p className="text-blue-700 text-3xl font-bold mt-4">

                  ${producto.precio.toLocaleString()} MXN

                </p>

              </div>

            ))}

          </div>

        )}

      </div>

    </main>
  );
}