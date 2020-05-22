import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { settings } from '../../store/actions/game';

import * as S from './styles';
import ProgressBar from './progressBar/progressBar';
import Dialog from '../../components/dialog/dialog';
import zoneGenerator from '../../helpers/zone-generator';

const LockpadMenu = ({ history }) => {
  const dispatch = useDispatch();
  const [difficulty, setDifficulty] = useState(0);

  const changeDifficultyHandler = ({ nativeEvent }) => {
    setDifficulty(Math.floor(nativeEvent.target.value));
  };

  const dispatchGameSettings = () => {
    const roundedDifficulty = Math.floor(difficulty);
    const data = zoneGenerator(roundedDifficulty);

    const gameSettings = {
      ...data,
      startingTime: Date.now()
    };

    dispatch(settings(gameSettings));
    history.push('/game');
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
            difficulty={difficulty}
            difficultyHandler={changeDifficultyHandler}
          />
          <S.Button
            onClick={dispatchGameSettings}
          >
            Play
          </S.Button>
        </S.DifficultyContainer>
      </Dialog>
    </S.Container>
  );
};

export default LockpadMenu;
