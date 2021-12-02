import React from 'react';

import { Box, Stack } from 'native-base';

import Layout from './layout'

import CardClass from '../components/card-class';
import Navigation from '../components/navigation'

export default function Home() {
  return (
    <Layout>
      <Stack space={4} direction="column">
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
        <CardClass name="Lorem ipsum" location="Dollor stime dhudfa" />
      </Stack>
    </Layout>
  )
}
