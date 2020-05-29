import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import * as S from './styles';
import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';
import Dialog from '../../components/dialog/dialog';

const Outcome = () => {
  const history = useHistory();
  const { gameOver, unlock, settings } = useSelector((state) => state.game);
  const { pickLives } = useSelector((state) => state.pick);
  const { username } = useSelector((state) => state.user);
  const stats = {
    totalTime: (Date.now() - settings.startingTime) / 1000,
    picks: pickLives
  };
  const gameover = gameOver && <GameOver />;
  const unlocked = unlock && <Unlocked stats={stats} name={username} />;

  return (
    <S.Container>
      <Dialog>
        {unlocked}
        {gameover}
        <S.Navigation>
          <S.Button
            onClick={() => history.push('/')}
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
