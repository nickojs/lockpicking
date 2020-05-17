import React, { useState, useEffect } from 'react';
import * as S from './styles';

const ProgressBar = (props) => {
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficultyHandler = ({ nativeEvent }) => {
    setDifficulty(nativeEvent.target.value);
  };

  const roundedDifficulty = Math.floor(difficulty);

  return (
    <S.ProgressContainer>
      <S.DifficultyMeter>{roundedDifficulty}</S.DifficultyMeter>
      <S.ProgressBar
        type="range"
        min="0"
        max="10"
        step="0.5"
        onChange={changeDifficultyHandler}
        value={difficulty}
      />
    </S.ProgressContainer>
  );
};

export default ProgressBar;
