import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from './Nav.module.css'
import { Route, Routes, NavLink } from "react-router-dom";

const Nav = ({onSearch}) =>{

    return(
        <div className={styles.navBox}>
            <NavLink className={styles.botonNav} to='/home' ><button>Home</button></NavLink>
            <NavLink to='/about' className={styles.botonNav}><button>About</button></NavLink>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;