import React from 'react';
import Logo from '../../assets/img/logo.png';
import { LogoImage, MenuWrapper } from './style.js';
import Button from '../Button';

function Menu() {
  return (
    <MenuWrapper>
      <a href="/">
        <LogoImage src={Logo} alt="JuniorFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>

    </MenuWrapper>
  );
}

export default Menu;