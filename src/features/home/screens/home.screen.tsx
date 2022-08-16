import { useContext, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, useWindowDimensions } from "react-native";
import { SafeArea } from "@components/utils/safe-area.component";
import { CentertedLoadingIndicator } from "@components/loading/activity-indicator.component";

import { K } from "@infrastructure/constants/";

// Components
import { Row } from "@components/row/row.component";
import CategoryListItem from "../../home/components/category-list/category-list-item.component";

// Styles
import {
  HeroBanner,
  HeroBannerImage,
  Categories,
  SecondaryBanner,
  SecondaryBannerImage,
} from "./home.styles";
import { ProductCardSmall } from "@components/product-card-small/product-card-small.component";
import { ProductsContext } from "@services/products/products.context";
import { colors } from "@infrastructure/theme/colors";
import getAllProducts from "@infrastructure/api/products/get-all-products";
import { getConfig } from "@infrastructure/api/config";
import { ProductList } from "@types/Product";

export const HomeScreen = () => {
  const { width } = useWindowDimensions();
  const [promoProducts, setPromoProducts] = useState<Array<ProductList> | null>(
    null
  );
  const { products, categories, isLoading, dispatch, error } =
    useContext(ProductsContext);
  const [errorLoadingCategories, setErrorLoadingCategories] = useState<
    string | null
  >(null);
  const newProducts = products
    ? products.slice(-K.newAndPromoProductsCount)
    : [];
  const config = getConfig();
  const { navigate } = useNavigation();

  useEffect(() => {
    (async () => {
      try {
        const promotionalProducts = await getAllProducts(config, "promo");
        setPromoProducts(
          promotionalProducts.slice(0, K.newAndPromoProductsCount)
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    if (error !== "") {
      navigate("ServerError", { error });
    }
  }, [error]);

  return (
    <SafeArea>
      <ScrollView>
        <HeroBanner>
          <HeroBannerImage
            source={{
              uri: K.homeHeroImageUrl,
            }}
            style={{ width: width - 16, height: 549 * (width / 597) }}
          />
        </HeroBanner>
        <Row title="Категории">
          <Categories>
            {!categories || categories.length === 0 ? (
              <CentertedLoadingIndicator
                size={32}
                color={colors.ui.primary}
                height={300}
              />
            ) : (
              <>
                {categories?.length > 0
                  ? categories.map((c) => (
                      <CategoryListItem key={c.id} item={c} />
                    ))
                  : null}
              </>
            )}
            {errorLoadingCategories && (
              <Text variant="body">{errorLoadingCategories}</Text>
            )}
          </Categories>
        </Row>
        <SecondaryBanner>
          <SecondaryBannerImage
            source={require("../../../../assets/images/ufs-banner.png")}
            style={{ width: width - 16, height: 162 * (width / 1275) }}
          />
        </SecondaryBanner>
        <Row title="Нови Продукти">
          {!newProducts || newProducts.length === 0 ? (
            <CentertedLoadingIndicator
              size={32}
              color={colors.ui.primary}
              height={300}
            />
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {newProducts.map((product) => (
                <ProductCardSmall
                  item={product}
                  key={product.id}
                  isSimilarProduct={false}
                />
              ))}
            </ScrollView>
          )}
        </Row>
        <Row title="Продукти На Промоция">
          {!promoProducts || promoProducts.length === 0 ? (
            <CentertedLoadingIndicator
              size={32}
              color={colors.ui.primary}
              height={300}
            />
          ) : (
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {promoProducts.map((product) => (
                <ProductCardSmall
                  item={product}
                  key={product.id}
                  isSimilarProduct={false}
                />
              ))}
            </ScrollView>
          )}
        </Row>
      </ScrollView>
    </SafeArea>
  );
};
