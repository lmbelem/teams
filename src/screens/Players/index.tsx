import { useState } from "react";
import { FlatList } from "react-native";

import { Input } from "@components/Input";
import { Header } from "@components/Header";
import { Filter } from "@components/Filter";
import { Highlight } from "@components/HighLight";
import { ButtonIcon } from "@components/ButtonIcon";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["turma A", "turma B", "turma c"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item == team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>
    </Container>
  );
}
