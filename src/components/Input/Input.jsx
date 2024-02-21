import React from 'react'
import PropTypes from "prop-types";
import "./Input.scss"


export default function Input(props) {
    const { className, htmlFor, type, id, text } = props;
    return (
       <div className={className}>
        <label htmlFor={htmlFor}>{text}</label>
        <input type={type} id={id}/>
       </div> 
    )
}