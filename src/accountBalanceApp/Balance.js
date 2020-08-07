import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function Balance() {
    // React technique of helping me to write short code
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((total, item) => (total += item), 0).toFixed(2);

    return( 
        <>
            <h4>Balance</h4>
            <h1>₦{total}</h1>
        </>
     )
}

export default Balance;