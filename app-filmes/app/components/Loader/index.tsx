import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

type LoaderProps = {

  carregando: boolean;

}

// componente que vai representar um loader enquando estiver realizando a requisição
const Loader = (loaderProps: LoaderProps) => {

  if (!loaderProps.carregando) {

    return null;
  } else {
    
    return <View style={ styles.container }>
      <ActivityIndicator color="#fff" size={ 100 } />
      <Text style={ styles.texto }>Carregando os filmes, aguarde...</Text>
    </View>
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "red",
    zIndex: 999999999,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.7
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold"
  }
});

export default Loader;