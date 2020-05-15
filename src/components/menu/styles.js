import styled, { css } from 'styled-components';
import { ReactComponent as SmallArrow } from '../../assets/menu/smallArrow.svg';
import { ReactComponent as LargeArrow } from '../../assets/menu/largeArrow.svg';

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
`;

export const MenuLayer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 600px;
  width: 600px;
  max-height: 600px;
  max-width: 600px;
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

const activeMenu = css`
  background: black;
`;

// rotates arrows that needs rotation
export const ArrowUp = styled(StyledSmallArrow)`
  transform: rotate(0deg);
  ${(props) => (props.active ? activeMenu : null)}
`;
export const ArrowDown = styled(StyledSmallArrow)`
  transform: rotate(180deg);
  ${(props) => (props.active ? activeMenu : null)}
`;
export const ArrowRight = styled(StyledLargeArrow)`
  transform: rotate(0deg);
  ${(props) => (props.active ? activeMenu : null)}
`;
export const ArrowLeft = styled(StyledLargeArrow)`
  transform: rotate(180deg);
  ${(props) => (props.active ? activeMenu : null)}
`;
