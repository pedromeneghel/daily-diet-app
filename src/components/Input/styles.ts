import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    min-height: 48px;
    max-height: 800px;
    background-color: ${theme.COLORS.BASE.WHITE};
    color: ${theme.COLORS.BASE.GRAY_1};
    border-style: solid;
    border-width: 1px;
    border-radius: 6px;
    border-color: ${theme.COLORS.BASE.GRAY_5};
    padding: 16px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};
`;
