import styled from 'styled-components';
import background from '../../assets/texture.png';

export const Container = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 100vh;
  width: 100vw;

  background: url(${background});
`;

export const Text = styled.p`
  line-height: 1.3em;
  padding: 12px;
`;

export const Navigation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
`;

export const Button = styled.a`
  color: white;
  text-decoration: none;
  text-align: center;

  &:hover{ text-shadow: 1px 1px 10px grey; }
  &:visited{ color: grey; }
`;
