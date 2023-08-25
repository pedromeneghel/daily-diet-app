import { TouchableOpacityProps } from "react-native";

import {
  Container,
  Content,
  Icon,
  Subtitle,
  SummaryStatsStyleProps,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  subtitle: string;
  type?: SummaryStatsStyleProps;
};

export function SummaryStats({
  title,
  subtitle,
  type = "GOOD",
  ...rest
}: Props) {
  return (
    <Container type={type} {...rest}>
      <Icon type={type} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Content>
    </Container>
  );
}
