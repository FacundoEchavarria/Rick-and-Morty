import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions";

let initialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites].filter((character) => character.id !== parseInt(action.payload)),
                allCharacters: [...state.allCharacters].filter((character) => character.id !== parseInt(action.payload))
            }
        case FILTER:
            let allCharactersFiltered = [...state.allCharacters].filter((character) => character.gender === action.payload)
            if(action.payload === "Todos") allCharactersFiltered = [...state.allCharacters]
            return {
                ...state,
                myFavorites: allCharactersFiltered,
            }
        case ORDER:
            let orderedAllCharacters = [...state.myFavorites]
            switch (action.payload) {
                case "A":
                    orderedAllCharacters.sort((a, b) => a.id - b.id)
                    break;
                case "D":
                    orderedAllCharacters.sort((a, b) => b.id - a.id)
                    break;
                default:
                    break;
            }
            return {
                ...state,
                myFavorites: orderedAllCharacters,
            }
        default:
            return {...state}
    }
}

export default reducer;