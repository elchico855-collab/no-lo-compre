import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function crearUsuarioSiNoExiste(user: any) {
  if (!user) return;

  const ref = doc(db, "usuarios", user.uid);

  const snapshot = await getDoc(ref);

  if (snapshot.exists()) {
    return;
  }

  await setDoc(ref, {
    uid: user.uid,
    nombre: user.displayName ?? "",
    email: user.email ?? "",
    foto: user.photoURL ?? "",

    dinero: 0,
    compras: 0,

    favoritos: [],

    historial: [],

    logros: [],

    creado: new Date(),
  });

  console.log("✅ Usuario creado en Firestore");
}