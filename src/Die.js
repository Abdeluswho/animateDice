import React from 'react';
import './Die.css'


const Die = (props) => {
    return (
        <div>
            <i className = {`die fas fa-dice-${props.face}`}></i>
        </div>
    )
}

export default Die