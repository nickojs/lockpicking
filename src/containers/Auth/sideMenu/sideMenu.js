import React from 'react';
import * as S from './styles';
import Hint from '../../../components/hint/hint';

const SideMenu = ({ toggle, index, clicked }) => {
  const menu = toggle && (
  <S.Container onClick={clicked}>
    <Hint>
      Use the WASD keys (or arrows) to control the menu <br />
      Press D (or left arrow) to open the selected menu
    </Hint>
    <S.SideMenu>
      <S.SideItems>
        <S.Item active={index === 0 ? 1 : 0}>Create Account</S.Item>
        <S.Item active={index === 1 ? 1 : 0}>Login</S.Item>
        <S.Item active={index === 2 ? 1 : 0}>Request Token</S.Item>
        <S.Item active={index === 3 ? 1 : 0}>Update Account</S.Item>
        <S.Item active={index === 4 ? 1 : 0}>Delete Account</S.Item>
      </S.SideItems>
    </S.SideMenu>
  </S.Container>
  );

  return menu;
};

export default SideMenu;
