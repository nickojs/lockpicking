import styled from 'styled-components';
import slider from '../../../assets/menu/lockpadMenu/slider.png';
import progressBar from '../../../assets/menu/lockpadMenu/progress_bar.png';

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ProgressBar = styled.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

  &::-webkit-slider-thumb { -webkit-appearance: none; }

  &:focus { outline: none; /* Removes the blue border. */ }

  /* CHROME CONFIG */
  &::-webkit-slider-thumb {
    height: 28px;
    width: 8px;
    border-radius: 4px;
    cursor: pointer;
    background: url(${slider});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    padding: 0 24px;
    cursor: pointer;
    background: url(${progressBar});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* IE/EDGE CONFIG */
  &::-ms-track {
    width: 100%;
    padding: 0 24px;
    cursor: pointer;
    background: url(${progressBar});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::-ms-thumb { 
    height: 28px;
    width: 8px;
    border-radius: 4px;
    cursor: pointer;
    background: url(${slider});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* MOZILLA CONFIG */
  &::-moz-range-thumb {
    height: 46px;
    width: 28px;
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid transparent;
    background: url(${slider});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::-moz-range-track {
    width: 100%;
    height: 30px;
    padding: 0 24px;
    cursor: pointer;
    background: url(${progressBar});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
