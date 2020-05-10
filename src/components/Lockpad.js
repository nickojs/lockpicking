import React, {
  useState, useEffect, useRef, useReducer
} from 'react';
import { actionTypes as actions, inputReducer } from './reducer';

import * as S from './styles';
import useAngle from '../hooks/angle';
import genArray from '../helpers/array-generator';

const hotzone = genArray([10, 30]);

const LockPad = () => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    mouseDown: false,
    keyDown: false,
    event: null
  });
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, inputState.event);

  const [pickOnHotzone, setPickOnHotzone] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      const isPickInsideHotzone = hotzone.includes(pickPosition);
      setPickOnHotzone(isPickInsideHotzone);
      console.log('isPickInsideHotzone: ', isPickInsideHotzone);
    }, 500);

    return () => { clearTimeout(timer); };
  }, [inputState.keyDown, hotzone, pickPosition]);

  const setPickPosition = (e) => (
    inputState.mouseDown && dispatch({
      type: actions.INPUT_EVENT,
      event: e.nativeEvent
    })
  );

  const keyDownHandler = () => (
    !inputState.keyDown && dispatch({ type: actions.KEY_DOWN })
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
