import styled, { keyframes } from 'styled-components';
import loaderBg from '../../assets/loaderbg.png';

const anim = keyframes`
  from{ 
    background-size: 100%;
  }to {
    background-size: 110%;
  }
`;

export const LoadingScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgb(0, 0, 0);
  background-image: url(${loaderBg});
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;

  animation: ${anim} 10s;
`;
