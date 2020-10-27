export const Transaction = ({ transaction }) => {
    const sign = transaction.amount > 0 ? "-" : "+";
    const transactionClassName = transaction.amount > 0 ? "minus" : "plus";
    return <li className={transactionClassName}>
        {transaction.text} <span>{sign} $ {Math.abs(transaction.amount)}</span><button className="delete-btn">x</button>
    </li>
}