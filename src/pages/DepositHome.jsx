// import ActivityCard from ".cards/ActivityCard";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Heading, HStack, ScrollView, Text } from "native-base";
import React, { useState } from "react";
import ActivityCard from "../components/cards/ActivityCard";

const ACTIVITY_CARDS = [
  {
    id: 1,
    title: "Return",
    des: "Return an item to one of our collection sites",
  },
  {
    id: 2,
    title: "Purchase",
    des: "Select a vendor and then add reused items you’d like to purchase",
  },
  {
    id: 3,
    title: "Pickup",
    des: "Request to have your reused item be picked up by a collector",
  },
];

const RECYCLE_CARDS = [
  {
    id: 1,
    title: "Circle Deposits",
    des: "Select a specific collector - i.e. a “Circle” to deposit your recycling",
  },
  {
    id: 2,
    title: "General Deposits",
    des: "Select a generalized collector to deposit your recycling",
  },
  {
    id: 3,
    title: "Deposit Pickup",
    des: "Request to have your recycling deposit be picked up by a collector",
  },
];

export default function DepositHome({ navigation }) {
  const [ tabState, setTabState ] = useState('Reuse');
  return (
    <LinearGradient
      colors={["#FFFFFF", "#FDA618"]}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.9, y: 0.8 }}
    >
      {/* Deposite header */}
      <ScrollView>
      <Box h="90%"  mb={100} w={"100%"} p="6">
        <Box w="100%" textAlign="center">
          <Text color={"#000"} textAlign="center" fontFamily={'Prompt-Regular'}>
            1 of 3
          </Text>
          <Heading size={"sm"} color={"#000"} textAlign="center" mt="2" fontFamily={'Prompt-Regular'}>
            Select Activity
          </Heading>
        </Box>

        {/* <Button onPress={() => navigation.navigate("returns")}>
            Go to returns... again
          </Button>
          <Text>Home Screen</Text> */}
        {/* Tabs */}

        <HStack
          style={{
            borderRadius: 24,
            overflow: "hidden",
            width: "100%",
            height: 48,
            borderWidth: 1,
            borderColor: "#FECE4E",
          }}
          mt="4"
          alignItems="center"
          justifyContent={"center"}
        >
          <Box w={"50%"} bg={tabState !== 'Reuse' ? '#fff': "#FEF8DE"} p="0">
            {" "}
            <Button
              onPress={() => setTabState("Reuse")}
              background={"transparent"}
              textAlign={"center"}
              lineHeight="20px"
            >
              <Text color="#FDA618" fontSize="16" fontFamily={'Prompt-Regular'}>
                {" "}
                Reuse
              </Text>
            </Button>{" "}
          </Box>
          <Box w={"50%"} bg={tabState === 'Reuse' ? '#fff': "#FEF8DE"} p="0">
            {" "}
            <Button
              onPress={() => setTabState("Recycle")}
              background={"transparent"}
              textAlign={"center"}
              lineHeight="20px"
            >
              <Text color="#FDA618" fontSize="16" fontFamily={'Prompt-Regular'}>
                {" "}
                Recycle
              </Text>
            </Button>{" "}
          </Box>
        </HStack>
        {/* <Button ></Button> */}
        {/* text Cards */}

        { tabState === 'Reuse' && ACTIVITY_CARDS.map((items) => {
          return <ActivityCard key={items.id} card={items} />;
        })}
        { tabState === 'Recycle' && RECYCLE_CARDS.map((items) => {
          return <ActivityCard key={items.id} card={items} />;
        })}

        <Button
        onPress={() => navigation.navigate("returns")}
          borderWidth={1}
          borderColor="#18191B"
          borderRadius={"8px"}
          background='#fff'
          p="5"
          mt="4"
          fontFamily={'Prompt-Regular'}
        >
          <Heading size="sm" bg='#fff'  w='100%' fontFamily={'Prompt-Regular'}>
          Proceed
          </Heading>
        </Button>
      </Box>
      </ScrollView>
    </LinearGradient>
  );
}
