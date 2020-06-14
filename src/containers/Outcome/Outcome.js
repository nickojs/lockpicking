import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';

const Outcome = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { gameOver, unlock, settings } = useSelector((state) => state.game);
  const { pickLives } = useSelector((state) => state.pick);
  const { username } = useSelector((state) => state.user);
  const stats = {
    totalTime: (Date.now() - settings.startingTime) / 1000,
    picks: pickLives
  };

  const gameover = gameOver && <GameOver />;
  const unlocked = unlock && <Unlocked stats={stats} name={username} />;

  const returnButtonHandler = () => {
    dispatch({ type: 'RESET_GAME' });
    history.push('/');
  };

  return (
    <S.Container>
      <S.DialogPadded>
        {unlocked}
        {gameover}
        <S.Navigation>
          <S.Button onClick={returnButtonHandler}>
            Return
          </S.Button>
          {/* <p>Share</p> */}
        </S.Navigation>
      </S.DialogPadded>
    </S.Container>
  );
};

export default Outcome;
