import React from 'react'
import "./Input.scss"


export default function Input(props) {
    const { className, htmlFor, type, id, text, value, onChange } = props;
    return (
       <div className={className}>
        <label htmlFor={htmlFor}>{text}</label>
        <input type={type} id={id} value={value} onChange={onChange} />
       </div> 
    )
}
