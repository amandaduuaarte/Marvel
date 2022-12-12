import {useRoute} from '@react-navigation/native';
import React from 'react';
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
} from './styles';

import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';

const Details = () => {
  const route = useRoute();
  const {avatar} = route.params as any;

  return (
    //Fica melhor passar as infos pra essa pagina so o id e aqui faz uma
    // req
    <ContainerImg source={{uri: `${avatar}`}} resizeMode="cover">
      <ContainerShadow>
        <ContainerTexts>
          <AlterEgoText>Peter Parker</AlterEgoText>
          <NameText>Homem</NameText>
          <NameText>Aranha</NameText>

          <ContainerCaracters>
            <CaracterCard>
              <Age />
              <AlterEgoText>30 anos</AlterEgoText>
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
          <Biography>
            Em Forest Hills, Queens, Nova York, o estudante de ensino médio,
            Peter Parker, é um cientista orfão que vive com seu tio Ben e tia
            May. Ele é mordido por uma aranha radioativa em uma exposição
            científica e adquire a agilidade e a força proporcional de um
            aracnídeo. Junto com a super força, Parker ganha a capacidade de
            andar nas paredes e tetos.
            {'\n'} {'\n'}
            Através de sua habilidade nativa para a ciência, ele desenvolve um
            aparelho que o permitir lançar teias artificiais. Inicialmente
            buscando capitalizar suas novas habilidades, Parker cria um traje e,
            como Homem Aranha, torna-se uma estrela de televisão.
          </Biography>
          <TopicText>Habilidades</TopicText>
          <TopicText>Filmes</TopicText>
        </ContainerTexts>
      </ContainerShadow>
    </ContainerImg>
  );
};

export default Details;
