import Post from "@/app/data/post";
import { FlatList, Text, View } from "react-native";
import PostItem from "../PostItem";

interface ListaPosts {

  posts: Array<Post>;
  darLike: (postDarLike: Post) => void;
  compartilhar: (postCompartilhar: Post) => void;
  marcarFavorito: (postCompartilhar: Post) => void;

}

const ListaPosts = ({ posts, darLike, compartilhar, marcarFavorito }: ListaPosts) => {

  if (posts.length == 0) {

    return <View>
      <Text>Nenhum post realizado...</Text>
    </View>
  }

  return (
    <FlatList
      data={ posts }
      keyExtractor={ post => post.id.toString() }
      renderItem={ ({ item }) => {

        return <PostItem
          post={ item }
          darLike={ (postLike: Post) => {
            darLike(postLike);
          } }
          compartilhar={ (postCompartilhar: Post) => compartilhar(postCompartilhar) }
          marcarFavorito={ (postMarcarFavorito: Post) => marcarFavorito(postMarcarFavorito) } />
      } } />
  );
}

export default ListaPosts;