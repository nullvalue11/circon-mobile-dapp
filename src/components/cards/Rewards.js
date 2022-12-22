import { Box, HStack, Image, Text } from "native-base";
import React from "react";
import { reward } from "../../../assets";

export default function RewardCard() {
  return (
    <HStack
      bg={"#fff"}
      width="100%"
      p="3"
      borderWidth={1}
      borderColor="#8A817C"
      borderRadius={"12px"}
      my='1'
    >
      <Image borderRadius="50" source={reward} alt="Reward Placeholder" />
      <Box pl={"10px"} w="87%">
        <Text fontSize={"12"} fontWeight={900}>
          15% Discount
        </Text>
        <HStack alignItems={"center"} justifyContent="space-between">
          <Text fontSize={"12"}>
            eco+armor
          </Text>
          <Text fontSize={"14"}>100 $CRCN</Text>
        </HStack>
      </Box>
    </HStack>
  );
}
