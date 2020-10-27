import {useContext} from "react";
import {GlobalContext} from "./../Context/globalState"
export const TransactionList = () => {
    const context = useContext(GlobalContext);
    console.log(context);
    return <div>
    <h3>History</h3>
        <ul id="list" className="list">
            <li className="minus">
                Cash <span>-$400</span><button className="delete-btn">x</button>
            </li>
        </ul>
    </div>
}