import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import BalanceSheet_App from './accountBalanceApp/BalanceSheet_App';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Loan_App from './mortageLoanApp/Loan_App';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <Router>
      
        <Header />

          <Route exact path="/" render={props => (
            <LandingPage />
          )} />
          <Route path="/balance_sheet" component={BalanceSheet_App} />
          <Route path="/loan" component={Loan_App} />
       
    </Router>
  );
}

export default App;
