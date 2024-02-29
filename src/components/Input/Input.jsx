import React from 'react'
import "./Input.scss"


export default function Input(props) {
    const { className, htmlFor, type, id, text, value, onChange, disabled, onSubmit, autocomplete } = props;
    return (
       <div className={className}>
        <label htmlFor={htmlFor}>{text}</label>
        <input type={type} id={id} value={value} onChange={onChange} disabled={disabled} onSubmit={onSubmit} autoComplete={autocomplete}/>
       </div> 
    )
}
