import React from 'react';
import * as S from './styles';

const Menu = ({ keyPressed, toggle }) => {
  const { key } = keyPressed !== null && keyPressed;

  const menuContainer = toggle && (
    <S.MenuContainer>
      <S.MenuLayer>

        <S.MenuTop>
          <p>Play</p>
          <S.ColumnWrapper>
            <S.ArrowUp active={key === 'w' ? 1 : 0} />
          </S.ColumnWrapper>
        </S.MenuTop>

        <S.MenuLeft>
          <p>Stats</p>
          <S.RowWrapper>
            <S.ArrowLeft active={key === 'a' ? 1 : 0} />
          </S.RowWrapper>
        </S.MenuLeft>

        <S.MenuRight>
          <S.RowWrapper>
            <S.ArrowRight active={key === 'd' ? 1 : 0} />
          </S.RowWrapper>
          <p>Login</p>
        </S.MenuRight>

        <S.MenuBottom>
          <S.ColumnWrapper>
            <S.ArrowDown active={key === 's' ? 1 : 0} />
          </S.ColumnWrapper>
          <p>About</p>
        </S.MenuBottom>
      </S.MenuLayer>
    </S.MenuContainer>
  );

  return menuContainer;
};

/*
  about the "condition ? 1 : 0" comparison on the active props, check:
  https://github.com/styled-components/styled-components/issues/1198
*/

export default Menu;
