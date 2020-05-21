import React, { useEffect, useReducer } from 'react';

import inputActions, { inputReducer, initState as initInput } from './reducers/inputReducer';
import * as S from './styles';
import Lockpad from './lockpad/lockpad';
import HUD from '../../components/hud/hud';

const LockPad = ({ location }) => {
  const [inputState, dispatchInput] = useReducer(inputReducer, initInput);
  const { mouseDown, keyDown, keyPressMoment } = inputState;
  const { info, lifeSpeed } = location.state; // game settings data

  const setPickPosition = ({ nativeEvent }) => {
    // needs to check the keyDown to prevent 'move and unlock' bug
    if (mouseDown && !keyDown) {
      return dispatchInput({ type: inputActions.INPUT_EVENT, event: nativeEvent });
    }
  };

  const setKeyDown = ({ nativeEvent }) => {
    if (keyDown) return;
    dispatchInput({ type: inputActions.KEY_DOWN, key: nativeEvent.keyCode });
    dispatchInput({ type: inputActions.KEY_PRESS_START });
  };

  const setKeyUp = () => {
    dispatchInput({ type: inputActions.KEY_UP });
    dispatchInput({ type: inputActions.KEY_PRESS_END });
  };

  // acts like a global timeout, counting for how long the key is being pressed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyPressMoment) {
        dispatchInput({ type: inputActions.KEY_PRESS_INC, inc: keyPressMoment + lifeSpeed });
      }
    }, lifeSpeed);
    return () => { clearTimeout(timer); };
  }, [keyPressMoment, lifeSpeed]);


  return (
    <>
      <HUD life={22} picks={1} info={info} />
      <S.Container>
        <S.InnerContainer
          tabIndex="0"
          onMouseUp={() => dispatchInput({ type: inputActions.MOUSE_UP })}
          onMouseDown={() => dispatchInput({ type: inputActions.MOUSE_DOWN })}
          onKeyUp={setKeyUp}
          onKeyDown={setKeyDown}
          onMouseMove={setPickPosition}
        >
          <Lockpad input={inputState} location={location} />
        </S.InnerContainer>
      </S.Container>
    </>
  );
};

export default LockPad;
