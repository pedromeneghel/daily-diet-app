import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type HeaderTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: HeaderTypeStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  width: 100%;
  ${({ theme, type }) =>
    type === "SECONDARY" &&
    css`
      flex-direction: row;
      align-items: center;
      padding: 10px 24px 44px 24px;
      background-color: ${theme.COLORS.BASE.GRAY_7};
    `}
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BackButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BASE.GRAY_1,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  flex: 1;
  text-align: center;
`;
