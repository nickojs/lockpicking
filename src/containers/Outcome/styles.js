import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const OutcomeImage = styled.img`
  width: 50%;
  margin: 20px;
  align-self: center;
`;

export const OptionsContainer = styled.div`
  display: inherit;
  width: 250px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Button = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;

  &:hover{ text-shadow: 1px 1px 10px grey; }
  &:visited{ color: grey; }
`;
