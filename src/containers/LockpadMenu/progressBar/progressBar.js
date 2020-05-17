import React from 'react';
import * as S from './styles';

const ProgressBar = ({ difficulty, difficultyHandler }) => (
  <S.ProgressContainer>
    <S.DifficultyMeter>{difficulty}</S.DifficultyMeter>
    <S.ProgressBar
      type="range"
      min="0"
      max="10"
      step="0.5"
      onChange={difficultyHandler}
      value={difficulty}
    />
  </S.ProgressContainer>
);

export default ProgressBar;
