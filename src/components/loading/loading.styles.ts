import styled from "styled-components/native";
import { ActivityIndicator } from "react-native-paper";

export const Loading = styled(ActivityIndicator)`
  margin-left: -${(props: { size: number }) => props.size / 2}px;
`;

export const LoadingContainer = styled.View`
  position: absolute;
  z-index: 10;
  top: 50%;
  left: 50%;
`;

export const CentertedLoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height}px;
`;
