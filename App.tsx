import React from "react";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

// Context
import { ProductsContextProvider } from "./src/services/products/products.context";
import { CartContextProvider } from "./src/services/cart/cart.context";
import { WishlistContextProvider } from "./src/services/wishlist/wishlist.context";

// Navigation
import Navigation from "./src/navigation/app.navigator";

// Fonts
import {
  useFonts as usePTSans,
  PTSans_400Regular,
  PTSans_700Bold,
} from "@expo-google-fonts/pt-sans";

import {
  useFonts as useLato,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { LogBox } from "react-native";
import BootstrapData from "./BootstrapData";

export default function App() {
  const [ptsansLoaded] = usePTSans({
    PTSans_400Regular,
    PTSans_700Bold,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold,
  });

  if (!ptsansLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <ProductsContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <BootstrapData>
                <Navigation />
              </BootstrapData>
            </WishlistContextProvider>
          </CartContextProvider>
        </ProductsContextProvider>
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}

LogBox.ignoreLogs([
  "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
]);
