import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
// import { WagmiConfig } from "wagmi";
// import { mainnet, polygon, arbitrum } from "viem/chains";
// import {
//   createWeb3Modal,
//   defaultWagmiConfig,
//   Web3Modal,
// } from "@web3modal/wagmi-react-native";

import React from "react";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "VerificationProduct",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}
function RootLayoutNav() {
  // const projectId = "dace2ce5fa77568df22525a38edf07e8";

  // const metadata = {
  //   name: "Radix",
  //   description: "Radix",
  //   url: "https://web3modal.com",
  //   icons: ["https://avatars.githubusercontent.com/u/37784886"],
  //   redirect: {
  //     native: "YOUR_APP_SCHEME://",
  //     universal: "YOUR_APP_UNIVERSAL_LINK.com",
  //   },
  // };

  // const chains = [mainnet, polygon];

  // const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

  // createWeb3Modal({
  //   projectId,
  //   chains,
  //   wagmiConfig,
  //   enableAnalytics: false,
  //   defaultChain: polygon,
  // });

  return (
    <ThemeProvider value={DefaultTheme}>
      {/* <WagmiConfig config={wagmiConfig}> */}
        <Stack initialRouteName="VerificationProduct">
          {/* <Stack.Screen name="ConnectWallet" options={{ headerShown: false }} /> */}
          <Stack.Screen name="VerificationProduct" options={{headerShown : false}}/>
        </Stack>
      {/* </WagmiConfig> */}
    </ThemeProvider>
  );
}
