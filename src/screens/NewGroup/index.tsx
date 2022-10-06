import { Container, Content, Icon } from "./styles";

import { Input } from "@components/Input";
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
        <Input />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
