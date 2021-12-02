import React from 'react';
import {
  Box,
  Text,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  Button,
  HStack,
  Center,
  NativeBaseProvider,
} from 'native-base'

export const LoginForm = ({ navigation }) => {
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
          <Input />
        </FormControl>

        <FormControl isRequired>
          <FormControl.Label>Senha</FormControl.Label>
          <Input type="password" />
        </FormControl>
        
        <Button mt="2" colorScheme="primary" onPress={() => navigation.navigate('Home')}>
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
