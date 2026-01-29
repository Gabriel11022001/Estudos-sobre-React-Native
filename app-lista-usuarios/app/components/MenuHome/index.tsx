import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export type Opcao = {

  titulo: string;

}

interface Props {

  redirecionar: (opcao: Opcao) => void;

}

const MenuHome = ({ redirecionar }: Props) => {

  return <View>
    <View style={ styles.containerLinha }>
      { /** cadastro de cliente */ }
      <TouchableOpacity style={ styles.opcao }>
        <AntDesign name="user-add" size={ 50 } color="black" />
        <Text style={ styles.texto }>Cadastrar Usuário</Text>
      </TouchableOpacity>
      { /**  listagem de clientes */ }
      <TouchableOpacity style={ styles.opcao }>
        <AntDesign name="user" size={ 50 } color="black" />
        <Text style={ styles.texto }>Usuários</Text>
      </TouchableOpacity>
    </View>
    <View style={ styles.containerLinha }>
      { /** logout */ }
      <TouchableOpacity style={ styles.opcao }>
        <AntDesign name="logout" size={ 50 } color="red" />
        <Text style={ styles.texto }>Sair</Text>
      </TouchableOpacity>
    </View>
  </View>
}

const styles = StyleSheet.create({

  containerLinha: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    marginTop: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  opcao: {
    backgroundColor: "#fff",
    padding: 20,
    width: "48%",
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    elevation: 7,
    borderRadius: 12,
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderStyle: "solid"
  },
  texto: {
    color: "#000",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
    marginTop: 10
  }

});

export default MenuHome;