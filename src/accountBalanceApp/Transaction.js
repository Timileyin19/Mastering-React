import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? '+' : '-';

    return ( 
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text} <span>{sign} ₦{Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>

        </li>
    )
}

export default Transaction;