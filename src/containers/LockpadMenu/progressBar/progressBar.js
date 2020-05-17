import React, { useState, useEffect } from 'react';
import * as S from './styles';

const ProgressBar = (props) => {
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficultyHandler = (event) => {
    console.log(event.nativeEvent.target.value);
    setDifficulty(event.nativeEvent.target.value);
  };

  const roundedDifficulty = Math.ceil(difficulty);

  return (
    <S.ProgressContainer>
      <div>
        <S.ProgressBar
          type="range"
          min="0"
          max="10"
          step="0.5"
          onChange={changeDifficultyHandler}
          value={difficulty}
        />
        <p>{roundedDifficulty}</p>
      </div>
    </S.ProgressContainer>
  );
};

export default ProgressBar;
