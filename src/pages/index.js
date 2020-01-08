import React from "react"
import { Link } from "gatsby"
import Greeter from '../components/Greeter/Greeter'
import LinkSection from '../components/LinkSection/LinkSection'

let IndexPage = () => {
    return (
        <div>  
            <Greeter />
            <LinkSection />
        </div>
     
    )
}

export default IndexPage