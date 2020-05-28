import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  height: 100vh;
  width: 100vw;

  user-select: none;
  color: white;

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

export const Line = styled.p`
  margin: 24px 0;
  line-height: 1.3em;
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: center;
  
  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;

export const Button = styled.button`
  text-decoration: none;
  text-align: center;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: inherit;
  cursor: inherit;
  margin: 12px;

  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;
