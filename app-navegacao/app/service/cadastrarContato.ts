import AsyncStorage from "@react-native-async-storage/async-storage";
import { Contato } from "../types/contato";
import { buscarContatoPeloEmail } from "./buscarContatoPeloEmail";

// cadastrar o contato
export const cadastrarContato = async (contatoCadastrar: Contato) => {
  const { id, nome, telefone, email } = { ...contatoCadastrar };

  console.log(`id: ${ id }`);
  console.log(`nome: ${ nome }`);
  console.log(`telefone: ${ telefone }`);
  console.log(`e-mail: ${ email }`);

  const contatoCadastradoMesmoEmail: Contato | null = await buscarContatoPeloEmail(email);

  if (contatoCadastradoMesmoEmail != null) {
    console.log("Já existe outro contato cadastrado com o mesmo e-mail!");

    throw Error("Já existe outro contato cadastrado com o mesmo e-mail!");
  }

  const contatosCadastrados = await AsyncStorage.getItem("@contatos");
  const contatosCadastradosArray = JSON.parse(contatosCadastrados ?? "[]");

  console.log(contatosCadastradosArray);

  if (contatosCadastradosArray.length == 0) {
    console.log("Nenhum contato cadastrado.");

    contatoCadastrar.id = 1;
  } else {
    const ultimoContato = contatosCadastradosArray[ contatosCadastradosArray.length - 1 ];

    contatoCadastrar.id = ultimoContato.id + 1;
  }

  contatosCadastradosArray.push(contatoCadastrar);

  await AsyncStorage.setItem("@contatos", JSON.stringify(contatosCadastradosArray));

  console.log("Contato cadastrado com sucesso...");
}