import { doc, setDoc } from "firebase/firestore";
import { Usuario } from "../types/usuario";
import buscarUsuariosFirebase from "./buscarUsuarios";
import { db } from "./configurar";

// cadastrar o usuário no firebase
export const cadastrarUsuarioFirebase = async (usuarioCadastrar: Usuario) => {
  const respUsuariosCadastrados = await buscarUsuariosFirebase();
  let idUsuario: number = 0;
  
  if (respUsuariosCadastrados.empty) {
    idUsuario = 1;
  } else {

    respUsuariosCadastrados.forEach((usuarioAtual) => {
      idUsuario = parseInt(usuarioAtual.id);
    });

    idUsuario++;
  }

  await setDoc(doc(db, "usuarios", idUsuario.toString()), {
    nome: usuarioCadastrar.nome,
    email: usuarioCadastrar.email,
    telefone: usuarioCadastrar.telefone,
    senha: usuarioCadastrar.senha,
    ativo: usuarioCadastrar.ativo
  });
}

// editar o usuário no firebase
export const editarUsuarioFirebase = async (usuarioEditar: Usuario) => {

}