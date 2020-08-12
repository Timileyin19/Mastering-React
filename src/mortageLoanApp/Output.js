import React from 'react';

const Output = (props) => {
    return (
        <div className="u-full-width output">
            <h2>Loan Estimated Details: </h2>
            <p>The Loan Amount: ₦ {props.amount} </p>
            <p>Months to Repay: {props.term} Months </p>
            <p>Total Payment: ₦ {(props.totalAmountToRefund)} </p>
            <p>Monthly Payment: ₦ { (props.totalAmountToRefund / props.term ).toFixed(2) } </p>
        </div>
    )

}

export default Output;