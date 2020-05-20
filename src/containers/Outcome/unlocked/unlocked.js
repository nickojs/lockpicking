import React from 'react';

const unlocked = ({ stats }) => (
  <>
    <h1>Congratulations!</h1>
    <h2>You unlocked the chest</h2>
    <hr />
    <p>It took:</p>
    <p>{stats.totalTime.toFixed(2)} seconds</p>
    <p>{stats.picks} picks</p>
  </>
);

export default unlocked;
