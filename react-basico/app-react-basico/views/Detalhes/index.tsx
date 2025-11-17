import Cabecalho from "@/components/Cabecalho";
import { useEffect } from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Detalhes = ({ route }: any) => {

  const { pessoa } = route.params;

  useEffect(() => {
    console.log("Visualizar dados da pessoa:");
    console.log(`ID: ${ pessoa.id }`);
    console.log(`Nome completo: ${ pessoa.nomeCompleto }`);
    console.log(`Telefone: ${ pessoa.telefone }`);
    console.log(`Endereco: ${ pessoa.endereco.logradouro }`);
    console.log(`Cidade: ${ pessoa.endereco.cidade }`);
    console.log(`UF: ${ pessoa.endereco.estado }`);
  }, []);

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <Cabecalho titulo="Detalhes da pessoa!" />
      <ScrollView style={ {
        flex: 1,
        padding: 10
      } }
      showsVerticalScrollIndicator={ false }>
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detalhes;