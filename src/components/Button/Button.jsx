import React from 'react'
import "./Button.scss"

function Button(props) {
    const {className, text, onSubmit, type} = props
  return (
    <button type={type} className={className} onSubmit={onSubmit}>{text}</button>
  )
}

export default Button