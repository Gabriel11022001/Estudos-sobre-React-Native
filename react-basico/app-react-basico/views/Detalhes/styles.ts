import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  containerFoto: {
    width: "100%",
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  foto: {
    width: 200,
    height: 200,
    borderRadius: 100,
    elevation: 3
  },
  titulo: {
    color: "#000",
    fontWeight: 900,
    fontSize: 20,
    marginBottom: 12,
    marginTop: 20
  },
  dadoApresentar: {
    color: "#000",
    fontSize: 16,
    marginTop: 7,
    marginBottom: 7
  },
  btnRetornar: {
    width: "100%",
    padding: 15,
    borderRadius: 20,
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    elevation: 5
  },
  textoBtnRetornar: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  }
});

export default styles;