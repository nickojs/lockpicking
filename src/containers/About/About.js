import React from 'react';
import * as S from './styles';
import { Title, Line } from '../../generalStyles';

const About = () => (
  <S.Container>
    <S.InnerContainer>
      <S.LimitContainer>
        <Title>About</Title>
        <Line>Coded by: <S.Link href="https://github.com/nickojs">This dude</S.Link></Line>
        <Line>Developed with ReactJs, using <S.Link href="https://www.npmjcom/package/cra-template-nickojs">my clean template</S.Link>, check it out!</Line>
        <Line>Backgrounds are mostly Skyrim screenshots found on the web</Line>
        <Line>Menu arrows created by my beautiful brother</Line>
        <Line>Lockpick vector, among with other vectors created by myself.</Line>
        <Line>
          The angle calculations needed for the useAngle hook were based on <br />
          <S.Link href="https://stackoverflow.com/questions/15653801/rotating-object-to-face-mouse-pointer-on-mousemove">
            this stackoverflow answer
          </S.Link>.
        </Line>
        <Line>The custom cursor is available <br />
          <S.Link href="http://www.rw-designer.com/cursor-detail/30682">here</S.Link>
        </Line>
      </S.LimitContainer>
    </S.InnerContainer>
  </S.Container>
);

export default About;
