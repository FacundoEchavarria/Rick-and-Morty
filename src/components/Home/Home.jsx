import React from "react";
import Cards from "../Cards/Cards";

function Home({characters, onClose}){

    return (
        <Cards
            characters = {characters}
            onClose = {onClose}
            />
    )
}

export default Home;