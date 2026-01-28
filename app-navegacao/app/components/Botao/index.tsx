import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface BotaoProps {

  titulo: string;
  onPressionar: () => void;

}

// componente que representa o botão
export default function Botao({ titulo, onPressionar }: BotaoProps) {

  return <TouchableOpacity
    style={ styles.botao }
    onPress={ onPressionar } >
    <Text style={ styles.textoBotao }>{ titulo }</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  botao: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    height: 65,
    backgroundColor: "red",
    elevation: 5,
    borderRadius: 12,
    marginTop: 30
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic"
  }
});