import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type Props = {
  
  carregando: boolean;

}

// componente que representa um loader para a aplicação
export default function Loader({ carregando }: Props) {

  if (!carregando) {

    return null;
  }

  return <View style={ styles.loader }>
    <View style={ styles.container }>
      <ActivityIndicator color="#000" size={ 50 } />
      <Text style={ styles.textoLoader }>Carregando, aguarde...</Text>
    </View>
  </View>
}

const styles = StyleSheet.create({

  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 99999999,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center"
  },
  textoLoader: {
    color: "#000",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold"
  },
  container: {
    width: "90%",
    backgroundColor: "#fff",
    marginStart: "5%",
    marginEnd: "5%",
    borderRadius: 10,
    elevation: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  }
  
});