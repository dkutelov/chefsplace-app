import styled from "styled-components/native";
import { Theme } from "../../types/Theme";

const defaultTextStyles = (theme: Theme) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: Theme): string => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: Theme): string => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: Theme): string => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: Theme): string => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: Theme): string => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants: { [key: string]: (theme: Theme) => {} } = {
  body,
  label,
  caption,
  error,
  hint,
};

export const Text = styled.Text`
  ${({ theme }: { theme: Theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }: { variant: string; theme: Theme }) =>
    variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
