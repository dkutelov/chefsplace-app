import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

import { ProductListScreen } from "./src/features/products/screens/products.screen";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Chefsplace!</Text>
        <ProductListScreen />
        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
