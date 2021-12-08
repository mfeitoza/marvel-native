import React from 'react';
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
} from 'native-base'

import { useNavigation } from '@react-navigation/native';

import { AuthContext } from '../contexts';
import { logIn } from "../api";

export const LoginForm = () => {

  const navigation = useNavigation();

  const { signIn } = React.useContext(AuthContext);

  const [ form, updateForm ] = React.useState({
    email: "marcus@outlook.com",
    password: "123456789",
    isValid: true,
  })

  const onChangeEmail = (value) => {
    updateForm({
      ...form,
      email: value,
      isValid: form.email & form.password ? true : false
    })
  }

  const onChangePassword = (value) => {
    updateForm({
      ...form,
      password: value,
      isValid: form.email && form.password ? true : false
    })
  }

  const onSubmit = async () => {
    if (form.isValid) {
      const res = await logIn(form.email, form.password);
      if (res.data) {
        signIn(res.data.token)
      }
    }
  }

  return (
    <Box safeArea p="2" py="8" w="100%" maxW="290">
      <Heading
        size="xl"
        fontWeight="600"
        color="primary.500"
        _dark={{
          color: "warmGray.50",
        }}
      >
        Bem-vindo
      </Heading>
      <Heading
        mt="1"
        _dark={{
          color: "warmGray.200",
        }}
        color="coolGray.600"
        fontWeight="medium"
        size="xs"
      >
        Entrar no sistema!
      </Heading>

      <VStack space={3} mt="5">

        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input onChangeText={onChangeEmail} value={form.email} />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label>Senha</FormControl.Label>
          <Input type="password" onChangeText={onChangePassword} value={form.password} />
        </FormControl>
        
        <Button mt="2" colorScheme="primary" onPress={() => onSubmit() }>
          Entrar
        </Button>
      </VStack>
    </Box>
  )
}

export default ({ navigation }) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <LoginForm navigation={navigation} />
      </Center>
    </NativeBaseProvider>
  )
}
