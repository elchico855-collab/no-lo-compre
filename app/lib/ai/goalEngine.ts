export type GoalPrediction = {
  porcentaje: number;
  restante: number;
  meses: number;
  mensaje: string;
};

export function calcularMeta(
  objetivo: number,
  ahorrado: number
): GoalPrediction {

  const porcentaje = Math.min(
    100,
    Math.round((ahorrado / objetivo) * 100)
  );

  const restante = Math.max(
    0,
    objetivo - ahorrado
  );

  // Estimación sencilla:
  // suponemos un ahorro promedio mensual de $5,000.
  // Más adelante este valor se calculará con el historial real.

  const ahorroMensual = 5000;

  const meses = Math.max(
    0,
    Math.ceil(restante / ahorroMensual)
  );

  let mensaje = "";

  if (porcentaje >= 100) {

    mensaje =
      "🎉 ¡Felicidades! Ya alcanzaste esta meta.";

  } else if (porcentaje >= 75) {

    mensaje =
      `🔥 Estás muy cerca. Si mantienes este ritmo podrías lograrlo en aproximadamente ${meses} mes(es).`;

  } else if (porcentaje >= 50) {

    mensaje =
      `💪 Ya recorriste más de la mitad del camino. Te faltarían cerca de ${meses} mes(es).`;

  } else if (porcentaje >= 25) {

    mensaje =
      `📈 Vas avanzando bien. Mantén el hábito y podrías alcanzar la meta en ${meses} mes(es).`;

  } else {

    mensaje =
      `🌱 Todo gran objetivo comienza con el primer paso. A este ritmo necesitarías alrededor de ${meses} mes(es).`;

  }

  return {
    porcentaje,
    restante,
    meses,
    mensaje,
  };
}