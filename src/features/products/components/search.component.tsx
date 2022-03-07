import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { HeaderContainer } from "./search.styles";
import { ProductsContext } from "../../../services/products/products.context";
import {
  FILTER_PRODUCTS_BY_KEYWORD,
  RESET_FILTERED_PRODUCTS,
} from "../../../services/products/products.action-types";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [isPristine, setIsPristine] = useState<boolean>(true);
  const { dispatch } = useContext(ProductsContext);

  const clearSearchResults = () => {
    dispatch({
      type: RESET_FILTERED_PRODUCTS,
    });
  };

  const onEditingFinished = () => {
    if (searchKeyword.length === 0) {
      return;
    }

    dispatch({
      type: FILTER_PRODUCTS_BY_KEYWORD,
      payload: { searchTerm: searchKeyword.toLowerCase() },
    });
  };

  const onInputChange = (text: string) => {
    if (isPristine) {
      setIsPristine(false);
    }
    setSearchKeyword(text);
  };

  useEffect(() => {
    if (!isPristine && searchKeyword.length === 0) {
      clearSearchResults();
    }
  }, [isPristine, searchKeyword]);

  return (
    <HeaderContainer>
      <Searchbar
        placeholder="Търси ..."
        value={searchKeyword}
        onSubmitEditing={onEditingFinished}
        onIconPress={onEditingFinished}
        onChangeText={onInputChange}
        autoComplete={false}
      />
    </HeaderContainer>
  );
};

export default Search;
