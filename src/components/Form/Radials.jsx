 import React from 'react'

 const Radials = ({ id, options, ...props}) => {

    return (<>    
    {options.map((option,index)=>(
    <div key={"div"+id+index} className="form-check px-5 py-2 my-2 border border-slate-500 rounded-1  " {...props}>
        <input key={"input"+id+index} className="form-check-input border-slate-700" type="radio" id={""+id+index} name={id} value={option} />
        <label key={"label"+id+index} className="form-check-label text-3 text-slate-900" htmlFor={""+id+index} >{option}</label>
    </div>
    ))}
    </>)

}

 export default Radials