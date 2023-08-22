import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  border-radius: 20px;
  padding: 40px 24px 24px 24px;
  margin-top: -20px;
`;

export const MealDetailsArea = styled.ScrollView`
  flex: 1;
`;

export const Meal = styled.Text`
  width: 100%;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    line-height: ${theme.LINE_HEIGHT * theme.FONT_SIZE.XL / 100}px;
  `}
`;

export const Description = styled.Text`
  width: 100%;
  margin-bottom: 24px;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: ${theme.LINE_HEIGHT * theme.FONT_SIZE.MD / 100}px;
  `}
`;

export const DateLabel = styled.Text`
  width: 100%;
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    line-height: ${theme.LINE_HEIGHT * theme.FONT_SIZE.SM / 100}px;
  `}
`;

export const DateTime = styled.Text`
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    line-height: ${theme.LINE_HEIGHT * theme.FONT_SIZE.MD / 100}px;
  `}
`;

export const ButtonsArea = styled.View`
  min-height: 110px;
  justify-content: space-between;
`;