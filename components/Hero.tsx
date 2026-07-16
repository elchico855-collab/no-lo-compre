"use client";

import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import ProductCard from "./ProductCard";
import Dashboard from "./Dashboard";
import InvestmentCard from "./InvestmentCard";
import { productos } from "@/app/data/productos";
import Achievements from "./Achievements";
import MoneyAnimation from "./MoneyAnimation";
import { auth } from "@/app/lib/auth";
import {
  sumarCompra,
  obtenerUsuario,
  guardarHistorial,
} from "@/app/lib/usuario";
import AIAdvisor from "./AIAdvisor";

import { analizarProducto } from "@/app/lib/ai/engine";
import { analizarUsuario } from "@/app/lib/ai/userEngine";
import FinancialGoal from "./FinancialGoal";
import XPCard from "./XPCard";
import ChallengeCard from "./ChallengeCard";
import AchievementCard from "./AchievementCard";
import SmartFinanceSection from "./SmartFinanceSection";


export default function Hero() {
  const [buscar, setBuscar] = useState("");
  const [seleccionado, setSeleccionado] = useState<number | null>(null);

  const [dineroAhorrado, setDineroAhorrado] = useState(0);
  const [comprasEvitadas, setComprasEvitadas] = useState(0);

  const [mostrarAnimacion, setMostrarAnimacion] = useState(false);
  const [montoAnimacion, setMontoAnimacion] = useState(0);

  useEffect(() => {
  async function cargarDatos() {
    const usuario = auth.currentUser;

    if (usuario) {
      const datos = await obtenerUsuario(usuario.uid);

      if (datos) {
        setDineroAhorrado(datos.dinero ?? 0);
        setComprasEvitadas(datos.compras ?? 0);
        return;
      }
    }

    const ahorro = localStorage.getItem("dineroAhorrado");
    const compras = localStorage.getItem("comprasEvitadas");

    if (ahorro) setDineroAhorrado(Number(ahorro));
    if (compras) setComprasEvitadas(Number(compras));
  }

  cargarDatos();
}, []);

    // Respaldo mientras terminamos la migración
    
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

  const comprarSinGastar = async () => {
    if (!productoSeleccionado) return;

    setDineroAhorrado(
      (total) => total + productoSeleccionado.precio
    );

    setComprasEvitadas(
      (total) => total + 1
    );
  setMontoAnimacion(productoSeleccionado.precio);

setMostrarAnimacion(true);

setTimeout(() => {
  setMostrarAnimacion(false);
}, 1200);
const usuario = auth.currentUser;

if (usuario) {
  await sumarCompra(
    usuario.uid,
    productoSeleccionado.precio
  );

  await guardarHistorial(usuario.uid, {
    id: productoSeleccionado.id,
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    imagen: productoSeleccionado.imagen,
    fecha: new Date().toLocaleString("es-MX"),
  });
}

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
    <section className="relative overflow-hidden py-24 px-6">

      {/* Fondo Premium */}

      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 -z-20" />

      <div className="absolute -top-48 -left-48 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl -z-10" />

      <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-indigo-300/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto text-center">

        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-semibold text-blue-700 shadow-sm">

          🚀 NoLoCompré Premium v2.0

        </div>

        <h2 className="mt-10 text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">

          Tu mejor compra...

        </h2>

        <h3 className="mt-4 text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">

          es la que no hiciste.

        </h3>

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-8 text-gray-600">

          Busca cualquier producto y descubre cuánto dinero puedes conservar,
          cuánto crecería si lo invirtieras y comienza a construir mejores
          hábitos financieros.

        </p>

        <div className="mt-12 flex justify-center">

          <div className="w-full max-w-2xl relative">

            <div className="mb-4 flex justify-center">

              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700 shadow">

                🔥 Simula compras inteligentes

              </span>

            </div>

            <input
              value={buscar}
              onChange={(e) => {
                setBuscar(e.target.value);
                setSeleccionado(null);
              }}
              placeholder="Busca un iPhone, una consola, una laptop..."
              className="
                w-full
                rounded-3xl
                border
                border-gray-200
                bg-white/90
                backdrop-blur-xl
                p-6
                text-lg
                text-black
                placeholder:text-gray-400
                shadow-2xl
                transition-all
                duration-300
                focus:ring-4
                focus:ring-blue-200
                focus:border-blue-500
                outline-none
              "
            />
                        {buscar.trim() !== "" &&
              seleccionado === null &&
              resultados.length > 0 && (
                <div className="absolute top-full left-0 mt-3 w-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-2xl z-50">

                  {resultados.map((producto) => (
                    <button
                      key={producto.id}
                      onClick={() => setSeleccionado(producto.id)}
                      className="flex w-full items-center gap-4 border-b p-4 text-left transition-all hover:bg-blue-50 last:border-b-0"
                    >
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="h-16 w-16 rounded-2xl bg-gray-100 p-2 object-contain"
                      />

                      <div className="flex-1">

                        <h4 className="font-bold text-gray-900">
                          {producto.nombre}
                        </h4>

                        <p className="text-sm text-gray-500">
                          {producto.marca}
                        </p>

                        <p className="mt-1 font-bold text-blue-600">
                          ${producto.precio.toLocaleString()} MXN
                        </p>

                      </div>

                    </button>
                  ))}

                </div>
              )}

          </div>

        </div>

        {/* Dashboard */}

        <div className="mt-16">
          <Dashboard
            dineroAhorrado={dineroAhorrado}
            comprasEvitadas={comprasEvitadas}
          />
          <Achievements
  comprasEvitadas={comprasEvitadas}
/>
        </div>

        {/* Producto */}

        {productoSeleccionado && (
          <div className="mt-16 space-y-10">

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
        {(() => {
  const resultadoProducto = analizarProducto({
    id: productoSeleccionado.id,
    nombre: productoSeleccionado.nombre,
    precio: productoSeleccionado.precio,
    marca: productoSeleccionado.marca,
    categoria: "General",
  });

  const resultadoUsuario = analizarUsuario({
  dinero: dineroAhorrado,
  compras: comprasEvitadas,
  precioProducto: productoSeleccionado.precio,
});

  return (
    <>
  <AIAdvisor
    resultado={{
      ...resultadoProducto,
      mensaje: `${resultadoProducto.mensaje}\n\n${resultadoUsuario.mensaje}`,
    }}
    dinero={dineroAhorrado}
    compras={comprasEvitadas}
  />

  <SmartFinanceSection
    dinero={dineroAhorrado}
    compras={comprasEvitadas}
    precio={productoSeleccionado?.precio ?? 0}
    categoria="General"
    marca={productoSeleccionado?.marca ?? ""}
  />

  <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">

    <FinancialGoal
      nombre={
        productoSeleccionado
          ? productoSeleccionado.nombre
          : "Sin objetivo"
      }
      objetivo={
        productoSeleccionado
          ? productoSeleccionado.precio
          : 1
      }
      ahorrado={dineroAhorrado}
    />

    <XPCard
      compras={comprasEvitadas}
    />

    <ChallengeCard
      compras={comprasEvitadas}
    />

    <AchievementCard
      compras={comprasEvitadas}
    />

  </div>

</>
  );
})()}

          </div>
        )}
       <MoneyAnimation
  amount={montoAnimacion}
  visible={mostrarAnimacion}
/>
      </div>

    </section>
  );
}
