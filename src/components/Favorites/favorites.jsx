import React from "react";
import {useDispatch, connect } from "react-redux";
import Card from "../Cards/Card/Card";
import { removeFav, orderCards, filterCards } from "../../redux/actions";
import style from '../Cards/cards.module.css'
import styles from './Favorites.module.css'
import { useState } from "react";

const Favorites = ({ myFavorites }) =>{
    // const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        setAux(!aux)
        dispatch(orderCards(event.target.value))
    }
    const handleFilter = (event) => {
        setAux(!aux)
        dispatch(filterCards(event.target.value))
    }

    return(
        <div className={styles.favoritesBox}>
            <div className={styles.selectBox}>
                <select name="orden" id="orden" onChange={handleOrder}>
                    <option value="">Orden</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>

                <select name="filtro" id="filtro" onChange={handleFilter}>
                    <option value="Todos">Todos</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className= {style.charactersBox}>
                {myFavorites?.map((elem) => (
                    <Card
                    key = {elem.id}
                    id = {elem.id}
                    name={elem.name}
                    status={elem.status}
                    species={elem.species}
                    gender={elem.gender}
                    origin={elem.origin.name}
                    image={elem.image}
                    onClose={() => {
                        dispatch(removeFav(elem.id))
                        }}
                    />
                ))}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);