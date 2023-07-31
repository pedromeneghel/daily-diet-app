import { TouchableOpacity } from 'react-native';
import { Plus } from 'phosphor-react-native';
import styled, { css } from 'styled-components/native';

export type ButtonWidthStyleProps = 'FULL' | 'LIMITED';

type Props = {
  width: ButtonWidthStyleProps;
}

export const Container = styled(TouchableOpacity) <Props>`
  ${({ width }) => width === 'FULL' && css`
    flex: 1;
  `};
  flex-direction: row;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY_2};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.BASE.WHITE};
  `};
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => (
  {
    size: 13,
    color: theme.COLORS.BASE.WHITE
  }
))`
  margin-right: 10px;
`;
