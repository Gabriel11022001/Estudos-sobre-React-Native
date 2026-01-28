import AsyncStorage from "@react-native-async-storage/async-storage";
import { Contato } from "../types/contato";

// listar os contatos
export async function listarContatos() {
  const contatos: Array<Contato> = [];

  const contatosArray = JSON.parse(await AsyncStorage.getItem("@contatos") ?? "[]");

  for (let i: number = 0; i < contatosArray?.length; i++) {
    const contatoJson = contatosArray[ i ];

    contatos.push({
      id: contatoJson.id,
      nome: contatoJson.nome,
      telefone: contatoJson.telefone,
      email: contatoJson.email
    });
  }

  return contatos;
}