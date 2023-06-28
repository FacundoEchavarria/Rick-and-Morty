import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'

const Nav = ({onSearch}) =>{

    return(
        <div className={styles.navBox}>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;