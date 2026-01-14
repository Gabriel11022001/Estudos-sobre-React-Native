import { Filme } from "@/app/types/filme";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface FilmeItemProps {

  filme: Filme;
  visualizarFilme: () => void;

}

const FilmeItem = ({ filme, visualizarFilme }: FilmeItemProps) => {

  return (
    <TouchableOpacity
      style={ style.container }
      onPress={ () => {
        visualizarFilme();
      } } >
      <Image source={ { uri: filme.foto } } style={ style.foto } />
      <View style={ style.containerFomeFilme }>
        <Text style={ style.nomeFilme }>{ filme.nome }</Text>
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#fafafa",
    marginTop: 40,
    marginBottom: 40,
    flexDirection: "column",
    marginStart: "5%",
    marginEnd: "5%",
    borderRadius: 20,
    alignItems: "flex-start"
  },
  foto: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  },
  nomeFilme: {
    color: "#000",
    fontWeight: 900,
    fontSize: 20,
    marginTop: 20
  },
  containerFomeFilme: {
    width: "100%",
    padding: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderBottomColor: "#f1f1f1",
    borderLeftColor: "#f1f1f1",
    borderRightColor: "#f1f1f1",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  }
});

export default FilmeItem;