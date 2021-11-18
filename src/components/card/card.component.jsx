import React, { useState } from "react";
import { CardPopout } from "../card-popout/card-popout.component";
import "./card.styles.css";



export const Card = (props) => {    
    const [buttonPopup, setButtonPopup] = useState(false)
    return(    
        <div className='card-container' onClick={() => setButtonPopup(true)}>
            <img alt="monster" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champion.id}_0.jpg`}/>
            <h1 key={props.champion.key}>{props.champion.name}</h1>
            <h2>{props.champion.title}</h2>
            <CardPopout trigger={buttonPopup} setTrigger={setButtonPopup} champion={props.champion}/>
        </div>
        
    )
}

