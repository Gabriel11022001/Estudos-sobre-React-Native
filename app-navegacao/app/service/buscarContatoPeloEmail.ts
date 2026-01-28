import AsyncStorage from "@react-native-async-storage/async-storage";
import { Contato } from "../types/contato";

// buscar contato pelo e-mail
export const buscarContatoPeloEmail = async (email: string) => {
  const contatos = JSON.parse(await AsyncStorage.getItem("@contatos") ?? "[]");

  if (contatos.length == 0) {

    return null;
  }

  let contato: Contato | null = null;

  contatos.forEach((contatoValidar: object) => {

    if (contatoValidar.email === email) {
      contato = {
        id: contatoValidar.id,
        nome: contatoValidar.nome,
        email: contatoValidar.email,
        telefone: contatoValidar.telefone
      };
    }

  });

  return contato;
}