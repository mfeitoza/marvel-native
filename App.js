import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NativeBaseProvider, Box } from 'native-base';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import ClassHomeScreen from './src/screens/class-home';
import ProfileScreen from './src/screens/profile';

import { AuthContext } from './src/contexts';

const Stack = createNativeStackNavigator();

export default function App() {

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#FFF',
    },
  };

  const [authState, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {

    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('USER_TOKEN');
      } catch (e) {
        console.log(e);
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (token) => {
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' })
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NativeBaseProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            {authState.userToken == null ? (
              <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            ) : (
              <>
                <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Cursos Ativos" }} />
                <Stack.Screen name="ClassHome" component={ClassHomeScreen} options={{ title: "Curso" }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: "Perfil" }} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthContext.Provider>
  );
}
