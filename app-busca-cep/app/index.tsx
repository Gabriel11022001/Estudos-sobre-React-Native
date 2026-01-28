import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Campo from "./componentes/Campo";
import DadosEndereco from "./componentes/DadosEndereco";
import api from "./service/api";

export type Endereco = {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
};

const Index = () => {
  const [carregando, setCarregando] = useState<boolean>(false);
  const [cep, setCep] = useState<string>("");
  const [enderecoConsultado, setEnderecoConsultado] = useState<Endereco | null>(
    null,
  );

  // apresentar um alerta de erro para o usuário
  const apresentarAlertaErro = (msg: string) =>
    Alert.alert("Atenção!", msg, [
      {
        style: "destructive",
        onPress: () => {},
        text: "OK",
      },
    ]);

  const validarCep = (cep: string): boolean => {
    const regex = /^[0-9]{5}-?[0-9]{3}$/;

    return regex.test(cep);
  };

  // consultar o endereço informado pelo cep
  const consultarEnderecoPeloCep = async () => {
    if (cep.trim() === "") {
      apresentarAlertaErro("Informe o cep"!);

      return;
    }

    if (!validarCep(cep.trim())) {
      apresentarAlertaErro("Cep inválido!");

      return;
    }

    console.log("Consultar o endereço pelo cep...");

    setCarregando(true);

    try {
      const cepFormatado: string = cep.trim();

      const resp = await api.get(`${cepFormatado}/json`);

      if (resp.status == 200) {
        const enderecoConsultado = { ...resp.data };

        setEnderecoConsultado({
          cep: enderecoConsultado.cep,
          bairro: enderecoConsultado.bairro,
          cidade: enderecoConsultado.localidade,
          logradouro: enderecoConsultado.logradouro,
          uf: enderecoConsultado.uf,
        });

        console.log("Endereço consultado com sucesso!");
      } else {
        // apresentar um alerta de erro para o usuário
        apresentarAlertaErro("Erro ao tentar-se consultar o endereço pelo cep");
      }
    } catch (e) {
      console.log("Erro ao tentar-se consultar o endereço pelo cep: " + e);

      apresentarAlertaErro(
        `Erro ao tentar-se consultar o endereço pelo cep: ${e}`,
      );
    } finally {
      setCarregando(false);
    }
  };

  const limpar = () => setCep("");

  useEffect(() => {
    if (cep === "") {
      setEnderecoConsultado(null);
    }
  }, [cep]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/** título */}
        <Text style={styles.titulo}>Digite o CEP desejado</Text>
        {/** campo para o usuário informar o cep */}
        <Campo
          cep={cep}
          placeholder="EX: 17690-000"
          digitarCep={(cepDigitado: string) => {
            setCep(cepDigitado);
          }}
        />
        <View style={styles.containerBotoes}>
          <Button
            title="Buscar"
            color="blue"
            onPress={() => {
              // consultar endereço pelo cep informado
              consultarEnderecoPeloCep();
            }}
          />
          <Button
            title="Limpar"
            color="red"
            onPress={() => {
              // limpar o campo do cep e esconder o container apresentando o endereço
              limpar();
            }}
          />
        </View>
        {/** apresentar dados do endereço consultado no viacep */}
        <DadosEndereco
          apresentar={enderecoConsultado != null}
          endereco={enderecoConsultado ?? undefined}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  containerBotoes: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 40,
  },
  titulo: {
    fontSize: 30,
    textAlign: "center",
    marginTop: 50,
    fontWeight: 900,
    color: "#000",
  },
});

export default Index;
