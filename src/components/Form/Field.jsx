import React from 'react';
import "./Field.scss"

const Field = ({ id, label, type, children, invalidFeedback, adornmentPrepend, adornment, className, inputProps, ...props}) => {

    const addAdornment = (input) => (
        <div className={'input-group'}>

        {adornmentPrepend &&(
            <div className='input-group-prepend'>
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


    return (<div className={"mb-3 "+className} {...props}>
        <label className="form-label text-4 text-slate-700" htmlFor={id}>{label}</label>
        
        {adornment?
        addAdornment(
            <input className="form-control border-slate-500 text-3 text-slate-900" id={id} type={type} name={id} {...inputProps}/>
        ):
            <input className={"form-control border-slate-500 text-3 text-slate-900"} id={id} type={type} name={id} {...inputProps}/>        
        }
        
        {invalidFeedback && <div className='invalid-feedback'>{invalidFeedback}</div>}
        {children && <div className="form-text">{children}</div>}
    </div>)
}

export default Field