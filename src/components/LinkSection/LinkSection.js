import React from 'react'
import LinkItem from "../LinkItem/LinkItem"
import './LinkSection.css'

let LinkSection = () => {
    return (
        <div className="LinkSectionContainer">
            <LinkItem to="link" text="Stuff I've done" />
        </div>
    )
}

export default LinkSection