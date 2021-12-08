import React from 'react';

import { Box, Stack } from 'native-base';

import Layout from './layout'
import CardClass from '../components/card-class';

import { AuthContext } from '../contexts';


export default function Home() {

  const { state } = React.useContext(AuthContext);
  const enrollments = state.user.enrollments;

  console.log(enrollments[0])

  return (
    <Layout>
      <Stack space={4} direction="column">
        {enrollments.map(enrollment => 
          <CardClass 
            key={enrollment.id}
            id={enrollment.id}
            name={enrollment.course.course.name}
            location={enrollment.course.location} 
          />
          )
        }
      </Stack>
    </Layout>
  )
}
