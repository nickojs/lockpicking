import styled from 'styled-components';
import border from '../../assets/menu/lockpadMenu/border.png';

export const OptionsContainer = styled.div`
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  
  padding: 20px;
  max-width: 600px;

  color: white;
  background: rgba(0, 0, 0, 0.9);

  border-image-source: url(${border});
  border-image-slice: 80 75 70 75;
  border-image-width: 40px;
  border-image-outset: 8px;
  border-image-repeat: stretch stretch; 
`;

export const OptionsInner = styled.div`
  width: 100%;
  box-sizing: border-box;
`;
