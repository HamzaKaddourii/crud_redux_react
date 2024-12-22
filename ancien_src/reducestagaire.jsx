import { configureStore } from "@reduxjs/toolkit";

export const ADD_STG = "ADD_STG";
export const DELETE_STG = "DELETE_STG";
export const UPDATE_STG = "UPDATE_STG";

const initState = {
    stagiaires : [
        {numero : 1, nom : "issam" , filiere : "deve"},
        {numero : 2, nom : "hamza" , filiere : "gestion"},
    ],
}

export default function reducestagaire(state = initState , action ) {
 switch (action.type){
    case ADD_STG:
        console.log("action add it work");
    case DELETE_STG:
        return state;
    case UPDATE_STG:
        return state; 
    default :
        return state;  
 }
}


// le store 
export const store = configureStore(
    {
        reducer :reducestagaire ,
        // preloadedState : initState
});
// store.dispatch(()=>)
