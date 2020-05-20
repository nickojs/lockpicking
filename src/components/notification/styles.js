import styled, { keyframes } from 'styled-components';

const anim = keyframes`
  from{
    top: -10%;
    opacity: 0;
  }to{
    top: 5%;    
    opacity: 1;
  }
`;

export const NotificationContainer = styled.div`
  position: absolute;
  left: 50%; top: 5%;
  transform: translate(-50%, 0);

  margin: 12px;
  padding: 12px;
  
  color: white;
  font-weight: bold;
  
  background: lightcoral;
  border: 1px solid red;
  border-radius: 8px;

  animation: ${anim} .5s;
`;
