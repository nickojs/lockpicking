import styled, { css } from 'styled-components';
import { Container as C } from '../../generalStyles';
import bg from '../../assets/image/login.jpg';

const filter = css`
  filter: blur(5px);
`;

export const Container = styled(C)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  color: white;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  transition: filter .3s;
  ${(props) => props.toggle && filter}
`;
