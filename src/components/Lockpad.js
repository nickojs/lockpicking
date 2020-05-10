import React, { useEffect, useRef, useReducer } from 'react';
import { actionTypes as actions, inputReducer, initialState } from './reducer';

import * as S from './styles';
import genArray from '../helpers/array-generator';
import useAngle from '../hooks/angle';
import useHotzone from '../hooks/hotzone';

const hotzone = genArray([10, 30]);

const LockPad = () => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const { mouseDown, keyDown, event } = inputState;
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event);
  const pickOnHotzone = useHotzone(hotzone, pickPosition);

  useEffect(() => {
    console.log(pickOnHotzone);
  }, [pickOnHotzone, keyDown]);

  const setPickPosition = (e) => (
    mouseDown && dispatch({ type: actions.INPUT_EVENT, event: e.nativeEvent })
  );

  const keyDownHandler = () => (
    !keyDown && dispatch({ type: actions.KEY_DOWN })
  );

  return (
    <S.Container
      tabIndex="0"
      onMouseUp={() => dispatch({ type: actions.MOUSE_UP })}
      onMouseDown={() => dispatch({ type: actions.MOUSE_DOWN })}
      onKeyUp={() => dispatch({ type: actions.KEY_UP })}
      onKeyDown={keyDownHandler}
      onMouseMove={setPickPosition}
    >
      <S.LockpadContainer>
        <S.Pick ref={pickRef} position={pickPosition} />
        <S.LockpadBackground>
          <S.Lockpad />
        </S.LockpadBackground>
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
