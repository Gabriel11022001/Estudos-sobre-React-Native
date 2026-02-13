import { Usuario } from "@/app/types/usuario";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {

  usuarios: Array<Usuario>;
  visualizarUsuario: (idUsuarioVisualizar: number) => void;
  deletarUsuario: (idUsuarioDeletar: number) => void;

}

const ListaUsuarios = ({ usuarios, visualizarUsuario, deletarUsuario }: Props) => {

  if (usuarios.length == 0) {

    return <View style={ styles.containerNaoExistemUsuarios }>
      <Text style={ styles.txtNaoExistemUsuarios }>Não existem usuários cadastrados na base de dados.</Text>
    </View>
  }

  return <FlatList
    data={ usuarios }
    renderItem={ ({ item }) => {

      return <TouchableOpacity 
        style={ [
          styles.usuarioItem,
          item.ativo ? { borderEndColor: "green" } : { borderEndColor: "red" }
        ] } 
        onPress={ () => visualizarUsuario(item.id ?? 0) }
        onLongPress={ () => deletarUsuario(item.id ?? 0) } >
        <Text style={ styles.nomeUsuario }>{ item.nome }</Text>
        <Text style={ styles.texto }>{ item.email }</Text>
        <Text style={ styles.texto }>{ item.telefone }</Text>
        <Text style={ styles.texto }>{ item.ativo ? "Ativo" : "Inativo" }</Text>
      </TouchableOpacity>
    } }
    keyExtractor={ usuario => usuario.id?.toString() ?? "" }
    showsVerticalScrollIndicator={ false } />
}

const styles = StyleSheet.create({
  
  containerNaoExistemUsuarios: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingHorizontal: 30
  },
  txtNaoExistemUsuarios: {
    color: "#000",
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center"
  },
  usuarioItem: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    elevation: 7,
    borderRadius: 10,
    padding: 12,
    borderColor: "#bdc3c7",
    borderWidth: 1,
    borderStyle: "solid",
    borderEndColor: "#000",
    borderEndWidth: 6,
  },
  nomeUsuario: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5
  },
  texto: {
    color: "#000",
    fontSize: 14,
    marginTop: 3
  }

});

export default ListaUsuarios;