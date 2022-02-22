import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types/Navigation";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              TabOneScreen: "Начало",
            },
          },
          Products: {
            screens: {
              TabTwoScreen: "Продукти",
            },
          },
          Cart: {
            screens: {
              TabThreeScreen: "Количка",
            },
          },
          Profile: {
            screens: {
              TabFourScreen: "Профил",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
