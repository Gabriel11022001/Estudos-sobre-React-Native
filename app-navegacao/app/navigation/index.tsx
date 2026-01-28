import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroContato from '../views/CadastroContato';
import Contatos from '../views/Contatos';
import Home from '../views/Home';

const Navigation = () => {

  const Stack = createNativeStackNavigator();

  // telas do app
  const telas: Array<{ nome: string, titulo: string, tela: any }> = [
    {
      nome: "home",
      tela: Home,
      titulo: "Home"
    },
    {
      nome: "cadastro_contatos",
      tela: CadastroContato,
      titulo: "Cadastro de Contato"
    },
    {
      nome: "contatos",
      tela: Contatos,
      titulo: "Contatos"
    }
  ];

  return <NavigationContainer>
    <Stack.Navigator initialRouteName="home">
      { telas.map((tela: { nome: string, titulo: string, tela: any }) => {

        return <Stack.Screen name={ tela.nome } component={ tela.tela } options={ {
          title: tela.titulo,
          headerStyle: {
            backgroundColor: "red" // definir a cor de fundo do header
          },
          headerTintColor: "#fff" // definir as cores do texto e botões que vão aparecer no header
        } } />
      }) }
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;