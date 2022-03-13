import { View, Text } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";

import { HeroBanner, HeroBannerImage } from "./home.styles";
import { K } from "../../../infrastructure/constants/";

export const HomeScreen = () => {
  return (
    <SafeArea>
      <HeroBanner>
        <HeroBannerImage
          source={{
            uri: K.homeHeroImageUrl,
          }}
        />
      </HeroBanner>
      <View>
        <Text>Банер, каросел</Text>
        <Text>Намалени, Промо продукти</Text>
        <Text>Цени</Text>
        <Text>Контакти</Text>
      </View>
    </SafeArea>
  );
};
