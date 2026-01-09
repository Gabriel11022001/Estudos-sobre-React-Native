import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoaderProps = {

  isCarregando: boolean;

}

const Loader = ({ isCarregando }: LoaderProps) => {

  if (!isCarregando) {

    return false;
  }

  return (
    <View style={ style.container }>
      <ActivityIndicator color="#000" size={ 50 } />
      <Text style={ style.texto }>Carregando, aguarde...</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: 999999999,
    flex: 1
  },
  texto: {
    color: "#000",
    fontSize: 16,
    marginTop: 10,
    textAlign: "center"
  }
});

export default Loader;