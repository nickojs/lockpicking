import React, { useState } from 'react';
import * as S from './styles';
import ProgressBar from './progressBar/progressBar';

const LockpadMenu = () => {
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficultyHandler = ({ nativeEvent }) => {
    setDifficulty(nativeEvent.target.value);
  };

  const roundedDifficulty = Math.floor(difficulty);

  return (
    <S.OptionsContainer>
      <S.OptionsMenu>
        <S.SecondaryTitle>How to play</S.SecondaryTitle>
        <S.HowToList>
          <li>Click and hold the pick to move it</li>
          <li>Press and hold any key unlock</li>
          <li>Don&apos;t hush it! Otherwise you&apos;ll jam the lock.</li>
        </S.HowToList>

        <S.SecondaryTitle>Set difficulty</S.SecondaryTitle>
        <S.DifficultyContainer>
          <ProgressBar
            difficulty={roundedDifficulty}
            difficultyHandler={changeDifficultyHandler}
          />
          <S.Button to={{
            pathname: '/game',
            state: {
              difficulty,
              startingTime: Date.now()
            }
          }}
          >Play
          </S.Button>
        </S.DifficultyContainer>

      </S.OptionsMenu>
    </S.OptionsContainer>
  );
};

export default LockpadMenu;
