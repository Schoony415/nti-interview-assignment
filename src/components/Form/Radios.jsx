import React, {useState} from 'react'
import "./Radios.scss"

 const Radios = ({ id, label, options, invalidFeedback, invalid, ...props}) => {

    const [active, setActive] = useState(null);

    const changeActive = (index) => {
        setActive(index)
    }

    const isActive = (index) => {
        return (index==active)?"Active":""
    }

    const checkInvalid = () => {return invalid?"Invalid":""}


    return (
    <div className={'mb-3 '+ checkInvalid()}>
        <label className='text-4 text-slate-700'>Mortgage Type</label>
        
        {options.map((option,index)=>(
            <div key={"div"+id+index} className={"form-check px-5 py-2 my-2 border border-slate-500 rounded-1 "+isActive(index)} {...props}>
                <input onChange={()=>changeActive(index)} key={"input"+id+index} className={"form-check-input border-slate-700 "+isActive(index)} type="radio" id={""+id+index} name={id} value={option} />
                <label key={"label"+id+index} className={"form-check-label text-3 text-slate-900 "+isActive(index)} htmlFor={""+id+index} >{option}</label>
            </div>
        ))}

        {invalidFeedback && invalid && <div className='text-red text-5'>{invalidFeedback}</div>}
    </div>)

}

 export default Radios