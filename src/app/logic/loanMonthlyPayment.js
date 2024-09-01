/*

The formula is: M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1], 
where M is the monthly payment, 
P is the loan amount, 
i is the interest rate (divided by 12) and 
n is the number of monthly payments. 

*/



export default function loanMonthlyPayment( loanAmount, interestRate, yearsRemaining){
    let monthlyInterest = interestRate / 100 / 12
    let monthlyPayments = yearsRemaining * 12

    let firstPart =  monthlyInterest * ((1 + monthlyInterest ) ** monthlyPayments)
    let secondPart = ((1 + monthlyInterest) ** monthlyPayments) - 1

    return loanAmount * firstPart / secondPart 
}