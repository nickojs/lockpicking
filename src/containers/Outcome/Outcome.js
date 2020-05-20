import React from 'react';
import * as S from './styles';

import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';
import Dialog from '../../components/dialog/dialog';

const Outcome = ({ location }) => {
  /*
    will receive following props:
      - how many picks was used
      - how much time spend on the lockpad
      - 'unlocked' or 'gameOver'
    if 'unlocked', will render Unlocked component
    if 'gameOver', will render GameOver component
  */
  const { gameOver, unlock, stats } = location.state;
  const gameover = gameOver ? <GameOver /> : null;
  const unlocked = unlock ? <Unlocked stats={stats} /> : null;

  return (
    <S.Container>
      <Dialog>
        {unlocked}
        {gameover}
        <S.Navigation>
          <S.Button to="/">Return</S.Button>
          <p>Share</p>
        </S.Navigation>
      </Dialog>
    </S.Container>
  );
};

export default Outcome;
