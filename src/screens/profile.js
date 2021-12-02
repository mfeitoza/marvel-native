import React from 'react';

import {
  Box,
  Stack,
  Heading,
} from 'native-base';

import Layout from './layout'

import ListItem from '../components/list-item'
import Navigation from '../components/navigation'

export default function Profile() {

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
            Olá Marcus!
          </Heading>
          <ListItem label="Nome" value="Marcus Feitoza" />
          <ListItem label="Email" value="test@gmail.com" />
          <ListItem label="Telefone" value="22 99888-8880" />
          <ListItem label="Sexo" value="Masculino" />
        </Stack>
    </Layout>
  )
}
