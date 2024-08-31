import React from 'react';
import "./Field.scss"

const Field = ({ id, label, type, children, adornmentPrepend, adornment, ...props}) => {
//devnote: it tosses an error about the for on label, but the bootstrap documents say to use it

    return (<div className="mb-3" {...props}>
        <label className="form-label" for={id}>{label}</label>
        {
            adornment?
            adornmentPrepend?
            <div className='input-group'>
                <div className='input-group-prepent'>
                    <div className='input-group-text'>{adornment}</div>
                </div> 
                <input className="form-control" id={id} type={type}/>        
            </div>
            :
            <div className='input-group'>
                <input className="form-control" id={id} type={type}/>  
                <div className='input-group-append'>      
                    <div className='input-group-text'>{adornment}</div>
                </div>
            </div>
            :
            <input className="form-control" id={id} type={type}/>
        }
        {children&&<div className="form-text">{children}</div>}
    </div>)
}

export default Field