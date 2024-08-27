import React from 'react';
import "../../MortgageCalculator/style.scss";


const CalcInput = ({...props}) => {

    const clearAll = () => {
        console.log("cleared");
        
        
    }


    return (
        <div className="Parent LeftBox">
            <h3>Mortgage Calculator</h3>
            <span onClick={clearAll} className='ClearAll'>Clear All</span>

            <div>
                <label>Mortgage Amount</label>
                <input type='number'/>
            </div>

            <fieldset>
                <div>
                    <label>Mortgage Term</label>
                    <input type='number'/>
                </div>

                <div>
                    <label>Interest Rate</label>
                    <input type='number'/>
                </div>
            </fieldset>

            <div>
                <label>Mortgage Type</label>
                <div>
                    <label>Repayment</label>
                    <input type='radio'/>
                </div>
                <div>
                    <label>Interest Only</label>
                    <input type='radio'/>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Calculate Repayments</button>
        </div>
    )
}

export default CalcInput;