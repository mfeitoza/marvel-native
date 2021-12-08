import React from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NativeBaseProvider, Box } from 'native-base';

import LoginScreen from './src/screens/login';
import HomeScreen from './src/screens/home';
import ClassHomeScreen from './src/screens/class-home';
import ProfileScreen from './src/screens/profile';
import SplashScreen from './src/screens/splash';

import { AuthContext } from './src/contexts';

import { getUserInfo } from './src/api';

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
            isLoading: false,
          };
        case 'SET_USER_INFO':
          return {
            ...prevState,
            isSignout: false,
            user: action.user,
          };
      }
    },
    {
      user: null,
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken = await AsyncStorage.getItem('USER_TOKEN');
      authContext.getUserByToken(userToken);
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (token) => {
        await AsyncStorage.setItem('USER_TOKEN', token);
        const res = await getUserInfo(token);
        dispatch({ type: 'SET_USER_INFO', user: res.data });
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      getUserByToken: async (token) => {
        try {
          const res = await getUserInfo(token);
          dispatch({ type: 'SET_USER_INFO', user: res.data });
          dispatch({ type: 'RESTORE_TOKEN', token });
        } catch (e) {
          dispatch({ type: 'SIGN_OUT' })
        }
      }
    }),
    []
  );

  if (authState.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{...authContext, state: authState}}>
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
