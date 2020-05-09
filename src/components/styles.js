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
  padding: 12px;
  background: grey;
`;

export const Lockpad = styled.img.attrs({
  src: fulllock,
  alt: 'an ugly but functional lockpad'
})`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

export const Pick = styled.img.attrs({
  src: pick,
  alt: 'a picklock that looks like a twig'
})`
  position: absolute;
  top: -50%; left: 50%;
  transform: translate(-50%, 0);
  z-index: 10; 
`;
