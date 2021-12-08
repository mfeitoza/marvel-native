import React from "react"
import {
  Box,
  Heading,
  Text,
  Stack,
  Pressable,
} from "native-base";
import { useNavigation } from '@react-navigation/native';

export default function CardClass({ id, name, location, startDate, endDate }) {

  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('ClassHome', { id })}>
      <Box
        w="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Stack p="4" space={3}>

          <Stack space={2}>
            <Heading size="md">
              {name}
            </Heading>
            <Text
              fontSize="sm"
              _light={{
                color: "primary.500",
              }}
              _dark={{
                color: "primary.400",
              }}
              fontWeight="500"
            >
              {location}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Pressable>
  )
}
