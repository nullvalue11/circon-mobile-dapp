import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Heading, HStack, Image, Text } from "native-base";
import React, { useState } from "react";
import { bgSvg, circleLogo } from "../../assets";
import ScannerHeader from "../components/oldCode/ScannerHeader";

export default function VerifyAction({ navigation }) {

  return (
    <Box >
      {/* linea7gradient(180deg, #FECE4E 0%, #FDA618 100%) 
      width={'100%'}*/}
      <ScannerHeader navigation={navigation} />
      <LinearGradient
        colors={["#FECE4E", "#FDA618"]}
        start={{ x: 0.0, y: 0.1 }}
        end={{ x: 0.0, y: 0.5 }}
      >
        
        <Box h={"100%"}    position="relative">
          <Image
            source={bgSvg}
            alt="background"
            height={"70%"}
            width={"100%"}
          />
          <Box position={"absolute"} bottom="20" top={0} left="0" right={0}>
            <HStack
              h={"69%"}
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Box />
              <Box px={"5"}>
                <Image source={circleLogo} alt="appLogo" mx="auto" />
                <Heading size={"lg"} bold mt="4" textAlign={"center"}>
                Verify Action
                </Heading>
                <Text textAlign={"center"} fontSize="16" mt="2">
                In order to earn your reward, the  {"\n"} receiving party needs to accept your  {"\n"} signature request.
                </Text>
              </Box>
              <Button
                onPress={() => {
  
                  navigation.navigate("initiate");
                }}
                width="85%"
                borderWidth={1}
                borderColor="#18191B"
                borderRadius={"8px"}
                background="#fff"
                p="5"
              >
                <Heading size="md" bg="#fff" w="100%">
                   Initiate Signature
                </Heading>
              </Button>
            </HStack>
          </Box>
        </Box>
      </LinearGradient>
    </Box>
  );
}
