import React from 'react';
import Field from '@/components/Form/Field';
import Radials from '@/components/Form/Radials';
import "../../MortgageCalculator/style.scss";


const CalcInput = ({ handleReset,  ...props}) => {
    
    return (
        <div className="Parent LeftBox px-3 py-3"> 
            <div className='form-row d-flex'>
                <h3 className='col'>Mortgage Calculator</h3>
                <span className='ClearAll col' onClick={handleReset} type="reset">Clear All</span>
                {/* <input className='ClearAll col' type="reset" value="Clear All"/> */}
            </div>

            <Field id="MortgageAmount" 
                label="Mortgage Amount" 
                type="number"
                invalidFeedback="This field is required"
                adornment="$"
                adornmentPrepend
                className=""
                inputProps={{min:0, max:100000000, }}
                />

            <div className='form-row d-flex'>
                <Field id="MortgageTerm" 
                    label="Mortgage Term" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="years"
                    className="mr-2 col"
                    inputProps={{min:0, max:200, step:.1 }}
                    />
                
                <Field id="InterestRate" 
                    label="Interest Rate" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="%"
                    className="ml-2 col"
                    inputProps={{min:-100.00, max:200.00, step:.01}}
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