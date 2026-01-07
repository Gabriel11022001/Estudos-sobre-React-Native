import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

export type OpcaoSeletor = {

  valor: string;
  label: string;

}

interface MultiSeletorProps {

  dados: Array<OpcaoSeletor>;
  selecionarOpcao: (opcaoSelecionada: OpcaoSeletor) => void;
  opcaoSelecionada: OpcaoSeletor;

}

const MultiSeletor = ({ dados, selecionarOpcao, opcaoSelecionada }: MultiSeletorProps) => {

  return (
    <View>
      { /** o picker serve como um componente de seleção de opções */ }
      <Picker
        selectedValue={ opcaoSelecionada.valor }
        onValueChange={ (opcaoSelecionada: string) => {
          console.log(opcaoSelecionada);
          selecionarOpcao(dados.find(opcao => opcao.valor === opcaoSelecionada) ?? { valor: "", label: "" });
        } } >
          { dados.map(({ label, valor }: OpcaoSeletor) => {
            
            return <Picker.Item value={ valor.trim() } label={ label.trim() } key={ valor } />
          }) }
      </Picker>
    </View>
  );
}

export default MultiSeletor;