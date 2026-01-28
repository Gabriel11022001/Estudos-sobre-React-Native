import { Endereco } from "@/app";
import { Text, View } from "react-native";
import styles from "./styles";

type DadosEnderecoProps = {
  apresentar: boolean;
  endereco?: Endereco;
};

// componente que representa os dados do endereço consultado
const DadosEndereco = ({ apresentar, endereco }: DadosEnderecoProps) => {
  if (!apresentar) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.opcao}>CEP: {endereco?.cep}</Text>
      <Text style={styles.opcao}>Endereço: {endereco?.logradouro}</Text>
      <Text style={styles.opcao}>Cidade: {endereco?.cidade}</Text>
      <Text style={styles.opcao}>Bairro: {endereco?.bairro}</Text>
      <Text style={styles.opcao}>Estado: {endereco?.uf}</Text>
    </View>
  );
};

export default DadosEndereco;
