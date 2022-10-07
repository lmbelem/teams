import { TouchableOpacityProps } from "react-native";

import { Container, Icon } from "./styles";

type Props = {};

export function ButtonIcon({}: Props) {
  return (
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}
