import styled from 'styled-components';
import { Link } from 'react-router-dom';

import border from '../../assets/menu/lockpadMenu/border.png';
import background from '../../assets/image/background2.jpg';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  background: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const OptionsContainer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  
  color: white;
  background: rgba(0, 0, 0, 0.9);

  border-image-source: url(${border});
  border-image-slice: 80 75 70 75;
  border-image-width: 40px;
  border-image-outset: 8px;
  border-image-repeat: stretch stretch; 
`;

export const OptionsMenu = styled.div`
  width: 100%;
  box-sizing: border-box;
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

export const Button = styled(Link)`
  display: block;
  margin: 0 auto;
  padding-top: 5%;
  
  text-decoration: none;
  text-align: center;
  
  color: white;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;
