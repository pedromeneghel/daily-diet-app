import { SectionList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
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
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.XS}px;
    color: ${theme.COLORS.BASE.GRAY_1};
    line-height: ${(theme.FONT_SIZE.XS * theme.LINE_HEIGHT) / 100}px;
  `};
  margin-bottom: 5px;
`;

export const MealsList = styled(SectionList)`
  width: 100%;
`;