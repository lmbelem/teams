//para pode levar par onde o componente por usado todos métodos, assim lá no Groups poderemos usar o OnPress()
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

//...rest é usado para passar todas as propriedades que não estão explicitas
// em Props (title, etc) e que estão em TouchableOpacityProps
export function GroupCard({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
