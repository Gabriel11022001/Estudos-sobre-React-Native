import { Filme } from "@/app/types/filme";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {

  aberta: boolean;
  filmeVisualizar: Filme | null;
  fecharModal: () => void;

}

const ModalDetalhes = ({ filmeVisualizar, aberta, fecharModal }: Props) => {

  if (!aberta) {

    return null;
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.containerConteudo }>
        <View style={ styles.containerFecharModal }>
          <TouchableOpacity onPress={ fecharModal } >
            <AntDesign name="close" size={ 30 } color="#fff" />
          </TouchableOpacity>
        </View>
        <Image source={ { uri: filmeVisualizar?.foto } } style={ styles.foto } />
        <Text style={ styles.titulo }>{ filmeVisualizar?.nome }</Text>
        <Text style={ styles.sinopse }>{ filmeVisualizar?.sinopse }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999999999,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    flexDirection: "row",
    alignItems: "flex-end"
  },
  containerConteudo: {
    width: "100%",
    height: "80%",
    backgroundColor: "#000",
    padding: 20,
    flexDirection: "column",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopColor: "red",
    borderTopWidth: 20,
    borderStyle: "solid"
  },
  titulo: {
    color: "#fff",
    fontWeight: 900,
    fontSize: 20,
    textAlign: "center"
  },
  sinopse: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center"
  },
  containerFecharModal: {
    width: "100%",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  foto: {
    width: "80%",
    height: 200,
    resizeMode: "cover",
    marginBottom: 30,
    borderRadius: 10
  }
});

export default ModalDetalhes;