import { Circle } from "phosphor-react-native";
import { Text, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonWidthStyleProps = "FULL" | "LIMITED";
export type ButTonColorStyleProps =
  | "PRIMARY"
  | "ACTIVE_PRIMARY"
  | "SECONDARY"
  | "ACTIVE_SECONDARY"
  | "BASE"
  | "INVERSE_BASE";

type Props = {
  width: ButtonWidthStyleProps;
  color: ButTonColorStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  ${({ width }) =>
    width === "FULL" &&
    css`
      flex: 1;
    `};
  flex-direction: row;
  min-height: 50px;
  max-height: 50px;

  border-radius: 6px;
  justify-content: center;
  align-items: center;
  ${({ width }) =>
    width === "FULL" &&
    css`
      flex: 1;
    `};
  padding-left: 24px;
  padding-right: 24px;
  ${({ theme, color }) => {
    switch (color) {
      case "ACTIVE_PRIMARY":
        return `
          background-color: ${theme.COLORS.PRODUCT.GREEN_LIGHT};
          border-width: 1px;
          border-color: ${theme.COLORS.PRODUCT.GREEN_DARK};
        `;
      case "ACTIVE_SECONDARY":
        return `
          background-color: ${theme.COLORS.PRODUCT.READ_LIGHT};
          border-width: 1px;
          border-color: ${theme.COLORS.PRODUCT.READ_DARK};
        `;
      case "PRIMARY":
        return `
          background-color: ${theme.COLORS.BASE.GRAY_600};
        `;
      case "SECONDARY":
        return `
          background-color: ${theme.COLORS.BASE.GRAY_600};
        `;
      case "BASE":
        return `background-color: ${theme.COLORS.BASE.GRAY_200};`;
      case "INVERSE_BASE":
        return `
          background-color: ${theme.COLORS.BASE.WHITE};
          border-style: solid;
          border-width: 2px;
          border-color: ${theme.COLORS.BASE.GRAY_100};
        `;
    }
  }};
`;

export const Title = styled(Text)<Props>`
  ${({ theme, color }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${color === "BASE"
      ? theme.COLORS.BASE.WHITE
      : theme.COLORS.BASE.GRAY_100};
  `};
`;

export const PrimaryCircle = styled(Circle).attrs(({ theme }) => ({
  size: 10,
  color: theme.COLORS.PRODUCT.GREEN_DARK,
  weight: "fill",
}))`
  margin-right: 8px;
`;

export const SecondaryCircle = styled(Circle).attrs(({ theme }) => ({
  size: 10,
  color: theme.COLORS.PRODUCT.READ_DARK,
  weight: "fill",
}))`
  margin-right: 8px;
`;
