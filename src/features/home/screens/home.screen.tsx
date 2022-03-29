import { ScrollView } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { Dimensions } from "react-native";

import mock from "./mock.json";
import { K } from "../../../infrastructure/constants/";

// Components
import { Row } from "../../../components/row/row.component";
import CategoryListItem from "../../home/components/category-list/category-list-item.component";

// Styles
import {
  HeroBanner,
  HeroBannerImage,
  Categories,
  SecondaryBanner,
  SecondaryBannerImage,
} from "./home.styles";
import { ProductCardSmall } from "../../../components/product-card-small/product-card-small.component";
import { useContext } from "react";
import { ProductsContext } from "../../../services/products/products.context";

const win = Dimensions.get("window");
const width = win.width - 16;
export const HomeScreen = () => {
  const categories = mock;
  const { products } = useContext(ProductsContext);

  const newProducts = products.slice(-4);
  return (
    <SafeArea>
      <ScrollView>
        <HeroBanner>
          <HeroBannerImage
            source={{
              uri: K.homeHeroImageUrl,
            }}
            style={{ width, height: 549 * (win.width / 597) }}
          />
        </HeroBanner>
        <Row title="Категории">
          <Categories>
            {categories.length &&
              categories.map((c) => <CategoryListItem key={c.id} item={c} />)}
          </Categories>
        </Row>
        <SecondaryBanner>
          <SecondaryBannerImage
            source={require("../../../../assets/images/ufs-banner.png")}
            style={{ width, height: 162 * (win.width / 1275) }}
          />
        </SecondaryBanner>
        <Row title="Нови Продукти">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newProducts.map((product) => (
              <ProductCardSmall
                item={product}
                key={product.id}
                isSimilarProduct={false}
              />
            ))}
          </ScrollView>
        </Row>
        <Row title="Популярни Продукти">
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {newProducts.map((product) => (
              <ProductCardSmall
                item={product}
                key={product.id}
                isSimilarProduct={false}
              />
            ))}
          </ScrollView>
        </Row>
      </ScrollView>
    </SafeArea>
  );
};
