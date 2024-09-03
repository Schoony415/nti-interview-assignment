import React from 'react';
import "../../MortgageCalculator/style.scss";
import roundTwoDecimal from '@/app/numberFormat/roundTwoDecimal';
import formatNumber from '@/app/numberFormat/formatNumber';

const CalcResult = ({mortgagePayments, repaymentAmount, interest, ...props}) => {

    return (
        <div className="Parent RightBox col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 px-4 py-3 bg-slate-900 text-slate-300">
        <div>
        { mortgagePayments && !interest && <>
            <h3 className="text-white text-2">Your results</h3>
            <p className='text-4'>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

            <div className='TotalBox px-4 py-4 rounded-2'>
                <p className='text-4'>Your monthly repayments</p>
                <h1 className='text-lime text-1'>${formatNumber(roundTwoDecimal(mortgagePayments))}</h1>

                <hr className='mx-3 '/>

                <p className='text-4'>Total you'll repay over the term</p>
                <h4 className='text-white text-2'>${formatNumber(roundTwoDecimal(repaymentAmount))}</h4>
            </div>
        </> }

        { !mortgagePayments && interest && <>
            <p className='text-white text-2 text-center'>${formatNumber(roundTwoDecimal(interest))}</p>
            <p className='text-center text-4'>NOTE: This screen was never designed</p>
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