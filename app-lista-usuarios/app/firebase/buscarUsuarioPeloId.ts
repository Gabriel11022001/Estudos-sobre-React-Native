import { doc, getDoc } from "firebase/firestore";
import { db } from "./configurar";

export default async function buscarUsuarioPeloIdFirebase(id: number) {

  return await getDoc(doc(db, "usuarios", id.toString()));
}