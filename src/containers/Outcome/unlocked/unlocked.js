import React from 'react';

const unlocked = ({ stats }) => (
  <>
    <h1>Congratulations! <br />
      You unlocked the chest
    </h1>
    <hr />
    <p>It took:</p>
    <p>{stats.totalTime.toFixed(2)} seconds</p>
    <p>{stats.picks} picks</p>
  </>
);

export default unlocked;
