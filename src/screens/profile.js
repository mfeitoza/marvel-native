import React from 'react';

import {
  Box,
  Stack,
  Heading,
  Button,
} from 'native-base';

import Layout from './layout'

import ListItem from '../components/list-item'
import Navigation from '../components/navigation'

import { AuthContext } from '../contexts';

export default function Profile() {

  const { state, signOut } = React.useContext(AuthContext);
  const user = state.user;

  return (
    <Layout>
        <Stack space={4} direction="column">
          <Heading
            size="xl"
            fontWeight="600"
            color="primary.500"
            _dark={{
              color: "warmGray.50",
            }}
          >
            Olá, {user.name}!
          </Heading>
          <ListItem label="Nome" value={user.name} />
          <ListItem label="Email" value={user.email} />
          <ListItem label="Telefone" value={user.phone} />
          <ListItem label="Sexo" value={user.gender === 'male' ? 'Masculino' : 'Feminino'} />
        </Stack>

        <Button mt="4" colorScheme="primary" onPress={() => signOut() }>
          Sair
        </Button>
    </Layout>
  )
}
