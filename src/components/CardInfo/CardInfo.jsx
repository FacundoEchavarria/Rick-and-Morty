import React from "react";
import style from './CardInfo.module.css'


export default function Card({name, status, species, gender, origin, onClose}) {
    return (
        <div className= {style.characterInfo}>
            <p><b>Name:</b>&nbsp;{name}</p>
            <p><b>Status:</b> &nbsp;{status}</p>
            <p><b>specie</b>: &nbsp;{species}</p>
            <p><b>gender:</b> &nbsp;{gender}</p>
            <p className={style.noBoder}><b>origin:</b> &nbsp;{origin}</p>
            <button onClick={onClose}>DELETE</button>
        </div>
    );
}