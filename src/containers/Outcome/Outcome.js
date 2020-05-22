import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';
import Dialog from '../../components/dialog/dialog';

const Outcome = () => {
  const dispatch = useDispatch();
  const { gameOver, unlock, settings } = useSelector((state) => state.game);
  const { pickLives } = useSelector((state) => state.pick);
  const stats = {
    totalTime: (Date.now() - settings.startingTime) / 1000,
    picks: pickLives
  };
  const gameover = gameOver && <GameOver />;
  const unlocked = unlock && <Unlocked stats={stats} />;

  return (
    <S.Container>
      <Dialog>
        {unlocked}
        {gameover}
        <S.Navigation>
          <S.Button
            onClick={() => dispatch({ type: 'RESET_STATE' })}
          >
            Return
          </S.Button>
          {/* <p>Share</p> */}
        </S.Navigation>
      </Dialog>
    </S.Container>
  );
};

export default Outcome;
