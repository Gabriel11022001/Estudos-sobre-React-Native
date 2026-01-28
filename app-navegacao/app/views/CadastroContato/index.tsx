import Botao from "@/app/components/Botao";
import Campo from "@/app/components/Campo";
import TelaApp from "@/app/components/Tela";
import { cadastrarContato } from "@/app/service/cadastrarContato";
import { Contato } from "@/app/types/contato";
import { useState } from "react";
import { Alert, ScrollView, StyleSheet, Text } from "react-native";

// tela de cadastro de contatos
const CadastroContato = () => {

  const [ carregando, setCarregando ] = useState<boolean>(false);
  const [ nome, setNome ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ telefone, setTelefone ] = useState<string>("");
  const [ erroNome, setErroNome ] = useState<string>("");
  const [ erroEmail, setErroEmail ] = useState<string>("");
  const [ erroTelefone, setErroTelefone ] = useState<string>("");

  const limparCampos = (): void => {
    setNome("");
    setEmail("");
    setTelefone("");
    setErroEmail("");
    setErroNome("");
    setErroTelefone("");
  }

  // cadastrar os contatos
  const cadastrar = async () => {
    setCarregando(true);
    setErroNome("");
    setErroEmail("");
    setErroTelefone("");

    try {
      let ok: boolean = true;

      if (nome.trim().length == 0) {
        ok = false;
        setErroNome("Informe o nome");
      } else if (nome.trim().length < 3) {
        ok = false;
        setErroNome("O nome deve possuir no mínimo 3 caracteres");
      }

      if (email.trim().length == 0) {
        ok = false;
        setErroEmail("Informe o e-mail");
      }

      if (telefone.trim().length == 0) {
        ok = false;
        setErroTelefone("Informe o telefone");
      }

      if (ok) {
        // prosseguir com o cadastro
        const contatoCadastrar: Contato = {
          id: 1,
          email: email.trim(),
          nome: nome.trim(),
          telefone: telefone.trim()
        }

        await cadastrarContato(contatoCadastrar);

        limparCampos();

        apresentarAlerta("Contato cadastrado com sucesso!");
      }

    } catch (e) {      
      apresentarAlerta(`${ e }`, true);
    } finally {
      setCarregando(false);
    }

  }
  
  // apresentar um alerta para o usuário
  const apresentarAlerta = (mensagem: string, erro: boolean = false): void => {
    Alert.alert("Atenção!", mensagem.trim(), [
      {
        style: erro ? "destructive" : "default",
        onPress: () => {},
        text: "OK"        
      }
    ]);
  }

  const onDigitarNome = (nomeDigitado: string): void => {
    setErroNome("");
    setNome(nomeDigitado);

    if (nomeDigitado.trim().length == 0) {
      setErroNome("Informe o nome");
    } else if (nomeDigitado.trim().length < 3) {
      setErroNome("O nome deve possuir no mínimo 3 caracteres");
    }

  }

  const onDigitarEmail = (emailDigitado: string): void => {
    setErroEmail("");
    setEmail(emailDigitado);

    if (emailDigitado.trim().length === 0) {
      setErroEmail("Informe o e-mail");
    }

  }

  const onDigitarTelefone = (telefoneDigitado: string): void => {
    setErroTelefone("");
    setTelefone(telefoneDigitado);

    if (telefoneDigitado.trim().length == 0) {
      setErroTelefone("Informe o telefone");
    }

  }

  return <TelaApp>
    <ScrollView showsVerticalScrollIndicator={ false }>
      { /** título da tela de cadastro de contato */ }
      <Text style={ styles.titulo }>Cadastrar contato</Text>
      { /** campo para o usuário informar o nome do contato */ }
      <Campo
        label="Nome"
        placeholder="Digite o nome..."
        valor={ nome }
        erroCampo={ erroNome }
        onDigitar={ (nomeDigitado: string) => {
          onDigitarNome(nomeDigitado);
        } } />
      { /** campo para o usuário informar o e-mail do contato */ }
      <Campo
        label="E-mail"
        placeholder="Digite o e-mail..."
        erroCampo={ erroEmail }
        valor={ email }
        onDigitar={ (emailDigitado: string) => onDigitarEmail(emailDigitado) } />
      { /** campo para o usuário digitar o telefone */ }
      <Campo
        label="Telefone"
        placeholder="Digite o telefone..."
        erroCampo={ erroTelefone }
        valor={ telefone }
        onDigitar={ telefoneDigitado => onDigitarTelefone(telefoneDigitado) } />
      <Botao titulo="Salvar" onPressionar={ () => {
        cadastrar();
      } } />
    </ScrollView>
  </TelaApp>
}

const styles = StyleSheet.create({
  titulo: {
    color: "black",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: 900
  }
});

export default CadastroContato;