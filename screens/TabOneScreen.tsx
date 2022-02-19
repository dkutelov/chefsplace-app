import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

import { ProductCard } from "../src/features/products/components/porduct-card.component";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <ProductCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
