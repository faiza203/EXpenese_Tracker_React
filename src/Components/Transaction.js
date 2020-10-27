import {useContext} from "react";
import { GlobalContext } from "../Context/globalState";
export const Transaction = ({ transaction }) => {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";
    const transactionClassName = transaction.amount > 0 ? "plus" : "minus";
    return <li className={transactionClassName}>
        {transaction.text} <span>{sign} $ {Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
    </li>
}