import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import {
  useFonts as usePTSans,
  PTSans_400Regular,
} from "@expo-google-fonts/pt-sans";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { ProductListScreen } from "./src/features/products/screens/products.screen";

export default function App() {
  const [ptsansLoaded] = usePTSans({
    PTSans_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!ptsansLoaded || !latoLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <ProductListScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
