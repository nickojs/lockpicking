import React from 'react';
import * as S from './styles';

import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';
import Dialog from '../../components/dialog/dialog';

const Outcome = ({ location }) => {
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
          {/* <p>Share</p> */}
        </S.Navigation>
      </Dialog>
    </S.Container>
  );
};

export default Outcome;
