import React from 'react';
import './styling/Button.css';

const Button = ({label, cb}) => {
    return (
        <button onClick={cb}>{label}</button>
    )
}

export default Button;