import React from "react";
import style from './card.module.css'
import { NavLink } from "react-router-dom";
import { addFav, removeFav } from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as regularStar} from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Card({id ,name, status, species, gender, origin, image, onClose}) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   const myFavorites = useSelector((state) => state.myFavorites)

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         dispatch(removeFav(id))
      }else{
         setIsFav(true)
         console.log({
            id : parseInt(id),
            name,
            status,
            species,
            gender,
            origin,
            image,
            onClose
         });
         dispatch(
            addFav({
               id : parseInt(id),
               name,
               status,
               species,
               gender,
               origin,
               image,
               onClose
            })
         );
      }
   };

   return (
      <div className= {style.characterBox}>
         <img src={image} alt= {`Foto de ${name}`}/>
         <h2>{name}</h2>
         <div className= {style.characterInfo}>
            <NavLink to={`/detail/${id}`}>
               <button>More Info</button>
            </NavLink>
            <button onClick={() => onClose(id)}>DELETE</button>
            {
               isFav ? (
                  <button onClick={handleFavorite} ><FontAwesomeIcon className={style.favortiteStar} icon={faStar} /></button>
               ) : (
                  <button onClick={handleFavorite}><FontAwesomeIcon icon={regularStar} /></button>
               )
            }
         </div>
      </div>
   );
}

export default Card;