import { Picker } from '@react-native-picker/picker';
import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Botao from './components/Botao';
import ValorCalculo from './components/ValorCanculo';
import styles from "./styles";

type Moeda = {

  codigo: string;

}

const Index = () => {

  const [ carregando, setCarregando ] = useState<boolean>(false);
  const [ moedas, setMoedas ] = useState<Array<Moeda>>([]);
  const [ moedaSelecionada, setMoedaSelecionada ] = useState<Moeda | null>(null);
  const [ valorCalculo, setValorCalculo ] = useState<number>(0);
  const [ dinheiro, setDinheiro ] = useState<string>("");

  const api = axios.create({
    baseURL: "https://brasilapi.com.br/api/cambio/v1",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }
  });

  const apresentarAlertaErro = (erro: string): void => {
    Alert.alert("Atenção!", erro, [
      {
        style: "destructive",
        text: "OK",
        onPress: () => {}
      }
    ]);
  }

  //listar as moedas
  const listarMoedas = async () => {
    setCarregando(true);
    setMoedas([]);

    try {
      const resp = await api.get("moedas");

      if (resp.status == 200) {
        const moedasArray = resp.data;

        const moedasLista: Array<Moeda> = moedasArray.map((moedaConverter: object) => {

          return {
            codigo: moedaConverter.simbolo
          };
        });

        setMoedas(moedasLista);

        setMoedaSelecionada(moedasLista[ 0 ]);
      } else {
        apresentarAlertaErro("Erro ao tentar-se listra as moedas, tente novamente!");
      }

    } catch (e) {
      console.error(e);
      apresentarAlertaErro("Erro ao tentar-se listar as moedas: " + e);
    } finally {
      setCarregando(false);
    }

  }

  const selecionarMoeda = (moedaUsuarioSelecionar: string): void => {
    const moedaUsuarioSelecionou: Moeda | undefined = moedas.find(mo => mo.codigo === moedaUsuarioSelecionar);

    if (moedaUsuarioSelecionou) {
      setMoedaSelecionada(moedaUsuarioSelecionou);
    } else {
      setMoedaSelecionada(null);
    }

  }

  function getOntem(): string {
    const d = new Date();
    d.setDate(d.getDate() - 1);

    return d.toISOString().split("T")[0];
  }

  // calcular o valor em R$
  const calcular = async () => {
    console.log("Calcular valor....");
    setCarregando(true);
    setValorCalculo(0);

    try {

      if (dinheiro.trim() === "") {
        console.log("Informe um valor em dinheiro!");
        apresentarAlertaErro("Informe um valor em dinheiro!");
      } else if (Number.parseFloat(dinheiro) <= 0) {
        console.log("Valor inválido!");
        apresentarAlertaErro("Valor inválido!");
      } else {

        if (moedaSelecionada != null) {
          const { codigo } = { ...moedaSelecionada };
          const dataAtual = new Date();
          const endpoint: string = `cotacao/${ codigo }/${ getOntem() }`;
          
          console.log("Data atual: " + dataAtual);
          console.log("Endpoint: " + endpoint);
          console.log("Código: " + codigo);

          const resp = await api.get(endpoint);

          if (resp.status == 200) {
            const cotacoes = resp.data.cotacoes;
            const cotacaoCalcular = cotacoes[ 0 ];

            const valorVenda = cotacaoCalcular.cotacao_venda;
            const valorCalcularDinheiro = parseFloat(dinheiro);

            const valorCalculado = valorCalcularDinheiro / valorVenda;

            setValorCalculo(valorCalculado);
          } else {
            console.log("Erro ao tentar-se realizar o calculo, tente novamente!");
            apresentarAlertaErro("Erro ao tentar-se realizar o calculo, tente novamente!");
          }

        }

      }

    } catch (e) {
      console.log(e);
      apresentarAlertaErro("Erro ao tentar-se relizar o calculo, tente novamente: " + e);
    } finally {
      setCarregando(false);
    }

  }

  // só vai carregar uma vez quando entrar na tela do app
  useEffect(() => {
    listarMoedas();
  }, []);

  const apresentarContainerCalculoFinal = () => {

    if (moedaSelecionada != null && valorCalculo != 0
      && parseFloat(dinheiro) != 0
      && dinheiro != ""
    ) {

      return <ValorCalculo
        codigoMoeda={ moedaSelecionada.codigo }
        valorCalculado={ valorCalculo }
        valorCalcularDinheiro={ parseFloat(dinheiro) } />
    }

    return null;
  }

  return (
    <SafeAreaView style={ styles.container }>
      <ScrollView showsVerticalScrollIndicator={ false } >
        <View style={ styles.containerSelecionarMoeda }>
          <Text style={ styles.label }>Selecione uma moeda</Text>
          <Picker
            selectedValue={ moedaSelecionada?.codigo }
            onValueChange={ (moedaUsuarioSelecionar: string) => {
              selecionarMoeda(moedaUsuarioSelecionar);
            }} >
            { moedas.map((moeda: Moeda) => {

              return <Picker.Item value={ moeda.codigo } label={ moeda.codigo } />
            }) }
          </Picker>  
          <Text style={ styles.label }>Informe um valor para calcular em R$</Text>
          <TextInput
            style={ styles.campo }
            value={ dinheiro }
            onChangeText={ (dinheiroDigitado: string) => {
              setValorCalculo(0);

              if (dinheiroDigitado.trim() === "") {
                setDinheiro("");
              } else {
                setDinheiro(dinheiroDigitado);
              }

            } }
            placeholder="Digite um valor em R$..."
            inputMode="decimal"
            keyboardType="decimal-pad" />
          <Botao calcular={ () => {
            calcular();
          } } />
        </View>
        { apresentarContainerCalculoFinal() }
      </ScrollView>
    </SafeAreaView>
  );
}

export default Index;