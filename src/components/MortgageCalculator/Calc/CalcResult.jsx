import React from 'react';
import "../../MortgageCalculator/style.scss";


const CalcResult = ({mortgagePayments, repaymentAmount, interest, ...props}) => {
    
    const roundTwoDecimal = (num) => {
        return Math.round(num*100)/100
    }

    return (
        <div className="Parent RightBox px-4 py-3 bg-slate-900 text-slate-300">
        <div>
        { mortgagePayments && !interest && <>
            <h3 className="text-white text-2">Your results</h3>
            <p className='text-4'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

            <div className='TotalBox px-4 py-4 rounded-2'>
                <p className='text-4'>Your monthly repayments</p>
                <h1 className='text-lime text-1'>${roundTwoDecimal(mortgagePayments)}</h1>

                <hr className='mx-3 '/>

                <p className='text-4'>Total you'll repay over the term</p>
                <h4 className='text-white text-2'>${roundTwoDecimal(repaymentAmount)}</h4>
            </div>
        </> }

        { !mortgagePayments && interest && <>
            <p className='text-white text-2 text-center'>${roundTwoDecimal(interest)}</p>
            <p className='text-center text-4'>NOTE: This screen is never given</p>
        </> }

        { !mortgagePayments && !interest && <>         
            <img src='images/illustration-empty.svg' className='mx-auto d-block' alt='illustration-empty'/>
            <h3 className='text-2 text-center text-white'>Results shown here</h3>
            <p className='text-4 text-center'>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>

        </>}
        </div>
        </div>
    )
}

export default CalcResult;