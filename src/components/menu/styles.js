import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  height: 100vh;
  width: 100vw;
  transition: 1s filter blur;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(0.8);
`;

export const MenuLayer = styled.div`
  transition: 1s filter blur;  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-areas: ". . menu-top . ." "menu-left menu-left center menu-right menu-right" ". . menu-bottom . .";
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 1px 1px;
  height: 80vh;
  width: 80vw;
`;

const ColumnMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: grey;
`;

const RowMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background: grey;
`;

export const MenuTop = styled(ColumnMenu)`grid-area: menu-top;`;
export const MenuRight = styled(RowMenu)` grid-area: menu-right; `;

export const MenuLeft = styled(RowMenu)` 
  grid-area: menu-left; 
  justify-content: flex-start;
`;
export const MenuBottom = styled(ColumnMenu)` 
grid-area: menu-bottom; 
justify-content: flex-end;
`;
