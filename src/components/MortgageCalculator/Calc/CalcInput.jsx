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
        <div className="Parent LeftBox px-3 py-3"> 
            <div className='form-row d-flex'>
                <h3 className='col'>Mortgage Calculator</h3>

                <input className='ClearAll col' type="reset" value="Clear All"/>
            </div>

            <Field id="MortgageAmount" 
                label="Mortgage Amount" 
                type="number"
                invalidFeedback="This field is required"
                adornment="$"
                adornmentPrepend
                className=""
                />

            <div className='form-row d-flex'>
                <Field id="MortgageTerm" 
                    label="Mortgage Term" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="years"
                    className="col mr-2"
                    />
                
                <Field id="InterestRate" 
                    label="Interest Rate" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="%"
                    className="col ml-2"

                    />
            </div>


            <div className=''>
                <label>Mortgage Type</label>
                <Radials id="operation" options={["Repayment","Interest Only"]} />
            </div>

            <button type="submit" className="btn btn-primary">Calculate Repayments</button>
        </div>
    )
}

export default CalcInput;