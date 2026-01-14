import { useEffect, useState } from "react";
import { Alert, FlatList, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import listarFilmesService from "./api/listarFilmes";
import FilmeItem from "./components/FilmeItem";
import Loader from "./components/Loader";
import ModalDetalhes from "./components/ModalDetalhes";
import { Filme } from "./types/filme";

const Index = () => {

  const [ filmes, setFilmes ] = useState<Array<Filme>>([]);
  const [ carregandoFilmes, setCarregandoFilmes ] = useState<boolean>(false);
  const [ filmeVisualizar, setFilmeVisualizar ] = useState<Filme | null>(null);
  const [ abrirModalVisualizarFilme, setAbrirModalVisualizarFilme ] = useState<boolean>(false);

  const apresentarAlertaErro = (mensagem: string): void => {
    Alert.alert("Atenção!", mensagem, [
      {
        style: "destructive",
        text: "OK",
        onPress: () => {} 
      }
    ]);
  }

  // listar os filmes
  const listarFilmes = async () => {
    setCarregandoFilmes(true);
    setFilmes([]);

    try {
      const resp = await listarFilmesService(); 
      
      if (resp.status == 200) {
        const data = resp.data;

        if (data.length == 0) {
          apresentarAlertaErro("Não existem filmes cadastrados!");
        } else {
          const listaFilmes: Filme[] = data.map((filmeData: object) => {
          
            return {
              id: filmeData.id,
              nome: filmeData.nome,
              foto: filmeData.foto,
              sinopse: filmeData.sinopse
            };
          });

          setFilmes(listaFilmes);

          console.log("Filmes listados com sucesso...");
        }

      } else {
        apresentarAlertaErro("Erro ao tentar-se listar os filmes!");
      }
      
    } catch (e) {
      console.error("Erro ao tentar-se listar os filmes: " + e);

      apresentarAlertaErro("Erro ao tentar-se listar os filmes: " + e);
    } finally {
      setCarregandoFilmes(false);
    }

  }

  useEffect(() => {
    listarFilmes();
  }, []);

  // abrir uma modal para visualizar os detalhes do filme
  const visualizarFilme = (filmeVisualizar: Filme): void => {
    setAbrirModalVisualizarFilme(true);
    setFilmeVisualizar(filmeVisualizar);
  }

  // fechar a modal com os detalhes do filme
  const fecharModalVisualizarFilme = (): void => {
    setAbrirModalVisualizarFilme(false);
    setFilmeVisualizar(null);
  }

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <ModalDetalhes
        filmeVisualizar={ filmeVisualizar }
        aberta={ abrirModalVisualizarFilme }
        fecharModal={ () => {
          fecharModalVisualizarFilme();
        } } />
      <Loader carregando={ carregandoFilmes } />
      { filmes.length == 0 ? <Text>Não existem filmes cadastrados...</Text> : <FlatList
        data={ filmes }
        keyExtractor={ filme => filme.id.toString() }
        renderItem={ ({ item }) => {

          return <FilmeItem
            filme={ item }
            visualizarFilme={ () => {
              visualizarFilme(item);
            } } />
        } } /> }
    </SafeAreaView>
  );
}

export default Index;
