import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('');
    const [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000000 ),
            text,
            amount: status === 'credit' ? +amount : +(-amount)
        }

        addTransaction(newTransaction);
        alert('Transaction Details Updated');
        setText('');
        setStatus('');
        setAmount('');
    }



    return ( 
        <>
            <h3>Add new transaction</h3>
            <form
                onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Title</label>
                    <input type="text" value={text} onChange={ (e) => setText(e.target.value) } placeholder="Transaction Title..." />
                </div>

                <div className="form-control">
                    <label htmlFor="status">Status</label>
                    <select value={status}
                    onChange={ 
                        (e) => setStatus(e.target.value) } name="status">
                        <option value="">--Please Select Transaction Status--</option>
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" value={amount} 
                        onChange={ (e) => setAmount(e.target.value) } 
                        placeholder="Transaction Amount..." />
                </div>

                <button className="btn">Add transaction</button>
            </form>
        </>
    )

}


export default AddTransaction;