import React from "react"
import {
  Box,
  Heading,
  Text,
  Stack,
} from "native-base";

export default function CardClass({ label, value }) {

  return (
    <Box
      w="200"
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
          <Heading size="xs">
            {label}
          </Heading>
          <Text
            fontSize="xl"
            _light={{
              color: "primary.500",
            }}
            _dark={{
              color: "primary.400",
            }}
            fontWeight="500"
          >
            {value}
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}
