import styled from 'styled-components';


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
  font-family: Cinzel;
  font-weight: 400;
  font-size: 1.3em;
  letter-spacing: 4px;
`;

export const ProgressPick = styled.div`
  width: 250px;
  height: 20px;
  margin: 6px 0;
  transition: .3s ease;
  background: linear-gradient(90deg, rgba(172,172,151,1) 0%, rgba(89,141,185,1) 100%);
  background-repeat: no-repeat;
  background-size: ${(props) => props.progress}%; 
`;
