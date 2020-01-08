import React from 'react'
import { Link } from 'gatsby'
import './LinkItem.css'

let LinkItem = (props) => {
    let linkTo = `/${props.to}/`
    return (
        <div className="LinkItemContainer">
            <Link to={linkTo}>
                {props.text}
            </Link>
         </div>
    )
}

export default LinkItem