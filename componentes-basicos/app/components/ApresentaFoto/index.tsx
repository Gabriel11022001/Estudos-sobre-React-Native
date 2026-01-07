import { Image, Text, View } from "react-native";

type ApresentaFotoProps = {

  foto: string;
  texto?: string;

}

// componente criado manualmente
const ApresentaFoto = ({ foto, texto = "Texto qualquer" }: ApresentaFotoProps) => {

  return <View>
    <Image
    source={ { uri: foto } }
    style={ {
      width: "100%",
      height: 300,
      resizeMode: "contain"
    } } />
    <Text>{ texto.trim() }</Text>
  </View>
}

export default ApresentaFoto;