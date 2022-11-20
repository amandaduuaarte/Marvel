import React, {useEffect, useState} from 'react';
import {FlatList, ScrollView} from 'react-native';
import {api} from '../../services/api';

import {CharacterCard} from '../CharacterCard';
import {Container, ContainerCards, CategoryText, SeeMore} from './styles';

const GroupingType = () => {
  const [charactersGroup, setCharactersGroup] = useState<any>();

  useEffect(() => {
    api
      .get('/characters/categories')
      .then(response => {
        setCharactersGroup(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <Container>
      <ContainerCards style={{height: 45}}>
        <CategoryText>Heróis</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {charactersGroup &&
            charactersGroup.categories.hero.map(character => (
              <CharacterCard
                realName={character.alterEgo}
                fictionName={character.fictionname}
                avatar={character.avatar}
              />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Vilões</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {charactersGroup &&
            charactersGroup.categories.villain.map(character => (
              <CharacterCard
                realName={character.alterEgo}
                fictionName={character.fictionname}
                avatar={character.avatar}
              />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Anti-Heróis</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {charactersGroup &&
            charactersGroup.categories.antiHero.map(character => (
              <CharacterCard
                realName={character.alterEgo}
                fictionName={character.fictionname}
                avatar={character.avatar}
              />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Alienígenas</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {charactersGroup &&
            charactersGroup.categories.alien.map(character => (
              <CharacterCard
                realName={character.alterEgo}
                fictionName={character.fictionname}
                avatar={character.avatar}
              />
            ))}
        </ScrollView>
      </ContainerCards>

      <ContainerCards style={{height: 45}}>
        <CategoryText>Humanos</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {charactersGroup &&
            charactersGroup.categories.human.map(character => (
              <CharacterCard
                realName={character.alterEgo}
                fictionName={character.fictionname}
                avatar={character.avatar}
              />
            ))}
        </ScrollView>
      </ContainerCards>
    </Container>
  );
};

export {GroupingType};
