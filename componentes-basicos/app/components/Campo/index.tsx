import { StyleSheet, Text, TextInput, View } from "react-native";

interface CampoProps {
 
  valor: string;
  label: string;
  placeholder: string;
  onAlterarValor: (textoDigitado: string) => void;
  erroCampo?: string;
  
}

const Campo = (campoProps: CampoProps) => {

  return (
    <View>
      <Text style={ styles.label }>{ campoProps.label }</Text>
      <TextInput
        style={ styles.campo }  
        value={ campoProps.valor }
        placeholder={ campoProps.placeholder }
        underlineColorAndroid="transparent" // essa propertie com transparent remove aquela linha abaixo do texto no android
        onChangeText={ (textoDigitado: string) => campoProps.onAlterarValor(textoDigitado) } />
      { campoProps.erroCampo && <Text style={ styles.erro }>{ campoProps.erroCampo }</Text> }
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10
  },
  campo: {
    width: "100%",
    padding: 20,
    marginTop: 5,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderStyle: "solid",
    height: 70,
    borderRadius: 10
  },
  erro: {
    color: "red",
    marginTop: 5
  }
});

export default Campo;