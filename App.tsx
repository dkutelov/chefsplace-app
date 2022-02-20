import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { ProductListScreen } from "./src/features/products/screens/products.screen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductListScreen />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
