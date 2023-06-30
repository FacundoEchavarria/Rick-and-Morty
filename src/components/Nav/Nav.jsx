import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfo } from "@fortawesome/free-solid-svg-icons";

const Nav = ({onSearch, logout}) =>{

    
    return(

        <div className={styles.navBox}>
            <h1 className={styles.titulo}>Rick and Morty</h1>
            <p className={styles.autor}>By Facundo Echavarria</p>
            <div className={styles.navBoxLinks}>
                <NavLink className={styles.botonNav} to='/home' ><button><FontAwesomeIcon icon={faHouse} /> Home</button></NavLink>
                <NavLink to='/about' className={styles.botonNav}><button><FontAwesomeIcon icon={faInfo} /> About</button></NavLink>
                <button onClick={() => logout()} className={styles.botonNav}><FontAwesomeIcon icon={faInfo} /> LogOut</button>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    )
}

export default Nav;