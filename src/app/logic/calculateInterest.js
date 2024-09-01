
/*
Principal loan amount x Interest rate x Loan term in years = Interest.
*/

export default function calculateInterest(principal, interestRate, loanTerm) {
    return principal*(interestRate/100)*loanTerm
}