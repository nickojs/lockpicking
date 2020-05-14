import React from 'react';
import * as S from './styles';

const HUD = ({ life, picks }) => (
  <S.HUDContainer>
    <S.HUDLayout>
      <div>
        <h1>Pick life</h1>
        <S.ProgressPick progress={life} />
      </div>
      <h1>Lockpick Level: regular</h1>
      <h1>Lockpicks left: {picks}</h1>
    </S.HUDLayout>
  </S.HUDContainer>
);

export default HUD;
