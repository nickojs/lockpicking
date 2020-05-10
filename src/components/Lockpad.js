import React, {
  useState, useEffect, useRef, useReducer
} from 'react';
import { actionTypes as actions, inputReducer } from './reducer';

import * as S from './styles';
import useAngle from '../hooks/angle';
import genArray from '../helpers/array-generator';


const LockPad = () => {
  const [hotzone, setHotzone] = useState([]);
  const [event, setEvent] = useState(null);
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event);

  useEffect(() => {
    const zone = genArray([10, 30]);
    setHotzone(zone);
  }, []);

  const [inputState, dispatch] = useReducer(inputReducer, {
    mouseDown: false,
    keyDown: false
  });

  const setPickPosition = (e) => (
    inputState.mouseDown && setEvent(e.nativeEvent)
  );

  const keyDownHandler = () => {
    if (!inputState.keyDown) {
      dispatch({ type: actions.KEY_DOWN });
    }
  };

  const turnLock = (e) => {
    // check if the pick is inside hotzone
    //   ↳ check how close it is to the unlock zone
    // rotates the lock
    console.log('key pressed');
  };

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
