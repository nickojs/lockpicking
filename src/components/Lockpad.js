import React, { useEffect, useState, useRef } from 'react';
import * as S from './styles';

const LockPad = (props) => {
  const [angle, setAngle] = useState([]);
  const pickRef = useRef(null);

  useEffect(() => {
    // element.offset().left + element.width()/2
    // element.offset().top + element.height()/2
    const elementWidthHalf = pickRef.current.offsetWidth / 2;
    const elementHeightHalf = pickRef.current.offsetHeight / 2;

    const elementOffsetLeft = pickRef.current.getBoundingClientRect().left;
    const elementOffsetTop = pickRef.current.getBoundingClientRect().top;

    setAngle([elementOffsetLeft + elementWidthHalf, elementOffsetTop + elementHeightHalf]);
  }, []);

  const mousePositionHandler = (event) => {
    // Math.atan2(e.pageX- angle[0],- (e.pageY- angle[1]) )*(180/Math.PI);
    const { pageX } = event.nativeEvent;
    const { pageY } = event.nativeEvent;

    console.log(pageX, pageY);
  };

  return (
    <S.Container onMouseMove={(event) => mousePositionHandler(event)}>
      <S.LockpadContainer>
        <S.Pick ref={pickRef} position={12} />
        <S.Lockpad />
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
