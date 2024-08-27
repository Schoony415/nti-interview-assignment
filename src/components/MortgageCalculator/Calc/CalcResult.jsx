import React, { useState } from 'react';
import "../../MortgageCalculator/style.scss";


const CalcResult = ({...props}) => {
    
    const [showResults, setShowResults] = useState(false)


    return (
        <div className="Parent RightBox">
        {showResults?<>
            <h3>Your results</h3>
            <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>

            <div className='TotalBox'>
                <span>Your monthly repayments</span>
                <h1>$1,23.45</h1>

                <hr/>

                <span>Total you'll repay over the term</span>
                <h4>$123,456.78</h4>
            </div>
        </>:<>         
            <span>put the image here</span>
            <h3>Results shown here</h3>
            <p>Complete the form and click "calculate repayments" to see what your monthly repayments would be.</p>

        </>}
        </div>
    )
}

export default CalcResult;