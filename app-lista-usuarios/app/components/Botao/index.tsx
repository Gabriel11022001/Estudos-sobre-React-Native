import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {

  titulo: string;
  carregando: boolean;
  pressionar: () => void;

}

const Botao = ({ titulo, carregando, pressionar }: Props) => {

  return (
    <TouchableOpacity style={ styles.btn } onPress={ pressionar } disabled={ carregando } >
      { carregando ? <ActivityIndicator color="#fff" size={ 30 } /> : <Text style={ styles.texto }>{ titulo }</Text> }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  btn: {
    width: "98%",
    marginStart: "1%",
    marginEnd: "1%",
    backgroundColor: "#000",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 40,
    height: 65,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5
  },
  texto: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  }

});

export default Botao;