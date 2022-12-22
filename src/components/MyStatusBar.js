// import { Box, StatusBar, Text } from "native-base";
// import { SafeAreaView } from "react-native";

// export default function MyStatusBar({ backgroundColor, ...props }) {
//   return (
//     <Box bg={'red.400'} h={'100px'}>

//     </Box>
//   );
// }
import React from "react";
import {
  VStack,
  HStack,
  Button,
  IconButton,
  Icon,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  StatusBar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function AppBar() {
  return (
    <Box bg={'#000'} style={{ zIndex:11 }}>
      <StatusBar bg="#000" barStyle="light-content" />
      <Box safeAreaTop bg="#000" />
      <HStack
        bg="#000"
        px="1"
        pt="6"
        pb='3'
        justifyContent="space-between"
        alignItems="center"
        background={'#000'}
        w="100%"
      >
        <HStack alignItems="center">
          <IconButton
            icon={
              <Icon size="sm" as={MaterialIcons} name="menu" color="white" />
            }
          />
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="favorite"
                size="sm"
                color="white"
              />
            }
          />
          <IconButton
            icon={
              <Icon as={MaterialIcons} name="search" size="sm" color="white" />
            }
          />
          <IconButton
            icon={
              <Icon
                as={MaterialIcons}
                name="more-vert"
                size="sm"
                color="white"
              />
            }
          />
        </HStack>
      </HStack>
    </Box>
  );
}

 function Example() {
  return (
      <Box zIndex={10} mt={0}>
        <AppBar />
      </Box>
  );
}

export default () => {
  return (
    <Box bg={'#000'}>
      <Example />
    </Box>
  );
};
