import React from "react";
import './card-list.styles.css'
import { Card } from '../card/card.component'

export const CardList = (props) => {
    console.log(props)

    return(
        <div className="card-list">
            {props.champions.map(champion => (
            <Card key={champion.key} champion={champion}/>
            ))}
        </div>
    )
}