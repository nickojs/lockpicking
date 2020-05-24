import styled from 'styled-components';

export const SideMenu = styled.div`
  position: absolute;
  top: 0%; left: 0%; bottom: 0%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 30%;
  max-width: 350px;

  background: rgba(0, 0, 0, 0.8);
  border-right: 2px solid grey; 
`;

export const SideItems = styled.ul`
  box-sizing: border-box;
  margin: 8px;
  li{ margin: 12px 0; }
`;
