import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const CreditAndDebit = () => {
    // React technique of helping me to write short code
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount);

    const credit = amounts
        .filter(item => item > 0)
        .reduce((credit, item) => (credit += item), 0)
        .toFixed(2);
    
    const debit = (
        amounts
            .filter(item => item < 0)
            .reduce((debit, amount) => ( debit += amount), 0)
            * -1
        ).toFixed(2);

        
    // const amounts = transactions.map(transaction => transaction.amount);

    const total = amounts.reduce((total, item) => (total += item), 0).toFixed(2);
    

    return(
        <>
            <h4>Balance</h4>
            <h1>₦ {total}</h1>
        <div className="credit-debit-container">
            <div>
                <h4>Credit</h4>
                <p className="fund plus">{credit}</p>
            </div>
            <div>
                <h4>Debit</h4>
                <p className="fund minus">{debit}</p>
            </div>
        </div>
        </>
    )
}

export default CreditAndDebit;