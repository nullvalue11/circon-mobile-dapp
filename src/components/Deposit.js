import { LinearGradient } from 'expo-linear-gradient'
import { Box, Button, Heading, Text } from 'native-base'
import React from 'react';
import AppRoutes from '../appRoutes/AppRoutes';
import MyStatusBar from './MyStatusBar';



export default function Deposit() {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#FDA618']}
      start={{ x: 0.9, y: 0.4 }}
      end={{ x: 0.9, y: 0.8 }}
      >
        <MyStatusBar />
    {/* Deposite header */}
    <Box h='100%' w={'100%'} p='6' >
      
      <Box w='100%' textAlign='center'>
      <Text color={'#000'} textAlign='center'>1 of 3</Text>
      <Heading size={'sm'} color={'#000'} textAlign='center' mt='2'>Select Activity</Heading>
      </Box>
    </Box>

    {/* Deposite Tabes */}
    {/* <Button onPress={()=>}>Click me</Button> */}
    </LinearGradient>
  )
}
