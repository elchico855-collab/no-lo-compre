import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD2yeigGE5DK678rEoDCnib7uMmrDTM5vY",
  authDomain: "nolocompremx.firebaseapp.com",
  projectId: "nolocompremx",
  storageBucket: "nolocompremx.firebasestorage.app",
  messagingSenderId: "223739253028",
  appId: "1:223739253028:web:6fb98c6ee4e793ed85a3b1",
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const db = getFirestore(app);

export default app;