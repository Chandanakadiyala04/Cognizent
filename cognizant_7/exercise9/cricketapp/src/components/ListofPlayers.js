import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Virat", score: 80 },
    { name: "Rohit", score: 60 },
    { name: "Hardik", score: 50 },
    { name: "Jadeja", score: 75 },
    { name: "Bumrah", score: 40 },
    { name: "Shami", score: 90 },
    { name: "Rahul", score: 55 },
    { name: "Gill", score: 85 },
    { name: "Iyer", score: 45 },
    { name: "Pant", score: 70 },
    { name: "Surya", score: 95 }
  ];

  const below70 = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>

      <h2>Players with Score Below 70</h2>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
