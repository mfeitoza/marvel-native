import React from 'react';

import {
  Box,
  Text,
  HStack,
  Divider,
} from 'native-base';

export default function ListItem({ label, value }) {
  return (
    <Box>
      <HStack space={4} py={4}>
        <Box w={20}>
          <Text fontSize="sm" bold>{label}</Text>
        </Box>
        <Box>
          <Text>
            {value}
          </Text>
        </Box>
      </HStack>
      <Divider />
    </Box>
  )
}