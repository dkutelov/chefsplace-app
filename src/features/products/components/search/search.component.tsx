import React, { useContext, useEffect, useState } from "react";
import { Searchbar } from "react-native-paper";

import { HeaderContainer } from "./search.styles";
import { ProductsContext } from "@services/products/products.context";
import {
  RESET_SEARCH_TERM,
  SET_SEARCH_TERM,
} from "@services/products/products.action-types";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [isPristine, setIsPristine] = useState<boolean>(true);
  const { dispatch } = useContext(ProductsContext);

  const clearSearchResults = () => {
    dispatch({
      type: RESET_SEARCH_TERM,
    });
  };

  const onEditingFinished = () => {
    if (searchKeyword.length === 0) {
      return;
    }

    dispatch({
      type: SET_SEARCH_TERM,
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
