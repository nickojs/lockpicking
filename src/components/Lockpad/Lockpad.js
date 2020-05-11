import React, {
  useState, useEffect, useRef, useReducer
} from 'react';
import { actionTypes as actions, inputReducer, initialState } from './reducers/inputReducer';

import * as S from './styles';
import genArray from '../../helpers/array-generator';
import useAngle from '../../hooks/angle';

const hotzone = genArray([0, 50]);
const unlockZone = genArray([20, 40]);

const LockPad = () => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);
  const { mouseDown, keyDown, event } = inputState;
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event);

  const [pickOnHotzone, setPickOnHotzone] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [rotateLock, setRotateLock] = useState(0);

  useEffect(() => {
    const isPickInsideHotzone = hotzone.includes(pickPosition);
    setPickOnHotzone(isPickInsideHotzone);
    const isPickInsideUnlockZone = unlockZone.includes(pickPosition);
    setUnlock(isPickInsideUnlockZone);
  }, [pickPosition]);

  useEffect(() => {
    console.log('hotzone: ', pickOnHotzone);
    console.log('unlockZone: ', unlock);

    setRotateLock(0);

    if (unlock && keyDown) {
      setRotateLock(90);
    }
  }, [pickOnHotzone, unlock, keyDown]);

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
