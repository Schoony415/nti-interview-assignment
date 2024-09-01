import React, {useState} from 'react';
import "./Field.scss"

const Field = ({ id, label, type, children, invalidFeedback, adornmentPrepend, adornment, className, inputProps, invalid, ...props}) => {

    const checkInvalid = () => {return invalid?"Invalid":""}

    const addAdornment = (input) => (
        <div  className='input-group'>

        {adornmentPrepend &&(
            <div className='input-group-prepend' >
                <span className='input-group-text Only-Rounded-Left border-slate-500 bg-slate-100 text-3 text-slate-700'>{adornment}</span>
            </div>
        )}

        {input}

        {!adornmentPrepend &&( 
            <div className='input-group-append'>      
                <span className='input-group-text Only-Rounded-Right border-slate-500 bg-slate-100 text-3 text-slate-700'>{adornment}</span>
            </div>
        )}        
        </div>
    )


    return (<div className={"mb-3 form-control-parent "+className+" "+checkInvalid()} {...props}>
        <label className="form-label text-4 text-slate-700" htmlFor={id}>{label}</label>
        
        {adornment?
        addAdornment(
            <input className="form-control border-slate-500 text-3 text-slate-900" id={id} type={type} name={id} {...inputProps}/>
        ):
            <input className={"form-control border-slate-500 text-3 text-slate-900"} id={id} type={type} name={id} {...inputProps}/>        
        }
        
        {invalidFeedback && invalid && <div className='text-red text-5'>{invalidFeedback}</div>}
        {children && <div className="form-text">{children}</div>}
    </div>)
}

export default Field