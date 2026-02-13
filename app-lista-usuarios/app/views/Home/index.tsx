import MenuHome, { Opcao } from "@/app/components/MenuHome";
import Tela from "@/app/components/Tela";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";

// tela home do app
export default function Home({ navigation }: any) {

  const redirecionar = async ({ titulo }: Opcao) => {

    if (titulo === "cadastro_usuario") {
      navigation.navigate("cadastro_usuario");
    } else if (titulo === "usuarios") {
      navigation.navigate("usuarios");
    } else {
      // logout
      await logout();
    }

  }

  const logout = async () => {

  }

  useFocusEffect(useCallback(() => {
    
  }, []));

  return (
    <Tela>
      <ScrollView showsVerticalScrollIndicator={ false }>
        <MenuHome redirecionar={ redirecionar } />
      </ScrollView>
    </Tela>
  );
}

const styles = StyleSheet.create({
  
});