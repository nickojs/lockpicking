import React, { useEffect, useState } from 'react';
import * as S from './styles';

const Menu = ({ keyPressed }) => {
  const wasdState = {
    87: 'w', 65: 'a', 68: 'd', 83: 's'
  };
  const key = wasdState[keyPressed];

  console.log('key? ', key);

  return (
    <S.MenuContainer>
      <S.MenuLayer key={key}>

        <S.MenuTop>
          <p>Play</p>
          <S.ColumnWrapper>
            <S.ArrowUp active={key === 'w'} />
          </S.ColumnWrapper>
        </S.MenuTop>

        <S.MenuLeft>
          <p>Stats</p>
          <S.RowWrapper>
            <S.ArrowLeft active={key === 'a'} />
          </S.RowWrapper>
        </S.MenuLeft>

        <S.MenuRight>
          <S.RowWrapper>
            <S.ArrowRight active={key === 'd'} />
          </S.RowWrapper>
          <p>Login</p>
        </S.MenuRight>

        <S.MenuBottom>
          <S.ColumnWrapper>
            <S.ArrowDown active={key === 's'} />
          </S.ColumnWrapper>
          <p>About</p>
        </S.MenuBottom>
      </S.MenuLayer>
    </S.MenuContainer>
  );
};

export default Menu;
