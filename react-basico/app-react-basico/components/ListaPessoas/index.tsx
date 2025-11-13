import Pessoa from "@/app/utils/entidades/pessoa";
import { FlatList } from "react-native";
import PessoaItem from "../PessoaItem";

interface ListaPessoasProps {

  pessoas: Pessoa[];
  onVisualizarPessoa: (pessoaIdVisualizar: number) => void;

}

const ListaPessoas = ({ pessoas, onVisualizarPessoa }: ListaPessoasProps) => {
  
  return (
    <FlatList
      data={ pessoas }
      renderItem={ ({ item }) => {

        return <PessoaItem pessoaApresentar={ item } onVisualizar={ () => {
          onVisualizarPessoa(item.id);
        } } />
      } }
      keyExtractor={ (pessoa) => pessoa.id } />
  );
}

export default ListaPessoas;