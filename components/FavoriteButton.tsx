"use client";

import { useEffect, useState } from "react";

type Props = {
  producto: {
    id: number;
    nombre: string;
    precio: number;
    imagen: string;
  };
};

export default function FavoriteButton({ producto }: Props) {
  const [favorito, setFavorito] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );

    setFavorito(
      favoritos.some((p: any) => p.id === producto.id)
    );
  }, [producto.id]);

  const toggleFavorito = () => {
    const favoritos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );

    if (favorito) {
      const nuevos = favoritos.filter(
        (p: any) => p.id !== producto.id
      );

      localStorage.setItem(
        "favoritos",
        JSON.stringify(nuevos)
      );

      setFavorito(false);
    } else {
      favoritos.push(producto);

      localStorage.setItem(
        "favoritos",
        JSON.stringify(favoritos)
      );

      setFavorito(true);
    }
  };

  return (
    <button
      onClick={toggleFavorito}
      className={`rounded-2xl py-4 font-bold transition w-full border-2 ${
        favorito
          ? "bg-red-500 text-white border-red-500"
          : "border-blue-600 text-blue-700 hover:bg-blue-50"
      }`}
    >
      {favorito ? "❤️ Guardado" : "🤍 Guardar"}
    </button>
  );
}