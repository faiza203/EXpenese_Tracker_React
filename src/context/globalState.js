import React , {createContext , useReducer} from "react";
const initialState = {
    transaction : [
        {id : 1 , amount : "200" , text: "flower"},
        {id : 2 , amount : "-20" , text: "pen"}
    ]
};
export const globalContext = createContext(initialState);