import { useContext } from "react";
import { GlobalContext } from "./../Context/globalState";
export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += parseInt(item)), 0).toFixed(2);
    console.log(total);
    return <div>
        <h4>Your Balance</h4>
        <h1 id="balance">$0.00</h1>
    </div>
}