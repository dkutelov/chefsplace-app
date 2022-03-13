import { View, Text } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import CategoryListItem from "../../home/components/category-list/category-list-item.component";

import { IProps } from "../../home/components/category-list/category-list-item.component";
import mock from "./mock.json";

import { HeroBanner, HeroBannerImage, Categories } from "./home.styles";
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

      <Categories
        data={mock}
        renderItem={(item: IProps) => <CategoryListItem item={item.item} />}
        showsVerticalScrollIndicator={false}
      />
      <View>
        <Text>Категории</Text>
        <Text>Нови Продукти</Text>
        <Text>Контакти</Text>
      </View>
    </SafeArea>
  );
};
