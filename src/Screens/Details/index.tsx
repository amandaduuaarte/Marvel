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
} from './styles';

import Age from '../../assets/icons/age.svg';
import Weight from '../../assets/icons/weight.svg';
import Height from '../../assets/icons/height.svg';
import Universe from '../../assets/icons/universe.svg';

const Details = () => {
  const route = useRoute();
  const {avatar} = route.params as any;

  return (
    <ContainerImg source={{uri: `${avatar}`}} resizeMode="cover">
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
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
        </ContainerTexts>
        {/* </ScrollView> */}
      </ContainerShadow>
    </ContainerImg>
  );
};

export default Details;
