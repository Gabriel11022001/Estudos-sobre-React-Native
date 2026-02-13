import Botao from "@/app/components/Botao";
import Campo, { TipoCampo } from "@/app/components/Campo";
import Loader from "@/app/components/Loader";
import Select from "@/app/components/Select";
import Tela from "@/app/components/Tela";
import buscarUsuarioPeloIdFirebase from "@/app/firebase/buscarUsuarioPeloId";
import { cadastrarUsuarioFirebase } from "@/app/firebase/salvarUsuario";
import { Usuario } from "@/app/types/usuario";
import validarEmail from "@/app/utils/validarEmail";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { Alert, ScrollView } from "react-native";

const CadastroUsuario = ({ navigation, route }: any) => {

  const [ usuarioEditarId, setUsuarioEditarId ] = useState<number>(0);
  const [ nome, setNome ] = useState<string>("");
  const [ email, setEmail ] = useState<string>("");
  const [ telefone, setTelefone ] = useState<string>("");
  const [ senha, setSenha ] = useState<string>("");
  const [ senhaConfirmar, setSenhaConfirmar ] = useState<string>("");
  const [ ativo, setAtivo ] = useState<boolean>(true);
  const [ erroNome, setErroNome ] = useState<string>("");
  const [ erroEmail, setErroEmail ] = useState<string>("");
  const [ erroTelefone, setErroTelefone ] = useState<string>("");
  const [ erroSenha, setErroSenha ] = useState<string>("");
  const [ erroSenhaConfirmar, setErroSenhaConfirmar ] = useState<string>("");
  const [ carregando, setCarregando ] = useState<boolean>(false);

  const digitarNome = (nomeDigitado: string): void => {
    setNome(nomeDigitado);
    setErroNome("");
  }

  const digitarEmail = (emailDigitado: string): void => {
    setEmail(emailDigitado);
    setErroEmail("");
  }

  const digitarTelefone = (telefoneDigitado: string): void => {
    setTelefone(telefoneDigitado);
    setErroTelefone("");
  }

  const digitarSenha = (senhaDigitada: string): void => {
    setSenha(senhaDigitada);
    setErroSenha("");
  }

  const digitarSenhaConfirmacao = (senhaConfirmarDigitada: string): void => {
    setSenhaConfirmar(senhaConfirmarDigitada);
    setErroSenhaConfirmar("");
  }

  const apresentarAlertaSucesso = (msgSucesso: string): void => {
    Alert.alert("Sucesso", msgSucesso, [
      {
        style: "default",
        onPress: () => {
          setUsuarioEditarId(0);
          setNome("");
          setEmail("");
          setTelefone("");
          setSenha("");
          setSenhaConfirmar("");
          setAtivo(true);
        },
        text: "OK"
      }
    ]);
  }
  
  // cadastrar o usuário
  const cadastrarUsuario = async (usuarioCadastrar: Usuario) => {
    setCarregando(true);

    await cadastrarUsuarioFirebase(usuarioCadastrar);

    setCarregando(false);

    apresentarAlertaSucesso("Usuário cadastrado com sucesso!");
  }

  // editar o usuário
  const editarUsuario = async (usuarioEditar: Usuario) => {
    
  }

  const apresentarAlertaErro = (erro: string): void => {
    Alert.alert("Atenção!", erro, [
      {
        style: "destructive",
        onPress: () => {},
        text: "OK"
      }
    ]);
  }

  // salvar usuário
  const salvar = async () => {

    try {

      if (nome.trim().length == 0) {
        apresentarAlertaErro("Informe o nome do usuário!");

        return;
      }

      if (email.trim().length == 0) {
        apresentarAlertaErro("Informe o e-mail do usuário!");

        return;
      }

      if (!validarEmail(email.trim())) {
        apresentarAlertaErro("E-mail inválido!");

        return;
      }

      if (telefone.trim().length == 0) {
        apresentarAlertaErro("Informe o telefone dob usuário!");

        return;
      }

      if (senha.trim().length == 0) {
        apresentarAlertaErro("Informe a senha do usuário!");

        return;
      }
      
      if (senhaConfirmar.trim().length == 0) {
        apresentarAlertaErro("Confirme a senha!");

        return;
      }

      if (senha.trim() != senhaConfirmar.trim()) {
        apresentarAlertaErro("A senha e a senha de confirmação estão diferentes!");

        return;
      }

      const usuario: Usuario = {
        nome: nome.trim(),
        senha: senha.trim(),
        email: email.trim(),
        telefone: telefone.trim(),
        ativo: ativo
      }

      if (usuarioEditarId != 0) {
        // editar o usuário
        usuario.id = usuarioEditarId;
        editarUsuario(usuario);
      } else {
        // cadastrar o usuário
        cadastrarUsuario(usuario);
      }

    } catch (e) {
      console.error(`Erro ao tentar-se salvar o usuário: ${ e }`);

      setCarregando(false);

      apresentarAlertaErro("Erro ao tentar-se salvar o usuário, tente novamente!");
    }

  }

  useFocusEffect(useCallback(() => {

    if (route.params) {

      if (route.params.idUsuarioEditar) {
        setUsuarioEditarId(route.params.idUsuarioEditar);
      }

    }

  }, []));

  const preencherCamposDadosUsuario = (usuario: Usuario): void => {

  }

  // buscar os dados do usuário pelo id
  const buscarUsuario = async () => {
    setCarregando(true);

    try {
      console.log(`Consultar dados do usuário de id: ${ usuarioEditarId }`);

      const resp = await buscarUsuarioPeloIdFirebase(usuarioEditarId);

      if (resp.exists()) {
        const usuario = resp.data();
        
        console.log(usuario);

        setNome(usuario.nome);
        setTelefone(usuario.telefone);
        setEmail(usuario.email);
        setSenha(usuario.senha);
        setSenhaConfirmar(usuario.senha);
        setAtivo(usuario.ativo);
      } else {
        console.error("Não foi encontrado o usuário com o id informado!");
      }

    } catch (e) {
      console.error(`Erro ao tentar-se consultar o usuário: ${ e }`);

      apresentarAlertaErro("Erro ao tentar-se consultar o usuário, retorne e tente novamente!");
    } finally {
      setCarregando(false);
    }

  }

  useEffect(() => {
  
    if (usuarioEditarId > 0) {
      // buscar os dados do usuário e preencher os campos
      buscarUsuario();
    }
  
  }, [ usuarioEditarId ]);

  return <Tela>
    <Loader carregando={ carregando } />
    <ScrollView showsVerticalScrollIndicator={ false }>
      { /** campo para o nome do usuário */ }
      <Campo
        valor={ nome }
        placeholder="Digite o nome do usuário..."
        erro={ erroNome }
        habilitado={ true }
        label="Nome"
        tipoCampo={ TipoCampo.padrao }
        limiteCaracteres={ 255 }
        alterarValorCampo={ digitarNome } />
      { /** campo para o e-mail do usuário */ }
      <Campo
        valor={ email }
        placeholder="Digite o e-mail do usuário..."
        erro={ erroEmail }
        habilitado={ true }
        label="E-mail"
        tipoCampo={ TipoCampo.email }
        limiteCaracteres={ 255 }
        alterarValorCampo={ digitarEmail } />
      { /** campo para o telefone do usuário */ }
      <Campo
        valor={ telefone }
        placeholder="Digite o telefone do usuário..."
        erro={ erroTelefone }
        habilitado={ true }
        label="Telefone"
        tipoCampo={ TipoCampo.telefone }
        limiteCaracteres={ 255 }
        alterarValorCampo={ digitarTelefone } />
      { /** campo para a senha do usuário */ }
      <Campo
        valor={ senha }
        placeholder="Digite a senha do usuário..."
        erro={ erroSenha }
        habilitado={ true }
        label="Senha"
        tipoCampo={ TipoCampo.senha }
        limiteCaracteres={ 6 }
        alterarValorCampo={ digitarSenha } />
      { /** campo para a senha de confirmação */ }
      <Campo
        valor={ senhaConfirmar }
        placeholder="Digite a senha de confirmação do usuário..."
        erro={ erroSenhaConfirmar }
        habilitado={ true }
        label="Confirmar senha"
        tipoCampo={ TipoCampo.senha }
        limiteCaracteres={ 6 }
        alterarValorCampo={ digitarSenhaConfirmacao } />
      { /** select para informar o status do usuário */ }
      <Select
        opcoes={ [ 
          { key: "ativo", label: "Ativo", valor: "Ativo" },
          { key: "inativo", label: "Inativo", valor: "Inativo" }
        ] }
        label="Status"
        opcaoSelecionada={
          ativo ? "ativo" : "inativo"
        }
        selecionarOpcao={ (opcaoSelecionada: string) => {
          console.log("selecionou " + opcaoSelecionada);

          if (opcaoSelecionada === "Ativo") {
            setAtivo(true);
          } else {
            setAtivo(false);
          }

        } } />
      { /** salvar usuário */ }
      <Botao titulo="Salvar" carregando={ carregando } pressionar={ salvar } />
    </ScrollView>
  </Tela>
}

export default CadastroUsuario;