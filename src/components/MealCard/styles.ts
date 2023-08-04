import { TouchableOpacity } from 'react-native';
import { Circle } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export type MealIsDietStyleProps = boolean;

type Props = {
  isDiet: MealIsDietStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.COLORS.BASE.GRAY_5};
  min-height: 49px;
  max-height: 49px;
  margin-bottom: 5px;
  padding: 10px;
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.M}px;
  `}
`;

export const Separator = styled.Text`
  color: ${({ theme }) => theme.COLORS.BASE.GRAY_4};
  margin: 0 10px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Icon = styled(Circle).attrs<Props>(({ theme, isDiet }) => (
  {
    size: 13,
    color: isDiet ? theme.COLORS.PRODUCT.GREEN_MID : theme.COLORS.PRODUCT.READ_MID,
    weight: 'fill'
  }
))`
  margin-right: 10px;
`;
