import React from 'react';
import * as S from './styles';

const lockpadOptions = (props) => (
  <S.OptionsContainer>
    <S.MainTitle>
      <h1>Lockpad Menu</h1>
    </S.MainTitle>
    <S.OptionsMenu>
      <S.SecondaryTitle>How to play</S.SecondaryTitle>
      <S.HowToList>
        <li>Click and hold the pick to move it</li>
        <li>Press and hold any key unlock</li>
        <li>Don&apos;t hush it! Otherwise you&apos;ll jam the lock.</li>
      </S.HowToList>

      <S.SecondaryTitle>Set difficulty</S.SecondaryTitle>
      <S.DifficultyContainer>
        <input type="range" min="0" max="10" />
        <S.Button to="/game">Play</S.Button>
      </S.DifficultyContainer>

    </S.OptionsMenu>
  </S.OptionsContainer>
);

export default lockpadOptions;
