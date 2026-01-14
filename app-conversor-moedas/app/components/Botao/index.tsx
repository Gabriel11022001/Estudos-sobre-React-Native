import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {

  calcular: () => void;

}

const Botao = ({ calcular }: Props) => {

  return <TouchableOpacity
    style={ styles.botao }
    onPress={ calcular } >
    <Text style={ styles.textoBotao }>Calcular</Text>
  </TouchableOpacity>
}

const styles = StyleSheet.create({

  botao: {
    width: "100%",
    padding: 10,
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  },
  textoBotao: {
    color: "#fff",
    fontSize: 20
  }

});

export default Botao;