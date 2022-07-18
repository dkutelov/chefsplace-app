import React from "react";
import { Platform, Linking, View } from "react-native";
import { List } from "react-native-paper";

import { SafeArea } from "@components/utils/safe-area.component";
import { ProfileContainer } from "./profile.styles";
import { theme } from "@infrastructure/theme";

const itemStyling = {
  // borderWidth: 1,
  // borderColor: theme.colors.ui.quaternary,
  marginBottom: 8,
  padding: 12,
  backgroundColor: theme.colors.bg.primary,
};

export const ContactScreen = () => {
  const dialCall = (number: string) => {
    let phoneNumber = "";
    if (Platform.OS === "android") {
      phoneNumber = `tel:${number}`;
    } else {
      phoneNumber = `telprompt:${number}`;
    }
    Linking.openURL(phoneNumber);
  };

  const handleOpenLink = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch {
      throw new Error("URI cant open:" + url);
    }
  };

  return (
    <SafeArea>
      <View>
        <List.Section>
          <List.Item
            title="0882400573"
            left={(props) => (
              <List.Icon {...props} color="#4267B2" icon="phone" />
            )}
            onPress={() => {
              dialCall("0882400573");
            }}
            style={itemStyling}
            right={(props) => (
              <List.Icon
                {...props}
                color={theme.colors.ui.secondary}
                icon="menu-right"
              />
            )}
          />
          <List.Item
            title="Пишете ни съобщение през Chefsplace.bg Facebook страницата"
            titleNumberOfLines={5}
            left={(props) => (
              <List.Icon {...props} color="#4267B2" icon="facebook" />
            )}
            onPress={() => {
              handleOpenLink("https://www.facebook.com/chefsplacebg/");
            }}
            style={itemStyling}
            right={(props) => (
              <List.Icon
                {...props}
                color={theme.colors.ui.secondary}
                icon="menu-right"
              />
            )}
          />
          <List.Item
            title="гр. София, Индустриална зона Модерно предградие, ул. Обелско шосе № 7"
            titleNumberOfLines={5}
            left={(props) => (
              <List.Icon {...props} color="#4267B2" icon="map" />
            )}
            style={itemStyling}
          />
        </List.Section>
      </View>
    </SafeArea>
  );
};
