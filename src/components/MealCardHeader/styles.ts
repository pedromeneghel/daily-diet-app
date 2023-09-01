import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding-bottom: 8px;
  padding-top: 30px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_700};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;
