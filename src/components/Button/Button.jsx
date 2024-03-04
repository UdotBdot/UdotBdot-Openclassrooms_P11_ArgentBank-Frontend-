import React from 'react'
import "./Button.scss"

function Button(props) {
    const {className, text, onSubmit, type, onClick} = props
  return (
    <button type={type} className={className} onSubmit={onSubmit} onClick={onClick}>{text}</button>
  )
}

export default Button