import React from 'react';
import Field from '@/components/Form/Field';
import Radials from '@/components/Form/Radials';
import "../../MortgageCalculator/style.scss";


const CalcInput = ({ handleSubmit, ...props}) => {

    const clearAll = () => {
        console.log("cleared");
        
        
    }
    

    return (
        <div className="Parent LeftBox">
            <h3>Mortgage Calculator</h3>
            <span onClick={clearAll} className='ClearAll'>Clear All</span>

            <Field id="MortgageAmount" 
                label="Mortgage Amount" 
                type="number"
                adornment="$"
                adornmentPrepend
                />


            <fieldset>
                <Field id="MortgageTerm" 
                    label="Mortgage Term" 
                    type="number"
                    adornment="years"
                    />
                
                <Field id="InterestRate" 
                    label="Interest Rate" 
                    type="number"
                    adornment="%"
                    />
            </fieldset>


            <div>
                <label>Mortgage Type</label>
                <Radials id="operation" options={["Repayment","Interest Only"]} />
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Calculate Repayments</button>
        </div>
    )
}

export default CalcInput;