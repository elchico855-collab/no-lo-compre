export interface AIProduct {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  marca: string;
}

export interface AIAdvice {
  score: number;
  riesgo: "BAJO" | "MEDIO" | "ALTO";
  recomendacion: string;
  mensaje: string;
}