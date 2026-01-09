import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListaPosts from "./components/ListaPosts";
import Loader from "./components/Loader";
import Titulo from "./components/Titulo";
import Post from "./data/post";
import { cadastrarPostsTeste, darLikePostagem, listarTodasPostagens, marcarPostFavoritoUsuario } from "./repositorio/postRepositorio";

// componente que representa a tela inicial do app
const Index = () => {

  const [ posts, setPosts ] = useState<Array<Post>>([]);
  const [ reload, setReload ] = useState<boolean>(false);
  const [ carregando, setCarregando ] = useState<boolean>(false);

  const listarPosts = (): void => {
    const postsFake: Post[] = [
      {
        id: 1,
        usuario: "Gabriel Santos",
        fotoUsuario: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
        quantidadeLikes: 128,
        voceDeuLike: false,
        quantidadeComentarios: 14,
        quantidadeCompartilhamentos: 3,
        fotoPost: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1",
        textoPost: "Uma tarde incrível aproveitando o pôr do sol!",
        marcadoFavorito: false,
      },
      {
        id: 2,
        usuario: "Mariana Silva",
        fotoUsuario: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
        quantidadeLikes: 342,
        voceDeuLike: true,
        quantidadeComentarios: 41,
        quantidadeCompartilhamentos: 12,
        fotoPost: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
        textoPost: "Natureza é a maior fonte de paz.",
        marcadoFavorito: true,
      },
      {
        id: 3,
        usuario: "João Pereira",
        fotoUsuario: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
        quantidadeLikes: 87,
        voceDeuLike: false,
        quantidadeComentarios: 9,
        quantidadeCompartilhamentos: 1,
        fotoPost: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
        textoPost: "Primeira vez visitando este lugar. Impressionante!",
        marcadoFavorito: false,
      },
      {
        id: 4,
        usuario: "Ana Rodrigues",
        fotoUsuario: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce",
        quantidadeLikes: 452,
        voceDeuLike: true,
        quantidadeComentarios: 64,
        quantidadeCompartilhamentos: 22,
        fotoPost: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        textoPost: "Café, livros e um momento só meu.",
        marcadoFavorito: true,
      },
      {
        id: 5,
        usuario: "Ricardo Lima",
        fotoUsuario: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
        quantidadeLikes: 215,
        voceDeuLike: false,
        quantidadeComentarios: 18,
        quantidadeCompartilhamentos: 5,
        fotoPost: "https://images.unsplash.com/photo-1503264116251-35a269479413",
        textoPost: "Trabalhando em novos projetos hoje!",
        marcadoFavorito: false,
      }
    ];

    setPosts(postsFake);
  }

  // dar like no post
  const darLikePost = (idPost: number, estaComSeuLike: boolean): void => {
    console.log("Dar like/remover like no post...");

    try {
      const novosPots: Array<Post> = posts.map((post: Post) => {
        const postRetornar: Post = { ...post };

        if (post.id === idPost) {

          if (estaComSeuLike) {
            postRetornar.voceDeuLike = false;
            postRetornar.quantidadeLikes--;
          } else {
            postRetornar.voceDeuLike = true;
            postRetornar.quantidadeLikes++;
          }

        }

        return postRetornar;
      });

      setPosts(novosPots);
    } catch (e) {
      console.error("Erro ao tentar-se dar o like: " + e);
    }

  }

  // compartilhar o post
  const compartiharPost = (idPost: number): void => {
    console.log("Compartilhar post...");
  }

  // marcar o post como favorito
  const marcarComoFavorito = (idPost: number, marcadoAtualmentoComoFavorito: boolean): void => {
    console.log("Marcar post como favorito...");

    try {
      const novosPosts: Post[] = posts.map(function (postValidar: Post) {
        const postRetornar: Post = { ...postValidar };

        if (postValidar.id === idPost) {

          if (marcadoAtualmentoComoFavorito) {
            postRetornar.marcadoFavorito = false;
          } else {
            postRetornar.marcadoFavorito = true;
          }

        }

        console.log(postRetornar);
        return postRetornar;
      });

      setPosts(novosPosts);
    } catch (e) {
      console.error("Erro ao tentar-se marcar como favorito: " + e);
    }

  }

  // listar posts mas pelo asyncstorage
  const listarPostsAsync = async () => {
    setCarregando(true);
    setPosts([]);

    try {
      const postsLista: Array<Post> = await listarTodasPostagens();

      if (postsLista.length > 0) {
        console.log(postsLista);

        setPosts(postsLista);
      } else {
        console.log("Nenhum post foi encontrado na base de dados...");
      }

    } catch (e) {
      console.error("Erro ao tentar-se listar os posts: " + e);

      Alert.alert("Atenção!", "Erro ao tentar-se listar os posts!", [
        {
          style: "destructive",
          onPress: () => {},
          text: "OK"
        }
      ]);
    } finally {
      setCarregando(false);
    }

  }

  // dar like no post pelo asyncstorage
  const darLikePostAsync = async (post: Post) => {
    
    try {
      await darLikePostagem(post.id)
        .then(() => {
        })
        .catch((erro) => {
          console.error("Erro ao tentar-se dar o like no post: " + erro);
        })
        .finally(() => {
          listarPostsAsync();
        });
    } catch (e) {
      console.error("Erro ao tentar-se dar like no post: " + e);

      apresentarAlerta("Erro ao tentar-se dar like no post!");
    }

  }

  const apresentarAlerta = (msg: string): void => {
    Alert.alert("Atenção!", msg.trim(), [ { style: "default", onPress: () => {}, text: "OK" } ]);
  }

  // marcar o post como favorito com asyncstorage
  const marcarPostFavoritoAsync = async (post: Post) => {

    try {
      await marcarPostFavoritoUsuario(post.id)
        .then(() => {})
        .catch((erro) => { apresentarAlerta("Erro ao tentar-se marcar o post como favorito: " + erro) })
        .finally(() => { listarTodasPostagens() })
    } catch (e) {
      console.log("Erro ao tentar-se marcar o post como favorito: " + e);

      apresentarAlerta("Erro ao tentar-se marcar o post como favorito!");
    }

  }

  useFocusEffect(useCallback(() => {
    cadastrarPostsTeste();
    listarPostsAsync();
  }, []));

  return (
    <SafeAreaView>
      <Loader isCarregando={ carregando } />
      <ScrollView showsVerticalScrollIndicator={ false } >
        { /** título da página */ }
        <Titulo />
        { /** listagem dos posts */ }
        <ListaPosts
          posts={ posts }
          darLike={ (post: Post) => {
            // darLikePost(post.id, post.voceDeuLike);
            darLikePostAsync(post);
          } }
          compartilhar={ (post: Post) => {
            compartiharPost(post.id);
          } }
          marcarFavorito={ (post: Post) => {
            // marcarComoFavorito(post.id, post.marcadoFavorito);
            marcarPostFavoritoAsync(post);
          } } />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;