import { BarCodeScanner } from "expo-barcode-scanner";
import { StatusBar } from "expo-status-bar";
import { Box, Button, HStack } from "native-base";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import ScannerHeader from "./ScannerHeader";

// bg={`${activeTab === item.pathName ? '#FDA618': "transparent"}`}

export default function App() {
  const dispatch = useDispatch();
  const [hasPermission, setHasPermission] = React.useState(false);
  const [scanData, setScanData] = React.useState();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanData(data);
    console.log(`Data: ${data}`);
    console.log(`Type: ${type}`);
  };

  return (
    <Box style={styles.container}>
      <ScannerHeader />

      {/* <Box style={{ backgroundColor:'red', paddingTop:0 }}> */}
      <BarCodeScanner
        style={{ height: "90.5%", width: "100%" }}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      {/* </Box> */}
      {scanData && (
        <Box position="absolute" bg='#fff' pt='20' top={0} bottom={0} left={0} right={0}>
          <HStack justifyContent="center" alignItems="center" h='100%'>
            <Box >

            <Text>scan result: {scanData}</Text>
            
            <Button
              onPress={() => setScanData(undefined)}
            >Scan Again?</Button>
            </Box>
          </HStack>
        </Box>
      )}
      <StatusBar style="auto" />
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    // background: 'linear-gradient(360deg, #FFFFFF 0%, #FECE4E 100%)',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  absoluteFillObject: {
    // flex:1,
    top: 0,
    position: "absolute",
  },
});
