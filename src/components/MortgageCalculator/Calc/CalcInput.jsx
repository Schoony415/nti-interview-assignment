import React from 'react';
import Field from '@/components/Form/Field';
import Radios from '@/components/Form/Radios';
import formatNumber from '@/app/numberFormat/formatNumber';
import removeComma from '@/app/numberFormat/removeComma';
import "../../MortgageCalculator/style.scss";


const CalcInput = ({ handleReset, errorList, ...props}) => {
    
    return (
        <div className="Parent LeftBox col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 px-3 py-3"> 
            <div className='form-row d-flex align-items-center mb-3'>
                <h3 className='col-9 text-2 text-slate-900'>Mortgage Calculator</h3>
                <span className='ClearAll col-3 text-end text-4 text-slate-700' onClick={handleReset} type="reset">Clear All</span>
                {/* <input className='ClearAll col' type="reset" value="Clear All"/> */}
            </div>

            <Field id="MortgageAmount" 
                label="Mortgage Amount" 
                type="text"
                invalidFeedback="This field is required"
                adornment="$"
                adornmentPrepend
                className=""
                inputProps={{min:0, max:100000000, required:true, 
                    onChange:(e)=>{
                        // adding the comma's into the input as a user is typing means we have to change the input to text, and then work around the commas
                        let tempVal = e.target.value
                        // short circuit if trying to enter a decimal
                        if(tempVal.slice(-1)=="."){return;}

                        tempVal = removeComma(tempVal)
                        // if we don't have a number, let it be
                        if(isNaN(Number(tempVal))){return;}
                        // happy path
                        tempVal = formatNumber(Number(tempVal))
                        e.target.value = tempVal;
                    },
                    
                }}
                invalid = {errorList.includes("MortgageAmount")}
                />

            <div className='form-row d-flex'>
                <Field id="MortgageTerm" 
                    label="Mortgage Term" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="years"
                    className="col"
                    inputProps={{min:0, max:200, step:.1 }}
                    style={{marginRight:"0.5rem", required:true}} //mr-2 wasn't working
                    invalid = {errorList.includes("MortgageTerm")}
                    />
                
                <Field id="InterestRate" 
                    label="Interest Rate" 
                    type="number"
                    invalidFeedback="This field is required"
                    adornment="%"
                    className="col"
                    inputProps={{min:-100.00, max:200.00, step:.01}}
                    style={{marginLeft:"0.5rem", required:true}} //ml-2 wasn't working
                    invalid = {errorList.includes("InterestRate")}
                    />
            </div>

            <Radios id="operation"
                label="Mortgage Type" 
                options={["Repayment","Interest Only"]} 
                invalidFeedback="This field is required"
                invalid = {errorList.includes("operation")}
                />
            
            <button type="submit" className="btn btn-primary rounded-5 bg-lime text-slate-900 text-3 py-2 px-3 my-4 border-0">
                <img src='images/icon-calculator.svg' className='my-auto mx-2 d-inline' style={{width:"1.5rem", height:"1.5rem"}} alt='icon'/>
                Calculate Repayments
                </button>
        </div>
    )
}

export default CalcInput;