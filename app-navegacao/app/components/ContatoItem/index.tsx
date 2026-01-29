import { Contato } from "@/app/types/contato";
import AntDesign from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ContatoItemProps {

  contato: Contato;
  visualizarContato: () => void;
  deletarContato: () => void;

}

export default function ContatoItem({
  contato,
  visualizarContato,
  deletarContato
}: ContatoItemProps) {

  return <TouchableOpacity
  style={ styles.contatoItem }
  onPress={ visualizarContato }
  onLongPress={ deletarContato } >
    <View>
      <AntDesign name="contacts" color="#000" size={ 40 } />
    </View>
    <View style={ styles.containerDados }>
      <Text style={ styles.textoContato }>{ contato.nome }</Text>
      <Text>{ contato.email }</Text>
      <Text>{ contato.telefone }</Text>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  contatoItem: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  containerDados: {
    marginStart: 20
  },
  textoContato: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  }
});