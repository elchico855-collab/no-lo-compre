"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import Dashboard from "./Dashboard";
import InvestmentCard from "./InvestmentCard";
import { productos } from "@/app/data/productos";

export default function Hero() {
  const [buscar, setBuscar] = useState("");
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const [dineroAhorrado, setDineroAhorrado] = useState(0);
  const [comprasEvitadas, setComprasEvitadas] = useState(0);

  useEffect(() => {
    const ahorro = localStorage.getItem("dineroAhorrado");
    const compras = localStorage.getItem("comprasEvitadas");

    if (ahorro) setDineroAhorrado(Number(ahorro));
    if (compras) setComprasEvitadas(Number(compras));
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "dineroAhorrado",
      dineroAhorrado.toString()
    );

    localStorage.setItem(
      "comprasEvitadas",
      comprasEvitadas.toString()
    );
  }, [dineroAhorrado, comprasEvitadas]);

  const resultados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(buscar.toLowerCase())
  );

  const productoSeleccionado = productos.find(
    (producto) => producto.id === seleccionado
  );

  const comprarSinGastar = () => {
    if (!productoSeleccionado) return;

    setDineroAhorrado(
      (total) => total + productoSeleccionado.precio
    );

    setComprasEvitadas(
      (total) => total + 1
    );

    // Guardar historial

    const historial = JSON.parse(
      localStorage.getItem("historialCompras") || "[]"
    );

    historial.unshift({
      id: productoSeleccionado.id,
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      imagen: productoSeleccionado.imagen,
      fecha: new Date().toLocaleString("es-MX"),
    });

    localStorage.setItem(
      "historialCompras",
      JSON.stringify(historial)
    );

    toast.success(
      `💰 Has conservado $${productoSeleccionado.precio.toLocaleString()} MXN`,
      {
        duration: 3000,
      }
    );

    setBuscar("");
    setSeleccionado(null);
  };
    return (
    <section className="text-center py-20 px-6">

      <h2 className="text-6xl font-extrabold text-gray-900">
        Tu mejor compra...
      </h2>

      <h3 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-2">
        es la que no hiciste.
      </h3>

      <p className="mt-8 text-xl text-gray-600">
        Busca cualquier producto y descubre cuánto podrías ahorrar e invertir.
      </p>

      <div className="mt-10 flex justify-center">

        <div className="w-full max-w-xl relative">

          <input
            value={buscar}
            onChange={(e) => {
              setBuscar(e.target.value);
              setSeleccionado(null);
            }}
            placeholder="Buscar un producto..."
            className="w-full rounded-2xl border p-5 text-lg text-black placeholder:text-gray-400 bg-white shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {buscar.trim() !== "" &&
            seleccionado === null &&
            resultados.length > 0 && (

              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-2xl shadow-xl overflow-hidden z-50">

                {resultados.map((producto) => (

                  <button
                    key={producto.id}
                    onClick={() => setSeleccionado(producto.id)}
                    className="w-full flex items-center gap-4 p-4 hover:bg-gray-100 transition border-b last:border-b-0"
                  >

                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="w-16 h-16 object-contain rounded-xl bg-gray-100 p-2"
                    />

                    <div className="text-left flex-1">

                      <p className="font-bold text-gray-900">
                        {producto.nombre}
                      </p>

                      <p className="text-sm text-gray-500">
                        {producto.marca}
                      </p>

                      <p className="text-blue-700 font-bold mt-1">
                        ${producto.precio.toLocaleString()} MXN
                      </p>

                    </div>

                  </button>

                ))}

              </div>

            )}

        </div>

      </div>

      <Dashboard
        dineroAhorrado={dineroAhorrado}
        comprasEvitadas={comprasEvitadas}
      />

      {productoSeleccionado && (
        <>
          <ProductCard
            id={productoSeleccionado.id}
            nombre={productoSeleccionado.nombre}
            precio={productoSeleccionado.precio}
            imagen={productoSeleccionado.imagen}
            onComprar={comprarSinGastar}
          />

          <InvestmentCard
            precio={productoSeleccionado.precio}
          />
        </>
      )}

    </section>
  );
}