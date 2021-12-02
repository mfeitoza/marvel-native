import React from 'react';

import {
  Box,
  Stack,
  Heading,
} from 'native-base';

import ListItem from '../components/list-item'

export default function ClassHome() {

  return (
    <Box px={4} pt={4}>
      <Stack space={4} direction="column">
        <Heading
          size="xl"
          fontWeight="600"
          color="primary.500"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Banco de dados
        </Heading>
        <ListItem label="Nome" value="Banco de dados 2" />
        <ListItem label="Professor" value="Marcus Feitoza" />
        <ListItem label="Inicio" value="2021-09-20" />
        <ListItem label="Fim" value="2021-11-20" />
      </Stack>
    </Box>
  )
}
