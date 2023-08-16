import { ArrowLeft } from 'phosphor-react-native';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

export type HeaderTypeStyleProps = 'GOOD' | 'BAD';

type Props = {
  type: HeaderTypeStyleProps;
}

export const Container = styled(SafeAreaView) <Props>`
  width: 100%;
  min-height: 200px;
  padding: 10px 24px 44px 24px;
  ${({ theme, type }) => css`
    background-color: ${type === 'GOOD' ? theme.COLORS.PRODUCT.GREEN_LIGHT : theme.COLORS.PRODUCT.READ_LIGHT};
  `}
`;

export const Content = styled.View`
  flex: 1;
`;

export const BackButton = styled(TouchableOpacity)`
  height: 24px;
  width: 24px;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => (
  {
    size: 24,
    color: type === "GOOD" ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.READ_DARK,
  }
))``;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  margin-bottom: 5px;
  ${({ theme }) => css`
    line-height: ${theme.LINE_HEIGHT * theme.FONT_SIZE.XXL / 100}px;
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`;

export const Subtitle = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    line-height: ${theme.LINE_HEIGHT * theme.FONT_SIZE.SM / 100}px;
  `}
`;