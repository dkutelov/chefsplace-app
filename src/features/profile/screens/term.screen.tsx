import React from "react";
import { FlatList } from "react-native";

import { SafeArea } from "@components/utils/safe-area.component";
import { ProfileContainer } from "./profile.styles.ts";
import { termsContent } from "../components/terms-and-conditions/data.ts";
import { Section } from "../components/terms-and-conditions/section.components.tsx";
import { TermSection } from "@types/profile";

export const TermScreen = () => {
  return (
    <SafeArea>
      <ProfileContainer>
        <FlatList
          data={termsContent}
          renderItem={({ item }: TermSection) => <Section data={item} />}
          keyExtractor={(_, index: number) => `${index}`}
          showsVerticalScrollIndicator={false}
        />
      </ProfileContainer>
    </SafeArea>
  );
};
