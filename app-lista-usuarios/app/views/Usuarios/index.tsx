import ListaUsuarios from "@/app/components/ListaUsuarios";
import Loader from "@/app/components/Loader";
import Tela from "@/app/components/Tela";
import buscarUsuariosFirebase from "@/app/firebase/buscarUsuarios";
import { Usuario } from "@/app/types/usuario";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

const Usuarios = ({ navigation }: any) => {

  const [ usuarios, setUsuarios ] = useState<Usuario[]>([]);
  const [ carregando, setCarregando ] = useState<boolean>(false);

  // listar usuários no firebase
  const listarUsuarios = async () => {
    setCarregando(true);
    setUsuarios([]);

    try {
      const resp = await buscarUsuariosFirebase();

      if (!resp.empty) {
        const usuariosLista: Array<Usuario> = [];

        resp.forEach((usuario) => {
          usuariosLista.push({
            id: Number.parseInt(usuario.id),
            nome: usuario.data().nome,
            email: usuario.data().email,
            telefone: usuario.data().telefone,
            senha: usuario.data().senha,
            ativo: usuario.data().ativo
          });
        });

        setUsuarios(usuariosLista);

        console.log("Usuários listados com sucesso!");
      }

    } catch (e) {
      console.error("Erro ao tentar-se listar os usuários: " + e);
    } finally {
      setCarregando(false);
    }

  }

  useFocusEffect(useCallback(() => {
    listarUsuarios();
  }, []));

  // deletar usuário
  const deletarUsuario = async (idUsuarioDeletar: number) => {
    setCarregando(true);

    try {
      console.log(carregando);
    } catch (e) {
      console.error("Erro ao tentar-se deletar o usuário: " + e);
    } finally {
      setCarregando(false);
    }

  }

  const apresentarDialogDeletarUsuario = (idUsuarioDeletar: number) => {
    Alert.alert("Atenção!", "Deseja deletar o usuário?", [
      {
        style: "destructive",
        text: "Sim",
        onPress: () => {
          deletarUsuario(idUsuarioDeletar);
        }
      },
      {
        style: "cancel",
        text: "Não",
        onPress: () => null
      }
    ]);
  }

  enum TipoAlerta {

    erro,
    sucesso

  }

  function apresentarAlerta(tipoAlerta: TipoAlerta, msg: string, onRealizarOperacao: () => void): void {

  }

  return <Tela>
    <Loader carregando={ carregando } />
    { /** lista de usuários cadastrados */ }
    <ListaUsuarios
      usuarios={ usuarios }
      visualizarUsuario={ (idUsuario: number) => {
        console.log("Visualizar o usuário com o id: " + idUsuario);

        // redirecionar o usuário para a tela parea visualizar os dados do usuário
        navigation.navigate("cadastro_usuario", { idUsuarioEditar: idUsuario });
      } }
      deletarUsuario={ (idUsuarioDeletar: number) => {
        // deletar o usuário no firebase
        apresentarDialogDeletarUsuario(idUsuarioDeletar);
      } } />
  </Tela>
}

export default Usuarios;