import React from 'react';

const IndianPlayers = () => {
  const allPlayers = ["Sachin", "Dhoni", "Kohli", "Raina", "Sehwag", "Dravid", "Zaheer"];

  // Destructuring
  const [p1, p2, p3, p4, p5, p6, p7] = allPlayers;

  const oddTeam = [p1, p3, p5, p7];
  const evenTeam = [p2, p4, p6];

  const T20Players = ["Rohit", "Jadeja"];
  const RanjiPlayers = ["Rahul", "Bumrah"];

  const mergedPlayers = [...T20Players, ...RanjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
