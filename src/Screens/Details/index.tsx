import {useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import {
  ContainerShadow,
  ContainerTexts,
  AlterEgoText,
  NameText,
  ContainerCaracters,
  CaracterCard,
  ContainerImg,
  Biography,
  TopicText,
  SkillsText,
  SkillsCard,
} from './styles';

import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';
import {api} from '../../services/api';

interface SkillsProps {
  id: string;
  force: number;
  intelligence: number;
  agility: number;
  resistance: number;
  velocity: number;
}

interface CharacterProps {
  character: {
    id: string;
    alterEgo: string;
    fictionname: string;
    avatar: string;
    biography?: string;
  };
}

const Details = () => {
  const route = useRoute();
  const {character} = route.params as CharacterProps;

  const [skills, setSkills] = useState<SkillsProps>();

  useEffect(() => {
    api.get(`/characters/skills/${character?.id}`).then(response => {
      setSkills(response.data.skills[0]);
    });
  }, []);

  return (
    <ContainerImg source={{uri: `${character?.avatar}`}} resizeMode="cover">
      <ContainerShadow>
        <ContainerTexts>
          <AlterEgoText>{character.alterEgo}</AlterEgoText>
          <NameText>{character.fictionname}</NameText>

          <ContainerCaracters>
            <CaracterCard>
              <Age />
              <AlterEgoText>{skills?.velocity} Anos</AlterEgoText>
            </CaracterCard>

            <CaracterCard>
              <Weight />
              <AlterEgoText>78kg</AlterEgoText>
            </CaracterCard>

            <CaracterCard>
              <Height />
              <AlterEgoText>1.8m</AlterEgoText>
            </CaracterCard>

            <CaracterCard>
              <Universe />
              <AlterEgoText>Terra</AlterEgoText>
            </CaracterCard>
          </ContainerCaracters>
          <Biography>{character.biography}</Biography>

          <TopicText>Habilidades</TopicText>

          <SkillsCard>
            <SkillsText>Força: {skills?.force}</SkillsText>
            <SkillsText>Inteligência: {skills?.intelligence}</SkillsText>
            <SkillsText>Agilidade: {skills?.agility}</SkillsText>
          </SkillsCard>

          <SkillsCard>
            <SkillsText>Resistência: {skills?.resistance}</SkillsText>
            <SkillsText>Velocidade: {skills?.velocity}</SkillsText>
          </SkillsCard>

          <TopicText>Filmes</TopicText>
        </ContainerTexts>
      </ContainerShadow>
    </ContainerImg>
  );
};

export default Details;
