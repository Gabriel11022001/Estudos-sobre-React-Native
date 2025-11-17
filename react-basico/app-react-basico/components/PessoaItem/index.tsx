import Pessoa from "@/app/utils/entidades/pessoa";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

interface PessoaItemProps {
 
  pessoaApresentar: Pessoa;
  onVisualizar: () => void;
  
}

// componente que representa a pessoa que vou apresentar na minha listagem
const PessoaItem = ({ pessoaApresentar, onVisualizar }: PessoaItemProps) => {

  const { nomeCompleto, telefone, endereco } = pessoaApresentar;
  const { logradouro, cidade, estado } = endereco;
  
  const primeiraLetraNomePessoa: string = pessoaApresentar.nomeCompleto[ 0 ].toUpperCase();

  return <TouchableOpacity
    style={ styles.container }
    onPress={ onVisualizar }>
      {/*<View style={ styles.containerPrimeiraLetraNomePessoa }>
        <Text style={ styles.primeiraLetraNomePessoa }>{ primeiraLetraNomePessoa }</Text>
      </View>*/}
      <Image source={ { uri: pessoaApresentar.fotoPessoa } } style={ styles.foto } />
      <View>
        <Text>{ nomeCompleto.toUpperCase() }</Text>
        <Text>{ telefone }</Text>
        <Text>{ logradouro }</Text>
        <Text>{ cidade.toUpperCase() }</Text>
        <Text>{ estado }</Text>
      </View>
  </TouchableOpacity>
}

export default PessoaItem;