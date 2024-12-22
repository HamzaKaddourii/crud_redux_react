import { createStore } from "redux";

const initialState = {
    stagiaires: []
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_DATA":
        case "SEARCH_STG":
            return {
                ...state,
                stagiaires: action.payload
            };
        case "ADD_STG":
            return {
                ...state,
                stagiaires: [...state.stagiaires, action.payload]
            };
        case "DELETE_STG":
            return {
                ...state,
                stagiaires: state.stagiaires.filter(stg => stg.numero !== action.payload)
            };
        case "UPDATE_STG":
            return {
                ...state,
                stagiaires: state.stagiaires.map(stg => 
                    stg.numero === action.payload.numero ? action.payload : stg
                )
            };
        default:
            return state;
    }
}

export const store = createStore(reducer);
