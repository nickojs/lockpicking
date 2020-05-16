import styled, { css } from 'styled-components';
import homeBackground from '../../assets/image/background.jpg';

const blur = css`
  filter: blur(10px);
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  text-align: center;
  transition: filter .5s ease-out;
  ${(props) => (props.isMenuOpen ? blur : null)}
  
  background-image: url(${homeBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5em;
  color: white;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 700;
  text-shadow: 1px 1px black;
`;

export const Text = styled.p`
  font-size: 2em;
  font-weight: 700;
  text-shadow: 1px 1px black;
`;

export const TextSmall = styled.p`
  font-size: 1em;
  font-weight: 400;
  text-shadow: 1px 1px black;
`;
