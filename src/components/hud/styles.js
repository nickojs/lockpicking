import styled from 'styled-components';
import bar from '../../assets/lockpad/bar.png';

export const HUDLayout = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  border-top: 3px solid grey;
  background: rgba(0, 0, 0, 0.85);
`;

export const HUDContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
    * { margin: 6px; }
`;

export const ProgressBackground = styled.div`
  width: 300px;
  height: 30px;
  background: url(${bar});  
  background-repeat: no-repeat;
  background-size: contain; 
`;

export const ProgressPick = styled.div`
  width: 250px;
  height: 20px;
  margin: 0 auto;
  transform: translateY(10%);  
  transition: .3s ease;
  border: 1px solid transparent;
  background: linear-gradient(90deg, rgba(172,172,151,1) 0%, rgba(89,141,185,1) 100%);
  background-repeat: no-repeat;
  background-size: ${(props) => props.progress}%; 
`;
