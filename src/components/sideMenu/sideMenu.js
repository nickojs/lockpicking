import React from 'react';
import * as S from './styles';

const SideMenu = ({ toggle, index, clicked }) => {
  const menu = toggle && (
    <S.Container onClick={clicked}>
      <S.SideMenu>
        <S.SideItems>
          <S.Item active={index === 0 ? 1 : 0}>Create Account</S.Item>
          <S.Item active={index === 1 ? 1 : 0}>Login</S.Item>
          <S.Item active={index === 2 ? 1 : 0}>Return</S.Item>
        </S.SideItems>
      </S.SideMenu>
    </S.Container>
  );

  return menu;
};


export default SideMenu;
