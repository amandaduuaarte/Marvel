import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Container,
  ContainerShadow,
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
    <Container onPress={() => navigation.navigate('details', {avatar})}>
      <ContainerCard source={{uri: `${avatar}`}} resizeMode="cover">
        <ContainerShadow>
          <CharactersRealName>{realName}</CharactersRealName>
          <CharacterName>{fictionName}</CharacterName>
        </ContainerShadow>
      </ContainerCard>
    </Container>
  );
};

export {CharacterCard};
