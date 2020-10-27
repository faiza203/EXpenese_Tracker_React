import{ useState} from "react";
export const AddNewTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    return <div>
        <h3>Add new transaction</h3>
        <form id="form">
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" id="text" value={text} placeholder="Enter text..." onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="amount"
                >Amount <br />
          (negative - expense, positive - income)</label
                >
                <input type="number" value={amount}  onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </div>
}