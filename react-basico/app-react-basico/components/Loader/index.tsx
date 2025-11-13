import { ActivityIndicator, Text, View } from "react-native";
import styles from "./styles";

type LoaderProps = {

  mensagem: string;
  isCarregando: boolean;

}

export default function Loader({ mensagem, isCarregando }: LoaderProps) {
 
  if (!isCarregando)
    return false;

  return (
    <View style={ styles.loader }>
      { /**
       * O ActivityIndicator representa um loader que é renderizado conforme
       * o sistema operacional do dispositivo, ou seja, o estilo varia do 
       * android para o ios */ }
      <ActivityIndicator color="white" size={ 50 } />
      <Text style={ styles.mensagem }>{ mensagem.trim() }</Text>
    </View>
  );
}