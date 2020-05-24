import styled from 'styled-components';
import bg from '../../assets/image/login.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  width: 100vw;
  user-select: none;
  color: white;

  background: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 700;
  text-shadow: 1px 1px black;
`;

export const Input = styled.input`
  padding: 12px;

  border: none;
  border-bottom: 1px solid white;

  color: white;
  background: transparent;
`;
