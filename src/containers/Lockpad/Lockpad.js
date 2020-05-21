import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../store/actions/input';

import * as S from './styles';
import Lockpad from './lockpad/lockpad';
import HUD from '../../components/hud/hud';

const LockPad = ({ location }) => {
  const dispatch = useDispatch();
  const inputState = useSelector((state) => state.input);

  const { mouseDown, keyDown, keyPressMoment } = inputState;
  const { info, lifeSpeed } = location.state; // game settings data

  const setPickPosition = ({ nativeEvent }) => {
    // needs to check the keyDown to prevent 'move and unlock' bug
    if (mouseDown && !keyDown) {
      return dispatch(actions.inputEvent(nativeEvent));
    }
  };

  const setKeyDown = () => {
    if (keyDown) return;
    dispatch(actions.keyDown());
    dispatch(actions.keyPressStart());
  };

  const setKeyUp = () => {
    dispatch(actions.keyUp());
    dispatch(actions.keyPressEnd());
  };

  // acts like a global timeout, counting for how long the key is being pressed
  useEffect(() => {
    const timer = setTimeout(() => {
      if (keyPressMoment) {
        dispatch(actions.keyPressInc(keyPressMoment + lifeSpeed));
      }
    }, lifeSpeed);
    return () => { clearTimeout(timer); };
  }, [keyPressMoment, lifeSpeed, dispatch]);


  return (
    <>
      <HUD life={22} picks={1} info={info} />
      <S.Container>
        <S.InnerContainer
          tabIndex="0"
          onMouseUp={() => dispatch(actions.mouseUp())}
          onMouseDown={() => dispatch(actions.mouseDown())}
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
