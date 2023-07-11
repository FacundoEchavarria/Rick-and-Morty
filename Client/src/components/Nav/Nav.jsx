import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import styles from './Nav.module.css'
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfo, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons";

const Nav = ({onSearch, logout}) =>{

    
    return(

        <div className={styles.navBox}>
            <nav>
                <NavLink className={styles.botonNav} to='/home' ><button><FontAwesomeIcon icon={faHouse} /> Home</button></NavLink>
                <NavLink to='/about' className={styles.botonNav}><button><FontAwesomeIcon icon={faInfo} /> About</button></NavLink>
                <NavLink to='/notfound' className={styles.botonNav}><button><FontAwesomeIcon icon={faInfo} /> 404</button></NavLink>
                <NavLink to='/favorites' className={styles.botonNav}><button><FontAwesomeIcon icon={regularStar} />Favorites</button></NavLink>
                <button onClick={() => logout()} className={styles.botonNav}><FontAwesomeIcon icon={faRightFromBracket} /> LogOut</button>
            </nav>
            <h1 className={styles.titulo}>Rick and Morty</h1>
            <p className={styles.autor}>By Facundo Echavarria</p>
            <div className={styles.navBoxLinks}>
                <SearchBar onSearch={onSearch}/>
            </div>
        </div>
    )
}

export default Nav;