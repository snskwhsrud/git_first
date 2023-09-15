import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function removeTags(str) {
  if (str === null || str === '') return false;
  else str = str.toString();
  return str.replace(/(<([^>]+)>)/gi, '');
}

function ChampionDetail() {
  const { id } = useParams();
  const [champion, setChampion] = useState(null);
  const [activeSpellId, setActiveSpellId] = useState('passive');

  useEffect(() => {
    fetch(`http://ddragon.leagueoflegends.com/cdn/13.18.1/data/ko_KR/champion/${id}.json`)
      .then(response => response.json())
      .then(data => setChampion(data.data[id]));
  }, [id]);

  if (!champion) {
    return <div>Loading...</div>;
  }

   const handleSpellClick = (spellId) => {
    setActiveSpellId(spellId);
   };

   return (
     <div style={{ textAlign: "center" }}>
       {/* 챔피언 이름과 타이틀 */}
       <h1>{champion.name}</h1>
       <h2>{champion.title}</h2>
	<hr/>

       {/* 챔피언 설명 */}
       <p>{champion.blurb}</p>

       {/* 스킨 이미지들 */}
	   {champion.skins.map((skin, index) =>
			<img
			  key={index}
			  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_${skin.num}.jpg`}
			  alt={`${champion.name} Loading ${skin.num}`}
			  style={{ width: '200px', height: 'auto', margin: '0 auto' }}
			/>
		  )}

	   {/* 구분선 */}
	   <hr />

	   {/* 패시브 및 스킬 영역 - 이미지와 설명 */}
	   <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", backgroundColor: 'lightgrey', minHeight: '500px' }}>
  {/* 왼쪽 영역 - 패시브 및 스킬 이미지 */}
  <div style={{ marginTop: '30px'}}>
    {/* 패시브 이미지*/}
    <img
      src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/passive/${champion.passive.image.full}`}
      alt={champion.passive.name}
      style={{ width: '50px', height: 'auto', cursor:'pointer' }}
      onClick={() => handleSpellClick('passive')}
    />

    {/* 스킬 이미지들 */}
    {champion.spells.map(spell => (
      <img
        key={spell.id}
        src={`http://ddragon.leagueoflegends.com/cdn/10.6.1/img/spell/${spell.image.full}`}
        alt={spell.name}
        style={{ width: '50px', height: 'auto', cursor:'pointer' }}
        onClick={() => handleSpellClick(spell.id)}
      />
    ))}
  </div>

  {/* 오른쪽 영역 - 패시브 및 스킬 설명 */}
  <div style={{ marginLeft: '20px', maxWidth : '70%' }}>
    {activeSpellId === "passive" && (
      <div>
        <h3>{champion.passive.name}</h3>
        <p>{removeTags(champion.passive.description)}</p>
      </div>
    )}

    {activeSpellId !== "passive" &&
     champion.spells.map(spell =>
       spell.id === activeSpellId && (
         <div key={spell.id}>
           <h3>{spell.name}</h3>
           <p>{removeTags(spell.description)}</p>
         </div>
       )
     )
   }
 </div>


	  </div>

     </div>
   );
}

export default ChampionDetail;