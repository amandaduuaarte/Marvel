import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

const Background = '../../assets/spider-man.png';

const Details = () => {
  return (
    <Container source={require(Background)} resizeMode="cover">
      <Text>Details</Text>
    </Container>
  );
};

export default Details;
