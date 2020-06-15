import styled, { css, keyframes } from 'styled-components';
import { Container as C } from '../../../generalStyles';
import arrow from '../../../assets/sideMenuArrow.png';

const animItem = keyframes`
  from{
    filter: none;
  }33%{
    filter: drop-shadow(1px 1px 5px white);
  }to{
    filter: none;
  }
`;

const activeItem = css`
  position: relative;

  filter: none;
  transition: .3s;
  animation: ${animItem} 1s infinite ease-out;
  :after{
    content: 'arrow';
    color: transparent;
    position: absolute;
    right: -30%; top: -32%;

    background: url(${arrow});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    width: 36px;
    height: 36px;
  }
`;

export const Container = styled(C)`
  position: absolute;
  top: 0; left: 0%;
`;

export const SideMenu = styled.div`
  position: absolute;
  top: 0%; left: 0%; bottom: 0%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 300px;

  background: rgba(0, 0, 0, 0.8);
  border-right: 2px solid grey; 
`;

export const SideItems = styled.ul`
  box-sizing: border-box;
  margin: 8px;
`;

export const Item = styled.li`
  width: 100%;
  margin: 24px 0; 
  font-weight: 700;
  ${(props) => props.active && activeItem}
`;
