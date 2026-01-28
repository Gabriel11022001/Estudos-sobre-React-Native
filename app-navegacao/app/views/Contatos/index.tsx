import ContatoItem from "@/app/components/ContatoItem";
import DialogDeletarContato from "@/app/components/DialogDeletarContato";
import DialogVisualizarContato from "@/app/components/DialogVisualizarContato";
import TelaApp from "@/app/components/Tela";
import { listarContatos } from "@/app/service/listarContatos";
import { Contato } from "@/app/types/contato";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Contatos = () => {
  
  const [ carregando, setCarregando ] = useState<boolean>(false);
  const [ contatos, setContatos ] = useState<Array<Contato>>([]);
  const [ contatoVisualizar, setContatoVisualizar ] = useState<Contato | null>(null);
  const [ contatoDeletar, setContatoDeletar ] = useState<Contato | null>(null);

  // listar contatos
  const buscarContatos = async () => {
    setCarregando(true);

    try {
      const contatosLista = await listarContatos();

      console.log(contatosLista);

      setCarregando(false);

      if (contatosLista?.length == 0) {
        setContatos([]);
      } else {
        setContatos(contatosLista);
      }

    } catch (e) {
      setCarregando(false);
    }

  }

  useFocusEffect(useCallback(() => {
    buscarContatos();
  }, []));

  // visualizar dados do contato
  const visualizarContato = (contatoVisualizar: Contato) => {
    console.log(contatoVisualizar);

    setContatoVisualizar(contatoVisualizar);
  }

  const apresentarDialogDeletarContato = (contatoDeletar: Contato) => {
    setContatoDeletar(contatoDeletar);
  }

  // deletar contato
  const confirmarDeletarContato = async () => {
    setCarregando(true);

    try {
      
    } catch (e) {
      setCarregando(false);
    }

  }

  return <TelaApp>
    { /** dialog para visualizar os dados do contato */ }
    <DialogVisualizarContato
      apresentar={ contatoVisualizar != null }
      contatoVisualizar={ contatoVisualizar ?? undefined }
      fechar={ () => {
        setContatoVisualizar(null);
      } } />
    { /** dialog para confirmar/cancelar deletar o contato */ }
    <DialogDeletarContato
      confirmar={ () => {
        confirmarDeletarContato();
      } }
      fechar={ () => {
        setContatoDeletar(null);
      } }
      apresentar={ contatoDeletar != null } />
    { contatos.length === 0 ? <View style={ styles.naoExistemContatos }>
      <Text style={ styles.textoNaoExistemContatos }>Não existem contatos cadastrados...</Text>
    </View> : <FlatList
    data={ contatos }
    renderItem={ ({ item }) => {

      return <ContatoItem
        contato={ item }
        visualizarContato={ () => {
          // visualizar dados do contato
          visualizarContato(item);
        } }
        deletarContato={ () => {
          // deletar o contato
          apresentarDialogDeletarContato(item);
        } } />
    } }
    keyExtractor={ contato => contato.id.toString() } /> }
  </TelaApp>
}

const styles = StyleSheet.create({
  naoExistemContatos: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textoNaoExistemContatos: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  }
});

export default Contatos;