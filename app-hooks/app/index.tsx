import { useEffect, useMemo, useState } from "react";
import { Alert, FlatList, ScrollView, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface Produto {

  id: number;
  nome: string;
  precoVenda: number;

}

const Index = () => {
  
  /**
   * useState -> nos permite alterar o estado de um dado durante a execução do app
   */
  const [ nome, setNome ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ produtos, setProdutos ] = useState<Array<Produto>>([]);

  const alterarNome = (nomeDigitado: string): void => {
    console.log("novo nome informado: " + nomeDigitado);

    setNome(nomeDigitado);
  }

  function alterarEmail(emailDigitado: string): void {
    console.log("E-mail digitado: " + emailDigitado);

    setEmail(emailDigitado);
  }

  /**
   * quando carrega a tela executa o useEffect, tbm quando
   * eu altero algum state também executa o mesmo
   */
  useEffect(() => {
    console.log("Informou o nome: " + nome);
    console.log("Informou o e-mail: " + email);

    setProdutos([]);

    const produtosAtuais: Array<Produto> = [ ...produtos ];

    let idUltimoProduto: number = 0;

    if (produtosAtuais.length === 0) {
      idUltimoProduto = 1;
    } else {
      const ultimoProduto: Produto = produtosAtuais[ produtosAtuais.length - 1 ] ?? null;
      idUltimoProduto = ultimoProduto.id + 1;
    }

    produtosAtuais.push({
      id: idUltimoProduto,
      nome: `Produto ${ idUltimoProduto }`,
      precoVenda: 12.90 + idUltimoProduto
    });

    setProdutos(produtosAtuais);
  }, [ nome, email ]);

  /**
   * quando eu invoco o useEffect sem passar
   * nenhum state para ficar observando, o useEffect
   * funciona como um didMount
   */
  useEffect(() => {
    apresentarMensagemBemVindo();
  }, []);

  const apresentarMensagemBemVindo = (): void => {
    Alert.alert("Olá", "Seja bem vindo a aplicação!", [ { style: "default", onPress: () => {}, text: "OK" } ]);
  }

  /**
   * useMemo -> executado quando um state for alterado,
   * e retorna algum valor para atribuir em uma variavel
   */
  const erroNome = useMemo(() => {

    if (nome.trim() === "") {

      return "Informe o nome!";
    }

    if (nome.length < 3) {

      return "O nome deve possuir no mínimo 3 caracteres!";
    }

    return "";
  }, [ nome ]);

  const erroEmail = useMemo(() => {

    if (email.trim() === "") {

      return "Informe o e-mail!";
    }

    return "";
  }, [ email ]);

  return (
    <SafeAreaView style={ { flex: 1, padding: 20, backgroundColor: "#fafafa" } }>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <Text>Nome</Text>
        <TextInput
          value={ nome }
          placeholder="Digite o nome..."
          onChangeText={ (nomeDigitado: string) => {
            // alterar o state "nome"
            alterarNome(nomeDigitado);
          } } />
        { erroNome != "" ? <Text>{ erroNome }</Text> : false }
        <Text>E-mail</Text>
        <TextInput
          value={ email }
          placeholder="Digite o e-mail..."
          onChangeText={ (emailDigitado: string) => {
            // alterar o state "email"
            alterarEmail(emailDigitado);
          } } />
        { erroEmail != "" ? <Text>{ erroEmail }</Text> : false }
        <Text style={ { color: "red", fontWeight: "bold", marginTop: 10 } }>{ nome }</Text>
        <Text style={ { color: "red", fontWeight: "bold" } }>{ email }</Text>
        <FlatList data={ produtos } keyExtractor={ prod => prod.id.toString() } renderItem={ ({ item }) => {
          
          return <Text>{ item.nome }</Text>
        } } />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;