import React from 'react';
import BalanceSheet_Header from './BalanceSheet_Header';
import Balance from './CreditAndDebit';
import CreditAndDebit from './CreditAndDebit';
import TransactionList from './TransactionList';
import AddTransaction from './AddTrasaction';

import {GlobalProvider} from '../context/GlobalState';

function BalanceSheet_App() {
    return(
        <GlobalProvider>
            <div style={bodyStyle}>
                <BalanceSheet_Header />
                <div className="container">
                    {/* <Balance /> */}
                    <CreditAndDebit />
                    <TransactionList />
                    <AddTransaction />
                </div>
            </div>
    </GlobalProvider>
    );
    

   
}

const bodyStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    margin: 0,
    fontFamily: 'sans-serif'
}


export default BalanceSheet_App;