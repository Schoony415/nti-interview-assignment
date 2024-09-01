import React from 'react';
import "./Field.scss"

const Field = ({ id, label, type, children, invalidFeedback, adornmentPrepend, adornment, className, inputProps, ...props}) => {

    const addAdornment = (input) => (
        <div className='input-group'>

        {adornmentPrepend &&(
            <div className='input-group-prepend'>
                <div className='input-group-text'>{adornment}</div>
            </div>
        )}

        {input}

        {!adornmentPrepend &&( 
            <div className='input-group-append'>      
                <div className='input-group-text'>{adornment}</div>
            </div>
        )}        
        </div>
    )


    return (<div className={"mb-3 "+className} {...props}>
        <label className="form-label" htmlFor={id}>{label}</label>
        
        {adornment?
        addAdornment(
            <input className="form-control" id={id} type={type} name={id} {...inputProps}/>
        ):
            <input className="form-control" id={id} type={type} name={id} {...inputProps}/>        
        }
        
        {invalidFeedback && <div className='invalid-feedback'>{invalidFeedback}</div>}
        {children && <div className="form-text">{children}</div>}
    </div>)
}

export default Field