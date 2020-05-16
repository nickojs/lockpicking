import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OptionsContainer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
`;

export const OptionsMenu = styled.div`
  width: 100%;
  padding: 30px 12px;
  color: white;
  background: rgba(0, 0, 0, 0.8);
`;

export const MainTitle = styled.div`
  position: absolute;
  left:50%; top: -10%;

  padding: 12px;
  width: 250px;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-left: -125px;

  border: 2px solid white;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.8);
  font-weight: 700; 
  text-align: center;
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  font-weight: 700;
`;

export const HowToList = styled.ul`
  font-family: 'Cormorant Garamond';
  margin: 12px;
    li{ margin: 8px; }
`;

export const DifficultyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 12px;
`;

export const Button = styled(Link)`
  color: white;
  text-decoration: none;
  text-align: center;
  margin-top: 24px;

  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: white; }
`;
