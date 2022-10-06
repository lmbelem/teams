import { Container, Content, Icon } from "./styles";
import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/HighLight";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma e taca a galera pra dentro"
        />

        <Button title="Criar" />
      </Content>
    </Container>
  );
}
