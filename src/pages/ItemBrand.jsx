// import ActivityCard from ".cards/ActivityCard";
import { LinearGradient } from "expo-linear-gradient";
import {
  Box,
  Button,
  Heading,
  HStack,
  Text,
  Center,
  Select,
  CheckIcon,
  Image,
  Icon,
  IconButton,
  AddIcon,
  MinusIcon,
  ScrollView,
} from "native-base";
import React from "react";
import { addIcon, canImages, dropdownIcon } from "../../assets";
import ActivityCard from "../components/cards/ActivityCard";
import NBSelect from "../components/NBSelect";

export default function ItemBrand({ navigation }) {
  const [counts, setCounts] = React.useState(0);
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FDA618"]}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.9, y: 0.8 }}
    >
      {/* Deposite header */}
      <ScrollView>
      <Box h="100%" mb={100} w={"100%"} p="6">
        <Box w="100%" textAlign="center">
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

        <Box mt="2" mb={4}>
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

        {/* <NBSelect /> */}
        <HStack
          py="2"
          px="4"
          borderRadius={"50px"}
          borderWidth="1"
          borderColor={"#18191B"}
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Box>
            <Text fontSize={12}>Item Brand</Text>
            <Text fontSize={14} bold>
              Toronto Ciders
            </Text>
          </Box>
          <Box>
            <Image source={dropdownIcon} alt="stepper" />
          </Box>
        </HStack>

        <Box mt={6} borderWidth={1} style={{ overflow:'hidden' }} borderRadius={"12px"}>
          <Box p="6" bg={'white'}>
            <Heading fontSize={16} textAlign="center" bold>
              [Item Name]
            </Heading>
            <Text
              fontSize={16}
              textAlign="center"
              mt={3}
              fontFamily={"Prompt-Regular"}
            >
              How many units of Crafty Ramen did you purchase?
            </Text>
            <HStack width={200} justifyContent={"space-between"} alignItems={'center'} mx='auto' mt='4'>
              <IconButton
              onPress={()=>setCounts(counts - 1)}
                icon={<MinusIcon />} 
                borderRadius="full"
                _icon={{
                  color: "black",
                  size: "sm",
                }}
                _hover={{
                  bg: "yellow.600:alpha.20",
                }}
                _pressed={{
                  bg: "yellow.600:alpha.20",
                  _icon: {
                    name: "emoji-flirt",
                  },
                  _ios: {
                    _icon: {
                      size: "xl",
                    },
                  },
                }}
                _ios={{
                  _icon: {
                    size: "xl",
                  },
                }}
              />
              <Heading size={"lg"} textAlign="center" bold>
                {counts}
              </Heading>
              <IconButton
              onPress={()=>setCounts(counts + 1)}

                icon={<AddIcon />} 
                borderRadius="full"
                _icon={{
                  color: "black",
                  size: "sm",
                  fontWeight:'bold',
                }}
                _hover={{
                  bg: "yellow.600:alpha.20",
                }}
                _pressed={{
                  bg: "yellow.600:alpha.20",
                  _icon: {
                    name: "emoji-flirt",
                  },
                  _ios: {
                    _icon: {
                      size: "2xl",
                    },
                  },
                }}
                _ios={{
                  _icon: {
                    size: "2xl",
                  },
                }}
              />
            </HStack>
         
               
          </Box>
          <Image
                  source={canImages}
                  alt="stepper"
                  // borderRadius={"12px"}
                  width="100%"
                  height="174"
                  // my="3"
                />
        </Box>

        <Button
          onPress={() => navigation.navigate("verifyAction")}
          borderWidth={1}
          borderColor="#18191B"
          borderRadius={"8px"}
          background="#fff"
          p="5"
          mt="4"
          fontFamily={"Prompt-Regular"}
        >
          <Heading size="sm" bg="#fff" w="100%" fontFamily={"Prompt-Regular"}>
            Proceed
          </Heading>
        </Button>
      </Box>
      </ScrollView>
    </LinearGradient>
  );
}
