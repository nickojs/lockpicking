import React from 'react';
import * as S from './styles';

const HUD = ({ life, picks }) => (
  <S.HUDContainer>
    <S.HUDLayout>
      <S.InfoContainer>
        <p>Pick life</p>
        <S.ProgressBackground>
          <S.ProgressPick progress={life} />
        </S.ProgressBackground>
      </S.InfoContainer>
      <S.InfoContainer>
        <p>Lockpick Level:</p>
        <p>regular</p>
      </S.InfoContainer>
      <S.InfoContainer>
        <p>Lockpicks left:</p>
        <p>{picks}</p>
      </S.InfoContainer>
    </S.HUDLayout>
  </S.HUDContainer>
);

export default HUD;
