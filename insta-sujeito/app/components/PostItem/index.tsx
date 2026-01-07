import Post from "@/app/data/post";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface PostProps {
  
  post: Post;
  darLike: (post: Post) => void;
  marcarFavorito: (post: Post) => void;
  compartilhar: (post: Post) => void;

}

const PostItem = ({ post, darLike, compartilhar, marcarFavorito }: PostProps) => {

  const getIcone = (operacao: string) => {

    if (operacao === "like") {

      if (post.voceDeuLike) {
        
        return <AntDesign name="heart" size={ 26 } color="red" />
      }

      return <AntDesign name="heart" size={ 26 } color="black" />
    }

    if (operacao === "compartilhar") {

      return <FontAwesome6 name="share" size={ 26 } color="black" />
    }

    if (operacao === "comentario") {

      return <FontAwesome name="comment-o" size={ 26 } color="black" />
    }

  }

  const Operacao = (operacao: string, quantidade: number, operacaoEfetuar: (post: Post) => void) => {

    return <TouchableOpacity style={ styles.operacao } onPress={ () => {
      operacaoEfetuar(post);
    } } >
      { getIcone(operacao) }
      { quantidade > 0 ? <Text style={ styles.operacaoTexto }>{ quantidade.toString() }</Text> : false }
    </TouchableOpacity>
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.containerFotoNomeUsuario }>
        <Image source={ { uri: post.fotoUsuario } } style={ styles.fotoUsuario } />
        <Text style={ styles.nomeUsuario }>{ post.usuario }</Text>
      </View>
      <Image source={ { uri: post.fotoPost } } style={ styles.fotoPost } />
      <View style={ styles.containerOperacoes }>
        <View style={ styles.containerOperacoesLikeCompartilharComentarios }>
          { Operacao("like", post.quantidadeLikes, darLike) }
          { Operacao("comentario", post.quantidadeComentarios, () => {}) }
          { Operacao("compartilhar", post.quantidadeCompartilhamentos, compartilhar) }
        </View>
        <View>
          { Operacao("", 0, marcarFavorito) }
        </View>
      </View>
    </View>
  );
}

export default PostItem;