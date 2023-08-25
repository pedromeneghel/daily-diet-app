import * as Icon from "phosphor-react-native";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

import {
  ButTonColorStyleProps,
  ButtonWidthStyleProps,
  Container,
  PrimaryCircle,
  SecondaryCircle,
  Title,
} from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  icon?: keyof typeof Icon | null;
  color: ButTonColorStyleProps;
  width?: ButtonWidthStyleProps;
};

export function Button({
  title,
  icon,
  width = "FULL",
  color = "BASE",
  ...rest
}: Props) {
  const { COLORS } = useTheme();
  let CustomIcon: any;

  if (icon) {
    CustomIcon = Icon[icon];
  }

  return (
    <Container color={color} width={width} {...rest}>
      {CustomIcon && (
        <CustomIcon
          size={13}
          style={{ marginRight: 10 }}
          color={
            color === "INVERSE_BASE" ? COLORS.BASE.GRAY_1 : COLORS.BASE.WHITE
          }
        />
      )}

      {(color === "PRIMARY" || color === "ACTIVE_PRIMARY") && <PrimaryCircle />}
      {(color === "SECONDARY" || color === "ACTIVE_SECONDARY") && (
        <SecondaryCircle />
      )}

      <Title width={width} color={color}>
        {title}
      </Title>
    </Container>
  );
}
