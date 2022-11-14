import React from 'react';
import {Container, ContainerTouch} from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';

import Hero from '../../../../assets/icons/hero.svg';
import Villain from '../../../../assets/icons/villain.svg';
import AntiHero from '../../../../assets/icons/antihero.svg';
import Alien from '../../../../assets/icons/alien.svg';
import Human from '../../../../assets/icons/human.svg';

const CharacterType = () => {
  const startGradient = {x: 0, y: 0};
  const endGradient = {x: 1, y: 0};

  return (
    <Container>
      <ContainerTouch>
        <LinearGradient
          start={startGradient}
          end={endGradient}
          colors={['#005BEA', '#00C6FB']}
          style={styles.ContainerRounded}>
          <Hero />
        </LinearGradient>
      </ContainerTouch>

      <ContainerTouch>
        <LinearGradient
          start={startGradient}
          end={endGradient}
          colors={['#ED1D24', '#ED1F69']}
          style={styles.ContainerRounded}>
          <Villain />
        </LinearGradient>
      </ContainerTouch>

      <ContainerTouch>
        <LinearGradient
          start={startGradient}
          end={endGradient}
          colors={['#B224EF', '#7579FF']}
          style={styles.ContainerRounded}>
          <AntiHero />
        </LinearGradient>
      </ContainerTouch>

      <ContainerTouch>
        <LinearGradient
          start={startGradient}
          end={endGradient}
          colors={['#0BA360', '#3CBA92']}
          style={styles.ContainerRounded}>
          <Alien />
        </LinearGradient>
      </ContainerTouch>

      <ContainerTouch>
        <LinearGradient
          start={startGradient}
          end={endGradient}
          colors={['#FF7EB3', '#FF758C']}
          style={styles.ContainerRounded}>
          <Human />
        </LinearGradient>
      </ContainerTouch>
    </Container>
  );
};

const styles = StyleSheet.create({
  ContainerRounded: {
    height: 56,
    width: 56,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {CharacterType};
