import Pessoa from "@/app/utils/entidades/pessoa";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";

interface PessoaItemProps {
 
  pessoaApresentar: Pessoa;
  onVisualizar: () => void;
  
}

// componente que representa a pessoa que vou apresentar na minha listagem
const PessoaItem = ({ pessoaApresentar, onVisualizar }: PessoaItemProps) => {

  const { nomeCompleto, telefone, endereco } = pessoaApresentar;
  const { logradouro, cidade, estado } = endereco;

  return <TouchableOpacity
    style={ styles.container }
    onPress={ onVisualizar }>
      <Text>{ nomeCompleto.toUpperCase() }</Text>
      <Text>{ telefone }</Text>
      <Text>{ logradouro }</Text>
      <Text>{ cidade.toUpperCase() }</Text>
      <Text>{ estado }</Text>
  </TouchableOpacity>
}

export default PessoaItem;