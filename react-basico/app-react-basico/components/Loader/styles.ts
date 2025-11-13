import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 99999999
  },
  mensagem: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10
  }
});

export default styles;