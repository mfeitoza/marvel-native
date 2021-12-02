import React from 'react';

import {
  Flex,
  Box,
  Center,
  ScrollView,
} from 'native-base';

import Navigation from '../components/navigation';

export default function Layout (props) {
  return (
    <Box flex="1" safeAreaTop>
      <ScrollView flex={1} px={4} pb={4} pt={4}>
        {props.children}
      </ScrollView>
      <Navigation />
    </Box>
  )
}