import * as React from 'react';
import Inicio from './Inicio';
import ComoEra from './ComoEra';
import Mitologia from './Mitologia';
import Sobre from './Sobre';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ComoEra" component={ComoEra} />
        <Stack.Screen name="Mitologia" component={Mitologia} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}