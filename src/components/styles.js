import styled from 'styled-components';
import fulllock from '../assets/fulllock.png';
import pick from '../assets/pick.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LockpadContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: grey;
`;

export const Lockpad = styled.img.attrs({
  src: fulllock,
  alt: 'an ugly but functional lockpad'
})`
  cursor: none;
  pointer-events: none;
  width: 100%;
  margin: 12px auto;
  z-index: 0;
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
  top: -60%; left: 50%;
  transform-origin: 0 100%;
  transform: rotate(0deg) translate(-50%, 0%);
  z-index: 10; 
`;
