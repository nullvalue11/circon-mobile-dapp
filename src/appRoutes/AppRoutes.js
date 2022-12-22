import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Box, Button, Heading, HStack, Text } from "native-base";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemsReturn from "../pages/ItemsReturn";
import ActivityCard from "../components/cards/ActivityCard";
import DepositHome from "../pages/DepositHome";
import ItemBrand from "../pages/ItemBrand";
import VerifyAction from "../pages/VerifyAction";
import Initiate from "../pages/Initiate";
import Congratulations from "../pages/Congratulations";





const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={DepositHome} />
      <Stack.Screen name="returns" component={ItemsReturn} />
      <Stack.Screen name='itemBrand' component={ItemBrand} />
      <Stack.Screen name='verifyAction' component={VerifyAction} />
      <Stack.Screen name='initiate' component={Initiate} />
      <Stack.Screen name='congratulations' component={Congratulations} />

    </Stack.Navigator>
  );
}

export default AppRoutes;
