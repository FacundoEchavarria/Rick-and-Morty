import React from 'react';
import Card from '../Card/Card';
import style from './cards.module.css'

export default function Cards(props) {
   let characters = props.characters;
   return <div className= {style.charactersBox}>
      {characters.map((elem) => (
         <Card
            key = {elem.id}
            id = {elem.id}
            name={elem.name}
            status={elem.status}
            species={elem.species}
            gender={elem.gender}
            origin={elem.origin.name}
            image={elem.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         />
      )
      )}
   </div>;
}
