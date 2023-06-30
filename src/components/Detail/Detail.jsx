import React, { useState, useEffect } from "react";
import style from './Deatil.module.css'
import { useParams } from "react-router-dom";
import axios from "axios";
import Error404 from "../notFound/NotFound";


function Detail(props){

    let {id} = useParams()
    const[character, setCharacter] = useState({})
    const [error, setError] = useState(false);
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                setError(true);
            }
            }).catch(error => setError(true));
            return setCharacter({});
    }, [id]);

    if(error){
        return (
            <Error404/>
        )
    }
    return(
        <div className={style.moreInfo}>
            <img className={style.imgCharacter} src={character.image} alt= {`Foto de ${character.name}`}/>
            <div className={style.moreInfoBox}>
                <p><b>Name:</b>&nbsp;{character.name}</p>
                <p><b>Status:</b> &nbsp;{character.status}</p>
                <p><b>specie</b>: &nbsp;{character.species}</p>
                <p><b>gender:</b> &nbsp;{character.gender}</p>
                <p><b>origin:</b> &nbsp;{character.origin?.name}</p>
            </div>

        </div>  
    )
}

export default Detail;