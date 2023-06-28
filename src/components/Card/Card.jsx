import React from "react";
import style from './card.module.css'

export default function Card({id ,name, status, species, gender, origin, image, onClose}) {
   return (
      <div className= {style.characterBox}>
         <img src={image} alt= {`Foto de ${name}`}/>
         <h2>{name}</h2>
         <div className= {style.characterInfo}>
            <p><b>Name:</b>&nbsp;{name}</p>
            <p><b>Status:</b> &nbsp;{status}</p>
            <p><b>specie</b>: &nbsp;{species}</p>
            <p><b>gender:</b> &nbsp;{gender}</p>
            <p className={style.noBoder}><b>origin:</b> &nbsp;{origin}</p>
            <button onClick={() => onClose(id)}>DELETE</button>
         </div>
      </div>
   );
}
