import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type HeaderTypeStyleProps = "LOGO" | "BASE" | "GOOD" | "BAD";

type Props = {
  type: HeaderTypeStyleProps;
};

export const Container = styled(SafeAreaView)<Props>`
  width: 100%;
  ${({ type }) =>
    type !== "LOGO" &&
    css`
      flex-direction: row;
      align-items: center;
      padding: 10px 24px 44px 24px;
    `},
  ${({ theme, type }) =>
    type === "LOGO" &&
    css`
      background-color: ${theme.COLORS.BASE.GRAY_700};
    `};
  ${({ theme, type }) =>
    type === "BASE" &&
    css`
      background-color: ${theme.COLORS.BASE.GRAY_500};
    `};
  ${({ theme, type }) =>
    type === "BAD" &&
    css`
      background-color: ${theme.COLORS.PRODUCT.READ_LIGHT};
    `};
  ${({ theme, type }) =>
    type === "GOOD" &&
    css`
      background-color: ${theme.COLORS.PRODUCT.GREEN_LIGHT};
    `};
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const Profile = styled.Image`
  width: 40px;
  height: 40px;
`;

export const DefaultContent = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const BackButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.BASE.GRAY_100,
}))``;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `};
  flex: 1;
  text-align: center;
`;
