import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from "react-native";

interface Props {

  opcoes: Array<{ key: string, valor: string, label: string }>;
  opcaoSelecionada: string;
  selecionarOpcao: (opcao: string) => void;
  label: string;

}

const Select = ({ opcoes, opcaoSelecionada, label, selecionarOpcao }: Props) => {

  console.log("Opção selecionada: " + opcaoSelecionada);

  return <View style={ styles.containerCampo }>
    <Text style={ styles.label }>{ label }</Text>
    <Picker selectedValue={ opcaoSelecionada } onValueChange={ (novaOpcaoSelecionada: string) => {
      selecionarOpcao(novaOpcaoSelecionada);
    } } >
      { opcoes.map((opcaoAtual) => {

        return <Picker.Item label={ opcaoAtual.label.toUpperCase() } value={ opcaoAtual.valor } key={ opcaoAtual.key } />
      }) }
    </Picker>
  </View>
}

const styles = StyleSheet.create({

  containerCampo: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "column"
  },
  label: {
    color: "#000",
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "bold"
  }

});

export default Select;