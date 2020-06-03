import styled from 'styled-components';
import { Container as C } from '../../generalStyles';
import bg from '../../assets/image/texture.png';

export const Container = styled(C)`
  justify-content: center;
  align-items: center;
  
  background: url(${bg});
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  user-select: none;
`;
