import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList"
import { AddNewTransaction } from "./AddNewTransaction";
import { Balance } from "./Balance"
export const Container = () => {
    return <div id="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddNewTransaction />
    </div>
}
