export type Achievement = {
  id: number;
  titulo: string;
  descripcion: string;
  icono: string;
  desbloqueado: boolean;
};

export function obtenerInsignias(
  comprasEvitadas: number
): Achievement[] {

  return [

    {
      id: 1,
      titulo: "Primer ahorro",
      descripcion: "Evita tu primera compra.",
      icono: "🥉",
      desbloqueado: comprasEvitadas >= 1,
    },

    {
      id: 2,
      titulo: "Ahorrador",
      descripcion: "Evita 10 compras.",
      icono: "🥈",
      desbloqueado: comprasEvitadas >= 10,
    },

    {
      id: 3,
      titulo: "Inversionista",
      descripcion: "Evita 25 compras.",
      icono: "🥇",
      desbloqueado: comprasEvitadas >= 25,
    },

    {
      id: 4,
      titulo: "Leyenda",
      descripcion: "Evita 50 compras.",
      icono: "👑",
      desbloqueado: comprasEvitadas >= 50,
    },

  ];

}