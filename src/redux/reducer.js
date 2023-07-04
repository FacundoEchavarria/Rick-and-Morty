import { ADD_FAV, REMOVE_FAV } from "./actions";

let initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload],
            }
        case REMOVE_FAV:
            let filteredFavorites = [...state.myFavorites].filter((character) => character.id !== parseInt(action.payload))
            return {
                ...state,
                myFavorites: filteredFavorites
            }
        default:
            return {...state}
    }
}

export default reducer;