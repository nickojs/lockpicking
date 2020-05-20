import React from 'react';
import * as S from './styles';

const About = () => (
  <S.Container>
    <S.InnerContainer>
      <S.LimitContainer>
        <S.Title>About</S.Title>
        <S.Line>Coded by: <S.Link href="https://github.com/nickojs">This dude</S.Link></S.Line>
        <S.Line>Developed with ReactJs, using <S.Link href="https://www.npmjs.com/package/cra-template-nickojs">my clean template</S.Link>, check it out!</S.Line>
        <S.Line>Backgrounds are mostly Skyrim screenshots found on the web</S.Line>
        <S.Line>Menu arrows created by my beautiful brother</S.Line>
        <S.Line>Lockpick vector, among with other vectors created by myself.</S.Line>
        <S.Line>
          The angle calculations needed for the useAngle hook were based on <br />
          <S.Link href="https://stackoverflow.com/questions/15653801/rotating-object-to-face-mouse-pointer-on-mousemove">
            this stackoverflow answer
          </S.Link>.
        </S.Line>
        <S.Line>The custom cursor is available <br />
          <S.Link href="http://www.rw-designer.com/cursor-detail/30682">here</S.Link>
        </S.Line>
      </S.LimitContainer>
    </S.InnerContainer>
  </S.Container>
);

export default About;
