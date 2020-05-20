import styled from 'styled-components';
import slider from '../../../assets/menu/lockpadMenu/slider.png';
import progressBar from '../../../assets/menu/lockpadMenu/progress_bar.png';

export const ProgressContainer = styled.div`
  display: flex;
  flex-flow: column wrap; 
  justify-content: space-around;
  align-items: center;
    * { margin: 6px; }
`;

export const DifficultyMeter = styled.p`
  width: 1.3em;
  text-align: center;
`;

export const ProgressBar = styled.input`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 80%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */

  &::-webkit-slider-thumb { -webkit-appearance: none; }

  &:focus { outline: none; /* Removes the blue border. */ }

  /* CHROME CONFIG */
  &::-webkit-slider-thumb {
    height: 28px;
    width: 8px;
    border-radius: 4px;
    background: url(${slider});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 8.4px;
    padding: 0 32px;
    background: url(${progressBar});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* IE/EDGE CONFIG */
  &::-ms-track {
    width: 100%;
    padding: 0 32px;
    background: url(${progressBar});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::-ms-thumb { 
    height: 28px;
    width: 8px;
    border-radius: 4px;
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
    border: 1px solid transparent;
    background: url(${slider});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  &::-moz-range-track {
    width: 100%;
    height: 30px;
    padding: 0 32px;
    background: url(${progressBar});
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
