import React, { useState } from 'react';
import * as S from './styles';
import ProgressBar from './progressBar/progressBar';
import Dialog from '../../components/dialog/dialog';
import zoneGenerator from '../../helpers/zone-generator';

const LockpadMenu = () => {
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficultyHandler = ({ nativeEvent }) => {
    setDifficulty(nativeEvent.target.value);
  };

  const roundedDifficulty = Math.floor(difficulty);
  const data = zoneGenerator(roundedDifficulty);

  const gameState = {
    ...data,
    startingTime: Date.now()
  };

  return (
    <S.Container>
      <Dialog>
        <S.Title>How to play</S.Title>
        <S.HowToList>
          <li>Click and hold the pick to move it</li>
          <li>Press and hold any key unlock</li>
          <li>Don&apos;t hush it! Otherwise you&apos;ll jam the lock.</li>
        </S.HowToList>

        <S.Title>Set difficulty</S.Title>
        <S.DifficultyContainer>
          <ProgressBar
            difficulty={roundedDifficulty}
            difficultyHandler={changeDifficultyHandler}
          />
          <S.Button to={{
            pathname: '/game',
            state: gameState
          }}
          >Play
          </S.Button>
        </S.DifficultyContainer>
      </Dialog>
    </S.Container>
  );
};

export default LockpadMenu;
