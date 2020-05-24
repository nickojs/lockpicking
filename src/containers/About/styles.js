import styled from 'styled-components';
import { Container as C, Link as L } from '../../generalStyles';

import background from '../../assets/image/about.jpg';

export const Container = styled(C)`
  text-align: center;
  background-image: url(${background});
`;

export const InnerContainer = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  `;

export const LimitContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 3em;
`;

export const Link = styled(L)`
  color: gold;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: gold; }
`;
