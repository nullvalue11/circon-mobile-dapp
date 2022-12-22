import { LinearGradient } from 'expo-linear-gradient';
import { HStack, Button, ArrowBackIcon, Text,Box } from 'native-base';
import { StyleSheet } from 'react-native'
import React from 'react';

export default function ScannerHeader({navigation}) {
  return (
    <LinearGradient
      colors={['#FFFFFF', '#FECE4E']}
      start={{ x: 0.2, y: -0.2 }}
      end={{ x: 0.2, y: 1 }}
      style={{ height: 100 }}>
      <HStack h={100} justifyContent='space-between' alignItems='flex-end' pb='5' w='100%' px={5}>
        <Button onPress={() => navigation.navigate('itemBrand')} rounded={10} h='44px' w='45' bg='#fff'  >
          <ArrowBackIcon size='4' mt='0.5' color='#000' />
        </Button>
        <Box style={StyleSheet.headerStyle}>
        <Text color={"#000"} textAlign="center" fontFamily={'Prompt-Regular'}>
            3 of 3
          </Text>
        <Text style={{
           fontWeight:'bold',
           fontSize:16,
          //  color:'red',
          width:'100%',
          marginHorizontal:'auto',
          textAlign:'center'
        }}>Item Return</Text>
        <Text>Verifying activity</Text>
        </Box>

        <Box w='45' />
      </HStack>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    // background: 'linear-gradient(360deg, #FFFFFF 0%, #FECE4E 100%)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  heading1:{
    fontWeight:'900',
    fontSize:16,
    color:'red',
    marginTop:20
  },
  absoluteFillObject: {
    height: 500
  }
});
