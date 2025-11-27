import Pessoa from "@/app/utils/entidades/pessoa";
import Cabecalho from "@/components/Cabecalho";
import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Detalhes = ({ route, navigation }: any) => {

  const { pessoa } = route.params;

  useEffect(() => {
    // apresentar dados da pessoa
    apresentarDadosPessoaConsole(pessoa);
  }, []);

  // apresentar dados da pessoa no console
  const apresentarDadosPessoaConsole = (pessoaApresentar: Pessoa): void => {
    console.log("Dados da pessoa.....");
    console.log("id: " + pessoaApresentar.id);
    console.log("nome: " + pessoaApresentar.nomeCompleto);
    console.log("telefone: " + pessoaApresentar.telefone);
    console.log("endereço: " + pessoaApresentar.endereco.logradouro);
    console.log("estado: " + pessoaApresentar.endereco.estado);
    console.log("cidade: " + pessoaApresentar.endereco.cidade);
    console.log("foto: " + pessoaApresentar.fotoPessoa);
  }

  const retornar = (): void => {
    // retornar para a tela anterior
    navigation.goBack();
  }

  return (
    <SafeAreaView style={ { flex: 1 } }>
      <Cabecalho titulo="Detalhes da pessoa!" />
      <ScrollView style={ {
        flex: 1,
        padding: 20
      } }
      showsVerticalScrollIndicator={ false }>
        <View style={ styles.containerFoto }>
          <Image style={ styles.foto } source={ { uri: pessoa.fotoPessoa } } />
        </View>
        <Text style={ styles.titulo }>Dados pessoais</Text>
        <Text style={ styles.dadoApresentar }>Nome completo: { pessoa.nomeCompleto }</Text>
        <Text style={ styles.dadoApresentar }>Telefone: { pessoa.telefone }</Text>
        <Text style={ styles.titulo }>Endereço</Text>
        <Text style={ styles.dadoApresentar }>Logradouro: { pessoa.endereco.logradouro }</Text>
        <Text style={ styles.dadoApresentar }>UF: { pessoa.endereco.estado }</Text>
        <Text style={ styles.dadoApresentar }>Cidade: { pessoa.endereco.cidade }</Text>
        <TouchableOpacity
          style={ styles.btnRetornar }
          onPress={ retornar } >
          <Text style={ styles.textoBtnRetornar }>Retornar</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Detalhes;