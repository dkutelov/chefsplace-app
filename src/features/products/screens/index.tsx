import React, { useContext } from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { ProductCard } from "../components/product-card.component";
import { Product } from "../../../types/Product";
import { Theme } from "../../../types/Theme";
import { ProductsContext } from "../../../services/products/products.context";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const ProductList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})`
  flex: 1;
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

const Search = styled.View`
  padding: ${(props: { theme: Theme }) => props.theme.space[3]};
  background-color: ${(props: { theme: Theme }) =>
    props.theme.colors.bg.secondary};
`;

export const ProductListScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState<String>("");
  const { products, isLoading, error } = useContext(ProductsContext);
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
      <ProductList
        data={products}
        renderItem={ProductCard}
        keyExtractor={(item: Product) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeArea>
  );
};
