type UserData = {
  dinero: number;
  compras: number;
  precioProducto?: number;
};

export function analizarUsuario(usuario: UserData) {
  let mensaje = "";

  if (usuario.compras >= 50) {
    mensaje =
      "🔥 Has desarrollado un excelente hábito financiero.";
  } else if (usuario.compras >= 20) {
    mensaje =
      "💪 Ya tienes una disciplina financiera muy sólida.";
  } else if (usuario.compras >= 5) {
    mensaje =
      "📈 Vas formando un buen hábito de ahorro.";
  } else {
    mensaje =
      "🌱 Cada compra evitada fortalece tu futuro financiero.";
  }

  const porcentaje =
    usuario.dinero > 0 && usuario.precioProducto
      ? Math.round(
          (usuario.precioProducto / usuario.dinero) * 100
        )
      : 0;

  return {
    mensaje,
    porcentaje,
  };
}