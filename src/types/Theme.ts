export interface Theme {
  colors: {
    [key: string]: { [key: string]: string };
  };
  space: { [key: string]: string };
  lineHeights: { [key: string]: string };
  sizes: string[];
  fonts: { [key: string]: string };
  fontSizes: { [key: string]: string };
  fontWeights: { [key: string]: number };
}
