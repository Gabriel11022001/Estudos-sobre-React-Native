import { Produto } from "@/app";
import { FlatList, Text, TouchableOpacity } from "react-native";

interface ListaProdutosProps {

  produtos: Array<Produto>;
  visualizar: (produtoVisualizar: Produto) => void;

}

const ListaProdutos = ({ produtos, visualizar }: ListaProdutosProps) => {

  return (
    <FlatList
      data={ produtos }
      keyExtractor={ produto => produto.id.toString() }
      renderItem={ ({ item }) => {

        const { nome, precoVenda } = { ...item };

        return <TouchableOpacity onPress={ () => {
          visualizar(item);
        } } >
          <Text>{ nome.toUpperCase() }</Text>
          <Text>Preço R${ precoVenda.toFixed(2) }</Text>
        </TouchableOpacity>
      } } />
  );
}

export default ListaProdutos;