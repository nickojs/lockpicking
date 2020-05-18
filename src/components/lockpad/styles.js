import styled from 'styled-components';
import lockhole from '../../assets/lockpad/lockhole.png';
import lockpadBackground from '../../assets/lockpad/lockpad_background.png';
import pick from '../../assets/lockpad/pick_with_space.png';

export const LockpadContainer = styled.div.attrs((props) => (props.isTurning ? ({
  style: {
    transform: `rotate(${props.position}deg)`
  }
}) : null))`
  position: relative;
  width: 400px;
  height: 400px;
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
  background-size: 80%;
  background-repeat: no-repeat;
`;

export const Lockpad = styled.img.attrs({
  src: lockhole,
  alt: 'an ugly but functional lockpad'
})`
  width: 90px;
`;

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
  top: -73%; left: 50%;
  transform-origin: 0 100%;
  transform: rotate(0deg) translate(-50%, 0%);
  z-index: 10; 
`;
