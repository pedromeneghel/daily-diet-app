import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_7};
  padding: 24px;
`;

export const NewMeal = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const NeMealTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.BASE.GRAY_1};
    line-height: ${(theme.FONT_SIZE.SM * theme.LINE_HEIGHT) / 100}px;
  `};
  margin-bottom: 5px;
`;

