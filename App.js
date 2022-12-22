import { NavigationContainer } from "@react-navigation/native";
import { extendTheme, NativeBaseProvider, View } from "native-base";
import React, { useCallback } from "react";
import { Provider } from "react-redux";
import Navbar from "./src/components/Navbar";
import { store } from "./src/redux/stor";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme


const theme = extendTheme({
  fontConfig: {
    Roboto: {
      100: {
        normal: "Prompt-Light",
        italic: "Prompt-Italic",
      },
      200: {
        normal: "Prompt-Medium",
        italic: "Prompt-Medium",
      },
      300: {
        normal: "Prompt-Regular",
        italic: "Prompt-Regular",
      },
      400: {
        normal: "Prompt-Regular",
        italic: "Prompt-Regular",
      },
      500: {
        normal: "Poppins-Medium",
      },
      600: {
        normal: "Prompt-Regular",
        italic: "Prompt-Regular",
      },
        700: {
          normal: 'Prompt-SemiBold',
        },
        800: {
          normal: 'Prompt-Bold',
          italic: 'Prompt-BoldItalic',
        },
        900: {
          normal: 'Prompt-ExtraBold',
          italic: 'Prompt-BoldItalic',
        },
    },
  },

  // Make sure values below matches any of the keys in `fontConfig`
  fonts: {
    heading: "Prompt-Regular",
    body: "Prompt-Regular",
    mono: "Prompt-Regular",
  },
});


export default function App() {
  const [fontsLoaded] = useFonts({
    "Prompt-Regular": require("./assets/fonts/Prompt-Regular.ttf"),
    "Krona-One": require("./assets/fonts/KronaOne-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
      <View onLayout={onLayoutRootView}>
        <Provider store={store}>
          <NavigationContainer>
            
            <Navbar />
          </NavigationContainer>
        </Provider>
      </View>
    </NativeBaseProvider>
  );
}
