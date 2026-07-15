import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import app from "./firebase";
import { crearUsuarioSiNoExiste } from "./firestore";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export async function loginGoogle() {
  const result = await signInWithPopup(auth, provider);

  await crearUsuarioSiNoExiste(result.user);

  return result.user;
}

export async function logoutGoogle() {
  await signOut(auth);
}

export { auth };