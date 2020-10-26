import {IncomeExpenses} from "./IncomeExpenses";
import {TransactionList} from "./TransactionList"
export const Container = () => {
    return <div id="container">  <h4>Your Balance</h4>
        <h1 id="balance">$0.00</h1>
        <IncomeExpenses />
        <TransactionList />
    </div>
  }
  