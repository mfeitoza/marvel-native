
import React from 'react';
import {
  Text,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Navigation() {
  
  const navigation = useNavigation();
  const route = useRoute();

  const [selected, setSelected] = React.useState(1);

  console.log(route.name)

  return (
      <HStack bg="primary.500" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={route.name === 'Home' ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => navigation.navigate('Home')}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={'home'}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={route.name === 'Profile' ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => navigation.navigate('Profile')}
        >
          <Center>
            <Icon
              mb="1"
              as={<MaterialIcons name="person" />}
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Perfil
            </Text>
          </Center>
        </Pressable>
      </HStack>
  );
}

