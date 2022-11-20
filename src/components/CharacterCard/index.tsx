import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  ContainerCard,
  CharactersRealName,
  CharacterName,
} from './styles';

interface CardProps {
  realName: string;
  fictionName: string;
  avatar: string;
}

const CharacterCard = ({realName, fictionName, avatar}: CardProps) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('details')}>
      <ContainerCard source={{uri: `${avatar}`}} resizeMode="cover">
        <CharactersRealName>{realName}</CharactersRealName>
        <CharacterName>{fictionName}</CharacterName>
      </ContainerCard>
    </Container>
  );
};

export {CharacterCard};
