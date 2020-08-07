import React, { useContext } from 'react';
import Transaction from './Transaction';


import { GlobalContext } from '../context/GlobalState';

function TransactionList() {
    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>Transaction Details</h3>
            <ul className="list">
                { transactions.map(transaction => 
                    (<Transaction key={transaction.id} transaction={transaction} />)) 
                }

            </ul>
        </>
    )
}



export default TransactionList;