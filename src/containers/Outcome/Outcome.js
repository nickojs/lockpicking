import React from 'react';
import * as S from './styles';
import Unlocked from './unlocked/unlocked';
import GameOver from './gameOver/gameOver';

const Outcome = ({ location }) => {
  /*
    will receive following props:
      - how many picks was used
      - how much time spend on the lockpad
      - 'unlocked' or 'gameOver'
    if 'unlocked', will render Unlocked component
    if 'gameOver', will render GameOver component
  */
  const redirectState = location.state;
  const gameOver = redirectState.gameOver ? <GameOver /> : null;
  const unlocked = redirectState.unlock ? <Unlocked /> : null;

  return (
    <S.Container>
      {unlocked}
      {gameOver}
      <S.OptionsContainer>
        <p>Return</p>
        <p>Share</p>
      </S.OptionsContainer>
    </S.Container>
  );
};

export default Outcome;
