import AntDesign from '@expo/vector-icons/AntDesign';
import { FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

export type TelaNavegarStack = {

  tela: string;
  icone: string;

}

interface NavegacaoStackProps {

  telas: Array<TelaNavegarStack>;
  navegar: (telaNavegar: string) => void;

}

const NavegacaoStack = ({ telas, navegar }: NavegacaoStackProps) => {

  const getIcon = (tela: TelaNavegarStack) => {

    if (tela.icone === "contacts") {
      
      return <AntDesign name="contacts" size={ 40 } color="#000" />
    }

    if (tela.icone === "plus") {

      return <AntDesign name="plus" size={ 40 } color="#000" />
    }

  }

  const getTextoTela = (tela: TelaNavegarStack): string => {

    if (tela.tela === "contatos") {
    
      return "Contatos";
    }

    return "Cadastro";
  }

  return <FlatList
    style={ { marginTop: 40 } }
    data={ telas }
    keyExtractor={ tela => tela.tela }
    renderItem={ ({ item }) => {
      
      return <TouchableOpacity style={ styles.itemTela } onPress={ () => {
        navegar(item.tela);
      } } >
        { getIcon(item) }
        <Text style={ styles.textoTela }>{ getTextoTela(item) }</Text>
      </TouchableOpacity>
    } } />
}

const styles = StyleSheet.create({
  itemTela: {
    width: "95%",
    marginStart: "2.5%",
    marginEnd: "2.5%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 5,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderStyle: "solid",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  textoTela: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  }
});

export default NavegacaoStack;