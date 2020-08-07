import React from 'react';
import AddTransaction from './accountBalanceApp/AddTrasaction';
import Balance from './accountBalanceApp/Balance';
import CreditAndDebit from './accountBalanceApp/CreditAndDebit';
import Header from './components/Header';
import TransactionList from './accountBalanceApp/TransactionList';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <CreditAndDebit />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
