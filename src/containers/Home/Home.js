import React, { useState, useEffect } from 'react';
import Menu from '../../components/menu/menu';
import * as S from './styles';

const Home = (props) => {
  const [keyIdentifier, setKeyIdentifier] = useState(null);

  const keyDownHandler = ({ nativeEvent }) => {
    const { keyCode } = nativeEvent;
    setKeyIdentifier(keyCode);
  };

  return (
    <S.Container tabIndex="0" onKeyDown={keyDownHandler}>
      <S.InnerContainer>
        <S.Title>Skyrim</S.Title>
        <S.Text>lockpick simulator</S.Text>
        <hr />
        <S.TextSmall>Press any key to start</S.TextSmall>
        <Menu keyPressed={keyIdentifier} />
      </S.InnerContainer>
    </S.Container>
  );
};

export default Home;
