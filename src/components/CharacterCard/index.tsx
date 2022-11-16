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
  // imgSource: string;
}
const CardBackground = '../../assets/spider-man.png';

const CharacterCard = ({realName, fictionName}: CardProps) => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('details')}>
      <ContainerCard source={require(CardBackground)} resizeMode="cover">
        <CharactersRealName>{realName}</CharactersRealName>
        <CharacterName>{fictionName}</CharacterName>
      </ContainerCard>
    </Container>
  );
};

export {CharacterCard};
