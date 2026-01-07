interface Post {

  id: number;
  usuario: string;
  fotoUsuario: string;
  quantidadeLikes: number;
  voceDeuLike: boolean;
  quantidadeComentarios: number;
  quantidadeCompartilhamentos: number;
  fotoPost: string;
  textoPost: string;
  marcadoFavorito: boolean;

}

export default Post;