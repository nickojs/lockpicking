import React, {
  useState, useEffect, useRef, useReducer
} from 'react';
import { actionTypes as actions, inputReducer, initialState } from './reducer';

import * as S from './styles';
import genArray from '../helpers/array-generator';
import useAngle from '../hooks/angle';

const hotzone = genArray([10, 30]);

const LockPad = () => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const { mouseDown, keyDown, event } = inputState;
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event);

  const [pickOnHotzone, setPickOnHotzone] = useState(false);
  const [rotateLock, setRotateLock] = useState(0);

  useEffect(() => {
    const isPickInsideHotzone = hotzone.includes(pickPosition);
    setPickOnHotzone(isPickInsideHotzone);
  }, [pickPosition]);

  useEffect(() => {
    console.log(pickOnHotzone);
    setRotateLock(0);

    if (pickOnHotzone && keyDown) {
      setRotateLock(90);
    }
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
      <S.LockpadContainer position={rotateLock}>
        <S.Pick ref={pickRef} position={pickPosition} />
        <S.LockpadBackground>
          <S.Lockpad />
        </S.LockpadBackground>
      </S.LockpadContainer>
    </S.Container>
  );
};

export default LockPad;
