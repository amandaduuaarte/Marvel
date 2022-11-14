import React from 'react';
import {Container, Icon} from './styles';

import Menu from '../../../../assets/icons/menu.svg';
import Logo from '../../../../assets/marvel.svg';
import Search from '../../../../assets/icons/search.svg';

const Header = () => {
  return (
    <Container>
      <Icon>
        <Menu />
      </Icon>

      <Logo />

      <Icon>
        <Search />
      </Icon>
    </Container>
  );
};

export {Header};
