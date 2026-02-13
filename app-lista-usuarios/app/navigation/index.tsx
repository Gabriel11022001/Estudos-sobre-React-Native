import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroUsuario from '../views/CadastroUsuario';
import Home from '../views/Home';
import Login from '../views/Login';
import Usuarios from '../views/Usuarios';

const Navigation = () => {

  const Stack = createNativeStackNavigator();
  
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      { /** tela de login */ }
      <Stack.Screen name="login" component={ Login } options={ { title: "Login" } } />
      { /** tela home */ }
      <Stack.Screen name="home" component={ Home } options={ { title: "Home" } } />
      { /** tela de cadastro/edição de usuário */ }
      <Stack.Screen name="cadastro_usuario" component={ CadastroUsuario } options={ { title: "Cadastro de Usuário" } } />
      { /** tela de listagem dos usuários */ }
      <Stack.Screen name="usuarios" component={ Usuarios } options={ { title: "Usuários" } } />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;