import React from 'react';
import unlockedChest from '../../../assets/image/unlocked_chest.png';
import * as S from '../styles';

const unlocked = ({ stats }) => (
  <>
    <h1>Congratulations!</h1>
    <h2>Enjoy your open chest</h2>
    <S.OutcomeImage src={unlockedChest} alt="finally, an unlocked chest!" />
    <p>It only took:</p>
    <p>{stats.totalTime.toFixed(2)} seconds</p>
    <p>{stats.picks} picks</p>
    <hr />
    <hr />
    <hr />
  </>
);

export default unlocked;
