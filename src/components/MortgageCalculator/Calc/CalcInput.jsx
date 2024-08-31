import React from 'react';
import Field from '@/components/Form/Field';
import Radials from '@/components/Form/Radials';
import "../../MortgageCalculator/style.scss";


const CalcInput = ({ handleReset,  ...props}) => {

    const clearAll = () => {
        console.log("cleared");
        handleReset()
        
    }
    

    return (
        <div className="Parent LeftBox">
            <div className='form-row d-flex'>
                <h3 className='col mx-4'>Mortgage Calculator</h3>

                <input className='ClearAll col mx-4' type="reset" value="Clear All"/>
            </div>

            <Field id="MortgageAmount" 
                label="Mortgage Amount" 
                type="number"
                invalidFeedback="This field is required"
                adornment="$"
                adornmentPrepend
                className="mx-4"
                />

            <div className='form-row d-flex'>
                <Field id="MortgageTerm" 
                    label="Mortgage Term" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="years"
                    className="col mx-4"
                    />
                
                <Field id="InterestRate" 
                    label="Interest Rate" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="%"
                    className="col mx-4"

                    />
            </div>


            <div className='mx-4'>
                <label>Mortgage Type</label>
                <Radials id="operation" options={["Repayment","Interest Only"]} />
            </div>

            <button type="submit" className="btn btn-primary mx-4">Calculate Repayments</button>
        </div>
    )
}

export default CalcInput;