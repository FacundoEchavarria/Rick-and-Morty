import React from "react";
import style from './CardInfo.module.css'


export default function Card({name, status, species, gender, origin}) {
    return (
        <div className= {style.characterInfo}>
            <h2>{name}</h2>
            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h3>{origin}</h3>
        </div>
    );
}