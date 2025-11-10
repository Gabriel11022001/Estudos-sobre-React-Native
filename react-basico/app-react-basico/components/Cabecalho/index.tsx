import { Text, View } from "react-native";
import styles from "./styles";

type CabecalhoProps = {

  titulo: string;

}

const Cabecalho = (props: CabecalhoProps) => {

  return <View style={ styles.container }>
    <Text style={ styles.titulo }>{ props.titulo.trim().toUpperCase() }</Text>
  </View>
}

export default Cabecalho;