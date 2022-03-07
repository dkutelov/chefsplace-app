import React from "react";
import { Searchbar } from "react-native-paper";

import { HeaderContainer } from "./search.styles";

const Search = () => {
  const [searchKeyword, setSearchKeyword] = React.useState<string>("");
  return (
    <HeaderContainer>
      <Searchbar
        placeholder="Търси ..."
        value={searchKeyword}
        onSubmitEditing={() => {
          //   search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
        autoComplete={false}
      />
    </HeaderContainer>
  );
};

export default Search;
