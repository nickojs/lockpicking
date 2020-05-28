import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.div`
  position: fixed;
  left: 0; top: 0; right: 0;
  z-index: 20;
  transition: top .5s;
  ${(props) => props.toggle && 'top: -46px'}
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  padding: 12px;
  box-sizing: border-box;

  color: white;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 2px solid grey;
`;

export const Button = styled(Link)`
  text-decoration: none;
  text-align: center;

  &:hover{ text-shadow: 1px 1px 10px grey; }
  &:visited{ color: grey; }
`;

export const ArrowContainer = styled.div`
  margin: 0 auto;
  height: 28px;
  width: 28px;
  transition: transform .5s;
  transform: ${(props) => !props.toggle && 'rotate(180deg)'};
`;

// using translateX because the image is flipped
const anim = keyframes`
  from{ 
    transform: rotate(90deg) translateX(0px);
  }33%{ 
    transform: rotate(90deg) translateX(5px);
  }to {
    transform: rotate(90deg) translateX(0px);
  }
`;
export const Arrow = styled.img`
  width: 100%;
  transform: rotate(90deg);

  &:hover{ 
    animation: ${anim} .5s infinite;
  }
`;
