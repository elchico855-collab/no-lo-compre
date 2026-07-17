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
  console.log("CLICK LOGIN");

  try {
    setLoading(true);

    await loginGoogle();

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-xl shadow-sm">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

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

        {/* Navegación escritorio */}

        <nav className="hidden items-center gap-8 font-semibold lg:flex">

          <Link
            href="/"
            className="text-gray-700 transition hover:text-blue-600"
          >
            🏠 Inicio
          </Link>

          <Link
            href="/favoritos"
            className="text-gray-700 transition hover:text-blue-600"
          >
            ❤️ Favoritos
          </Link>

          <Link
            href="/historial"
            className="text-gray-700 transition hover:text-blue-600"
          >
            📜 Historial
          </Link>

          <Link
            href="/acerca"
            className="text-gray-700 transition hover:text-blue-600"
          >
            ℹ️ Acerca
          </Link>

        </nav>

        {/* Acciones escritorio */}

        <div className="hidden items-center gap-4 lg:flex">

          <button
            className="h-11 w-11 rounded-full bg-gray-100 transition hover:bg-gray-200"
          >
            🌙
          </button>

          {usuario ? (

            <div className="flex items-center gap-3 rounded-2xl border bg-white px-4 py-2 shadow-md">

              <img
                src={usuario.photoURL ?? "/window.svg"}
                alt="Perfil"
                className="h-11 w-11 rounded-full border-2 border-blue-500"
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
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Conectando..." : "👤 Iniciar sesión"}
            </button>

          )}

        </div>

        {/* Botón móvil */}

        <button
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="text-3xl lg:hidden"
        >
          ☰
        </button>

      </div>
            {/* Menú móvil */}

      {menuAbierto && (

        <div className="border-t border-gray-200 bg-white shadow-lg lg:hidden">

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

            <div className="border-t p-6">

              {usuario ? (

                <div className="flex items-center gap-3">

                  <img
                    src={usuario.photoURL ?? "/window.svg"}
                    alt="Perfil"
                    className="h-12 w-12 rounded-full border-2 border-blue-500"
                  />

                  <div>

                    <p className="font-bold text-gray-800">
                      {usuario.displayName}
                    </p>

                    <p className="text-sm text-green-600">
                      🟢 En línea
                    </p>

                  </div>

                </div>

              ) : (

                <button
                  onClick={iniciarSesion}
                  disabled={loading}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Conectando..." : "👤 Iniciar sesión"}
                </button>

              )}

            </div>

          </nav>

        </div>

      )}

    </header>
  );
}