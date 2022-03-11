import React, { useState } from "react";
import { List } from "react-native-paper";

import {
  AccordionContainer,
  DescriptionContent,
} from "./description-accordion.styles";
import { colors } from "../../../../infrastructure/theme/colors";

interface IProps {
  description: {
    content?: string;
    ingredients?: string;
    advantages?: string;
    storage?: string;
    nutritionValues?: { [key: string]: string }[];
  };
}

const AccordionItemStyle = {
  backgroundColor: colors.bg.tertiary,
};

export const DescriptionAccordion = ({ description }: IProps) => {
  const [ingredientExpanded, setIngredientExpanded] = useState(false);
  const [advantagesExpanded, setAdvantagesExpanded] = useState(false);
  const [storageExpanded, setStorageExpanded] = useState(false);
  const [nutritionValueExpanded, setNutritionValueExpanded] = useState(false);
  return (
    <AccordionContainer>
      {description.ingredients && (
        <List.Accordion
          style={AccordionItemStyle}
          theme={{ colors: { primary: colors.ui.primary } }}
          title="Съставки"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={ingredientExpanded}
          onPress={() => setIngredientExpanded(!ingredientExpanded)}
        >
          <DescriptionContent>{description?.ingredients}</DescriptionContent>
        </List.Accordion>
      )}
      {description.ingredients && (
        <List.Accordion
          style={AccordionItemStyle}
          theme={{ colors: { primary: colors.ui.primary } }}
          title="Предимства"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={advantagesExpanded}
          onPress={() => setAdvantagesExpanded(!advantagesExpanded)}
        >
          <DescriptionContent>{description?.advantages}</DescriptionContent>
        </List.Accordion>
      )}
      {description.ingredients && (
        <List.Accordion
          style={AccordionItemStyle}
          theme={{ colors: { primary: colors.ui.primary } }}
          title="Съхранение"
          left={(props) => <List.Icon {...props} icon="store" />}
          expanded={storageExpanded}
          onPress={() => setStorageExpanded(!storageExpanded)}
        >
          <DescriptionContent>{description?.storage}</DescriptionContent>
        </List.Accordion>
      )}
    </AccordionContainer>
  );
};
