import React from "react";
import { useSelector } from "react-redux";
import Card from "../Cards/Card/Card";
import { useDispatch } from 'react-redux';
import { removeFav } from "../../redux/actions";
import style from '../Cards/cards.module.css'

const Favorites = (props) =>{
    const myFavorites = useSelector(state => state.myFavorites)
    const dispatch = useDispatch();

    return(
        <div className= {style.charactersBox}>
            {myFavorites.map((elem) => (
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
            )
            )}
        </div>
    )
}

export default Favorites;