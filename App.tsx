import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { ProductsContextProvider } from "./src/services/products/products.context";
import { CartContextProvider } from "./src/services/cart/cart.context";

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
import Navigation from "./src/navigation";

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

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <ProductsContextProvider>
        <CartContextProvider>
          <Navigation />
        </CartContextProvider>
      </ProductsContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
