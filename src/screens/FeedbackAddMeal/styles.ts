import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export type TitleColorStyleProps = 'GOOD' | 'BAD';

type Props = {
  color: TitleColorStyleProps
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
`;

export const Title = styled(Text) <Props>`
  margin-bottom: 8px;
  ${({ theme, color }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${color === "BAD" ? theme.COLORS.PRODUCT.READ_DARK : theme.COLORS.PRODUCT.GREEN_DARK};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    text-align: center;
  `};
`;

export const Negrito = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Logo = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 40px;
  margin-bottom: 32px;
`;