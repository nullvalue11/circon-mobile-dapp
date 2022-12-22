// import ActivityCard from ".cards/ActivityCard";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Heading, HStack, Image, Text } from "native-base";
import React, { useState } from "react";
import { canImages, mapImage } from "../../assets";
// import ActivityCard from "../components/cards/ActivityCard";

export default function ItemsReturn({ navigation }) {
  const [proceedHeight, setProceedHeight] = useState(false);

  return (
    <LinearGradient
      colors={["#FFFFFF", "#FDA618"]}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.9, y: 0.8 }}
    >
      
      {/* Deposite header */}
      <Box h="100%" w={"100%"} pt="6" fontFamily={"Prompt-Regular"}>
        <Box w="100%" textAlign="center" px="6">
          <Text color={"#000"} textAlign="center" fontFamily={"Prompt-Regular"}>
            2 of 3
          </Text>
          <Heading
            size={"sm"}
            color={"#000"}
            textAlign="center"
            mt="2"
            fontFamily={"Prompt-Regular"}
          >
            Select Activity
          </Heading>
        </Box>

        {/* <Button onPress={() => navigation.navigate("returns")}>
            Go to returns... again
          </Button>
          <Text>Home Screen</Text> */}
        {/* Tabs */}
        <Box px="6" mb={4}>
          <Text
            fontSize={16}
            color="#000"
            textAlign={"center"}
            fontFamily={"Prompt-Regular"}
            fontWeight="500"
          >
            Confirm collector details
          </Text>
        </Box>

        <Box>
          <Image source={mapImage} alt="stepper" width="100%" height={"92%"} />
        </Box>

        <Box position={"relative"}>
          <Box
            position={"absolute"}
            bottom={7}
            height={proceedHeight ? 386 : 174}
            left={0}
            right={0}
            px="6"
            py="4"
            // bg="#FDA618"
            bg={!proceedHeight ? "#FDA618" : ["#FECE4E", "#FDA618"]}
            borderRadius={"40px"}
            shadow={11}
          >
            {proceedHeight && (
              <Box>
                <Heading size={"xl"} color="#18191B" textAlign={"center"}>
                  Toronto Ciders
                </Heading>
                <Image
                  source={canImages}
                  alt="stepper"
                  borderRadius={"12px"}
                  width="100%"
                  maxHeight="174"
                  my="3"
                />
              </Box>
            )}

            <Button
              onPress={() => {
                if(proceedHeight){
                  navigation.navigate("itemBrand")
                }else{
                  setProceedHeight(true);
                }
              }}
              borderWidth={1}
              borderColor="#18191B"
              borderRadius={"8px"}
              background="#fff"
              p="5"
            >
              <Heading size="sm" bg="#fff" w="100%">
                Proceed
              </Heading>
            </Button>
          </Box>
        </Box>
      </Box>
    </LinearGradient>
  );
}
