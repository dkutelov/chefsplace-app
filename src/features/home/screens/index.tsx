import { View, Text } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <View>
        <Text>Банер, каросел</Text>
        <Text>Намалени, Промо продукти</Text>
        <Text>Цени</Text>
        <Text>Контакти</Text>
      </View>
    </SafeArea>
  );
};
