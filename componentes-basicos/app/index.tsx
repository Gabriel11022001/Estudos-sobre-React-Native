import { useEffect, useState } from "react";
import { Alert, Button, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ApresentaFoto from "./components/ApresentaFoto";
import Campo from "./components/Campo";
import ListaProdutos from "./components/ListaProdutos";
import MultiSeletor, { OpcaoSeletor } from "./components/MultiSeletor";

interface UsuarioLogin {

  email: string;
  senha: string;

  login: (emailValidar: string, senhaValidar: string) => boolean;

}

export type Produto = {

  id: number;
  nome: string;
  precoVenda: number;

}

// todo componente em react native é uma função que retorna um jsx
const Index = () => {
  
  const nomeCompleto: string = "Gabriel Rodrigues dos Santos";
  const foto: string = "https://toppng.com/uploads/preview/foto-de-coracao-11550724378b8vtifi0pq.png";

  // states -> dados que podem ser alterados mediante eventos
  const [ email, setEmail ] = useState<string>("");
  const [ senha, setSenha ] = useState<string>("");
  const [ erroEmail, setErroEmail ] = useState<string>("");
  const [ erroSenha, setErroSenha ] = useState<string>("");
  const [ logado, setLogado ] = useState<boolean>(false);
  const [ erroTelefone, setErroTelefone ] = useState<string>("");
  const [ telefone, setTelefone ] = useState<string>("");

  const usuarioLogin: UsuarioLogin = {
    email: "teste@teste.com",
    senha: "123456",
    login: function (emailValidar: string, senhaValidar: string): boolean {

      if (emailValidar.trim() === this.email && senhaValidar.trim() === this.senha) {

        return true;
      }

      return false;
    }
  }

  const [ produtos, setProdutos ] = useState<Array<Produto>>([]);
  const [ opcaoPizzaSelecionada, setOpcaoPizzaSelecionada ] = useState<OpcaoSeletor | null>(null);

  const handleDigitarEmail = (emailDigitado: string): void => {
    setEmail(emailDigitado);
    setErroEmail("");

    if (emailDigitado.trim() === "") {
      setErroEmail("Informe o e-mail!");
    }

  }

  const handleDigitarSenha = (senhaDigitada: string): void => {
    setSenha(senhaDigitada);
    setErroSenha("");

    if (senha.trim() === "") {
      setErroSenha("Informe a senha!");
    } else if (senha.trim().length < 6) {
      setErroSenha("A senha deve possuir no mínimo 6 caracteres!");
    }

  }

  const apresentarAlerta = (mensagem: string): void => {
    Alert.alert("Atenção!", mensagem.trim(), [
      {
        style: "default",
        onPress: () => {},
        text: "OK"
      }
    ]);
  }

  const entrar = (): void => {
    setLogado(false);

    try {

      if (usuarioLogin.login(email, senha)) {
        setLogado(true);
        apresentarAlerta("Login efetuado com sucesso!");
      } else {
        apresentarAlerta("E-mail ou senha inválidos!");
      }

    } catch (e) {
      console.error("Erro ao tentar-se entrar: " + e);

      apresentarAlerta("Erro ao tentar-se acessar o aplicativo!");
    }

  }

  const handleDigitarTelefone = (telefoneDigitado: string): void => {
    setErroTelefone("");
    setTelefone(telefoneDigitado);

    if (telefoneDigitado.trim() === "") {
      setErroTelefone("Informe o telefone!");
    }

  }

  const gerarProdutos = (): Array<Produto> => {
    const produtosGerados: Array<Produto> = [];

    for (let i: number = 0; i < 10; i++) {
      produtosGerados.push({
        id: i + 1,
        nome: `Produto de teste ${ i + 1 }`,
        precoVenda: 12.99 + i
      });
    }

    return produtosGerados;
  }

  const visualizarDetalhesProduto = ({ id, nome, precoVenda}: Produto): void => {
    console.log(id);
    console.log(nome);
    console.log(precoVenda);
  }

  useEffect(() => {
    setProdutos(gerarProdutos());
  }, []);

  return (
    <SafeAreaView style={ { flex: 1, padding: 20 } }>
      { /** componente para apicar um scroll */ }
      <ScrollView 
        showsVerticalScrollIndicator={ false } // não vai mostrar a barrinha vertical de scrolagem
      >
        { /** o Text é o componente que representa um texto */ }
        <Text style={ { // a propertie style serve para estilizar um componente
          color: "red", // cor do texto
          fontSize: 40, // tamanho da fonte
          fontWeight: "bold", // peso da fonte
          marginTop: 30, // margem do topo
          marginBottom: 20 // margem da parte de baixo
        } }>Olá Mundo!</Text>
        <Text>Seja bem vindo { nomeCompleto.toUpperCase() }</Text>
        { /** componente que representa uma imagem */ }
        <ApresentaFoto foto={ foto } texto="Olá, meu nome é Gabriel Rodrigues dos Santos" />
        { /** componente para digitar um dado em formato de texto */ }
        <TextInput
          style={ styles.campo }
          value={ email }
          placeholder="Digite o e-mail..."
          inputMode="email"
          keyboardType="email-address"
          onChangeText={ (emailDigitado: string) => {
            // quando o usuário digitar no campo de e-mail, aciona esse evento
            handleDigitarEmail(emailDigitado);
          } } />
        { erroEmail != "" ? <Text>{ erroEmail }</Text> : false }
        <TextInput
          style={ styles.campo }
          value={ senha }
          placeholder="Digite a senha..."
          inputMode="numeric"
          secureTextEntry={ true }
          onChangeText={ (senhaDigitada: string) => handleDigitarSenha(senhaDigitada) } />
        { erroSenha != "" ? <Text>{ erroSenha }</Text> : false }
        { /**
         * botão padrão utilizado no react native, mas o mais correto
         * mesmo é criar os botões utilizando o componente TouchableOpacity */ }
        <Button title="Entrar" onPress={ () => {
          // quando o usuário clicar no botão vai invocar esse evento
          entrar();
        } } />
        { logado && <Campo
          label="Telefone"
          placeholder="Digite um telefone..."
          valor={ telefone }
          erroCampo={ erroTelefone }
          onAlterarValor={ (telefoneDigitado: string) => {
            console.log(telefoneDigitado);
            handleDigitarTelefone(telefoneDigitado);
          } } /> }
        {/**<FlatList
          data={ produtos } // dados do flat list
          renderItem={ ({ item }) => {
            const { id, nome, precoVenda } = { ...item };

            return <TouchableOpacity
              style={ styles.produtoItem }
              onPress={ () => visualizarDetalhesProduto(item) }>
              <Text>{ id }</Text>
              <Text>{ nome }</Text>
              <Text>{ `R$${ precoVenda.toFixed(2) }` }</Text>
            </TouchableOpacity>
          } }
          keyExtractor={ produto => produto.id.toString() } />*/}
        <ListaProdutos produtos={ produtos } visualizar={ (produto: Produto) => {
          visualizarDetalhesProduto(produto);
        } } />
        <MultiSeletor
          dados={ [
            { label: "Peperoni", valor: "peperoni" },
            { label: "Catubreza", valor: "Catubreza" },
            { label: "Calabresa", valor: "Calabresa" }
          ] }
          opcaoSelecionada={ opcaoPizzaSelecionada ?? { label: "", valor: "" } }
          selecionarOpcao={ (opcao: OpcaoSeletor) => {
            setOpcaoPizzaSelecionada(opcao);
          } } />
      </ScrollView>
    </SafeAreaView>
  );
}

/**
 * ao aplicar um grupo de estilos, eu posso reutilizar
 * esses estilos de forma que eu não preciso ficar
 * aplicando os mesmos estilos para diferentes componentes um por um
 */
const styles = StyleSheet.create({

  campo: {
    width: "100%",
    padding: 20,
    height: 70,
    backgroundColor: "#fafafa",
    fontSize: 16,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    color: "red",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "gray"
  },
  produtoItem: {
    width: "100%",
    backgroundColor: "#fafafa",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 2
  }

});

export default Index;