import React from "react";
import CardInfo from '../CardInfo/CardInfo.jsx'
import style from './card.module.css'

export default function Card({name, status, species, gender, origin, image, onClose}) {
   return (
      <div className= {style.characterBox}>
         <img src={image} alt= {`Foto de ${name}`}/>
         <h2>{name}</h2>
         <CardInfo 
         name = {name} 
         status={status}
         species={species}
         gender={gender}
         origin={origin}
         onClose={onClose}
         />
      </div>
   );
}
