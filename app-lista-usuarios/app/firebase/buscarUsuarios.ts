import { collection, getDocs } from "firebase/firestore";
import { db } from "./configurar";

// buscar todos os usuários cadastrados na base
const buscarUsuariosFirebase = async () => {
  const docref = collection(db, "usuarios");
  const resp = await getDocs(docref);

  return resp;
}

export default buscarUsuariosFirebase;