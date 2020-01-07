import React from 'react'
import './Header.css'

let Header = (props) => {
    return (
    <h1 className="header">{props.text}</h1>
    )
}

export default Header