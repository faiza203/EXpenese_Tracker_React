import React, { createContext, useReducer } from "react";
const initialState = {
    transactions: [
        { id: 1, amount: "200", text: "flower" },
        { id: 2, amount: "-20", text: "pen" }
    ]
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    return (<GlobalContext.Provider value={{ transactions: state.transactions }}>{children}</GlobalContext.Provider>)
}