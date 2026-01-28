import { StyleSheet, Text, TextInput, View } from "react-native";

interface CampoProps {

  label: string;
  erroCampo: string;
  valor: string;
  placeholder: string;
  onDigitar: (valorDigitado: string) => void;

}

const Campo = (props: CampoProps) => {

  return <View style={ styles.container }>
    <Text style={ styles.label }>{ props.label }</Text>
    <TextInput
      style={ styles.campo }
      value={ props.valor }
      onChangeText={ (valorDigitado: string) => {
        props.onDigitar(valorDigitado);
      } }
      placeholder={ props.placeholder }
      keyboardType="default"
      inputMode="text" />
    { props.erroCampo != "" ? <Text style={ styles.erro }>{ props.erroCampo }</Text> : false }
  </View>
}

const styles = StyleSheet.create({
  container: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    marginTop: 10,
    marginBottom: 10
  },
  label: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  campo: {
    width: "100%",
    marginTop: 7,
    marginBottom: 7,
    backgroundColor: "#fff",
    elevation: 5,
    padding: 20,
    height: 60,
    color: "#000",
    fontSize: 16,
    borderRadius: 10
  },
  erro: {
    color: "red",
    marginTop: 7,
    fontWeight: "bold",
    fontSize: 14
  }
});

export default Campo;