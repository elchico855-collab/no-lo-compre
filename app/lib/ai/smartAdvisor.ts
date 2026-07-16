export type SmartAdvisorInput = {
  dinero: number;
  compras: number;
  precio: number;
  categoria: string;
  marca: string;
};

export type SmartAdvisorResult = {
  score: number;
  decision: "COMPRAR" | "ESPERAR";
  probabilidad: number;
  impacto: "BAJO" | "MEDIO" | "ALTO";
  motivos: string[];
};

export function smartAdvisor(
  data: SmartAdvisorInput
): SmartAdvisorResult {

  let score = 100;

  const motivos: string[] = [];

  // Precio respecto al ahorro

  if (data.precio > data.dinero) {


    score -= 35;

    motivos.push(
      "El producto cuesta más que tu dinero ahorrado."
    );

  }

  else if (data.precio > data.dinero * 0.6) {

    score -= 20;

    motivos.push(
      "Representa una parte importante de tu ahorro."
    );

  }

  // Historial del usuario

  if (data.compras < 5) {

    score -= 10;

    motivos.push(
      "Aún estás formando un hábito de ahorro."
    );

  }

  else {

    score += 5;

    motivos.push(
      "Tu historial demuestra buenas decisiones."
    );

  }
    // Categorías

  if (
    data.categoria.toLowerCase() === "tecnología" ||
    data.categoria.toLowerCase() === "general"
  ) {
    score -= 10;

    motivos.push(
      "Los productos tecnológicos suelen bajar de precio con el tiempo."
    );
  }

  // Marcas

  if (
    data.marca.toLowerCase().includes("apple")
  ) {
    score -= 8;

    motivos.push(
      "Los productos Apple mantienen un precio alto durante más tiempo."
    );
  }

  // Limitar score

  if (score < 0) score = 0;
  if (score > 100) score = 100;

  const decision =
    score >= 70 ? "COMPRAR" : "ESPERAR";

  const impacto =
    score >= 70
      ? "BAJO"
      : score >= 40
      ? "MEDIO"
      : "ALTO";

  const probabilidad = score;
    return {
    score,

    decision,

    probabilidad,

    impacto,

    motivos,
  };

}