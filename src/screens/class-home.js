import React from 'react';

import {
  Box,
  Stack,
  Heading,
} from 'native-base';

import { useRoute } from '@react-navigation/native';

import ListItem from '../components/list-item'

import { AuthContext } from '../contexts';



export default function ClassHome() {

  const route = useRoute();
  const { state } = React.useContext(AuthContext);
  const id = route.params.id;
  const enrollment = state.user.enrollments.find(enrollment => enrollment.id === id);

  console.log(enrollment)

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
          {enrollment.course.course.name}
        </Heading>
        <ListItem label="Nome" value={enrollment.course.course.name} />
        <ListItem label="Professor" value={enrollment.course.professor.name} />
        <ListItem label="Inicio" value={new Date(enrollment.course.startDate).toLocaleDateString()} />
        <ListItem label="Fim" value={new Date(enrollment.course.endDate).toLocaleDateString()} />
      </Stack>
    </Box>
  )
}
