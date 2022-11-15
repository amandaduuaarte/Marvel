import React from 'react';
import {Container, TextsContainer, SubTitle, Title, TypeName} from './styles';

import {Header} from './Components/Header';
import {CharacterType} from './Components/CharacterType';
import {GroupingType} from '../../components/GroupingType';
import {ScrollView} from 'react-native';

const Home = () => {
  return (
    <Container>
      <Header />

      <TextsContainer>
        <SubTitle> Bem vindo ao Marvel Heroes </SubTitle>
        <Title>Escolha o seu personagem</Title>
      </TextsContainer>
      <CharacterType />

      <ScrollView showsVerticalScrollIndicator={false}>
        <GroupingType title="Heróis" />
        <GroupingType title="Vilões" />
      </ScrollView>
    </Container>
  );
};

export default Home;
