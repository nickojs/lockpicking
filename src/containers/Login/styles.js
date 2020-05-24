import styled from 'styled-components';
import bg from '../../assets/image/login.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  user-select: none;

  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
