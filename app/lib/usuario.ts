import {
  doc,
  updateDoc,
  increment,
  getDoc,
  arrayUnion,
} from "firebase/firestore";

import { db } from "./firebase";
export async function sumarCompra(uid: string, precio: number) {
  const ref = doc(db, "usuarios", uid);

  await updateDoc(ref, {
    dinero: increment(precio),
    compras: increment(1),
  });
}

export async function obtenerUsuario(uid: string) {
  const ref = doc(db, "usuarios", uid);

  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  return snapshot.data();
  
}
export async function guardarHistorial(
  uid: string,
  compra: any
) {
  const ref = doc(db, "usuarios", uid);

  await updateDoc(ref, {
    historial: arrayUnion(compra),
  });
}
export async function guardarFavorito(
  uid: string,
  favorito: any
) {
  const ref = doc(db, "usuarios", uid);

  await updateDoc(ref, {
    favoritos: arrayUnion(favorito),
  });
}