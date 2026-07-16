export type XPData = {
  xp: number;
  nivel: number;
  siguienteNivel: number;
  progreso: number;
  titulo: string;
};

export function calcularXP(compras: number): XPData {

  // Cada compra evitada vale 100 XP
  const xp = compras * 100;

  // Cada nivel requiere 500 XP
  const nivel = Math.floor(xp / 500) + 1;

  const xpActualNivel = xp % 500;

  const progreso = Math.round(
    (xpActualNivel / 500) * 100
  );

  let titulo = "🌱 Principiante";

  if (nivel >= 20) {

    titulo = "👑 Leyenda";

  } else if (nivel >= 15) {

    titulo = "💎 Millonario";

  } else if (nivel >= 10) {

    titulo = "🏆 Maestro";

  } else if (nivel >= 7) {

    titulo = "🚀 Experto";

  } else if (nivel >= 5) {

    titulo = "💰 Inversionista";

  } else if (nivel >= 3) {

    titulo = "🔥 Ahorrador";

  }

  return {

    xp,

    nivel,

    siguienteNivel: 500,

    progreso,

    titulo,

  };

}