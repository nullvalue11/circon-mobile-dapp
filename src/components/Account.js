import React from "react";
import { Box, HStack, Text } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import MyStatusBar from "./MyStatusBar";
// import { MyStatusBar } from "./Cart";

export default function Account() {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FDA618"]}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.9, y: 0.8 }}
    >
      <Box>

      <HStack h={"90%"} alignItems="center" justifyContent={"center"}>
        
        <Text fontSize={40} bold>
          Coming Soon
        </Text>
      </HStack>
      </Box>
     
    </LinearGradient>
  );
}
