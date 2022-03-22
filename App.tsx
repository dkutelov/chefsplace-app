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
      <ProductsContextProvider>
        <CartContextProvider>
          <WishlistContextProvider>
            <Navigation />
          </WishlistContextProvider>
        </CartContextProvider>
      </ProductsContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
