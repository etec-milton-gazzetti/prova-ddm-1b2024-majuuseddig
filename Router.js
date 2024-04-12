import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './Inicio';
import ComoEra from './ComoEra';
import MitologiaEgipcia from './MitologiaEgipicia';
import Sobre from './Sobre';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="inicio" component={Inicio} />
        <Stack.Screen name="ComoEra" component={ComoEra} />
        <Stack.Screen name="MitologiaEgipcia" component={MitologiaEgipcia} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
