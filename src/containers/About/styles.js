import styled from 'styled-components';

import background from '../../assets/image/about.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  
  text-align: center;
  
  color: white;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const InnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  `;

export const LimitContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 3em;
`;

export const Title = styled.h1`
  font-size: 4em;
  font-weight: 700;
  text-shadow: 1px 1px black;
  padding-bottom: .5em;
`;

export const Line = styled.p`
  margin: 24px 0;
  line-height: 1.3em;
`;

export const Link = styled.a`
  text-decoration: none;
  text-align: center;
  
  color: gold;
  &:hover{ text-shadow: 1px 1px 10px white; }
  &:visited{ color: gold; }
`;
