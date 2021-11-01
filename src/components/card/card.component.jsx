import React from "react";

import "./card.styles.css"

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monster" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.id}_0.jpg`}/>
        <h1 key={props.champion.key}>{props.champion.name}</h1>
        <h2>{props.champion.title}</h2>
    </div>
)

