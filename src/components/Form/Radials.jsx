 import React from 'react'

 const Radials = ({ id, options, ...props}) => {

    return (<>    
    {options.map((option,index)=>(
    <div key={"div"+id+index} className="form-check" {...props}>
        <input key={"input"+id+index} className="form-check-input" type="radio" id={""+id+index} name={id} value={option} />
        <label key={"label"+id+index} className="form-check-label" htmlFor={""+id+index} >{option}</label>
    </div>
    ))}
    </>)

}

 export default Radials