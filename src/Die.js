import React from 'react';
import './Die.css'


const Die = (props) => {
    return (
        <div >
            <i className = {`die fas fa-dice-${props.face} 
            ${props.rolling && 'rolling'}`}></i>
        </div>
    )
}

export default Die