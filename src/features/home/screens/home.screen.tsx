import { View, Text, ScrollView } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import CategoryListItem from "../../home/components/category-list/category-list-item.component";

import { IProps } from "../../home/components/category-list/category-list-item.component";
import mock from "./mock.json";

import { HeroBanner, HeroBannerImage, Categories } from "./home.styles";
import { K } from "../../../infrastructure/constants/";
import { Row } from "../../../components/row/row.component";

export const HomeScreen = () => {
  const categories = mock;
  return (
    <SafeArea>
      <ScrollView>
        <HeroBanner>
          <HeroBannerImage
            source={{
              uri: K.homeHeroImageUrl,
            }}
          />
        </HeroBanner>
        <Row title="Категории">
          <Categories>
            {categories.length &&
              categories.map((c) => <CategoryListItem key={c.id} item={c} />)}
          </Categories>
        </Row>
        <View>
          <Text>Категории</Text>
          <Text>Нови Продукти</Text>
          <Text>Контакти</Text>
        </View>
      </ScrollView>
    </SafeArea>
  );
};
