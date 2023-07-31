import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(ArrowLeft).attrs(({ theme }) => (
  {
    size: 32,
    color: theme.COLORS.PRODUCT.GREEN_DARK
  }
))``;