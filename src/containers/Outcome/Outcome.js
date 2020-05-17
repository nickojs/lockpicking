import React from 'react';

import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';
import * as S from './styles';

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
      {unlocked}
      {gameover}
      <S.OptionsContainer>
        <S.Button to="/">Return</S.Button>
        <p>Share</p>
      </S.OptionsContainer>
    </S.Container>
  );
};

export default Outcome;
