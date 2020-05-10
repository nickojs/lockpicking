import React, {
  useState, useEffect, useRef, useReducer
} from 'react';
import { actionTypes as actions, inputReducer } from './reducer';

import * as S from './styles';
import useAngle from '../hooks/angle';
import genArray from '../helpers/array-generator';


const LockPad = () => {
  // this will become incoming props later
  const [hotzone, setHotzone] = useState([]);
  useEffect(() => {
    const zone = genArray([10, 30]);
    setHotzone(zone);
  }, []);

  // lockpad starts here
  const [event, setEvent] = useState(null);
  const pickRef = useRef(null);
  const pickPosition = useAngle(pickRef, event);

  const [inputState, dispatch] = useReducer(inputReducer, {
    mouseDown: false,
    keyDown: false
  });
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
    inputState.mouseDown && setEvent(e.nativeEvent)
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
