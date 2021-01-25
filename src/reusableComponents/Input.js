import React from 'react';
import './styling/Input.css'

const Input = ({cb, styling, type}) => {
    return (
        <input 
            className={styling}
            onChange={cb}
            type={type}
        />
    )
}

export default Input;