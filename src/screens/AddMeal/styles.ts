import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
`;

export const Content = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.WHITE};
  border-radius: 20px;
  padding: 40px 24px 0px 24px;
  margin-top: -20px;
`;

export const Form = styled.View`
  flex: 1;
`;

export const OneColumnContainer = styled.View`
  width: 100%;
  min-height: 70px;
  margin-bottom: 24px;
`;

export const TwoColumnContainer = styled.View`
  width: 100%;
  min-height: 70px;
  margin-bottom: 24px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Container50 = styled.View`
  width: 47%;
  min-height: 70px;
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  width: 100%;
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.COLORS.BASE.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
