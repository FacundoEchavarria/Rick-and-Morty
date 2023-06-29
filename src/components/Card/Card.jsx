import React from "react";
import style from './card.module.css'
import { NavLink } from "react-router-dom";

export default function Card({id ,name, status, species, gender, origin, image, onClose}) {
   return (
      <div className= {style.characterBox}>
         <img src={image} alt= {`Foto de ${name}`}/>
         <h2>{name}</h2>
         <div className= {style.characterInfo}>
         <NavLink to={`/detail/${id}`}>
            {/* <p><b>Name:</b>&nbsp;{name}</p>
            <p><b>Status:</b> &nbsp;{status}</p>
            <p><b>specie</b>: &nbsp;{species}</p>
            <p><b>gender:</b> &nbsp;{gender}</p>
            <p className={style.noBoder}><b>origin:</b> &nbsp;{origin}</p> */}
            <button>More Info</button>
         </NavLink>
            <button onClick={() => onClose(id)}>DELETE</button>
         </div>
      </div>
   );
}
