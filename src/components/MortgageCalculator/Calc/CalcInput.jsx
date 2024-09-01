import React from 'react';
import Field from '@/components/Form/Field';
import Radios from '@/components/Form/Radios';
import "../../MortgageCalculator/style.scss";


const CalcInput = ({ handleReset,  ...props}) => {
    
    return (
        <div className="Parent LeftBox px-3 py-3"> 
            <div className='form-row d-flex align-items-center mb-3'>
                <h3 className='col-9 text-2 text-slate-900'>Mortgage Calculator</h3>
                <span className='ClearAll col-3 text-end text-4 text-slate-700' onClick={handleReset} type="reset">Clear All</span>
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
                    className="col"
                    inputProps={{min:0, max:200, step:.1 }}
                    style={{marginRight:"0.5rem"}} //mr-2 wasn't working
                    />
                
                <Field id="InterestRate" 
                    label="Interest Rate" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="%"
                    className="col"
                    inputProps={{min:-100.00, max:200.00, step:.01}}
                    style={{marginLeft:"0.5rem"}} //ml-2 wasn't working
                    />
            </div>


            <div className=''>
                <label className='text-4 text-slate-700'>Mortgage Type</label>
                <Radios id="operation" options={["Repayment","Interest Only"]} />
            </div>

            <button type="submit" className="btn btn-primary rounded-5 bg-lime text-slate-900 text-3 py-2 px-3 border-0">
                <img src='images/icon-calculator.svg' className='my-auto mx-2 d-inline' style={{width:"1.5rem", height:"1.5rem"}} alt='icon'/>
                Calculate Repayments
                </button>
        </div>
    )
}

export default CalcInput;