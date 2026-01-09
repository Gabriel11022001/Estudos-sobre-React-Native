import AsyncStorage from '@react-native-async-storage/async-storage';
import Post from "../data/post";

export async function cadastrarPostsTeste() {
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

  await AsyncStorage.setItem("@posts", JSON.stringify(postsFake));

  console.log("============= Posts fake cadastrados com sucesso ==============")
}

export async function listarTodasPostagens() {
  let posts: Array<Post> = [];

  const postsString = await AsyncStorage.getItem("@posts");

  if (postsString) {
    posts = JSON.parse(postsString);
  }

  return posts;
}

export async function darLikePostagem(idPost: number) {
  const postsJson = await AsyncStorage.getItem("@posts");

  if (postsJson) {
    const postsLista: Array<Post> = JSON.parse(postsJson);

    const postsFinal: Array<Post> = postsLista.map((postAtual: Post) => {

      if (postAtual.id === idPost) {
        const postEditar: Post = { ...postAtual };

        if (postEditar.voceDeuLike) {
          postEditar.voceDeuLike = false;
          postEditar.quantidadeLikes--;
        } else {
          postEditar.voceDeuLike = true;
          postEditar.quantidadeLikes++;
        }

        return postEditar;
      }

      return { ...postAtual };
    });

    await AsyncStorage.setItem("@posts", JSON.stringify(postsFinal));

    console.log("Like efetuado com sucesso!");
  } else {
    console.log("Não existem posts cadastrados!");
  }

}

export async function marcarPostFavoritoUsuario(idPost: number) {
  
}