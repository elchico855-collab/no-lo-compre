"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { auth, loginGoogle } from "@/app/lib/auth";
import { onAuthStateChanged, User } from "firebase/auth";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

const [loading, setLoading] = useState(false);
const [usuario, setUsuario] = useState<User | null>(null);

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUsuario(user);
  });

  return () => unsubscribe();
}, []);

const iniciarSesion = async () => {
  try {
    setLoading(true);

    const user = await loginGoogle();

    console.log("Usuario:", user);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex flex-col">

          <h1 className="text-3xl font-extrabold leading-none">

            <span className="text-slate-900">
              NoLo
            </span>

            <span className="text-blue-600">
              Compré
            </span>

          </h1>

          <span className="text-xs text-gray-500">
            Compra inteligentemente
          </span>

        </Link>

        {/* Menú escritorio */}

        <nav className="hidden lg:flex items-center gap-8 font-semibold">

          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            🏠 Inicio
          </Link>

          <Link
            href="/favoritos"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            ❤️ Favoritos
          </Link>

          <Link
            href="/historial"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            📜 Historial
          </Link>

          <Link
            href="/acerca"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            ℹ️ Acerca
          </Link>

        </nav>

        {/* Acciones */}

        <div className="hidden lg:flex items-center gap-4">

  <button
    className="w-11 h-11 rounded-full bg-gray-100 hover:bg-gray-200 transition"
  >
    🌙
  </button>

  {usuario ? (

    <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-2 shadow-md border">

      <img
        src={usuario.photoURL ?? "/window.svg"}
        alt="Perfil"
        className="w-11 h-11 rounded-full border-2 border-blue-500"
      />

      <div>

        <p className="font-bold text-gray-800 leading-none">
          {usuario.displayName}
        </p>

        <p className="text-xs text-green-600">
          🟢 En línea
        </p>

      </div>

    </div>

  ) : (

    <button
      onClick={iniciarSesion}
      disabled={loading}
      className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {loading ? "Conectando..." : "Iniciar sesión"}
    </button>

  )}

</div>

        {/* Botón móvil */}

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="lg:hidden text-3xl"
        >
          ☰
        </button>

      </div>

      {/* Menú móvil */}

      {menuAbierto && (

        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">

          <nav className="flex flex-col">

            <Link
              href="/"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 hover:bg-gray-100"
            >
              🏠 Inicio
            </Link>

            <Link
              href="/favoritos"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 hover:bg-gray-100"
            >
              ❤️ Favoritos
            </Link>

            <Link
              href="/historial"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 hover:bg-gray-100"
            >
              📜 Historial
            </Link>

            <Link
              href="/acerca"
              onClick={() => setMenuAbierto(false)}
              className="px-6 py-4 hover:bg-gray-100"
            >
              ℹ️ Acerca
            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}