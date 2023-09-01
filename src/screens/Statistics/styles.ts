import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_700};
`;

export const Content = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_700};
  border-radius: 20px;
  padding: 40px 24px 24px 24px;
  margin-top: -20px;
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  margin-bottom: 23px;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const GeneralStats = styled.View`
  width: 100%;
  min-height: 89px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_600};
  margin-bottom: 12px;
`;

export const TwoColumnsContainer = styled.View`
  width: 100%;
  min-height: 107px;
  flex-direction: row;
  justify-content: space-between;
`;

export const MealsInDietContainer = styled.View`
  width: 48.5%;
  min-height: 107px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.GREEN_LIGHT};
  margin-bottom: 12px;
  padding: 15px;
`;

export const MealsOutDietContainer = styled.View`
  width: 48.5%;
  min-height: 107px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.PRODUCT.READ_LIGHT};
  margin-bottom: 12px;
  padding: 15px;
`;

export const StatsIndicator = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    line-height: ${(theme.LINE_HEIGHT * theme.FONT_SIZE.XL) / 100}px;
  `}
`;

export const StatsText = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    line-height: ${(theme.LINE_HEIGHT * theme.FONT_SIZE.SM) / 100}px;
  `}
`;
