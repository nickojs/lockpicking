import React, { useEffect, useState } from 'react';
import * as S from './styles';

const LockPad = (props) => {
  const [mousePosition, setMousePosition] = useState({
    x: null, y: null
  });

  const mousePositionHandler = (event) => {
    event.preventDefault();
    const position = {
      x: event.nativeEvent.offsetX,
      y: event.nativeEvent.offsetY
    };
    console.log(position);
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
