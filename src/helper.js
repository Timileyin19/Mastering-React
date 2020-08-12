export function estimateTotal(amount, term) {

    // Estimate the fixedInterest price based on the Amount
    // 0 - 100000 = 25%
    // 100001 - 500000 = 20%
    // 500001 - 1000000 = 15%
    // +1000000 = 10%

    let fixedInterest; 

    if (amount > 0 && amount < 100001) {
        fixedInterest = amount * 0.25;
    } else if(amount >= 100001 && amount < 500001) {
        fixedInterest = amount * 0.20;
    } else if(amount >= 500001 && amount < 1000001) {
        fixedInterest = amount * 0.15;
    } else if (amount > 1000001) {
        fixedInterest = amount * 0.10; 
    } else {
        // the User enter a value that is less than zero
        alert('Please enter a valid amount');
    }

    // calculate the variableInterest base on how long the Borrower will pay the Loan 
    // the longer the time, the more the Interest the User will pay 
    // 3 months = 5%
    // 6  months = 10%
    // 12 months = 15%
    // 24 months = 20%

    let variableInterest;

    switch(term) {
        // NB: the term is in month 
        case 3: 
            variableInterest = amount * 0.05;
            break;
        
        case 6:
            variableInterest = amount * 0.01;
            break;

        case 12:
            variableInterest = amount * 0.15;
            break;

        case 24:
            variableInterest = amount * 0.2;
            break;

        default:
            break;
    }

    return amount + fixedInterest + variableInterest;
}