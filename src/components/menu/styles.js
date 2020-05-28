import styled, { css, keyframes } from 'styled-components';
import { ReactComponent as SmallArrow } from '../../assets/menu/smallArrow.svg';
import { ReactComponent as LargeArrow } from '../../assets/menu/largeArrow.svg';

const fadeOut = keyframes`
  from{
    opacity: 0;
  }to{
    opacity: 1;
  }
`;

const fadeIn = keyframes`
  from{
    opacity: 1;
  }to{
    opacity: 0;
  }
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  height: 100vh;
  width: 100vw;
  text-align: center;
  color: white;
  background: rgba(0, 0, 0, 0.7);
  animation: ${(props) => (props.toggle ? fadeIn : fadeOut)} .5s;
`;

export const MenuLayer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 600px;
  width: 700px;
  max-height: 600px;
  max-width: 600px;
`;

export const HintText = styled.p`
  margin: 12px;
`;

export const MenuTop = styled.div`
  position: absolute;
  left: calc(50% - 4px); top: 18%;
  transform: translate(-50%, -18%);
`;

export const MenuBottom = styled.div`
  position: absolute;
  left: 50%; bottom: 18%;
  transform: translate(-50%, -18%);
`;

export const MenuRight = styled.div`
  position: absolute;
  right: calc(-18% - 4px); top: calc(45% - 6px);
  transform: translate(0, -45%);
  display: flex;
  justify-content: center;
  align-items: center;
    p{ margin-left: 12px; }
`;

export const MenuLeft = styled.div`
  position: absolute;
  left: -18%; top: calc(45% - 6px);
  transform: translate(0, -45%);
  display: flex;
  justify-content: center;
  align-items: center;
    p{ margin-left: 12px; }
`;

// arrows default config
const StyledSmallArrow = styled(SmallArrow)`
  max-width:100%;
  max-height:100%;
`;

const StyledLargeArrow = styled(LargeArrow)`
  max-width:100%;
  max-height:100%;
`;

// container wrappers to set arrow size
export const ColumnWrapper = styled.div`
  width: 80px;
  height: 160px;
`;

export const RowWrapper = styled.div`
  width: 300px;
  height: 80px;
`;

const animArrow = keyframes`
  from{
    filter: none;
  }33%{
    filter: drop-shadow(1px 1px 5px white);
  }to{
    filter: none;
  }
`;

const activeArrow = css`
  filter: none;
  transition: .3s;
  animation: ${animArrow} 1s infinite ease-out;
  
  path:nth-of-type(1){
    fill: grey;
  }
  
  path:nth-of-type(2){
    transition: fill .3s;
    fill: #FAFAFA;
  }
`;

// rotates arrows that needs rotation
export const ArrowUp = styled(StyledSmallArrow)`
  transform: rotate(0deg);
  ${(props) => (props.active && activeArrow)}
`;
export const ArrowDown = styled(StyledSmallArrow)`
  transform: rotate(180deg);
  ${(props) => (props.active && activeArrow)}
`;
export const ArrowRight = styled(StyledLargeArrow)`
  transform: rotate(0deg);
  ${(props) => (props.active && activeArrow)}
`;
export const ArrowLeft = styled(StyledLargeArrow)`
  transform: rotate(180deg);
  ${(props) => (props.active && activeArrow)}
`;
