import React, { Component, Fragment } from 'react';
import {estimateTotal} from '../helper';

// Compnents 
import LoanForm from './LoanForm';
import Spinner from '../components/Spinner';
import Output from './Output';
import Message from './Message';

// I decide to use class component 
class Loan_App extends Component {

    state = {
        totalAmountToRefund: '',
        amount: '',
        term: '',
        isLoading: false
    }


    loanDetails = (amount, term) => {
        const totalAmountToRefund = estimateTotal(amount, term);

        this.setState({
            isLoading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    amount,
                    totalAmountToRefund,
                    term,
                    isLoading: false
                })
            }, 3000);
        })
    }



    render() {
        // destructuring the State 
        const {term, amount, totalAmountToRefund, isLoading} = this.state;

        // conditionally render a component 
        let componentToRender;
        if (totalAmountToRefund === '' && !isLoading) {
            componentToRender = <Message />

        }
        else if (isLoading) {
            componentToRender = <Spinner />
        } else {
            componentToRender = <Output
                totalAmountToRefund={totalAmountToRefund}
                amount={amount}
                term={term} />
        }

        return (
            <Fragment>
                <h1 style={{ textAlign: 'center', marginTop: '12px' }}>Mortgage Loan Calculator</h1>
                <div className="container">
                    <LoanForm loanDetails={this.loanDetails} />

                    <div className="messages">
                        {componentToRender}
                    </div>
                </div>
            </Fragment>
        )
    }


}



export default Loan_App;