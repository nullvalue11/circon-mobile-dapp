import {
  Box,
  HStack,
  Image,
  Text,
  Switch,
  ScrollView,
  Heading,
  StatusBar,
} from "native-base";
import React from "react";
import { graph, Stepper } from "../../assets";
import { LogBox, SafeAreaView } from "react-native";
import RewardCard from "./cards/Rewards";
import MyStatusBar from "./MyStatusBar";

LogBox.ignoreLogs(["Remote debugger"]);



export default function Home() {
  return (
    <Box height="90%" w="100%">
      <ScrollView height='100%'>
        <Image source={Stepper} alt="stepper" width="100%" />
        <Box px="5">
          <HStack justifyContent="space-between" alignItems="center" mt="4">
            <HStack
              px="4"
              bg={"#fff"}
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                py="1.5"
                borderRadius="8"
                fontSize="16"
                fontWeight={800}
                color="#463F3A"
              >
                500
              </Text>
              <Text
                pl="3"
                py="1.5"
                borderRadius="8"
                bg="#fff"
                fontSize="16"
                fontWeight={500}
                color="#463F3A"
              >
                $CRCN
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Text fontSize="sm" color="#000">
                Ascending Cost
              </Text>
              <Switch
                label="text"
                mr="1"
                isChecked={true}
                offTrackColor="#FEF8DE"
                onTrackColor="#FEF8DE"
                offThumbColor="#FECE4E"
                onThumbColor="#FECE4E"
              />
            </HStack>
          </HStack>
          <Box rounded="8" mb='20'>
            {[...Array(20)].map((item, idx) => (
              <RewardCard key={Math.random() + idx} />
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Box>
  );
}
