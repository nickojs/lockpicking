import styled from 'styled-components';
import { ReactComponent as SmallArrow } from '../../assets/menu/smallArrow.svg';

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
  transform: translate(-50%, -18%);`;

export const MenuBottom = styled.div`
  position: absolute;
  left: 50%; bottom: 18%;
  transform: translate(-50%, -18%);`;

export const MenuRight = styled.div`
  position: absolute;
  right: 0; top: 50%;
  transform: translate(0%, -50%);`;

export const MenuLeft = styled.div`
  position: absolute;
  left: 0; top: 50%;
  transform: translate(0%, -50%);`;

const StyledSmallArrow = styled(SmallArrow)`
  max-width:100%;
  max-height:100%;
`;

export const ColumnWrapper = styled.div`
  width: 80px;
  height: 160px;
`;

export const RowWrapper = styled.div`
  width: 160px;
  height: 80px;
`;

export const ArrowUp = styled(StyledSmallArrow)`
  transform: rotate(0deg);
`;
export const ArrowDown = styled(StyledSmallArrow)`
  transform: rotate(180deg);
`;
export const ArrowLeft = styled(StyledSmallArrow)`
  transform: rotate(-90deg);
`;
export const ArrowRight = styled(StyledSmallArrow)`
  transform: rotate(90deg);
`;
