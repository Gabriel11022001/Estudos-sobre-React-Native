import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../views/Home';
import Login from '../views/Login';

const Navigation = () => {

  const Stack = createNativeStackNavigator();
  
  return <NavigationContainer>
    <Stack.Navigator initialRouteName="login">
      { /** tela de login */ }
      <Stack.Screen name="login" component={ Login } options={ { title: "Login" } } />
      { /** tela home */ }
      <Stack.Screen name="home" component={ Home } options={ { title: "Home" } } />
    </Stack.Navigator>
  </NavigationContainer>
}

export default Navigation;