import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { ProductCard } from "../components/product-card.component";
import { Product, AvailabilityStatus } from "../../../types/Product";
import { Theme } from "../../../types/Theme";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const ProductList = styled.View`
  flex: 1;
  background-color: white;
  padding: 18px;
`;

const Search = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
`;

const product: Product = {
  name: "SUNSHINE CHILI ПИКАНТЕН СОС С ЧИЛИ И ЧЕСЪН 1 Л",
  images: [
    "http://chefsplace.bg/261-tm_thickbox_default/sunshine-chili-pikanten-sos-s-chili-i-chesn-1-l.jpg",
  ],
  price: 1952,
  shortDescription:
    "Knorr автентична азиатска серия от продукти, за директна употреба и приложения за ястиия на уок, месо, нудълс и други. Пикантен сос с чили и чесън.",
  availabilityStatus: AvailabilityStatus.OnStock,
};

export const ProductListScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<String>("");

  const onChangeSearch = (query: String) => setSearchQuery(query);

  return (
    <SafeArea>
      <Search>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          editable
          maxLength={40}
          value={searchQuery}
        />
      </Search>
      <ProductList>
        <ProductCard product={product} />
      </ProductList>
    </SafeArea>
  );
};
