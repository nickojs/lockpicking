import React from 'react';
import Menu from '../../components/menu/menu';
import * as S from './styles';

const Home = (props) => (
  <S.Container>
    <S.InnerContainer>
      <S.Title>Skyrim</S.Title>
      <S.Text>lockpick simulator</S.Text>
      <hr />
      <S.TextSmall>Press any key to start</S.TextSmall>
      <Menu />
    </S.InnerContainer>
  </S.Container>
);

export default Home;
