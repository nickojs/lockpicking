import React, { useEffect, useState } from 'react';
import * as S from './styles';

const menu = (props) => {
  const menuComponent = props.toggle ? (
    <S.MenuContainer>
      <S.MenuLayer>
        <S.MenuTop>
          <p>Play</p>
        </S.MenuTop>

        <S.MenuLeft>
          <p>Stats</p>
        </S.MenuLeft>

        <S.MenuRight>
          <p>Login</p>
        </S.MenuRight>

        <S.MenuBottom>
          <p>About</p>
        </S.MenuBottom>
      </S.MenuLayer>
    </S.MenuContainer>
  ) : null;

  return menuComponent;
};

export default menu;
