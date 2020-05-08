import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className = 'card-container'>
        {/* Va a obtener la imagen, el nombre y el email de cada uno de los mounstruos en la lista para crear cada tarjeta */}
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email}</p>

    </div>
)