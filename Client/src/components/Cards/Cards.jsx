import React from 'react';
import Card from './Card/Card';
import style from './cards.module.css'
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Cards(props) {
   let characters = props.characters;
   const navigate = useNavigate();
   useEffect(() => {
      navigate('/home');
   }, [navigate]);

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
            onClose={props.onClose}
         />
      )
      )}
   </div>;
}
