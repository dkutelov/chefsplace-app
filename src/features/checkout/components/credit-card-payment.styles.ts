import styled from "styled-components/native";
import { Theme } from "../../../types/Theme";
import { colors } from "@infrastructure/theme/colors";

import { CardField } from "@stripe/stripe-react-native";

export const CreditCardField = styled(CardField).attrs({
  postalCodeEnabled: false,
  placeholders: {
    number: "1234",
    expiration: "ММ/ГГ",
  },
})`
  width: 100%;
  height: ${(props: { theme: Theme }) => props.theme.space[4]};
  margin: ${(props: { theme: Theme }) => props.theme.space[2]} 0;
`;
