//create a re-useable Card component
//that should output what's passed between the opening and closing tags off card
// using props.children
// As it is a custom component in order to know about the classes added on it
// we need to use template literals {`${props.className}`} to inject dinamically the classes


import React from 'react';
import classes from './Card.module.css'
 
const Card = (props) => {
    return (
        <div className={`${classes["card"]} ${props.className}`}>{props.children}</div>
    )
}

export default Card;