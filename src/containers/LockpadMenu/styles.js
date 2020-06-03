import styled from 'styled-components';
import { Container as C } from '../../generalStyles';
import background from '../../assets/image/lockpadMenu.jpg';

export const Container = styled(C)`
  background: url(${background});
  /* IDK why but without this it won't work, but it should */
  background-position: center;
  background-size: cover;
`;

export const Title = styled.h2`
  text-align: center;
  font-weight: 700;
`;

export const HowToList = styled.ul`
  font-family: 'Cormorant Garamond';
  margin: 12px;
    li{ margin: 8px; line-height: 1.3em; }
`;

export const DifficultyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 12px;
`;

export const Button = styled.a`
  display: block;
  margin: 0 auto;
  padding-top: 5%;
  
  text-decoration: none;
  text-align: center;
  
  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;
