import React, { useEffect, useState } from 'react';
import * as S from './styles';

const menu = (props) => (
  <S.MenuContainer>
    <S.MenuLayer>

      <S.MenuTop>
        <p>Play</p>
        <S.ColumnWrapper>
          <S.ArrowUp />
        </S.ColumnWrapper>
      </S.MenuTop>

      <S.MenuLeft>
        <p>Stats</p>
        <S.RowWrapper>
          <S.ArrowLeft />
        </S.RowWrapper>
      </S.MenuLeft>

      <S.MenuRight>
        <S.RowWrapper>
          <S.ArrowRight />
        </S.RowWrapper>
        <p>Login</p>
      </S.MenuRight>

      <S.MenuBottom>
        <S.ColumnWrapper>
          <S.ArrowDown />
        </S.ColumnWrapper>
        <p>About</p>
      </S.MenuBottom>
    </S.MenuLayer>
  </S.MenuContainer>
);

export default menu;
