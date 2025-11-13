import { StyleSheet } from "react-native";

/**
 * no react native, para estilizar um componente,
 * nós precisamos definir um objeto com os estilos
 * para o componente
 */

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black" 
  },
  titulo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default styles;