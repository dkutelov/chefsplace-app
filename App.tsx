import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { screenOptions } from "./src/components/utils/tab-icons";

import {
  useFonts as usePTSans,
  PTSans_400Regular,
} from "@expo-google-fonts/pt-sans";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import Navigation from "./src/navigation";

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

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
