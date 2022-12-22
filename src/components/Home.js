import {
  Box,
  HStack,
  Image,
  Text,
  Switch,
  ScrollView,
  Heading,
} from "native-base";
import React from "react";
import { graph, Stepper } from "../../assets";
import { LogBox } from "react-native";
import MyStatusBar from "./MyStatusBar";

LogBox.ignoreLogs(["Remote debugger"]);

export default function Home() {
  return (
    <Box height="90%"  w="100%">
      <ScrollView height={'100%'}>
        {/* <Box style={{ width:300, }} mx='auto'> */}
        <Box mb={'60px'}>
          <Image source={Stepper} alt="stepper" width="100%" />
          {/* </Box> */}
          <Box px="5">
            <HStack justifyContent="space-between" alignItems="center" mt="4">
              <Box>
                <Text
                  px="3"
                  py="1.5"
                  borderRadius="8"
                  bg="#fff"
                  fontSize="16"
                  fontWeight="bold"
                  color="#463F3A"
                >
                  My Earnings
                </Text>
              </Box>
              <HStack alignItems="center">
                <Switch
                  label="text"
                  mr="1"
                  offTrackColor="#FEF8DE"
                  onTrackColor="#FEF8DE"
                  offThumbColor="#FECE4E"
                  onThumbColor="#FECE4E"
                />
                <Text fontSize="md" color="#000" fontWeight="bold">
                  Token Value
                </Text>
              </HStack>
            </HStack>
            <Box rounded="8">
              <Image
                source={graph}
                alt="stepper"
                w="100%"
                mt="1"
                rounded="8"
                pt="1"
              />
            </Box>

            <HStack justifyContent="space-between" alignItems="center">
              <Box>
                <Text
                  px="3"
                  py="1.5"
                  borderRadius="8"
                  bg="#fff"
                  fontSize="16"
                  fontWeight="bold"
                  color="#463F3A"
                >
                  My Deposits
                </Text>
              </Box>
              <HStack alignItems="center">
                <Switch
                  label="text"
                  mr="1"
                  offTrackColor="#FEF8DE"
                  onTrackColor="#FEF8DE"
                  offThumbColor="#FECE4E"
                  onThumbColor="#FECE4E"
                />
                <Text fontSize="md" color="#000" fontWeight="bold">
                  Token Value
                </Text>
              </HStack>
            </HStack>

            {/* <Box mt='2' mb='20' px='3' py='3' borderRadius='8' bg='#fff' fontSize='16' fontWeight='bold' color='#463F3A'>
          <Box borderColor='#8A817C' borderWidth={1} borderRadius='8' p='3'>
            <Text fontSize='12' fontWeight='bold' color='#463F3A'>
              42nd occurence of plastic recycling
            </Text>

            <HStack space={2} justifyContent='space-between' alignItems='center' mt='2'>
            <Text fontSize='12' color='#8A817C' width={'30%'}>
            Activity proof
            </Text>
            <Text fontSize='12' color='#8A817C' width={'20%'}>
            Weight
            </Text>
            <Text fontSize='12' color='#8A817C' width={'20%'}>
            Time
            </Text>
            <Text fontSize='12' color='#8A817C' width={'16%'}>
            Earned
            </Text>
            </HStack>

            <HStack space={2} justifyContent='space-between' alignItems='center' mt='2'  >
            <Text fontSize='12' color='#18191B' width={'30%'}>
            [####...####]
            </Text>
            <Text fontSize='12' color='#18191B' width={'20%'}>
            [####]
            </Text>
            <Text fontSize='12' color='#18191B' width={'20%'}>
            [hh : ss]
            </Text>
            <Text fontSize='12' color='#18191B' width={'16%'}>
            [$$] [##]
            </Text>
            </HStack>

            <Text mt='3' fontSize='12' fontWeight='bold' color='#8A817C'>
            Date/Time of occurrence
            </Text>

            <Text mt='3' fontSize='12' fontWeight='bold' color='#18191B'>
            [DD/MM/YYYY | hh:mm:ss]
            </Text>
          </Box>
        </Box> */}

            <Box
              p="3"
              mt="2"
              borderColor="#8A817C"
              borderWidth={1}
              borderRadius="8"
              bg="#fff"
              fontSize="16"
              fontWeight="bold"
              color="#463F3A"
            >
              <HStack
                space={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="sm" fontSize="14" color="#18191B" bold>
                  [Activity Name]
                </Heading>
                <Text fontSize="12" color="#18191B">
                  [DD/MM/YYYY | hh:mm:ss]
                </Text>
              </HStack>

              <HStack
                space={2}
                justifyContent="space-between"
                alignItems="center"
                mt="2"
              >
                <Heading size="sm" fontSize="14" color="#463F3A" bold>
                  [Activity Description]
                </Heading>
                <Text fontSize="12" color="#18191B">
                  [Tokens Earned]
                </Text>
              </HStack>
            </Box>
            <Box
              p="3"
              mt="2"
              borderColor="#8A817C"
              borderWidth={1}
              mb="20"
              borderRadius="8"
              bg="#fff"
              fontSize="16"
              fontWeight="bold"
              color="#463F3A"
            >
              <HStack
                space={2}
                justifyContent="space-between"
                alignItems="center"
              >
                <Heading size="sm" fontSize="14" color="#18191B" bold>
                  [Activity Name]
                </Heading>
                <Text fontSize="12" color="#18191B">
                  [DD/MM/YYYY | hh:mm:ss]
                </Text>
              </HStack>

              <HStack
                space={2}
                justifyContent="space-between"
                alignItems="center"
                mt="2"
              >
                <Heading size="sm" fontSize="14" color="#463F3A" bold>
                  [Activity Description]
                </Heading>
              </HStack>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
