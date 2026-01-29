import Botao from "@/app/components/Botao";
import Campo, { TipoCampo } from "@/app/components/Campo";
import Tela from "@/app/components/Tela";
import { Usuario } from "@/app/types/usuario";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ScrollView, Text } from "react-native";
import styles from "./styles";

// tela de login
const Login = ({ navigation }: any) => {

  const [ carregando, setCarregando ] = useState<boolean>(false);
  const [ email, setEmail ] = useState<string>("");
  const [ senha, setSenha ] = useState<string>("");
  const [ erroEmail, setErroEmail ] = useState<string>("");
  const [ erroSenha, setErroSenha ] = useState<string>("");

  const onAlterarEmail = (emailDigitado: string): void => {
    setEmail(emailDigitado);
    setErroEmail("");
  }

  const onAlterarSenha = (senhaDigitada: string): void => {
    setSenha(senhaDigitada);
    setErroSenha("");
  }

  // entrar no aplicativo
  const entrar = async () => {
    setCarregando(true);

    try {
      const usuarioLogin: Usuario = {
        email: email.trim(),
        senha: senha.trim()
      }

      // efetivar o login

      // salvar os dados do usuário logado no AsyncStorage

      setCarregando(false);

      // redirecionar o usuário para a tela home
      navigation.navigate("home");
    } catch (e) {
      setCarregando(false); 
      apresentarAlertaErro("Erro ao tentar-se efetuar o login!");
    }

  }

  const salvarDadosUsuarioLogadoAsyncStorage = async ({ id, nome }: Usuario) => {

  }

  /**
   * se existir um usuário logado, realizar o login dele novamente
   */
  const validarExisteUsuarioLogado = async () => {
    
  }

  const apresentarAlertaErro = (erro: string): void => {

  }

  useFocusEffect(useCallback(() => {
    validarExisteUsuarioLogado();
  }, []));

  return (
    <Tela>
      <ScrollView showsVerticalScrollIndicator={ false }>
        { /** título da tela de login */ }
        <Text style={ styles.tituloTelaLogin }>Seja bem vindo</Text>
        { /** campo para o usuário informar o e-mail */ }
        <Campo
          valor={ email }
          placeholder="Digite o e-mail..."
          erro={ erroEmail }
          label="E-mail"
          limiteCaracteres={ 255 }
          tipoCampo={ TipoCampo.email }
          alterarValorCampo={ onAlterarEmail }
          habilitado={ !carregando } />
        { /** campo para o usuário informar a senha */ }
        <Campo 
          valor={ senha }
          placeholder="Digite a senha..."
          erro={ erroSenha }
          label="Senha"
          limiteCaracteres={ 6 }
          tipoCampo={ TipoCampo.senha }
          alterarValorCampo={ onAlterarSenha }
          habilitado={ !carregando } />
        { /** botão para realizar o login */ }
        <Botao titulo="Entrar" carregando={ carregando } pressionar={ () => {
          entrar();
        } } />
      </ScrollView>
    </Tela>
  );
}

export default Login;