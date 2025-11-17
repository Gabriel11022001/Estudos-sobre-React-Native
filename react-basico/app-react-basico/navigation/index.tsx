import Detalhes from '@/views/Detalhes';
import Home from '@/views/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/**
 * configurar navegação do app com react navigation
 */

const Stack = createNativeStackNavigator();

const Navigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        { /** Stack.Screen -> representa uma tela */ }
        <Stack.Screen name="home" component={ Home } options={ {
          headerShown: false // esconder o header
        } } />
        { /** tela de detalhes da pessoa */ }
        <Stack.Screen name="detalhes" component={ Detalhes } options={ { headerShown: false } } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;