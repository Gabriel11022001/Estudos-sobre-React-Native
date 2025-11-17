import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fafafa",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  containerPrimeiraLetraNomePessoa: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f8ff",
    borderRadius: "100%",
    marginEnd: 20,
    borderColor: "#007fff",
    borderWidth: 1,
    borderStyle: "solid"
  },
  primeiraLetraNomePessoa: {
    color: "#007fff",
    fontSize: 20,
    fontWeight: 900
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 100,
    marginEnd: 20
  }
});

export default styles;