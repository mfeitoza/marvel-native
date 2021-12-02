import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NativeBaseProvider, Box } from 'native-base';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import ClassHomeScreen from './src/screens/class-home';
import ProfileScreen from './src/screens/profile';

const Stack = createNativeStackNavigator();

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator initialRouteName="Profile">
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Cursos Ativos" }} />
          <Stack.Screen name="ClassHome" component={ClassHomeScreen} options={{ title: "Curso" }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
