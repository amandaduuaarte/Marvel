import React from 'react';
import {ScrollView} from 'react-native';

import {CharacterCard} from '../CharacterCard';
import {Container, ContainerCards, CategoryText, SeeMore} from './styles';

type CategoryProps = {
  title: string;
};
const GroupingType = ({title}: CategoryProps) => {
  return (
    <Container>
      <ContainerCards style={{height: 45}}>
        <CategoryText>{title}</CategoryText>
        <SeeMore>Ver tudo</SeeMore>
      </ContainerCards>

      <ContainerCards style={{height: 275}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CharacterCard realName="Peter Parker" fictionName="Homem Aranha" />
          <CharacterCard realName="Peter Parker" fictionName="Homem Aranha" />
        </ScrollView>
      </ContainerCards>
    </Container>
  );
};

export {GroupingType};
