import React from 'react';

class LoanForm extends React.Component {
    state = {
        amount: '',
        term: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // destructuring of the State 
        const {amount, term} = this.state;

        // just pass these two values up to the Parent component
        this.props.loanDetails(amount, term);
    } 

    handleChange = (event) => {
        // make it easier to read the form data 
        const {name, value} = event.target;

        // update the State everytime the User update the form field 
        this.setState({
           [name] : Number(value)  
        });

    }

    // Pay close attention to how this method was called differ to how others were called 
    validateForm = () => {
        // object destructuting 
        const { amount, term } = this.state;

        // Empty form field is not accepted for the tw0 fields
        const notValid = amount === '' || term === '';

        return notValid;
    }

    
    
    
    
    render() {
        return(
            <React.Fragment>
                <h3 style={{textAlign: 'center'}}>Required Fields *</h3>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Amount to Borrow (₦) *</label>
                        <input 
                            onChange={this.handleChange}
                            id="name"
                            name="amount"
                            className="u-full-width"
                            type="number"
                            placeholder="How much do you want to Borrow?" />
                    </div>
                    <div>
                        <label>Months to Repay *</label>
                        <select
                            onChange={this.handleChange}
                            name="term"
                            className="u-full-width">
                                <option value="">Select Payment Term</option>
                                <option value="3">3 Months</option>
                                <option value="6">6 Months</option>
                                <option value="12">12 Months</option>
                                <option value="24">24 Months</option>
                        </select>
                    </div>
                    <div>
                    <button
                        disabled={this.validateForm()}  
                        className="btn">Calculate Amount to Refund</button>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}


export default LoanForm;