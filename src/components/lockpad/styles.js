import styled from 'styled-components';
import lockpadBackground from '../../assets/lockpad/lockpad_background.png';
import lockBackground from '../../assets/lockpad/lockbackground.png';

import lockhole from '../../assets/lockpad/lockhole.png';
import pick from '../../assets/lockpad/pick_with_space.png';

export const LockBackground = styled.div`
  position: relative;
  height: 474px;
  width: 569px;

  background: url(${lockBackground});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LockpadContainer = styled.div.attrs((props) => (props.isTurning ? ({
  style: {
    transform: `rotate(${props.position}deg)`
  }
}) : null))`
  position: absolute;
  top: 20%;
  left: 35%;
  transform: rotate(0deg);
  width: 300px;
  height: 300px;
  transition: .5s;
`;

export const LockpadBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;  
  background: url(${lockpadBackground});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Lockpad = styled.img.attrs({
  src: lockhole,
  alt: 'an ugly but functional lockpad'
})` width: 90px; `;

export const Pick = styled.img.attrs((props) => ({
  src: pick,
  alt: 'a picklock that looks like a twig',
  style: {
    transform: `rotate(${props.position}deg) translate(-50%, 0%)`
  }
}))`
  cursor: none;
  pointer-events: none;
  position: absolute;
  top: calc(36% - 448px); left: 50%;
  transform-origin: 0 100%;
  transform: rotate(0deg) translate(-50%, 0%);
  z-index: 10; 
`;
