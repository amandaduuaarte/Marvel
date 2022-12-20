import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {api} from '../../services/api';
import {
  Container,
  ContainerShadow,
  ContainerCard,
  CharactersRealName,
  CharacterName,
} from './styles';

interface CharacterProps {
  id: string;
  alterEgo: string;
  fictionname: string;
  avatar: string;
  biography?: string;
}
interface CardProps {
  character: CharacterProps;
}

const CharacterCard = ({character}: CardProps) => {
  const navigation = useNavigation();
  const {avatar, biography, id} = character;

  return (
    <Container
      onPress={() =>
        navigation.navigate('details', {avatar, skillsId: id, character})
      }>
      <ContainerCard source={{uri: `${character.avatar}`}} resizeMode="cover">
        <ContainerShadow>
          <CharactersRealName>{character.alterEgo}</CharactersRealName>
          <CharacterName>{character.fictionname}</CharacterName>
        </ContainerShadow>
      </ContainerCard>
    </Container>
  );
};

export {CharacterCard};
