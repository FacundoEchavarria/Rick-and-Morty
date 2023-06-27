import React from "react";
import style from './searchBar.module.css'

export default function SearchBar({onSearch}) {

   return (
      <div className={style.barraBusqueda}>
         <input type='search'/>
         <button onClick = {onSearch}>Agregar</button>
      </div>
   );
}
