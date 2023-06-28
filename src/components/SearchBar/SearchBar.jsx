import React from "react";
import { useState } from "react";
import style from './searchBar.module.css'

function SearchBar({onSearch}) {

const [id, setId] = useState('');

const handleChange = (event) =>{
   setId(event.target.value)
}
const botonRandom = () =>{
   return Math.floor((Math.random() * 826) + 1);
}


return (
   <div className={style.barraBusqueda}>
         <input type='search' value={id} onChange={handleChange}/>
         <button onClick = {() => onSearch(id)}>Agregar</button>
         <button onClick = {() => onSearch(botonRandom())}>Random</button>
      </div>
   );
}
export default SearchBar;