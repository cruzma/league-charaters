import React from 'react';

import './card-popout.styles.css'




export const CardPopout = (props) => {
    
   let url = fetch(`http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion/${props.champion.id}.json`)
    .then(response => response.json())
    .then(champion => console.log(Object.values(champion.data)));



    return (props.trigger) ? (
        <div className="popup">
            <div className='popup-inner'>
                <h1>{props.champion.name}</h1>
                <h2>{props.champion.title}</h2>
                <p></p>
                <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            </div>
            { props.children }
        </div>
    ) : "" ;
}