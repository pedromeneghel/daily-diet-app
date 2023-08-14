import { SectionList, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  padding: 24px;
`;

export const NewMeal = styled.View`
  width: 100%;
  min-height: 79px;
  max-height: 79px;
  margin-top: 40px;
`;

export const NeMealTitle = styled.Text`
  ${({ theme }) => css`
    background-color: ${theme.COLORS.BASE.GRAY_7};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.BASE.GRAY_1};
  `};
  margin-bottom: 8px;
`;

export const MealsList = styled(SectionList)`
  width: 100%;
`;