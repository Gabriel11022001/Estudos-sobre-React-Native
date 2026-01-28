import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Botao from "../Botao";

interface DialogDeletarContatoProps {

  apresentar: boolean;
  fechar: () => void;
  confirmar: () => void;

}

const DialogDeletarContato = ({ apresentar, fechar, confirmar }: DialogDeletarContatoProps) => {

  if (!apresentar) {

    return null;
  }

  return <View style={ styles.container }>
    <View style={ styles.containerCentro }>
      <View style={ styles.containerFechar }>
        <TouchableOpacity onPress={ fechar } >
          <AntDesign name="close" size={ 20 } color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Deseja deletar o contato?</Text>
        <Botao onPressionar={ confirmar } titulo="Confirmar" />
        <Botao onPressionar={ fechar } titulo="Cancelar" />
      </View>
    </View>
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999999999999
  },
  containerCentro: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "90%",
    marginStart: "5%",
    marginEnd: "5%",
    elevation: 5
  },
  containerFechar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});

export default DialogDeletarContato;