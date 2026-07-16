import type { AIAdvice, AIProduct } from "./types";

export function analizarProducto(
  producto: AIProduct
): AIAdvice {

  let score = 5;

  // Riesgo por precio
  if (producto.precio >= 30000) {
    score += 4;
  } else if (producto.precio >= 20000) {
    score += 3;
  } else if (producto.precio >= 10000) {
    score += 2;
  } else {
    score += 1;
  }

  // Riesgo por categoría
  switch (producto.categoria.toLowerCase()) {

    case "celular":
      score += 2;
      break;

    case "consola":
      score += 2;
      break;

    case "laptop":
      score += 1;
      break;

    case "television":
      score += 1;
      break;

    default:
      score += 0;
      break;
  }

  // Limitar score
  if (score > 10) score = 10;

  let riesgo: "BAJO" | "MEDIO" | "ALTO";
  let recomendacion = "";
  let mensaje = "";

  if (score >= 8) {

    riesgo = "ALTO";

    recomendacion = "ESPERAR";

    mensaje =
      "Este producto representa un gasto importante. Si puedes esperar unos meses probablemente tomarás una mejor decisión financiera.";

  } else if (score >= 5) {

    riesgo = "MEDIO";

    recomendacion = "ANALIZAR";

    mensaje =
      "Antes de comprar, compara precios y revisa si realmente lo necesitas.";

  } else {

    riesgo = "BAJO";

    recomendacion = "BUEN MOMENTO";

    mensaje =
      "El nivel de riesgo es bajo. Si entra en tu presupuesto podría ser una compra razonable.";

  }

  return {

    score,

    riesgo,

    recomendacion,

    mensaje,

  };

}