import { useContext } from "react";
import { GlobalContext } from "./../Context/globalState";
import { Transaction } from "./transaction"
export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return <div>
        <h3>History</h3>
        <ul id="list" className="list">
            {transactions.map(transaction => {
              return <Transaction key={transaction.id} transaction={transaction} />
            })}
        </ul>
    </div>
}