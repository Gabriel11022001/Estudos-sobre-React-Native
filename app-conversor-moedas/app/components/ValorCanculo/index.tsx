import { StyleSheet, Text, View } from "react-native";

type Props = {

  codigoMoeda: string;
  valorCalcularDinheiro: number;
  valorCalculado: number;

}

const ValorCalculo = ({ codigoMoeda, valorCalcularDinheiro, valorCalculado }: Props) => {

  return <View style ={ styles.container }>
    <Text>R${ valorCalcularDinheiro.toFixed(2) }</Text>
    <Text>Corresponde a</Text>
    <Text>{ valorCalculado.toFixed(2) } { codigoMoeda }</Text>
  </View>
}

const styles = StyleSheet.create({
  
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  }

});

export default ValorCalculo;