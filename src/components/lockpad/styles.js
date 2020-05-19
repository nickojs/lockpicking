import styled from 'styled-components';
import lockpadBackground from '../../assets/lockpad/lockpad_background.png';
import lockBackground from '../../assets/lockpad/lockbackground.png';

export const LockBackground = styled.div`
  position: relative;
  height: 474px;
  width: 569px;

  cursor: none;
  pointer-events: none;

  background: url(${lockBackground});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
`;

export const LockpadContainer = styled.div.attrs((props) => (props.isTurning ? ({
  style: {
    transform: `rotate(${props.position}deg)`
  }
}) : null))`
  position: absolute;
  top: 23%; left: 39%;
  transform: rotate(0deg);

  z-index: -1;
  height: 250px;
  width: 250px;

  transition: .5s;
`;

export const LockpadBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;  
  background: url(${lockpadBackground});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const Lockpad = styled.img`
  width: 70px; 
`;

export const Pick = styled.img.attrs((props) => ({
  style: {
    transform: `rotate(${props.position}deg) translate(-50%, 0%)`
  }
}))`
  position: absolute;
  top: calc(76% - 448px); left: 50%;
  transform: rotate(0deg) translate(-50%, 0%);
  
  transform-origin: 0 100%;
  z-index: 100; 
  height: 350px;
`;
