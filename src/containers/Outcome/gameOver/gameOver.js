import React from 'react';
import answers from '../text.json';

const gameOver = (props) => {
  // this will be replaced when backend is implemented
  const generateRandomNumber = (min, max) => Math.ceil(Math.random() * (max - min) + min);

  const generatePhrase = () => {
    const randomNumber = generateRandomNumber(0, 6);
    return answers.gameOver[randomNumber];
  };

  const randomPhrase = generatePhrase();

  return (
    <>
      <h1>
        {randomPhrase}
      </h1>
    </>
  );
};


export default gameOver;
