import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQUxPSShbn2il4dPmumOqkNr0k1iIUQIM",
  authDomain: "lista-usuarios-react-native.firebaseapp.com",
  projectId: "lista-usuarios-react-native",
  storageBucket: "lista-usuarios-react-native.firebasestorage.app",
  messagingSenderId: "248559091232",
  appId: "1:248559091232:web:de514db7265af287a04645"
};

const app = initializeApp(firebaseConfig);

// configurar conexão com o banco de dados 
const db = getFirestore(app);

export { db };

