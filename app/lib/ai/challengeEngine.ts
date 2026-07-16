export type Challenge = {
  id: number;
  titulo: string;
  descripcion: string;
  objetivo: number;
  progreso: number;
  recompensaXP: number;
  completado: boolean;
};

export function obtenerDesafio(
  comprasEvitadas: number
): Challenge {

  const objetivo = 7;

  const progreso = Math.min(
    comprasEvitadas,
    objetivo
  );

  const completado =
    progreso >= objetivo;

  return {

    id: 1,

    titulo: "🔥 Desafío Semanal",

    descripcion:
      "Evita 7 compras para completar el reto.",

    objetivo,

    progreso,

    recompensaXP: 200,

    completado,

  };

}