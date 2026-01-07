import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fotoUsuario: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginEnd: 10
  },
  container: {
    width: "100%",
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "#fff"
  },
  containerFotoNomeUsuario: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingStart: 20,
    paddingEnd: 20,
    paddingTop: 10,
    paddingBottom: 10
  },
  nomeUsuario: {
    color: "#000",
    fontWeight: "bold",
    marginStart: 5,
    fontSize: 16
  },
  fotoPost: {
    width: "100%",
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: "cover"
  },
  containerOperacoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20
  },
  containerOperacoesLikeCompartilharComentarios: {
    flexDirection: "row",
    alignItems: "center"
  },
  operacao: {
    flexDirection: "row",
    alignItems: "center",
    marginEnd: 20
  },
  operacaoTexto: {
    fontSize: 16,
    color: "#000",
    marginStart: 10
  }
});

export default styles;