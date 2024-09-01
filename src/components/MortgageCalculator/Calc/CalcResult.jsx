import React from 'react';
import "../../MortgageCalculator/style.scss";


const CalcResult = ({mortgagePayments, repaymentAmount, interest, ...props}) => {
    
    const roundTwoDecimal = (num) => {
        return Math.round(num*100)/100
    }

    return (
        <div className="Parent RightBox px-3 py-3 bg-slate-900 text-slate-300">
        { mortgagePayments && !interest && <>
            <h3 className="text-white">Your results</h3>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

            <div className='TotalBox px-4 py-4 rounded-2'>
                <span>Your monthly repayments</span>
                <h1 className='text-lime text-preset-4'>${roundTwoDecimal(mortgagePayments)}</h1>

                <hr className='mx-3 '/>

                <span>Total you'll repay over the term</span>
                <h4 className='text-white'>${roundTwoDecimal(repaymentAmount)}</h4>
            </div>
        </> }

        { !mortgagePayments && interest && <>
            <span>${roundTwoDecimal(interest)}</span>
            <p>NOTE: This screen is never given</p>
        </> }

        { !mortgagePayments && !interest && <>         
            <span>put the image here using bootstrap figure?</span>
            <h3>Results shown here</h3>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>

        </>}

        </div>
    )
}

export default CalcResult;