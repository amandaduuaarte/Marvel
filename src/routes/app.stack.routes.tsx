import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Screens/Home';
import Details from '../Screens/Details';

export function AppStackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen
        name="details"
        component={Details}
        options={{
          headerBackTitle: 'Voltar',
        }}
      />
    </Stack.Navigator>
  );
}
