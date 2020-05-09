import React, { useEffect, useState } from 'react';
import * as S from './styles';

const LockPad = (props) => {
  const [mousePosition, setMousePosition] = useState({
    x: null, y: null
  });

  const mousePositionHandler = (event) => {
    event.preventDefault();
    const position = {
      x: event.nativeEvent.offsetX - event.nativeEvent.target.x,
      y: event.nativeEvent.offsetY - event.nativeEvent.target.y
    };
    console.log(event.nativeEvent.target.x);
    setMousePosition(position);
  };

  return (
    <S.Container>
      <S.LockpadContainer onMouseMove={(event) => mousePositionHandler(event)}>
        <S.Pick position={mousePosition.x} />
        <S.Lockpad />
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
