import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding-bottom: 8px;
  padding-top: 30px;
  background-color: #fff;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;