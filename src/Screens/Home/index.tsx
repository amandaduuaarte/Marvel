import React from 'react';
import {Container, TextsContainer, SubTitle, Title, TypeName} from './styles';

import {Header} from './Components/Header';
import {CharacterType} from './Components/CharacterType';

const Home = () => {
  return (
    <Container>
      <Header />

      <TextsContainer>
        <SubTitle> Bem vindo ao Marvel Heroes </SubTitle>
        <Title>Escolha o seu personagem</Title>
      </TextsContainer>

      <CharacterType />
    </Container>
  );
};

export default Home;
