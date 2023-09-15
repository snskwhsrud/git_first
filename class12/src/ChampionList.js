import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ChampionList() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch('http://ddragon.leagueoflegends.com/cdn/13.18.1/data/ko_KR/champion.json')
      .then(response => response.json())
      .then(data => setChampions(Object.values(data.data)));
  }, []);

  return (
    <div>
      <h1>Champion List</h1>
      <div className="champion-grid">
        {champions.map(champion => (
          <Link to={`/champions/${champion.id}`} key={champion.key}>
            <img src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} alt={champion.name} />
            <span>{champion.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChampionList;