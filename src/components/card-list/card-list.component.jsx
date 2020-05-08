import React from 'react';
import {Card} from '../card/card.component';
import './card-list.style.css'

export const CardList = (props) => {
    return <div className='card-list'>
    {/* va a mapear sobre todos la lista de monsters que ya fue mapeada */}
        {props.monsterss.map(monster =>(
            <Card key={monster.id} monster={monster}/>
        ))}
    </div>
};