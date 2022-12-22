import { LinearGradient } from "expo-linear-gradient";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { bgSvg, Celo, circleLogo, dawnArrow, fBg } from "../../assets";
import ScannerHeader from "../components/oldCode/ScannerHeader";

export default function Congratulations({ navigation }) {
  const toast = useToast();
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FDA618"]}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.9, y: 0.8 }}
    >
      {/* Deposite header */}
      <Box h="100%" w={"100%"} mb={-10} fontFamily={"Prompt-Regular"}>
        <Box h={"100%"} position="relative">
          <Image source={fBg} alt="background" height={"92%"} width={"100%"} />

          <Box position={"absolute"} bottom="10" top={0} left="0" right={0}>
            <Box w="100%" textAlign="center" mt={8} px="6">
              <Text
                fontSize={"20"}
                color={"#000"}
                textAlign="center"
                mt="2"
                bold
                fontFamily={"Prompt-Regular"}
              >
                Congratulations!
              </Text>
            </Box>

            {/* <Button onPress={() => navigation.navigate("returns")}>
        Go to returns... again
      </Button>
      <Text>Home Screen</Text> */}
            {/* Tabs */}
            <Box px="6" mt={2}>
              <Text
                fontSize={16}
                color="#000"
                textAlign={"center"}
                fontFamily={"Prompt-Regular"}
                fontWeight="500"
              >
                You’ve earned the following:
              </Text>
            </Box>
            <HStack
              h={"79%"}
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box />
              <Box px={"5"}>
                <Image source={Celo} alt="appLogo" mx="auto" />
                <Text
                  fontFamily={"Prompt-Regular"}
                  fontSize="28"
                  bold
                  mt="4"
                  color={"#463F3A"}
                  textAlign={"center"}
                >
                  $CRCN tokens
                </Text>
                <Text
                  textAlign={"center"}
                  fontFamily={"Krona-One"}
                  fontSize={64}
                >
                  50.29
                </Text>
                <Text
                  textAlign={"center"}
                  fontFamily={"Krona-One"}
                  fontSize="28"
                  color={"#463F3A"}
                  mt="2"
                >
                  $5.06 USD
                </Text>

                <HStack alignItems={"center"} justifyContent="center" mt={"2"}>
                  <Text mr={"2"} color="#18191B" fontSize={16} fontWeight={500}>
                    Transaction Details
                  </Text>
                  <Image source={dawnArrow} alt="arrow" />
                </HStack>
              </Box>
              <Button
                onPress={() => {
                    toast.show({
                        description: "Complete"
                      })
                  //   navigation.navigate("in$5.06 USDitiate");
                }}
                width="85%"
                borderWidth={1}
                borderColor="#fff"
                borderRadius={"8px"}
                background="#0CDA6E"
                p="5"
              >
                <Text fontSize={"16"} color={"#fff"} bg="#0CDA6E" w="100%">
                  Complete
                </Text>
              </Button>
            </HStack>
          </Box>
        </Box>
      </Box>
    </LinearGradient>
  );
}
