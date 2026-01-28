import NavegacaoStack, { TelaNavegarStack } from "@/app/components/NavegacaoStack";
import TelaApp from "@/app/components/Tela";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text } from "react-native";
import styles from "./styles";

const Home = () => {

  const telasNavegar: Array<TelaNavegarStack> = [
    {
      tela: "contatos",
      icone: "contacts"
    },
    {
      tela: "cadastro_contatos",
      icone: "plus"
    }
  ];

  const navigation = useNavigation();

  // navegar com o stack navigation
  function navegarStack(tela: string): void {
    console.log("Navegar para a tela: " + tela);

    // navegar para a tela de cadastro de contatos
    navigation.navigate(tela.trim());
  }

  return (
    <TelaApp>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <Text style={ styles.titulo }>Seja bem vindo</Text>
        <NavegacaoStack telas={ telasNavegar } navegar={ (tela: string) => {
          navegarStack(tela);
        } } />
      </ScrollView>
    </TelaApp>
  );
}

export default Home;