import React, { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
const initialState = {
    transactions: [
        { id: 1, amount: "200", text: "flower" },
        { id: 2, amount: "-20", text: "pen" }
    ]
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState);
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }
    function addTransaction(transaction) {
        dispatch({
            type: "Add_TRANSACTION",
            payload: transaction,
        })
    }
    return (<GlobalContext.Provider value={
        { transactions: state.transactions, deleteTransaction }
    }>
        {children}
    </GlobalContext.Provider>)
}