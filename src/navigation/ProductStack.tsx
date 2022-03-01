import React, { Dispatch, SetStateAction } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import { ProductListScreen } from "../features/products/screens/products.screen";
import { ProductDetailScreenWrapper } from "../features/product-detail/screens/product-detail.screen";

const Stack = createNativeStackNavigator();

interface HeaderComponentProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const HeaderComponent = ({
  searchValue,
  setSearchValue,
}: HeaderComponentProps) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.headerContainer}>
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={styles.textInput}
          placeholder="Search..."
          value={searchValue}
          onChangeText={setSearchValue}
        />
      </View>
    </SafeAreaView>
  );
};

export const ProductStack = () => {
  const [searchValue, setSearchValue] = React.useState<string>("");
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProductsScreen"
        component={ProductListScreen}
        options={{
          title: "Home",
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailScreenWrapper}
        options={{
          title: "Детайли",
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  root: {},
  headerContainer: {
    margin: 10,
    padding: 5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    height: 40,
    marginLeft: 10,
  },
});
