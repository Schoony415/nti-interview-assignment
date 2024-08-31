import React from 'react';
import "./Field.scss"

const Field = ({ id, label, type, children, invalidFeedback, adornmentPrepend, adornment, className, ...props}) => {
//devnote: this tosses an error about the for on label, but the bootstrap documents say to use it

    return (<div className={"mb-3 "+className} {...props}>
        <label className="form-label" htmlFor={id}>{label}</label>
        {
            adornment?
            adornmentPrepend?
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text'>{adornment}</div>
                </div> 
                <input className="form-control" id={id} type={type} name={id}/>        
            </div>
            :
            <div className='input-group'>
                <input className="form-control" id={id} type={type} name={id}/>  
                <div className='input-group-append'>      
                    <div className='input-group-text'>{adornment}</div>
                </div>
            </div>
            :
            <input className="form-control" id={id} type={type} name={id} />
        }
        {invalidFeedback&&<div className='invalid-feedback'>{invalidFeedback}</div>}
        {children&&<div className="form-text">{children}</div>}
    </div>)
}

export default Field