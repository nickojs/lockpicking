import React from 'react';

const unlocked = ({ stats, name }) => (
  <>
    <h1>Congratulations{name && `, ${name}`}! <br />
      You unlocked the chest
    </h1>
    <hr />
    <p>{stats.totalTime.toFixed(2)} seconds</p>
    <p>{stats.picks} picks remaining</p>
  </>
);

export default unlocked;
