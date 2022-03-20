import { View, Text, ScrollView } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";

import mock from "./mock.json";
import { K } from "../../../infrastructure/constants/";

// Components
import { Row } from "../../../components/row/row.component";
import CategoryListItem from "../../home/components/category-list/category-list-item.component";

// Styles
import { HeroBanner, HeroBannerImage, Categories } from "./home.styles";

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
          <Text>Нови Продукти</Text>
          <Text>Контакти</Text>
        </View>
      </ScrollView>
    </SafeArea>
  );
};
