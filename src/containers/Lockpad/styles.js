import styled from 'styled-components';
import bg from '../../assets/texture.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  user-select: none;

  background: url(${bg});
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  user-select: none;
`;
