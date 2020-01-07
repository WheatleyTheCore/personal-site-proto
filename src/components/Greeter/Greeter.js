import React from 'react'
import Typography from '@material-ui/core/Typography'
import './Greeter.css'

let Greeter = () => {
    return (
        <div className="greeter-container">
            <Typography className="greet" variant="h1">
                Hi, I'm Alex
            </Typography>
        </div>
    )
}

export default Greeter