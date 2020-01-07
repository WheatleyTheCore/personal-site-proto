import React from "react"
import { Link } from "gatsby"
import Header from '../components/Header/Header'

let IndexPage = () => {
    return (
        <div>  
            <Header text="Hello Friend, I'm Alex"/>
            <Link to="/link/">linkky page</Link>
        </div>
     
    )
}

export default IndexPage