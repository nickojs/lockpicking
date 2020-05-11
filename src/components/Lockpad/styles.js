import styled from 'styled-components';
import lockhole from '../../assets/lockhole.png';
import lockpadBackground from '../../assets/lockpad_background.png';
import pick from '../../assets/pick_with_space.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  user-select: none;
`;

export const LockpadContainer = styled.div.attrs((props) => ({
  style: {
    transform: `rotate(${props.position}deg)`
  }
}))`
  position: relative;
  width: 400px;
  height: 400px;
  background: grey;
  transition: 2s ease;

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
})``;

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
  top: -75%; left: 50%;
  transform-origin: 0 100%;
  transform: rotate(0deg) translate(-50%, 0%);
  z-index: 10; 
`;
