import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useCategorys} from '../../context/CategoriesContext';
import {api} from '../../services/api';

import {CharacterCard} from '../CharacterCard';
import {Container, ContainerCards, CategoryText, SeeMore} from './styles';

const GroupingType = () => {
  const {heros, antiHeros, villains, aliens, humans} = useCategorys();

  return (
    <Container>
      <ContainerCards style={{height: 45}}>
        <CategoryText>Heróis</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {heros &&
            heros.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Vilões</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {villains &&
            villains.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Anti-heróis</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {antiHeros &&
            antiHeros.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Alienígenas</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {aliens &&
            aliens.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Humanos</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {humans &&
            humans.map(character => (
              <CharacterCard key={character.id} character={character} />
            ))}
        </ScrollView>
      </ContainerCards>
    </Container>
  );
};

export {GroupingType};
