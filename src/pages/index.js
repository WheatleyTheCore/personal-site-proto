import React from "react"
import { Link } from "gatsby"
import Greeter from '../components/Greeter/Greeter'

let IndexPage = () => {
    return (
        <div>  
            <Greeter />
            <Link to="/link/">linkky page</Link>
            <h1>adshfkashdfjhsgdkjfgsadfgaksjdgfjksadgfjagsdfjkgasdjkfgasjkdhgfjkasdgfjshgdfjksagdjfkhgasdjkfgsajkdhfgjksadgfjksgdfjkasgdfkjhsgdfkjasgdfkajshgdfkjashgdfkajhsgdfkjahgsdfkjhagsdkfjgskjfgsjkgfjkasgfjksdghf</h1>
        </div>
     
    )
}

export default IndexPage