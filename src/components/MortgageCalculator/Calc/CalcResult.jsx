import React from 'react';
import "../../MortgageCalculator/style.scss";


const CalcResult = ({...props}) => {

    return (
        <div className="Parent RightBox">
            <h3>Your results</h3>
            <p>Your results are shown below based on teh information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

            <div className='TotalBox'>
                <span>Your monthly repayments</span>
                <h1>$1,23.45</h1>

                <hr/>

                <span>Total you'll repay over the term</span>
                <h4>$123,456.78</h4>
            </div>
        </div>
    )
}

export default CalcResult;