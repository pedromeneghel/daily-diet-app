import { TouchableOpacity } from 'react-native';
import { ArrowUpRight } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export type SummaryStatsStyleProps = 'GOOD' | 'BAD';

type Props = {
  type: SummaryStatsStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;
  border-radius: 8px;
  min-height: 102px;
  max-height: 102px;
  margin-top: 30px;
  align-items: flex-end;
  ${({ theme, type }) => (
    type === 'GOOD' ? css`
      background-color: ${theme.COLORS.PRODUCT.GREEN_LIGHT};
    ` : css`
      background-color: ${theme.COLORS.PRODUCT.READ_LIGHT};
    `
  )}
`;

export const Content = styled.View`
  width: 100%;
  height: 102px;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'GOOD' ? theme.COLORS.PRODUCT.GREEN_DARK : theme.COLORS.PRODUCT.READ_DARK,
}))`
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: -29px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;